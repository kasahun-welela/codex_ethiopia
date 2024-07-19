import PersonalWebsiteComponet from "@/components/PersonalWebsiteComponet";
import { Helmet } from "react-helmet";

const PersonalWebsite = () => {
  return (
    <>
      <Helmet>
        <title>Personal Website Services - CodeX Africa</title>
        <meta
          name="description"
          content="Create a personal website that stands out. Showcase your portfolio, blog, or resume with our custom design solutions."
        />
      </Helmet>
      <PersonalWebsiteComponet />
    </>
  );
};

export default PersonalWebsite;
