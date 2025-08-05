import { useReactToPrint } from "react-to-print";
export default function Header({ previewRef }) {
  const handlePrint = useReactToPrint({
    contentRef: previewRef,
    documentTitle: "PreviewSection",
  });

  return (
    <div>
      <header className="flex justify-around items-center mb-2 p-2 bg-gray-100 border-b">
        <h1 className="text-xl font-bold">CV Builder</h1>
        <button
          onClick={handlePrint}
          className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Print Preview as PDF
        </button>
      </header>
    </div>
  );
}
