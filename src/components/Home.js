import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

const Wrapper = styled.section`
  padding: 2em;
  background: papayawhip;
`;
const Home = () => {
  const contacts = useSelector((state) => state);
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("persist:main-root"));
  console.log(userData[1]);
  console.log(contacts);
  console.log(contacts.length);
  const dispatch = useDispatch();
  const deleteContact = (id) => {
    console.log("id", id);
    dispatch({ type: "DELETE_CONTACT", payload: id });
    toast.warning("Contact Deleted Successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
    navigate("/");
  };

  return (
    <div>
      <Wrapper>
        <Title>Welcome to your Contacts</Title>
      </Wrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <Link to="/add">
          <button className="btn btn-outline-dark">Add Contact</button>
        </Link>
      </div>
      <div className="col-md-10 mx-auto my-4">
        <table className="table table-hover">
          <thead className="table-header bg-dark text-white">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {contacts.length > 0 ? (
              contacts.map((contact, id) => (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                  <td>
                    <Link
                      to={`/edit/${contact.id}`}
                      className="btn btn-sm btn-primary mr-1"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      onClick={() => deleteContact(contact.id)}
                      className="btn btn-sm btn-danger"
                      style={{ marginLeft: "1rem" }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <th>No contacts found</th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
