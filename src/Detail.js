import React, {useState} from 'react';
import { useHistory, useParams } from 'react-router-dom'

function Detail(props){

  let { id } = useParams();
  let history = useHistory();
  let products = props.shoes.find((element)=>{
    return element.id == id
  });

  return(
    <div className="container">
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