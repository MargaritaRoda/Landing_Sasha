import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Container } from './components/TitlePageAbout';
import { IndexPage } from './Pages/IndexPage';
import { Card } from './components/Card';
import { PageContainer } from './components/PageContainer';
import { About } from './components/About';
import { FrontArticle } from './components/FrontArticle';
import { Skills } from './components/Skills';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Skills />,
  // <Card/>

  // <React.StrictMode>
  //   <Provider store={store}>
  //     <PersistGate loader={null} persistor={persistor}>
  //       <RouterProvider router={router} />
  //     </PersistGate>
  //   </Provider>
  // </React.StrictMode>,
);
