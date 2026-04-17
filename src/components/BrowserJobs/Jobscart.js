import React, { useState, useEffect,useRef } from "react";
import { useRouter } from "next/router"; // Pages Router
const jobsData = [
  {
    id: 1,
    title: "Project manager",
    experience: "2-3 yrs",
    location: "Mumbai",
    Buildingimage: "/images/broserJobs/industryIcon.svg",
    Building: "Building Material",
    time: "2 hours ago",
    description: `Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida vestibulum habitant magnis mi aliquam senectus massa tellus interdum velit volutpat porttitor quis eu massa suspendisse et amet laoreet lobortis auctor pharetra in sodales at netus nunc montes faucibus vitae fringilla nibh.Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida vestibulum habitant magnis mi aliquam senectus massa tellus interdum velit volutpat porttitor quis eu massa suspendisse et amet laoreet lobortis auctor pharetra in sodales at netus nunc montes faucibus vitae fringilla nibh.`,
    responsibilities: [
      "Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida ",
      "Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida ",
      "Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida "
    ],
    role: "Project Manager",
    industry: "Building Material",
    employmentType: "Full Time , Permanent",
    skills: ["Communication", "Error Handling", "Problem Solving", "Client Handling"],
  },

  {
    id: 2,
    title: "Frontend Developer",
    experience: "1-3 yrs",
    location: "Bangalore",
    time: "1 hour ago",
    description: `Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida vestibulum habitant magnis mi aliquam senectus massa tellus interdum velit volutpat porttitor quis eu massa suspendisse et amet laoreet lobortis auctor pharetra in sodales at netus nunc montes faucibus vitae fringilla nibh.Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida vestibulum habitant magnis mi aliquam senectus massa tellus interdum velit volutpat porttitor quis eu massa suspendisse et amet laoreet lobortis auctor pharetra in sodales at netus nunc montes faucibus vitae fringilla nibh.`,
    responsibilities: [
      "Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida ",
      "Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida ",
      "Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida "
    ],
    role: "Frontend Developer",
    industry: "IT",
    employmentType: "Full Time",
    skills: ["React", "JavaScript", "CSS"],
  },

  {
    id: 3,
    title: "Backend Developer",
    experience: "2-4 yrs",
    location: "Hyderabad",
    time: "3 hours ago",
    description: `Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida vestibulum habitant magnis mi aliquam senectus massa tellus interdum velit volutpat porttitor quis eu massa suspendisse et amet laoreet lobortis auctor pharetra in sodales at netus nunc montes faucibus vitae fringilla nibh.Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida vestibulum habitant magnis mi aliquam senectus massa tellus interdum velit volutpat porttitor quis eu massa suspendisse et amet laoreet lobortis auctor pharetra in sodales at netus nunc montes faucibus vitae fringilla nibh.`,
    responsibilities: [
      "Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida ",
      "Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida ",
      "Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida "
    ],
    role: "Backend Developer",
    industry: "IT",
    employmentType: "Full Time",
    skills: ["Node.js", "MongoDB"],
  },

  {
    id: 4,
    title: "UI Designer",
    experience: "1-2 yrs",
    location: "Delhi",
    time: "4 hours ago",
    description: `Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida vestibulum habitant magnis mi aliquam senectus massa tellus interdum velit volutpat porttitor quis eu massa suspendisse et amet laoreet lobortis auctor pharetra in sodales at netus nunc montes faucibus vitae fringilla nibh.Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida vestibulum habitant magnis mi aliquam senectus massa tellus interdum velit volutpat porttitor quis eu massa suspendisse et amet laoreet lobortis auctor pharetra in sodales at netus nunc montes faucibus vitae fringilla nibh.`,
    responsibilities: ["Design UI", "User research"],
    role: "Designer",
    industry: "Design",
    employmentType: "Full Time",
    skills: ["Figma", "UI/UX"],
  },
    {
    id: 5,
    title: "Project manager",
    experience: "2-3 yrs",
    location: "Mumbai",
    Buildingimage: "/images/broserJobs/industryIcon.svg",
    Building: "Building Material",
    time: "2 hours ago",
    description: `Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida vestibulum habitant magnis mi aliquam senectus massa tellus interdum velit volutpat porttitor quis eu massa suspendisse et amet laoreet lobortis auctor pharetra in sodales at netus nunc montes faucibus vitae fringilla nibh.Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida vestibulum habitant magnis mi aliquam senectus massa tellus interdum velit volutpat porttitor quis eu massa suspendisse et amet laoreet lobortis auctor pharetra in sodales at netus nunc montes faucibus vitae fringilla nibh.`,
    responsibilities: [
      "Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida ",
      "Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida ",
      "Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida "
    ],
    role: "Project Manager",
    industry: "Building Material",
    employmentType: "Full Time , Permanent",
    skills: ["Communication", "Error Handling", "Problem Solving", "Client Handling"],
  },

  {
    id: 6,
    title: "Frontend Developer",
    experience: "1-3 yrs",
    location: "Bangalore",
    time: "1 hour ago",
    description: `Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida vestibulum habitant magnis mi aliquam senectus massa tellus interdum velit volutpat porttitor quis eu massa suspendisse et amet laoreet lobortis auctor pharetra in sodales at netus nunc montes faucibus vitae fringilla nibh.Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida vestibulum habitant magnis mi aliquam senectus massa tellus interdum velit volutpat porttitor quis eu massa suspendisse et amet laoreet lobortis auctor pharetra in sodales at netus nunc montes faucibus vitae fringilla nibh.`,
    responsibilities: [
      "Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida ",
      "Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida ",
      "Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida "
    ],
    role: "Frontend Developer",
    industry: "IT",
    employmentType: "Full Time",
    skills: ["React", "JavaScript", "CSS"],
  },

  {
    id: 7,
    title: "Backend Developer",
    experience: "2-4 yrs",
    location: "Hyderabad",
    time: "3 hours ago",
    description: `Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida vestibulum habitant magnis mi aliquam senectus massa tellus interdum velit volutpat porttitor quis eu massa suspendisse et amet laoreet lobortis auctor pharetra in sodales at netus nunc montes faucibus vitae fringilla nibh.Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida vestibulum habitant magnis mi aliquam senectus massa tellus interdum velit volutpat porttitor quis eu massa suspendisse et amet laoreet lobortis auctor pharetra in sodales at netus nunc montes faucibus vitae fringilla nibh.`,
    responsibilities: [
      "Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida ",
      "Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida ",
      "Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida "
    ],
    role: "Backend Developer",
    industry: "IT",
    employmentType: "Full Time",
    skills: ["Node.js", "MongoDB"],
  },

  {
    id: 8,
    title: "UI Designer",
    experience: "1-2 yrs",
    location: "Delhi",
    time: "4 hours ago",
    description: `Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida vestibulum habitant magnis mi aliquam senectus massa tellus interdum velit volutpat porttitor quis eu massa suspendisse et amet laoreet lobortis auctor pharetra in sodales at netus nunc montes faucibus vitae fringilla nibh.Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida vestibulum habitant magnis mi aliquam senectus massa tellus interdum velit volutpat porttitor quis eu massa suspendisse et amet laoreet lobortis auctor pharetra in sodales at netus nunc montes faucibus vitae fringilla nibh.`,
    responsibilities: ["Design UI", "User research"],
    role: "Designer",
    industry: "Design",
    employmentType: "Full Time",
    skills: ["Figma", "UI/UX"],
  },
    {
    id: 9,
    title: "Project manager",
    experience: "2-3 yrs",
    location: "Mumbai",
    Buildingimage: "/images/broserJobs/industryIcon.svg",
    Building: "Building Material",
    time: "2 hours ago",
    description: `Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida vestibulum habitant magnis mi aliquam senectus massa tellus interdum velit volutpat porttitor quis eu massa suspendisse et amet laoreet lobortis auctor pharetra in sodales at netus nunc montes faucibus vitae fringilla nibh.Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida vestibulum habitant magnis mi aliquam senectus massa tellus interdum velit volutpat porttitor quis eu massa suspendisse et amet laoreet lobortis auctor pharetra in sodales at netus nunc montes faucibus vitae fringilla nibh.`,
    responsibilities: [
      "Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida ",
      "Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida ",
      "Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida "
    ],
    role: "Project Manager",
    industry: "Building Material",
    employmentType: "Full Time , Permanent",
    skills: ["Communication", "Error Handling", "Problem Solving", "Client Handling"],
  },

  {
    id: 10,
    title: "Frontend Developer",
    experience: "1-3 yrs",
    location: "Bangalore",
    time: "1 hour ago",
    description: `Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida vestibulum habitant magnis mi aliquam senectus massa tellus interdum velit volutpat porttitor quis eu massa suspendisse et amet laoreet lobortis auctor pharetra in sodales at netus nunc montes faucibus vitae fringilla nibh.Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida vestibulum habitant magnis mi aliquam senectus massa tellus interdum velit volutpat porttitor quis eu massa suspendisse et amet laoreet lobortis auctor pharetra in sodales at netus nunc montes faucibus vitae fringilla nibh.`,
    responsibilities: [
      "Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida ",
      "Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida ",
      "Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida "
    ],
    role: "Frontend Developer",
    industry: "IT",
    employmentType: "Full Time",
    skills: ["React", "JavaScript", "CSS"],
  },

  {
    id: 11,
    title: "Backend Developer",
    experience: "2-4 yrs",
    location: "Hyderabad",
    time: "3 hours ago",
    description: `Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida vestibulum habitant magnis mi aliquam senectus massa tellus interdum velit volutpat porttitor quis eu massa suspendisse et amet laoreet lobortis auctor pharetra in sodales at netus nunc montes faucibus vitae fringilla nibh.Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida vestibulum habitant magnis mi aliquam senectus massa tellus interdum velit volutpat porttitor quis eu massa suspendisse et amet laoreet lobortis auctor pharetra in sodales at netus nunc montes faucibus vitae fringilla nibh.`,
    responsibilities: [
      "Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida ",
      "Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida ",
      "Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida "
    ],
    role: "Backend Developer",
    industry: "IT",
    employmentType: "Full Time",
    skills: ["Node.js", "MongoDB"],
  },

  {
    id: 12,
    title: "UI Designer",
    experience: "1-2 yrs",
    location: "Delhi",
    time: "4 hours ago",
    description: `Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida vestibulum habitant magnis mi aliquam senectus massa tellus interdum velit volutpat porttitor quis eu massa suspendisse et amet laoreet lobortis auctor pharetra in sodales at netus nunc montes faucibus vitae fringilla nibh.Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida vestibulum habitant magnis mi aliquam senectus massa tellus interdum velit volutpat porttitor quis eu massa suspendisse et amet laoreet lobortis auctor pharetra in sodales at netus nunc montes faucibus vitae fringilla nibh.`,
    responsibilities: ["Design UI", "User research"],
    role: "Designer",
    industry: "Design",
    employmentType: "Full Time",
    skills: ["Figma", "UI/UX"],
  },
  {
    id: 13,
    title: "UI Designer",
    experience: "1-2 yrs",
    location: "Delhi",
    time: "4 hours ago",
    description: `Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida vestibulum habitant magnis mi aliquam senectus massa tellus interdum velit volutpat porttitor quis eu massa suspendisse et amet laoreet lobortis auctor pharetra in sodales at netus nunc montes faucibus vitae fringilla nibh.Lorem ipsum in consectetur vitae pretium lorem porttitor gravida sapien amet at viverra consequat blandit nisl phasellus gravida vestibulum habitant magnis mi aliquam senectus massa tellus interdum velit volutpat porttitor quis eu massa suspendisse et amet laoreet lobortis auctor pharetra in sodales at netus nunc montes faucibus vitae fringilla nibh.`,
    responsibilities: ["Design UI", "User research"],
    role: "Designer",
    industry: "Design",
    employmentType: "Full Time",
    skills: ["Figma", "UI/UX"],
  },
];


export default function Jobscart() {
  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState(jobsData[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const headingRef = useRef(null);
  const containerRef = useRef(null);
  const [showHeading, setShowHeading] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const jobsPerPage = 5;
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobsData.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(jobsData.length / jobsPerPage);

  const submitHandelar=(data)=>{
    
    localStorage.setItem("job",JSON.stringify(data));
    router.push("/jobs/submitYourCV");
  }

  useEffect(() => {
    setSelectedJob(currentJobs[0]);
  }, [currentPage]);

   useEffect(() => {
    const handleScroll = () => {
      const triggerBottom = window.innerHeight * 0.85;
      if (headingRef.current) {
        const rect = headingRef.current.getBoundingClientRect();
        if (rect.top < triggerBottom) {
          setShowHeading(true);
        }
      }
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (rect.top < triggerBottom) {
          setShowContent(true);
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-white lg:px-25 min-h-screen">
      
      <div  ref={headingRef} className={`p-4 sm:p-6 text-center  transition-all duration-700 transform ${
          showHeading
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0"
        }` }>
        <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold mb-5">
          Featured <span className="text-[#0277BD]">Jobs</span>
        </h2>
        <p className="text-black mt-2 text-sm sm:text-base lg:text-[18px] max-w-2xl mx-auto">
          Explore opportunities across different roles and industries, and find positions that align with your skills, interests, and career goals.
        </p>
      </div>

      <div ref={containerRef} className={`mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6 py-6 transition-all duration-700 transform ${
          showContent
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}>
        
  
        <div className="w-full">
     
          <div className="space-y-4 sm:space-y-5">
            {currentJobs.map((job) => (
              <div
                key={job.id}
                onClick={() => setSelectedJob(job)}
                className={`p-4 sm:p-5 rounded-2xl border cursor-pointer transition ${
                  selectedJob.id === job.id
                    ? "border-[#039BE6] border-2"
                    : "border-2 border-[#ECECEC] hover:shadow-sm"
                }`}
              >
                <div className="flex justify-between items-start gap-2">
                  <h3 className="font-semibold text-base sm:text-lg md:text-xl">
                    {job.title}
                  </h3>

                  <div className="flex items-center gap-1 whitespace-nowrap">
                    <img src="/images/broserJobs/clockone.svg" alt="icon" className="h-4 w-4" />
                    <span className="text-[10px] sm:text-[12px] text-black">
                      {job.time}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-2 text-sm sm:text-[16px]">
                  <div className="flex items-center gap-1">
                    <img src="/images/broserJobs/experienceIcon.svg" alt="" className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>{job.experience}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <img src="/images/broserJobs/locationIcon.svg" alt="" className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>{job.location}</span>
                  </div>

                  {job.Building && job.Buildingimage && (
                    <div className="flex items-center gap-1">
                      <img src={job.Buildingimage} alt="" className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span>{job.Building}</span>
                    </div>
                  )}
                </div>

                <div className="mt-2 text-sm sm:text-[16px]">
                  {job.skills.map((s, i) => (
                    <span key={i}>• {s} </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mt-6">
            
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            >
              <img src="/images/broserJobs/Arrowleft.svg" alt="arrow" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full text-sm sm:text-[16px] ${
                    currentPage === page
                      ? "bg-gray-200 font-semibold"
                      : "text-black"
                  }`}
                >
                  {page}
                </button>
              )
            )}

            <button
              onClick={() =>
                setCurrentPage((p) => Math.min(p + 1, totalPages))
              }
            >
              <img src="/images/broserJobs/Arrowright.svg" alt="arrow" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-2 border border-gray-200 rounded-xl w-full">
          
     
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 border border-[#ECECEC] rounded-t-xl p-4 sm:p-6">
            
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
                {selectedJob.title}
              </h3>

              <div className="flex flex-wrap gap-3 mt-2 text-sm sm:text-[16px]">
                <div className="flex items-center gap-1">
                  <img src="/images/broserJobs/experienceIcon.svg" className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>{selectedJob.experience}</span>
                </div>

                <div className="flex items-center gap-1">
                  <img src="/images/broserJobs/locationIcon.svg" className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>{selectedJob.location}</span>
                </div>

                <div className="flex items-center gap-1">
                  <img src="/images/broserJobs/clockone.svg" className="h-4 w-4" />
                  <span className="text-[10px] sm:text-[12px]">
                    {selectedJob.time}
                  </span>
                </div>
              </div>
            </div>

            <button onClick={()=>submitHandelar(selectedJob)} className="bg-[#039BE6] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg shadow w-full sm:w-auto text-sm sm:text-base flex items-center justify-center gap-3">
              Apply now
              <img src="/images/broserJobs/applyArrow.svg" className="w-[14px] h-[18px]" />
            </button>
          </div>

          <div className="px-4 sm:px-6 pt-6">
            <h4 className="text-lg sm:text-[20px] font-semibold mb-2">Overview</h4>
            <p className="text-sm sm:text-[16px] leading-[165%] ps-2 sm:ps-4">
              {selectedJob.description}
            </p>
          </div>

          <div className="mt-6 px-4 sm:px-6">
            <h4 className="text-lg sm:text-[20px] font-semibold mb-2">
              Responsibilities
            </h4>

            <div className="space-y-2 text-sm sm:text-[16px]">
              {selectedJob.responsibilities.map((item, i) => (
                <div key={i} className="flex items-start gap-2 ps-2 sm:ps-4">
                  <span className="mt-2 w-1.5 h-1.5 bg-black rounded-full"></span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 px-4 sm:px-6 text-sm sm:text-[16px] space-y-2">
            <p><strong>Role :</strong> {selectedJob.role}</p>
            <p><strong>Industry :</strong> {selectedJob.industry}</p>
            <p><strong>Employement Type :</strong> {selectedJob.employmentType}</p>
          </div>

          <div className="mt-6 px-4 sm:px-6">
            <h4 className="text-lg font-semibold mb-2">Skills</h4>
            <div className="flex flex-wrap gap-3 text-sm sm:text-[16px] ps-2 sm:ps-4">
              {selectedJob.skills.map((s, i) => (
                <span key={i}>• {s}</span>
              ))}
            </div>
          </div>
          <div className="p-4 sm:p-6">
            <button className="w-full sm:w-auto bg-[#039BE6] text-white px-5.5 py-3   rounded-lg shadow flex items-center justify-center gap-4 text-[20px]">
              Apply now
              <img src="/images/broserJobs/applyArrow.svg" className="w-[28px] h-[28px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}