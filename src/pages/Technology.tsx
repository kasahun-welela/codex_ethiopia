import Hero from "@/components/Hero";
import TechnologyComponet from "../components/Technology";
import { Helmet } from "react-helmet";
const Technology = () => {
  return (
    <>
       <Helmet>
        <title>Technology at CodeX Africa</title>
        <meta name="description" content="Learn about the cutting-edge technologies and frameworks we use at CodeX Africa to build robust and scalable applications." />
      </Helmet>
      <Hero
        title="Technology"
        description="We specialize in helping you build a team of expert developers."
      />
      <TechnologyComponet />
    </>
  );
};

export default Technology;
