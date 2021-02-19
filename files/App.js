import { useEffect, useReducer } from 'react';
import style from './App.module.css';
import ListPanelContainer from './components/ListPanel/ListPanelContainer';
import SortPanelContainer from './components/SortPanel/SortPanelContainer';
import flights from './data/flights.json'
import { Context } from './other/context';
import listReducer, { setListAC, setFilterMaxPriceAC, setFilterMinPriceAC, setSortGrowPriceAC, setSortDigPriceAC, setSortTimeAC, setFilterAC, setCompanyAC, setCompanyFilterAC, setFilterTravelAC, setFilterTravelActionAC } from './redux/listReducer';


function App() {

  let defaultState = {
    data: [],
    sortBlock: {
      filter: [
        {segments: 3, checked: false, description:'- 1 пересадка'},
        {segments: 2, checked: false, description:'- без пересадок'}
      ],
      price: {
        minPrice: 0,
        maxPrice: 1000000,
      },
      companies: [
        { company: 'LOT Polish Airlines', checked: false },
        { company: 'Аэрофлот - российские авиалинии', checked: false },
        { company: 'Air France', checked: false },
      ]
    }
  }

  const [state, dispatch] = useReducer(listReducer, defaultState)

  useEffect(() => {
    dispatch(setListAC(flights.result))
  }, [])

  const sortGrowPrice = () => {
    dispatch(setSortGrowPriceAC())
  }

  const sortDigPrice = () => {
    dispatch(setSortDigPriceAC())
  }

  const sortTime = () => {
    dispatch(setSortTimeAC())
  }

  const transferFilter = (event) => {
    let data = event.target.value
    dispatch(setFilterTravelAC(data))
  }
  
  const minPriceFilter = (event) => {
    let data = +event.currentTarget.value
    dispatch(setFilterMinPriceAC(data))
  }
  
  const maxPriceFilter = (event) => {
    let data = +event.currentTarget.value
    dispatch(setFilterMaxPriceAC(data))
  }
  
  
  const companyFilter = (event) => {
    let value = event.target.value
    dispatch(setCompanyAC(value))
  }
  
  useEffect(()=> {
    dispatch(setListAC(flights.result))    
    dispatch(setFilterAC())
    dispatch(setFilterTravelActionAC())
    dispatch(setCompanyFilterAC())
  }, [state.sortBlock])

  return (

    <Context.Provider value={{
      data: state.data,
      sortBlock: state.sortBlock,
      minPriceFilter,
      maxPriceFilter,
      sortGrowPrice,
      sortDigPrice,
      sortTime,
      companyFilter,
      transferFilter
    }}>
      <div className={style.container}>
       {/*  <button onClick={abc}>123</button> */}
        <SortPanelContainer />
        <ListPanelContainer />
      </div>
    </Context.Provider>

  );
}

export default App;
