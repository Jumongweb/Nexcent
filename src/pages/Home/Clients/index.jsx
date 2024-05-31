import {members} from "./data";
import logo0 from "../../../asset/Logo.png"
import logo1 from "../../../asset/Logo (1).png"
import logo2 from "../../../asset/Logo (2).png"
import logo3 from "../../../asset/Logo (3).png"
import logo4 from "../../../asset/Logo (4).png"
import logo5 from "../../../asset/Logo (5).png"
import logo6 from "../../../asset/Logo (6).png"
import styles from "./index.module.css"
import unseen from "../../../asset/rafikiunseen.png"
import unseen2 from "../../../asset/panadesign_site.png"
import memberIcon from "../../../asset/Iconhelper.png"
import clubIcon from "../../../asset/Iconhelper2.png"
import eventIcon from "../../../asset/Iconhelper3.png"
import paymentIcon from "../../../asset/Iconhelper4.png"
import timSmithImg from "../../../asset/image 9.png"
import rightArrow from "../../../asset/Right.png";
import timLogo1 from "../../../asset/Logo.png";
import timLogo2 from "../../../asset/Logo (1).png";
import timLogo3 from "../../../asset/Logo (2).png";
import timLogo4 from "../../../asset/Logo (3).png";
import timLogo5 from "../../../asset/Logo (4).png";
import timLogo6 from "../../../asset/Logo (5).png";

const Client = () => {
    return (
        <>
            <div className={styles.client}>
                <div className="client-text">
                    <h2>Our Client</h2>
                    <p>We have been working with some Fortune 500+ clients</p>
                </div>
                <div className={styles.clientImage}>
                    <img src={logo0} alt={"logo0"}/>
                    <img src={logo1} alt={"logo1"}/>
                    <img src={logo2} alt={"logo2"}/>
                    <img src={logo3} alt={"logo3"}/>
                    <img src={logo4} alt={"logo4"}/>
                    <img src={logo5} alt={"logo5"}/>
                    <img src={logo6} alt={"logo6"}/>
                </div>
            </div>

            <div className={styles.member}>
                {
                    members.map((member, index) => (
                        <div key={index}>
                            <img src={member.image} alt={""}/>
                            <h2>{member.title}</h2>
                            <p>{member.text}</p>
                        </div>
                    ))
                }
            </div>

            <div className={styles.unseen}>
                <div className={styles.left}>
                    <img src={unseen} alt={"unseen"}/>
                </div>
                <div className={styles.right}>
                    <h2>
                        The unseen of spending three
                        <span>years at Pixelgrade</span>
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan
                        quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                        tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar,
                        aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                    </p>
                    <button>Learn More</button>
                </div>
            </div>

            <div className={styles.helpingLocal}>
                <div className={styles.leftHelpingLocal}>
                    <h2>Helping a local <span>business reinvent itself</span></h2>
                    <p>We reached here with our hard work and dedication</p>
                </div>
                <div className={styles.rightHelpingLocal}>
                    <div className={styles.topDiv}>
                        <div>
                            <img src={memberIcon} alt={"memberIcon"}/>
                            <div>
                                <p>
                                    2,245,341
                                    <span className={styles.spanText}>Members</span>
                                </p>
                            </div>
                        </div>

                        <div>
                            <img src={clubIcon} alt={"ClubIcon"}/>
                            <div>
                                <p>
                                    46,328
                                    <span className={styles.spanText}>Clubs</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.bottomDiv}>
                        <div>
                            <img src={eventIcon} alt={"Event"}/>
                            <div>
                                <p>
                                    <span className={styles.spanNumber}>828,867</span>
                                    <span className={styles.spanText}>Event Bookings</span>
                                </p>
                            </div>
                        </div>
                        <div>
                            <img src={paymentIcon} alt={"PaymentIcon"}/>
                            <div>
                                <p>
                                    <span className={styles.spanNumber}>1,926,436</span>
                                    <span className={styles.spanText}>Payments</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.unseen}>
                <div className={styles.left}>
                    <img src={unseen2} alt={"unseen"}/>
                </div>
                <div className={styles.right}>
                    <h2>
                        How to design your site footer like
                        <span>we did</span>
                    </h2>
                    <p>
                        Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie,
                        massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices
                        mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis
                        finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget
                        nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit
                        venenatis libero. Donec consectetur faucibus ipsum id gravida.
                    </p>
                    <button>Learn More</button>
                </div>
            </div>

            <div className={styles.timSmithSection}>
                <div className={styles.timSmithImgDiv}>
                    <img src={timSmithImg} alt={"Tim_Smith"}/>
                </div>
                <div className={styles.rightSmithSection}>
                    <div>
                        Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus
                        tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in,
                        gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie,
                        nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla
                        sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque
                        malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget
                        efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                    </div>
                    <div>
                        <p className={styles.name}>Tim Smith</p>
                        <p>British Dragon Boat Racing Association</p>
                    </div>
                    <div className={styles.logoContainer}>
                        <div className={styles.smithLogos}>
                            <img src={timLogo1} alt={"timLogo1"}/>
                            <img src={timLogo2} alt={"timLogo2"}/>
                            <img src={timLogo3} alt={"timLogo3"}/>
                            <img src={timLogo4} alt={"timLogo4"}/>
                            <img src={timLogo5} alt={"timLogo5"}/>
                            <img src={timLogo6} alt={"timLogo6"}/>
                        </div>
                        <div className={styles.allCustomer}>
                            <h4 className={styles.meetAllCustomer}>Meet all customer </h4>
                            <span><img src={rightArrow} alt={"Right-Arrow"}/></span>
                        </div>
                    </div>

                </div>
            </div>

            <div>
                <div>
                    <h1>Caring is the new marketing</h1>
                    <p>
                        The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.
                    </p>
                </div>
            </div>


        </>
    )
}
export default Client;