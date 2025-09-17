export default function SuccessCard({ message }) {
  return (
    <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg shadow-sm">
      <div className="flex-shrink-0 text-green-600">✅</div>
      <p className="text-green-800 font-medium">{message}</p>
    </div>
  );
}
