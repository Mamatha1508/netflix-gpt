import React from 'react'
import { useParams } from 'react-router-dom'

const PlayEpisodes = () => {
    const {episodeLink} = useParams();
    
  return (
    <div className='w-screen aspect-video'>
      <iframe className='w-screen aspect-video'  src={"https://www.youtube.com/embed/"+ episodeLink +"?&autoplay=1&mute=0"} title="YouTube video player" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default PlayEpisodes
