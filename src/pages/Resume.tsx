import React from "react";

const Resume: React.FC = () => {
  return (
    <div className="mt-5 text-center">
      <h1>Resume</h1>
      <p>You can download my resume or view it below.</p>
      <div className="d-flex justify-content-center mt-4">
        <a
          href="/path_to_resume.pdf"
          download="Resume.pdf"
          className="btn btn-primary"
        >
          Download Resume
        </a>
      </div>
      <iframe
        src="/path_to_resume.pdf"
        width="100%"
        height="500px"
        style={{ border: "none", marginTop: "20px" }}
      ></iframe>
    </div>
  );
};

export default Resume;
