import ProductsItems from "./ProductsItems";

export default function Products() {
  return (
    <div>
      <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <ProductsItems />
      </div>
    </div>
  );
}
