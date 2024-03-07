import MainScore from "./MainScore";
import MainSearch from "./MainSearch";

export default function Main() {
  return (
    <section className="py-24 lg:pt-[120px] lg:pb-28">
      <MainSearch />
      <MainScore />
    </section>
  );
}
