import { Link} from 'react-router-dom';
import Logo from '../../assets/images/PandaPathLogo.jpg'
//link on log in to login form
const Navbar = () => {
  
  

    const handleLogoClick = () => {
        window.scrollTo({ top: 0, behavior: 'instant' });
      
    };
    return (

    <nav className="flex items-center justify-between pl-2 pr-6 text-2xl fixed top-0 left-0 w-full z-50 bg-white shadow-md ">
      <span>
        <Link to="/" onClick={handleLogoClick}>
          <img src={Logo} className="w-24 py-1 rounded-full inline" alt="Logo" />
        </Link>
      </span>
      <ul className='flex  space-x-6'>
        <li className='pb-2 hover:border-b-2 border-slate-950'>agents</li>
        <Link to="/Login" onClick={handleLogoClick}>
        <li className='pb-2  hover:border-b-2 border-slate-950'>Login</li>
        </Link>
      </ul>

    </nav>

  )
}

export default Navbar


