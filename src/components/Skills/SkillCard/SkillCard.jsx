import styles from "./SkillCard.module.css"

function SkillCard({title , src}) {
    return (
        <>
            <div className={styles.card}>
                <img src={src} alt={title} />
            </div>
        </>
    );
}

export default SkillCard;