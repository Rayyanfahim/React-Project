import studentsImage from "../assets/avatar.png";
import { classOne } from "../dataBase.js";

function StudentDetails() {
  const classOneStudents = classOne.map((s) => {
    return (
      <tr className="border-b border-[#7ECEB529]" key={s.id}>
        <td className="p-5 text-sm md:text-xl">{s.id + 1}</td>
        <td className="p-5 text-sm md:text-xl">
          <div className="flex space-x-3 items-center">
            <img
              className="w-8 h-8"
              src={studentsImage}
              width="32"
              height="32"
              alt={s.name}
            />
            <span className="whitespace-nowrap">{s.name}</span>
          </div>
        </td>
        <td className="p-5 text-sm md:text-xl text-center">{s.scores}</td>
        <td className="p-5 text-sm md:text-xl text-center">{s.percentage}</td>
      </tr>
    );
  });
  return <>{classOneStudents}</>;
}

export default function ClassOne() {
  return (
    <>
      <tr className="bg-white/5">
        <td className="p-5 text-sm md:text-xl" colSpan="4">
          ClassName One
        </td>
      </tr>
      <StudentDetails />
    </>
  );
}
