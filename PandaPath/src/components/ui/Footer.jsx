
import Logo from '../../assets/images/PandaPathLogo.jpg';
const Footer = () => {
  return (
    <footer className="bg-slate-950 px-3 py-4  mt-auto w-screen">
      <div className='flex space-x-3 w-9/12 mx-auto'>
        <img src={Logo} alt="pandalogo" className='w-20 text-center rounded-full' />
        <div className=" text-slate-100 font-bold text-center text-[2.5vw]"> PandaPath.</div>
      </div>
    </footer>
  )
}

export default Footer;