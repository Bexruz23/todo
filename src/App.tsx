import {ThemeProvider, router} from './providers'
import { RouterProvider } from 'react-router-dom'

function App() {

  return (
    <ThemeProvider>
      <RouterProvider router={router}/>

    </ThemeProvider>
  )
}

export default App
