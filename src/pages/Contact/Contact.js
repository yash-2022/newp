import React from 'react';
import './Contact.css';
const Contact = () => {
  return (

<div class="container">
    <div class="form">
        <div class="contact-info">
            <h3 class="title">Let's get in touch</h3>
            <p class="text"> Contact us with the following details, and fillup the form with the details. </p>
            <div class="info">
                <div class="social-information"> <i class="bi bi-geo-alt"></i>
                    <p>abc,23,xyz</p>
                </div>
                <div class="social-information"> <i class="bi bi-envelope"></i>
                    <p>xyz@gmail.com</p>
                </div>
                <div class="social-information"> <i class="bi bi-telephone"></i>
                    <p>+91 0000000000 </p>
                </div>
            </div>
            <div class="social-media">
                <p>Connect with us :</p>
                <div class="social-icons"> <a href="#"> 
                <i class="bi bi-facebook"></i> </a>
                 <a href="#"> <i class="bi bi-twitter"></i> </a> 
                 <a href="#"> <i class="bi bi-instagram"></i> </a> 
                 <a href="#"> <i class="bi bi-linkedin"></i> </a> </div>
            </div>
        </div>
        <div class="contact-info-form"> <span class="circle one"></span> <span class="circle two"></span>
            <form action="#" onclick="return false;" autocomplete="off">
                <h3 class="title">Contact us</h3>
                <div class="social-input-containers"> 
                <input type="text" name="name" class="input" placeholder="Name" required/> 
                </div>
                <div class="social-input-containers"> 
                <input type="email" name="email" class="input" placeholder="Email" required/> 
                </div>
                <div class="social-input-containers"> 
                <input type="tel" name="phone" class="input" placeholder="Phone" required/> 
                </div>
                <div class="social-input-containers textarea"> 
                <textarea name="message" class="input" placeholder="Message" required>
                  </textarea> </div> <input type="submit" value="Send" class="btn" />
            </form>
        </div>
    </div>
</div>

    )
};
export default Contact;