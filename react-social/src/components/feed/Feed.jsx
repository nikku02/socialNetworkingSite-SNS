import Post from "../post/Post"
import Share from "../share/Share"
import "./Feed.css"
import { useState, useEffect } from "react"
import axios from "axios"


function Feed({username}) {

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        const fetchPosts = async ()=>{
            const res = username ?  await axios.get("/posts/profile/"+username) : await axios.get("posts/timeline/612395fbf420b8189c1045a1");
            setPosts(res.data);
        };
        fetchPosts();
    },[username])

    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                {posts.map((p) => (
                    <Post key={p._id} post={p}/>
                ))}
                
            </div>
        </div>
    )
}

export default Feed
