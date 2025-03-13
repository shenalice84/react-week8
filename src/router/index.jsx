import { createHashRouter } from "react-router-dom"
import FrontLayout from "../layout/FrontLayout"
import HomePage from "../pages/HomePage"
import ProductsPage from "../pages/ProductsPage"
import CartPage from "../pages/CartPage"
import ProductDetailPage from "../pages/ProductDetailPage"
import CheckoutFormPage from "../pages/CheckoutFormPage"
import CheckoutPaymentPage from "../pages/CheckoutPaymentPage"
import CheckoutSuccessPage from "../pages/CheckoutSuccessPage"
import NotFound from "../pages/NotFound"
// import LoginPage from "../pages/LoginPage"

const router = createHashRouter([
  {
    path:'/',
    element: <FrontLayout/>,
    children: [
      {
        path:'',
        element: <HomePage/>,
      },
      {
        path:'/products',
        element: <ProductsPage/>,
      },
      {
        path:'/products/:id',
        element: <ProductDetailPage/>,
      },
      {
        path:'/cart',
        element: <CartPage/>,
      },
      {
        path:'/checkout-form',
        element: <CheckoutFormPage/>,
      },
      {
        path:'/checkout-payment',
        element: <CheckoutPaymentPage/>,
      },
      {
        path:'/checkout-success',
        element: <CheckoutSuccessPage/>,
      }
    ]
  },
  {
    path:'*',
    element: <NotFound/>
  },
  // {
  //   path:'/login',
  //   element: <LoginPage/>
  // }
])

export default router