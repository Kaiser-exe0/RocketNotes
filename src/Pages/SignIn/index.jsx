import { Container, Form,Background } from "./styles";
import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button';
import { Link } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";

import { useState } from "react";
import {useAuth} from '../../hooks/auth';

export function SignIn() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const { signIn } = useAuth();

  function handleSignIn() {
    if (signIn) {
      signIn({ email, password });
    } else {
      console.error("signIn is not defined in useAuth.");
    }
  }
  
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>

        <Input
          placeholder="E-mail"
          type="Text"
          icon={FiMail}
          onChange={e=> setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e=> setPassword(e.target.value)}
        />

        <Button 
        onClick={handleSignIn}
        title="Entrar" />
        
          <Link to="/register">Criar Conta</Link>

      </Form>
      <Background/>
    </Container>
  )
}