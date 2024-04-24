import React from "react";
import {Button, Table} from "reactstrap";
import Counter from "../counter/Counter";
import {setCount, incCount, decCount} from '../../features/cart/cartSlice';
import {useDispatch, useSelector} from "react-redux";

const Cart = () => {
    const cartProducts = useSelector(state => state.cart.cartProducts)
    const total = useSelector(state => state.cart.total)
    const dispatch = useDispatch()

    return (
        <>

            <Table className="mt-4">
                <thead>
                <tr>
                    <th>#</th>
                    <th style={{width: "30%"}}>Product description</th>
                    <th style={{width: "20%"}}>Price</th>
                    <th style={{width: "20%"}}>Count</th>
                    <th style={{width: "20%"}}>Total</th>
                </tr>
                </thead>
                <tbody>
                {cartProducts.map((p, indx) => {

                    return (
                        <tr key={p.id}>
                            <th className="align-middle" scope="row">
                                {indx + 1}
                            </th>
                            <td className="align-middle">{p.title}</td>
                            <td className="align-middle">${p.price}</td>
                            <td className="align-middle">
                                <Counter
                                    count={p.count}
                                    inc={() => dispatch(incCount(p.id))}
                                    dec={() => dispatch(decCount(p.id))}
                                    set={(count) => dispatch(setCount(p.id, count))}
                                />
                            </td>
                            <td className="align-middle">${p.count * p.price}</td>
                        </tr>
                    );
                })}
                </tbody>
                <thead>
                <tr>
                    <th>Total:</th>
                    <th>${total}</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
            </Table>
            <Button color="success" onClick={() => alert('Good choice! Your order is processing!')}>Cook!</Button>
        </>
    );
};

export default Cart;