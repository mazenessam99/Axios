import axios from "axios"
import { useEffect, useState } from "react"

function Posts() {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    async function getPosts() {
        try {
            const { data } = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            )
            setPosts(data)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    if (loading) return <p className="text-center">Loading...</p>
    if (error) return <p className="text-red-500 text-center">{error}</p>

    return (
        <div className="flex justify-center gap-4 flex-wrap p-5">
            {posts.map((post) => (
                <div
                    key={post.id}
                    className="bg-white shadow-md rounded-2xl p-5 w-72 cursor-pointer hover:scale-105 transition"
                >
                    <h3 className="font-semibold text-black text-center">{post.title}</h3>
                </div>
            ))}
        </div>
    )
}

export default Posts