import { useState } from "react";
export default function ProjectForm({ setData, data }) {
  const [name, setName] = useState("");
  const [tools, setTools] = useState("");
  const [description, setDescription] = useState([]);
  const [longText, setLongText] = useState("");

  function splitTextByLine(text) {
    return text.split(/\r?\n/).filter((line) => line.trim() !== "");
  }
  function handleInputChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "tools":
        setTools(value);
        break;
      case "longText": {
        setLongText(value);
        setDescription(splitTextByLine(value));
        break;
      }
      default:
        break;
    }
  }

  function addProject(newProject) {
    const { name, tools } = newProject;
    if (!name || !tools) return;
    setData((prev) => ({
      ...prev,
      projects: [...prev.projects, newProject],
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    const newProject = {
      name,
      tools,
      description,
    };
    addProject(newProject);
    setName("");
    setTools("");
    setLongText("");
    setDescription([]);
  }

  function deleteProject(name) {
    setData((prev) => ({
      ...prev,
      projects: [...prev.projects].filter((proj) => {
        return proj.name !== name;
      }),
    }));
  }

  return (
    <div className="text-left">
      <h2 className="text-[1.5rem] font-semibold black underline m-2">
        Projects
      </h2>
      <form className="form text-left p-3" onSubmit={handleSubmit}>
        <div className="grid grid-cols-[150px_1fr] gap-y-3 gap-x-4 items-center">
          <label htmlFor="name">Project Name* </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleInputChange}
            value={name}
            placeholder="enter project name"
            className="w-64 border border-gray-300 rounded-md"
            required
          />

          <label htmlFor="tools">Tools* </label>
          <input
            type="text"
            name="tools"
            id="tools"
            onChange={handleInputChange}
            value={tools}
            placeholder="enter tools used in the project"
            className="w-64 border border-gray-300 rounded-md"
            required
          />
          <label htmlFor="longText">Description </label>
          <textarea
            rows={4}
            cols={40}
            name="longText"
            id="longText"
            onChange={handleInputChange}
            value={longText}
            placeholder="description, press Enter to write multiple lines with bullet point"
            className="w-64 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="text-sm m-3 bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded"
        >
          Add Project
        </button>
      </form>
      {data.length > 0 && (
        <div className="justify-self-start p-2 text-left min-w-full">
          <h3 className="text-[1rem] font-semibold black"> All Projects </h3>
          {data.map((data) => {
            return (
              <div
                key={data.name + data.tools}
                className="flex flex-row items-center justify-around mr-8"
              >
                <p className="flex-1">{data.name}</p>
                <button
                  type="button"
                  className="bg-gray-200 hover:bg-gray-400 text-gray-800  py-1 px-1 rounded text-sm m-1"
                  onClick={() => deleteProject(data.name)}
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
