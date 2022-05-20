import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons'
import { BsLightbulb, BsLightbulbOffFill } from 'react-icons/bs'

function LightIcon() {
  return <Icon as={BsLightbulb} />
}

function DarkIcon() {
  return <Icon as={BsLightbulbOffFill} />
}

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        animate={{
          opacity: 1,
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 0.3 }}
      >
        <IconButton
          aria-label="Toggle theme"
          colorScheme={useColorModeValue('facebook', 'gray')}
          icon={useColorModeValue(<DarkIcon />, <LightIcon />)}
          onClick={toggleColorMode}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton
