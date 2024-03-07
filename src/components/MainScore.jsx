import TableBody from "./TableBody";
import TableHead from "./TableHead";

export default function MainScore() {
  return (
    <div className="max-w-[848px] mx-auto overflow-auto">
      <table className="w-full">
        <TableHead />
        <TableBody />
      </table>
    </div>
  );
}
