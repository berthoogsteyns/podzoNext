import * as React from 'react'
import styles from '../../styles/Search.module.scss'
import { BsSearch } from 'react-icons/bs'
// import { useNavigate } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { searchRestaurant } from '../../../redux/action/restaurantActionCreators'

export const Search = () => {
  const [filter, setFilter] = React.useState('')

  // const navigate = useNavigate()

  const handleChange = (toFilter: string) => {
    setFilter(toFilter)
  }

  const handleSearch = (e) => {
    e.preventDefault()

    // dispatch(searchRestaurant(filter))

    // navigate(`/restaurants?search=${filter}`)
  }

  return (
    <div className={styles._container}>
      <div className={styles._container_content}>
        <h1 className={styles._container_content_header}>Find nearby restaurants</h1>
        <form
          className={styles._container_content_search}
          onSubmit={(e) => handleSearch(e)}
        >
          <input
            className={styles._container_content_search_input}
            value={filter}
            type='input'
            placeholder='Search restaurants'
            onChange={(e) => handleChange(e.target.value)}
          />
          <BsSearch
            className={styles._container_content_search_icon}
            onClick={(e) => handleSearch(e)}
          />
        </form>
      </div>
    </div>
  )
}

export default Search
