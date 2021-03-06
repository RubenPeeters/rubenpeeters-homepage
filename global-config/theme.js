import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#ede8e0', 'blue.800')(props)
    },
    '&::-webkit-scrollbar': {
      width: '0px'
    },
    '&::-webkit-scrollbar-track': {
      width: '0px'
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 'opx'
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        fontSize: 20,
        marginTop: 3,
        marginBottom: 4
      },
      'sub-section-title': {
        fontSize: 16,
        marginTop: 2,
        marginBottom: 2
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('black', 'white')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts })
export default theme
