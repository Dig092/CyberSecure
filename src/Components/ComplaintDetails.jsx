import PropTypes from "prop-types";

const ComplaintDetails = ({ selectedComplaint, onClose }) => {
  console.log("Selected Complaint:", selectedComplaint);

  return (
    <div className="fixed inset-0 overflow-y-auto p-4 bg-gray-800 bg-opacity-75 z-50">
      <div className="max-w-md mx-auto bg-white rounded p-6">
        <h2 className="text-2xl font-semibold mb-4">
          Details for {selectedComplaint.user.name}
        </h2>
        <div className="mb-2">
          <p>
            <span className="font-bold">Category:</span>{" "}
            {selectedComplaint.category}
          </p>
          <p>
            <span className="font-bold">Subcategory:</span>{" "}
            {selectedComplaint.subcategory}
          </p>
          <p>
            <span className="font-bold">Date:</span> {selectedComplaint.date}
          </p>
          <p>
            <span className="font-bold">Time:</span> {selectedComplaint.time}
          </p>
          <p>
            <span className="font-bold">District:</span>{" "}
            {selectedComplaint.district}
          </p>
          <p>
            <span className="font-bold">State:</span> {selectedComplaint.state}
          </p>
          {/* Add more details as needed */}
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
          onClick={onClose}
        >
          Close Details
        </button>
      </div>
    </div>
  );
};

ComplaintDetails.propTypes = {
  selectedComplaint: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    category: PropTypes.string.isRequired,
    subcategory: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    district: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    // Add more propTypes as needed
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ComplaintDetails;
