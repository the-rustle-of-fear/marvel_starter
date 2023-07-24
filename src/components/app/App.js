import AppHeader from "../appHeader/AppHeader";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import { lazy, Suspense } from "react";
//import { MainPages, ComixPages, SingleComicPage} from "../pages";
import Spinner from "../spinner/Spinner";

const MainPage = lazy(() => import('../pages/MainPages'));
const Pages404 = lazy(() => import('../pages/404')); 
const ComixPages = lazy(() =>import('../pages/ComixPages'));
const SingleComicPage = lazy(() => import('../pages/SingleComicPages'));
const App = () => {
    


    return (
        <Router>
            <div className="app">
            <AppHeader/>
            <main>
                <Suspense fallback={<Spinner/>}>
                <Routes>              
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/comix" element={<ComixPages/>}/> 
                    <Route path="/comix/:id" element={<SingleComicPage/>}/>   
                    <Route path="*" element={<Pages404/>}/>     
                </Routes>    
                </Suspense>     
            </main>
        </div>
        </Router>
    )
}

export default App;