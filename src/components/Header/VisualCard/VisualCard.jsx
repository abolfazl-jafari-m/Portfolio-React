import styles from "./VisualCard.module.css"
import gif from "../../../assets/Images/Bram.us.gif"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function VisualCard() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className={styles.container} data-aos="fade-left"  data-aos-easing="ease-in-sine"
             data-aos-duration="1000">
           <img src={gif} alt={"banner"}/>
        </div>
    );
}

export default VisualCard;