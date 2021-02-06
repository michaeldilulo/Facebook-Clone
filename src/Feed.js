import React from 'react'
import "./Feed.css"
import StoryReel from "./StoryReel"
import MessageSender from "./MessageSender"
import Post from "./Post"

function Feed() {
    return (
        <div className="feed">

            <StoryReel />
            <MessageSender />
            <Post
                profilePic="https://cdn11.bigcommerce.com/s-oe2q4reh/images/stencil/2048x2048/products/738/1295/Siberian_Husky_Puppy__60707.1568880761.jpg?c=2"
                message="Wow This works!!!"
                timestamp="2/5/2021 6:30 PM"
                username="Puppy"
                image="https://thehappypuppysite.com/wp-content/uploads/2015/09/The-Siberian-Husky-HP-long.jpg"
            />

            <Post 
                profilePic="https://cdn11.bigcommerce.com/s-oe2q4reh/images/stencil/2048x2048/products/738/1295/Siberian_Husky_Puppy__60707.1568880761.jpg?c=2"
                message="This is wooftastic!!!"
                timestamp="2/5/2021 6:30 PM"
                username="Puppy"
                />
            
        </div>
    )
}

export default Feed
