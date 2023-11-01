import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios"

// fetching data with useEffect ........ //
function DataFetching() {
    // const [posts, setPosts] = useState([])
    const [post, setPost] = useState({})
    // to fetch individual data by id and change posts to post and  setPosts to setPost and ({}) not ([]) ...//
    const [id, setId] = useState(1)
    // ........................... //

    // for id change on a button click ..... //
     const [idFromButtonClick, setIdFromButtonClick] = useState(1)

     const handleClick = () => {
        setIdFromButtonClick(id)
     }
    // ............................ //

    useEffect(() => {
        // to fetch individual data by id, use backticks for the link and add /posts/${id} 
    // axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
    .then(resource => {
        console.log(resource)
        // this will update the posts state variable which will then be rendered in the ui
        setPost(resource.data)
        // setPosts(resource.data)
    })
    .catch(error => {
        console.log(error)
    })
    // [] fetch data only once
    // add [id] to specify id as a dependency, for data fetching by id
    // }, [id])
    }, [idFromButtonClick])

    return(
        <div>
            {/* to fetch individual data by id */}
            <input type="text" value={id} onChange={e => setId(e.target.value)}></input> 
            <button type="button" onClick={handleClick}>Fetch Post</button>
            <div> {post.title} </div>
            {/* ................../// */}
          {/* <ul>
            {
                posts.map(post => <li key={post.id}> {post.title} </li>)
            }
          </ul> */}
        </div>
    )
}

export default DataFetching