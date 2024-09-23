import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Logo from '../../assets/images/PandaPathLogo.jpg';
import { FaCircleUser } from "react-icons/fa6";
import { SlArrowDown } from "react-icons/sl";

const Navbar = ({ token }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [shouldReload, setShouldReload] = useState(false); // State to trigger reload
  const navigate = useNavigate();

  const handleUserIconClick = () => {
    setShowPopup(!showPopup);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleLogOut = () => {
    sessionStorage.removeItem('token');
    setShowPopup(false);
    setShouldReload(true); // Set the flag to true to trigger the reload
    navigate('/');
  };

  // Use effect to reload the page after navigation
  useEffect(() => {
    if (shouldReload) {
      window.location.reload();
    }
  }, [shouldReload]);

  return (
    <nav className="flex items-center justify-between pl-2 pr-6 text-2xl fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <span>
        <Link to="/">
          <img src={Logo} className="w-20  h-20 py-1 rounded-full inline" alt="Logo" />
        </Link>
      </span>

      {token ? (
        <span className="text-lg ml-40 text-center">
          Welcome, {token.user.user_metadata.full_name}
        </span>
      ) : (
        ""
      )}

      <ul className="flex space-x-6">
        {token ? (
          <Link to="/yourtrip">
            <li className="pb-2 hover:border-b border-slate-950">Your trip</li>
          </Link>
        ) : (
          <Link to="/login">
          <li className="pb-2 hover:border-b border-slate-950">Your trip</li>
        </Link>
        )}

        <Link to="/agents">
        <li className="pb-2 hover:border-b border-slate-950">Agents</li>
        </Link>


        <li className="pb-2 relative">
          <button
            className="py-2 px-5 inline-flex rounded-xl hover:bg-gray-300"
            onClick={handleUserIconClick}
          >
            <FaCircleUser className='mr-2' /><SlArrowDown />

          </button>

          {showPopup && (
            <div className="absolute top-14 right-0 bg-gray-200 shadow-2xl rounded px-4 py-3 z-50">
              <div className="relative w-20">
                <div className="absolute -top-5 right-2 w-4 h-4 bg-gray-200 rotate-45"></div>

                {token ? (
                  <p
                    onClick={handleLogOut}
                    className="text-lg hover:border-b hover:border-b-black cursor-pointer"
                  >
                    Sign out
                  </p>
                ) : (
                  <Link to="/Login" onClick={handleClosePopup}>
                    <p className="text-lg hover:border-b hover:border-b-black">
                      Sign in
                    </p>
                  </Link>
                )}
              </div>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
