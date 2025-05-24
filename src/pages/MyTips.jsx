import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import Loading from '../components/common/Loading';
import MyTipRow from '../components/tip/MyTipRow';
import useDocumentTitle from '../hooks/useDocumentTitle';

const MyTips = () => {
  useDocumentTitle('My Tips');
  const { user, isUserLoading } = useContext(AuthContext);
  const [tips, setTips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const refreshTips = () => {
    if (!user) return;

    fetch(`https://leafy-server.vercel.app/my-tips/${user.email}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch tips');
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setTips(data);
        } else {
          setTips([]);
          setError('Invalid data format received');
        }
      })
      .catch((err) => {
        console.error('Error fetching tips:', err);
        setError('Failed to load tips');
        setTips([]);
      });
  };

  useEffect(() => {
    if (isUserLoading) {
      return;
    }

    if (!user) {
      setIsLoading(false);
      return;
    }

    refreshTips();
    setIsLoading(false);
  }, [user, isUserLoading]);

  if (isUserLoading || isLoading) {
    return <Loading />;
  }

  if (!user) {
    return (
      <div className="w-11/12 mx-auto grow flex justify-center items-center">
        Please log in to view your tips
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-11/12 mx-auto grow">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto grow my-10">
      <div>
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-emerald-800">
          My Tips
        </h1>
        <div className="overflow-x-auto">
          <table className="table border border-base-300">
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
              {Array.isArray(tips) && tips.length > 0 ? (
                tips.map((tip) => (
                  <MyTipRow key={tip._id} tip={tip} onDelete={refreshTips} />
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">
                    No tips found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyTips;
