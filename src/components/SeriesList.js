import { Link } from "react-router-dom";
import SeriesCard from "./SeriesCard";


const SeriesList = ({seriesList,title}) => {
   // const  {poster_path}= seriesList;
  return (
    <div>
        <h1 className="text-2xl font-bold text-white my-6">{title}</h1>
        <div className="flex ">
        {
            seriesList?.map(series=>{
                return (
                   
                   <Link to={'/series/'+series.title} ><SeriesCard seriesInfo={series} /></Link> 
                 
                )
            })
        }
        </div>
       
      
    </div>
    
  )
}

export default SeriesList
