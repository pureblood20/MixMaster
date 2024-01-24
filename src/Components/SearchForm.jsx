import React from 'react'
import { Form, useNavigation } from 'react-router-dom'

const SearchForm = ({searchTerm}) => {
    const navigate = useNavigation()
  return (
    <div className="grid justify-items-center mb-20">
      <div className="rounded bg-white font-sans font-bold shadow-md p-5 w-1/2  grid justify-items-center">
      
        <Form className="flex flex-row">
      <input type="text" name="search" defaultValue={searchTerm}  class="basis-3/4 bg-gray-200 appearance-none border-2 border-gray-200  w-full py-2 px-4  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-rose-800"/>
      <button type="submit"   className="basis-1/4  text-white bg-rose-950 hover:bg-rose-900 py-2 px-4">Search</button>
      </Form>      
        </div>
        </div>
  )
}

export default SearchForm