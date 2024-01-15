import PropTypes from "prop-types";

const ComplaintList = ({ complaints }) => {
  return (
    <div>
      <h1>Complaint List</h1>
      <div>
        {complaints.map((complaint) => (
          <div key={complaint._id}>
            <p>User: {complaint.user.name}</p>
            <p>Category: {complaint.category}</p>
            <p>Subcategory: {complaint.subcategory}</p>
            <p>Date: {complaint.date}</p>
            <p>Time: {complaint.time}</p>
            <p>District: {complaint.district}</p>
            <p>State: {complaint.state}</p>
            {/* Add more fields as needed */}
            <p>Action Taken: {complaint.actionTaken}</p>
            <p>Verification Status: {complaint.verificationStatus ? 'Verified' : 'Not Verified'}</p>
            {/* Add more details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

ComplaintList.propTypes = {
    complaints: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        user: PropTypes.shape({
          name: PropTypes.string.isRequired,
        }).isRequired,
        category: PropTypes.string.isRequired,
        subcategory: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        district: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        actionTaken: PropTypes.string.isRequired,
        verificationStatus: PropTypes.bool.isRequired,
        // Add more propTypes as needed
      })
    ).isRequired,
  };

export default ComplaintList;
