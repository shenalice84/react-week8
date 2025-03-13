import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'; // 引入 CSS
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { Provider } from 'react-redux';

import './assets/styles/all.scss'
import 'bootstrap/dist/js/bootstrap.js'
import store from './redux/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
