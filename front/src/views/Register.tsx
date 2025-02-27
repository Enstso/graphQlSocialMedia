import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormRegister from '../components/authentication/FormRegister';

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      // Vérification simple des champs
      if (!username || !password) {
        setError("Tous les champs sont requis.");
        return;
      }
  
      // Stocker l'utilisateur dans localStorage (juste pour simuler une inscription)
      const users = JSON.parse(localStorage.getItem("users") || "[]");
  
      // Vérifier si l'utilisateur existe déjà
      const userExists = users.find((user: any) => user.username === username);
      if (userExists) {
        setError("Ce nom d'utilisateur est déjà pris.");
        return;
      }
  
      // Ajouter l'utilisateur
      users.push({ username, password });
      localStorage.setItem("users", JSON.stringify(users));
  
      alert("Inscription réussie ! Vous pouvez maintenant vous connecter.");
      navigate('/login'); // Redirection vers la connexion
    };
  
    return (
      <FormRegister 
        handleSubmit={handleSubmit} 
        setUsername={setUsername} 
        setPassword={setPassword} 
        error={error} 
      />
    );
  };
  
  export default Register;