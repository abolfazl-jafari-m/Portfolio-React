import styles from "./CtaForm.module.css"

function CtaFrom() {
    return (
        <>
            <form className={styles.form}>
                <div className={styles.formSection}>
                    <label htmlFor={"name"}>Your Name :</label>
                    <input type={"text"} id={"name"} placeholder={"Reza & Ali & etc.."}/>
                </div>
                <div className={styles.formSection}>
                    <label htmlFor={"email"}>Your Email :</label>
                    <input type={"email"} id={"email"} placeholder={"youremail@mail.con"}/>
                </div>
                <button>درخواست همکاری یا ما</button>
            </form>
        </>
    );
}

export default CtaFrom;