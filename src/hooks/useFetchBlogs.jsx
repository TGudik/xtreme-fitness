import { useRevalidator } from "react-router-dom"


export function useFetchBlogs() {
    const apiUrl = "http://localhost:3042/blog"
    const { revalidate } = useRevalidator()

    async function removeBlogById(id) {
        
        try {
            const res = await fetch(`${apiUrl}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
            })
            const data = await res.json()
            console.log(data)
            revalidate()
        } catch (error) {
            console.error("fejl i at slette blog", error)
        }
        
    }

    async function addBlog(formData) {
        try {
          const res = await fetch(`${apiUrl}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: formData,
          });
          const data = await res.json();
          console.log(data);
          revalidate()
        } catch (error) {
          console.error(error);
        }
    }

    async function updateBlog(formData) {
        try {
          const res = await fetch(`${apiUrl}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: formData,
          });

          const data = await res.json();
          console.log(data);
          revalidate()
        } catch (error) {
          console.error(error);
        }
    }

    return {
        removeBlogById,
        addBlog,
        updateBlog
    }

}