import { useState } from "react";
export default function ExperienceForm({ setData, data }) {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState([]);
  const [newDescLine, setNewDescLine] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    switch (name) {
      case "company":
        setCompany(value);
        break;
      case "position":
        setPosition(value);
        break;
      case "startDate":
        setStartDate(value);
        break;
      case "endDate":
        setEndDate(value);
        break;
      case "location":
        setLocation(value);
        break;
      case "description": {
        setNewDescLine(value);
        break;
      }
      default:
        break;
    }
  }

  function addDescription() {
    if (newDescLine.trim() !== "") {
      setDescription((prev) => [...prev, newDescLine]);
      setNewDescLine("");
    }
  }

  function deleteDescription(name) {
    setDescription((prev) => prev.filter((desc) => desc !== name));
  }

  function addExperience(newExperience) {
    const { company, position, startDate, location } = newExperience;
    if (!position || !company || !startDate || !location) return;

    setData((prev) => ({
      ...prev,
      experiences: [...prev.experiences, newExperience],
    }));
  }

  function deleteExperience(company) {
    setData((prev) => ({
      ...prev,
      experiences: [...prev.experiences].filter((exp) => {
        return exp.company !== company;
      }),
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    const newExperience = {
      company,
      position,
      startDate,
      endDate,
      location,
      description,
    };
    addExperience(newExperience);
    setCompany("");
    setPosition("");
    setStartDate("");
    setEndDate("");
    setLocation("");
    setDescription([]);
  }

  return (
    <div className="text-left">
      <h2 className="text-[1.5rem] font-semibold black underline m-2">
        Experiences
      </h2>
      <form className="form text-left p-3" onSubmit={handleSubmit}>
        <div className="grid grid-cols-[150px_1fr] gap-y-3 gap-x-4 items-center">
          <label htmlFor="company">Company: </label>
          <input
            type="text"
            name="company"
            id="company"
            onChange={handleInputChange}
            value={company}
            placeholder="enter company"
            className="w-64 border border-gray-300 rounded-md"
          />

          <label htmlFor="position">Position: </label>
          <input
            type="text"
            name="position"
            id="position"
            onChange={handleInputChange}
            value={position}
            placeholder="enter position"
            className="w-64 border border-gray-300 rounded-md"
          />

          <label htmlFor="startDate">Start Date: </label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            onChange={handleInputChange}
            value={startDate}
            placeholder="enter start date"
            className="w-64 border border-gray-300 rounded-md"
          />

          <label htmlFor="endDate">End Date: </label>
          <input
            type="date"
            name="endDate"
            id="endDate"
            onChange={handleInputChange}
            value={endDate}
            placeholder="enter end date"
            className="w-64 border border-gray-300 rounded-md"
          />

          <label htmlFor="location">Location: </label>
          <input
            type="text"
            name="location"
            id="location"
            onChange={handleInputChange}
            value={location}
            placeholder="enter location"
            className="w-64 border border-gray-300 rounded-md"
          />

          <label htmlFor="description">Description: </label>
          <div className="flex flex-row">
            <textarea
              type="text"
              name="description"
              id="description"
              onChange={handleInputChange}
              value={newDescLine}
              placeholder="enter description"
              className="w-64 border border-gray-300 rounded-md"
            />
            <button
              onClick={addDescription}
              type="button"
              className="text-2xl font-bold text-blue-700 m-2"
            >
              +
            </button>
          </div>
        </div>
        {description.length > 0 ? (
          <div>
            <h4 className="text-[1.2rem]">Added Descriptions</h4>
            <ul className="my-3">
              {description &&
                description.map((desc, i) => {
                  return (
                    <div key={`${desc}-${i}`} className="flex justify-between">
                      <li>{`${i + 1}. ${desc}`}</li>
                      <button
                        type="button"
                        onClick={() => deleteDescription(desc)}
                      >
                        Delete
                      </button>
                    </div>
                  );
                })}
            </ul>
          </div>
        ) : (
          ""
        )}
        <button
          type="submit"
          className="m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
        >
          Add Experience
        </button>
      </form>

      {data.length > 0 && (
        <div className="justify-self-start p-2 text-left">
          <h3 className="text-[1rem] font-semibold black"> All Experiences </h3>
          {data.map((data) => {
            return (
              <div
                key={data.company + data.position}
                className="flex flex-row items-center justify-around mr-8"
              >
                <p className="flex-1">{data.company}</p>
                <button
                  type="button"
                  className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-1 rounded text-sm m-1"
                  onClick={() => deleteExperience(data.company)}
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
