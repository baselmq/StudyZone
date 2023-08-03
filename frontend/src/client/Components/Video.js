import React from 'react'
const Video = ({display ,videoRef}) => {

        
    return(
        <div className={`${display}`}>

<video
id="my_video_1"
className="video-js vjs-default-skin "
ref={videoRef}
controls
height="500px"
preload="none"
poster="../Images/instructorr.jpg"
data-setup='{ "aspectRatio":"640:400", "playbackRates": [1, 1.5, 2] }'
>
<source src="../Images/React_in_100 Seconds.mp4" type="video/mp4" />
<source src="../Images/React_in_100 Seconds.mp4.webm" type="video/webm" />
</video>
        </div>
)
  
}

export default Video
