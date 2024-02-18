import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/SEO'
import ContactForm from '../components/ContactForm'
//import AboutUs from '../components/About/AboutUs'
import Network from '../components/About/Network'


const contact = () => {
  return (
    <Layout>
      <Seo
        title="Contact Us | Devhabari"
        description="Reach out for any inquiries, or find out how you can help our mission!"
      />
       <Network />
      <ContactForm />
    </Layout>
  )
}

export default contact
