import { Link } from 'react-router-dom';

const Agentcard = ({ name, title, description, email, phone, officeHours, image }) => {
  return (
    <div className="fixed right-4 lg:right-17 mb-16 top-40 p-6 bg-gray-100 shadow-2xl rounded-md w-11/12 md:w-8/12 lg:w-4/12  md:h-[75vh]">
      <h3 className="text-lg md:text-xl font-semibold mb-4 text-center lg:text-left">Your Travel Agent</h3>
      <img
        src={image}
        alt={`${name}'s Profile`}
        className="mb-4 rounded-full w-24 h-24 md:w-28 md:h-28 mx-auto"
      />
      <h4 className="text-center text-2xl font-semibold">{name}</h4>
      <p className="text-center text-gray-600">{title}</p>
      <p className="mt-4 text-gray-700 text-center lg:text-left">
        {description}
      </p>
      <div className="mt-6 text-center lg:text-left">
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Phone:</strong> {phone}
        </p>
        <p>
          <strong>Office Hours:</strong> {officeHours}
        </p>
      </div>
      <Link to="/tripform">
        <button className='text-2xl absolute left-36 bottom-5 z-40 items-center  pl-5 pr-5 pt-1 pb-1
               border-black border-2  rounded-lg hover:bg-slate-950 hover:text-white'>Request agent</button>
      </Link>

    </div>
  );
};

export default Agentcard;
