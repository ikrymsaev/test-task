import { RouterProvider } from 'react-router-dom';
import { routes } from './layouts/routes';

function App() {
  return (
    <RouterProvider router={routes} />
  )
}

export default App
