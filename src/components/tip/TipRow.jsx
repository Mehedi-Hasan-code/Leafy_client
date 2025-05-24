import React from 'react';
import { Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const TipRow = ({tip}) => {
  const navigate = useNavigate()
  const {image, title, date, category, difficulty, _id, likes} = tip
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
      <td>{likes}</td>
      <td>{category}</td>
      <td>{difficulty}</td>
      <th>
        <button onClick={() => navigate(`/tip-details/${_id}`) } className="btn"><Eye /></button>
      </th>
    </tr>
  );
};

export default TipRow;
