import TermsAndConditions from "@/components/TermsConditions"
import { Helmet } from "react-helmet"

const TermsConditions = () => {
  return (
    <>
    <Helmet>
        <title>Terms and Conditions - CodeX Africa</title>
        <meta name="description" content="Read our terms and conditions to understand the rules and regulations that govern the use of the CodeX Africa platform and services." />
      </Helmet>
        <TermsAndConditions/>
    </>
  )
}

export default TermsConditions