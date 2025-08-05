import { useState } from "react";
import { format } from "date-fns";

export default function EducationForm({ setData, data }) {
  const [university, setUniversity] = useState("");
  const [major, setMajor] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    switch (name) {
      case "university":
        setUniversity(value);
        break;
      case "major":
        setMajor(value);
        break;
      case "location":
        setLocation(value);
        break;
      case "startDate":
        setStartDate(value);
        break;
      case "endDate":
        setEndDate(value);
        break;
      default:
        break;
    }
  }
  function addNewEducation(newEducation) {
    const { university, major, location, startDate, endDate } = newEducation;
    if (!university || !major || !location || !startDate || !endDate) return;
    setData((prev) => ({
      ...prev,
      education: [...prev.education, newEducation],
    }));
  }

  function deleteEducation(university) {
    setData((prev) => ({
      ...prev,
      education: [...prev.education].filter((edu) => {
        return edu.university !== university;
      }),
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newEducation = {
      university,
      major,
      location,
      startDate: startDate ? format(new Date(startDate), "MMM yyyy") : "",
      endDate: endDate ? format(new Date(endDate), "MMM yyyy") : "now",
    };
    addNewEducation(newEducation);
    setUniversity("");
    setMajor("");
    setLocation("");
    setStartDate("");
    setEndDate("");
  }

  return (
    <div className="text-left">
      <h2 className="text-[1.5rem] font-semibold black underline m-2">
        Education
      </h2>
      <form className="form text-left p-3" onSubmit={handleSubmit}>
        <div className="grid grid-cols-[150px_1fr] gap-y-3 gap-x-4 items-center">
          <label htmlFor="university">University* </label>
          <input
            type="text"
            name="university"
            id="university"
            onChange={handleInputChange}
            value={university}
            placeholder="enter university"
            className="w-64 border border-gray-300 rounded-md"
            required
          />

          <label htmlFor="major">Major* </label>
          <input
            type="text"
            name="major"
            id="major"
            onChange={handleInputChange}
            value={major}
            placeholder="enter major"
            className="w-64 border border-gray-300 rounded-md"
            required
          />

          <label htmlFor="location">Location* </label>
          <input
            type="text"
            name="location"
            id="location"
            onChange={handleInputChange}
            value={location}
            placeholder="enter location"
            className="w-64 border border-gray-300 rounded-md"
            required
          />

          <label htmlFor="startDate">Start Date* </label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            onChange={handleInputChange}
            value={startDate}
            placeholder="enter start date"
            className="w-64 border border-gray-300 rounded-md"
            required
          />

          <label htmlFor="endDate">End Date </label>
          <input
            type="date"
            name="endDate"
            id="endDate"
            onChange={handleInputChange}
            value={endDate}
            placeholder="enter end date"
            className="w-64 border border-gray-300 rounded-md"
          />

          <button
            type="submit"
            className="m-3 bg-gray-200 hover:bg-gray-400 text-gray-800 text-sm font-bold py-1 px-2 rounded"
          >
            Add Education
          </button>
        </div>
      </form>
      {data.length > 0 && (
        <div className="justify-self-start p-2 text-left min-w-full">
          <h3 className="text-[1rem] font-semibold black"> All Education </h3>
          {data.map((data) => {
            return (
              <div
                key={data.university + data.major}
                className="flex flex-row items-center justify-around mr-8"
              >
                <p className="flex-1">{data.university}</p>
                <button
                  type="button"
                  className="bg-gray-200 hover:bg-gray-400 text-gray-800 py-1 px-1 rounded text-sm m-1"
                  onClick={() => deleteEducation(data.university)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
