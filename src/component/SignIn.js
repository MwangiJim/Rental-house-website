import React from 'react'
import styled from 'styled-components'
import { getAuth, signInWithEmailAndPassword, } from 'firebase/auth';

function SignIn(props) {
    let auth = getAuth()
    let [SignInForm,setSignInForm] = React.useState({
        email:"",
        password:"",
        checked:false
    })
    function handleInputs(event){
        const{type,name,checked,value} = event.target;

        setSignInForm((prevForm)=>{
            return {
                ...prevForm,
                [name]:type === 'checkbox'?checked:value
            }
        })
    }
    let [Form,setForm] = React.useState(false)
    let styles = {
        display:Form?'none':''
    }
    function handleForm(e){
        e.preventDefault();
      if(SignInForm.email,SignInForm.password){
        signInWithEmailAndPassword(auth,SignInForm.email,SignInForm.password)
        .catch((error)=>{
            console.log(error.message)
        })
        setForm(prevState => !prevState)
        console.log(SignInForm)
        (SignInForm.checked === true?console.log('Have a great family vacation'):console.log('Kindly considerbooking as the slots are limited'))
      }
      else{
          alert('No inputs!!!!')
      }
    }
  return (
     <Container style={styles}>
        <SigninPad>
            <h1>Sign In</h1>
            <h3>{props.state}</h3>
            <form onSubmit={handleForm}>
                <input
                 type='email'
                 placeholder = 'Enter Email'
                 value= {SignInForm.email}
                 name = 'email'
                 className='Inputs'
                 onChange={handleInputs}
                />
                <input 
                 type='password'
                 placeholder = 'Enter Password'
                 value= {SignInForm.password}
                 name = 'password'
                 className='Inputs'
                 onChange={handleInputs}
                />
                <br />
                <input 
                    type='checkbox'
                    value={SignInForm.checked}
                    name ='checked'
                    onChange={handleInputs}
                />
                <label>Have you booked your house for next vacation?</label>
                <br />
                <button>Sign In</button>
            </form>
        </SigninPad>
     </Container>
  )
}

export default SignIn
let Container = styled.div`
top:0;
left:0;
position:fixed;
width:100%;
height:100vh;
background-color:rgba(77,76,76,0.4);
backdrop-filter:blur(10px);
-webkit-backdrop-filter:blur(10px);
z-index:100;
`

let SigninPad = styled.div`
  top:50%;
  left:50%;
  position:absolute;
  transform:translate(-50%,-50%);
  background-color:#fff;
  height:300px;
  width:290px;
  border-radius:10px;
  box-shadow:5px 5px 12px #000;
  padding:20px 12px;
  h1{
      text-align:center;
  }
  form .Inputs{
      width:200px;
      height:40px;
      outline:none;
      padding:0 20px;
      color:#000;
      border-radius:10px;
      margin:15px 0;
  }
  form{
    button{
        background-color:#333;
        padding:9px 37px;
        color:#fff;
        cursor:pointer;
        border-radius:6px;
        margin:30px 0;
        left:40px;
        position:relative;
        border:none;
        outline:none;
    }
  }
`