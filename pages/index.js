import Layout from "../components/layout/layout";
import {
  HomeSection,
  WorkSection,
  AboutSection,
  SkillsSection,
  ContactSection,
} from "../components/sections/index";
import { transitions, positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 5000,
  position: positions.MIDDLE_RIGHT,
  transition: transitions.SCALE,
};

export default function Home() {
  return (
    <Layout>
      <HomeSection />
      <AboutSection />
      <WorkSection projects={projects} />

      <SkillsSection />
      <Provider template={AlertTemplate} {...options}>
        <ContactSection />
      </Provider>
    </Layout>
  );
}

// import { getProjects } from "../libs/projects";

// export async function getStaticProps() {
//   // const projects = await getProjects()

//   return {
//     props: { projects },
//   };
// }

const projects = [
  {
    id: 1,
    attributes: {
      logo: "/blogin.webp",
      pictures: "/blogin.webp",
      title:
        "Lot of students suffer from lack of financial support,Madaura is a platform designed to help students echange items between them by buying or even borrowing ",
      tools: "Built with NextJs 14, Tailwind and Supabase",
    },
    links: {
      live: "https://blog-platform-chi-fawn.vercel.app/",
      github: "https://github.com/medshk/blog_platform",
    },
  },
  {
    id: 2,
    attributes: {
      logo: "/madaura.png",
      pictures: "/madaura.png",
      title:
        "BlogIn is an app designed for content creators to build and share their blogs",
      tools: "Built with React, CSS and FireBase",
    },
    links: {
      live: "https://student-store-team-2.vercel.app/",
      github: "https://github.com/202306-NEA-DZ-FEW/student-store-team-2",
    },
  },
];
