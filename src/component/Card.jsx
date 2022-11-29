import React from 'react'

function Card({data}) {
    console.log('---',data)
  return (
    <>
    <div className="card">
        <img style={{}} className={'image'} src={data.strMealThumb} alt="" />
        <p>{data.strMeal}</p>
        <p className='longtext' >{data.strInstructions}</p>
        <ul className='ul'>
            <li>{data.strIngredient1}</li>
            <li>{data.strIngredient2}</li>
            <li>{data.strIngredient3}</li>
        </ul>
    </div>
    
    </>
  )
}

export default Card