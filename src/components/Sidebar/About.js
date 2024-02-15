import React from 'react'
import SocialLinks from '../../constants/socialLinks'
import { StaticImage } from 'gatsby-plugin-image'
import ContactForm from '../components/ContactForm'
import Title from './Title'
import styled from 'styled-components'
import SidebarCard from './SidebarCard'
import './sidebar-styles.scss'

const About = () => {
  return (
    <SidebarCard>
      <Wrapper>
        <Title title="Kuhusu Sisi" />
        <StaticImage
          src="../../assets/logo.png"
          layout="fixed"
          width={100}
          height={100}
          alt="author"
          className="img"
        />
        <p>Pata makala zabura kabisa zenye mafunzo kwenye topic mbali mbali uzipendazo.</p>
        <SocialLinks className="sidebar-icons" />
        <ContactForm/>
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
