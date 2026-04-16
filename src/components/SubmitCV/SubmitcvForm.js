import React, { useState } from "react";

export default function SubmitcvForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    email: "",
    contact: "",
    state: "",
    city: "",
    jobTitle: "",
    company: "",
    ctc: "",
    experience: "",
    skills: "",
    resume: null,
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First name required";
    if (!formData.lastName) newErrors.lastName = "Last name required";
    if (!formData.email.match(/^\S+@\S+\.\S+$/))
      newErrors.email = "Valid email required";
    if (!formData.contact.match(/^[0-9]{10}$/))
      newErrors.contact = "Valid 10-digit number required";
    if (!formData.resume) newErrors.resume = "Resume is required";
    if(!formData.skills) newErrors.skills="Plese Fill the Data"

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log(formData);
      alert("Form submitted successfully!");
    }
  };

  const inputStyle =
    "w-full h-12 border rounded-lg px-3 text-[16px] border border-[#E9EAEB]";

  const labelStyle = "text-black font-medium text-sm sm:text-sm md:text-base lg:text-[16px] leading-tight tracking-normal";

  return (
    <div className="px-4 sm:px-6 lg:px-[100px] py-10  lg:mb-25">
      <form
        onSubmit={handleSubmit}
        className="max-w-[1312px] mx-auto space-y-10"
      >
        <div className="space-y-6">
          <h2 className="text-[24px] font-bold">Personal Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="flex items-start flex-col gap-[10px]">
              <label className={labelStyle}>First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className={inputStyle}
                onChange={handleChange}
              />
              <p className="text-red-500 text-lg">{errors.firstName}</p>
            </div>

            <div className="flex items-start flex-col gap-[10px]">
              <label className={labelStyle}>Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className={inputStyle}
                onChange={handleChange}
              />
              <p className="text-red-500 text-lg">{errors.lastName}</p>
            </div>

            <div className="flex items-start flex-col gap-[10px]">
              <label className={labelStyle}>Gender</label>
              <select
                name="gender"
                className={inputStyle}
                onChange={handleChange}
              >
                <option value="">Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </select>
            </div>

            <div className="flex items-start flex-col gap-[10px]">
              <label className={labelStyle}>DOB</label>
              <input
                type="date"
                name="dob"
                className={inputStyle}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-start flex-col gap-[10px]">
              <label className={labelStyle}>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className={inputStyle}
                onChange={handleChange}
              />
              <p className="text-red-500 text-lg">{errors.email}</p>
            </div>

            <div className="flex items-start flex-col gap-[10px]">
              <label className={labelStyle}>Contact No.</label>
              <input
                type="text"
                name="contact"
                placeholder="Contact No."
                className={inputStyle}
                onChange={handleChange}
              />
              <p className="text-red-500 text-lg">{errors.contact}</p>
            </div>

            <div className="flex items-start flex-col gap-[10px]">
              <label className={labelStyle}>State</label>
              <input
                type="text"
                name="state"
                placeholder="State"
                className={inputStyle}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-start flex-col gap-[10px]">
              <label className={labelStyle}>City</label>
              <input
                type="text"
                name="city"
                placeholder="City"
                className={inputStyle}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-[24px] font-bold ">Professional Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="flex items-start flex-col gap-[10px]">
              <label className={labelStyle}>Current Job Title</label>
              <input
                type="text"
                name="jobTitle"
                placeholder="Current Job Title"
                className={inputStyle}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-start flex-col gap-[10px]">
              <label className={labelStyle}>Current Company</label>
              <input
                type="text"
                name="company"
                placeholder="Current Company"
                className={inputStyle}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-start flex-col gap-[10px]">
              <label className={labelStyle}>Current CTC</label>
              <input
                type="text"
                name="ctc"
                placeholder="Current CTC"
                className={inputStyle}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-start flex-col gap-[10px]">
              <label className={labelStyle}>Years of Experience</label>
              <input
                type="text"
                name="experience"
                placeholder="Years of Experience"
                className={inputStyle}
                onChange={handleChange}
              />
            </div>

            <div className="col-span-1  lg:col-span-2 flex items-start flex-col gap-[10px]">
              <label className={labelStyle}>Key Skills</label>
              <input
                type="text"
                name="skills"
                placeholder="Key Skills"
                className="h-12 border border-[#E9EAEB] rounded-lg px-3 w-full"
                onChange={handleChange}
              />
              <p className="text-red-500 text-lg">{errors.skills}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center  gap-[10px]">
          <label className="w-full max-w-[1130px] h-[200px] border-2 border-dashed border-blue-400 rounded-3xl flex flex-col items-center justify-center  text-center">
            <input
              type="file"
              name="resume"
              className="hidden"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
            />
            <img src="/images/SubmitCv/uplodIcon.svg" alt=" " />
            <p className="text-lg font-medium">Upload Resume</p>
            <p className="text-sm text-gray-500">
              Drag & drop or click to upload (PDF, DOC, DOCX)
            </p>
            <p className="text-red-500 text-lg">{errors.resume}</p>
          </label>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-[200px] h-12 bg-[#039BE6] text-white rounded-lg text-[16px] font-semibold text-center shadow-[0px_4px_8px_0px_#00000029]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}