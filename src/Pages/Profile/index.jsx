import { Container, Form, Avatar} from "./styles"
import { Link } from "react-router-dom"
import { FiArrowLeft, FiUser,FiMail, FiLock, FiCamera } from "react-icons/fi"

import { Input } from "../../Components/Input"
import { Button  } from "../../Components/Button"

import avatarPlaceholder from "../../assets/avatarPlaceholder.png" 

import { api } from "../../services/api.js";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

export function Profile() {

  const {user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [PasswordOld, setPasswordOld] = useState();
  const [PasswordNew, setPasswordNew] = useState();


  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarURL);
  const [avatarFile, setAvatarFile] = useState(null);

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }


      async function handleUpdateProfile(){
         const updated = {
          name,
          email,
          password: PasswordNew,
          old_password: PasswordOld,
         } 

         const userUpdated = Object.assign(user, updated)
         
         await updateProfile({user: userUpdated, avatarFile})
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
        <button 
        type="button"
        onClick={handleBack}
        >
        <FiArrowLeft size={24}/>
        </button>
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