import React from 'react';
import styled from 'styled-components';
import Sliders from './Slider';
import About from './About';
import NewHomes from './NewHomes';
import Interior from './Interior';
import Design from './Design';
import LoginPad from './LoginPad';
import SignIn from './SignIn';

function Home() {
  let [user,setUser] = React.useState(null)
  let [form,setForm] = React.useState(false)
  const [LoginForm,setLogin] = React.useState(false)
  function ShowSignUp(){
   setForm(prevForm => !prevForm)
  }
  function ShowSignIn(){
    setLogin(prevState => !prevState)
    console.log('Clicked')
  }
  return (
    <Container>
       <button onClick={ShowSignUp} className="Button">Sign Up</button>
       {form == true?
         <LoginPad 
           name = {user}
           handler = {setUser}
         />
         :''}
       <button onClick={ShowSignIn} className = 'Sbtn'>Sign In</button>
       { LoginForm === true?<SignIn/>:''}
        <Sliders
          img1 = '/Images/bg10.jpg'
          img2 = '/Images/bg11.jpg'
          img3 = '/Images/bg12.jpg'
          img4 = '/Images/bg13.jpg'
          img5 = '/Images/bg14.jpg'
          img6 = '/Images/bg15.jpg'
         />
        <About />
        <NewHomes />
        <Interior />
        <Design />
      </Container>
  )
}

export default Home;

let Container = styled.div`
overflow:hidden;
.Button{
  z-index:10;
  top:10%;
  left:40px;
  position:absolute;
  padding:10px 37px;
  text-transform:uppercase;
  background:transparent;
  border-bottom:1px solid #fff;
  color:#fff;
  outline:none;
  border-top:none;
  border-left:none;
  border-right:none;
  cursor:pointer;
}
.Sbtn{
  z-index:10;
  top:10%;
  left:200px;
  position:absolute;
  padding:10px 37px;
  text-transform:uppercase;
  background:transparent;
  border-bottom:1px solid #fff;
  color:#fff;
  outline:none;
  border-top:none;
  border-left:none;
  border-right:none;
  cursor:pointer;
}
`