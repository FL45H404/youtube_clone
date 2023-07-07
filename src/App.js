import './App.css';
import Head from './components/Head';
import Body from './components/Body'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchList from './components/WatchList';


/*
Head
Body
  sidebar
    menuitem
  mainContainer
    buttonlist
    videoContainer
    VideoCard
*/
const appRouter=createBrowserRouter([{
  path:'/',
  element:<Body/>,
  children:[
  {
    path:'/',
    element:<MainContainer/>
  },
  {
    path:'/watch',
    element:<WatchList/>
  }
  ]
}])

function App() {
  return (
    <div>
    <RouterProvider router={appRouter}>
    <Head/>
    </RouterProvider>
    </div>
  );
}

export default App;
