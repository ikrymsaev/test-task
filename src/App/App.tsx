import { RouterProvider } from 'react-router-dom';
import { routes } from './layouts/routes';

function App(): JSX.Element {
  return <RouterProvider router={routes} />;
}

export default App;
