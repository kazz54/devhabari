import React from 'react'
import styled from 'styled-components'
import { AiOutlineDeploymentUnit, AiOutlineRead } from 'react-icons/ai'

const AboutUs = () => {
  return (
    <Wrapper>
      <div className="container">
        <h1 className="section-title about-us-title">Our Story</h1>
        <div className="row">
          <div className="col-lg-7">
            <div className="about-card">
              <AiOutlineRead className="icon" />
              <h3>Mkakati</h3>
              <p>
               DevHabiri ni tuvuti ambayo lengo lake niku chapisha makala za jinsi ambayo unaweza kutumia tekinologia katika mazingira yako ili kurahisisha shuhuli mbalimbali, hapa utapata mbinu na dondoo mbali mbali za jinsi ambanyo unaweza kutumia tekinologia.

Tuliamua kuchagua lugha ya kiswahili kutokana na uhaba wa makala kamahizi kwa lugha hii "Kiswahili".

Sababu nyingine kubwa zaidi ni kwamba lugha za tekinologia ya komputa zimeandikwa kwajili ya binadamua kusoma na kuelewa alafu mashine "komputa" huzitumia "execute" pale zinapo hitaji.

kwa mantiki hiyo basi sisi tumeamua kuzisimulia(chambua)/"fafanua" kwa lugha ya kiswahili

ili iwe rahisi kwa mtu yoyote yule amabaye anajua lughaa ya kiswahili kufuatilia makala haya na hatimaye kunufaika nayo kwa namna moja au nyingine.
              </p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-card">
              <AiOutlineDeploymentUnit className="icon" />
              <h3>Maono</h3>
              <p>
              Jamii ya watu wanao endesha shuhuli zao kwa kutumia tekinologia, kiswahili na tekinologia inawezekana.  
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 5rem 0;

  .about-us-title {
    margin-bottom: 4rem;
    font-size: 180%;
  }

  .about-card {
    background-color: #fafafa;
    padding: 40px;
    border-radius: 5px;
    min-height: 464px;
  }

  .icon {
    width: 90px;
    height: auto;
    background-color: var(--card-icon-bg);
    padding: 1rem;
    border-radius: 0.8rem;
    margin-bottom: 1rem;
    box-shadow: 0 7px 25px #b6eaffb4;
  }

  @media screen and (max-width: 767px) {
    .about-card {
      margin-bottom: 1rem;
    }
  }
`

export default AboutUs
