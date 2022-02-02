import React from 'react';
import Products from '../Products';
import Product from '../components/Product';
import {Row} from 'react-bootstrap';

const HomeScreen = () => {
  return (<div>
    <div style={{ background:"gray" }} className='mt-1'>
    <h1 className='text-center' > Latest Products</h1>
    </div>
    
    <Row>
  {Products.map(product=><Product key={product._id} produc={product}/>)}
    </Row>


  </div>);
};

export default HomeScreen;
