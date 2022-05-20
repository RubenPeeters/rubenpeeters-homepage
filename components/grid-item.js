import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  Heading,
  useColorModeValue
} from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const ProjectGridItem = ({ children, id, title }) => (
  <LinkBox
    as="article"
    maxW="sm"
    p="5"
    borderWidth="1px"
    borderColor={useColorModeValue('blue.800', 'white')}
    rounded="md"
  >
    <Heading size="md" my="2">
      <LinkOverlay href={`/projects/${id}`}>{title}</LinkOverlay>
    </Heading>
    <Text>{children}</Text>
  </LinkBox>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
