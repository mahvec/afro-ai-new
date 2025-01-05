import back from "/products.jpg";

export default function ProductHero() {
  return (
    <main
      style={{ backgroundImage: `url(${back})` }}
      className="h-[50vh] bg-cover bg-no-repeat w-full bg-center"
    >
      <div className="container flex items-center h-full text-[48px] mx-auto font-bold">
        <p className="flex items-center gap-4 text-white">
          <span>Our</span>
          <span className="text-[#67e8bc]">Products</span>
        </p>
      </div>
    </main>
  );
}
