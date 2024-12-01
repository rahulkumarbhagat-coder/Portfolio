import React from 'react'
import { animate, motion } from 'framer-motion'
import "./navbar.scss"
import Sidebar from '../sidebar/Sidebar'

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>Frontend Developer</motion.span>
        <div className="social">
          <a href='www.linkedin.com/in/rahul-kumar-bhagat-246150313'><img src='https://cdn-icons-png.flaticon.com/512/174/174857.png'/></a>
          <a href='https://www.instagram.com/rahul.k_me/'><img src='instagram.png'/></a>
          <a href='https://github.com/rahulkumarbhagat-coder'><img src='https://icones.pro/wp-content/uploads/2021/06/icone-github-violet.png'/></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
