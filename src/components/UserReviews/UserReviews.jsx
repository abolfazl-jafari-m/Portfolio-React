import styles from "./UserReview.module.css";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, EffectFade} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import "./styles.css";
import ReviewCard from "./ReviewCard/ReviewCard.jsx";

function UserReviews() {
    const reviews = [
        {
            name: "John Doe",
            profile: "/profiles/avatar1.svg",
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum magni natus sunt!"
        },
        {
            name: "John Jafari",
            profile: "/profiles/avatar2.svg",
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum magni natus sunt!"
        },
        {
            name: "Sara",
            profile: "/profiles/avatar3.svg",
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum magni natus sunt!"
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
                <div className={styles.title}>
                    <div>
                        <h2>نظرات همکارهای قبلی ما</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium culpa delectus
                            doloribus
                            quaerat.
                        </p>
                    </div>
                </div>
                <div className={styles.slides}>
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