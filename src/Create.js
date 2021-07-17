import { useState } from "react"
import { useHistory } from "react-router-dom"

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')
    const [isPending, setIsPending] = useState(false)
    const [isComplete, setIsComplete] = useState(false)
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, author }

        setIsPending(true)
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog submit');
            setIsPending(false)
            setTitle('')
            setBody('')
            setAuthor('')
            setIsComplete(!isComplete)
            history.push('/')
        })
        
    }

    return (
        <div className="create">
            {!isComplete && <>
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >    
                    <option value="mario">mario</option>
                    <option value="rashy">rashy</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
            </>}
            {isComplete && <> 
            <h1>Blog Created Successfully</h1>
            <button onClick={() => setIsComplete(!isComplete)}>Create new Blog</button>
            </>}
        </div>
    )
}

export default Create
