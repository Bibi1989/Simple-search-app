import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import Logo from './views/Logo'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'
import IngredientComponent from './IngredientComponent'

const data = [
    { id: 1, name: 'John Snow', gender: 'Male' },
    { id: 2, name: 'Mary Doe', gender: 'Female' },
    { id: 3, name: 'Harley Berry', gender: 'Female' },
    { id: 4, name: 'Ricky Morty', gender: 'Male' },
    { id: 5, name: 'Angelina Jolie', gender: 'Female' },
    { id: 6, name: 'Morgan Freeman', gender: 'Male' },
    { id: 7, name: 'Jack Nicholson', gender: 'Male' },
    { id: 8, name: 'Denzel Washington', gender: 'Male' },
    { id: 9, name: 'Leonardo DiCaprio', gender: 'Male' },
    { id: 10, name: 'Genevie Nnaji', gender: 'Female' },
    { id: 11, name: 'Will Smith', gender: 'Male' },
    { id: 12, name: 'Cate Branchete', gender: 'Female' },
    { id: 13, name: 'Ugo Chikasi', gender: 'Male' }
]

const Search = () => {
    const API_KEY = process.env.REACT_APP_API_KEY
    const API_ID = process.env.REACT_APP_API_ID
    // const url = `https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}`

    const [foodData, setFoodData] = useState([])
    const [search, setSearch] = useState([])
    const [value, setvalue] = useState("")
    const [ingredients, setIngredients] = useState([])
    const [loading, setLoading] = useState(false)

    const history = useHistory()

    const handleSearch = (e) => {
        e.preventDefault()
        setvalue(e.target.value)
        const val = new RegExp(e.target.value, 'ig');
        const currentData = data.filter(x => x.name.match(val));
        setSearch(currentData)
        if (e.target.value === '') {
            setSearch([])
            return
        }
    }

    const handleClickSearch = () => {
        setLoading(true)
        fetch(`https://api.edamam.com/search?q=${value}&app_id=${API_ID}&app_key=${API_KEY}`).then(res => res.json()).then(data => {
            setFoodData(data.hits)
            setLoading(false)
        }).catch(err => {
            setLoading(false)
            console.log(err)
        })
    }
    
    const handleViewMore = (ingredient) => {
        setIngredients(ingredient)
        return history.push('/ingredient')
    }



    return (
        // <div>
        //     {
        //         data !== null && search.map(({name, gender}, i) => <Show key={i} name={name} />)
        //     }
        // </div>
        <Container>
            <Logo />
            <h1 style={{ textAlign: 'center', padding: '2%' }}>Food Recipe</h1>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '0 15%' }}>
                <input placeholder="Search it" type="search" onChange={handleSearch} style={{
                    border: '1px solid #9796f0',
                    padding: '0 10px',
                    borderRadius: '5px',
                    outline: 'none',
                    width: '70%'
                }} />
                <button onClick={handleClickSearch} style={{
                    padding: '15px 20px',
                    background: 'linear-gradient(to right, #fbc7d4, #9796f0)',
                    width: '29%',
                    border: 'none',
                    borderRadius: '5px',
                    marginLeft: '1%',
                    outline: 'none',
                    cursor: 'pointer'
                }}>Search Food Recipe</button>
            </div>
            {loading ?
                (<div style={{
                    height: '50vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}><Loader type="Oval" color="teal" width={100} height={100} timeout={3000} /></div>)
                :
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gridGap: '2%', 
                    margin: 'auto',
                    padding: '3% 15%'
                }}>
                    {foodData.map(food => (
                        <ShowFood key={food.id} food={food} handleViewMore={handleViewMore} />
                    ))}
                </div>}
                <IngredientComponent ingredients={ingredients} />
        </Container>
    )
}

export default Search

const Show = ({ name }) => (
    <ul>
        <li>{name}</li>
    </ul>
)


const ShowFood = ({ food, handleViewMore }) => (
    <div>
        <img src={food.recipe.image} alt={food.recipe.label} style={{
            display: 'block',
            borderRadius: '10px 10px 0 0',
            width: '100%',
            boxShadow: '0 2px 15px #08082ce7'
        }} />
        <Content>
            <p><span>Food Title: </span> <span>{food.recipe.label.length > 18 ? food.recipe.label.slice(0, 20) + '...' : food.recipe.label}</span></p>
            <p><span>Calories: </span> <span>{food.recipe.calories}</span></p>
            <div className="btn">
                <div></div>
                <Button onClick={() => handleViewMore(food.recipe.ingredients)}>View How to</Button>
            </div>
        </Content>
    </div>
)

const Container = styled.div`
    min-height: 100vh;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    width: 100%;
    box-shadow: 0 2px 15px #08082ce7;
    margin-top: 10px;
    padding: 2%;

    p{

        span: first-child{
            color: violet;
        }
        span: last-child{
            color: #fff;
        }
    }

    .btn{
        display: flex;
        justify-content: space-between;
    }
`

const Button = styled.button`
    padding: 1em 2em;
    border: none;
    outline: none;
    border-radius: 5px;
    background: linear-gradient(to right, #fbc7d4, #9796f0);
    color: #555;
    cursor: pointer;
`