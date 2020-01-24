import React, { useState, useEffect } from 'react'

const data = [
    {id: 1, name: 'John Snow', gender: 'Male'},
    {id: 2, name: 'Mary Doe', gender: 'Female'},
    {id: 3, name: 'Harley Berry', gender: 'Female'},
    {id: 4, name: 'Ricky Morty', gender: 'Male'},
    {id: 5, name: 'Angelina Jolie', gender: 'Female'},
    {id: 6, name: 'Morgan Freeman', gender: 'Male'},
    {id: 7, name: 'Jack Nicholson', gender: 'Male'},
    {id: 8, name: 'Denzel Washington', gender: 'Male'},
    {id: 9, name: 'Leonardo DiCaprio', gender: 'Male'},
    {id: 10, name: 'Genevie Nnaji', gender: 'Female'},
    {id: 11, name: 'Will Smith', gender: 'Male'},
    {id: 12, name: 'Cate Branchete', gender: 'Female'},
    {id: 13, name: 'Ugo Chikasi', gender: 'Male'}
]

const Search = () => {
    const API_KEY = '637373c66f645f6b4275140ee9520396'
    const API_ID = '0051e686'
    const url = `https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}`

    const [foodData, setFoodData] = useState()
    const [search, setSearch] = useState([])

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => setFoodData(data.hits)).catch(err => console.log(err))
    }, [search])

    console.log(foodData)


    const handleSearch = (e) => {
        e.preventDefault()
        const val = new RegExp(e.target.value, 'ig');
        const currentData = data.filter(x => x.name.match(val));
        setSearch(currentData)
        if(e.target.value === '') {
            setSearch([])
            return
        }
    }

    return (
        <div>
            <input placeholder="Search it" type="search" onChange={handleSearch} />
            {
                data !== null && search.map(({name, gender}, i) => <Show key={i} name={name} />)
            }
        </div>
    )
}

export default Search

const Show = ({name}) => (
    <ul>
        <li>{name}</li>
    </ul>
)