export default function SkillForm({ setData }) {
  function handleInputChange(e) {
    const { name, value } = e.target;
    setData((prev) => {
      const updatedSkills = { ...prev.skills };
      switch (name) {
        case "languages":
          updatedSkills.languages = value;
          break;
        case "frameworks":
          updatedSkills.frameworks = value;
          break;
        case "tools":
          updatedSkills.tools = value;
          break;
        case "softSkills":
          updatedSkills.softSkills = value;
          break;
        default:
          break;
      }
      return {
        ...prev,
        skills: updatedSkills,
      };
    });
  }

  return (
    <div className="text-left">
      <h2 className="text-[1.5rem] font-semibold black underline m-2">
        Skills
      </h2>
      <form className="form text-left p-3">
        <div className="grid grid-cols-[150px_1fr] gap-y-3 gap-x-4 items-center">
          <label htmlFor="name">Languages* </label>
          <input
            type="text"
            name="languages"
            id="languages"
            onChange={handleInputChange}
            placeholder="enter languages"
            className="w-64 border border-gray-300 rounded-md"
            required
          />

          <label htmlFor="phone">Frameworks* </label>
          <input
            type="text"
            name="frameworks"
            id="frameworks"
            onChange={handleInputChange}
            placeholder="enter frameworks"
            className="w-64 border border-gray-300 rounded-md"
            required
          />

          <label htmlFor="email">Tools* </label>
          <input
            type="text"
            name="tools"
            id="tools"
            onChange={handleInputChange}
            placeholder="enter tools"
            className="w-64 border border-gray-300 rounded-md"
            required
          />

          <label htmlFor="linkedin">Soft Skills* </label>
          <input
            type="text"
            name="softSkills"
            id="softSkills"
            onChange={handleInputChange}
            placeholder="enter soft skills"
            className="w-64 border border-gray-300 rounded-md"
            required
          />
        </div>
      </form>
    </div>
  );
}
