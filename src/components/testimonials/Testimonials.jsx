import React from 'react';
import './testimonials.css';
import ava1 from '../../asset/avatar1.jpg';
import ava2 from '../../asset/avatar2.jpg';
import ava3 from '../../asset/avatar3.jpg';
import ava4 from '../../asset/avatar4.jpg';
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar : ava1,
    name : 'Dwifa mayrizka',
    review: 'He is a really talented developer. My own view is that he is finest.'
  },
  {
    avatar : ava2,
    name : 'Yaqub Akbar',
    review: 'He is an excellent developer. In my view, he is the greatest.'
  },
  {
    avatar : ava3,
    name : 'Atik Arman',
    review: 'He is an excellent developer. In my view, he is the greatest.'
  },
  {
    avatar : ava4,
    name : 'Alisha Akbar',
    review: 'He is an excellent developer. In my view, he is the greatest. & I hope he will be my husbend . By the way, it is not my picture.'
  }
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      
      
      <Swiper  className="container testimonials_container"   
       // install Swiper modules
          modules={[ Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
     >
        {
          data.map( ({avatar , name , review} , index) => {
            return (
                <SwiperSlide key={index} className='testimonial'>
                    <div className="client-avatar">
                      <img src={avatar} alt="avater one" />
                    </div>
                    <h5 className='client-name'>{name}</h5>
                    <small className='client-review'>{review}</small>
                </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials