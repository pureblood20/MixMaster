import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useEffect } from "react";

import { Link, useLoaderData } from 'react-router-dom'
const singleDrinkURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="
const singleCocktailsearchQuery = (id) => {
return {
  queryKey : ['cocktail' , id],
  queryFn :async () => {
      const response = await axios.get(`${singleDrinkURL}${id}`)
      // console.log(response.data.drinks);
      return response.data.drinks
  }
}
}

export const loader = (queryClient) => async(data) => {
  const id = data.params.id
  await queryClient.ensureQueryData(singleCocktailsearchQuery(id))
  // const getSingleDrink = await axios.get(`${singleDrinkURL}${id}`)
  
  return id
}

const Cocktail = () => {
const id = useLoaderData()
const {data : singleDrink} = useQuery(singleCocktailsearchQuery(id))

const oneDrink = singleDrink[0]


const validIngredient = Object.keys(oneDrink).filter((item)=>  item.startsWith("strIngredient") && oneDrink[item] !== null).map((item)=> oneDrink[item])

const {
  strDrink: name,
  strDrinkThumb: image,
  strAlcoholic: info,
  strCategory: category,
  strGlass: glass,
  strInstructions: instructions,
} = oneDrink;

  return (
    <>
    <div className=" grid justify-items-center">
      <div className="p-2 ml-3 mb-3 rounded w-26 text-white bg-rose-950 hover:bg-rose-900">
      <Link to="/" >Back Home</Link>
      </div>
      <h4 className="font-black">{name}</h4>
    </div>
    <div className="flex flex-col md:flex-row pt-12">
      <div className="basis-1/2 self-end">
          <img src={image} alt="" className="pb-10 w-80  m-auto" />
      </div>
      <div className="basis-1/2 self-center">
          <h6 className="font-bold pb-8 "> <span className="bg-rose-200 text-rose-950 py-1 pl-1 rounded">Name: </span> { name}</h6>
          <h6 className="font-bold pb-8">  <span className="bg-rose-200 text-rose-950 py-1 pl-1 rounded">Category:</span> {category}</h6>
          <h6 className="font-bold pb-8"><span className="bg-rose-200 text-rose-950 py-1 pl-1 rounded">Info:</span> {info}</h6>
          <h6 className="font-bold pb-8"><span className="bg-rose-200 text-rose-950 py-1 pl-1 rounded ">Glass:</span> {glass}</h6>
          <h6 className="font-bold pb-8"><span className="bg-rose-200 text-rose-950 py-1 pl-1 rounded ">Ingredients:</span> 
          {
          validIngredient.map((item, index)=> {
            return <span keys={item}>{item}{index<validIngredient.length -1 ? ',' : ''}</span>
          } )
          }</h6>
          <h6 className="font-bold pb-8"> <span className="bg-rose-200 text-rose-950 py-1 pl-1 rounded leading-8"> Instructions:</span> {instructions}</h6>
      </div>
    </div>
    </>

  )
}

export default Cocktail
