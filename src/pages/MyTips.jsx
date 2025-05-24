import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import Loading from '../components/common/Loading';
import MyTipRow from '../components/tip/MyTipRow';

const MyTips = () => {
  const { user, isUserLoading } = useContext(AuthContext);
  const [tips, setTips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isUserLoading) {
      return;
    }

    if (!user) {
      setIsLoading(false);
      return;
    }

    fetch(`http://localhost:3000/my-tips/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setTips(data);
        console.log(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [user, isUserLoading]);

  if (isUserLoading || isLoading) {
    return <Loading />;
  }

  if (!user) {
    return (
      <div className="w-11/12 mx-auto grow">
        Please log in to view your tips
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto grow my-10">
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Title</th>
                <th>Status</th>
                <th>Category</th>
                <th>Difficulty</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tips.map((tip) => (
                <MyTipRow tip={tip} key={tip._id} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyTips;
