import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'
import {motion} from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function List() {
  const [selectedId, setSelectedId] = useState(null)
  const { cocktails, loading } = useGlobalContext()

  if (loading) {
    return <Loading/>
  }
  if (cocktails.length < 1) {
    return (
      <h2 className='section-title'>
        no cocktails matched your search criteria
      </h2>
    )
  }
  return (
    <section className='section'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {cocktails.map((item) => {
          
              return <Cocktail key={item.id} {...item} />
         

        })}
      
      </div>
    </section>
  )
}