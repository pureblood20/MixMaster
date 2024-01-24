import axios from 'axios';
import React from 'react'
import { Form, redirect } from 'react-router-dom'
import { toast } from 'react-toastify';

export const action = async({request}) =>{
  const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';
  const formData = await request.formData()
  
  const data = Object.fromEntries(formData)
  console.log(data);
  try {
    const response = await axios.post(newsletterUrl , data)       
    console.log(response);
     toast.success(response.data.msg)
    return redirect('/')
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg)
    return error
  }
  
  

}

const Newsletter = () => {
  return (
    <div className="grid justify-items-center">
      <div className="rounded bg-white font-sans font-bold shadow-md p-10 w-1/2">
          <div className=" grid justify-items-center text-2xl mb-5">Our Newsletter</div>          
          <Form method='POST'>
          <h5 className="mb-2">Name : </h5>
              <input type="text" name="name" id="name"  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 mb-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-rose-800"/>
              <h5 className="mb-2">Last Name : </h5>
              <input type="text" name="lastName" id="lastName"  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 mb-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-rose-800"/>
              <h5 className="mb-2">Email : </h5>
              <input type="text" name="email" id="email"  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 mb-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-rose-800"/>
              <button type="submit" className="py-3 rounded w-full text-white bg-rose-950 hover:bg-rose-900">Submit</button>
          </Form>
      </div>
      </div>
    
  )
}

export default Newsletter