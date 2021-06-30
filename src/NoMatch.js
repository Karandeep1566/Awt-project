import React from 'react';
import {Card,Container,Row,Col} from 'react-bootstrap'

export const NoMatch = () => (
  <div>
    <h4>Reviews</h4>
    <Container>
      <Row>
        <Col md={4}>
    <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Wayne</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">UAE</Card.Subtitle>
    <Card.Text>
    ⭐⭐⭐⭐<br></br>
    We had a wonderful time in Dubai and our trip planner was wonderful to work with.  Everyone there was friendly and welcoming.
    </Card.Text>
    
  </Card.Body>
</Card>
</Col>

<Col md={4}>
<Card style={{ width: '18rem'}}>
  <Card.Body>
    <Card.Title>Andy</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Switzerland</Card.Subtitle>
    <Card.Text>
    ⭐⭐⭐⭐⭐
    <br></br>
    My trip planner at this tour agency provided superb service.  My trip was a two week solo exploration of Zurich.
    </Card.Text>
    
  </Card.Body>
</Card>
</Col>

<Col md={4}>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Janice</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">England</Card.Subtitle>
    <Card.Text>
    ⭐⭐⭐⭐
     <br></br>
     Our travel planner and his staff carefully planned a trip for us, thanks to them we had great time during our trip.
    </Card.Text>
    
  </Card.Body>
</Card>
</Col>
</Row>


</Container>
</div>


)
