import styles from "./Soicals.module.css";
import instagram from "../../../assets/Images/instagram.svg";
import telegram from "../../../assets/Images/telegram.svg";
import linkedin from "../../../assets/Images/linkedi.svg";
import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Socials() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
        <div className={styles.container} data-aos="fade-right"  data-aos-easing="ease-in-sine"
             data-aos-duration="1000">
            <h3>ما را در شبکه های اجتماعی دنبال کنید</h3>
            <div className={styles.socials}>
                <img src={instagram} alt={"instagram"}/>
                <img src={telegram} alt={"telegram"}/>
                <img src={linkedin} alt={"linkedin"}/>
            </div>
        </div>
        </>
    );
}

export default Socials;