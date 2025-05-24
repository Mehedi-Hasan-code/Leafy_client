import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/common/Loading';
import Loader from '../components/common/Loader'
import { toast } from 'react-toastify';

const Update = () => {
  const { id } = useParams();
  const [tip, setTip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:3000/tip/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTip(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!tip) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Tip not found
      </div>
    );
  }

  const {
    title,
    plantType,
    difficulty,
    description,
    blogContent,
    image,
    category,
    availability,
    userName,
    userEmail,
    _id,
  } = tip;

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowLoader(true)
    const form = e.target
    const formData = new FormData(form)
    const updateData = Object.fromEntries(formData.entries())
    fetch(`http://localhost:3000/tip/${_id}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateData)
    })
      .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.modifiedCount > 0) {
            toast.success('Data Updated')
          } else{
            toast.error('No data updated')
          }
        })
          .catch(err => console.log(err))
          .finally(() => setShowLoader(false))
  };

  return (
    <div className="w-11/12 mx-auto grow my-10">
      <div>
        <form
          onSubmit={handleSubmit}
          className="fieldset bg-base-200 border-base-300 rounded-box border p-2 sm:p-4"
        >
          <h1>Update Tip</h1>
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
                defaultValue={title}
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
                defaultValue={plantType}
              />
            </fieldset>

            {/* difficulty level */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-2 sm:p-4">
              <label className="label">Difficulty Level</label>
              <select
                name="difficulty"
                className="select w-full"
                required
                defaultValue={difficulty}
              >
                <option disabled value="">Select Difficulty Level</option>
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
                defaultValue={description}
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
                defaultValue={blogContent}
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
                defaultValue={image}
              />
            </fieldset>

            {/* Category */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-2 sm:p-4">
              <label className="label">Category</label>
              <select
                name="category"
                className="select w-full"
                required
                defaultValue={category}
              >
                <option disabled value="">
                  Select a Category
                </option>
                <option value="Composting">Composting</option>
                <option value="Plant Care">Plant Care</option>
                <option value="Vertical Gardening">Vertical Gardening</option>
                <option value="Others">Others</option>
              </select>
            </fieldset>

            {/* availability */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-2 sm:p-4">
              <label className="label">Availability</label>
              <select
                name="availability"
                className="select w-full"
                required
                defaultValue={availability}
              >
                <option disabled value="">
                  Select Availability
                </option>
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
                defaultValue={userName}
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
                defaultValue={userEmail}
                required
              />
            </fieldset>

            <button className="btn sm:col-span-2" type="submit">
              {
                showLoader ? <Loader /> : 'Submit'
              }
              
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
