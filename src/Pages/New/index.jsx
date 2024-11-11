import { Container, Form } from "./styles";
import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import { Section } from "../../Components/Section";
import { TextArea } from "../../Components/TextArea";
import { NoteItem } from "../../Components/NoteItem";
import { Button } from "../../Components/Button";
import { Link } from 'react-router-dom'

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
        <header>
          <h1>Criar nota</h1>
          <Link to="/">voltar</Link>
        </header>

          <Input
            placeholder="Título" />
          
          <TextArea
            placeholder="Observações" />
          
          <Section title="Links úteis">

            <NoteItem
              value="https://github.com/kaiser-exe0"
            />
            <NoteItem isNew
              placeholder="Novo link"
            />
          </Section>

          <Section title="Marcadores">
            <div className="Tags">
              <NoteItem
             value="React"
           />
               <NoteItem isNew
              placeholder="Nova tag"
              />
            </div>
          </Section>
          <Button
          title="Salvar"
          />
        </Form>
      </main>
    </Container>
  )
}