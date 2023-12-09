import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import peer2peer from '../assets/peer2peer.jpg'
import plearning from '../assets/plearning.jpg'
import qa from '../assets/qa.jpg'
import rewards from '../assets/rewards.jpg'
import feed from '../assets/feed.jpg'
import AnimatedPage from "./AnimatedPage";



export default function Carousel() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true
    };
    return (
      <AnimatedPage>
      <div id="carousal-box">

        <h1 id="features">WHAT WE OFFER?</h1>
        
        <Slider {...settings}>
          <div className="carousal-card">
            <h3><img className="carousal-img"  src={peer2peer}/></h3>
            <div className="carousal-content">
            <h1>PEER-2-PEER</h1>
            <p><h3>A platform that embodies the peer-to-peer concept in education.<br/> We facilitate direct interaction among students, enabling them to teach, learn, and collaborate with their peers.</h3></p>
            </div>
            </div>
          <div className="carousal-card">
            <h3><img className="carousal-img" src={plearning}/></h3>
            <div className="carousal-content">
              <h1>PERSONALISED LEARNING</h1>
            <p ><h3>Focus on teaching the concepts you excel at and explore the concepts you desire to learn, without being constrained by entire subjects or chapters.</h3></p>
            </div>
          </div>
          <div className="carousal-card">
           
            <h3><img className="carousal-img" src={rewards}/></h3>
            <div className="carousal-content">
              <h1>REWARD POINTS</h1>
              <p><h3>Earn recognition for your commitment to the learning community and stay motivated on your educational journey. The more you engage, the more points you earn, unlocking exciting rewards and enhancing your learning experience.</h3></p>
            </div>
          </div>
          <div className="carousal-card">
           
            <h3><img className="carousal-img" src={feed}/></h3>
            <div className="carousal-content">
              <h1>FEED</h1>
              <p><h3>Experience a comprehensive feed designed for our collaborative community.Access a wealth of study materials,engage in insightful discussions, and seek clarification for any doubts you may have.Stay connected with fellow learners, share resources, and foster a vibrant learning environment.Our platform brings together all the essential elements for effective collaboration, enabling you to learn, grow, and excel together. Join us and unlock the full potential of our collaborative community feed</h3></p>
            </div>
          </div>
          
          <div className="carousal-card">
            <h3><img className="carousal-img" src={qa}/></h3>
            <div className="carousal-content">
              <h1>ASK A QUESTION</h1>
           <p><h3>Questions? We've got answers! We're here to assist you with concepts, topics, and any doubts you may have. Don't hesitate to reach out for guidance and support on your learning journey.</h3></p> 
          </div>
          </div>
        
          
        </Slider>
      </div>
      </AnimatedPage>
    );
  }
