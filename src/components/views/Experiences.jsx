import { MdFiberManualRecord } from "react-icons/md";

function ExperiencesEach({ data }) {
  const { position, startDate, endDate, company, location, description } = data;
  return (
    <>
      <div className="grid grid-cols-2" key={company + position}>
        <p className="text-[1.2rem] font-semibold black">{position}</p>
        <p className="text-[1.2rem] font-semibold black justify-self-end">
          {startDate} - {endDate}
        </p>
        <p>{company}</p>
        <p className="justify-self-end">{location}</p>
      </div>
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

export default function Experiences({ data }) {
  return (
    <div className="text-left mx-6 my-1 border-b-2">
      <h2 className="text-[1.5rem] font-semibold black underline mb-2">
        Experiences
      </h2>
      {data.map((data) => {
        return <ExperiencesEach data={data} key={data.company} />;
      })}
    </div>
  );
}
