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
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
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
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12 sm:w-16 sm:h-16">
              <img src={image} alt="Tip Image" />
            </div>
          </div>
          <div>
            <div className="font-bold whitespace-nowrap">{title}</div>
            <div className="text-sm opacity-50">{date}</div>
          </div>
        </div>
      </td>
      <td>{availability}</td>
      <td>{category}</td>
      <td>{difficulty}</td>
      <th>
        <div className="join join-vertical space-y-1">
          <button
            className="btn btn-sm join-item"
            onClick={() => navigate(`/update-tip/${_id}`)}
          >
            Update
          </button>
          <button
            className="btn btn-sm join-item"
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
