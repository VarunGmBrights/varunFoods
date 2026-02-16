import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category, searchResults}) => {
    const {food_list} = useContext(StoreContext)
    
    // Use searchResults if provided, otherwise use normal food_list
    const displayList = searchResults || food_list;
  return (
    <div className='food-display' id='food-display'>
        <h2>{searchResults ? 'Search Results' : 'Top dishes near you'}</h2>
<div className="food-display-list">
{displayList.map((item,index)=>{

  if(category==='All' || category===item.category){
    return <FoodItem key={index} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image} />
  }
  
  
})}

</div>
    </div>
  )
}

export default FoodDisplay
