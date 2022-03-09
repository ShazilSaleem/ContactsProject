import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setValues = (e) => {
    e.preventDefault();

    const emailCheck = contacts.find(
      (contacts) => contacts.email === email && email
    );
    if (!email || !phone || !name) {
      return toast.error("Please Fill in All the fields", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    if (emailCheck) {
      return toast.error("This Email Already Exists", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    if (contacts.length === 0) {
      const data = {
        id: 1,
        name,
        email,
        phone,
      };
      console.log(data);

      dispatch({ type: "ADD_CONTACT", payload: data });
      toast.success("Contact Added Successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      navigate("/");
    } else {
      const data = {
        id: contacts[contacts.length - 1].id + 1,
        name,
        email,
        phone,
      };
      console.log(data);
      dispatch({ type: "ADD_CONTACT", payload: data });
      toast.success("Contact Added Successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      navigate("/");
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div
          className="row text-center mt-5"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/">
            <button className="btn btn-outline-dark" style={{ float: "left" }}>
              Back
            </button>
          </Link>
          <h3>Add Your Contact Details</h3>
        </div>
        <div className="col-md-6 p-5 mx-auto shadow text-center">
          <form className="mt-3">
            <div className="form-group">
              <input
                className="form-control mb-3"
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control mb-3"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control mb-3"
                type="number"
                placeholder="Phone"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
            <div className="form-group" onClick={setValues}>
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Add Student"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
