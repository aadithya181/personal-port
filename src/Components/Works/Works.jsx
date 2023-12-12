import React from 'react'
import './Works.css'
import portfolio1 from '../Assets/pro1.png'
import portfolio2 from '../Assets/pro2.png'
import portfolio3 from '../Assets/pro3.png'
import portfolio4 from '../Assets/pro4.png'
import portfolio5 from '../Assets/pro5.png'

export const Works = () => {  
 
  

  return (
    <div className="works">
        <h2 className="worksTitle">My Projects</h2>
        <span className="worksDesc"> I take pride in paying attention to the smallest and making sure that my work is perfect.  I am 
        excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.
        </span>

        
        <div className="worksImgs1">
          <div className='workimg'>
          <h4>Profile-card</h4>
          <img src={portfolio1} alt="" className="worksImg1" /><br></br>
          <a href="https://aadithya181.github.io/profile-card/"  className="linkk" target="_blank" rel="noopener noreferrer">https://aadithya181.github.io/profile-card/</a>
          </div>

          <div className='workimg'>
            <h4>Login-Signup</h4>
          <img src={portfolio2} alt="" className="worksImg1" />
          <a href="https://aadithya181.github.io/login-page/"  className="linkk" target="_blank" rel="noopener noreferrer">https://aadithya181.github.io/login-page/</a>

          </div>
          
          <div className='workimg'>
             <h4>XO-Game</h4>
          <img src={portfolio3} alt="" className="worksImg1" />
          <a href="https://aadithya181.github.io/tic-tac/"  className="linkk" target="_blank" rel="noopener noreferrer">https://aadithya181.github.io/tic-tac/</a>

          </div>

          <div className='workimg'>
            <h4>Digital clock</h4>
          <img src={portfolio4} alt="" className="worksImg1" />
          <a href="https://aadithya181.github.io/Digital_clock/"  className="linkk" target="_blank" rel="noopener noreferrer">https://aadithya181.github.io/Digital_clock/</a>

            </div>         
            <div className='workimg'>
            <h4>Shopping-Website</h4>
          <img src={portfolio5} alt="" className="worksImg1" />
          <a href="https://aadithya181.github.io/Shoping_website/"  className="linkk" target="_blank" rel="noopener noreferrer">https://aadithya181.github.io/Shoping_website/</a>

            </div>         
        </div>
        <button className="worksBtn">See more</button>  
    </div>
  )
}
