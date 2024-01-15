import PropTypes from "prop-types";

const ComplaintDetails = ({ selectedComplaint, onClose }) => {
  return (
    <div className="absolute top-28 right-0 overflow-y-auto p-4 bg-white rounded-3xl z-50">
      <div className="flex flex-col ">
        <h1 className="font-semibold text-xl py-4">Complaint Details</h1>
        <div className="flex gap-x-20">
          <div className="">
            <img className="w-64 h-32 object-contain" src={selectedComplaint.nationalIdImageUrl} alt="" />
          </div>
          <div className="flex flex-col gap-y-2">
            <h1> <span className="font-semibold text-lg">Name</span> : {selectedComplaint.user.name}</h1>
            <h1> <span className="font-semibold text-lg">Gender</span> : {selectedComplaint.gender}</h1>
            <h1> <span className="font-semibold text-lg">Country</span> : {selectedComplaint.country}</h1>
            <h1> <span className="font-semibold text-lg">State</span> : {selectedComplaint.state}</h1>
            <h1> <span className="font-semibold text-lg">District</span> : {selectedComplaint.district}</h1>
          </div>
          <div className="flex flex-col gap-y-2">
            <h1><span className="font-semibold text-lg">House No.</span> : {selectedComplaint.houseNo}</h1>
            <h1><span className="font-semibold text-lg">Street Name</span> : {selectedComplaint.streetName}</h1>
            <h1><span className="font-semibold text-lg">Nearest Poice Station</span>
               : {selectedComplaint.nearestPoliceStation}
            </h1>
          </div>
        </div>
        <h1 className="font-semibold text-xl py-4">Incident Details</h1>
        <div className="flex flex-col gap-y-2">
          <h1> <span className="font-semibold text-lg">Category</span> : {selectedComplaint.user.category}</h1>
          <h1> <span className="font-semibold text-lg">Sub-Category</span> : {selectedComplaint.subcategory}</h1>
          <h1> <span className="font-semibold text-lg">Date</span> : {selectedComplaint.date}</h1>
          <h1> <span className="font-semibold text-lg">Time</span> : {selectedComplaint.time}</h1>
        </div>
        <h1 className="font-semibold text-xl py-4">Evidence / Important Documents</h1>
        <div>
          <img src={selectedComplaint.nationalIdImageUrl} alt="" />
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
