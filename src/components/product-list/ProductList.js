import React from "react";
import { Row, Col } from "reactstrap";
import Product from "../product/Product";
import { useSelector } from "react-redux";
const ProductList = () => {
  const products = useSelector(state => state.product.products);

  return (
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
  );
};

 export default ProductList;
