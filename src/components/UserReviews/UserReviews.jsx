import styles from "./UserReview.module.css";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, EffectFade} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import "./styles.css";
import ReviewCard from "./ReviewCard/ReviewCard.jsx";
import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function UserReviews() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const reviews = [
        {
            name: "John Doe",
            profile: "/profiles/avatar1.svg",
            review: "بابا دس خوش کار درست ترین"
        },
        {
            name: "John Jafari",
            profile: "/profiles/avatar2.svg",
            review: "د بست . زبان قاصره از توصیف"
        },
        {
            name: "Sara",
            profile: "/profiles/avatar3.svg",
            review: "The Only Coding G.O.A.T🐐"
        },
    ];
    const reviewItems = reviews.map((item, index) => {
        return <SwiperSlide key={index} className={styles.slide}><ReviewCard name={item.name} profile={item.profile}
                                                                             review={item.review}/></SwiperSlide>
    });
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <>
            <div className={styles.container}>
                <div className={styles.title} data-aos="fade-down"
                     data-aos-anchor-placement="top-center" data-aos-easing="ease-in-sine"
                     data-aos-duration="700">
                    <div>
                        <h2>نظرات همکارهای قبلی ما</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium culpa delectus
                            doloribus
                            quaerat.
                        </p>
                    </div>
                </div >
                <div className={styles.slides}  data-aos="fade-up"
                     data-aos-anchor-placement="top-center" data-aos-easing="ease-in-sine"
                     data-aos-duration="700">
                    <Swiper className={styles.slidesWrapper}
                            modules={[Navigation, Pagination, EffectFade]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={pagination}
                            effect="fade"
                    >
                        {reviewItems}
                    </Swiper>
                </div>


            </div>
        </>
    );
}

export default UserReviews;