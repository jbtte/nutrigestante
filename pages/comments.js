import { useState } from 'react'
import { useForm } from "react-hook-form";
import { Content, Bar, FormDiv, ImageDiv, SavedDiv} from '../components/styled/CommentsPageStyled'

import 'bootstrap/dist/css/bootstrap.min.css';

import Theme from "../theme/main";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'next/image'




export default function Comments() {
  const [saved, setSaved ] = useState(false)
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const onSubmit = async ({name, message}, e) => {
    try {
      const res = await fetch (`/api/comments?name=${name}&message=${message}`, {method: 'POST'})
      
      e.target.reset()
      setSaved(true)

    } catch (e) {
      console.error(e)
    }
  };

    return (
    <Theme>
      <Content>
        <Bar>
          <ImageDiv>
            <Image
              src='/images/logo.png'
              alt="Logo Nutrigestante - Mulher Grávida"
              width={220}
              height={110}
              quality={65}
              layout="responsive"
            />
          </ImageDiv>
        </Bar>
        <FormDiv>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Escreva seu nome" {...register("name", { required: true })} />
             <Form.Text className="text-muted" />
              {errors.name && <span>Lembra de colocar seu nome</span>}
            </Form.Group>

            <Form.Group controlId="formBasicMessage">
              <Form.Label>Mensagem</Form.Label>
              <Form.Control 
                  as="textarea" rows={3} 
                  placeholder="Conta pra mim um pouco da sua história" 
                  {...register("message", { required: true })}
                  />
                 {errors.message && <span>Conte alguma coisa pra mim</span>}
              </Form.Group>
              <Button className="btn-pink" type="submit"> Enviar </Button>
              <SavedDiv>
                {saved && <h5>Sua Mensagem foi salva</h5>}
              </SavedDiv>
          </Form>
        </FormDiv>
        <Bar />
      </Content>
    </Theme>)
  }