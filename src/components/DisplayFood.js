import React from 'react'
import styled from 'styled-components'
// import { List } from 'semantic-ui-react'

// views
import { CompanyInfo } from './views/CompanyInfo'
import { AdditionalInfo } from './views/AdditionalInfo'

const DisplayFood = ({searchItem}) => {
    console.log(searchItem)
    return (
        <>
            <Parent>
                <h1><span>{searchItem.name}</span> Details With Address</h1>
                <div><p>Name: </p> <p>{searchItem !== undefined && searchItem.name}</p></div>
                <div><p>Phone Number: </p> <p>{searchItem !== undefined && searchItem.phone}</p></div>
                <div><p>Email Address: </p> <p>{searchItem !== undefined && searchItem.email}</p></div>
                <div><p>Username: </p><p>{searchItem !== undefined && searchItem.username}</p></div>
                <div><p>Website: </p><p>{searchItem !== undefined && searchItem.website}</p></div>
            </Parent>
            <AdditionalInfo searchItem={searchItem} /> 
            <CompanyInfo searchItem={searchItem} /> 
        </>
    )
}

export default DisplayFood


const Parent = styled.div`
    margin: 2% 20%;
    padding: 20px;
    background: #9796f0;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #fbc7d4, #9796f0);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #fbc7d4, #9796f0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    border-radius: 10px;
    h1{
        padding: 15px 0;
        span{
            color: teal;
            font-size: 2em;
            padding-right: 20px;
        }
    }
    div{
        border-bottom: 1px solid #eee;
        display: flex;
        p{
            padding-right: 30px;
            padding-top: 10px;
            font-size: 1.5em;
        }
    }
`




