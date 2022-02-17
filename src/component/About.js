import React from 'react'
import styled from 'styled-components'
import {Zoom} from 'react-reveal'


function About() {
  return (
    <AboutArea>
      <Zoom>
        <AboutCol>
            <h1>Explore our beautiful homes</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit<br />
                . Iusto vitae harum rem voluptas libero tempora provident <br />
                saepe consequatur accusantium id? Impedit ex est persp<br />
                iciatis recusandae porro suscipit asperiores dolores vo<br />
                luptas itaque dicta similique, ad quod, veritatis, mollitia<br />
                 optio nam repellendus?
            </p>
            <a href=''>View Homes</a>
        </AboutCol>
        <img src='/Images/bg28.jpg'/>
        </Zoom>
    </AboutArea>
  )
}

export default About

let AboutArea = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 padding:40px;
 margin:0 50px;
 img{
     width:40%;
     height:60%;
     object-fit:contain;
 }
 @media(max-width:400px){
   flex-direction:column;
   AboutCol{
     flex-basis:100%;
     margin:15px 0
   }
   img{
     width:150%;
     margin:20px;
   }
 }
`
let AboutCol = styled.div`
  text-align:left;
  p{
      line-height:30px;
      font-size:18px;
      font-weight:300;
      margin:12px 0 30px;
  }
  a{
    text-decoration:none;
    background-color:#000;
    color:#fff;
    font-size:17px;
    border:none;
    border-radius:5px;
    margin-top:10px;
    padding:12px 36px;
  }
`