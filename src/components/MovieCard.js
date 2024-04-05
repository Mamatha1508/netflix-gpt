

const MovieCard = ({movieInfo}) => {
    const {poster_path} = movieInfo
  return (
    <div className="w-44  mx-2 rounded-md cursor-pointer">
        <img className="rounded-md  w-44" src={poster_path} />
        
    </div>
  )
}

export default MovieCard
