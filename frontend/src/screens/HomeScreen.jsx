import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listProducts } from '../actions/productActions';

const HomeScreen = () => {
  const dispach = useDispatch();

  const [searchValue, setSearchValue] = useState('');

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispach(listProducts());
  }, [dispach]);

  const filteredProductList = products.filter((product) =>
    product.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <>
      <h1>Latest products</h1>

      <input
        placeholder="Search Products"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {filteredProductList.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
