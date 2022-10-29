import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listProducts } from '../actions/productActions';
import Pagination from '../components/Pagination';

const HomeScreen = () => {
  const dispach = useDispatch();

  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispach(listProducts());
  }, [dispach]);

  const filteredProductList = products.filter((product) =>
    product.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  const lastPostIndex = currentPage * postsPerPage;
  const firstpostIndex = lastPostIndex - postsPerPage;
  const currentPosts = filteredProductList.slice(firstpostIndex, lastPostIndex);
  //
  const l = products.length;
  console.log(l);
  //

  return (
    <>
      <h1>Latest products</h1>
      <Pagination />
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
        <>
          <Row>
            {currentPosts.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
      <Row>
        <Col>
          <Pagination
            totalPosts={products.length}
            postsPerPage={postsPerPage}
            setCurreentPage={setCurrentPage}
          />
        </Col>
      </Row>
    </>
  );
};

export default HomeScreen;
