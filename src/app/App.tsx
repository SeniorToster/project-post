import {Link, Route,  Routes} from "react-router-dom";
import {Suspense} from "react";

import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";


import "app/styles/index.scss";

import {useTheme} from "app/Theme";
import {classNames} from "shared/lib/classNames/classNames";


export const App = () => {
  const  {toggleTheme, theme} = useTheme()

    return (
           <div className={classNames('app',{}, [ theme])}>
              <Link to='/'>Main</Link>
              <Link to='/about'>About</Link>
              <button onClick={toggleTheme}>theme</button>
              <Suspense fallback={<div> загрузка... </div>}>
                 <Routes>
                    <Route path='/' element={<MainPage/>} />
                    <Route path='/about' element={<AboutPage/>} />
                 </Routes>
              </Suspense>
           </div>
    );
};