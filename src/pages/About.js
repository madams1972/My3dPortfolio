import PropTypes from 'prop-types'
import React from 'react'
import { FaFilePdf } from 'react-icons/fa'
import Page from '../components/Page'
import ProgressiveImg from '../components/ProgressiveImg'
import { useAbout } from '../hooks/useAbout'

const About = ({ setPage }) => {
  const {
    skillData,
    attributeData,
    // achievementData,
    proficiencyData,
    languageData,
    historyData,
    educationData,
    resumeData,
  } = useAbout()

  return (
    <Page
      setPage={setPage}
      name="About"
      content={
        <div className="about-page">
          <div className="about-page__blurb">
            <img className="avatar" src="/images/malissa-avatar1.png" />
            <div>
              <h1>Malissa Adams - Full Stack Web Developer</h1>
              <p>
                Web 3.0 is the future of the internet, and I am excited to be a
                part of this revolution. As an expert in the field of blockchain
                and decentralized systems, I am passionate about discussing the
                emergence of Web 3.0. Web 3.0 is a decentralized version of the
                internet, where users control data and services rather than
                centralized authorities. It is built on blockchain technology,
                which enables secure and transparent transactions and smart
                contracts that automate processes. Web 3.0 allows for new
                applications and business models, such as decentralized finance,
                peer-to-peer marketplaces, and digital identity management. <br></br>As a Diversity Equity and Inclusion consultant and full-stack
                  web developer, I have seen the impact of intentional diversity
                  initiatives. I believe that game-changing diversity strategies
                  come from Game-Changing DEI Practitioners.
                
              </p>
              {resumeData.map((item, index) => {
                return (
                  <div key={`resume-${index}`}>
                    <FaFilePdf />
                    <a href={item.path} target="_blank" rel="noreferrer">
                      {item.name}
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="about-page__skills__container">
            {skillData.map((item, index) => {
              return (
                <div
                  key={`skill-${index}`}
                  className="about-page__skills--item"
                >
                  <span>{item}</span>
                </div>
              )
            })}
          </div>
          <div className="about-page__proficiencies">
            <h2>Proficiencies</h2>
            <div className="about-page__proficiencies__container">
              {proficiencyData.map((item, index) => {
                return (
                  <div
                    key={`proficiency-${index}`}
                    className="about-page__proficiencies--item"
                  >
                    <ProgressiveImg
                      alt={`proficiency-logo-${item.name}`}
                      src={item.src}
                      compressedSrc={item.compressedSrc}
                    />
                    <span>{item.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="about-page__languages">
            <h2>Languages</h2>
            <div className="about-page__languages__container">
              {languageData.map((item, index) => {
                return (
                  <div
                    key={`language-${index}`}
                    className="about-page__languages--item"
                  >
                    <ProgressiveImg
                      alt={`language-logo-${item.name}`}
                      src={item.src}
                      compressedSrc={item.compressedSrc}
                    />
                    <span>{item.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="about-page__attributes">
            <h2>Attributes</h2>
            <div className="about-page__attributes__container">
              {attributeData.map((item, index) => {
                return (
                  <div
                    key={`attribute-${index}`}
                    className="about-page__attributes--item"
                  >
                    <span>{item}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* <div className="about-page__achievements">
            <h2>Achievements</h2>
            <div className="about-page__achievements__container">
              {achievementData.map((item, index) => {
                return (
                  <div
                    key={`achievement-${index}`}
                    className="about-page__achievements--item"
                  >
                    {item.title}
                    {item.content}
                  </div>
                )
              })}
            </div>
          </div> */}
          <div className="about-page__history">
            <h2>Employment History</h2>
            <div className="about-page__history__container">
              {historyData.map((item, index) => {
                return (
                  <div
                    key={`history-${index}`}
                    className="about-page__history--item"
                  >
                    {item.title}
                    {item.content}
                  </div>
                )
              })}
            </div>
          </div>
          <div className="about-page__education">
            <h2>Education History</h2>
            <div className="about-page__education__container">
              {educationData.map((item, index) => {
                return (
                  <div
                    key={`education-${index}`}
                    className="about-page__education--item"
                  >
                    {item.title}
                    {item.content}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      }
    ></Page>
  )
}

About.displayName = 'About'

About.propTypes = {
  setPage: PropTypes.func,
}

export default About





