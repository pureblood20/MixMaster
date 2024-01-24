import React from 'react'
import { Link } from 'react-router-dom'

const CocktailCard = ({list}) => {
    
    
  return (
    <> 
    <div className="rounded bg-white font-sans shadow-md">
        
        <img class="rounded-t-lg p-1" src={list.image} alt="" />
        
     
    <h4 className="p-1 pl-3 font-bold">{list.name}</h4>    
    <h6 className=" pl-3 font-medium">{list.glass}</h6>
    <p className="p-1 pl-3 text-sm">{list.info}</p>
    <div className="p-2 ml-3 mb-2 rounded w-16 text-white bg-rose-950 hover:bg-rose-900">
    <Link to={`/cocktail/${list.id}`} >Details</Link>
    </div>    
    </div>
    </>
    
  )
}

export default CocktailCard