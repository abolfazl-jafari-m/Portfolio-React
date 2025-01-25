import styles from  "./HeadLine.module.css"

function HeadLine() {
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>Hello I'm <span>Abolfazl Jafari M</span></h1>
                <h3 className={styles.subtitle}>Web Developer & Designer</h3>
            </div>
        </>
    );
}

export default HeadLine;