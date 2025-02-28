import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { graphql } from "../gql"; // Or gql from @apollo/client
import FormRegister from '../components/authentication/FormRegister';

// Define the CREATE_USER_MUTATION
const CREATE_USER_MUTATION = graphql(`
  mutation CreateUser($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      code
      message
      success
      user {
        username
      }
    }
  }
`);

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Use useMutation to call the GraphQL mutation
  const [createUser, { loading }] = useMutation(CREATE_USER_MUTATION, {
    onCompleted: (data) => {
      if (data.createUser.success) {
        alert("Registration successful! You can now log in.");
        navigate('/login'); // Redirect to the login page
      } else {
        setError(data.createUser.message);
      }
    },
    onError: () => {
      setError('An error occurred during registration.');
    }
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simple field validation
    if (!username || !password) {
      setError("All fields are required.");
      return;
    }

    // Call the mutation to create the user
    createUser({ variables: { username, password } });
  };

  return (
    <FormRegister 
      handleSubmit={handleSubmit} 
      setUsername={setUsername} 
      setPassword={setPassword} 
      error={error}
      loading={loading} // Pass the loading prop here
    />
  );
};

export default Register;
