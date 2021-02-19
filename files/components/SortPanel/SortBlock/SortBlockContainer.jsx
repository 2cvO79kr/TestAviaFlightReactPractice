import React, { useContext } from 'react'
import { Context } from '../../../other/context'
import SortBlock from './SortBlock'

const SortBlockContainer = () => {

    const { sortGrowPrice, sortDigPrice, sortTime } = useContext(Context)

    return (
        <SortBlock sortGrowPrice={sortGrowPrice}
            sortDigPrice={sortDigPrice}
            sortTime={sortTime} />
    )
}

export default SortBlockContainer