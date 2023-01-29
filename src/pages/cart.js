import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, increase2 } from "./../store/userSlice.js";
import { increase,decrease } from "../store/cartSlice.js";

function Cart() {

    let a = useSelector((state) => state);

    let dispatch = useDispatch();


    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>개수추가하기</th>
                        <th>개수빼기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        a.cart.map((value, i) => 

                            <tr key={i}>
                                <td>{a.cart[i].id}</td>
                                <td>{a.cart[i].name}</td>
                                <td>{a.cart[i].count}</td>
                                <td><button onClick={()=>
                                    dispatch(increase(a.cart[i].id))
                                }>+</button></td>
                                <td><button onClick={()=>
                                    dispatch(decrease(a.cart[i].id))
                                }>-</button></td>
                            </tr>
                        )

                    }
                </tbody>
            </Table>
        </div>
    )
}


export default Cart;