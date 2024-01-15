import PropTypes from "prop-types";

const ComplaintDetails = ({ selectedComplaint, onClose }) => {
  return (
    <div className="fixed top-28 right-0 overflow-y-auto p-4 bg-gray-800 bg-opacity-75 z-50">
      <div className="flex flex-col ">
        <h1>Complaint Details</h1>
        <div className="flex">
          <div>
            <img src="" alt="" />
          </div>
          <div className="flex flex-col">
            <h1>Name : {selectedComplaint.user.name}</h1>
            <h1>Gender : {selectedComplaint.gender}</h1>
            <h1>Country : {selectedComplaint.country}</h1>
            <h1>State : {selectedComplaint.state}</h1>
            <h1>District : {selectedComplaint.district}</h1>
          </div>
          <div>
            <h1>House No. : {selectedComplaint.houseNo}</h1>
            <h1>street Name : {selectedComplaint.streetName}</h1>
            <h1>
              Nearest Poice Station : {selectedComplaint.nearestPoliceStation}
            </h1>
          </div>
        </div>
        <h1>Incident Details</h1>
        <div className="flex flex-col">
          <h1>Category : {selectedComplaint.user.category}</h1>
          <h1>Sub-Category : {selectedComplaint.subcategory}</h1>
          <h1>Date : {selectedComplaint.date}</h1>
          <h1>Time : {selectedComplaint.time}</h1>
        </div>
        <h1>Evidence / Important Documents</h1>
        <div>
          <img src="" alt="" />
        </div>
      </div>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
        onClick={onClose}
      >
        Close Details
      </button>
    </div>
  );
};

ComplaintDetails.propTypes = {
  selectedComplaint: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    gender: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    district: PropTypes.string.isRequired,
    houseNo: PropTypes.string.isRequired,
    streetName: PropTypes.string.isRequired,
    nearestPoliceStation: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    subcategory: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    // Add more PropTypes as needed
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ComplaintDetails;
