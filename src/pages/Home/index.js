import React, { useEffect, useState } from 'react';
import { Jumbotron, Container, Col, Row, Button } from 'react-bootstrap';
import './styles.css';
import PostCard from '../../components/PostCard';
import api from '../../services/api';
import { Link } from 'react-router-dom';
// import { Container } from './styles';

export default function Home() {
  const [posts, setPosts] = useState([]);
  async function loadPosts() {
    const response = await api.get('posts');
    setPosts(response.data.data);
  }
  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div>
      <Jumbotron fluid className="blog-header">
        <Container>
          <h1>Blog do Prodap</h1>
          <p>Essa é uma Single Page Aplication criada com ReactJS.</p>
          <p className="text-right">
            <Button to="novo/post" as={Link} variant="outline-success">
              Novo post
            </Button>
          </p>
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          {posts.map(post => (
            <Col md={4} key={post.id}>
              <PostCard post={post}></PostCard>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
