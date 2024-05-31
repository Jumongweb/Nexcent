import styles from "./index.module.css"
import IconFooter from "../../asset/Iconfooter-icon.png"
import send from "../../asset/send.png"
import logo1 from '../../asset/Social Icons.png'
import logo2 from '../../asset/Social IconsfootIcon2.png'
import logo3 from '../../asset/Social IconsfooterIcon3.png'
import logo4 from '../../asset/Social IconsfooterIcon4.png'
const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.leftFooter}>
                    <div className={styles.textLogo}>
                        <img src={IconFooter} alt="footerIcon"></img>
                        <h1>Nexcent</h1>
                    </div>
                    <div>
                        <p>Copyright &copy; 2020 Nexcent ltd</p>
                        <p>All rights reserved</p>
                    </div>
                    <div className={styles.leftFooterImg}>
                        <img src={logo1} alt="Logo1"></img>
                        <img src={logo2} alt="Logo2"></img>
                        <img src={logo3} alt="Logo3"></img>
                        <img src={logo4} alt="Logo4"></img>
                    </div>
                </div>
                <div className={styles.rightFooter}>
                    <div>
                            <h3>Company</h3>
                            <p>About us</p>
                            <p>Blog</p>
                            <p>Contact us</p>
                            <p>Pricing</p>
                            <p>Testimonials</p>
                    </div>
                    <div>
                        <h3>Support</h3>
                        <p>Help center</p>
                        <p>Terms of service</p>
                        <p>Legal</p>
                        <p>Privacy policy</p>
                        <p>Status</p>
                    </div>

                    <div className={styles.stayUpToDate}>
                        <h3>Stay up to date</h3>
                        <div >
                            <input type={"text"} placeholder={"Your email address"}></input>
                            <img src={send} alt="send"></img>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;