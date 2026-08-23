import { Link } from "react-router-dom"
import PageIntro from "../pageIntro/PageIntro"
import styles from "./blogCard.module.css"

export default function BlogCard({data}) {
    const blogPost = data[0]

    function monthDay(dateString) {
        const date = new Date(dateString)

        const day = date.getDate().toString()
        const preMonth = date.toLocaleDateString('da-DK', {month: 'short'})

        const month = preMonth.slice(0,3)

        return {day, month}
    }

    const { day, month } = monthDay(blogPost.createdAt) 

    return (
        <div className={styles.sectionWrapper}>
            <PageIntro heading={"VORES NYHEDER"} subheading={"SENESTE BLOGINDLÆG"}/>
            <div className={styles.blogWrapper}>
                <div className={styles.imgNdate}>
                    <img src={blogPost.image} alt={blogPost.title} className={styles.blogImg} />
                    <div className={styles.blogDate}>
                        <h4 className={styles.dateDay}>{day}</h4>
                        <p className={styles.dateMonth}>{month}</p>
                    </div>
                </div>
                <h3 className={styles.blogTitle}>{blogPost.title}</h3>
                <p className={styles.blogTeaser}>{blogPost.teaser}</p>
                <Link className={styles.readMoreBtn} to={`/blog/${blogPost._id}`}>Læs Mere</Link>
            </div>
        </div>
    )

}