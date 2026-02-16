import React, { useState, useContext } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import AppDownload from '../../Components/AppDowmload/AppDownload'
import { StoreContext } from '../../context/StoreContext'

const Home = () => {

  const [category, setCategory] = useState("All")
  const { searchQuery, food_list } = useContext(StoreContext)
  
  // Filter food based on search query
  const filteredFoodList = searchQuery 
    ? food_list.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div>
      {!searchQuery && <Header/>}
      {!searchQuery && <ExploreMenu category={category} setCategory={setCategory} />}
      
      {searchQuery ? (
        <div className="search-results-page">
          <h2>Search Results for "{searchQuery}"</h2>
          <FoodDisplay category="All" searchResults={filteredFoodList} />
        </div>
      ) : (
        <FoodDisplay category={category}/>
      )}
      
      <AppDownload/>
    </div>
  )
}

export default Home
