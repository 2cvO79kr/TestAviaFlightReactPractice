import React, { useContext } from 'react'
import { Context } from '../../../other/context'
import CompanyBlock from './CompanyBlock'

const CompanyBlockContainer = () => {

    const { companyFilter, sortBlock, data } = useContext(Context)

    const getMinPrice = (name) => {
        let prices = data.flights
            .filter(item => item.flight.carrier.caption == name)
            .map(item => item.flight.price.total.amount)
        let minimum = prices[0]
        for (let i = 1; i < prices.length; i++) {
            minimum = Math.min(minimum, prices[i])
        }
        return minimum

    }

    return (
        <CompanyBlock companyFilter={companyFilter}
            companySort={sortBlock.companies}
            getMinPrice={getMinPrice}
            data={data} />
    )
}

export default CompanyBlockContainer

