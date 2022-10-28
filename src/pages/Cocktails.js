import React from 'react'
import List from '../components/List'
import Search from '../components/Search'
import Bgparticle from './Bgparticle'
export default function Cocktails() {
  return (
    <main>
      <Bgparticle/>
      <Search />
      <List />
    </main>
  )
}