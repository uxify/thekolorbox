// shared/routes.js

import Home from 'page_source/home.jsx';
import About from 'page_source/about.jsx';
import Artists from 'page_source/artists.jsx';

const routes =  [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/artists',
    component: Artists,
  }
]

export default routes