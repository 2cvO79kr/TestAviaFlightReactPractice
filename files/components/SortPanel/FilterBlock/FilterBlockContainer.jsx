import React, { useContext } from 'react'
import { Context } from '../../../other/context'
import FilterBlock from './FilterBlock'

const FilterBlockContainer = () => {

    const { sortBlock, transferFilter } = useContext(Context)
    return (
        <FilterBlock sort={sortBlock.filter}
            transferFilter={transferFilter} />
    )
}

export default FilterBlockContainer