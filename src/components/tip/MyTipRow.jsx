import { Eye } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyTipRow = ({ tip }) => {
  const navigate = useNavigate()
  const { image, title, date, category, difficulty, availability, _id } = tip;
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12 sm:w-16 sm:h-16">
              <img src={image} alt="Tip Image" />
            </div>
          </div>
          <div>
            <div className="font-bold whitespace-nowrap">{title}</div>
            <div className="text-sm opacity-50">{date}</div>
          </div>
        </div>
      </td>
      <td>{availability}</td>
      <td>{category}</td>
      <td>{difficulty}</td>
      <th>
        <div className="join join-vertical space-y-1">
          <button className="btn btn-sm join-item" onClick={() => navigate(`/update-tip/${_id}`)} >Update</button>
          <button className="btn btn-sm join-item">Delete</button>
        </div>
      </th>
    </tr>
  );
};

export default MyTipRow;
