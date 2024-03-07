import ItemsOne from "./ItemsOne";
import ItemsTwo from "./ItemsTwo";

export default function Products() {
  return (
    <div>
      <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <ItemsOne />
        <ItemsTwo />
      </div>
    </div>
  );
}
