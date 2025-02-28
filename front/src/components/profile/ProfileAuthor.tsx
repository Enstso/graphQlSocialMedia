import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import { useQuery } from "@apollo/client";
import { graphql } from "../../gql/gql";

const GET_PROFILE = graphql(`
  query GetProfile($username: String!) {
    getProfile(username: $username) {
      photo
      username
    }
  }
`);

type ProfileModalProps = {
  username: string;
};

export default function ProfileAuthorModal({ username }: ProfileModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { data, loading, error } = useQuery(GET_PROFILE, {
    variables: { username },
    skip: !isOpen, // Évite de lancer la requête avant ouverture
  });

  const profile = data?.getProfile; // Stocke la valeur pour éviter de répéter les vérifications

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        View Profile
      </button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)}></div>
        <div className="relative bg-white p-6 rounded-2xl shadow-xl max-w-sm w-full flex flex-col items-center">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>

          {loading ? (
            <p className="text-gray-500">Loading...</p>
          ) : error ? (
            <p className="text-red-500">Error loading profile</p>
          ) : profile ? ( // Vérification explicite ici
            <>
              <img src={profile.photo ?? ''} alt="Profile" className="w-24 h-24 rounded-full object-cover border-4 border-gray-300" />
              <h2 className="mt-4 text-xl font-semibold text-gray-900">{profile.username}</h2>
            </>
          ) : (
            <p className="text-gray-500">Profile not found</p> // Gestion du cas où `getProfile` est null
          )}
        </div>
      </Dialog>
    </>
  );
}
