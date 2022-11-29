import React from 'react'
import Navbar from '../components/Navbar';
import '../Home.css';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div>
        <Navbar/>
        <div>
        <div className='container1'>
            <div className='cont1box'>
                <div className='topline'>
                    <h1>Think Less. <br/> Lift More.</h1>
                </div>
                <div className='bottomline'>
                    <h2 className='heading'>Fitness Hub is the simplest, most intuitive workout center experience.<br/>
                    Trusted by over 3 million users worldwide.</h2>
                </div>
            </div>
        </div>
        <div className='container2'>
            <div className='cont2text'>
                <h1>Workout. <br/> Notebook. <br/> Reinvented. <br/></h1>
                <h3>Fitness hub is simpler and more powerful than a notebook, designed 
                    to make your planning easier. Plan your training to get the best
                    out of Fitness hub.
                </h3>
                <h4>This app helps you add all the workouts you do very easily, customize your own routines and it's really
                     easy to notebook down your exercises. This is a great app, easy to use and recording data. </h4>
            </div>
            <div className='cont2img'>
                <img src='./images/img-2.png' alt='Notebook' className='img-2' />
            </div>

        </div>

        <div className='container3'>
            <div className='cont3box'>
                <img src='./images/img-3.png' alt='search'/>
            </div>
            <div className='cont3text'>
                <h1>Everything you need. <br/> Nothing you don't.</h1>
                <h3>Fitness hub gives you the opportunity to search for any workout exercises you need
                    from the internet that are applicable to your preference.</h3>
                <h4>Search for any exercise you want and see several video representations of the 
                    workout for a better experience. The workouts will be diverse and specifically 
                    designed to help you achieve your goals.</h4>
                <Link to='/signup'><button className='join-now'><h2>Join Now</h2></button></Link>
            </div>
        </div>
        <div className='container4'>
            <h1>Fitness Hub is for everyone.</h1>
            <h3>No matter your experience level, training program or expertise, you can use Fitness 
                hub for your workout programmes and achieve your goals. It is perfectly intuitive and 
                keeps you motivated to keep going to the gym. </h3>
            <div className='cards'>
                <div className='card1'>
                    <img src='./images/card1.png' className='pic1' alt='card1' />
                    <h5 style={{lineHeight:"1.4"}} >“The greatest fitness app. It's clear and user friendly, the makers behind this app use it every week, because it is so perfect.” <br/>Michael Oliver.</h5>
                </div>
                <div className='card2'>
                    <img src='./images/card2.png' className='pic2' alt='card1' />
                    <h5 style={{lineHeight:"1.4"}}>“The best of all the workout apps I have tried. I have used Fitness hub for more than a year now. It is intuitive and effective.” <br/>Alicia Keys</h5>
                </div>
                <div className='card3'>
                    <img src='./images/card3.png' className='pic3' alt='card1' />
                    <h5 style={{lineHeight:"1.4"}}>“With a clean and simple interface that gets you to log your workouts quickly, this app lets you focus on the sigificant exercises.” <br/>Mason Mount</h5>
                </div>
                <div className='card4'>
                    <img src='./images/card4.png' className='pic4' alt='card1' />
                    <h5 style={{lineHeight:"1.4"}}>“This app takes away the headache of organising your exercises and allows you to really focus and work on important exercises.” <br/>Samantha Kerr</h5>
                </div>
            </div>
        </div>
        <div className='container5'>
            <h1>Fitness Hub covers all your workout needs</h1>
            <div className='topneeds'>
                <div className='card5'>
                    <p>Workout Search</p>
                    <h3>Fitness hub allows you to search for any exercise you want from the internet. You will also get video representation of the exercises.</h3>
                </div>
                <div className='card6'>
                    <p>Workout Timer</p>
                    <h3>This app enables you to time exercises whenever you workout and you can be able to perform exercises in a timely manner.</h3>
                </div>
            </div>
            <div className='lowneeds'>
                <div className='card7'>
                    <p>Workout Planning</p>
                    <h3>Planing has been integrated to enable you create your own plans of different exercises you want to perform each day for reference.</h3>
                </div>
                <div className='card8'>
                    <p>Workout Meals</p>
                    <h3>This app enables you to have access to a variety of recommended meals by our experts to help you workout while on the best diet.</h3>
                </div>
            </div>
            <Link to='/signup'><button className='join'><h2>Join Now</h2></button></Link>
        </div>
        <div className='container6'>
            <div className='cont6text'>
                <h1>Activate your beast mode here and provide yourself with healthy mass.</h1>
                <h2>Fitness isn’t a goal, it is a lifestyle.</h2>
                <h3>Join now and turn your fat into fit.</h3>
            </div>
            <Link to='/signup'><button className='join'><h2>Join Now</h2></button></Link>
        </div>
        <div className='container7'>
            <div className='cont7logo'>     
                <img src='./images/logo.png' alt='logo'/>
                <h4 style={{ color:"white"}}>Fitness Hub</h4>
            </div>
            <h3>Find us on social media</h3>
            <div className='cont7media'>
                <h4>Facebook</h4>
                <h4>Twitter</h4>
                <h4>Instagram</h4>
            </div>
            <p>Copyright © 2022 Fitness Hub. All Rights Reserved</p>
        </div>
    </div>
    </div>
  )
}

export default Home