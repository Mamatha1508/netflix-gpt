

const SeriesCard = ({seriesInfo}) => {
    const {poster_path}= seriesInfo;
  return (
    <div>
       <div className="rounded-lg  w-44 mx-2 ">
        
        <img className="rounded-lg" src={poster_path}/>

      </div>
    </div>
  )
}

export default SeriesCard
