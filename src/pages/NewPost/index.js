import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import Header from '../../components/Header';
import api from '../../services/api';
// import { Container } from './styles';

export default function NewPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if (title.length > 5 && content.length > 5) {
      try {
        const response = await api.post('posts', { title, content });
        setSubmitMessage('Publicação cadastrada com sucesso!');
        setSubmitError(false);
      } catch (err) {
        if (err.response.status === 422) {
          setSubmitMessage('Já existe uma publicação com o mesmo título');
        } else {
          setSubmitMessage('Erro ao cadastrar formulário');
        }
        setSubmitError(true);
      }
    }
  }

  return (
    <div>
      <Header titulo="Nova Publicação"></Header>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Título</Form.Label>
            <Form.Control
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Título da publicação"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Conteúdo</Form.Label>
            <Form.Control
              value={content}
              onChange={e => setContent(e.target.value)}
              placeholder="Conteúdo da publicação"
              as="textarea"
              rows="3"
            />
          </Form.Group>
          <Button variant="success" type="submit" block>
            Cadastrar
          </Button>
        </Form>
        {submitMessage.length > 0 && (
          <Alert variant={submitError === true ? 'danger' : 'secondary'}>
            {submitMessage}
          </Alert>
        )}
      </Container>
    </div>
  );
}
