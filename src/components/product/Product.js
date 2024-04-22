import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import Counter from "../counter/Counter";
import {useDispatch, useSelector} from "react-redux";
import styles from "./Product.module.css";
import { addToCart, incCount, decCount, setCount } from "../../features/cart/cartSlice";
import product_src from './product.png';

const Product = (props) => {
  const cartProducts = useSelector(state => state.cart.cartProducts);
  const dispatch = useDispatch();
  let count = 0;

  function getCount(pid, cart) {
    let p = cart.find((p) => p.id === pid);
    if (p) {
      count = p.count;
      return p.count;
    }
    return 0;
  }

  return (
    <>
      <Card className="mb-4">
        <CardBody className="text-center">
          <img src={product_src} className={styles.img} />
          <CardTitle className={styles.title}>{props.product.title}</CardTitle>
          <CardSubtitle>{props.product.description}</CardSubtitle>
          <CardSubtitle>$ {props.product.price}</CardSubtitle>
          {getCount(props.product.id, cartProducts) ? (
            <Counter
              count={count}
              inc={() => dispatch(incCount(props.product.id))}
              dec={() => dispatch(decCount(props.product.id))}
              set={(count) => dispatch(setCount({id:props.product.id, count}))}
            />
          ) : (
            <Button
              color="success"
              className="w-100 mt-2 mb-2"
              onClick={() => dispatch(addToCart(props.product))}
            >
              Add to card
            </Button>
          )}
        </CardBody>
      </Card>
    </>
  );
};

export default Product;