import React from 'react';


interface FormLoginProps {
  error: string;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
}

const FormLogin: React.FC<FormLoginProps> = ({ error, setUsername, setPassword }) => {
  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form  className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Connexion</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="username">Nom d'utilisateur</label>
          <input
            type="text"
            id="username"
            onChange={(e) => setUsername(e.target.value)} // Appel de setUsername
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700" htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)} // Appel de setPassword
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default FormLogin;
