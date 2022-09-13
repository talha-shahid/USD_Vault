import React from 'react'
import { useRouter } from 'next/router'

function Coins() {
  const router = useRouter()
  console.log(router.query.coins)
  return (
    <div>{router.query.coins}</div>
  )
}

export default Coins