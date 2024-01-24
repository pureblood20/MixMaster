import axios from 'axios'
import React from 'react'
import { useLoaderData, useNavigation } from 'react-router-dom'
import CardList from '../Components/CocktailList'
import SearchForm from '../Components/SearchForm'
import { useQuery } from '@tanstack/react-query'

const drinkURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

const searchCocktailQuery = (searchTerm) =>{

return{
  queryKey : ['search' , searchTerm || "all"],
  queryFn : async() => {
    const response = await axios.get(`${drinkURL}${searchTerm}`)
    return response.data.drinks 
  } 
}
}

export const loader =(queryClient) => async({request}) => {
  
  const url = new URL(request.url)
  
  const searchTerm = url.searchParams.get('search') || ''
  
  await queryClient.ensureQueryData(searchCocktailQuery(searchTerm)) //for cache
  return {searchTerm}
}

const Landing = () => {
  const {searchTerm} = useLoaderData()
  const {data : drinksName} = useQuery(searchCocktailQuery(searchTerm))

  
  return (
    <div>
      <SearchForm searchTerm={searchTerm}/>
       <CardList drinks={drinksName}/>
      
    </div>
  )
}

export default Landing