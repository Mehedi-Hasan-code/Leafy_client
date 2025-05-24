import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TipRow from '../components/Tip/TipRow';

const BrowseTips = () => {
  const allTips = useLoaderData();
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  const filteredTips = selectedDifficulty
    ? allTips.filter((tip) => tip.difficulty === selectedDifficulty)
    : allTips;
  const remainingTips = selectedDifficulty ? allTips.filter(tip => tip.difficulty !== selectedDifficulty) : allTips

  const newAllTips = selectedDifficulty ? [...filteredTips, ...remainingTips]:[...allTips]

  return (
    <div className="w-11/12 mx-auto grow my-10">
      <div>
        {/* Filter Section */}
        <div className="mb-6">
          <select
            className="select select-bordered w-full max-w-xs"
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
          >
            <option value="">All Difficulty Levels</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Title</th>
                <th>Likes</th>
                <th>Category</th>
                <th>Difficulty</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {newAllTips.map((tip) => (
                <TipRow tip={tip} key={tip._id} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BrowseTips;
