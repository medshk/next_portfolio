import Layout from '../components/layout/layout'
import { HomeSection ,WorkSection , AboutSection, SkillsSection, ContactSection  } from "../components/sections/index"
import {  transitions ,positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 5000,
  position: positions.MIDDLE_RIGHT,
  transition: transitions.SCALE
};

export default function Home({ projects }) {
  return (
    <Layout>
      <HomeSection />
      <WorkSection projects={projects} />
      <AboutSection />
      <SkillsSection />
      <Provider template={AlertTemplate} {...options}>
        <ContactSection/>
      </Provider>
    </Layout>
  )
}

import { getProjects } from "../libs/projects"

export async function getStaticProps() {

  const projects = await getProjects()

  return {
    props : { projects}
  }
}
