import React, { Component } from "react";
import { TextField, Button, Container, Stack } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

class Form extends Component {
  state = {
    name: "",
    dob: "",
    contact: "",
    email: "",
    more: "",
    error: {
      nameError: "",
      dobError: "",
      contactError: "",
      emailError: "",
    },
    isFormValid: false,
  };

  handleChange = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.value);

    if (e.target.id === "name") {
      this.validateName(e.target.value);
    }
    if (e.target.id === "dob") {
      this.validateDob(e.target.value);
    }
    if (e.target.id === "contact") {
      this.validateContact(e.target.value);
    }
    if (e.target.id === "email") {
      this.validateEmail(e.target.value);
    }
    if (e.target.id === "more") {
      this.validateMore(e.target.value);
    }
  };

  validateName = (name) => {
    let formValid = this.state.formValid;
    let namePattern = /^[A-Za-z]+$/;
    let nameError = this.state.error.nameError;
    if (name.trim() === "") {
      formValid = false;
      nameError = "This is required";
    } else if (!namePattern.test(name)) {
      formValid = false;
      nameError = "Please enter alphabets only";
    } else {
      formValid = true;
      nameError = "";
    }
    this.setState({
      formValid,
      name,
      error: { ...this.state.error, nameError },
    });
    return formValid;
  };
  validateDob = (dob) => {
    let formValid = this.state.formValid;
    let dobError = this.state.error.dobError;
    const dobDate = new Date(dob).setHours(0, 0, 0, 0);
    const today = new Date().setHours(0, 0, 0, 0);
    if (dob === "") {
      formValid = false;
      dobError = "This is required";
    } else if (dobDate > today) {
      formValid = false;
      dobError = "DOB can't be greater than today's date";
    } else {
      formValid = true;
      dobError = "";
    }
    this.setState({
      formValid,
      dob,
      error: { ...this.state.error, dobError },
    });
    return formValid;
  };
  validateContact = (contact) => {
    let formValid = this.state.formValid;
    let contactPattern = /^\d{10}$/;
    let contactError = this.state.error.contactError;
    if (contact.trim() === "") {
      formValid = false;
      contactError = "This is required";
    } else if (!contactPattern.test(contact)) {
      formValid = false;
      contactError = "Please enter a valid 10 digit contact";
    } else {
      formValid = true;
      contactError = "";
    }
    this.setState({
      formValid,
      contact,
      error: { ...this.state.error, contactError },
    });
    return formValid;
  };
  validateEmail = (email) => {
    let formValid = this.state.formValid;
    let emailError = this.state.emailError;
    let emailPattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!emailPattern.test(email)) {
      formValid = false;
      emailError = "Please enter valid email";
    } else {
      formValid = true;
      emailError = "";
    }
    this.setState({
      formValid,
      email,
      error: { ...this.state.error, emailError },
    });
    return formValid;
  };
  validateMore = (more) => {
    let formValid = this.state.formValid;
    let moreError = this.state.error.moreError;
    if (more.trim() === "") {
      formValid = false;
      moreError = "This is required";
    } else {
      formValid = true;
      moreError = "";
    }
    this.setState({
      formValid,
      more,
      error: { ...this.state.error, moreError },
    });
    return formValid;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (
      this.validateName(this.state.name) &&
      this.validateDob(this.state.dob) &&
      this.validateContact(this.state.contact) &&
      this.validateEmail(this.state.email) &&
      this.validateMore(this.state.more)
    ) {
      this.setState({ isFormValid: true });
      setTimeout(() => {
        this.setState({ isFormValid: false });
      }, 2000);
    }
  };

  render() {
    return (
      <React.Fragment>
        <Container maxWidth="small">
          <h2>Form</h2>
          <form onSubmit={this.handleSubmit}>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
              <TextField
                style={{ marginBottom: "16px" }}
                id="name"
                label="Name"
                placeholder="Please enter name"
                type="text"
                onChange={this.handleChange}
                value={this.state.name}
                error={!!this.state.error.nameError}
                helperText={this.state.error.nameError}
                fullWidth
              />
              <TextField
                style={{ marginBottom: "16px" }}
                id="dob"
                label="Date of Birth"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={this.handleChange}
                value={this.state.dob}
                error={!!this.state.error.dobError}
                helperText={this.state.error.dobError}
                inputProps={{
                  max: new Date().toISOString().split("T")[0],
                }}
                fullWidth
              />
            </Stack>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
              <TextField
                style={{ marginBottom: "16px" }}
                id="contact"
                label="Contact"
                placeholder="Please enter contact"
                type="text"
                onChange={this.handleChange}
                value={this.state.contact}
                error={!!this.state.error.contactError}
                helperText={this.state.error.contactError}
                fullWidth
              />
              <TextField
                style={{ marginBottom: "16px" }}
                id="email"
                label="Email"
                placeholder="Please enter email"
                type="text"
                onChange={this.handleChange}
                value={this.state.email}
                error={!!this.state.error.emailError}
                helperText={this.state.error.emailError}
                fullWidth
              />
            </Stack>
            <TextField
              style={{ marginBottom: "16px" }}
              id="more"
              label="Tell me more about yourself"
              placeholder="Please enter text"
              type="text"
              onChange={this.handleChange}
              value={this.state.more}
              error={!!this.state.error.moreError}
              helperText={this.state.error.moreError}
              fullWidth
            />
            <Button
              style={{ marginBottom: "16px" }}
              variant="contained"
              color="primary"
              type="submit"
              onChange={this.handleChange}
            >
              Submit
            </Button>
          </form>
          {this.state.isFormValid && (
            <Alert severity="success">
              <AlertTitle>Success</AlertTitle>
              Form is validated!
            </Alert>
          )}
        </Container>
      </React.Fragment>
    );
  }
}
export default Form;
