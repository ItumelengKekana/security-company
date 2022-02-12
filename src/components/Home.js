import React from 'react';
import { Row, Container, Col, Button, Image } from 'react-bootstrap';
import '../stylesheets/home.css';

export default function Home() {
    return (
        <Container fluid="md" className='mt-5'>
            <Row>
                <Col sm={6}>
                    <h1>Header</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio ipsa doloribus, blanditiis repudiandae esse voluptatibus perspiciatis tenetur nam temporibus optio atque delectus suscipit ipsam impedit asperiores repellendus aspernatur laborum tempora!</p>
                    <Button className='mx-3'>Button 1</Button>
                    <Button>Button 2</Button>
                </Col>
                <Col sm={6}>
                    <Image src='https://images.unsplash.com/photo-1600267204026-85c3cc8e96cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' fluid />
                </Col>
            </Row>
        </Container>
    )
}
