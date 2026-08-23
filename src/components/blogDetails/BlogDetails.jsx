import styles from "./blogDetails.module.css"

export default function BlogDetails({blog}) {

    return (
        <div className={styles.blogWrapper}>
            <img className={styles.blogImg} src={blog.image} alt={blog.author} />
            <h2 className={styles.blogTitle}>{blog.teaser}</h2>
            <p className={styles.blogBody}>{blog.content}</p>
        </div>
    )

}