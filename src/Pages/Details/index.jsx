import { Container, Links, Content } from "./Styles"

import { Button } from "../../Components/Button"
import { Header } from "../../Components/Header"
import { Section } from "../../Components/Section"
import { Tag } from "../../Components/Tag";
import { ButtonText } from "../../Components/ButtonText"

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>

      <ButtonText
        title="Excluir nota"
          />
          
          <h1>Introdução ao React</h1>
          
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam amet dolor odio cupiditate veniam est quaerat? Cumque, a? Itaque error minus nemo doloribus obcaecati quaerat voluptatibus libero reprehenderit nulla sit.</p>

      <Section title="Links úteis">
        <Links>
          <li>
           <a href="#">https://github.com/kaiser-exe0</a>
          </li>
          <li>
           <a href="#">https://github.com/kaiser-exe0</a>
          </li>
          <li>
           <a href="#">https://github.com/kaiser-exe0</a>
          </li>
        </Links>
      </Section> 
      <Section title="Marcadores">
        <Tag title="React"/>
        <Tag title="Styled"/>
      </Section>
      <Button
        title="Voltar"
          />
             </Content>
      </main>
    </Container>
  )
}


