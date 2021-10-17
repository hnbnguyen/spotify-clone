import React from 'react'
import Playlist from './Playlist'

const Category = () => {
    const dataCategory = [
        {
            id: 1, 
            name: 'Good evening'
        },
        {
            id: 2, 
            name: 'Recently played'
        },
        {
            id: 3, 
            name: 'Uniquely yours'
        },
        {
            id: 4, 
            name: 'Your playlists'
        }
    ]
    return(
    <div>
        {dataCategory.map(category => (
            <div className = "CardsWrap">
                <h2>{category.name}</h2>
                <span className = "SeeAll">SEE ALL</span>
                <p className = "SubText">Music that you love</p>
                <Playlist category_id={category.id} />
            </div>
        ))}
    </div>
    )
}

export default Category;