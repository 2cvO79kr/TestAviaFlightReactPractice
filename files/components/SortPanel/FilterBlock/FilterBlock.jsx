import React from 'react'
import style from './../../../App.module.css'

const FilterBlock = ({ sort, transferFilter }) => {
    return (
        <div className={style.filter_block}>
            Фильтровать<h4>Фильтровать</h4>
            <div className={style.filter_input}>
                {
                    sort.map(item => <span><input type='checkbox' value={item.segments} onClick={transferFilter}/>{item.description}</span>)
                }
            </div>
        </div>
    )
}

export default FilterBlock