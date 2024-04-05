import { Provider } from "react-redux";

import appStore from "./redux/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Browse from "./components/Browse";

import App from "./App";
import PlayMovie from "./components/PlayMovie";
import PlaySeries from "./components/PlaySeries";
import EpisodeCard from "./components/EpisodeCard";
import PlayEpisodes from "./components/PlayEpisodes";



const AppRoute=()=>{

    const appRouter=createBrowserRouter([
        {
            path : '/',
            element : <App/>,
            children : [
                {
                    path : '/',
                    element : <Body/>
                },
                {
                    path : '/browse',
                    element : <Browse/>
                },
                {
                    path: '/movie/:movieLink',
                    element: <PlayMovie/>
                },
                {
                    path : '/series/:seriesName',
                    element : <PlaySeries/>
                },
                {
                    path: '/episode/:episodeLink',
                    element : <PlayEpisodes/>
                }
            ]
        }
    ]
    )
    return (
        <div>
            <Provider store={appStore}>
           <RouterProvider router={appRouter}/>
            </Provider>
            
        </div>
    )
}

export default AppRoute;