import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import HomePage from './pages/Home.page'

import ContentComponent from './components/Content/Content.component'

import './App.sass'

library.add(fab, fas, far)

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={ <ContentComponent /> }>
          <Route index element={ <HomePage /> } />
        </Route>
      </>
    )
  )

  return (
    <>
      <main id='App' className='app w-full min-h-screen'>
        <div className='app-container w-full min-h-screen'>
          <RouterProvider router={ router } />
        </div>
      </main>
    </>
  )
}

export default App
