import type { ProductData } from "../data/product";

type ProductCardProps = {
  product: ProductData;
  onClick: (item: ProductData) => void;
};
const ProductCard = ({ product, onClick }: ProductCardProps) => {
  return (
    <div className="flex flex-col items-center p-6 shadow-md hover:shadow-lg text-center gap-5 w-[400px]">
      <img src={product.image} className="w-[160px] h-[160px] rounded-lg" />
      <h1 className="text-xl text-black">{product.nama}</h1>
      <p className="text-base text-[#FF6666]">Rp.{product.harga}</p>
      <p className="text-[#E5E7EB] text-base">{product.deskripsi}</p>
      <div
        onClick={() => onClick(product)}
        className="cursor-pointer flex justify-center items-center flex-row bg-[#FF6666] py-2.5 px-6 rounded-lg shadow-md hover:scale-105 transition-all gap-1 text-white text-base"
      >
        <img src="./svg/cart_icon.svg" className="h-[16px] w-auto" />
        <p>Buy Now</p>
      </div>
    </div>
  );
};

export default ProductCard;
