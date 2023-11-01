import React, {Component} from "react";
// for data fetching ........//
import axios from "axios";
// ////////................

class PostList extends Component{

    constructor(props){
        super(props)

        this.state = {
            posts : [],
            // error message incase the api fails ../ remember the comma since it's two State ..// 
            error : []
        }
    }

    componentDidMount(){
        // u can utter the https link by adding 1 at the end inorder to display the error message //
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        // incase something goes wrong
        .catch(error => {
            console.log(error)
            // for the error state
            this.setState({errorMessage : "Error retrieving data"})
        })
    }

    render(){
        const {posts, errorMessage} = this.state
        return(
            <div>
              List of Posts
              {
                posts.length ?
                posts.map(post => <div key={post.id}> {post.title} </div>) :
                // the null is incase the post is an empty array , we are not going to render anything ..//
                null
              }

              {
                errorMessage ? <div> {errorMessage} </div> :
                null
              }
            </div>
        )
    }
}

export default PostList