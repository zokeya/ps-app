import {Link, Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../contexts/ContextProvider";
import axiosClient from "../axios-client";
import {useEffect} from "react";
import Sidebar from './sidebar/Sidebar';
import Navbar from "./layout/Navbar";

export default function DefaultLayout() {
  const {user, token, setUser, setToken, notification, title} = useStateContext();

  if (!token) {
    return <Navigate to="/login"/>
  }

  const onLogout = ev => {
    ev.preventDefault()

    axiosClient.post('/logout')
      .then(() => {
        setUser({})
        setToken(null)
      })
  }

  useEffect(() => {
    axiosClient.get('/user')
      .then(({data}) => {
         setUser(data)
      })
  }, [],
  )

  return (
    <div className="">
          <div className="">
            <Navbar logout={onLogout} user={user}/>
          </div>
          <main className="container px-4 mx-auto pt-3 shadow-md sm:rounded-lg relative h-full">
            <Outlet/>
          </main>
    </div>

  )
}