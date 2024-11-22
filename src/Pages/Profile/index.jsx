import { Container, Form, Avatar} from "./styles"
import { Link } from "react-router-dom"
import { FiArrowLeft, FiUser,FiMail, FiLock, FiCamera } from "react-icons/fi"

import { Input } from "../../Components/Input"
import { Button  } from "../../Components/Button"

import avatarPlaceholder from "../../assets/avatarPlaceholder.png" 

import { api } from "../../services/api.js";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function Profile() {

  const {user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [PasswordOld, setPasswordOld] = useState();
  const [PasswordNew, setPasswordNew] = useState();


  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarURL);
  const [avatarFile, setAvatarFile] = useState(null);

      async function handleUpdateProfile(){
         const user = {
          name,
          email,
          password: PasswordNew,
          old_password: PasswordOld,
         } 
         
         await updateProfile({user, avatarFile})
      }

      function handleChangeAvatar(event) {
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview =  URL.createObjectURL(file);
        setAvatar(imagePreview);
      }

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
            src={avatar}
            alt="imagem do usuario"
          />
          <label htmlFor="avatar">
            <input
              id="avatar"
              type="file"
              onChange={handleChangeAvatar}
            />
            <FiCamera />
          </label>
        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange = {e=> setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange = {e=> setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange = {e=> setPasswordOld(e.target.value)}
        />
        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange = {e=> setPasswordNew(e.target.value)}
        />

        <Button title="Salvar"
        onClick={handleUpdateProfile}/>
      </Form>
    </Container>
  )
}