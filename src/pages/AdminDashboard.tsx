import { Helmet } from "react-helmet"
import AdminDashboardComponet from "../components/AdminDashboard"
const AdminDashboard = () => {
  return (
    <>
    <Helmet>
        <title>Admin Dashboard - CodeX Africa</title>
        <meta name="description" content="Access the administrative dashboard for managing CodeX Africa’s services, user interactions, and backend operations efficiently." />
      </Helmet>

      <AdminDashboardComponet />
    </>
  )
}

export default AdminDashboard