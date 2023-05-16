export default function Avatar({ userId, username }) {
  const colors = [
    "bg-blue-200",
    "bg-red-200",
    "bg-green-300",
    "bg-purple-400",
    "bg-yellow-400",
    "bg-teal-200",
  ];
  const color = colors[parseInt(userId, 16) % colors.length];
  return (
    <div className={"w-7 h-7  rounded-full  flex item-center " + color}>
      <div className="text-center w-full opacity-70">{username[0]}</div>
    </div>
    //.toUpperCase() to uppercase profile
  );
}
