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
          <MrBadge>Platform</MrBadge>
          <span>Discord</span>
        </ListItem>
        <ListItem>
          <MrBadge>Stack</MrBadge>
          <span>Python, discord.py</span>
        </ListItem>
        <ListItem>
          <MrBadge>GitHub</MrBadge>
          <Link href="https://github.com/RubenPeeters/Itachi">
            Source code <ExternalLinkIcon />
          </Link>
        </ListItem>
        <ListItem>
          <MrBadge>Last update</MrBadge>
          <span>18/08/2018</span>
        </ListItem>
        <ListItem>
          <MrBadge>Commands</MrBadge>
          <Link href="https://top.gg/bot/457838617633488908">
            top.gg <ExternalLinkIcon />
          </Link>
        </ListItem>
      </List>
      <Section>
        <Heading mt={8} as="h3" variant="section-title">
          Why?
        </Heading>
        <Paragraph>
          After spending a good amount of time on Discord (software for gamers
          to communicate) I got intrigued by the many bots that were apparent on
          the platform. I started developing a personal bot that quickly
          developed and had a great amount of functionalities. I wrote the bot
          in python using a Discord API wrapper known as discord.py. A discord
          bot responds to commands given to them in a server. These usually
          consist of a given prefix followed by the command name. These are the
          basics.
        </Paragraph>
        <Paragraph>
          Below you can find a screenshot of Itachi in it's glory days with
          100K+ total users and 240 guilds (or servers).
        </Paragraph>
        <TempImage src={'/images/itachi.png'} alt={'Itachi users'}></TempImage>
      </Section>
      <Section>
        <Heading mt={8} as="h3" variant="section-title">
          What it do?
        </Heading>
        <Paragraph>
          A list of all the functionalities can be found{' '}
          <Link href="https://top.gg/bot/457838617633488908">here</Link>. I will
          be going over the most noteworthy and/or most interesting in my own
          opinion.
        </Paragraph>
        <Heading as="h4" variant="sub-section-title">
          Chess
        </Heading>
        <Paragraph>
          I am a vivid chess fan and so I implemented the game into my bot. A
          challenge could be created in a channel, to which any challenger could
          react. After the game started, no more games could be created in this
          channel. After every move a new board was send to the channel, with
          the option of turning the board. The moves were made by typing the
          coordinates of the square of the piece to be moved and the square it
          had to be moved to. Proper game mechanics such as castling and en
          passant were obviously also implemented.
        </Paragraph>
        <Heading as="h4" variant="sub-section-title">
          Paid emotes for free (kind of...)
        </Heading>
        <Paragraph>
          When discord nitro became a thing, I refused to pay to use emotes and
          instead used the bot i created to detect when i wanted to use an emote
          and make it send it for me. I did this by analyzing messages for the
          occurence of ";". Whenever i wanted to use an emote i just surrounded
          the name with ";" characters. For example: ;heavybreathing; which
          would then prompt the bot to send the corresponding emote. This was
          ofcourse not perfect as the bot can't edit the messages a user has
          sent. Nonetheless a nice feature.
        </Paragraph>
        <Heading as="h4" variant="sub-section-title">
          Custom prefixes
        </Heading>
        <Paragraph>
          As more and more bots joined the ranks of discord servers, using a
          custom prefix instead of the preset ones was highly preferred.
          Characters such as "?" and "!" were by far the most popular prefixes
          and thus it was annoying when a help command was sent and 10+
          different bots answered. Therefore i made it possible to address the
          bot by pinging them (default) and add or remove custom prefixes. This
          was also the first time i used an actual database (sqlite in this
          case).
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Project
