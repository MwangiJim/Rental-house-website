import React from 'react';
import styled from 'styled-components';
import Sliders from './Slider';
import About from './About';
import NewHomes from './NewHomes';
import Interior from './Interior';
import Design from './Design';
import LoginPad from './LoginPad';
import SignIn from './SignIn';
import { getAuth,onAuthStateChanged } from 'firebase/auth';

function Home() {
  let auth = getAuth()
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
  let userState;
   React.useEffect(()=>{
     const subscribe = onAuthStateChanged(auth,(AuthUser)=>{
          if(AuthUser){
            console.log(AuthUser)
            console.log('user logged in!!')
            setUser(AuthUser)
            userState = 'You are logged in!!'
          }
          else{
            console.log('user logged out!!!')
            setUser(null)
            userState = 'You are logged out!!'
          }
        })
        return ()=>{//clean up function
          subscribe()
        }
    },[user])
  return (
    <Container>
      {user?
      <button className = 'LgBtn' onClick={()=>auth.signOut()}>Logout</button>
      :<button onClick={ShowSignUp} className="Button">Sign Up</button>||
      <button onClick={ShowSignIn} className = 'Sbtn'>Sign In</button>
       }
        {form == true? <LoginPad /> :''}
       { LoginForm === true?<SignIn state = {userState}/>:''}
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
.LgBtn{
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
`