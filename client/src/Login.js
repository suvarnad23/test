
import React, { useState } from 'react';
import axios, { Axios } from "axios";
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
} from 'mdb-react-ui-kit';

function Login() {

    const Navigate=useNavigate();
    const[username,setUsername]=useState('');
    const[password,setpassword]=useState('');
    const [loginError, setLoginError] = useState('');

    const changeusername = (event) =>{
        setUsername(event.target.value);
    }
    // const handleLogin=()=>{
    //     console.log("Login is clocked")
    //     console.log(username)
    //     console.log(password)

        const handleLogin = async (event) => {
          event.preventDefault();
          // console.log("Login is clocked")
          // console.log(username)
          // console.log(password)
          try {
              const response = await axios.post('https://localhost:7211/api/Employee/authenticate', {
                  username,
                  password
              });
  
              // Assuming the response contains login status or token
              // You can handle the response accordingly
              console.log(response.data); // Log the response for now
  
              // Redirect to another page upon successful login
              if (response.status === 200) {
                  // Replace Navigate("/Crud") with your actual navigation logic
                  Navigate("/Crud");
              }
          } catch (error) {
              // Handle login failure
              setLoginError('Invalid username or password');
              console.log(loginError);
              //console.log('kkkk');
          }
      };
  

        // if(username && password !=''){
        //     Navigate("/Crud") 
        // }
   // };
    
  // Your code here...

  return (
    <div>
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
           

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='User Name' id='formControlLg' type='name' size="lg" onChange={(event) => setUsername(event.target.value)}/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" onChange={(e) =>setpassword(e.target.value)}/>

              {/* <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
              <MDBBtn outline className='mx-2 px-5' color='white' size='lg'>
                Login
              </MDBBtn> */}

              <div className='d-flex flex-row mt-3 mb-5'>
                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='facebook-f' size="lg"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='twitter' size="lg"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='google' size="lg"/>
                </MDBBtn>

                <button style={{ fontSize: '16px', marginRight:'50px' }} className="fw-bold mb-0 btn btn-primary" onClick={handleLogin}>Login</button>
              </div>

              <div>
              {loginError && <p>{loginError}</p>}
                {/* <button  className="mb-0"> <a href="#!" class="text-white-50 fw-bold"></a>Login</button> */}
                {/* <p className="mb-0"> <a href="#!" class="text-white-50 fw-bold">Sign Up</a></p> */}
                {/* <button  className="text-white-50 fw-bold mb-0 btn btn-primary" onClick={handleLogin}>Login</button> */}

              </div>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
    </div>
  );
}

export default Login;