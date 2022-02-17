import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';


function NewHomes() {
  return (
    <Container>
        <h1>View our newest Homes</h1>
        <Column>
            <Columns>
            <Fade top>
               <img src='/Images/bg21.jpg'/>
               <h4>8 Bed 10 Bath House in Venice,Carlifornia</h4>
               <a href=''>View Details &#8594;</a>
               </Fade>
            </Columns>
            <Columns1>
            <Fade top>
               <img src='/Images/bg22.jpg'/>
               <h4>8 Bed 10 Bath House in Venice,Carlifornia</h4>
               <a href=''>View Details &#8594;</a>
               </Fade>
            </Columns1>
        </Column>
    </Container>
  )
}

export default NewHomes

let Container = styled.div`
  padding:50px;
`
let Column = styled.div`
  display:flex;
  justify-content:space-between;
  @media(max-width:400px){
    flex-direction:column;
  }
`
let Columns = styled.div`
 flex-basis:40%;
 text-align:left;
 img{
   width:120%;
 }
 h4{
   font-size:20px;
   font-weight:300;
   letter-spacing:1px;
   margin:7px 0;
 }
 a{
   text-decoration:none;
   color:#000;
 }
 @media(max-width:400px){
   flex-basis:100%;
   margin:20px 0;
 }
`
let Columns1 = styled.div`
  flex-basis:45%;
  text-align:left;
  margin-top:4%;
  position:relative;
  img{
    width:100%;
  }
  h4{
    font-size:20px;
    font-weight:300;
    letter-spacing:1px;
    margin:7px 0;
  }
  a{
    text-decoration:none;
    color:#000;
  }
  @media(max-width:400px){
   flex-basis:100%;
   margin:20px 0;
 }
`