import React from 'react';
import { Jumbotron, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header({ titulo, subtitulo }) {
  return (
    <Jumbotron fluid>
      <Container>
        <Button className="mb-5" as={Link} to="/" variant="outline-dark">
          Voltar
        </Button>
        <h1 className="text-center">{titulo}</h1>
        <p className="text-muted text-center">{subtitulo}</p>
      </Container>
    </Jumbotron>
  );
}
