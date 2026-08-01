import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import "@/styles/product-style.css";
const products = [
  {
    name: "KTWO",
    price: "$120",
    image: "/images/1.png",
    color: "#4562ff",
  },
  {
    name: "KOTKA",
    price: "$120",
    image: "/images/2.png",
    color: "#2db84d",
  },
  {
    name: "KARIBA",
    price: "$120",
    image: "/images/3.png",
    color: "#ff8d2c",
  },
  {
    name: "FLOW",
    price: "$120",
    image: "/images/4.png",
    color: "#444",
  },
  {
    name: "NOVA",
    price: "$120",
    image: "/images/5.png",
    color: "#b71fff",
  },
];

export default function ProductCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: false,
    loop: false,
  });

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);

  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="product-section">
      <div className="carousel-header">
        <h2>EVERYDAY USE</h2>

        <div className="buttons">
          <button onClick={prev}>←</button>
          <button onClick={next}>→</button>
        </div>
      </div>

      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {products.map((item, index) => (
            <div className="embla__slide" key={index}>
              <div className="product-card">
                <img src={item.image} alt="" />

                <div className="product-info">
                  <h3>{item.name}</h3>

                  <span style={{ color: item.color }}>{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
