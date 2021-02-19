import React, { useContext } from 'react'
import { Context } from '../../../other/context'
import PriceBlock from './PriceBlock'

const PriceBlockContainer = ({sort}) => {

    const {minPriceFilter, maxPriceFilter} = useContext(Context)

    return (
        <PriceBlock sort={sort} minPriceFilter={minPriceFilter} maxPriceFilter={maxPriceFilter}/>
    )
}

export default PriceBlockContainer