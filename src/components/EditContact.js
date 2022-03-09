import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const EditContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { id } = useParams();
  const contacts = useSelector((state) => state);
  const currentContact = contacts.find(
    (contacts) => contacts.id === parseInt(id)
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const updateContact = (e) => {
    e.preventDefault();
    console.log(parseInt(id));

    const emailCheck = contacts.find(
      (contacts) => contacts.id !== parseInt(id) && contacts.email === email
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

    const data = {
      id: currentContact.id,
      name,
      email,
      phone,
    };
    console.log(data);

    dispatch({ type: "EDIT_CONTACT", payload: data });
    toast.success("Contact Updated Successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
    navigate("/");
  };

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setPhone(currentContact.phone);
    }
  }, []);

  return (
    <div className="container">
      {currentContact ? (
        <>
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
                <button
                  className="btn btn-outline-dark"
                  style={{ float: "left" }}
                >
                  Back
                </button>
              </Link>
              <h3>Edit Your Contact,Id= {id}</h3>
            </div>
            <div className="col-md-6 p-5 mx-auto shadow">
              <form className="mt-3">
                <div className="form-group">
                  <input
                    className="form-control mb-3"
                    type="text"
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
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="form-group">
                    <input
                      className="btn btn-dark "
                      type="submit"
                      value="Update Contact"
                      onClick={updateContact}
                    />
                  </div>

                  <Link to="/">
                    <button className="btn btn-danger">Cancel</button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h3 className="text-center mt-4">
              Requested Contact with id={id} does not exist.
            </h3>
            <Link to="/">
              <button className="btn btn-outline-dark mt-4">Back</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default EditContact;
