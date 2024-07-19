// import Hero from "@/components/Hero";
import Price from "@/components/Pricing";
import { Helmet } from "react-helmet";

const pricing = () => {
  return (
    <>
      <Helmet>
        <title>Pricing Plans - CodeX Africa</title>
        <meta name="description" content="Explore our flexible pricing plans designed to fit the needs of businesses both big and small. Get the best value with CodeX Africa." />
      </Helmet>
      {/* <Hero
        title="Pricing"
        description="Choose the plan that fits your needs. All plans are billed monthly and exclude VAT"
      /> */}
      <Price />
    </>
  );
};

export default pricing;
