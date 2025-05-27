import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "../componen/ProductCard";
import { greekDrink1L, greekDrink250ml, readyDrink, stick, type ProductData } from "../data/product";

type ProductProps = {
  onClick: (item: ProductData) => void
}

export default function Product({onClick}: ProductProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [maxDrag, setMaxDrag] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      const { scrollWidth, offsetWidth } = sliderRef.current;
      const difference = scrollWidth - offsetWidth;
      setMaxDrag(difference > 0 ? difference : 0);
    }
  }, []);

  return (
    <section className="flex flex-col mt-35 gap-20 w-full justify-center">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-2xl text-[#FF6666] font-semibold">Our Product</h1>
        <p className="text-base text-[#64748B]">
          Explore our range of signature yoghurt, available in delightful
          flavors and sizes.
          <br />
          Choose your favorite and enjoy a healthy treat!
        </p>
      </div>

      <div className="flex flex-col gap-7 text-2xl text-[#FF6666]">
        <h1 className="pl-12 font-medium">Ready Drink (250 ML)</h1>

        <motion.div className="overflow-hidden pl-12 pr-4" ref={sliderRef}>
          <motion.div
            className="flex gap-6 py-2"
            drag={maxDrag > 0 ? "x" : false}
            dragConstraints={{ left: -maxDrag, right: 0 }}
            whileTap={{ cursor: "grabbing" }}
          >
            {readyDrink.map((item, index) => (
              <motion.div
                key={item.nama}
                className="shrink-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={item} onClick={onClick} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <h1 className="pl-12 font-medium">Stick</h1>

        <motion.div className="overflow-hidden pl-12 pr-4" ref={sliderRef}>
          <motion.div
            className="flex gap-6 py-2"
            drag={maxDrag > 0 ? "x" : false}
            dragConstraints={{ left: -maxDrag, right: 0 }}
            whileTap={{ cursor: "grabbing" }}
          >
            {stick.map((item, index) => (
              <motion.div
                key={item.nama}
                className="shrink-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={item} onClick={onClick}/>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <h1 className="pl-12 font-medium">Greek Drink (250 ML)</h1>

        <motion.div className="overflow-hidden pl-12 pr-4" ref={sliderRef}>
          <motion.div
            className="flex gap-6 py-2"
            drag={maxDrag > 0 ? "x" : false}
            dragConstraints={{ left: -maxDrag, right: 0 }}
            whileTap={{ cursor: "grabbing" }}
          >
            {greekDrink250ml.map((item, index) => (
              <motion.div
                key={item.nama}
                className="shrink-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={item} onClick={onClick}/>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <h1 className="pl-12 font-medium">Greek Drink (1000 ML)</h1>

        <motion.div className="overflow-hidden pl-12 pr-4" ref={sliderRef}>
          <motion.div
            className="flex gap-6 py-2 pb-4"
            drag={maxDrag > 0 ? "x" : false}
            dragConstraints={{ left: -maxDrag, right: 0 }}
            whileTap={{ cursor: "grabbing" }}
          >
            {greekDrink1L.map((item, index) => (
              <motion.div
                key={item.nama}
                className="shrink-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={item} onClick={onClick}/>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
