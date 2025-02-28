import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";

type ProfileModalProps = {
  username: string;
  profilePic: string;
};

export default function ProfileAuthorModal({ username, profilePic }: ProfileModalProps) {
  const [isOpen, setIsOpen] = useState(false);

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
          <img src={profilePic} alt="Profile" className="w-24 h-24 rounded-full object-cover border-4 border-gray-300" />
          <h2 className="mt-4 text-xl font-semibold text-gray-900">{username}</h2>
        </div>
      </Dialog>
    </>
  );
}