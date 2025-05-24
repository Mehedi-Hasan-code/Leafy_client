import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import Loader from '../components/common/Loader';
import { toast } from 'react-toastify';
import useDocumentTitle from '../hooks/useDocumentTitle';
const ShareTip = () => {
  useDocumentTitle('Share A Tip');
  const { user } = useContext(AuthContext);

  // Function to get date
  const getDate = (date) => {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };
  const [showLoader, setShowLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowLoader(true);
    const currentDate = getDate(new Date());
    const form = e.target;
    const formData = new FormData(form);
    const tipObj = Object.fromEntries(formData.entries());
    const tipData = {
      ...tipObj,
      date: currentDate,
      authorImage: user.photoURL,
      likes: 0,
    };
    console.log(tipData);
    fetch('https://leafy-server.vercel.app/tips', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tipData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success('Tip Shared Successful');
        } else {
          toast.error('Tip Shared Failed');
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setShowLoader(false));
  };

  return (
    <div className="w-11/12 mx-auto grow my-10">
      <div>
        <form
          onSubmit={handleSubmit}
          className="fieldset bg-base-200 border-base-300 rounded-box border p-2 sm:p-4"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-center m-12 text-emerald-800">
            Share A Tip
          </h1>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
            {/* title */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-2 sm:p-4 ">
              <label className="label">Title</label>
              <input
                type="text"
                name="title"
                className="input w-full"
                placeholder="Enter Your Tips Title"
                required
              />
            </fieldset>

            {/* plant type */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-2 sm:p-4">
              <label className="label">Plant Type</label>
              <input
                type="text"
                name="plantType"
                className="input w-full"
                placeholder="Enter The Plant Type Or Topic"
                required
              />
            </fieldset>

            {/* difficulty level */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-2 sm:p-4">
              <label className="label">Difficulty Level</label>
              <select name="difficulty" className="select w-full" required>
                <option value="">Select Difficulty Level</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </fieldset>

            {/* description */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-2 sm:p-4">
              <label className="label">Description</label>
              <input
                type="text"
                name="description"
                className="input w-full"
                placeholder="Enter A Description"
                required
              />
            </fieldset>

            {/* blog content */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-2 sm:p-4">
              <label className="label">Tip</label>
              <input
                type="text"
                name="blogContent"
                className="input h-20 w-full"
                placeholder="Enter Your Tip here"
                required
              />
            </fieldset>

            {/* image url */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-2 sm:p-4">
              <label className="label">Image URL</label>
              <input
                type="text"
                name="image"
                className="input w-full"
                placeholder="Enter Your Image URL"
                required
              />
            </fieldset>

            {/* Category */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-2 sm:p-4">
              <label className="label">Category</label>
              <select name="category" className="select w-full" required>
                <option value="">Select a Category</option>
                <option value="Composting">Composting</option>
                <option value="Plant Care">Plant Care</option>
                <option value="Vertical Gardening">Vertical Gardening</option>
                <option value="Others">Others</option>
              </select>
            </fieldset>

            {/* availability */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-2 sm:p-4">
              <label className="label">Availability</label>
              <select name="availability" className="select w-full" required>
                <option value="">Select Availability</option>
                <option value="Public">Public</option>
                <option value="Hidden">Hidden</option>
              </select>
            </fieldset>

            {/* userName */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-2 sm:p-4">
              <label className="label">Name</label>
              <input
                type="text"
                name="userName"
                className="input w-full"
                readOnly
                defaultValue={user?.displayName}
                required
              />
            </fieldset>

            {/* userEmail */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-2 sm:p-4">
              <label className="label">Email</label>
              <input
                type="text"
                name="userEmail"
                className="input w-full"
                readOnly
                defaultValue={user?.email}
                required
              />
            </fieldset>

            <button
              className="btn sm:col-span-2 bg-green-600 text-white tracking-widest font-bold"
              type="submit"
            >
              {showLoader ? <Loader /> : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShareTip;
