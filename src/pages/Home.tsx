import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Landing from "../components/LandingPage";

import { Helmet } from 'react-helmet';
function Home() {
  return (
    <>
    <Helmet>
        <title>Home - CodeX Africa</title>
        <meta name="description" content="Discover the top software solutions that empower African businesses to excel in a digital-first world. Learn about our services and how we can help your business thrive." />
      </Helmet>
      <Landing />
    </>
  );
}

export default Home;
