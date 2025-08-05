import { useState } from "react";
import PreviewSection from "./components/views/PreviewSection.jsx";
import FormSection from "./components/forms/FormSection.jsx";
import Header from "./components/views/Header.jsx";
import React, { useRef } from "react";
function App() {
  const previewRef = useRef();
  const [data, setData] = useState({
    personal: {
      name: "John Doe",
      phone: "123-456-789",
      email: "john.doe@email.com",
      linkedin: "johnd",
      github: "johnd",
    },
    education: [
      {
        university: "Caltech",
        major: "Bachelor of Science, Major in Computer Science",
        location: "Pasadena, CA",
        startDate: "May 2010",
        endDate: "May 2014",
      },
      {
        university: "Harvard",
        major: "Master of Business Administration",
        location: "Boston, MA",
        startDate: "May 2016",
        endDate: "May 2017",
      },
    ],
    experiences: [
      {
        company: "Apple",
        position: "Software Engineer",
        startDate: "Jun 2017",
        endDate: "now",
        location: "San Jose, CA",
        description: [
          "Designed scalable backend services for iCloud and Apple Pay.",
          "Developed UI components for internal monitoring dashboards.",
        ],
      },
      {
        company: "Microsoft",
        position: "Junior Software Engineer",
        startDate: "Jun 2014",
        endDate: "May 2017",
        location: "Seattle, WA",
        description: [
          "Maintained core features for Office 365 web apps.",
          "Supported migration of legacy systems to modern frameworks.",
        ],
      },
    ],
    projects: [
      {
        name: "SmartHome AI",
        tools: "React, Node.js",
        description: [
          "Built a voice-activated home automation dashboard.",
          "Integrated device control APIs with secure authentication.",
        ],
      },
      {
        name: "DevTrack",
        tools: "Django, PostgreSQL",
        description: [
          "Created a bug tracking system used by internal QA teams.",
          "Implemented user roles, issue tagging, and analytics reports.",
        ],
      },
    ],
    skills: {
      languages: "JavaScript, Python, Java, SQL",
      frameworks: "React, Node.js, Django, Express",
      tools: "Git, Docker, AWS, Jenkins",
      softSkills: "Communication, Agile teamwork, Problem-solving",
    },
  });

  return (
    <>
      <Header previewRef={previewRef} />

      <div className="flex flex-col xl:flex-row justify-around gap-3 bg-gray-800">
        <div>
          <FormSection data={data} setData={setData} />
        </div>
        <div ref={previewRef}>
          <PreviewSection data={data} />
        </div>
      </div>
    </>
  );
}

export default App;
