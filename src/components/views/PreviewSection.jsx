import Person from "./Person.jsx";
import Education from "./Education.jsx";
import Experiences from "./Experiences.jsx";
import Projects from "./Projects.jsx";
import Skills from "./Skills.jsx";
export default function PreviewSection({ data }) {
  return (
    <div className="my-3 border-1 min-w-fit border-gray">
      <Person data={data.personal} />
      <Education data={data.education} />
      <Experiences data={data.experiences} />
      <Projects data={data.projects} />
      <Skills data={data.skills} />
    </div>
  );
}
