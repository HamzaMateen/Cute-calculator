import "./Button.css";
import { motion } from "framer-motion";

const Button = ({ className, value, onClick }) => {
  return (
    <motion.button 
      className={`${className} button`} 
      onClick={onClick}
      whileHover={{
        scale: 1.1,    
        transition: { duration: 0.2 }
      }}
      whileTap={{
        scale: 0.9,
        transition: { duration: 0.2 }
      }}
    >
      {value}
    </motion.button>

  )
}

export default Button;