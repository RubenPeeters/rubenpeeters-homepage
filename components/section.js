import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const Section = ({ children }) => (
  <StyledDiv
    initial={{ y: 10, x: -10, opacity: 0 }}
    animate={{ y: 0, x: 0, opacity: 1 }}
    transiton={{ duration: 0.8 }}
    mb={10}
  >
    {children}
  </StyledDiv>
)

export default Section
