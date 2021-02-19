import React from 'react'
import style from './../../../App.module.css'

const CompanyBlock = ({ companyFilter, companySort, getMinPrice, data }) => {
    return (
        <div className={style.company_block}>
            <h4>Авиакомпании</h4>
            <div className={style.company_input}>
                {
                    companySort.map(item => <span className={style.company_str}><input type='checkbox'
                        onClick={companyFilter}
                        value={item.company} />{item.company}<span> от {data.length == 0 ? '0' : getMinPrice(item.company)}</span></span>)
                }
            </div>
        </div>
    )
}

export default CompanyBlock