import logo from "../../asset/Icon.png"
import styles from "./index.module.css"
const Navbar = () => {
    return (
        <>
            <div className={styles.nav}>
                <div className={styles.leftSection}>
                    <img src={logo} alt={"Logo"}></img>
                    <h2>Nexcent</h2>
                </div>
                <div className={styles.midSection}>
                        <p>Home</p>
                        <p>Features</p>
                        <p>Community</p>
                        <p>Blog</p>
                        <p>Pricing</p>
                </div>
                <div className={styles.rightSection}>
                    <button className={styles.loginBtn}>Login</button>
                    <button className={styles.signUpBtn}>Sign up</button>
                </div>
            </div>
        </>
    )
}

export default Navbar;