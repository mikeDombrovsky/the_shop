import React from "react";
import {Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from "reactstrap";
import Counter from "../counter/Counter";
import {useDispatch, useSelector} from "react-redux";
import styles from "./Product.module.css";
import {addToCart, incCount, decCount, setCount} from "../../features/cart/cartSlice";
import product_src from './product.png';
import p1 from './product.png';

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

    function toggleDescNone(e) {
        let desc = e.target.closest('.card').querySelector('.pizza_desc');
        console.log(e.target, desc);
        desc.classList.toggle('d-none');
        e.stopPropagation()
    }

    function setDescBlock(e) {
        let desc = e.target.closest('.card').querySelector('.pizza_desc');
        desc.classList.remove('d-none');
    }

    return (
        <Card className={styles.card} onClick={e => toggleDescNone(e)}>
            <CardBody className="text-center">
                <img src={props.product.img_src} className={styles.img}/>
                <CardTitle className={styles.title}>{props.product.title}</CardTitle>
                <CardSubtitle>{props.product.description}</CardSubtitle>
                <CardSubtitle>$ {props.product.price}</CardSubtitle>
                <CardText className='pizza_desc d-none'>
                    {props.product.desc}
                </CardText>
                {getCount(props.product.id, cartProducts) ? (
                    <Counter onClick={(e) => e.stopPropagation()}
                        count={count}
                        inc={() => dispatch(incCount(props.product.id))}
                        dec={() => dispatch(decCount(props.product.id))}
                        set={(count) => dispatch(setCount({id: props.product.id, count}))}
                    />
                ) : (
                    <Button
                        color="success"
                        className="w-100 mt-2 mb-2"
                        onClick={(e) => {
                            e.stopPropagation();
                            dispatch(addToCart(props.product));
                        }}
                    >
                        Add to card
                    </Button>
                )}
            </CardBody>
        </Card>

    );
};

export default Product;