import React, { useState, useEffect } from 'react'
import { Container, Input, Button } from 'semantic-ui-react'
import styled from 'styled-components'
import DisplayFood from './DisplayFood'
import Logo from './views/Logo'

// 1B1C1D

const Div = styled.div`
    background: #9796f0;
    background: -webkit-linear-gradient(to right, #fbc7d4, #9796f0);  
    background: linear-gradient(to right, #fbc7d4, #9796f0);

    color: #ffffff;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Grids = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
`

const H1 = styled.h1`
    text-align: center;
    font-size: 3em;
    padding: 2% 10%;
    font-weight: bolder;
`

const SearchInput = styled.div`
    width: 100%;
    padding: 4% 20% 0 20%;
    align-self: center;
` 

const ButtonSearch = styled.div`
    padding: 4% 20% 0 20%;
    align-self: center;
` 

// const Paragragh = styled.div`
//     background: #ffffff;
//     color: #000;
//     padding: 5% 0;
//     margin: 0 25% 0 10%;
//     font-size: 1.5em;
//     border-radius: 10%;
// `

const P = styled.p`
    padding: 2% 10%;
    text-align: center;
    align-self: center;
` 

const Parent = styled.div`
    display: flex;
    flex-direction: column;
` 

const SearchBar = () => {
    const [search, setSearch] = useState([])
    const [hit, setHit] = useState([])
    const [value, setValue] = useState('')

    const url = `https://jsonplaceholder.typicode.com/users`

    const [show, setShow] = useState(false)
    const [property, setProperty] = useState([])

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => setHit(data)).catch(err => console.log(err))
        setShow(false)

        // eslint-disable-next-line
    }, [search])

    // console.log(hit)
    const handleSearch = e => {
        e.preventDefault()
        let value = new RegExp(e.target.value, 'gi')
        setValue(e.target.value)
        setSearch(hit.filter(({name}) => name.match(value)))
        if(e.target.value === '') {
            setSearch([])
        }
    }

    const handleClick = result => {
        setProperty([result])
        setShow(true)
        setValue('')
    }

    return (
        <Parent>
            <Div>
                
                <Grids>
                    <Container text>
                        <H1>Simple Search App Users Lookup</H1>
                        <P>Simple searching app for looking up users Details, company details and addresses. Single page app, efficient and optimize to search users fast</P>
                    </Container>
                </Grids>
                <SearchInput>
                    <SearchBars handleSearch={handleSearch} value={value} />
                    {!show && <ShowSearch result={search} handleClick={handleClick} />}
                </SearchInput>
                <ButtonSearch>
                    <SearchButton />
                </ButtonSearch>
            </Div>

            <div>
                {property !== undefined && property.map((res, i) => (
                    <DisplayFood key={res.id} searchItem={res} />
                ))}
            </div>
        </Parent>
    )
}

export default SearchBar

const SearchBars = ({handleSearch, value}) => (
    <form>
        <Input loading icon='user' iconPosition='left' placeholder='Search...' value={value} onChange={handleSearch} style={{width: '100%', height: '50px', fontSize: '1.3em'}}/>
    </form>
)

const SearchButton = () => <Button content='Search Articles' />

const ShowSearch = ({result, handleClick}) => {
    return (
        <div>
            <Ul>
                {result !== undefined && result.map((res, i) => (
                    <Li key={res.id} onClick={() => handleClick(res)}>{res.name}</Li>
                ))}
            </Ul>
        </div>
    )
}

const Ul = styled.li`
    color: #444;
    width: 60%;
    height: 27.5vh;
    overflow: auto;
    list-style: none;
    margin: 20px 0;
    position: absolute;
    z-index: 6;
`

const Li = styled.li`
    padding: 15px;
    background: #eee;
    border-bottom: 1px solid #777;
    cursor: pointer;
`

