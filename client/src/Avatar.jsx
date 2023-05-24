export default function Avatar({ userId, username, online }) {
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
    <div className={"w-7 h-7  relative rounded-full  flex item-center " + color}>
      <div className="text-center w-full opacity-70">{username[0]}</div>
      {online && (
        <div className="absolute w-3 h-3 bg-green-500 bottom-0 right-0 rounded-full border border-white "></div>
      )}
    </div>
    //.toUpperCase() to uppercase profile
  );
}
