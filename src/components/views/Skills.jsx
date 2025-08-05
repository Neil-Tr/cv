import { MdFiberManualRecord } from "react-icons/md";
export default function Skills({ data }) {
  const { languages, frameworks, tools, softSkills } = data;
  return (
    <div className="text-left mx-6 my-1 border-b-2">
      <h2 className="text-[1.5rem] font-semibold black underline mb-2">
        Skills
      </h2>{" "}
      <p className="flex flex-row gap-x-2 items-center">
        <MdFiberManualRecord className="text-[0.5rem] black ml-8" />
        {languages}
      </p>
      <p className="flex flex-row gap-x-2 items-center">
        <MdFiberManualRecord className="text-[0.5rem] black ml-8" />
        {frameworks}
      </p>
      <p className="flex flex-row gap-x-2 items-center">
        <MdFiberManualRecord className="text-[0.5rem] black ml-8" />
        {tools}
      </p>
      <p className="flex flex-row gap-x-2 items-center">
        <MdFiberManualRecord className="text-[0.5rem] black ml-8" />
        {softSkills}
      </p>
    </div>
  );
}
