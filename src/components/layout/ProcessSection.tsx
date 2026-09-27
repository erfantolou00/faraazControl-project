import { HomeCard, HomeHeader, HomeSection } from "./section-ui";

interface ProcessSectionProps {
  data: {
    title: string;
    steps: { number: string; title: string; description: string }[];
  };
  locale: string;
}

export default function ProcessSection({ data }: ProcessSectionProps) {
  return (
    <HomeSection tone="alt">
      <HomeHeader title={data.title} />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {data.steps.map((step) => (
          <HomeCard
            key={step.number}
            icon={<span className="text-sm font-semibold">{step.number}</span>}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </HomeSection>
  );
}
