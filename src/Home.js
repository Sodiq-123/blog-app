import { useState, useEffect } from "react"
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'Lorem Ipsum...', author: 'Sodiq', id: 1},
        {title: 'Website party', body: 'Lorem Ipsum...', author: 'Babatunde', id: 2},
        {title: 'New tips for programming', body: 'Lorem Ipsum...', author: 'Temi', id: 3},
    ])


    const [name, setName] = useState('Temi')

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    useEffect(() => {
        console.log('Use Effect Ran')
        console.log(name)
    }, [name])
    
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
            <button onClick={() => setName('Luigi')}>Change name</button>
            <p>{ name }</p>
        </div>
    )
}

export default Home
