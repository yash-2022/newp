import React from 'react'
import pic from "./aboutus.jpg"
import './About.css';
const About = () => {
  return (
    <>
    
    <div class="about-us">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="about-img">
                            <img src={pic} class="img-fluid" alt=""/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="about-content">
                            <div class="about-sub-heading">
                                <h5>Who We Are?</h5>
                            </div>
                            <h2>
                                UX/UI Design For Next <br />
                                Level Generation
                            </h2>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo,
                                 unde odio ab eveniet quas perspiciatis assumenda dolores ad ut qui distinctio,
                                  quaerat rerum inventore quod, porro vel soluta quibusdam
                                delectus.
                            </p>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="about-sub">
                                    <h6><i class="fa fa-check"></i> Business Card Design</h6>
                                    <h6><i class="fa fa-check"></i> E-commerce Design</h6>
                                    <h6><i class="fa fa-check"></i> Mobile App Design</h6>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="about-sub">
                                    <h6><i class="fa fa-check"></i> UX / UI Design</h6>
                                    <h6><i class="fa fa-check"></i> Product Design</h6>
                                    <h6><i class="fa fa-check"></i> Web Design</h6>
                                </div>
                            </div>
                        </div>
                        <a href="" class="btn1">Read More</a>
                    </div>
                </div>
            </div>
        </div>
</>
  )
}
export default About;