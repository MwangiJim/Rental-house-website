import React from 'react'
import styled from 'styled-components'
import { Zoom,Fade } from 'react-reveal'

function Design() {
  return (
    <Component>
    <Fade left>
        <img src='/Images/bg27.jpg'/>
        </Fade>
        <Text>
        <Zoom>
            <h1>Modern Designs</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/>
              Officiis amet reprehenderit, aut sapiente delectus reiciendis<br/>
               quaerat quos obcaecati deleniti cum quas earum iure pariatur<br/>
                   nemo voluptatem, vel expedita vero? Aspernatur, et maxime?<br />
                   quaerat quos obcaecati deleniti cum quas earum iure pariatur<br/>
                   nemo voluptatem, vel expedita vero? Aspernatur, et maxime?
                   </p>
                   <a href=''>View Homes</a>
                   </Zoom>
        </Text>
    </Component>
  )
}

export default Design

let Component = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:30px;
  img{
      height:100vh;
      object-fit:cover;
      width:50%;
  }
  @media(max-width:400px){
    flex-direction:column;
    img{
      width:100%;
    }
  }
`
let Text = styled.div`
 text-align:left;
 margin-right:10%;
 h1{
   font-size:40px;
   font-weight:600;
   margin:20px 0;
 }
 p{
   line-height:30px;
   font-size:16px;
   margin:10px 0 15px;
 }
 a{
   background-color:#000;
   padding:12px 37px;
   border-radius:6px;
   color:#fff;
   text-decoration:none;
 }
`