import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-reveal'

function Interior() {
  return (
    <Container>
         <Text>
             <Fade left>
             <h1>Stunning Interior</h1>
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/>
              Officiis amet reprehenderit, aut sapiente delectus reiciendis<br/>
               quaerat quos obcaecati deleniti cum quas earum iure pariatur<br/>
                   nemo voluptatem, vel expedita vero? Aspernatur, et maxime?
                   </p>
                   <a href=''>Learn More</a>
             </Fade>
         </Text>
         <Fade right>
         <img src='/Images/bg1.jpg'/>
         </Fade>
    </Container>
  )
}

export default Interior
let Container = styled.div`
  background-color:#000;
  padding:40px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  img{
      width:60%;
  }
  @media(max-width:400px){
    flex-direction:column;
    img{
      width:120%;
      margin:15px;
    }
  }
`
let Text = styled.div`
  background-color:#fff;
  padding:56px 55px;
  width:130%
  align-items:center;
  text-align:left;
  h1{
      margin:20px 0;
  }
  p{
      line-height:20px;
      margin:10px 0 20px;
      font-size:15px;
  }
  a{
      background-color:orangered;
      color:#000;
      padding:12px 45px;
      border-radius:5px;
      text-decoration:none;
  }
`