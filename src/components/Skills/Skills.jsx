import styles from "./Skills.module.css";
import SkillCard from "./SkillCard/SkillCard.jsx";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import "swiper/css/autoplay";
import 'swiper/css';

function Skills() {
    const skills = [
        {
            title: "React",
            src: "/react.svg"
        }, {
            title: "Laravel",
            src: "/laravel.svg"
        }, {
            title: "Livewire",
            src: "/livewire.svg"
        }, {
            title: "alpineJs",
            src: "/alpinejs.svg"
        }, {
            title: "Docker",
            src: "/docker.svg"
        }, {
            title: "Figma",
            src: "/figma.svg"
        }, {
            title: "GitHub",
            src: "/github.svg"
        }, {
            title: "JavaScript",
            src: "/javascript.svg"
        }, {
            title: "MongoDb",
            src: "/mongodb.svg"
        }, {
            title: "MySQL",
            src: "/mysql.svg"
        }, {
            title: "nextjs",
            src: "/nextjs.svg"
        }, {
            title: "postgresql",
            src: "/postgresql.svg"
        }, {
            title: "php",
            src: "/php.svg"
        }, {
            title: "postman",
            src: "/postman.svg"
        }, {
            title: "redux",
            src: "/redux.svg"
        }, {
            title: "typescript",
            src: "/typescript.svg"
        }, {
            title: "wordpress",
            src: "/wordpress.svg"
        },
    ];
    const skillsItems = skills.map((item, index) => {
        return <SwiperSlide key={index}> <SkillCard src={item.src} title={item.title} key={index}/></SwiperSlide>
    })
    return (
        <div className={styles.container}>
            <Swiper
                spaceBetween={10}
                slidesPerView={9}
                modules={[Autoplay]}
                autoplay={{delay : 700}}
                loop={true}
            >
                {skillsItems}
            </Swiper>
        </div>

    );
}

export default Skills;