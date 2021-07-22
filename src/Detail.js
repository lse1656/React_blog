import React, {useState, useEffect, useContext} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import './Detail.scss';
import {재고context} from './App.js';


let 박스 = styled.div`
  padding : 20px;
`;

let 제목 = styled.h4`
  font-size : 25px;
  color : ${ props => props.색상 }
`;


function Detail(props){

  let 재고 = useContext(재고context);
  let [alert, setAlert] = useState(true);
  let [tab, setTab] = useState(0)
  let [스위치, 스위치변경] = useState(false);


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

          <Info/>

          <button className="btn btn-danger" onClick={()=>{ props.재고변경([9,10,11]) }}>주문하기</button>
          <br />
          <br />
          <button className="btn btn-danger" onClick={()=>{
            history.push('/');
          }}>뒤로가기</button>
        </div>
      </div>

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={()=>{스위치변경(false); setTab(0)}}>Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={()=>{스위치변경(false); setTab(1)}}>Option 2</Nav.Link>
        </Nav.Item>
      </Nav>
        
      <CSSTransition in={ 스위치 } className="wow" timeout={500}>
        <TabContent tab={tab} 스위치변경={스위치변경}/>
      </CSSTransition>
        

    </div>
  )
}

function TabContent(props){

  useEffect(()=>{
    props.스위치변경(true);
  })

    if(props.tab === 0){
      return <div>0번째 내용입니다</div>
    } else if(props.tab === 1){
      return <div>1번째 내용입니다</div>
    }
}

function Info(props){

  let 재고 = useContext(재고context);

  return(
    <p>재고 : { 재고[0] }개</p>
  )
}

export default Detail;