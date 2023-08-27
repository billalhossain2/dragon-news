import React, { useContext, useState } from "react";
import NavigationBar from "./shared/navigationBar/NavigationBar";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { userContext } from "../providers/AuthProvider";
const Register = () => {
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { registerNewUser, updateUserProfile, sendEmailConfirmation } = useContext(userContext);

  const handleSignUpUser = (ev) => {
    ev.preventDefault();
    //get input values
    const form = ev.target;
    const displayName = form.name.value;
    const email = form.email.value;
    const file = form.file.files[0];
    const password = form.password.value;
    const check = checked;

    //read file and store to local storage
    const storePhoto = (file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (ev) => {
        const photo = ev.target.result;
        localStorage.setItem(file.name, photo);
      };
    };


    //validate password field
    if (!displayName || !email || !file.name || !password) {
      return setError("All fields must be filled");
    } else if (password.length < 8) {
      return setError("Your password must be at least 8 characters");
    } else if (!/[a-z]/.test(password)) {
      return setError("Your password must contain at least one lower case.");
    } else if (!/[A-Z]/.test(password)) {
      return setError("Your password must contain at least one upper case.");
    } else if (!/[0-9]/.test(password)) {
      return setError("Your password must contain at least one digit.");
    } else {
      setError("");
    }
    //pwd: 123456aB
    //let's create a new user
    registerNewUser(email, password)
      .then(() => {
        console.log("Successfully created new user with pwd and email");
        storePhoto(file)
        updateUserProfile({ displayName, photoURL:file.name })
          .then(() => {
            console.log("User profile updated")
        })
          .catch((error) =>
            console.log("Profile update failed!", error.message)
          );

        setSuccess("Successfully registerd a new user");
        sendEmailConfirmation()
        .then(()=>{
          alert("An email verification sent. Please check your email")
        })
        .catch(error => console.log("Email verification sending failed ", error.message))
      })
      .catch((error) => {
        console.log("Error occured with pwd and email", error.message);
        setError(error.message);
      });
  };
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div
        style={{
          background: "#F3F3F3",
          width: "30%",
          margin: "auto",
          padding: "5px 50px 25px 50px",
        }}
      >
        <h3 className="text-center mt-5 mb-4">Register your account</h3>
        <Form style={{ width: "100%" }} onSubmit={handleSignUpUser}>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your email address"
              name="name"
            />
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label>Your Photo</Form.Label>
            <Form.Control
              type="file"
              placeholder="Enter your email address"
              name="file"
            />
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email address"
              name="email"
            />
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPassword"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              name="password"
            />
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
            <Form.Check
              onChange={() => setChecked(!checked)}
              label="Accept"
              name="check"
            />
            <Link to="/terms-and-conditions"> Terms And Conditions</Link>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Button
              disabled={checked ? false : true}
              style={{
                background: "#403F3F",
                color: "#fff",
                border: "none",
                width: "100%",
              }}
              type="submit"
            >
              Register
            </Button>
          </Form.Group>
          <div style={{ color: "red" }}>
            <b>{error}</b>
          </div>
          <div style={{ color: "green" }}>
            <b>{success}</b>
          </div>
          <label>
            Have An Account ?{" "}
            <Link to="/login" style={{ color: "#F75B5F" }}>
              Login
            </Link>{" "}
          </label>
        </Form>
      </div>
    </div>
  );
};

export default Register;
