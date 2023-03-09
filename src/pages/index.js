import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Head from "next/head";
const Home = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="I'm Sayed Hany, I'm 23 years and I'm from Cairo, I graduated from Menofia University, faculty of science and Pure mathematics and computer science department, and creative and self-starting Entry level Front-End Developer. Building stable websites and apps in fast-paced, collaborative environments. Implementation of apps and landing pages from concept through deployment. Maintaining, optimizing, troubleshooting, and improving websites."
        ></meta>
        <title>Sayed Hany</title>
      </Head>
      <Layout>
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Projects />
        <Technologies />
        <Timeline />
      </Layout>
    </>
  );
};

export default Home;
