import { Eye } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const MyTipRow = ({ tip, onDelete }) => {
  const navigate = useNavigate();
  const { image, title, date, category, difficulty, availability, _id } = tip;
  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#059669',
      cancelButtonColor: '#dc2626',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/tip/${id}`, {
          method: 'DELETE',
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error('Failed to fetch data');
            }
            return res.json();
          })
          .then((date) => {
            if (date.deletedCount > 0) {
              toast.success('Tip Deleted');
              onDelete();
            } else {
              toast.error('Failed to delete');
            }
          })
          .catch((err) => console.log(err));

        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        });
      }
    });
  };
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
      <td className="text-emerald-700 font-medium">{availability}</td>
      <td className="text-emerald-700 font-medium">{category}</td>
      <td className="text-emerald-700 font-medium">{difficulty}</td>
      <th>
        <div className="flex gap-2">
          <button
            className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors duration-300"
            onClick={() => navigate(`/update-tip/${_id}`)}
          >
            Update
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300"
            onClick={() => handleDelete(_id)}
          >
            Delete
          </button>
        </div>
      </th>
    </tr>
  );
};

export default MyTipRow;
