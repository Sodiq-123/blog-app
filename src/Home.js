import { useState } from "react"

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: '', author: 'Sodiq', id: 1},
        {title: 'Website party', body: '', author: 'Babatunde', id: 2},
        {title: 'New tips for programming', body: '', author: 'Temi', id: 3},
    ])
    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written By {blog.author}</p>

                </div>
            ))}
        </div>
    )
}

export default Home
