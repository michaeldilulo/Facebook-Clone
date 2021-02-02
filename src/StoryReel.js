import React from 'react'
import './StoryReel.css'
import Story from './Story'
import {Avatar} from "@material-ui/core"

function StoryReel() {
    return (
        <div className="storyReel">
            <Story image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBHC2s4NFdzXEsVzvBPGjkrSePQa-8XFuNtQ&usqp=CAU"
                profileSrc="https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e6051b748fc2d4157a842e57e427ad44&v=4"
                title="Sonny Sangha"
            />
            {/* Story Two Component */}
            {/* Story Three Component */}
            {/* Story Four Component */}
            {/* Story Five Component */}
        </div>
    )
}

export default StoryReel
