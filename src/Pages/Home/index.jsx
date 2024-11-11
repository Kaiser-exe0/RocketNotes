import { FiPlus,FiSearch } from 'react-icons/fi'

import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import {Header} from '../../Components/Header'
import {ButtonText} from '../../Components/ButtonText'
import { Input } from '../../Components/Input'

import { Note } from "../../Components/Note";
import { Section } from "../../Components/Section";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>
      <Header />
      
      <Menu>
        
          <li>
          <ButtonText
          isActived
          title="Todos" />
          </li>
          <li>
            <ButtonText title="React"/>
          </li>
          <li>
            <ButtonText title="NodeJs"/>
          </li>
        
     
      </Menu>

      <Search>
       
        <Input
          icon={FiSearch}
          placeholder="Pesquisar pelo título" />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note data={{
            title:'React',
            tags: [
              { id: '1', name: 'React' },
              { id: '2', name: 'Rocketseat' }  
            ]
          }}
          />
        </Section>
        
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>

     </Container>
  )
}