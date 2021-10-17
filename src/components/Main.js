import React from 'react'
import {ReactComponent as PlayIcon} from '../svgs/play.svg'
import Category from './Category'

const Main = () => {
    return (
        <div className = "Main">
            <div className = "UpperNav">
                testing text
            </div> 
            <div className = "MainContent">
                <Category />
            </div>
        </div>
    )
}

export default Main;