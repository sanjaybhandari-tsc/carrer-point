import React from "react";

function FormComponent() {
  return (
    <div>
      <div>
        <h1>Personal Details</h1>
        <div>
          <div>
            <label>First Name</label>
            <input type="text" placeholder="Enter your first name" />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" placeholder="Enter your last name" />
          </div>
          <div>
            <label>Gender</label>
            <select>
              <option>Enter your age</option>
              <option value={male}>Male</option>
              <option value={female}>Female</option>
              <option value={other}>Other</option>
            </select>
          </div>
        </div>
        <div>
          <div>
            <label>DOB</label>
            <input type="date" placeholder="Enter your date of birth" />
          </div>
          <div>
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div>
            <label>Contact no.</label>
            <input type="number" />
          </div>
        </div>

        <div>
          <div>
            <label>State</label>
            <input type="text" placeholder="Enter your state name" />
          </div>
          <div>
            <label>city</label>
            <input type="text" placeholder="Enter your city" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormComponent;
