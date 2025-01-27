import styles from "./SkillCard.module.css"
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";

function SkillCard({title, src}) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            <div className={styles.card} data-aos="fade-left"
                 data-aos-duration="2000">
                <img src={src} alt={title}/>
            </div>
        </>
    );
}

SkillCard.propTypes = {
    title: PropTypes.string,
    src: PropTypes.string
}
export default SkillCard;