import { NavLink, Outlet, useLocation } from "react-router-dom"
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { useEffect } from "react";


export default function FrontLayout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  )
}