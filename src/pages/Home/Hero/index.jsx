import styles from "./index.module.css";
import illustration from "../../../asset/Illustration.png";
import Dot from "../../../asset/Dot.png"
const Hero = () => {
    return (
        <>
            <div className={styles.heroContainer}>
                <div className={styles.lesson}>
                    <div><h1>Lesson and insights <span>from 8 years</span></h1>
                        <p>Where to grow your business as a photographer: site or social media?</p>
                        <button className="register">Register</button>
                    </div>

                    <div className="hero-section-img">
                        <img src={illustration} alt="Illustration"/>
                    </div>
                </div>
                <div className={styles.dot}>
                    <img src={Dot} alt={"Dot"}/>
                </div>

            </div>

        </>
    )
}

export default Hero;