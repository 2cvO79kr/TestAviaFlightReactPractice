import React from 'react'
import style from './../../App.module.css'
import CompanyBlockContainer from './CompanyBlock/CompanyBlockContainer'
import FilterBlockContainer from './FilterBlock/FilterBlockContainer'
import PriceBlockContainer from './PriceBlock/PriceBlockContainer'
import SortBlockContainer from './SortBlock/SortBlockContainer'

const SortPanel = ({sortBlock}) => {
    return (
        <div className={style.sortPanel}>
            <SortBlockContainer />
            <FilterBlockContainer/>
            <PriceBlockContainer sort={sortBlock.price}/>
            <CompanyBlockContainer sort={sortBlock.company}/>
        </div>
    )
}

export default SortPanel