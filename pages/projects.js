import { Container, SimpleGrid } from '@chakra-ui/react'
import { ProjectGridItem } from '../components/grid-item'
import Section from '../components/section'

function Projects() {
  return (
    <Container>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <ProjectGridItem id="itachi" title="Itachi">
            A general purpose discord bot with 40+ commands. Notable features
            are &apos;free&apos; nitro emotes and playing chess.
          </ProjectGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Projects
