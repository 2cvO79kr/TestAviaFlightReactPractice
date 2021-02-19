import React from 'react'
import style from './../../../App.module.css'

const SortBlock = ({ sortGrowPrice, sortDigPrice, sortTime }) => {
    return (
        <div className={style.sort_block}>
            <h4>Сортировать</h4>
            <div className={style.sort_input}>
                <span><input type='radio' name='sort' value='rad1' onClick={sortGrowPrice}/>- по возрастанию цены</span>
                <span><input type='radio' name='sort' value='rad2' onClick={sortDigPrice}/>- по убыванию цены</span>
                <span><input type='radio' name='sort' value='rad3' onClick={sortTime}/>- по времени в пути</span>
            </div>
        </div>
    )
}

export default SortBlock