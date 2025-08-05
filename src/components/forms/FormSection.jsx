import { useState } from "react";
import PersonalForm from "./PersonalForm.jsx";
import EducationForm from "./EducationForm.jsx";
import ExperienceForm from "./ExperienceForm.jsx";
import ProjectForm from "./ProjectForm.jsx";
import SkillForm from "./SkillForm.jsx";
export default function FormSection({ data, setData }) {
  const [showPersonal, setShowPersonal] = useState(true);
  const [showEducation, setShowEducation] = useState(true);
  const [showExperience, setShowExperience] = useState(false);
  const [showProject, setShowProject] = useState(false);
  const [showSkill, setShowSkill] = useState(false);
  return (
    <div className="m-auto min-w-lg bg-white">
      <div>
        <button
          type="button"
          className="flex items-center text-lg font-semibold my-2"
          onClick={() => setShowPersonal((prev) => !prev)}
        >
          <span className="mr-2">{showPersonal ? "▼" : "►"}</span>
          Personal Information
        </button>
        {showPersonal && <PersonalForm setData={setData} />}
      </div>
      <div>
        <button
          type="button"
          className="flex items-center text-lg font-semibold my-2"
          onClick={() => setShowEducation((prev) => !prev)}
        >
          <span className="mr-2">{showEducation ? "▼" : "►"}</span>
          Education
        </button>
        {showEducation && (
          <EducationForm setData={setData} data={data.education} />
        )}
      </div>

      <div>
        <button
          type="button"
          className="flex items-center text-lg font-semibold my-2"
          onClick={() => setShowExperience((prev) => !prev)}
        >
          <span className="mr-2">{showExperience ? "▼" : "►"}</span>
          Experiences
        </button>
        {showExperience && (
          <ExperienceForm setData={setData} data={data.experiences} />
        )}
      </div>

      <div>
        <button
          type="button"
          className="flex items-center text-lg font-semibold my-2"
          onClick={() => setShowProject((prev) => !prev)}
        >
          <span className="mr-2">{showProject ? "▼" : "►"}</span>
          Projects
        </button>
        {showProject && <ProjectForm setData={setData} data={data.projects} />}
      </div>

      <div>
        <button
          type="button"
          className="flex items-center text-lg font-semibold my-2"
          onClick={() => setShowSkill((prev) => !prev)}
        >
          <span className="mr-2">{showSkill ? "▼" : "►"}</span>
          Skills
        </button>
        {showSkill && <SkillForm setData={setData} />}
      </div>
    </div>
  );
}
