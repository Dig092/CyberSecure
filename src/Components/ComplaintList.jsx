
import PropTypes from "prop-types";

const ComplaintList = ({ complaints }) => {
  return (
    <div>
      <h1>Complaint List</h1>
      <ul>
        {complaints.map((complaint) => (
          <li key={complaint._id}>
            <p>Name: {complaint.user.name}</p>
            <p>District: {complaint.district}</p>
            <p>State: {complaint.state}</p>
          </li>
        ))}
      </ul>
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
      district: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ComplaintList;
