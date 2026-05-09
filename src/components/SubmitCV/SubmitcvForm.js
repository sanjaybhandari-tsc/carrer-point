import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";

export default function SubmitcvForm() {
  const [fileKey, setFileKey] = useState(Date.now());
  const fileInputRef = useRef(null);
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

  useEffect(() => {
    const savedData = sessionStorage.getItem("formData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setFormData((prev) => ({
        ...prev,
        ...parsedData,
        resume: null,
      }));
    }
  }, []);


  const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Others", label: "Others" },
  ];
  const handleFocus = (e) => {
    const { name } = e.target;
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "resume") {
      const file = files[0];
      setFormData({ ...formData, resume: file });
      setErrors((prev) => ({ ...prev, resume: "" }));
      sessionStorage.setItem(
        "formData",
        JSON.stringify({ ...formData, resume: file?.name || null }),
      );
    } else {
      const updatedData = { ...formData, [name]: value };
      setFormData(updatedData);
      setErrors((prev) => ({ ...prev, [name]: "" }));
      sessionStorage.setItem(
        "formData",
        JSON.stringify({
          ...updatedData,
          resume: updatedData.resume?.name || null,
        }),
      );
    }
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name required";
    if (!formData.email.trim() || !formData.email.match(/^\S+@\S+\.\S+$/))
      newErrors.email = "Valid email required";
    if (!formData.contact.trim() || !formData.contact.match(/^[0-9]{10}$/))
      newErrors.contact = "Valid 10-digit number required";
    if (!formData.resume) newErrors.resume = "Resume is required";
    if (!formData.skills.trim()) newErrors.skills = "Please fill the data";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      sessionStorage.setItem(
        "formData",
        JSON.stringify({ ...formData, resume: formData.resume?.name || null }),
      );

      console.log(formData);
      alert("Form submitted successfully!");

      setFormData({
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

      setErrors({});
      sessionStorage.removeItem("formData");
      setFileKey(Date.now());

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const inputStyle = (fieldName) =>
    `small-text w-full h-12 border rounded-lg px-3 outline-none focus:outline-none ${errors[fieldName] ? "border-2 border-red-500" : "border border-[#E9EAEB]"
    }`;

  const labelStyle = "content   leading-tight tracking-normal";

  return (
    <div className="px-4 sm:px-6 lg:px-[100px] py-10 lg:mb-25 font-montserra">
      <form
        noValidate
        onSubmit={handleSubmit}
        className="max-w-[1312px] mx-auto space-y-10"
      >
        <div className="space-y-6 mb-20">
          <h2 className="subheading-bold ">Personal Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-montserra">
            <div className="flex items-start flex-col gap-[2px]">
              <label htmlFor="firstName" className={labelStyle}>
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                placeholder="First Name"
                onChange={handleChange}
                onFocus={handleFocus}
                className={inputStyle("firstName")}
                required
                autoComplete="given-name"
                aria-invalid={!!errors.firstName}
                aria-describedby="firstName-error"
              />
              <p className="text-red-500 text-sm">{errors.firstName}</p>
            </div>

            <div className="flex items-start flex-col gap-[2px]">
              <label htmlFor="lastName" className={labelStyle}>Last Name</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                placeholder="Last Name"
                onChange={handleChange}
                onFocus={handleFocus}
                className={inputStyle("lastName")}
                required
                autoComplete="family-name"
                aria-invalid={!!errors.lastName}
                aria-describedby="lastName-error"
              />
              <p className="text-red-500 text-sm">{errors.lastName}</p>
            </div>

            <div className="flex items-start flex-col gap-[2px]">
              <label className={labelStyle}>Gender</label>
              {/* <select
                name="gender"
                className={inputStyle("gender")}
                onChange={handleChange}
                value={formData.gender}
                onFocus={handleFocus}
              >
                <option value="" disabled >
                  Gender
                </option>

                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select> */}
              <Select
                options={genderOptions}
                placeholder="Select Gender"
                value={genderOptions.find(
                  (option) => option.value === formData.gender
                )}
                onChange={(selectedOption) =>
                  setFormData({
                    ...formData,
                    gender: selectedOption?.value || "",
                  })
                }
                className={inputStyle("gender")}
                classNamePrefix="react-select"
              />


            </div>

            <div className="flex items-start flex-col gap-[2px]">
              <label className={labelStyle}>DOB</label>
              <input
                type={formData.dob ? "date" : "text"}
                placeholder="Date of Birth"
                name="dob"
                className={inputStyle("dob")}
                value={formData.dob}
                onChange={handleChange}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => {
                  if (!formData.dob) {
                    e.target.type = "text";
                  }
                }}
              />
            </div>

            <div className="flex items-start flex-col gap-[2px]">
              <label className={labelStyle}>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className={inputStyle("email")}
                value={formData.email}
                onChange={handleChange}
                onFocus={handleFocus}
              />
              <p className="text-red-500 text-sm">{errors.email}</p>
            </div>

            <div className="flex items-start flex-col gap-[2px]">
              <label className={labelStyle}>Contact No.</label>
              <input
                type="text"
                name="contact"
                placeholder="Contact No."
                className={inputStyle("contact")}
                value={formData.contact}
                onChange={handleChange}
                onFocus={handleFocus}
              />
              <p className="text-red-500 text-sm">{errors.contact}</p>
            </div>

            <div className="flex items-start flex-col gap-[2px]">
              <label className={labelStyle}>State</label>
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                className={inputStyle("state")}
                onChange={handleChange}
                onFocus={handleFocus}
              />
            </div>

            <div className="flex items-start flex-col gap-[2px]">
              <label className={labelStyle}>City</label>
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                className={inputStyle("city")}
                onChange={handleChange}
                onFocus={handleFocus}
              />
            </div>
          </div>
        </div>

        <div className="space-y-6 mb-20">
          <h2 className="subheading-bold ">Professional Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 font-montserra">
            <div className="flex items-start flex-col gap-[2px]">
              <label className={labelStyle}>Current Job Title</label>
              <input
                type="text"
                name="jobTitle"
                placeholder="Enter your Current Job Title"
                value={formData.jobTitle}
                className={inputStyle("jobTitle")}
                onChange={handleChange}
                onFocus={handleFocus}
              />
            </div>

            <div className="flex items-start flex-col gap-[2px]">
              <label className={labelStyle}>Current Company</label>
              <input
                type="text"
                name="company"
                placeholder="Enter your Current Company"
                value={formData.company}
                className={inputStyle("company")}
                onChange={handleChange}
                onFocus={handleFocus}
              />
            </div>

            <div className="flex items-start flex-col gap-[2px]">
              <label className={labelStyle}>Current CTC</label>
              <input
                type="text"
                name="ctc"
                placeholder="Enter your Current CTC"
                value={formData.ctc}
                className={inputStyle("ctc")}
                onChange={handleChange}
                onFocus={handleFocus}
              />
            </div>

            <div className="flex items-start flex-col gap-[2px]">
              <label className={labelStyle}>Years Of Experience</label>
              <input
                type="text"
                name="experience"
                placeholder="Enter your Years Of Experience"
                className={inputStyle("experience")}
                value={formData.experience}
                onChange={handleChange}
                onFocus={handleFocus}
              />
            </div>

            <div className="flex items-start flex-col gap-[2px] col-span-1 md:col-span-2 lg:col-span-2">
              <label className={labelStyle}>Key Skills</label>
              <input
                type="text"
                name="skills"
                placeholder="Enter your Skills"
                className={inputStyle("skills")}
                value={formData.skills}
                onChange={handleChange}
                onFocus={handleFocus}
              />
              <p className="text-red-500 text-sm">{errors.skills}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-[2px] font-montserrat">
          <label
            className={`w-[80%] md:w-full max-w-[1130px] md:h-[200px] h-[100px] border-2 border-dashed rounded-3xl flex flex-col items-center justify-center text-center cursor-pointer ${errors.resume ? "border-red-500" : "border-blue-400"
              }`}
          >
            <input
              type="file"
              name="resume"
              className="hidden cursor-pointer"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              ref={fileInputRef}
              key={fileKey}
              onFocus={handleFocus}
            />
            <img src="/images/SubmitCv/uplodIcon.svg" alt="uplodeimage" className="h-5 w-5 md:w-auto md:h-auto" />
            <p className="content cursor-pointer">Upload Resume</p>
            {formData.resume && (
              <p className="text-green-600 text-sm">
                Uploaded: {formData.resume.name}
              </p>
            )}
            <p className="text-red-500 text-sm">{errors.resume}</p>
          </label>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="md:w-[200px] w-[100px] md:h-12 h-10 bg-[#039BE6] text-white rounded-lg small-text text-center shadow-[0px_4px_8px_0px_#00000029] cursor-pointer "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
