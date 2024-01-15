import { useState } from "react";
import ComplaintDetails from "./ComplaintDetails";
import PropTypes from "prop-types";
import user from "../assets/icon/user.png";

const styles = {
  container: {
    maxHeight: "285px",
    overflowY: "auto",
  },
};

const ComplaintList = ({ complaints }) => {
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  const handleViewClick = (complaint) => {
    console.log("View button clicked");
    setSelectedComplaint(complaint);
  };

  const handleCloseDetails = () => {
    setSelectedComplaint(null);
  };
  return (
    <div style={styles.container} className="complaint-list-container">
      <ul className="complaint-list">
        {complaints.map((complaint) => (
          <li
            key={complaint._id}
            className="m-4 rounded px-4 py-2"
            style={{
              boxShadow: "-4px 4px 12px 0px rgba(0, 0, 0, 0.06)",
            }}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img className="w-12" src={user} alt="" />
                <div className="font-semibold">
                  <h1>{complaint.user.name}</h1>
                  <h1>
                    {complaint.district}, {complaint.state}
                  </h1>
                </div>
              </div>
              <button
                className="bg-blue-500 px-8 py-2 rounded-md text-white"
                onClick={() => handleViewClick(complaint)}
              >
                View
              </button>
            </div>
          </li>
        ))}
      </ul>
      {selectedComplaint && (
        <ComplaintDetails
          selectedComplaint={selectedComplaint}
          onClose={handleCloseDetails}
        />
      )}
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
