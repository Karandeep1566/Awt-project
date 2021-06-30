import React from 'react'
import {Card,Button, Row,Col, Container} from 'react-bootstrap'
import './App.css';


export const Home = () => (
  <div>
    
    <Container>
      
      <Row>
        <Col md={4}>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://media.cntraveler.com/photos/5d8cf7d5db6acf000833e6cc/master/pass/Eiffel-Tower_GettyImages-1060266626.jpg" />
  <Card.Body className="style-name">
    <Card.Title>Paris</Card.Title>
    <Card.Text>
    Nowhere else on earth makes the heart swoon like the mention of Paris. The city lures with its magnificent art, architecture, culture, and cuisine
    </Card.Text>
    <Button variant="primary" href="https://www.tripadvisor.in/Tourism-g187147-Paris_Ile_de_France-Vacations.html">Know More</Button>
  </Card.Body>
</Card>
        </Col>

        <Col md={4} >
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.aljazeera.com/wp-content/uploads/2020/07/970f0766be5049dba5ce06b646a5bb22_18.jpeg?resize=770%2C513" />
  <Card.Body>
    <Card.Title>Dubai</Card.Title>
    <Card.Text>
    Largest. Tallest. Biggest. Dubai does everything to the extreme, standing out for its uber-modern design in a historically conservative country
    </Card.Text>
    <Button variant="primary" href="https://www.tripadvisor.in/Tourism-g295424-Dubai_Emirate_of_Dubai-Vacations.html">Know More</Button>
  </Card.Body>
</Card>
        </Col>

        <Col md={4}>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/25/13/74.jpg" />
  <Card.Body>
    <Card.Title>New York</Card.Title>
    <Card.Text>
    The tallest buildings, biggest museums, and best pizza—NYC is a city of superlatives, and it lives up to every one of them.
    </Card.Text>
    <Button variant="primary" href="https://www.tripadvisor.in/Tourism-g60763-New_York_City_New_York-Vacations.html">Know More</Button>
  </Card.Body>
</Card>
        </Col>
      </Row>


      <Row>

      <Col md={4}>
        <Card style={{ width: '18rem', height: '24rem' }}>
  <Card.Img variant="top" src="https://lp-cms-production.imgix.net/2019-06/65830387.jpg" />
  <Card.Body>
    <Card.Title>Sydney</Card.Title>
    <Card.Text>
    Sydney offers an urban mix of rich history and contemporary buzz, but with a distinctly Australian spirit.
    </Card.Text>
    <Button variant="primary" href="https://www.tripadvisor.in/Tourism-g255060-Sydney_New_South_Wales-Vacations.html">Know More</Button>
  </Card.Body>
</Card>
        </Col>

        <Col md={4}>
        <Card style={{ width: '18rem', height: '24rem' }}>
  <Card.Img variant="top" src="https://www.travelanddestinations.com/wp-content/uploads/2018/04/Views-from-Quaibru%CC%88cke-at-sunset-blue-hour.jpg" />
  <Card.Body>
    <Card.Title>Zürich</Card.Title>
    <Card.Text>
    The largest city in Switzerland, Zurich is a major contemporary art and shopping destination.
    </Card.Text>
    <Button variant="primary" href="https://www.tripadvisor.in/Tourism-g188113-Zurich-Vacations.html">Know More</Button>
  </Card.Body>
</Card>
        </Col>

        <Col md={4}>
        <Card style={{ width: '18rem', height: '24rem' }}>
  <Card.Img variant="top" src="https://lp-cms-production.imgix.net/2019-06/55425108.jpg" />
  <Card.Body>
    <Card.Title>London</Card.Title>
    <Card.Text>
    London is layered with history, where medieval and Victorian complement a rich and vibrant modern world.
    </Card.Text>
    <Button variant="primary" href="https://www.tripadvisor.in/Tourism-g186338-London_England-Vacations.html">Know More</Button>
  </Card.Body>
</Card>
        </Col>

      </Row>
    </Container>
  </div>
)
  
    
