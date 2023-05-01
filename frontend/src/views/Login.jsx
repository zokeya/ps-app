import React, { useRef, useState } from 'react'
import axiosClient from '../axios-client';
import { useStateContext } from '../contexts/ContextProvider';

export default function Login() {
  // const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const { setUser, setToken } = useStateContext()
  const [message, setMessage] = useState('');

  const onSubmit = (ev) => {
    ev.preventDefault()

    const payload = {
      // name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value
    }


    axiosClient.post('/login', payload).then(({data}) => {
      setUser(data.user)
      setToken(data.token)
    })
    .catch( err => {
      const response = err.response;
      if (response && response.status == 422) {
        setMessage(response.data.message)
      }
    })

  }

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat" >
      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <img src="./assets/analog-clock.png" width="150" alt="" srcSet="" />
            <h1 className="mb-2 text-2xl">PS-TA</h1>
            <span className="text-gray-300">Enter Login Details</span>
          </div>
          <form onSubmit={onSubmit}>

            {message &&
              <div className="alert">
                <p>{message}</p>
              </div>
            }

            <div className="mb-4 text-lg">
              {/* <input className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="text" name="name" placeholder="id@email.com"
                ref={nameRef}/> */}
                <input ref={emailRef} type="email" placeholder="Email"
                  className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"/>
            </div>

            <div className="mb-4 text-lg">
              <input className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="Password" name="name" placeholder="password"
                ref={passwordRef}/>
            </div>
            <div className="mt-8 flex justify-center text-lg text-black">
              <button type="submit" className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
