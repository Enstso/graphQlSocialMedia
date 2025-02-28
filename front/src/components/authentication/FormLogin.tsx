import React from 'react';

interface FormLoginProps {
  error: string;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  handleLogin: () => void; // Ajout de handleLogin pour exécuter la connexion
  loading: boolean; // Ajout d'un état pour désactiver le bouton pendant la requête
}

const FormLogin: React.FC<FormLoginProps> = ({ error, setUsername, setPassword, handleLogin, loading }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Empêche le rechargement de la page lors de la soumission
    handleLogin(); // Exécute la connexion
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Connexion</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="username">
            Nom d'utilisateur
          </label>
          <input
            type="text"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700" htmlFor="password">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 disabled:bg-gray-400"
          disabled={loading} // Désactive le bouton si la requête est en cours
        >
          {loading ? "Connexion..." : "Se connecter"}
        </button>
      </form>
    </div>
  );
};

export default FormLogin;
