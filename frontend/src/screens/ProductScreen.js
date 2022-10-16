import React from "react";
import { Col, Row, Image, ListGroup, Card, Button, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Rating from "../components/Rating";
import products from "../products";


const ProductScreen = () => {
    const location = useParams()
    console.log(location)
    const product = products.find((p) => p._id === location.id);
   
    
    return (
    <>
        <Link className="btn btn-light my-3" to='/'> Go back</Link>
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>  
          <Col md={3}>
            <ListGroup variant= 'flush'>
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating 
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                  />  
                </ListGroup.Item>
                <ListGroup.Item>
                  Price: €{product.price}
                </ListGroup.Item>
                <ListGroup.Item>
                 Description: {product.description}
                </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Col>
                            Price:
                        </Col>
                        <Col>
                    
                            <strong>€{product.price}</strong>
                        </Col>
                    </ListGroup.Item>
                    
                    <ListGroup.Item>
                        <Col>
                            Status:
                        </Col>
                        <Col>
                             {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock' }                          
                        </Col>
                    </ListGroup.Item>
                    <ListGroupItem>
                        <Button 
                        className="btn-block" 
                        type='button'
                        disabled={product.countInStock === 0}
                        >
                            Add To Cart
                        </Button>
                    </ListGroupItem>
                </ListGroup>
            </Card>
          </Col>
        </Row>
           </>
    )
    
}

export default ProductScreen          