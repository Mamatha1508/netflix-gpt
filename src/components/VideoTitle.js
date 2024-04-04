

const VideoTitle = ({movieDetails}) => {
    const {original_title,overview,poster_path} = movieDetails;
   
  return (
    <div className="pt-60 pl-20 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <img src={poster_path} className="w-48 h-48 m-8 rounded-full"/>
      <p className="w-6/12">{overview}</p>
      <div>
        <button className="bg-gray-500 font-bold text-white m-4 px-6 py-2 rounded-md"> ▶ Play</button>
        <button className="bg-gray-500 font-bold text-white px-6 py-2 rounded-md">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
