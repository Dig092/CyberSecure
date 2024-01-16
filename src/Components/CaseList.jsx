import React from "react";
import PropTypes from "prop-types";
import ComplaintDetails from "./ComplaintDetails";
import user from "../assets/icon/user.png";

const CaseList = ({ complaints }) => {
  const [selectedComplaint, setSelectedComplaint] = React.useState(null);

  const handleViewClick = (complaint) => {
    setSelectedComplaint(complaint);
  };

  const handleCloseDetails = () => {
    setSelectedComplaint(null);
  };

  const groupComplaintsByStatus = () => {
    const groupedComplaints = {
      active: [],
      resolved: [],
      suspended: [],
    };

    if (complaints) {
      complaints.forEach((complaint) => {
        if (!complaint.verificationStatus && !complaint.dismissalStatus) {
          groupedComplaints.active.push(complaint);
        } else if (
          complaint.verificationStatus &&
          !complaint.dismissalStatus
        ) {
          groupedComplaints.resolved.push(complaint);
        } else if (!complaint.verificationStatus && complaint.dismissalStatus) {
          groupedComplaints.suspended.push(complaint);
        }
      });
    }

    return groupedComplaints;
  };

  const renderComplaints = (complaints) => {
    return (
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
    );
  };

  const groupedComplaints = groupComplaintsByStatus();

  return (
    <div className="complaint-list-container">
      {groupedComplaints.active.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold">Active Cases</h2>
          {renderComplaints(groupedComplaints.active)}
        </div>
      )}
      {groupedComplaints.resolved.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold">Resolved Cases</h2>
          {renderComplaints(groupedComplaints.resolved)}
        </div>
      )}
      {groupedComplaints.suspended.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold">Suspended Cases</h2>
          {renderComplaints(groupedComplaints.suspended)}
        </div>
      )}
      {selectedComplaint && (
        <ComplaintDetails
          selectedComplaint={selectedComplaint}
          onClose={handleCloseDetails}
        />
      )}
    </div>
  );
};

CaseList.propTypes = {
  complaints: PropTypes.array,
};

export default CaseList;
