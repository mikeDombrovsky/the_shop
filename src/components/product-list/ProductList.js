import React from "react";
import { Row, Col } from "reactstrap";
import Product from "../product/Product";
import { useSelector } from "react-redux";
const ProductList = () => {
  const products = useSelector(state => state.product.products);

  return (
      <>
    <Row className="mt-4">
      {products.map((p) => {

        return (
          <Col key={p.id} lg={4}>
            <Product
              product={p}
            />
          </Col>
        );
      })}
    </Row>
          {/*My son wrote this message, so I'm keeping it here, sorry for the inconvenience. =)*/}
          <p>[ this is not real ; result is not guaranteed this is for entertainment <span style={{fontSize:'30px'}}>🥺</span>]</p>
      </>

  );
};

 export default ProductList;
