import { useEffect, useRef } from "react";
import gsap from "gsap";

function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
  background = "white",
  image = null, 
  imageAlt = "Section illustration",
  imagePosition = "right",
}) {
  const sectionRef = useRef(null);

  const bgClasses = {
    white: "bg-white",
    gray: "bg-accent-50",
    pattern: "bg-accent-50 bg-grid-pattern",
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (el) {
      gsap.fromTo(
        el.querySelectorAll(".animate-section"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`py-16 md:py-24 ${bgClasses[background]} ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16 animate-section">
            {title && <h2 className="section-title mb-4">{title}</h2>}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </div>
        )}

       
        {image ? (
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              imagePosition === "left" ? "lg:grid-flow-col-dense" : ""
            }`}
          >
            {imagePosition === "left" && (
              <div className="animate-section">
                <img
                  src={image}
                  alt={imageAlt}
                  className="rounded-2xl shadow-lg w-full object-cover"
                />
              </div>
            )}

            <div className="animate-section">{children}</div>

            {imagePosition === "right" && (
              <div className="animate-section">
                <img
                  src={image}
                  alt={imageAlt}
                  className="rounded-2xl shadow-lg w-full object-cover"
                />
              </div>
            )}
          </div>
        ) : (
          <div className="animate-section">{children}</div>
        )}
      </div>
    </section>
  );
}

export default Section;
