import { useState } from 'react';
import PropTypes from 'prop-types'; 
import LiRiver from '../../assets/images/LiRiver.webp'

const LoginForm = ({ addEvent }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addEvent(inputs); 
    setInputs({ email: "", password: "" }); // Clear both fields after submission
  };

  return (
    <div className='h-lvh relative pt-32'>
      <img src={LiRiver} className='absolute inset-0 w-full h-full object-cover -z-10'/>
    <form onSubmit={handleSubmit} className='mt-20  bg-white min-w-96 w-4/12 ml-auto mr-auto h-4/6 rounded-2xl'>
    <h1 className='text-5xl text-center py-20'>Sign in to PandaPath</h1>
      <fieldset className='w-4/5 ml-auto mr-auto border-t-4 pt-8 '>
        
        <div className='mb-5'>
          <label htmlFor="email" className='text-xl'>Email</label><br/>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Enter your email'
            value={inputs.email}
            onChange={handleChange}
            required
            className='p-3 border-slate-900 border-2 w-full rounded-xl a text-xl'
          />
        </div>

        <div className='mb-5'>
          <label htmlFor="password" className='text-xl'>Password</label><br/>
          <input
            type="password"
            id='password'
            name='password'
            placeholder='Enter your password'
            value={inputs.password}
            onChange={handleChange}
            required
            className='p-3 border-slate-900 border-2 w-full rounded-xl text-xl '
          />
        </div>

        <button type="submit" className='text-2xl p-3 text-white border-2 bg-slate-900 rounded-2xl w-full  '>Sign In</button>
      </fieldset>
    </form>

    </div>
  );
};

LoginForm.propTypes = {
  addEvent: PropTypes.func.isRequired, // Ensure addEvent is a required function prop
};

export default LoginForm;

