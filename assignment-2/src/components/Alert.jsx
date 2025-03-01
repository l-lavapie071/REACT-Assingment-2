import React from "react";
//display erroe message
const Alert = ({ message }) => {
  return (
    <div className="alert alert-danger" role="alert">
      {message}
    </div>
  );
};

export default Alert;
