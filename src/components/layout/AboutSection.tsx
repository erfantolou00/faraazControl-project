import { Award, Cpu, Gauge, Lightbulb, Settings, Shield, Wrench, Zap } from "lucide-react";
import { HomeCard, HomeHeader, HomeSection } from "./section-ui";

export type IconName =
  | "Settings"
  | "Wrench"
  | "Lightbulb"
  | "Zap"
  | "Shield"
  | "Award"
  | "Cpu"
  | "Gauge";

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface AboutSectionProps {
  data: {
    eyebrow: string;
    title: string;
    description: string;
    features: Feature[];
  };
  locale: string;
}

const iconMap = {
  Settings,
  Wrench,
  Lightbulb,
  Zap,
  Shield,
  Award,
  Cpu,
  Gauge,
};

export default function AboutSection({ data }: AboutSectionProps) {
  return (
    <HomeSection>
      <HomeHeader eyebrow={data.eyebrow} title={data.title} description={data.description} />
      <div className="grid gap-4 md:grid-cols-3">
        {data.features.map((feature, index) => {
          const IconComponent = iconMap[feature.icon as IconName] || Zap;
          return (
            <HomeCard
              key={feature.title}
              index={String(index + 1).padStart(2, "0")}
              icon={<IconComponent className="h-5 w-5" />}
              title={feature.title}
              description={feature.description}
            />
          );
        })}
      </div>
    </HomeSection>
  );
}
