import styles from "./CTA.module.css"
import CtaFrom from "../Header/CtaFrom/CtaFrom.jsx";

function Cta() {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.title}>
                <h3>بهترین ها را با ما تجربه کنید</h3>
                <p>کافیه اسم ادرس ایمیل خود را برای ما ارسال کرده تا با شما تماس حاصل گردد</p>
            </div>
            <div className={styles.from}>
                <CtaFrom />
            </div>
        </div>
        </>
    );
}

export default Cta;