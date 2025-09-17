import { useState } from "react";
import LoadingButton from "./LoadingButton";
import SuccessCard from "./SuccessCard";

export default function DbSetup() {
  const [creds, setCreds] = useState({
    host: "",
    user: "",
    password: "",
    database: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const connectDb = async () => {
    setLoading(true);
    setSuccessMsg("");
    try {
      const msg = await window.api.connectDb(creds);
      setSuccessMsg(msg);
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const createTable = async () => {
    setLoading(true);
    setSuccessMsg("");
    try {
      const msg = await window.api.createTable();
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
        Database Setup
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <input
          className="border p-3 rounded-lg"
          placeholder="Host"
          onChange={(e) => setCreds({ ...creds, host: e.target.value })}
        />
        <input
          className="border p-3 rounded-lg"
          placeholder="User"
          onChange={(e) => setCreds({ ...creds, user: e.target.value })}
        />
        <input
          type="password"
          className="border p-3 rounded-lg"
          placeholder="Password"
          onChange={(e) => setCreds({ ...creds, password: e.target.value })}
        />
        <input
          className="border p-3 rounded-lg"
          placeholder="Database"
          onChange={(e) => setCreds({ ...creds, database: e.target.value })}
        />
      </div>

      <div className="flex gap-3">
        <LoadingButton onClick={connectDb} loading={loading} color="green">
          Connect
        </LoadingButton>
        <LoadingButton onClick={createTable} loading={loading} color="blue">
          Create Table
        </LoadingButton>
      </div>

      {successMsg && <SuccessCard message={successMsg} />}
    </section>
  );
}
