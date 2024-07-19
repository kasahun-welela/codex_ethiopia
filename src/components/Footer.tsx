import { Link } from "react-router-dom";
function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="bg-slate-900 text-gray-400 py-4">
      <div className="grid grid-cols-2 text-sm md:grid-cols-4 gap-2 max-w-[90%] md:max-w-[70%] mx-auto  ">
        <div className="">
          <h1 className="text-xl font-semibold text-gray-300">Location</h1>
          <p className="max-w-xs">
          Addis Ababa, Africa, Ras Desta Damtew Road , OBS Tv Building 3rd Floor, Office #305
          </p>
          <div className="my-1">
            <div className="flex items-center gap-3 my-3">
              <i className="ri-map-pin-line text-xl text-primary"></i>

              <div>
                <p className="font-semibold">Location</p>
                <p>Addis Ababa </p>
              </div>
            </div>
            <div className="flex items-center gap-3 my-3">
              <i className="ri-phone-fill text-xl text-primary"></i>
              <div>
                <p className="font-semibold">Phone Number</p>
                <p>+251-910979060</p>
                <p>+251-946642299</p>
                <p>+251-931556590</p>
              </div>
            </div>
            <div className="flex items-center gap-3 my-3">
              <i className="ri-mail-line  text-xl text-primary"></i>

              <div>
                <p className=" font-semibold">Email</p>
                <p>codexafrica@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" leading-9">
          <h1 className="text-xl font-semibold text-gray-300">Company</h1>
          <ul>
            <li>
              <Link to="/" className="hover:text-primary hover:font-semibold">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-primary hover:font-semibold"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/termsandconditions"
                className="hover:text-primary hover:font-semibold"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms_conditions"
                className="hover:text-primary hover:font-semibold"
              >
                Terms and Condition
              </Link>
            </li>
          </ul>
        </div>
        <div className="  leading-9">
          <h1 className="text-xl font-semibold text-gray-300">Services</h1>
          <ul>
          
          <li>
              <Link
                to="https://real-estate-main-ten.vercel.app/"
                className="hover:text-primary hover:font-semibold"
              >
                Real Estate
              </Link>
            </li>
            <li>
              <Link
                to="https://walia-jobs.vercel.app/"
                className="hover:text-primary hover:font-semibold"
              >
                Jobs Portal
              </Link>
            </li>
            <li>
              <Link
                to="/https://solomonmoalawoffice.com/"
                className="hover:text-primary hover:font-semibold"
              >
                Personal Website
              </Link>
            </li>
            <li>
              <Link
                to="https://next-shadcn-dashboard-starter.vercel.app/"
                className="hover:text-primary hover:font-semibold"
              >
                Admin Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="https://kanban-project-management-tools.vercel.app/"
                className="hover:text-primary hover:font-semibold"
              >
                Project Management Tools
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-primary hover:font-semibold"
              >
                Blog Website
              </Link>
            </li>
            <li>
              <Link
                to="/coming_soon"
                className="hover:text-primary hover:font-semibold"
              >
                Community Website
              </Link>
            </li>
            <li>
              <Link
                to="/coming_soon"
                className="hover:text-primary hover:font-semibold"
              >
                Consulting Website
              </Link>
            </li>
            <li>
              <Link
                to="/coming_soon"
                className="hover:text-primary hover:font-semibold"
              >
                Booking Site
              </Link>
            </li>
            <li>
              <Link
                to="/coming_soon"
                className="hover:text-primary hover:font-semibold"
              >
                School Website
              </Link>
            </li>
            <li>
              <Link
                to="/coming_soon"
                className="hover:text-primary hover:font-semibold"
              >
                Entertainment website
              </Link>
            </li>
            <li>
              <Link
                to="/coming_soon"
                className="hover:text-primary hover:font-semibold"
              >
                News and Magazine
              </Link>
            </li>
            <li>
              <Link
                to="/coming_soon"
                className="hover:text-primary hover:font-semibold"
              >
                Subscription website
              </Link>
            </li>
          </ul>
        </div><div className="leading-9">
  <h1 className="text-xl font-semibold text-gray-300">How to start</h1>
  <ul>
  <li><Link to="/you_asked" className="hover:text-primary hover:font-semibold">You Asked</Link></li>
  <li><Link to="/we_proceed" className="hover:text-primary hover:font-semibold">We proceed</Link></li>
  <li><Link to="/negotiate" className="hover:text-primary hover:font-semibold">Negotiate</Link></li>
  <li><Link to="/you_get" className="hover:text-primary hover:font-semibold">You get</Link></li>
  <li><hr className="my-4 border-gray-300 w-[30%]" /></li>
  <li className="list-none">
    <h1 className="text-xl font-semibold text-gray-300">About Us</h1>
  </li>
  <li><Link to="/faq" className="hover:text-primary hover:font-semibold">FAQ</Link></li>
  <li><Link to="/vision" className="hover:text-primary hover:font-semibold">Vision</Link></li>
  <li><Link to="/mission" className="hover:text-primary hover:font-semibold">Mission</Link></li>
  <li><Link to="/core_values" className="hover:text-primary hover:font-semibold">Core Values</Link></li>
</ul>

</div>

        
      </div>
      <div className="flex justify-center items-center gap-3 py-6">
        <Link to="/">
          {" "}
          <i className="ri-facebook-fill bg-gray-100 text-primary text-xl  p-2  rounded-full hover:font-bold "></i>
        </Link>
        <Link to="/">
          <i className="ri-instagram-line bg-gray-100 text-primary text-xl  p-2  rounded-full hover:font-bold"></i>
        </Link>
        <Link to="/">
          <i className="ri-linkedin-fill bg-gray-100 text-primary text-xl  p-2  rounded-full hover:font-bold"></i>
        </Link>
        <Link to="/">
          <i className="ri-telegram-2-fill bg-gray-100 text-primary text-xl  p-2  rounded-full hover:font-bold"></i>
        </Link>
      </div>
      <p className="text-center font-bold text-gray-200">
        <i className="ri-copyright-line"></i>Copyright CodeX Africa {year}
      </p>
    </div>
  );
}

export default Footer;
