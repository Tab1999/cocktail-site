import React from 'react'
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";
export default function Cocktail({ image, name, id, info, glass }) {
  return (
    <article className='cocktail'>
      <motion.div whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 2 }} className='img-container'>
        <img src={image} alt={name} />
      </motion.div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>
          details
        </Link>
      </div>
    </article>
  )
}