import React from 'react';
import './portfolio.css'
import img1 from '../../asset/img1.png';
import img2 from '../../asset/img2.png';
import img3 from '../../asset/img3.png';
import img4 from '../../asset/img4.png';
import img5 from '../../asset/img5.png';
import img6 from '../../asset/img6.png';

const data = [
   {
      id : 1 ,
      image: img1 ,
      title: 'Portfolio by HTML,CSS & JavaScript ' ,
      github: 'https://github.com/muhammod-mahfuj/Normal-Protfoilo.git://github.comhttps://github.com/muhammod-mahfuj/Normal-Protfoilo.git',
      demo: 'https://md-mahfuj.netlify.app'
   },
   {
      id : 2 ,
      image: img2 ,
      title: 'Food Delivery Wedpages' ,
      github: 'https://github.com/muhammod-mahfuj/Hungry-Food-D-.git',
      demo: 'https://hunngry.netlify.app/'
   },
   {
      id : 3 ,
      image: img3 ,
      title:  "NetFlix clone" ,
      github: 'https://github.https://github.com/muhammod-mahfuj/matflix.gitcom',
      demo: 'https://msrsmatflix.netlify.app'
   },
   {
      id : 4 ,
      image: img4 ,
      title: 'Basic colorfull template' ,
      github: 'https://github.https://github.com/muhammod-mahfuj/colourfull-templeate.git',
      demo: 'https://colourfull-wedsite.netlify.app/'
   },
   {
      id : 5 ,
      image: img5 ,
      title: 'React Portfolio' ,
      github: 'https://github.com/muhammod-mahfuj/personal-protfolio-with-react.git',
      demo: 'https://msrs-mahfuj.netlify.app'
   },
   {
      id : 6 ,
      image: img6 ,
      title: 'SunSide Template' ,
      github: 'https://github.com/muhammod-mahfuj/sunny-side.git',
      demo: 'https://msrs-ltd-348ee6.netlify.app/'
   }
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
         data.map(({id, image, title, github, demo}) => {
            return (
               <article key={id} className='portfolio-item'>
               <div className="portfolio-item-img">
                  <img src={image} alt={title} />
               </div>
               <h3>{title}</h3>
               <div className="portfolio-item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
               </div>
            </article>
            )
         })
        }
      </div>
    </section>
  )
}

export default Portfolio