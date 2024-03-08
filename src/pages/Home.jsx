import React from 'react';
import HomeStyle from './Pages.module.scss';
import { Link } from 'react-router-dom';
import Avatar from './../images/online-certification.jpeg.webp'

const Home = () => {
  return (
    <div>
      <section className={HomeStyle['about']}>
        <h2 className={HomeStyle['title-2']}>About Me</h2>

        <div className={HomeStyle['about-desc']}>
          <p>
          I am engaged in professional website development. I love it when a website is displayed neatly and concisely, closely matching the design, responsive to every user action, and looks perfect on any mobile device, be it a phone or a tablet. 
          </p>

          <p>
          I studied web development and website creation independently and on courses from WebCademy. During this time, I have completed several projects in web development and turnkey website creation. You can find them in my {' '}
            <Link
              to={'/portfolio/portfolio'}
              className={HomeStyle['about-link']}
            >
             Portfolio
            </Link>
          </p>

          <p><b>Also i speak English, Russian and Uzbek fluently</b></p>
        </div>

        <div className={HomeStyle['about-image']}>
          <img src={Avatar} alt="Portfolio Image" />
        </div>

        <div className={HomeStyle['about-desc']}>
          <p>
            <b>Warranty on Website Development</b>

Within a week of delivering the finalized website development files, I offer a guarantee where I promptly and at no additional cost correct any errors that may have been overlooked during the initial review and discovered later. This ensures that the delivered website meets the desired quality standards and resolves any issues that may arise post-delivery. Just a little extra peace of mind for a smooth and satisfactory website development process!
          </p>

          <p>Here's what the client said after working with me:</p>

          <blockquote className={HomeStyle['blockqoute']}>
            <i>
            "I not only completed the task quickly but also the quality of its execution is top-notch. Thanks for the excellent work!"
            </i>
          </blockquote>

          <p>
          It is convenient to work with me, and it is important to me that the client is satisfied!
          </p>

        
        </div>
      </section>
    </div>
  );
};

export default Home;
