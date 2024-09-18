import Logo from '../../assets/images/PandaPathLogo.jpg'
//link on log in to login form
const Navbar= ()=>{
  return(
    
    <nav className="flex items-center justify-between p-1 mr-9 text-2xl">
      <span><img src={Logo} className='w-24 py-1 rounded-full inline'/></span>
      <ul className='flex  space-x-6'>
        <li className='pb-2 hover:text-red-700 hover:border-b-2 border-red-700'>agents</li>
        <li className='pb-2 hover:text-red-700 hover:border-b-2 border-red-700'>Login</li>
      </ul>

    </nav>
    
  )
}

export default Navbar