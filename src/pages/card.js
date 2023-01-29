




import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addOrder } from "../store/cartSlice";


function Card(props) {
    let a = useSelector((state) => state);
    let navigate = useNavigate();
    let dispatch = useDispatch();

    return (
        <>
            <div className="col-md-4">
                <img onClick={()=>navigate('/detail/'+props.i)} src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width={"80%"}></img>
                <h4>{props.shoesData.name}</h4>
                <p>{props.shoesData.content}</p>
                <p>{props.shoesData.price}</p>
                <button onClick={()=>dispatch(addOrder(props.shoesData))}>장바구니 추가</button>
            </div>
        </>
    )
}

export default Card;