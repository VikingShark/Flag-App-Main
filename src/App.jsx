import { useState } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'


/* Pages */
import HomePage, { getCountriesByQueryStringLoader} from './pages/Home'
import CountryPage, {CountryPageLoader} from './pages/CountryPage'
import NotFound from './pages/NotFound'

/* Layouts */
import RootLayout from './layouts/RootLayout'
import { Box } from '@mui/material'




function App() {

  const [darkMode, setDarkMode] = useState(true)


  const routesFromElements = createRoutesFromElements(
    <Route path="/" element={<RootLayout darkMode={darkMode} setDarkMode={setDarkMode}  />}>
      <Route index element={<HomePage darkMode={darkMode} />} loader={getCountriesByQueryStringLoader} />
      <Route path="country/:CountryCode" element={<CountryPage darkMode={darkMode} />} loader={CountryPageLoader} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )

  const router = createBrowserRouter(routesFromElements);
 
  return (
    <>
      <Box> 
          <RouterProvider router={router}/>
      </Box>
    </>
  )
}

export default App
