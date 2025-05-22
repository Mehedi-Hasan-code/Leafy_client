import React from 'react';

const ShareTip = () => {
  return (
    <div className="w-11/12 mx-auto grow">
      <h1>Share Tip</h1>
      <div>
        <form className="fieldset bg-base-200 border-base-300 rounded-box border p-2 sm:p-4">
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
            {/* title */}

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-2 sm:p-4 ">
              <label className="label">Title</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter Your Tips Title"
              />
            </fieldset>

            {/* plant type */}

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-2 sm:p-4">
              <label className="label">Plant Type</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter The Plant Type Or Topic"
              />
            </fieldset>

            {/* difficulty level */}

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-2 sm:p-4">
              <label className="label">Difficulty Level</label>
              <select
                defaultValue="Select Difficulty Level"
                className="select w-full"
              >
                <option disabled={true}>Select Difficulty Level</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </fieldset>

            {/* description */}

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-2 sm:p-4">
              <label className="label">Description</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter A Description"
              />
            </fieldset>

            {/* blog content */}

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-2 sm:p-4">
              <label className="label">Tip</label>
              <input
                type="text"
                className="input h-20 w-full"
                placeholder="Enter Your Tip here"
              />
            </fieldset>

            {/* image url */}

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-2 sm:p-4">
              <label className="label">Image URL</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter Your Image URL"
              />
            </fieldset>

            {/* Category */}

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-2 sm:p-4">
              <label className="label">Category</label>
              <select
                defaultValue="Select a Category"
                className="select w-full"
              >
                <option disabled={true}>Select a Category</option>
                <option>Composting</option>
                <option>Plant Care</option>
                <option>Vertical Gardening</option>
                <option>Others</option>
              </select>
            </fieldset>

            {/* availability */}

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-2 sm:p-4">
              <label className="label">Availability</label>
              <select
                defaultValue="Select Availability"
                className="select w-full"
              >
                <option disabled={true}>Select Availability</option>
                <option>Public</option>
                <option>Hidden</option>
              </select>
            </fieldset>

            {/* name */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-2 sm:p-4">
              <label className="label">Name</label>
              <input
                type="text"
                className="input w-full"
                readOnly
                value={'name'}
              />
            </fieldset>

            {/* email */}

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-2 sm:p-4">
              <label className="label">Email</label>
              <input
                type="text"
                className="input w-full"
                readOnly
                value={'email'}
              />
            </fieldset>

            <button className="btn sm:col-span-2" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShareTip;
