export default function PersonalForm({ setData }) {
  function handleInputChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setData((prev) => {
      const updatedPersonal = { ...prev.personal };
      switch (name) {
        case "name":
          updatedPersonal.name = value;
          break;
        case "phone":
          updatedPersonal.phone = value;
          break;
        case "email":
          updatedPersonal.email = value;
          break;
        case "linkedin":
          updatedPersonal.linkedin = value;
          break;
        case "github":
          updatedPersonal.github = value;
          break;
      }
      return {
        ...prev,
        personal: updatedPersonal,
      };
    });
  }

  return (
    <div className="text-left">
      <h2 className="text-[1.5rem] font-semibold black underline m-2">
        Personal Information
      </h2>
      <form className="form text-left p-3">
        <div className="grid grid-cols-[150px_1fr] gap-y-3 gap-x-4 items-center">
          <label htmlFor="name">Full Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleInputChange}
            placeholder="enter name"
            className="w-64 border border-gray-300 rounded-md"
          />

          <label htmlFor="phone">Phone: </label>
          <input
            type="text"
            name="phone"
            id="phone"
            onChange={handleInputChange}
            placeholder="enter phone"
            className="w-64 border border-gray-300 rounded-md"
          />

          <label htmlFor="email">Email: </label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={handleInputChange}
            placeholder="enter email"
            className="w-64 border border-gray-300 rounded-md"
          />

          <label htmlFor="linkedin">LinkedIn: </label>
          <input
            type="text"
            name="linkedin"
            id="linkedin"
            onChange={handleInputChange}
            placeholder="enter LinkedIn"
            className="w-64 border border-gray-300 rounded-md"
          />

          <label htmlFor="github">GitHub: </label>
          <input
            type="text"
            name="github"
            id="github"
            onChange={handleInputChange}
            placeholder="enter GitHub"
            className="w-64 border border-gray-300 rounded-md"
          />
        </div>
      </form>
    </div>
  );
}
