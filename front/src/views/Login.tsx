import React, { useState } from 'react';
import FormLogin from '../components/authentication/FormLogin';
import { useNavigate } from 'react-router-dom'; // Si tu utilises React Router

export default function Login() {
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Pour la navigation après la connexion réussie


  return (
    <>
      <FormLogin  error={error} setUsername={setUsername} setPassword={setPassword} />
    </>
  );
}
