import React from 'react'
import styled from 'styled-components'
import{getAuth,createUserWithEmailAndPassword,onAuthStateChanged,updateProfile} from 'firebase/auth'
import { db } from '../firebase'

function LoginPad() {
  const auth = getAuth()
    let[formData,setFormData] = React.useState({
        username:'',
        password:'',
        email:'',
        checked:false
    })
    function InputHandler(event){
        const{name,value,type,checked} = event.target;
       setFormData((prevData)=>{
           return{
               ...prevData,
               [name]:type === 'checkbox'?checked:value
           }
       })
    }
    function Handleform(e){
        e.preventDefault()
        if(formData.email,formData.password,formData.username){
            createUserWithEmailAndPassword(auth,formData.email,formData.password)
            .then((AuthUser)=>{
               return  AuthUser.user.updateProfile({
                  displayName:formData.username
               })
            })
            .catch((error)=>{
              alert(error.message)
            })
            console.log(formData)
            setContainer(prevState => !prevState)
            formData.checked === true?alert('Thank you for your support')
            :alert('Kindly support us if you can!')

        }
        else{
            console.log('Fill in Input Fields')
        }
    }
    let[container,setContainer] = React.useState(false)
    let styles = {
        display:container?'none':''
    }
  return (
    <Container style={styles}>
        <LoginSection>
          <Link>
            <span>Register</span>
          </Link>
          <h2>Create an Account</h2>
          <form onSubmit={Handleform}>
              <input 
                type='text'
                placeholder='Enter Username'
                value={formData.username}
                name = 'username'
                onChange={InputHandler}
                className = 'Inputs'
                required
              />
              <input 
                type='email'
                placeholder='Enter Email'
                value={formData.email}
                name = 'email'
                onChange={InputHandler}
                className = 'Inputs'
                required
              />
               <input 
                type='password'
                placeholder='Enter Password'
                value={formData.password}
                name = 'password'
                onChange={InputHandler}
                className = 'Inputs'
                required
              />
              <br />
              <input 
               type='checkbox'
               onChange={InputHandler}
               value={formData.checked}
               name='checked'
              />
              <label>Do you follow our social handles</label>
              <button>Create an Account</button>
          </form>
        </LoginSection>
    </Container>
  )
}

export default LoginPad

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
let LoginSection = styled.div`
  top:50%;
  left:50%;
  position:absolute;
  transform:translate(-50%,-50%);
  background-color:#fff;
  width:340px;
  height:450px;
  border-radius:10px;
  box-shadow:4px 4px 10px #000;
  h2{
      text-align:center;
  }
  form{
      margin:4% 20px;
      button{
          padding:10px 35px;
          background-color:#333;
          border-radius:8px;
          color:#fff;
          cursor:pointer;
          margin:10px 5%;
          border:none;
          outline:none;
      }
  }
  form .Inputs{
      width:230px;
      height:40px;
      outline:none;
      padding:0 20px;
      border-radius:20px;
      margin:10px 0;
  }
`
let Link = styled.div`
  display:flex;
  justify-content:center;
  margin:20px 0;
  align-items:center;
  span{
      margin:0 5px;
      font-size:18px;
  }
`