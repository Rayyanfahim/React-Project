import Products from "../Products";
import Header from "./Header";

export default function Main() {
  return (
    <div>
      <main className="my-10 lg:my-14">
        <Header />
        <Products />
      </main>
    </div>
  );
}
