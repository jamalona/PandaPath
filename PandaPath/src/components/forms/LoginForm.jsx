import { useEffect, useState } from 'react';
// import PropTypes from 'prop-types'; 
import town from '../../assets/images/culture.jpg'
import { Link } from 'react-router-dom';
import { supabase } from '../../supabaseClient';

const LoginForm = (/*{ addEvent }*/) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  console.log(formData)
  // const login = async () => {
  //   await supabase.auth.signIn({
  //     provider: "google"
  //   })
  // }


  // useEffect(()=>{
  //   const session = supabase.auth.session 
  // })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((values) => ({ ...values, [name]: value }));
   
  };

  const handleSubmit = async (event) => {
    try{
    event.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    })
    setFormData({ email: "", password: "" }); // Clear both fields after submission

  } catch (error){
    alert(error)

  }
    
    
  };

  return (
    <div className='h-lvh relative pt-32'>
      <img src={town} className='absolute inset-0 w-full h-full object-cover opacity-90 -z-10 ' />
      <form onSubmit={handleSubmit} className='mt-20 bg-black text-white bg-opacity-30 backdrop-blur-lg min-w-96 w-4/12 ml-auto mr-auto h-4/6 rounded-2xl border border-white'>
        <h1 className='text-5xl text-center py-10'>Login</h1>
        <fieldset className='w-4/5 ml-auto mr-auto border-t-4 pt-8 '>

          <div className='mb-5'>
            <label htmlFor="email" >Email</label><br />
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
            <label htmlFor="password" >Password</label><br />
            <input
              type="password"
              id='password'
              name='password'
              placeholder='Enter your password'
              value={formData.password}
              onChange={handleChange}
              required
              className='p-3 border-slate-900 border w-full rounded-lg text-xl text-black '
            />
          </div>

          <button type="submit" className='text-xl p-3 text-white border bg-slate-800 rounded-xl w-full  '>Login</button>

          <p className='text-center text-gray-300 my-4'>Don't have an account?
            <Link to="/Signup">
              <span className='text-white pl-2'>Signup</span>
            </Link>
          </p>

          <button  className='text-black text-lg bg-white w-full rounded-xl relative p-3 '> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="50" viewBox="0 0 48 48" className='inline mr-2 absolute left-7 top-0'>
            <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
          </svg>Sign in with Google</button>

        </fieldset>
      </form>


    </div>
  );
};

// LoginForm.propTypes = {
//   addEvent: PropTypes.func.isRequired, // Ensure addEvent is a required function prop
// };

export default LoginForm;

