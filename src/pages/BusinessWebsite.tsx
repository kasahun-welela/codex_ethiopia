import BusinessWebsiteComponet from "@/components/BusinessWebsiteComponet";
import { Helmet } from "react-helmet";

const BusinessWebsite = () => {
  return (
    <>
      <Helmet>
        <title>Business Website Solutions - CodeX Africa</title>
        <meta
          name="description"
          content="Boost your business with our tailored website solutions that cater to your specific business needs and market demands."
        />
      </Helmet>
      <BusinessWebsiteComponet />{" "}
    </>
  );
};

export default BusinessWebsite;
