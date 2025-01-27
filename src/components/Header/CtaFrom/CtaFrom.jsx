import styles from "./CtaForm.module.css"
import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function CtaFrom() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            <form className={styles.form} data-aos="fade-right"  data-aos-easing="ease-in-sine"
                  data-aos-duration="1000">
                <div className={styles.formSection}>
                    <label htmlFor={"name"}>Your Name :</label>
                    <input type={"text"} id={"name"} placeholder={"Reza & Ali & etc.."}/>
                </div>
                <div className={styles.formSection}>
                    <label htmlFor={"email"}>Your Email :</label>
                    <input type={"email"} id={"email"} placeholder={"youremail@mail.con"}/>
                </div>
                <button>درخواست همکاری با ما</button>
            </form>
        </>
    );
}

export default CtaFrom;