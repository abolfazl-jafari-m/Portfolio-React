import styles from  "./HeadLine.module.css"
import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function HeadLine() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            <div className={styles.container} data-aos="fade-down"  data-aos-easing="ease-in-sine"
                 data-aos-duration="1000">
                <h1 className={styles.title}>Hello I'm <span>Abolfazl Jafari M</span></h1>
                <h3 className={styles.subtitle}>Web Developer & Designer</h3>
            </div>
        </>
    );
}

export default HeadLine;