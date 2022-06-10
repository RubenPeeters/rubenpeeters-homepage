import { Container, List, ListItem, Link, Heading } from '@chakra-ui/react'
import Paragraph from '../../components/paragraph'
import Section from '../../components/section'
import { MrBadge, TempImage } from '../../components/project-templates'
import { ExternalLinkIcon } from '@chakra-ui/icons'
function Project() {
  return (
    <Container>
      <List ml={4} my={4}>
        <ListItem>
          <MrBadge>Stack</MrBadge>
          <span>Python, Jupyter Notebooks, Tensorflow, PyTorch, Pandas</span>
        </ListItem>
        <ListItem>
          <MrBadge>GitHub</MrBadge>
          <Link href="https://github.com/RubenPeeters/masterproef">
            Source code <ExternalLinkIcon />
          </Link>
        </ListItem>
        <ListItem>
          <MrBadge>Last update</MrBadge>
          <span>20/05/2022</span>
        </ListItem>
      </List>
      <Section>
        <Heading mt={8} as="h3" variant="section-title">
          Whoops...
        </Heading>
        <Paragraph>No writeup has been made yet. Check back later!</Paragraph>
      </Section>
    </Container>
  )
}

export default Project
