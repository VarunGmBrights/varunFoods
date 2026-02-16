import React from 'react'
import './Explore.css'
import { menu_list } from '../../assets /assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
             <h1>Explore our menu</h1>
             <p className='explore-menu-text'>Explore our menu and discover a wide variety of delicious dishes made with fresh ingredients and authentic flavors. From satisfying meals to delightful snacks, there’s something for everyone at eKart Food.</p>
            <div className="explore-menu-list">
                {menu_list.map((item,index)=>{
                    return (
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                             <img className={category === item.menu_name? "active" : ""} src={item.menu_image} alt="" />
                             <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
    </div>
  )
}

export default ExploreMenu