import { FiPlus,FiSearch } from 'react-icons/fi'

import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import {Header} from '../../Components/Header'
import {ButtonText} from '../../Components/ButtonText'
import { Input } from '../../Components/Input'
import { api } from "../../services/api";
import { Note } from "../../Components/Note";
import { Section } from "../../Components/Section";
import { useEffect, useState } from 'react'

export function Home() {
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);
  const [notes, setNotes] = useState([]);

  function handleTagSelected(tagName) {
   
    const alreadySelected = tagsSelected.includes(tagName);

    if (alreadySelected) {
      const filteredTags = tagsSelected.filter(tag => tag !== tagName);
      setTagsSelected(filteredTags);
    } else {
      setTagsSelected(prevState=> [...prevState, tagName]);
    }

  }


  useEffect(() =>{
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data)
    }

    fetchTags();
  },[]);

  useEffect(()=>{
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);
      setNotes(response.data)
    }

    fetchNotes();

  },[tagsSelected, search])

  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>
      <Header />
      
      <Menu>
        
          <li>
          <ButtonText
          isActived={tagsSelected.length === 0}
          title="Todos" />
          </li>

          {
            tags && tags.map( tag => (
              <li key={String(tag.id)}>
                
                <ButtonText
                title={tag.name}
                onClick={() => handleTagSelected(tag.name)}
                isActived={tagsSelected.includes(tag.name)}
                />
             </li>
            ))
          }
     
      </Menu>

      <Search>
       
        <Input
          icon={FiSearch}
          placeholder="Pesquisar pelo título"
          onChange={() => setSearch(e.target.value)}
          />
      </Search>

      <Content>
        <Section title="Minhas notas">
          {
            notes.map(note => (
              <Note
              key={String(note.id)}
              data={note}
              />
            ))
          }

        </Section>
        
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>

     </Container>
  )
}