import styles from "./ServiceCard.module.css";
import PropsType from "prop-types";
function ServiceCard({title , picture , description}) {
    return (
        <>
        <div className={styles.card}>
            <img src={picture} alt={title}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        </>
    );
}

ServiceCard.propTypes = {
    title : PropsType.string,
    picture : PropsType.string,
    description : PropsType.string
}
export default ServiceCard;