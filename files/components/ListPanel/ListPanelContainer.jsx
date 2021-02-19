import React, { useContext, useState } from 'react'
import { Context } from '../../other/context'
import ListPanel from './ListPanel'

const ListPanelContainer = () => {

    const {data} = useContext(Context)
    const [item, setItem] = useState(2)

    const getMoreItems = () => {
        setItem(item + 2)
    }

    return (
        <ListPanel data={data}
        getMoreItems={getMoreItems}
        itemNum={item}
        />
    )
}

export default ListPanelContainer