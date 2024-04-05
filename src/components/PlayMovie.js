import { useParams } from "react-router-dom"


const PlayMovie = () => {
    const {movieLink}= useParams();
    console.log('movie link',movieLink);
  return (
    <div className="w-screen aspect-video">
      <iframe className="w-screen aspect-video" src={"https://www.youtube.com/embed/" +movieLink+"?&autoplay=1&mute=0"} title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe>

      This is movie screen
    </div>
  )
}

export default PlayMovie


//KQYZ1aFlUe4?si=5jPxhRMRVob1EeUn

//XZVpF-ULv1Q?si=9K43nS3XTEouUMcE


//?si=PlUxoEtKVXThwoNh