import {
  Box,
  Container,
  Heading,
  Button,
  useColorModeValue,
  chakra,
  Link
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Image from 'next/image'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

function HomePage() {
  return (
    <Container>
      <Box
        display={{ md: 'flex' }}
        borderRadius="md"
        bg={useColorModeValue('blue.700', '#ffffff40')}
        p={10}
      >
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title" style={{ color: '#ede8e0' }}>
            Hey, I&apos;m Ruben.
          </Heading>
          <p style={{ color: '#ede8e0' }}>
            Engineer, developer, chess enthusiast
          </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box w="100px" h="100px">
            <ProfileImage
              src="/images/ruben.jpg"
              alt="Profile picture"
              borderRadius="md"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>
      <Section>
        <Heading mt={8} as="h3" variant="section-title">
          About me
        </Heading>
        <Paragraph>
          I&apos;m an IT engineering student at Ghent University. Through my
          study I&apos;ve had the opportunity to learn multiple coding
          languages, frameworks and technologies. However, funnily enough, the
          language I use most (Python) is one I didn&apos;t learn behind a
          school desk. I enjoy learning new things alot and am very eager to try
          new languages and frameworks. I've also competed in the Belgian
          Security Challenge 2022 and got to the finals in the Royal Military
          Academy in Brussels! Some action photos can be found{' '}
          <Link href="https://pryzm.be/csc2022">here</Link>.
        </Paragraph>
      </Section>
      <Section>
        <Heading as="h3" variant="section-title">
          Projects
        </Heading>
        <Paragraph>
          The most fun projects I&apos;ve worked on were the discord bot I
          created and my current master thesis. Most of the projects I&apos;ve
          worked on were made for school. I have a summary of the most notable
          projects <Link href="/projects">here</Link>.
        </Paragraph>
      </Section>

      <Section>
        <Heading as="h3" variant="section-title">
          Hobbies
        </Heading>
        <Paragraph>
          I spend most of my free time learning new things, playing games or in
          the gym.
        </Paragraph>
      </Section>
      <Section>
        <Heading mt={8} as="h3" variant="section-title">
          Links
        </Heading>
        <Link href="https://linkedin.com/in/ruben-peeters-861271163">
          <Button
            m={5}
            aria-label="Linkedin"
            colorScheme={useColorModeValue('facebook', 'gray')}
            leftIcon={<IoLogoLinkedin />}
            onClick={e => handleClick(e, '/posts')}
          >
            Linkedin
          </Button>
        </Link>
        <Link href="https://github.com/RubenPeeters">
          <Button
            m={5}
            aria-label="GitHub"
            colorScheme={useColorModeValue('facebook', 'gray')}
            leftIcon={<IoLogoGithub />}
          >
            GitHub
          </Button>
        </Link>
      </Section>
    </Container>
  )
}

export default HomePage
