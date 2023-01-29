import { type } from "@testing-library/user-event/dist/type";
import { useSelector,useDispatch } from "react-redux";
import { addOrder } from "../store/cartSlice";

const DetailCard = (props) => {


    let a = useSelector((state) => state);
    let dispatch = useDispatch();
    console.log(typeof(props.i));
    return (


        <>
            <div className="col-md-6">
                <img src={'https://codingapple1.github.io/shop/shoes'+ ((props.i*1)+1) +'.jpg'} width="100%" />
            </div>
            <div className="col-md-6">
                
                <h4 className="pt-5">{props.shoes.name}</h4>
                <p>{props.shoes.content}</p>
                <p>{props.shoes.price}</p>
                <button onClick={()=>dispatch(addOrder(props.shoes))} className="btn btn-danger">주문하기</button>
            </div>
        </>
    )
}

export default DetailCard;