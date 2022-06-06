import React from 'react';
import './about.css';
import ME from '../../assets/ppli-1-removebg-preview.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1 Year</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>Loading ...</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>5 Completed</small>
            </article>
          </div>

          <p>

            I am a developer with a specialization in Full Stack operations dedicated to making applications run smoothly.  
            As a natural leader and great team player, I bring an understanding and know the importance of being dependable and reliable to the company and my coworkers.
            I am passionate about the industry because of the opportunities for personal growth and development,
             also to being able to make meaningful contributions to projects that I value technically.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About