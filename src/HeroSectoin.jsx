import { useState, useEffect } from "react";

import img1 from "./assets/bluebanner1.png";
import img2 from "./assets/bluebanner2.png";
import img3 from "./assets/bluebanner3.png";

export default function HeroSectoin() {
  const banners = [img1, img2, img3];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slide = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3500);

    return () => clearInterval(slide);
  }, []);

  return (
    <>
      {/* ================= HERO SECTION ================= */}

      <section
        className="
          w-full
          bg-[#020617]
          py-3
        "
      >

        <div
          className="
            w-[540px]
            max-w-full
            mx-auto
            px-3
          "
        >

          {/* ================= BANNER SLIDER ================= */}

          <div
            className="
              relative
              h-[160px]
              overflow-hidden
              rounded-2xl
              shadow-[0_0_20px_rgba(0,200,255,.30)]
            "
          >

            {banners.map((image, index) => (

              <img
                key={index}
                src={image}
                alt={`banner-${index}`}

                className={`
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover

                  transition-all
                  duration-1000
                  ease-in-out

                  ${
                    current === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105"
                  }
                `}
              />

            ))}


            {/* ================= BLUE OVERLAY ================= */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-[#001B4D]/60
                via-transparent
                to-[#00BFFF]/30
              "
            />


            {/* ================= SLIDER DOTS ================= */}

            <div
              className="
                absolute
                bottom-3
                left-1/2
                -translate-x-1/2
                flex
                gap-2
              "
            >

              {banners.map((_, index) => (

                <button
                  key={index}
                  onClick={() => setCurrent(index)}

                  className={`
                    w-2.5
                    h-2.5
                    rounded-full

                    transition-all
                    duration-300

                    ${
                      current === index
                        ? "bg-cyan-300 scale-125 shadow-[0_0_8px_rgba(0,220,255,.8)]"
                        : "bg-white/40 hover:bg-white/70"
                    }
                  `}
                />

              ))}

            </div>

          </div>

        </div>

      </section>
    </>
  );
}