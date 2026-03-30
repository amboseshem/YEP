export default function Card({ title, value }: any) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h2 className="text-gray-500">{title}</h2>
      <p className="text-2xl font-bold text-blue-600">{value}</p>
    </div>
  );
}