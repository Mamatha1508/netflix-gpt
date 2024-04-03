
//import './App.css';

import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./redux/appStore";
import Header from "./components/Header";
import { Outlet, RouterProvider } from "react-router-dom";


function App() {
  return (
    <div className="App">
       {/* <Provider store={appStore}> 
       
        <Body/>
        </Provider> */}
        {/* <RouterProvider router={appRouter}/> */}
        <Header/>
        <Outlet/>
      
    </div>
  );
}

export default App;
