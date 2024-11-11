import {RiShutDownLine} from "react-icons/ri";

import { Container, Profile, Logout } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/kaiser-exe0.png" alt="User Image" />
        <div>
          <span>
            <span>Bem vindo(a)</span>
            <strong>Kaiser</strong>
          </span>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>

    </Container>
  )
}