import React from 'react'
import style from './../../App.module.css'
import CardBlockContainer from './CardBlock/CardBlockContainer'

const ListPanel = ({ price, data, getMoreItems, itemNum }) => {

    return (
        <div className={style.list_panel}>
            {   data.length == 0
                ? <div>Not found</div>
                : data.flights.map(item => {
                    if (data.flights.indexOf(item) <= itemNum - 1) {
                        return <CardBlockContainer data={item.flight}
                            price={price} />
                    }
                }
                )
            }
            <div><button onClick={getMoreItems}>Показать еще</button></div>
        </div>
    )
}

export default ListPanel
