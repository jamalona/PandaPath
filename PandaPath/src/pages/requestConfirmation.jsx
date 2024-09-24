import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/images/PandaPathLogo.jpg';

const RequestConfirmation = () => {
  const navigate = useNavigate();

  return (
    <div className='mt-20 ml-10 text-center'>
      <img src={Logo} alt='Success' className='w-20 h-20 rounded-full mx-auto' />
      <h1 className='text-2xl font-bold'>Request Successful!</h1>

      <p className='mt-4'>
        An agent will contact you shortly. You can view the details of your request in the
        <span className='font-semibold'> &quot;Your Trip&quot; </span> section.
      </p>

      <p className='mt-2'>
        Expect a response within 24 hours.
      </p>

      <button
        onClick={() => navigate('/')}
        className='mt-5 px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-800'
      >
        Return to Homepage
      </button>
    </div>
  );
};

export default RequestConfirmation;
