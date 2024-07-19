import About from "@/components/About";
import Teams from "@/components/Team";
import { Helmet } from "react-helmet";

const about = () => {
  return (
    <>
      <Helmet>
        <title>About Us - CodeX Africa</title>
        <meta name="description" content="Discover more about CodeX Africa, our core values, mission, and the team behind our technology solutions." />
      </Helmet>
      <About />
      <Teams />
    </>
  );
};

export default about;
