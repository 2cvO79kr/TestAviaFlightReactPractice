const SET_LIST = 'SET_LIST'
const SET_MIN_PRICE_FILTER = 'SET_MIN_PRICE_FILTER'
const SET_MAX_PRICE_FILTER = 'SET_MAX_PRICE_FILTER'
const SET_SORT_GROW_PRICE = 'SET_SORT_GROW_PRICE'
const SET_SORT_DIG_PRICE = 'SET_SORT_DIG_PRICE'
const SET_SORT_TIME = 'SET_SORT_TIME'
const SET_FILTER = 'SET_FILTER'
const SET_COMPANY = 'SET_COMPANY'
const SET_COMPANY_FILTER = 'SET_COMPANY_FILTER'
const SET_FILTER_TRAVEL = 'SET_FILTER_TRAVEL'
const SET_FILTER_TRAVEL_ACTION = 'SET_FILTER_TRAVEL_ACTION'

const listReducer = (state, action) => {
    switch (action.type) {
        case SET_LIST: {
            return {
                ...state,
                data: action.result
            }
        }
        case SET_MAX_PRICE_FILTER: {
            return {
                ...state,
                sortBlock: {
                    ...state.sortBlock,
                    price: {
                        ...state.sortBlock.price,
                        maxPrice: /\d/.test(action.value) ? action.value : ''
                    }
                }
            }
        }
        case SET_MIN_PRICE_FILTER: {
            return {
                ...state,
                sortBlock: {
                    ...state.sortBlock,
                    price: {
                        ...state.sortBlock.price,
                        minPrice: /\d/.test(action.value) ? action.value : ''
                    }
                }
            }
        }
        case SET_FILTER: {
            return {
                ...state,
                data: {
                    ...state.data,

                    flights: [...state.data.flights.filter(item => state.sortBlock.price.minPrice <= item.flight.price.total.amount
                        && state.sortBlock.price.maxPrice >= item.flight.price.total.amount)]
                }
            }
        }
        case SET_SORT_GROW_PRICE: {
            return {
                ...state,
                data: {
                    ...state.data,
                    flights: [...state.data.flights.sort((a, b) => a.flight.price.total.amount - b.flight.price.total.amount)]
                }
            }
        }
        case SET_SORT_DIG_PRICE: {
            return {
                ...state,
                data: {
                    ...state.data,
                    flights: [...state.data.flights.sort((a, b) => b.flight.price.total.amount - a.flight.price.total.amount)]
                }
            }
        }
        case SET_SORT_TIME: {
            function getDelta(firstDate, secondDate) {
                let onePice = Date.parse(firstDate)
                let oneDate = new Date(onePice)
                let oneDay = oneDate.getDate()
                let firstTime = oneDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).split(':')

                let twoPice = Date.parse(secondDate)
                let twoDate = new Date(twoPice)
                let twoDay = twoDate.getDate()
                let secondTime = twoDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).split(':')

                let deltaHours = secondTime[0] - firstTime[0]
                let deltaMinutes = secondTime[1] - firstTime[1]
                let deltaDay = twoDay - oneDay

                if (deltaMinutes < 0) {
                    deltaHours = deltaHours - 1
                    deltaMinutes = 60 + deltaMinutes
                }

                if (deltaHours < 0) {
                    deltaHours = 24 + deltaHours
                }

                return deltaHours * 60 + deltaMinutes
            }
            return {
                ...state,
                data: {
                    ...state.data,
                    flights: [...state.data.flights.sort((a, b) => getDelta(a.flight.legs[0].segments[0].departureDate, a.flight.legs[0].segments[a.flight.legs[0].segments.length - 1].arrivalDate)
                        - getDelta(b.flight.legs[0].segments[0].departureDate, b.flight.legs[0].segments[b.flight.legs[0].segments.length - 1].arrivalDate))]
                }
            }
        }
        case SET_COMPANY: {
            return {
                ...state,
                sortBlock: {
                    ...state.sortBlock,
                    companies: [...state.sortBlock.companies.map(item => item.company == action.value
                        ? {
                            ...item,
                            checked: !item.checked
                        }
                        : item)]
                }
            }
        }
        case SET_COMPANY_FILTER: {
            const checkArr = (arr1, arr2) => {
                for (let i = 0; i < arr1.length; i++) {
                    if (arr1[i].company == arr2.flight.carrier.caption && arr1[i].checked) return arr2
                }
            }
            return {
                ...state,
                data: {
                    ...state.data,
                    flights: [...state.data.flights.filter(item => state.sortBlock.companies.every(el => !el.checked)
                        ? item
                        : checkArr(state.sortBlock.companies, item)
                    )
                    ]
                },
            }
        }
        case SET_FILTER_TRAVEL: {
            return {
                ...state,
                sortBlock: {
                    ...state.sortBlock,
                    filter: [...state.sortBlock.filter.map(item => item.segments == action.value
                        ? {
                            ...item,
                            checked: !item.checked
                        }
                        : item)]
                }
            }
        }
        case SET_FILTER_TRAVEL_ACTION: {
            const checkArr = (arr1, arr2) => {
                for (let i = 0; i < arr1.length; i++) {
                    if (arr1[i].segments == (arr2.flight.legs[0].segments.length + arr2.flight.legs[1].segments.length) && arr1[i].checked) return arr2
                }
            }
            return {
                ...state,
                data: {
                    ...state.data,
                    flights: [...state.data.flights.filter(item => state.sortBlock.filter.every(el => !el.checked)
                        ? item
                        : checkArr(state.sortBlock.filter, item)
                    )
                    ]
                },
            }
        }
        default:
            return state
    }
}

export const setListAC = (result) => {
    return {
        type: SET_LIST,
        result
    }
}

export const setFilterMinPriceAC = (value) => {
    return {
        type: SET_MIN_PRICE_FILTER,
        value
    }
}

export const setFilterMaxPriceAC = (value) => {
    return {
        type: SET_MAX_PRICE_FILTER,
        value
    }
}

export const setFilterAC = () => {
    return {
        type: SET_FILTER
    }
}

export const setSortGrowPriceAC = () => {
    return {
        type: SET_SORT_GROW_PRICE
    }
}

export const setSortDigPriceAC = () => {
    return {
        type: SET_SORT_DIG_PRICE
    }
}

export const setSortTimeAC = () => {
    return {
        type: SET_SORT_TIME
    }
}

export const setCompanyAC = (value) => {
    return {
        type: SET_COMPANY,
        value
    }
}

export const setCompanyFilterAC = () => {
    return {
        type: SET_COMPANY_FILTER
    }
}

export const setFilterTravelAC = (value) => {
    return {
        type: SET_FILTER_TRAVEL,
        value
    }
}

export const setFilterTravelActionAC = () => {
    return {
        type: SET_FILTER_TRAVEL_ACTION,
    }
}

export default listReducer
