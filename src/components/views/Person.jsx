export default function Person({ data }) {
  const { name, phone, email, linkedin, github } = data;
  return (
    <div className="border-b-2 mx-6 my-1">
      <h1 className="text-[2rem] font-semibold text-stone-700">{name}</h1>
      <div className="flex flex-row justify-around px-4 py-2">
        <h3 className="underline">{phone}</h3>
        <h3 className="underline">{email}</h3>
        <h3 className="underline">linkedin.com/{linkedin}</h3>
        <h3 className="underline">github.io/{github}</h3>
      </div>
    </div>
  );
}
