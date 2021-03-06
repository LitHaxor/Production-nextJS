import React from 'react'
import { majorScale, Pane } from 'evergreen-ui'
import HomeNav from '../components/HomeNav'
import Container from '../components/Container';
import Hero from '../components/Hero'
import FeatureSection from '../components/FeatureSection';
const Home = () => {
  return (
    <Pane>
      <header>
        <HomeNav/>
        <Container>
          <Hero/>
        </Container>
      </header>
      <main>
        <FeatureSection
          title="Reacord Everything"
          body="Blah blah"
          image="https://via.placeholder.com/300"
          invert
        />
        <FeatureSection
          title="Delete Everything"
          body="Blah blah"
          image="https://via.placeholder.com/300"
          invert
        />

      <FeatureSection
          title="Uninstall Everything"
          body="Blah blah"
          image="https://via.placeholder.com/300"
          invert
        />
    
      </main>
      <footer>
        <Pane background="overlay" paddingY={majorScale(9)}>
          <Container>
            Hello
          </Container>
        </Pane>
      </footer>
    </Pane>
  )
}

export default Home
