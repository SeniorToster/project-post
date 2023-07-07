import 'app/styles/index.scss'
import { AppRoutes } from 'app/Routes'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense } from 'react'

export const App = () => {
    return (
        <Suspense fallback=''>
            <Navbar/>
            <div className='content'>
                <Sidebar/>
                <div className='page'>
                    <AppRoutes/>
                </div>
            </div>
        </Suspense>
    )
}
