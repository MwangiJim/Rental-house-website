import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faBars } from '@fortawesome/free-solid-svg-icons'
import {getAuth} from 'firebase/auth'

function Header() {
  let [menu,setMenu] = React.useState(false)
  let styles = {
    right:menu?'0px':'-300px',
  }
function ToggleMenu(){
  setMenu(prevState => !prevState)
}
  return(
       <NavBar>
           <img src = '/Images/logo.png'/>
             <Navlinks style={styles}>
                 <li><a href='/'>About</a></li>
                 <li><a href=''>Homes</a></li>
                 <li><a href='/rentals'>Rentals</a></li>
             </Navlinks>
             <FontAwesomeIcon icon ={faBars} className = 'MenuBar' onClick = {ToggleMenu}/>
       </NavBar>
  )
}

export default Header;


let NavBar = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:10px 0;
  background-color:#ffc017;
  top:0;
  left:0;
  position:fixed;
  z-index:100;
  width:100%;
  img{
      width:100px;
  }
  button{
    background-color:#000;
    color:#fff;
    font-size:18px;
    border-radius:5px;
    box-shadow:5px 5px 12px #fff;
    outline:none;
    border:none;
    cursor:pointer;
    padding:12px 39px;
  }
  .MenuBar{
    font-size:30px;
    margin:0 20px;
    cursor:pointer;
    display:none;
    color:#fff;
    @media(max-width:400px){
      display:block;
      z-index:115;
    }
  }
`
let Navlinks = styled.div`
 flex:1;
 text-align:center;
 li{
     display:inline-block;
     position:relative;
     list-style:none;
     padding:8px 12px;
     a{
         text-decoration:none;
         font-size:17px;
         color:#fff;
     }
     ::after{
       content:'';
       width:0;
       height:2px;
       background-color:#fff;
       display:block;
       transition:0.5s;
       margin:auto;
     }
     :hover::after{
       width:100%;
     }
 }
 @media(max-width:400px){
    background-color:#333;
    color:#fff;
    width:300px;
    height:100vh;
    right:-300px;
    top:0;
    position:fixed;
    z-index:110;
       li{
         display:block;
         margin:20px 0;
       }
  }
`