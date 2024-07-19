import ContactComponet from "@/components/Contact";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us - CodeX Africa</title>
        <meta
          name="description"
          content="Get in touch with CodeX Africa for any inquiries or to discuss your next project. Our team is ready to help you find the right solutions."
        />
      </Helmet>
      <ContactComponet />
    </div>
  );
};

export default Contact;
