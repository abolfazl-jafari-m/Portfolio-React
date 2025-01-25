import styles from "./Header.module.css";
import CtaFrom from "./CtaFrom/CtaFrom.jsx";
import HeadLine from "./HeadLine/HeadLine.jsx";
import VisualCard from "./VisualCard/VisualCard.jsx";
import Benefits from "./Benefits/Benefits.jsx";

function Header() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.headline}>
                        <HeadLine />
                </div>
                <div className={styles.cta}>
                        <CtaFrom />
                </div>
                <div className={styles.headerPic}>
                    <VisualCard />
                </div>
                <div className={styles.benefits}>
                    <Benefits />
                </div>
            </div>
        </>
    );
}

export default Header;