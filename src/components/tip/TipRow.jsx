import React from 'react';
import { Eye } from 'lucide-react';
const TipRow = ({tip}) => {
  const {image, title, userName, date, category} = tip
  console.log(tip);
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
            <div className="font-bold">{userName}</div>
            <div className="text-sm opacity-50">{date}</div>
          </div>
        </div>
      </td>
      <td>{title}</td>
      <td>{category}</td>
      <th>
        <button className="btn"><Eye /></button>
      </th>
    </tr>
  );
};

export default TipRow;
