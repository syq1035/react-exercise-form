import React, { Component } from "react";
import "./myProfile.less";

class MyProfile extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      gender: "",
      decription: "",
      check: false
    };
  }
  handleFieldChange = (e, name) => {
    this.setState({
      [name]: e.target.value
    });
  };

  handleCheckChange = e => {
    this.setState({
      check: e.target.checked
    });
  };

  handleSubmit = () => {
    alert(JSON.stringify(this.state));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>My Profile</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={this.state.name}
            onChange={e => this.handleFieldChange(e, "name")}
          />
        </div>
        <label htmlFor="gender">Gender</label>
        <select
          className="form-control"
          id="gender"
          value={this.state.gender}
          onChange={e => this.handleFieldChange(e, "gender")}
        >
          <option disabled="disabled"></option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <div className="form-group">
          <label htmlFor="decription">Decription</label>
          <textarea
            className="form-control"
            id="decription"
            rows="3"
            value={this.state.decription}
            onChange={e => this.handleFieldChange(e, "decription")}
          ></textarea>
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="check"
            checked={this.state.check}
            onChange={this.handleCheckChange}
          />
          <label className="form-check-label" htmlFor="check">
            I have read the terms of conduct
          </label>
        </div>
        <div className="submit">
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            disabled={
              !this.state.name ||
              !this.state.decription ||
              !this.state.gender ||
              !this.state.check
            }
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default MyProfile;
