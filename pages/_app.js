import Head from 'next/head'
import { ChakraProvider, Box, Container } from '@chakra-ui/react'
import NavBar from '../components/navbar'
import { AnimatePresence } from 'framer-motion'
import theme from '../global-config/theme'

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Box as="main" pb={8}>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta name="description" content="Ruben Peeters homepage" />
            <meta name="author" content="Ruben Peeters" />
            <title>Ruben Peeters - Homepage</title>
          </Head>
          <NavBar path={router.asPath} />
          <Container maxW="container.md" pt={20}>
            <Component {...pageProps} key={router.route} />
          </Container>
        </AnimatePresence>
      </Box>
    </ChakraProvider>
  )
}

export default MyApp
