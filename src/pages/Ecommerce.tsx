import EcommerceComponet from "@/components/Ecommerce";
import { Helmet } from "react-helmet";
const Ecommerce = () => {
  return (
    <>
       <Helmet>
        <title>E-Commerce Solutions - CodeX Africa</title>
        <meta name="description" content="Empower your online store with our comprehensive e-commerce solutions designed to increase sales and improve customer experience." />
      </Helmet>
      <EcommerceComponet />
    </>
  );
};

export default Ecommerce;
