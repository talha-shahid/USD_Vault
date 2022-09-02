import React from 'react'
import { useRouter } from "next/router";

const Slug = () => {
    const router = useRouter();
    const { slug } = router.query;
    console.log({slug})

  return (
    <div><h1 className='font-semibold text-4xl text-center'>{`${slug}`}</h1></div>
  )
}

export default Slug