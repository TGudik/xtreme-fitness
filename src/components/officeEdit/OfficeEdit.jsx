import { useEffect, useState } from "react"
import styles from "./officeEdit.module.css"
import { useFetchBlogs } from "../../hooks/useFetchBlogs"

export default function OfficeEdit({blogs}) {
    const [currentBlog, setCurrentBlog] = useState(null)
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [author, setAuthor] = useState("")
    const [teaser, setTeaser] = useState("")
    const [content, setContent] = useState("")

    const {addBlog, removeBlogById, updateBlog} = useFetchBlogs()

    useEffect(() => {
        if (!currentBlog) return

        setTitle(currentBlog.title);
        setImage(currentBlog.image);
        setAuthor(currentBlog.author);
        setTeaser(currentBlog.teaser);
        setContent(currentBlog.content);

    }, [currentBlog])

    function clearCurrentBlog() {
        setCurrentBlog(null)
        setTitle("")
        setImage("")
        setAuthor("")
        setTeaser("")
        setContent("")
    }

    function createFormData() {
        let formData = {
            title: title,
            image: image,
            author: author,
            teaser: teaser,
            content: content
        }
        if (currentBlog) {
            formData = {...formData, id: currentBlog._id}
        }
        return formData
    }

    function handleAddSubmit() {
        const data = createFormData();
        const formData = JSON.stringify(data);
        addBlog(formData)
        setTitle("");
        setImage("");
        setAuthor("");
        setTeaser("");
        setContent("");
    }

    function handleUpdateSubmit() {
        const data = createFormData();
        const formData = JSON.stringify(data)
        updateBlog(formData);
        setTitle("");
        setImage("");
        setAuthor("");
        setTeaser("");
        setContent("");
    }

    function onSubmit(e) {
        e.preventDefault()
        currentBlog ? handleUpdateSubmit() : handleAddSubmit() 
    }


    return (
        <div className={styles.sectionWrapper}>
            <div className={styles.blogList}>
                {blogs.map((blog) => (
                    <div key={blog._id} className={styles.blogListItem}>
                        <h2 className={styles.listTitle}>{blog.title}</h2>
                        <p className={styles.listAuthor}>{blog.author}</p>
                        <p className={styles.listTeaser}>{blog.teaser}</p>
                        <div className={styles.btns}>
                            <button onClick={() => setCurrentBlog(blog)} className={styles.btn}>Update</button>
                            <button onClick={() => removeBlogById(blog._id)} className={styles.btn}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            
                <div className={styles.addBlog}>
                    {currentBlog && <button onClick={clearCurrentBlog}>Tilføj blog i stedet</button>}
                    <h3>{currentBlog ? "Opdater" : "Tilføj"} blog</h3>
                    <form onSubmit={(e) => {onSubmit(e)}} className={styles.blogForm}>
                        <input placeholder="Titel" value={title} onChange={(e) => setTitle(e.target.value)} type="text" className={styles.blogInput} />
                        <input placeholder="Image" value={image} onChange={(e) => setImage(e.target.value)} type="text" className={styles.blogInput} />
                        <input placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} type="text" className={styles.blogInput} />
                        <input placeholder="teaser" value={teaser} onChange={(e) => setTeaser(e.target.value)} type="text" className={styles.blogInput} />
                        <input placeholder="content" value={content} onChange={(e) => setContent(e.target.value)} type="text" className={styles.blogInput} />
                        <button type="submit">Send blog</button>
                    </form>
                </div>
        </div>
    )

}