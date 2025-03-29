import React from 'react'
import { useParams } from 'react-router-dom'

function Products() {

  const {id} = useParams();

  return (
    <div>
      <h1 className='text-center text-amber-900 text-5xl'>Products {id}</h1>
    </div>
  )
}

export default Products 