import React from "react";
import CardTestimonial from "../card";

type PropType = {
  steps?: {
    description: string;
    description2: string;
    role: string;
    company: string;
  }[];
};

const EmblaCarousel: React.FC<PropType> = ({ steps }) => {
  return (
    <div className="overflow-y-auto scrollbar-hidden flex flex-row md:max-h-[500px] lg:max-h-[500px] xl:max-h-[500px]">
      {steps?.map((step, index) => (
        <div className="mb-4" key={index}>
          <CardTestimonial
            description={step.description}
            description2={step.description2}
            role={step.role}
            company={step.company}
          />
        </div>
      ))}
    </div>
  );
};

export default EmblaCarousel;
