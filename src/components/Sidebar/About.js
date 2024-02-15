import React from 'react'
import SocialLinks from '../../constants/socialLinks'
import { StaticImage } from 'gatsby-plugin-image'
import ContactFormone from '../ContactFormone'
import Title from './Title'
import styled from 'styled-components'
import SidebarCard from './SidebarCard'
import './sidebar-styles.scss'

const About = () => {
  return (
    <SidebarCard>
      <Wrapper>
        <Title title="Makala kwenye barua" />
        <StaticImage
          src="../../assets/logo.png"
          layout="fixed"
          width={100}
          height={100}
          alt="author"
          className="img"
        />
        <p>Pata makala zabure kabisa zenye mafunzo kwenye topic mbali mbali uzipendazo.</p>
        <SocialLinks className="sidebar-icons" />
        <ContactFormone/>
      </Wrapper>
    </SidebarCard>
  )
}

const Wrapper = styled.div`
  text-align: center;
  p {
    color: var(--grey-5);
  }
  .img {
    /* border-radius: 50%; */
    margin: 0 auto;
    margin-bottom: 1rem;
  }
`
export default About
