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
        "BlogIn revolutionizes the blogging game by offering a built-in writing interface that's intuitive and user-friendly. Whether you're a seasoned blogger or just starting, the app streamlines the writing process, allowing you to focus on your ideas. With easy formatting tools and a distraction-free environment, BlogIn makes expressing yourself online a joy. Say goodbye to technical hurdles and embrace a new era of hassle-free blogging!",

      tools: "Built with React, CSS and FireBase",
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
        "Many students face financial challenges, and Madaura is here to make a difference. It's a unique platform designed to facilitate item exchanges among students, whether through buying or borrowing. With Madaura, students can support each other, creating a community where resources are shared to overcome financial barriers and promote a collaborative academic journey.",
      tools: "Built with NextJs 14, Tailwind and Supabase",
    },
    links: {
      live: "https://student-store-team-2.vercel.app/",
      github: "https://github.com/202306-NEA-DZ-FEW/student-store-team-2",
    },
  },
  {
    id: 3,
    attributes: {
      logo: "/images/chemxLogo.png",
      pictures: "/images/chemXBg.png",
      title:
        "Introducing ChemX, a user-friendly 2D graphical web app designed to simplify the task of drawing and importing chemical structures. Unlike the majority of chemical software available as desktop apps, ChemX stands out by offering a seamless experience without the need for any installation setup. Enhance your workflow and enjoy the convenience of ChemX.",
      tools: "Built with JavaScript, CSS, FabricJS",
    },
    links: {
      live: "https://medshk.github.io/ChemX/",
      github: "https://github.com/medshk/ChemX",
    },
  },
  {
    id: 4,
    attributes: {
      logo: "/images/rottenPotatoBg.png",
      pictures: "/images/rottenPotatoBg.png",
      title:
        "Ever found yourself in the dilemma of choosing what movie to watch? Fear not, because that's where RottenPotato comes to the rescue. Explore and watch trailers for the latest movies and TV shows, and effortlessly find your perfect pick. Whether you're in search of a specific movie or looking to filter options by genres, RottenPotato has you covered.",
      tools: "Built with Nextjs, Tailwind, RestAPI and ReactIcons.",
    },
    links: {
      live: "https://movie-project-rottenpotato.vercel.app/",
      github: "https://github.com/202306-NEA-DZ-FEW/movie-project-rottenpotato",
    },
  },
  {
    id: 5,
    attributes: {
      logo: "/images/sokkifyBg.png",
      pictures: "/images/sokkifyBg.png",
      title:
        "Sokkify showcases the seamless experience of utilizing ecommerce platforms. Browse through a variety of products, easily search and filter by price, categories, and more. Add items to your cart, and effortlessly view your selections along with the total price.",
      tools: "Built with NextJs, Tailwind and  RestAPI.",
    },
    links: {
      live: "https://so9ify.vercel.app/",
      github: "https://github.com/202306-NEA-DZ-FEW/e-commerce-project-team-8",
    },
  },
];
