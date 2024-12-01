import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Links from './links/Links'
import "./sidebar.scss"
import ToggleButtons from './toggleButtons/ToggleButtons'

const Sidebar = () => {

  const[open, setOpen] = useState(false)

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition:{
        duration: 5,
        type:'spring',
        stiffness:10,
        }

    },
    closed: {
      clipPath: "circle(30px at 50px 35px)",
      transition:{
      duration: 1,
      type:'spring',
      stiffness: 50,
      dampning:40
      }
    }
  }
  return (
    <motion.div className='sidebar' animate={open?'open':'closed'} variants={variants}>
      <motion.div className="bg" variants={variants}>
        <Links/>
      </motion.div>
      <ToggleButtons setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar
