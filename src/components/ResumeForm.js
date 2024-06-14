import React from 'react';

function ResumeForm({ resumeData, setResumeData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData({ ...resumeData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={resumeData.fullName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={resumeData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={resumeData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={resumeData.address}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="summary">Summary</label>
        <textarea
          id="summary"
          name="summary"
          value={resumeData.summary}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="education">Education</label>
        <textarea
          id="education"
          name="education"
          value={resumeData.education}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="experience">Experience</label>
        <textarea
          id="experience"
          name="experience"
          value={resumeData.experience}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="skills">Skills</label>
        <textarea
          id="skills"
          name="skills"
          value={resumeData.skills}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit">Generate Resume</button>
    </form>
  );
}

export default ResumeForm;