import React from 'react'
import {useHistory} from 'react-router-dom'

const IngredientComponent = ({ingredients}) => {
    const history = useHistory()
    console.log(ingredients)
    return (
        <div>
            {/* {ingredients !== null && ingredients.map(ingredient => (
                <p>{ingredient.text}</p>
            ))} */}
        </div>
    )
}

export default IngredientComponent
