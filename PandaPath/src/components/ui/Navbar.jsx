import { Link, useLocation} from 'react-router-dom';
import Logo from '../../assets/images/PandaPathLogo.jpg'
//link on log in to login form
const Navbar = () => {
  
    const location = useLocation();

    const handleLogoClick = () => {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };
    return (

    <nav className="flex items-center justify-between pl-2 pr-6 text-2xl fixed top-0 left-0 w-full z-50 bg-white shadow-md ">
      <span>
        <Link to="/" onClick={handleLogoClick}>
          <img src={Logo} className="w-24 py-1 rounded-full inline" alt="Logo" />
        </Link>
      </span>
      <ul className='flex  space-x-6'>
        <li className='pb-2 hover:text-red-700 hover:border-b-2 border-red-700'>agents</li>
        <li className='pb-2 hover:text-red-700 hover:border-b-2 border-red-700'>Login</li>
      </ul>

    </nav>

  )
}

export default Navbar


