import styles from "./ReviewCard.module.css";
import PropsType from "prop-types";

function ReviewCard({name , profile ,review}) {
    return (
        <div className={styles.card}>
            <h3>{name}</h3>
            <p>{review}</p>
            <img src={profile} alt={name}/>
        </div>
    );
}


ReviewCard.propTypes = {
    name : PropsType.string,
    profile : PropsType.string,
    review : PropsType.string,
}




export default ReviewCard;