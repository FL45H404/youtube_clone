import './App.css';
import Head from './components/Head';
import Body from './components/Body'
import { RouterProvider, createBrowserRouter,BrowserRouter,Routes,Route } from 'react-router-dom';
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
// const appRouter=createBrowserRouter([{
//   path:'/',
//   element:<Body/>,
//   children:[
//   {
//     path:'/',
//     element:<MainContainer/>
//   },
//   {
//     path:'/watch',
//     element:<WatchList/>
//   }
//   ]
// }])

function App() {
  return (
    <div>
    {/* <RouterProvider router={appRouter}> */}
    <BrowserRouter> 
      <Head />
        <Routes>
          <Route exact path='/' element={<Body/>}>
            <Route index element={<MainContainer/>}/>
            <Route path='watch' element={<WatchList/>}/>
          </Route>
        </Routes>
    </BrowserRouter>

    {/* </RouterProvider> */}
    </div>
  );
}

export default App;
