import { useState } from 'react';
import PropTypes from 'prop-types'; 

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
    <form onSubmit={handleSubmit}>
      <fieldset>
        <h1>Sign in to PandaPath</h1>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Enter your email'
            value={inputs.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id='password'
            name='password'
            placeholder='Enter your password'
            value={inputs.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Sign In</button>
      </fieldset>
    </form>
  );
};

LoginForm.propTypes = {
  addEvent: PropTypes.func.isRequired, // Ensure addEvent is a required function prop
};

export default LoginForm;

