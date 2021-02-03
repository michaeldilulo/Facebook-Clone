import React from 'react'
import './StoryReel.css'
import Story from './Story'
import {Avatar} from "@material-ui/core"

function StoryReel() {
    return (
        <div className="storyReel">
            <Story image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBHC2s4NFdzXEsVzvBPGjkrSePQa-8XFuNtQ&usqp=CAU"
                profileSrc="https://www.petmd.com/sites/default/files/styles/article_image/public/petmd-puppy-weight.jpg?itok=IwMOwGSX"
                title="Puppy McGee"
            />
                        <Story image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBHC2s4NFdzXEsVzvBPGjkrSePQa-8XFuNtQ&usqp=CAU"
                profileSrc="https://www.petmd.com/sites/default/files/styles/article_image/public/petmd-puppy-weight.jpg?itok=IwMOwGSX"
                title="Puppy McGee"
            />
            {/* Story Three Component */}
            {/* Story Four Component */}
            {/* Story Five Component */}
        </div>
    )
}

export default StoryReel
