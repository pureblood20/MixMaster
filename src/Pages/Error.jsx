import React from 'react'
import img from "../assets/not-found.svg"
import { useRouteError,Link } from 'react-router-dom'
const Error = () => {
  const error = useRouteError()
  console.log(error);
  if(error.status === 404){
    return (<div class="flex flex-col items-center">
      <img src={img} class="h-96" alt="" />
      <h2 class="m-4">Ohhh!!!</h2>
      <p class="m-4">We cant seem to find the page you are looking for</p>
      <Link to='/' class="m-4 underline">Back home</Link>
    </div>)
  }
  return <div>Page not found</div>   
}

export default Error