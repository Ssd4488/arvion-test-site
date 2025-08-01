import React from 'react';

const BookDemoModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-4">Book A Free Demo</h2>
        <form className="space-y-3">
          <input type="text" placeholder="Contact Name" className="w-full p-2 border rounded" />
          <input type="email" placeholder="Email Address" className="w-full p-2 border rounded" />
          <input type="tel" placeholder="Contact Number" className="w-full p-2 border rounded" />
          <input type="text" placeholder="School/Institute Name" className="w-full p-2 border rounded" />
          <select className="w-full p-2 border rounded">
            <option>Select Role</option>
            <option>Principal</option>
            <option>Teacher</option>
            <option>Admin</option>
          </select>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookDemoModal;
