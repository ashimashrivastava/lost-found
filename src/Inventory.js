import React from 'react';
import { Card, CardDeck, Form, FormControl, Button } from 'react-bootstrap';
import one from './images/1.jpg';
import two from './images/2.jpg';
import three from './images/3.jpg';

function Inventory() {
  return (
    // @todo: use card border color to indicate item age
    <div>
    <Form inline style={{ width: '304px', margin: '0 auto' }}>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
    <CardDeck style={{ padding: '20px' }}>
        <Card border="info">
            <Card.Img variant="top" src={one} />
            <Card.Body>
            <Card.Title>Figurine</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Received 3 hours ago</small>
            </Card.Footer>
        </Card>
        <Card border="warning">
            <Card.Img variant="top" src={two} />
            <Card.Body>
            <Card.Title>Bar-B-Q</Card.Title>
            <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Received 3 days ago</small>
            </Card.Footer>
        </Card>
        <Card border="danger">
            <Card.Img variant="top" src={three} />
            <Card.Body>
            <Card.Title>McBride</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Received 3 months ago</small>
            </Card.Footer>
        </Card>
    </CardDeck>
    </div>
  );
}

export default Inventory;
