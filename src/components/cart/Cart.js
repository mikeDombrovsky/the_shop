import React from "react";
import {Table} from "reactstrap";
import Counter from "../counter/Counter";
import {setCount, incCount, decCount, getTotal} from '../../features/cart/cartSlice';
import {useDispatch, useSelector} from "react-redux";

const Cart = () => {
    const cartProducts = useSelector(state => state.cart.cartProducts)
    const total = useSelector(state => state.cart.total)
    const dispatch = useDispatch()
    console.log(cartProducts)

    console.log(total)
    return (
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
    );
};

export default Cart;