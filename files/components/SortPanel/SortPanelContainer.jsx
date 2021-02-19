import React, { useContext } from 'react'
import { Context } from '../../other/context'
import SortPanel from './SortPanel'

const SortPanelContainer = () => {

    const {sortBlock} = useContext(Context)

    return (
        <SortPanel sortBlock={sortBlock}/>
    )
}

export default SortPanelContainer