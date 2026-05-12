
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import styles from "../../styles/getinTouch/GetinTouch.module.css";

export default function GetInTouchForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        companyName: "",
        workEmail: "",
        phoneNo: "",
        roleHiringFor: "",
        noOfPositions: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const handleFocus = (e) => {
        const { name } = e.target;
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required";
        }

        if (!formData.companyName.trim()) {
            newErrors.companyName = "Company name is required";
        }

        if (
            !formData.workEmail.trim() ||
            !/^\S+@\S+\.\S+$/.test(formData.workEmail)
        ) {
            newErrors.workEmail = "Valid work email is required";
        }

        if (
            !formData.phoneNo.trim() ||
            formData.phoneNo.length < 10
        ) {
            newErrors.phoneNo = "Valid 10-digit phone number is required";
        }

        if (!formData.roleHiringFor.trim()) {
            newErrors.roleHiringFor = "Role is required";
        }

        if (!formData.noOfPositions.trim()) {
            newErrors.noOfPositions = "Number of positions is required";
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();

        if (Object.keys(validationErrors).length) {
            setErrors(validationErrors);
            return;
        }

        console.log(formData);

        alert("Form submitted successfully!");

        setFormData({
            firstName: "",
            companyName: "",
            workEmail: "",
            phoneNo: "",
            roleHiringFor: "",
            noOfPositions: "",
            message: "",
        });

        setErrors({});
    };

    const inputStyle = (fieldName) => `w-full h-12 border rounded-lg px-3 outline-none focus:outline-none small-text ${errors[fieldName] ? "border-2 border-red-500" : "border border-[#E9EAEB]"}`;
    const labelStyle = "content leading-tight tracking-norma";
    const handleContactChange = (value) => {
        if (value.length <= 12) {
            setFormData((prev) => ({ ...prev, contact: value }));
            setErrors((prev) => ({ ...prev, contact: "" }));
        }
    };


    const renderInput = ({
        label,
        name,
        type = "text",
        placeholder,
        autoComplete,
        min,
    }) => (
        <div className="flex flex-col gap-1">
            <label htmlFor={name} className={labelStyle}>
                {label}
            </label>

            <input
                id={name}
                name={name}
                type={type}
                min={min}
                value={formData[name]}
                placeholder={placeholder}
                autoComplete={autoComplete}
                onChange={handleChange}
                onFocus={handleFocus}
                className={inputStyle(name)}
            />

            {errors[name] && (
                <p className="text-red-500 text-xs">{errors[name]}</p>
            )}
        </div>
    );

    return (
        <div className="px-4 sm:px-6 lg:px-25 py-[28px]   md:py-[40px] lg:py-[60px] font-montserrat">
            <form
                noValidate
                onSubmit={handleSubmit}
                className="max-w-[1312px] mx-auto space-y-6"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
                    {renderInput({
                        label: "Full Name",
                        name: "firstName",
                        placeholder: "Enter your name",
                        autoComplete: "given-name",
                    })}

                    {renderInput({
                        label: "Company Name",
                        name: "companyName",
                        placeholder: "Enter your company name",
                    })}

                    {renderInput({
                        label: "Work Email",
                        name: "workEmail",
                        type: "email",
                        placeholder: "Enter your work email",
                        autoComplete: "email",
                    })}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="phoneNo" className={labelStyle}>
                            Phone No.
                        </label>

                        <PhoneInput
                            country={"in"}
                            value={formData.phoneNo}
                            onChange={handleContactChange}
                            containerClass="w-full !rounded-lg"
                            className={styles.contactfield}
                            inputClass={`!w-full !h-12 !pl-14 small-text ${errors.phoneNo ? "!border-2 !border-red-500": "!border !border-[#E9EAEB]"}`}
                            buttonClass="!border !border-[#E9EAEB] !bg-transparent"
                        />

                        {errors.phoneNo && (
                            <p className="text-red-500 text-xs">{errors.phoneNo}</p>
                        )}
                    </div>

                    {renderInput({
                        label: "Role Hiring For",
                        name: "roleHiringFor",
                        placeholder: "Enter the role you're hiring for",
                    })}

                    {renderInput({
                        label: "No. Of Positions",
                        name: "noOfPositions",
                        type: "number",
                        min: "1",
                        placeholder: "Enter number of positions",
                    })}
                </div>
                <div className="flex flex-col gap-1 ">
                    <label htmlFor="message" className={labelStyle}>
                        Any Message for us ?
                    </label>

                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        placeholder="Write your message here..."
                        onChange={handleChange}
                        onFocus={handleFocus}
                        className="w-full border border-[#E9EAEB] rounded-lg px-3 py-3 outline-none focus:outline-none text-sm text-gray-700 placeholder-gray-400 resize-none"
                    />
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




