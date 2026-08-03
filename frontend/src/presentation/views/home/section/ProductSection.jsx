import "@/styles/product-style.css";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const products = [
  {
    name: "KTWO",
    price: "$120",
    image: [
      "/layout/background/jacket-1-b.png",
      "/layout/background/jacket-1-w.png",
    ],
    color: ["#000", "#fff"],
  },
  {
    name: "KOTKA",
    price: "$120",
    image: [
      "/layout/background/jacket-1-b.png",
      "/layout/background/jacket-1-w.png",
    ],
    color: ["#000", "#fff"],
  },
  {
    name: "KARIBA",
    price: "$120",
    image: [
      "/layout/background/jacket-1-b.png",
      "/layout/background/jacket-1-w.png",
    ],
    color: ["#000", "#fff"],
  },
  {
    name: "FLOW",
    price: "$120",
    image: [
      "/layout/background/jacket-1-b.png",
      "/layout/background/jacket-1-w.png",
    ],
    color: ["#000", "#fff"],
  },
  {
    name: "NOVA",
    price: "$120",
    image: [
      "/layout/background/jacket-1-b.png",
      "/layout/background/jacket-1-w.png",
    ],
    color: ["#4562ff", "#b71fff", "#ff8d2c", "#2db84d", "#ff8d2c"],
  },
];

export default function ProductSection({ setCursorOpen }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: false,
    loop: false,
  });
  const [activeImages, setActiveImages] = useState({});

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateButtons = useCallback(() => {
    if (!emblaApi) return;

    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    updateButtons();

    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);

    return () => {
      emblaApi.off("select", updateButtons);
      emblaApi.off("reInit", updateButtons);
    };
  }, [emblaApi, updateButtons]);

  console.log(canPrev, canNext);
  return (
    <div className="product-section">
      <div className="product-top">
        <h2>THE MONOCHROME CHAPTER</h2>
        <div className="product-button">Shop Now</div>
      </div>
      <div className="product-bottom">
        <div
          className="embla"
          ref={emblaRef}
          onMouseEnter={() => setCursorOpen(true)}
          onMouseLeave={() => setCursorOpen(false)}
        >
          <div className="embla__container">
            {products.map((item, index) => (
              <div className="embla__slide" key={index}>
                <div
                  className={`product-card ${activeImages[index] ? "active" : ""}`}
                >
                  <div className="product-img">
                    <img
                      key={index}
                      src={item.image[activeImages[index] ?? 0]}
                      alt=""
                    />
                  </div>

                  <div className="product-info">
                    <div className="product-info-top">
                      <h3>{item.name}</h3>

                      <span>{item.price}</span>
                    </div>
                    <div className="product-info-bottom">
                      {item.color.map((color, colorIndex) => (
                        <div
                          style={{ backgroundColor: color }}
                          className="product-color"
                          key={colorIndex}
                          onClick={() =>
                            setActiveImages((prev) => ({
                              ...prev,
                              [index]: colorIndex,
                            }))
                          }
                          onMouseEnter={() => setCursorOpen(false)}
                          onMouseLeave={() => setCursorOpen(true)}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="a"></div>
    </div>
  );
}
