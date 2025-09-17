import { useState } from "react";
import LoadingButton from "./LoadingButton";
import SuccessCard from "./SuccessCard";

export default function ExcelUpload() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const uploadExcel = async () => {
    if (!file) {
      alert("Please select a file first");
      return;
    }
    setLoading(true);
    setSuccessMsg("");
    try {
      const buffer = await file.arrayBuffer();
      const uint8Array = new Uint8Array(buffer);
      const msg = await window.api.uploadExcel(uint8Array);
      setSuccessMsg(msg);
    } catch (err) {
      alert("Error uploading Excel: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm space-y-5">
      <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
        Upload Excel
      </h2>
      <div className="flex items-center gap-4">
        <input
          type="file"
          accept=".xlsx,.xls"
          onChange={handleFileChange}
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 bg-white shadow-sm focus:ring-2 focus:ring-purple-500"
        />
        <LoadingButton onClick={uploadExcel} loading={loading} color="purple">
          Upload
        </LoadingButton>
      </div>
      {file && (
        <p className="text-sm text-gray-600">
          Selected: <span className="font-medium">{file.name}</span>
        </p>
      )}
      {successMsg && <SuccessCard message={successMsg} />}
    </section>
  );
}
