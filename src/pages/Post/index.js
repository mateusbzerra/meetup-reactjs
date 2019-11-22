import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import api from '../../services/api';
import Header from '../../components/Header';

//import './styles.css';
export default function Post(props) {
  const { match } = props;

  const [post, setPost] = useState({});

  async function getPost(id) {
    const response = await api.get(`posts/${id}?with=comments`);
    setPost(response.data.data);
  }

  useEffect(() => {
    getPost(match.params.id);
  }, [match]);
  return (
    <div>
      <Header
        titulo={post.titulo}
        subtitulo={`Publicado em ${post.data_hora}`}
      ></Header>
      <Container>
        <p>{post.conteudo} </p>
      </Container>
    </div>
  );
}
