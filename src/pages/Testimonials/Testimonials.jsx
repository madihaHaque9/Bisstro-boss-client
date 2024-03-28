import SectionTitle from "../../components/SectionTitle/SectionTitle";
import '@smastrom/react-rating/style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";


const Testimonials = () => {
    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <section className="my-20">
            <SectionTitle subHeading="What Our Client Say?" heading={"Testimonials"}></SectionTitle>
            
            <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        
        {
            reviews.map(review=><SwiperSlide key={review._id}>
               <div className="flex flex-col items-center mx-24 my-16">
                <Rating style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly>
                
                </Rating>
                <p className="py-8">{review.details}</p>
                <h3 className="text-2xl text-orange-400">{review.name}</h3>
               </div>
                </SwiperSlide>)
        }
      </Swiper>
            
        </section>
    );
};

export default Testimonials;