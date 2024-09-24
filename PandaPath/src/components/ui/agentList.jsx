import React from 'react';
import { Link } from 'react-router-dom';
import { agents } from '../../data/agentsData';

const AgentList = () => {
  return (
    <div>
      <h2>Select an Agent</h2>
      <ul>
        {agents.map((agent) => (
          <li key={agent.id}>
            <Link to={`/agent/${agent.id}`}>{agent.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AgentList;
