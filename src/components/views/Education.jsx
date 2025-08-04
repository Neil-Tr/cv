function EducationEach({ data }) {
  const { university, major, location, startDate, endDate } = data;
  return (
    <div className="grid grid-cols-2 mb-3" key={university + major}>
      <p className="text-[1.2rem] font-semibold black">{university}</p>
      <p className="text-[1.2rem] font-semibold black justify-self-end">
        {location}
      </p>
      <p>{major}</p>
      <p className="justify-self-end">
        {startDate} - {endDate}
      </p>
    </div>
  );
}

export default function Education({ data }) {
  return (
    <div className="text-left mx-6 my-1 border-b-2">
      <h2 className="text-[1.5rem] font-semibold black underline mb-2">
        Education
      </h2>
      {data.map((data) => {
        return <EducationEach data={data} key={data.university + data.major} />;
      })}
    </div>
  );
}
