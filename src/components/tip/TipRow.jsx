import React from 'react';
import { Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TipRow = ({ tip }) => {
  const navigate = useNavigate();
  const { image, title, date, category, difficulty, _id, likes } = tip;
  return (
    <tr className="hover:bg-emerald-50/50 transition-colors duration-300">
      <td className="py-4">
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="mask mask-squircle h-16 w-16 border-2 border-emerald-100">
              <img src={image} alt="Tip Image" className="object-cover" />
            </div>
          </div>
          <div>
            <div className="font-semibold text-emerald-800 whitespace-nowrap">
              {title}
            </div>
            <div className="text-sm text-emerald-600">{date}</div>
          </div>
        </div>
      </td>
      <td className="text-emerald-700 font-medium">{likes}</td>
      <td className="text-emerald-700 font-medium">{category}</td>
      <td className="text-emerald-700 font-medium">{difficulty}</td>
      <th>
        <button
          onClick={() => navigate(`/tip-details/${_id}`)}
          className="p-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors duration-300"
        >
          <Eye className="w-5 h-5" />
        </button>
      </th>
    </tr>
  );
};

export default TipRow;
