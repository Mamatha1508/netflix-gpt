

const EpisodeCard = ({episodeInfo}) => {
    const {episode_poster,description,title}= episodeInfo;
  return (
    <div className="flex">
      <div className="bg-black">
        <img className="w-52 h-44 rounded-lg mb-2" src={episode_poster}/>
      </div>
      <div className="text-white mt-14 ml-12 w-3/4">
        <h1>{title}</h1>
        <h1>{description}</h1>
      </div>
    </div>
  )
}

export default EpisodeCard
