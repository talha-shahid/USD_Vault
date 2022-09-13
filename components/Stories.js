import React from 'react'
import { useGlobalContext } from './Context'

const Stories = () => {

  console.log('global context:')
  console.log(useGlobalContext());

    const {hits} = useGlobalContext()
  return (<>
    <div>Stories</div>
    {hits.map((curPost =>{
        return <h2>{curPost.name}</h2>
    }))}
    </>
  )
}

export default Stories