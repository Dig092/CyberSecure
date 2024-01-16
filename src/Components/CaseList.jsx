import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const CaseList = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://cyber-secure.onrender.com/v1/admin/getComplaints",
          { withCredentials: true }
        );
        setCases(response.data.complaints);
      } catch (error) {
        console.error("Error fetching cases", error);
      }
    };
    fetchData();
  }, []);

  const filterCases = (status) => {
    return cases.filter((c) => c.verificationStatus && !c.dismissalStatus === status);
  };

  return (
    <div className="flex flex-col pl-8">
      <h1 className="font-bold text-2xl py-4">Active Cases</h1>
      {filterCases(false).map((activeCase) => (
        <CaseItem key={activeCase.acknowledgementNumber} caseData={activeCase} />
      ))}

      <h1 className="font-bold text-2xl py-4">Resolved Cases</h1>
      {filterCases(false).map((resolvedCase) => (
        <CaseItem key={resolvedCase.acknowledgementNumber} caseData={resolvedCase} />
      ))}

      <h1 className="font-bold text-2xl py-4">Suspended Cases</h1>
      {filterCases(true).map((suspendedCase) => (
        <CaseItem key={suspendedCase.acknowledgementNumber} caseData={suspendedCase} />
      ))}
    </div>
  );
};

const CaseItem = ({ caseData }) => {
  return (
    <div className="flex gap-x-20">
      {/* Display case details as needed */}
      <div>
        <img className="w-64 h-32 object-contain" src={caseData.nationalIdImageUrl} alt="" />
      </div>
      <div className="flex flex-col gap-y-2">
        <h1>
          <span className="font-semibold text-lg">Name</span> : {caseData.user.name}
        </h1>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

CaseItem.propTypes = {
  caseData: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    verificationStatus: PropTypes.bool.isRequired,
    dismissalStatus: PropTypes.bool.isRequired,
    nationalIdImageUrl: PropTypes.string.isRequired,
    // Add more prop types as needed
  }).isRequired,
};

export default CaseList;
