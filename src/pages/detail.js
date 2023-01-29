import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailCard from "./detailCard";
import { Nav } from "react-bootstrap";

const Detail = (props) => {
    let { id2 } = useParams();
    let [count, setCount] = useState(0);

    let [timer, settimer] = useState(true);

    let [tap, setTap] = useState(0);
    let [fade, setFade] = useState('');




    useEffect(() => {
        let a = setTimeout(() => { setFade('end') }, 100)
        return () => {
            clearTimeout(a);
            setFade('');
        }
    }, [])

    useEffect(() => {
        let a = setTimeout(() => { settimer(false) }, 2000)
        console.log("useEffect 안에 있다!");
        return () => {
            console.log("클린업펑션이다!")
        }
    }, [count])
    return (
        <div className={"start " + fade}>
            <div className="container">
                {
                    timer === true ? <div className="alert alert-warning">
                        2초 이내 구매시 할인
                    </div> : null
                }
                <div className="row">
                    {

                        isNaN(id2) == false ? <DetailCard i={id2} shoes={props.shoes.find((x) => x.id == id2)}></DetailCard>
                            : <div>잘못된 상품 번호 주소입니다.</div>

                    }
                </div>

                <Nav variant="tabs" defaultActiveKey="link0">
                    <Nav.Item>
                        <Nav.Link onClick={() => setTap(0)} eventKey="link0">이름</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => setTap(1)} eventKey="link1">설명</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => setTap(2)} eventKey="link2">정가</Nav.Link>
                    </Nav.Item>
                </Nav>
                <TabContent shoes={props.shoes} id={id2} tap={tap} fade={fade} />

            </div>
        </div>
    )
}
const TabContent = ({ tap, fade, shoes,id }) => {


    return (
        <div>
            {
                shoes.map((a,i)=>
                <div className={`start ${fade}`}>
                    {[<div>{shoes[id].name}</div>, <div>{shoes[id].content}</div>, <div>{shoes[id].price}</div>][tap]}
                </div>
                )
            }
        </div>
    )
}
export default Detail;