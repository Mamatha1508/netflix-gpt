
import { Link, useParams } from "react-router-dom";
import { seriesList } from "../utils/seriesList"
import EpisodeCard from "./EpisodeCard";


const PlaySeries = () => {
    const {seriesName}= useParams();
    console.log('series Name',seriesName);
    const series= seriesList.filter(series => {
        if(series.title==seriesName)
        {
            console.log('series filtered',series);
            return series;
        }
        
    });
    console.log('series f',series);
    const {episodeList}=series[0]
    console.log('episodeList',episodeList);
  return (
    <div className="w-screen aspect-video h-1/2 bg-black ">
      <div className="w-screen aspect-video h-1/2">
      <iframe className="w-screen aspect-video h-3/4" src={"https://www.youtube.com/embed/"+series[0].trailerLink+"?&autoplay=1&mute=1"}
      title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" ></iframe>
      </div>
      <div className="-mt-32 ml-24">
        <h1 className="text-white font-bold text-2xl my-4"><span className="font-bold text-2xl text-red-800">N  </span>Series</h1>
        <h1 className="text-3xl font-bold text-white">{series[0].title}</h1>
        <button className="bg-white bg-opacity-95 text-black w-44 rounded-md p-2 my-2">Play</button>
        <h1 className="text-3xl font-bold text-white ">Episodes</h1>
        <div>
        {
            episodeList?.map(episode=>{
                return <Link to={'/episode/'+ episode.episodeLink}><EpisodeCard episodeInfo={episode}/></Link>
            })
        }
        </div>
      </div>
    </div>
  )
}

export default PlaySeries
