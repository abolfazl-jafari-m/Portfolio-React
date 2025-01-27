import styles from "./ServiceCard.module.css";
import PropsType from "prop-types";
import {useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
function ServiceCard({title , picture , description}) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
        <div className={styles.card} data-aos="fade-up-right"  data-aos-easing="ease-out"
             data-aos-duration="500">
            <img src={picture} alt={title}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        </>
    );
}

ServiceCard.propTypes = {
    title : PropsType.string,
    picture : PropsType.string,
    description : PropsType.string
}
export default ServiceCard;