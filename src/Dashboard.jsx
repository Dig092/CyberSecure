import { useState, useEffect } from "react";
import axios from "axios";

import logoFull from "./assets/icon/logoFull.png";
import home from "./assets/icon/dashboard.png";
import analysis from "./assets/icon/analysis.png";
import ComplaintsIcon from "./assets/icon/ComplaintsIcon.png";
import profile from "./assets/icon/profile.png";
import setting from "./assets/icon/setting.png";
import email from "./assets/icon/mail.png";
import notification from "./assets/icon/notification.png";
import active from "./assets/icon/active.png";
import suspended from "./assets/icon/suspended.png";
import resolved from "./assets/icon/resolved.png";
import user from "./assets/icon/user.png";
import location from "./assets/icon/LocationIcon.png";
import articles from "./assets/icon/articles.png";

import chatbot from "./assets/images/Chatbot.png";
import logOut from "./assets/images/log.png";
import CTA from "./assets/images/CTA.png";

const Dashboard = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://cyber-secure.onrender.com/v1/admin/getComplaints"
        );
        setComplaints(response.data);
      } catch (error) {
        console.error("Error fetching complaints", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-[#F2F6FF] flex w-screen h-full">
      <div className="bg-white flex flex-col items-center h-screen fixed z-10">
        <div className="m-6 p-5 w-56 pb-16">
          <img src={logoFull} alt="" />
        </div>
        <div className="flex flex-col space-y-8">
          <a
            className="flex items-center justify-center gap-4 bg-blue-500 pl-4 pr-16 rounded-md py-2"
            href=""
          >
            <img className="w-6 h-6" src={home} alt="" />
            <h1 className="text-lg font-medium text-white">Dashboard</h1>
          </a>

          <a className="flex items-center gap-4 pl-4" href="">
            <img className="w-6 h-6" src={analysis} alt="" />
            <h1 className="text-lg font-medium text-[#A3AED0]">Analysis</h1>
          </a>

          <a className="flex items-center gap-4 pl-4" href="">
            <img className="w-6 h-6" src={ComplaintsIcon} alt="" />
            <h1 className="text-lg font-medium text-[#A3AED0]">Complaints</h1>
          </a>

          <a className="flex items-center gap-4 pb-3 pl-4" href="">
            <img className="w-6 h-5.5" src={profile} alt="" />
            <h1 className="text-lg font-medium text-[#A3AED0]">Profile</h1>
          </a>

          <a className="flex items-center gap-4 pl-4" href="">
            <img className="w-6 h-6" src={setting} alt="" />
            <h1 className="text-lg font-medium text-[#A3AED0]">Settings</h1>
          </a>

          <a href="">
            <img className="absolute w-56 pl-4 bottom-8" src={logOut} alt="" />
          </a>
        </div>
      </div>

      <div className="flex flex-col w-screen h-full">
        <div className="bg-[#F2F6FF] flex w-[76.4rem] backdrop-blur-3xl bg-opacity-80 h-1/6 items-center justify-between p-8 fixed right-0 z-10">
          <div className="flex flex-col ">
            <h1 className="text-xs font-semibold">Hi Dhruval</h1>
            <h1 className="text-4xl font-semibold">Welcome to CyberSecure!</h1>
          </div>
          <div className="flex gap-12 pr-8">
            <img className="w-7 h-7" src={email} alt="" />
            <img className="w-7 h-7" src={notification} alt="" />
          </div>
        </div>

        <div className="flex bg-[#F2F6FF]  absolute top-28 right-0">
          <div className="flex flex-col items-center m-6">
            <div className="flex">
              <div className="flex items-center bg-white mb-6 mr-4  pr-12 pl-4 rounded-2xl gap-2">
                <img className="w-24" src={active} alt="" />
                <div>
                  <h1>Active Cases</h1>
                  <h1>08</h1>
                </div>
              </div>
              <div className="flex items-center bg-white mb-6 mx-4 pr-12 pl-4 rounded-2xl gap-2">
                <img className="w-24" src={suspended} alt="" />
                <div>
                  <h1>Suspended Cases</h1>
                  <h1>08</h1>
                </div>
              </div>
              <div className="flex items-center bg-white mb-6 ml-4 pr-12 pl-4 rounded-2xl gap-2">
                <img className="w-24" src={resolved} alt="" />
                <div>
                  <h1>Resolved Cases</h1>
                  <h1>08</h1>
                </div>
              </div>
            </div>
            <div className="bg-white flex flex-col w-full px-4 rounded-2xl">
              <div className="flex items-center justify-between px-4">
                <div className="text-xl font-bold my-6">Complaint List</div>
                <a href="">
                  <img className="w-24" src={CTA} alt="" />
                </a>
              </div>
              {complaints.map((complaint, index) => (
                <div
                  key={index}
                  className="m-4 rounded px-4 py-2"
                  style={{ boxShadow: "-4px 4px 12px 0px rgba(0, 0, 0, 0.06)" }}
                >
                  <div className="flex items-center justify-between gap-4 ">
                    <div className="flex items-center gap-4">
                      <img className="w-12" src={user} alt="" />
                      <div className="font-semibold">
                        <h1>{complaint.name}</h1>
                        <h1>
                          {complaint.district}, {complaint.state}
                        </h1>
                      </div>
                    </div>
                    <button className="bg-blue-500 px-8 py-2 rounded-md text-white">
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-2xl flex flex-col items-center p-12 mt-6 h-2/5 w-72">
              <div className="flex flex-col items-center">
                <img className="w-24 pb-4" src={user} alt="" />
                <h1 className="text-2xl font-medium ">Dhruval Gupta</h1>
                <div className="flex items-center gap-x-1.5">
                  <img className="w-3" src={location} alt="" />
                  <h1 className="text-[#A3AED0]">Rajasthan, India</h1>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl flex flex-col items-center justify-center p-7 mt-6 h-48 w-72">
              <img className="rounded-lg h-36" src={articles} alt="" />
              <h1 className="absolute text-3xl font-semibold text-white">
                Articles
              </h1>
            </div>

            <div className="bg-white rounded-2xl flex flex-col items-center justify-center mt-6 h-72 w-72">
              <img className="rounded-lg" src={chatbot} alt="" />
              <h1 className="absolute text-center w-64 bottom-48 text-2xl font-semibold text-white">
                Ask Your Queries from CyberMitr
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
