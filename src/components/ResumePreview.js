import React, { forwardRef } from 'react';

const ResumePreview = forwardRef(({ resumeData }, ref) => {
  return (
    <div className="resume-preview" ref={ref}>
      <h2>Resume</h2>
      <div id="resumeOutput">
        <h3>{resumeData.fullName}</h3>
        <p><strong>Email:</strong> {resumeData.email}</p>
        <p><strong>Phone:</strong> {resumeData.phone}</p>
        <p><strong>Address:</strong> {resumeData.address}</p>
        <hr />
        <h4>Summary</h4>
        <p>{resumeData.summary}</p>
        <hr />
        <h4>Education</h4>
        <p>{resumeData.education}</p>
        <hr />
        <h4>Experience</h4>
        <p>{resumeData.experience}</p>
        <hr />
        <h4>Skills</h4>
        <p>{resumeData.skills}</p>
      </div>
    </div>
  );
});

export default ResumePreview;