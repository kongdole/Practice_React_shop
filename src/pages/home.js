import data from './data.js';
import Card from './card.js';
import axios from 'axios';
import { useState } from 'react';
import Loading from './Loading.js';


const Home = () => {

    let [shoes,setShoes] = useState(data);
    let [urlData, setUrlData]= useState(2);
    const [loading, setLoading] = useState(false);
    
    
    return (
        <div>
            {loading ? <Loading /> : null}
            <div className='main-bg'>
            </div>
            <div className="container">
                <div className="row">
                    {
                        shoes.map((a, i) => {
                            return (
                                <Card i={i} shoesData={shoes[i]}></Card>
                            )
                        }
                        )
                    }
                </div>
            </div>
            <button onClick={()=>{
                setLoading(true); // api 호출 전에 true로 변경하여 로딩화면 띄우기

                axios.get("https://codingapple1.github.io/shop/data"+urlData+'.json')
                .then((getData)=>{
                    setLoading(false); // api 호출 완료 됐을 때 false로 변경하려 로딩화면 숨김처리
                    let copy =[...shoes,...getData.data];
                    setShoes(copy);                   
                    setUrlData(urlData+1);
                })
                .catch((e)=>{
                    console.log(e)
                    setLoading(false); // api 호출 완료 됐을 때 false로 변경하려 로딩화면 숨김처리
                })
            }}>상품더보기</button>

        </div>
    )

}


export default Home;