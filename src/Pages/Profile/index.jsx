import { Container, Form, Avatar} from "./styles"
import { Link } from "react-router-dom"
import { FiArrowLeft, FiUser,FiMail, FiLock, FiCamera } from "react-icons/fi"

import { Input } from "../../Components/Input"
import { Button  } from "../../Components/Button"

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>
      <Form>

        <Avatar>
          <img
            src="https://github.com/kaiser-exe0.png"
            alt="imagem do usuario"
          />
          <label htmlFor="avatar">
            <input
              id="avatar"
              type="file"
            />
            <FiCamera />
          </label>
        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />
        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
        />
        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Salvar"/>
      </Form>
    </Container>
  )
}