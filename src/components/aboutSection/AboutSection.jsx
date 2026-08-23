import styles from "./aboutSection.module.css"
import headerImg from "../../assets/images/about_us2.png"
import PageIntro from "../pageIntro/PageIntro"
import homeBg from "../../assets/images/about_us_background.jpg"
import { Link } from "react-router-dom"
import video from "../../assets/video/aboutVideo.mp4"
import videoThumbnail from "../../assets/video/video_img.jpg"
import { useRef, useState } from "react"

export default function AboutSection({homePage}) {
    const videoRef = useRef(null)
    const [playing, setPlaying] = useState(false)

    function playPause() {
        if (playing) {
            videoRef.current.pause()
            setPlaying(false)
        } else {
            videoRef.current.play()
            setPlaying(true)
        }
    }

    return (
        <div className={styles.sectionWrapper}>
            {homePage && <img src={homeBg} className={styles.homeBg}/>}
            <img className={styles.headerImg} src={headerImg} alt="Træning" />
            <PageIntro heading="OM OS" subheading="VELKOMMEN TIL XTREME FITNESS" colorSwap={homePage ? true : false}/>
            <p className={`${styles.aboutBody} ${homePage && styles.homeAbout}`}>Xtreme Fitness er stedet, hvor sved, grin og god musik går hånd i hånd. Vi lover ikke mirakler - men vi lover, at du bliver stærkere, gladere og får ondt i muskler, du ikke vidste, du havde!</p>
            <div className={`${styles.dataSection} ${homePage && styles.homeDataBg}`}>
                <div className={styles.dataGrid}>
                    <div className={styles.dataPoint}>
                        <h3 className={`${styles.dataValue} ${homePage && styles.homeValue}`}>600K+</h3>
                        <h4 className={styles.dataTitle}>{homePage ? "ARBEJDSTIMER" : "WORKING HOURS"}</h4>
                    </div>
                    <div className={styles.dataPoint}>
                        <h3 className={`${styles.dataValue} ${homePage && styles.homeValue}`}>790+</h3>
                        <h4 className={styles.dataTitle}>{homePage ? "PROGRAMMER" : "SUCCESS PROGRAMS"}</h4>
                    </div>
                    <div className={styles.dataPoint}>
                        <h3 className={`${styles.dataValue} ${homePage && styles.homeValue}`}>2560+</h3>
                        <h4 className={styles.dataTitle}>{homePage ? "GLADE KUNDER" : "HAPPY CLIENTS"}</h4>
                    </div>
                    <div className={styles.dataPoint}>
                        <h3 className={`${styles.dataValue} ${homePage && styles.homeValue}`}>{homePage ? "2560+" : "830+"}</h3>
                        <h4 className={styles.dataTitle}>{homePage ? "SUNDERE KROPPE" : "PERFECT BODIES"}</h4>
                    </div>
                </div>
                {homePage && <Link className={styles.readMoreBtn} to="/about">Læs mere <span>{String.fromCharCode(9658)}</span></Link>}
                {!homePage && 
                    <div className={styles.videoContainer}>
                        <video onClick={playPause} onEnded={() => setPlaying(false)} ref={videoRef} className={styles.video} poster={videoThumbnail}>
                            <source src={video} type="video/mp4"/>
                        </video>
                        {!playing && <div onClick={playPause} className={styles.playBtn}>{String.fromCharCode(9658)}</div>}
                    </div>
                }

            </div>
        </div>
    )

}