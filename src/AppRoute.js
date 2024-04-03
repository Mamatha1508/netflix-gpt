import { Provider } from "react-redux";

import appStore from "./redux/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Browse from "./components/Browse";

import App from "./App";



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