import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react";
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Get to <b>know</b> me!</h1>
          <p>
            Hello, my name is <b>Onesmus Mutyauvyu</b>. I am a skilled <b>Fullstack Developer</b> with over two years of experience.
            <br /><br />
            My background includes a Bachelor's degree in <b>Mathematics and Computer Science</b> from <a href="https://www.ttu.ac.ke/"
              target="_blank"
              rel="noopener noreferrer">Taita Taveta University</a>.
            <br /><br />
            Currently, I am a <b>Backend Developer</b> at <a
              href="https://thelathingroup.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Thelathin Group Ltd
            </a>
            , where I focus on creating scalable and efficient server-side solutions and APIs.
            <br /><br />
            My role involves leveraging both <b>front-end</b> and <b>back-end</b> technologies to drive innovative solutions and address complex technical challenges.
            <br /><br />
            I blend my academic knowledge with practical expertise to build seamless, high-performance applications.
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>

      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        <Skills skill='MongoDb' />
        <Skills skill='Express' />
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='Postman' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='HTML5' />
        <Skills skill='CSS3' />
        <Skills skill='Bootstrap' />
        <Skills skill='TailwindCSS' />
        <Skills skill='Next.js' />
        <Skills skill='MySQL' />
        <Skills skill='PostgreSQL' />
        <Skills skill='Python' />
      </div>
    </>
  )
}

export default About;
