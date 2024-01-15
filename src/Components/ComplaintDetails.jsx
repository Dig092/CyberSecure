
import PropTypes from "prop-types";

const ComplaintDetails = ({ selectedComplaint, onClose }) => {
  return (
    <div className="selected-complaint-details">
      <h2>Details for {selectedComplaint.user.name}</h2>
      <p>Category: {selectedComplaint.category}</p>
      <p>Subcategory: {selectedComplaint.subcategory}</p>
      <p>Date: {selectedComplaint.date}</p>
      <p>Time: {selectedComplaint.time}</p>
      <p>District: {selectedComplaint.district}</p>
      <p>State: {selectedComplaint.state}</p>
      {/* Add more details as needed */}
      <button onClick={onClose}>Close Details</button>
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
