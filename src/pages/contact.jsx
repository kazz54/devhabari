import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/SEO'
import ContactForm from '../components/ContactForm'
import AboutUs from '../components/About/AboutUs'
import Vision from '../components/About/Vision'

const contact = () => {
  return (
    <Layout>
      <Seo
        title="Contact Us | Revista"
        description="Reach out for any inquiries, or find out how you can help our mission!"
      />
       <AboutUs />
      <Vision />
      <ContactForm />
    </Layout>
  )
}

export default contact
