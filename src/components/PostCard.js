import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { Container } from './styles';

export default function PostCard({ post }) {
  function resizeString(text) {
    return `${text.substring(0, 120)}...`;
  }
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src="https://picsum.photos/200/100" />
      <Card.Body>
        <Card.Title>{post.titulo} </Card.Title>
        <Card.Subtitle className="mb-2 mt-2 text-muted">
          {post.data_hora}
        </Card.Subtitle>
        <Card.Text>{resizeString(post.conteudo)}</Card.Text>

        <Button
          as={Link}
          to={`posts/${post.id}`}
          block
          variant="outline-primary"
        >
          Visualizar
        </Button>
      </Card.Body>
    </Card>
  );
}
