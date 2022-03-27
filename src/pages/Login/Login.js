import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css';
import pic from "./login.jpg"
const Login = () => {
  return (
    <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
    <div class="card card0 border-0">
        <div class="row d-flex">
            <div class="col-lg-6">
                <div class="card1 pb-5">
                   
                    <div class="row px-3 justify-content-center mt-4 mb-5 border-line">
                    <img src={pic} class="image" alt=""/> </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card2 card border-0 px-4 py-5">
                    
                    <div class="row px-3 mb-4">
                         
                        <large class="text-center justify-content-center font-weight-bold text-primary" >Login To Your Account</large>
                        
                    </div>
                    <div class="row px-3"> <label class="mb-1">
                            <h6 class="mb-0 text-sm">Email Address</h6>
                        </label> <input class="mb-4" type="text" name="email" placeholder="Enter a valid email address" required/> </div>
                    <div class="row px-3"> <label class="mb-1">
                            <h6 class="mb-0 text-sm">Password</h6>
                        </label> <input type="password" name="password" placeholder="Enter password" required/> </div>
                    <div class="row px-3 mb-4">
                         <a href="#" class="ml-auto mb-0 text-sm text-primary">Forgot Password?</a>
                    </div>
                    <div class="row mb-3 px-3"> <button type="submit" class="btn1 text-center">Login</button> </div>
                    <div class="row mb-4 px-3"> <small class="font-weight-bold">Don't have an account?
                     <Link to='/Register' class="text-primary ">Register</Link></small> </div>
                </div>
            </div>
        </div>           
              
            </div>
        </div>
  )
}
export default Login;