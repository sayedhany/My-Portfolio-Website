import { GetStaticProps } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

// Dynamic imports for non-critical components to improve initial load
const DynamicBgAnimation = dynamic(
  () => import("../components/BackgrooundAnimation/BackgroundAnimation"),
  {
    ssr: false, // Background animation doesn't need SSR
    loading: () => null,
  }
);

const Home = ({ seoData }) => {
  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />

        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Sayed Hany" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="EG-C" />
        <meta name="geo.placename" content="Cairo" />
        <meta name="geo.position" content="30.0444;31.2357" />
        <meta name="ICBM" content="30.0444, 31.2357" />

        {/* Skills and Services */}
        <meta
          name="skills"
          content="Angular, React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Node.js, MongoDB, PostgreSQL"
        />
        <meta
          name="services"
          content="Frontend Development, Web Application Development, E-commerce Development, Enterprise Software, Team Leadership"
        />
        <meta name="availability" content="Available for hire" />
        <meta name="experience" content="5+ years" />
        <meta name="location" content="Cairo, Egypt" />

        {/* Open Graph tags */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.url} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:site_name" content="Sayed Hany Portfolio" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.image} />
        <meta name="twitter:creator" content="@sayedhany" />
        <meta name="twitter:site" content="@sayedhany" />

        {/* Structured data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sayed Hany",
              jobTitle: "Senior Front-End Developer",
              description: seoData.description,
              url: seoData.url,
              image: seoData.image,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Cairo",
                addressCountry: "Egypt",
              },
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Menofia University",
                department:
                  "Faculty of Science - Pure Mathematics and Computer Science",
              },
              knowsAbout: [
                "Angular",
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "HTML5",
                "CSS3",
                "SCSS",
                "TailwindCSS",
                "Node.js",
                "Enterprise Applications",
                "Microservices",
                "PWA",
                "SSR",
                "NgRx",
              ],
              hasOccupation: {
                "@type": "Occupation",
                name: "Senior Front-End Developer",
                occupationLocation: {
                  "@type": "City",
                  name: "Cairo, Egypt",
                },
                skills: [
                  "Frontend Development",
                  "Angular Development",
                  "React Development",
                  "Next.js Development",
                  "TypeScript Programming",
                  "JavaScript Programming",
                  "Web Application Development",
                  "Enterprise Software Development",
                  "Team Leadership",
                  "Code Review",
                  "Performance Optimization",
                ],
              },
              sameAs: [
                "https://github.com/sayedhany",
                "https://www.linkedin.com/in/sayed-hany-b30946192/",
                "https://sayed4.netlify.app",
              ],
              workExample: [
                {
                  "@type": "CreativeWork",
                  name: "Angular Material Marketplace",
                  description:
                    "Enterprise-level material marketplace with monorepo architecture",
                  url: "http://37.27.109.171:4200/customer/",
                },
                {
                  "@type": "CreativeWork",
                  name: "Full-Stack E-Commerce Platform",
                  description:
                    "Complete e-commerce solution with modern technologies",
                  url: "http://egypt-fisher.com/",
                },
              ],
            }),
          }}
        />

        {/* Canonical URL */}
        <link rel="canonical" href={seoData.url} />
      </Head>

      <Layout>
        <Section grid>
          <Hero />
          <DynamicBgAnimation />
        </Section>
        <Projects />
        <Technologies />
        <Timeline />
      </Layout>
    </>
  );
};

// Static generation for better performance
export const getStaticProps = async () => {
  const seoData = {
    title:
      "Sayed Hany - Senior Frontend Developer | Hire Angular & React Expert in Cairo Egypt",
    description:
      "🚀 Senior Frontend Developer in Cairo, Egypt specializing in Angular, React, Next.js & TypeScript. 5+ years building enterprise web applications, e-commerce platforms & microservices. Available for hire - Expert in modern JavaScript frameworks, responsive design & performance optimization.",
    keywords:
      "frontend developer Cairo Egypt, hire frontend developer, Angular developer Cairo, React developer Egypt, Next.js developer, TypeScript developer, senior frontend developer, web developer Cairo, JavaScript developer Egypt, frontend engineer, Angular expert, React expert, hire Angular developer, hire React developer, frontend consultant Egypt, web application developer, enterprise frontend developer, e-commerce developer, responsive web design, UI developer Cairo, modern JavaScript developer, frontend architect, Angular NgRx developer, PWA developer, SSR developer, microservices frontend, Sayed Hany developer, frontend team lead, web development services Egypt, custom web development Cairo, frontend development company",
    url: "https://sayed4.netlify.app",
    image: "https://sayed4.netlify.app/og-image.jpg",
  };

  return {
    props: {
      seoData,
    },
    // Revalidate every 24 hours for fresh content
    revalidate: 86400,
  };
};

export default Home;
