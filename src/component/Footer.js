import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-reveal'


function Footer() {
  return (
    <Component>
       <Column1>
         <h1>Let's find <br />your Dream Home</h1>
         <Links>
            <img src = '/Images/facebook.png'/>
            <img src = '/Images/instagram.png'/>
            <img src = '/Images/pinterest.png'/>
            <img src = '/Images/twitter.png'/>
         </Links>
       </Column1>
       <Column2>
        <h2>Contact Us</h2>
        <li>FAQ</li>
        <li>Support</li>
        <li>Questions</li>
       </Column2>
       <Column3>
        <h2>Offices</h2>
        <li>United States</li>
        <li>Europe</li>
        <li>Kenya</li>
        </Column3>
    </Component>
  )
}

export default Footer

let Component = styled.div`
  background-color:#000;
  padding:30px;
  height:70vh;
  display:flex;
  justify-content:space-between;
  align-items:center;
  @media(max-width:400px){
    flex-direction:column;
    height:130vh;
  }
`
let Column1 = styled.div`
  flex-basis:58%;
  h1{
      font-size:80px;
      font-weight:600;
      color:#fff;
  }
  @media(max-width:400px){
    flex-basis:100%;
    h1{
      font-size:30px;
    }
  }
`
let Column2 = styled.div`
  flex-basis:21%;
  display:block;
  text-align:left;
  h2{
      color:#fff;
      font-size:25px;
       margin:15px 0;
  }
  li{
      color:#fff;
      list-style:none;
      padding:10px 0;
  }
  @media(max-width:400px){
    flex-basis:100%
    }
`
let Column3 = styled.div`
  flex-basis:21%;
  display:block;
  text-align:left;
   h2{
      color:#fff;
      margin:15px 0;
      font-size:25px;
  }
  li{
      color:#fff;
      list-style:none;
      padding:10px 0;
  }
  @media(max-width:400px){
    flex-basis:100%
    }
`
let Links = styled.div`
   display:flex;
   justify-content:left;
   margin-top:60px;
   align-items:center;
   img{
       filter:invert(1);
       margin: 0 10px;
       width:30px;
       :first-child{
           height:35px;
           width:25px;
       }
   }
   @media(max-width:400px){
     flex-direction:column;
     img{
       margin:20px 0;
       width:20px;
       :first-child{
         height:25px;
         width:18px;
       }
     }
   }
`