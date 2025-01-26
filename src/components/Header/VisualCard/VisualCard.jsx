import styles from "./VisualCard.module.css"
import gif from "../../../assets/Images/Bram.us.gif"

function VisualCard() {
    return (
        <div className={styles.container}>
           <img src={gif} alt={"banner"}/>
        </div>
    );
}

export default VisualCard;