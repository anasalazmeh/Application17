import React from "react";
import Addrees from "./Addrees";
import Form from "./Form";

const ApplicantData = () => {
  return (
    <div>
      <Addrees
        title="Applicant Data"
        discrption="Please take a salfie with your document so that it's clearly visible
          anddoses not cover your face"
      />
      <Form />
    </div>
  );
};

export default ApplicantData;
