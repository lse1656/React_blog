import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components';
import './Detail.scss';

let 박스 = styled.div`
  padding : 20px;
`;

let 제목 = styled.h4`
  font-size : 25px;
  color : ${ props => props.색상 }
`;

// class Detail2 extends React.Component{
//   componentDidMount(){

//   }

//   componentWillUnmount(){

//   }
// }

function Detail(props){

  let [alert, setAlert] = useState(true);
  let [inputData, setInputData] = useState('');

  useEffect(()=>{
    let 타이머 = setTimeout(()=>{setAlert(setAlert(false))}, 2000);
    console.log('hi');
    return ()=>{ clearTimeout(타이머) }
  },[]);

  let { id } = useParams();
  let history = useHistory();
  let products = props.shoes.find((element)=>{
    return element.id == id
  });

  return(
    <div className="container">
      <박스>
        <제목 className="red">Detail</제목>
      </박스>
      { inputData }
      <input onChange={(e)=>{setInputData(e.target.value)}} />

      {
        alert === true
        ? <div className="my-alert2">
          <p>재고가 얼마 남지 않았습니다!</p>
          </div>
        : null
      }
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg"/>
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{products.title}</h4>
          <p>{products.content}</p>
          <p>{products.price}원</p>
          <button className="btn btn-danger">주문하기</button>
          <br />
          <br />
          <button className="btn btn-danger" onClick={()=>{
            history.push('/');
          }}>뒤로가기</button>
        </div>
      </div>
    </div>
  )
}

export default Detail;