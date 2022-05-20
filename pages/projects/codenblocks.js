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
          <span>JavaScript, Angular</span>
        </ListItem>
        <ListItem>
          <MrBadge>GitHub</MrBadge>
          Not publicly available
        </ListItem>
        <ListItem>
          <MrBadge>Last update</MrBadge>
          <span>21/05/2021</span>
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
