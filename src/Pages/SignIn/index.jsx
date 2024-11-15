import { Container, Form,Background } from "./styles";
import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button';
import { Link } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";

export function SignIn() {
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
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Entrar" />
        
          <Link to="/register">Criar Conta</Link>

      </Form>
      <Background/>
    </Container>
  )
}