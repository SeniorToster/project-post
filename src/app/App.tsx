import "app/styles/index.scss";

import {useTheme} from "app/Theme";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRoutes} from "app/Routes";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {Suspense} from "react";


export const App = () => {
  const  { theme} = useTheme()

    return (
           <div className={classNames({cls:'app', additional:[theme]})}>
               <Suspense fallback=''>
                  <Navbar/>
                   <div className='content'>
                       <Sidebar/>
                       <div className='page'>
                           <AppRoutes/>
                       </div>
                   </div>
               </Suspense>
           </div>
    );
};