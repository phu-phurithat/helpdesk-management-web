import { useState } from "react";

const TicketModal = ({ ticket, onClose, onSave }) => {
  const [editedTicket, setEditedTicket] = useState({ ...ticket });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTicket((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSave(editedTicket); // Pass updated ticket back to parent
    onClose();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-5 rounded-lg shadow-lg w-96"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-bold">Edit Ticket #{editedTicket.id}</h2>

        <label className="block text-sm mt-2">Contact:</label>
        <input
          type="text"
          name="contact"
          value={editedTicket.contact}
          onChange={handleChange}
          className="w-full border p-2 rounded mt-1"
        />

        <label className="block text-sm mt-2">Title:</label>
        <input
          type="text"
          name="title"
          value={editedTicket.title}
          onChange={handleChange}
          className="w-full border p-2 rounded mt-1"
        />

        <label className="block text-sm mt-2">Description:</label>
        <textarea
          name="description"
          value={editedTicket.description}
          onChange={handleChange}
          className="w-full border p-2 rounded mt-1"
        ></textarea>

        <label className="block text-sm mt-2">Status:</label>
        <select
          name="status"
          value={editedTicket.status}
          onChange={handleChange}
          className="w-full border p-2 rounded mt-1"
        >
          <option value="pending">Pending</option>
          <option value="accepted">Accepted</option>
          <option value="resolved">Resolved</option>
          <option value="rejected">Rejected</option>
        </select>

        <div className="flex justify-end gap-2 mt-4">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketModal;
