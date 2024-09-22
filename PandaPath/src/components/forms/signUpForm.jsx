import { useState } from 'react';
// import PropTypes from 'prop-types'; 
import town from '../../assets/images/culture.jpg'
import { Link } from 'react-router-dom';

const SignUpForm = (/*{ addEvent }*/) =>{

  // const [inputs, setInputs] = useState({
  //   email: "",
  //   password: ""
  // });

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setInputs((values) => ({ ...values, [name]: value }));
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   addEvent(inputs); 
  //   setInputs({ email: "", password: "" }); // Clear both fields after submission
  // };
  return (
    
<div className='h-lvh relative pt-32'>
      <img src={town} className='absolute inset-0 w-full h-full object-cover opacity-90 -z-10 '/>
    <form /*onSubmit={handleSubmit}*/ className='mt-20 bg-black text-white bg-opacity-30 backdrop-blur-lg min-w-96 w-4/12 ml-auto mr-auto h-4/6 rounded-2xl border border-white'>
    <h1 className='text-5xl text-center py-5'>Sign up</h1>
      <fieldset className='w-4/5 ml-auto mr-auto border-t-4 pt-8 '>
        
        <div className='mb-5'>
          <label htmlFor="email">Email</label><br/>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Enter your email'
            value={inputs.email}
            onChange={handleChange}
            required
            className='p-3 border-slate-900 border w-full rounded-lg a text-xl text-black'
          />
        </div>

        <div className='mb-5'>
          <label htmlFor="password" >Create password</label><br/>
          <input
            type="password"
            id='password'
            name='password'
            placeholder='Create password'
            value={inputs.password}
            onChange={handleChange}
            required
            className='p-3 border-slate-900 border w-full rounded-lg text-xl text-black '
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="password" >Confirm password</label><br/>
          <input
            type="password"
            id='password'
            name='password'
            placeholder='Confirm password'
            value={inputs.password}
            onChange={handleChange}
            required
            className='p-3 border-slate-900 border w-full rounded-lg text-xl text-black '
          />
        </div>

        <button type="submit" className='text-xl p-3 text-white border bg-slate-800 rounded-xl w-full  '>Signup</button>

        <p className='text-center text-gray-300 my-4'>Already have an account? 
          <Link to="/Login">
          <span className='text-white pl-2'>Login</span>
          </Link>
          </p>

      </fieldset>
    </form>

    </div>
    
  )

}

export default SignUpForm