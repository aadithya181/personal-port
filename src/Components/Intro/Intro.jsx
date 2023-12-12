import React from 'react'
import './Intro.css'
// import bg from '../Assets/proImg.jpg'
// import bg from '../Assets/image.png'
import {Link} from 'react-scroll'
import btnImg from '../Assets/hireme.png'
import pro from '../Assets/pro.jpg'
export const Intro = () => {
  return (
    // <div>
    //     <section className="intro">
    //         <div className="introContent">
    //           <img src={pro} alt=""  className='pro'/>
    //           <div className='content'>
    //             <h5>Aadithya R</h5>
    //             <p>I'm  a front-end developer</p>
    //           </div>
    //             {/* <span className="hello">Hello,</span> 
    //             <span className="introText">I'm<span className="introName">Aadithya</span><br/>Front-End Developer</span>
    //             <p className="introPara">I am skilled front end developer with creative and user friendly websites.</p> */}
    //             <Link><button className='btn'><img src={btnImg} alt="" className='btnImg'/>Hire me</button></Link>
    //         </div>
    //         <img src="" alt="" className="bg" />
    //     </section>
    // </div>
    <section  className='intro'>
      <div className='introContent'>
             <img src={pro} alt=""  className='pro'/>
             <div className='content'>
              <h4>Aadithya R</h4>
              <p>I'm a front-end developer<br></br></p>
            <Link><button className='btn'><img src={btnImg} alt="" className='btnImg'/>Hire me</button></Link>

             </div>
      </div>
    </section>
  )
}
