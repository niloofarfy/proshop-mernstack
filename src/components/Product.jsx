import React from 'react';
import { Card,Col,Button } from 'react-bootstrap';

const Product = ({produc}) => {
  return (<Col sm={6} md={4} lg = {3} className='d-flex align-items-stretch mb-3' >
<Card>
  <Card.Img variant="top" src={produc.image} />
  <Card.Body>
    <Card.Title>{produc.name}</Card.Title>
    <Card.Text>
    {produc.description}
    </Card.Text>
    <Card.Text>
    {produc.rating} of {produc.numReviews}
    </Card.Text>
    <Card.Text as="h5">
    ${produc.price}
    </Card.Text>
    <div className='text-center'>
      <Button variant="primary">Buy</Button>
    </div>
  </Card.Body>
</Card>

  </Col>);
};

export default Product;
