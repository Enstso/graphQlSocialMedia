import  { useState } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { graphql } from "../gql/";
import FormLogin from "../components/authentication/FormLogin";

const SIGN_IN_MUTATION = graphql(`
  mutation signIn($username: String!, $password: String!) {
    signIn(username: $username, password: $password) {
      token
      success
      message
      code
    }
  }
`);

export default function Login() {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [signIn, { loading }] = useMutation(SIGN_IN_MUTATION, {
    onCompleted: (data) => {
      if (data.signIn.success) {
        localStorage.setItem("user",username);
        localStorage.setItem("token", data.signIn.token ?? "");
        navigate("/dashboard");
      } else {
        setError(data.signIn.message);
      }
    },
    onError: () => {
      setError("Une erreur est survenue. Vérifiez vos identifiants.");
    },
  });

  const handleLogin = () => {
    if (!username || !password) {
      setError("Veuillez remplir tous les champs.");
      return;
    }
    signIn({ variables: { username, password } });
  };

  return (
    <FormLogin
      error={error}
      setUsername={setUsername}
      setPassword={setPassword}
      handleLogin={handleLogin}
      loading={loading}
    />
  );
}
