import { MapPin, Award, Users, Leaf } from 'lucide-react';
import { GrGrow } from 'react-icons/gr';

const GardenersCard = ({ gardener }) => {
  const {
    name,
    age,
    gender,
    status,
    experiences,
    experienced_for,
    expert_in,
    image,
    location,
    total_shared_tips,
  } = gardener;
  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-sm w-full transform hover:scale-105 transition-transform duration-300 flex flex-col">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-emerald-400 to-cyan-400 px-8 pt-8 pb-6">
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          {status === 'active' ? (
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide shadow-lg">
              {status}
            </span>
          ) : (
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide shadow-lg">
              {status}
            </span>
          )}
        </div>

        {/* Profile Image */}
        <div className="text-center">
          <div className="relative inline-block">
            <img
              src={image}
              alt={name}
              className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover"
            />
            <div className="absolute -bottom-2 -right-2 bg-emerald-500 rounded-full p-2 shadow-lg">
              <Leaf className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* Name and Age */}
          <h1 className="text-2xl font-bold text-white mt-4 mb-1">{name}</h1>
          <p className="text-emerald-100 text-sm font-medium">
            {age} years old • {gender}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-8 py-6 h-full flex flex-col">
        {/* Expert Badge */}
        <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-2xl p-4 mb-6 border border-emerald-100">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-500 rounded-full p-2">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-emerald-800 font-semibold text-sm">
                Expert in
              </p>
              <p className="text-emerald-600 font-medium">{expert_in}</p>
            </div>
          </div>
        </div>

        {/* experiences */}
        <div className="flex items-center gap-3 bg-gray-50 mb-6 bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-2xl p-4  border border-emerald-100">
          <div className="bg-emerald-500 rounded-full p-2">
            <GrGrow className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-emerald-800 font-semibold text-sm">
              Experiences
            </p>
            {experiences.map((experience, index) => (
              <p className="text-emerald-600" key={index}>
                {index + 1}. {experience}
              </p>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className='h-full flex flex-col justify-end '>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="w-5 h-5 text-amber-500" />
              </div>
              <p className="text-2xl font-bold text-gray-800">
                {total_shared_tips}
              </p>
              <p className="text-gray-600 text-sm font-medium">Tips Shared</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-5 h-5 text-blue-500" />
              </div>
              <p className="text-2xl font-bold text-gray-800">
                {experienced_for}+{' '}
              </p>
              <p className="text-gray-600 text-sm font-medium">
                Years of Experience
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
            <div className="bg-red-500 rounded-full p-2">
              <MapPin className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-gray-600 text-sm font-medium">Location</p>
              <p className="text-gray-800 font-semibold">{location}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-8 pb-6">
        <button className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Follow {name}
        </button>
      </div>
    </div>
  );
};

export default GardenersCard;
