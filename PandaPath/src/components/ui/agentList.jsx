import React from 'react';
import { Link } from 'react-router-dom';
import { agents } from '../../data/agentsData';

const AgentList = () => {
  return (
    <div>
      <h2 className='text-2xl text-center mb-5'>Select an Agent</h2>
      <ul>
        {agents.map((agent) => (
          <div key={agent.id} className='bg-white w-5/12 mx-auto rounded-lg shadow-lg'>
          <li  className=' mb-5 text-xl p-2  mx-auto'>
            <Link to={`/agents/${agent.id}`}>{agent.name}</Link>
          </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default AgentList;
