import React from 'react'
import CocktailCard from './CocktailCard'

const CardList = ({drinks}) => {
    const formattedDrinks =   
        drinks.map((drink) => {
          const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = drink
          return {id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass}
        }
        )
        
  return (
    <div class = "grid md:grid-cols-3 gap-10 ">
     
      {
        formattedDrinks.map((data)=>
          
          <CocktailCard key={data.id} list={data}/>
        )
      }
      
    </div>
  )
}

export default CardList