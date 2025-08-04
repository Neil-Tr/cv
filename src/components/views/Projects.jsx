import { MdFiberManualRecord } from "react-icons/md";

function ProjectEach({ data }) {
  const { name, tools, description } = data;
  return (
    <>
      <p className="text-[1.2rem] font-semibold black" key={name}>
        {name} | {tools}
      </p>

      <div className="mb-3">
        {description.map((desc, i) => {
          return (
            <p
              className="flex flex-row gap-x-2 items-center"
              key={`${desc}-${i}`}
            >
              <MdFiberManualRecord className="text-[0.5rem] black ml-8" />
              {desc}
            </p>
          );
        })}
      </div>
    </>
  );
}
export default function Projects({ data }) {
  return (
    <div className="text-left mx-6 my-1 border-b-2">
      <h2 className="text-[1.5rem] font-semibold black underline mt-1 mb-2 !mt-0">
        Projects
      </h2>
      {data.map((data) => {
        return <ProjectEach data={data} key={data.name} />;
      })}
    </div>
  );
}
