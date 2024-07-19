import Privacy from "@/components/PrivacyPolicy";
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  return (
    <div>
      <Helmet>
        <title>Privacy Policy - CodeX Africa</title>
        <meta
          name="description"
          content="Read our privacy policy to understand how we collect, use, and protect your data at CodeX Africa."
        />
      </Helmet>
      <Privacy />
    </div>
  );
};

export default PrivacyPolicy;
