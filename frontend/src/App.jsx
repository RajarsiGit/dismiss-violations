import DbSetup from "./components/DbSetup";
import ExcelUpload from "./components/ExcelUpload";
import RunProcedure from "./components/RunProcedure";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl p-10 space-y-8 border border-gray-100">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 tracking-tight">
          🚀 Dismiss Violations
        </h1>
        <DbSetup />
        <ExcelUpload />
        <RunProcedure />
      </div>
    </div>
  );
}
