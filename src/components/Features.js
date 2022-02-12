import React from 'react';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';

export default function Features() {
    return (
        <Container fluid='md' className='mt-5 features'>
            <div className='text-center'>
                <h1>Features</h1>
                <h3>Our Core Features</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente officia saepe quod facilis obcaecati laboriosam reprehenderit delectus perferendis? Neque similique sit dicta excepturi iusto deleniti, officiis dolorum possimus rem beatae!</p>
            </div>
            <Row className='mb-5 text-center'>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
