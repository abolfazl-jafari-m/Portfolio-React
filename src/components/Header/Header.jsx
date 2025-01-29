import styles from "./Header.module.css";
import CtaFrom from "./CtaFrom/CtaFrom.jsx";
import HeadLine from "./HeadLine/HeadLine.jsx";
import VisualCard from "./VisualCard/VisualCard.jsx";
import Socials from "./Socials/Socials.jsx";
import Logo from "/logo.png"
import Greeting from "./Greeting/Greeting.jsx";


function Header() {
    return (
        <>
            <div className={styles.container}>
                <Greeting isLoggedIn={true} name={"Abolfazl"}/>
                <div className={styles.headline}>
                        <HeadLine />
                </div>
                <div className={styles.cta}>
                        <CtaFrom />
                </div>
                <div className={styles.headerPic}>
                    <VisualCard />
                </div>
                <div className={styles.socials}>
                    <Socials />
                </div>
                <div className={styles.logo}>
                    <img src={Logo} alt={"logo"}/>
                </div>

            </div>
        </>
    );
}

export default Header;