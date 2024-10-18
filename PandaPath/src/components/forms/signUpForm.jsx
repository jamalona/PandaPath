import { useState } from 'react';
// import PropTypes from 'prop-types'; 
import town from '../../assets/images/culture.jpg'
import { Link } from 'react-router-dom';
import { supabase } from '../../supabaseClient';

const SignUpForm = () => {

  const [formData, setInputs] = useState({
    fullName: "",
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const { data, error } = await supabase.auth.signUp(
        {
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              full_name: formData.fullName,
            }
          }
        }
      )
      alert('check your email for verification link')
      setInputs({ fullname: "", email: "", password: "" }); // Clear both fields after submission
    } catch (error) {
      alert(error)

    } 
  };








  return (

    <div className='h-lvh relative pt-32'>
      <img src={town} className='absolute inset-0 w-full h-full object-cover opacity-90 -z-10 ' />
      <form onSubmit={handleSubmit} className=' bg-black -mt-10 text-white bg-opacity-30 backdrop-blur-lg min-w-96 w-4/12 mx-auto h-4/5 rounded-2xl border border-white'>
        <h1 className='text-5xl text-center py-5'>Sign up</h1>
        <fieldset className='w-4/5 ml-auto mr-auto border-t-4 pt-8 '>

          <div className='mb-5'>
            <label htmlFor="fullName" >Fullname</label><br />
            <input
              type="fullName"
              id='fullName'
              name='fullName'
              placeholder='Fullname'
              value={formData.fullName}
              onChange={handleChange}
              required
              className='p-3 border-slate-900 border w-full rounded-lg text-xl text-black '
            />
          </div>

          <div className='mb-5'>
            <label htmlFor="email">Email</label><br />
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Enter your email'
              value={formData.email}
              onChange={handleChange}
              required
              className='p-3 border-slate-900 border w-full rounded-lg a text-xl text-black'
            />
          </div>

          <div className='mb-5'>
            <label htmlFor="password" >password</label><br />
            <input
              type="password"
              id='password'
              name='password'
              placeholder='password'
              value={formData.password}
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