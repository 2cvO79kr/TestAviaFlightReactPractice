import React from 'react'
import style from './../../../App.module.css'

const PriceBlock = ({sort, minPriceFilter, maxPriceFilter}) => {
    return (
        <div className={style.price_block}>
            <h4>Цена</h4>
            <div className={style.price_input}>
                <span>От <input type='text' value={sort.minPrice} onChange={minPriceFilter}/></span>
                <span>До <input type='text' value={sort.maxPrice} onChange={maxPriceFilter}/></span>
            </div>
        </div>
    )
}

export default PriceBlock