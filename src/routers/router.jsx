import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from 'react-router-dom';
import { Card } from '../Pages/Card';
import { navigation } from '../lib/constants';
import { About } from '../Pages/About';
import { Skills } from '../Pages/Skills';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Outlet />}>
        <Route path={navigation[1].path_url} element={<About />} />
        <Route path={navigation[2].path_url} element={<Skills />} />
        <Route path={navigation[0].path_url} element={<Card />} />
      </Route>
    </>,
  ),
);
