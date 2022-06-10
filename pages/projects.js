import { Container, SimpleGrid } from '@chakra-ui/react'
import { ProjectGridItem } from '../components/grid-item'
import Section from '../components/section'

function Projects() {
  return (
    <Container>
      <SimpleGrid columns={[1, null, 2]} gap={6}>
        <Section>
          <ProjectGridItem id="itachi" title="Itachi">
            A general purpose discord bot with 40+ commands. Notable features
            are &apos;free&apos; nitro emotes and playing chess.
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem id="mlnids" title="Master thesis">
            Using machine learning to detect cyber attacks on networks. Focus on
            evaluating the accuracy of trained models.
          </ProjectGridItem>
        </Section>
      </SimpleGrid>
      <SimpleGrid columns={[1, null, 2]} gap={6}>
        <Section>
          <ProjectGridItem id="codenblocks" title="CodeNBlocks">
            Creating a site that teaches children to code using blocks.
            Different functionality for teachers and admins.
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem id="ugentesports" title="UGent Esports">
            A discord bot written for UGent Esports, of which I am a founder and
            co-chairman. General purpose functionality.
          </ProjectGridItem>
        </Section>
      </SimpleGrid>
      <SimpleGrid columns={[1, null, 2]} gap={6}>
        <Section>
          <ProjectGridItem id="computervision" title="Computer vision">
            A computer vision project, to predict a persons position inside the
            MSK, Ghent using the detecting of paintings in videos.
          </ProjectGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Projects
