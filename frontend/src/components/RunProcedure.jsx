import { useState } from "react";
import LoadingButton from "./LoadingButton";
import SuccessCard from "./SuccessCard";

export default function RunProcedure() {
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const runProcedure = async () => {
    setLoading(true);
    setSuccessMsg("");
    try {
      const msg = await window.api.runProcedure();
      setSuccessMsg(msg);
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm space-y-5">
      <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
        Run Stored Procedure
      </h2>
      <LoadingButton onClick={runProcedure} loading={loading} color="red">
        Execute Procedure
      </LoadingButton>
      {successMsg && <SuccessCard message={successMsg} />}
    </section>
  );
}
