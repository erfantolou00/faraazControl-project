import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  CircuitBoard,
  Cpu,
  Factory,
  Gauge,
  Lightbulb,
  Settings,
  Shield,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";
import { HomeCard, HomeHeader, HomeSection } from "./section-ui";

export type IconName =
  | "Settings"
  | "Wrench"
  | "Lightbulb"
  | "Zap"
  | "Shield"
  | "Award"
  | "Cpu"
  | "Gauge"
  | "Workflow"
  | "CircuitBoard"
  | "Factory";

export interface Service {
  icon: IconName;
  title?: string;
  description?: string;
}

interface ServicesSectionProps {
  data: {
    eyebrow: string;
    title: string;
    learnMore: string;
    services: Array<{
      title?: string;
      description?: string;
      icon: IconName;
    }>;
  };
  locale: string;
}

const iconMap: Record<IconName, typeof Zap> = {
  CircuitBoard,
  Factory,
  Wrench,
  Zap,
  Shield,
  Lightbulb,
  Cpu,
  Gauge,
  Workflow,
  Settings,
  Award,
};

export default function ServicesSection({ data, locale }: ServicesSectionProps) {
  const isRtl = locale === "fa";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <HomeSection tone="alt">
      <HomeHeader eyebrow={data.eyebrow} title={data.title} />
      <div className="grid gap-4 md:grid-cols-3">
        {data.services?.map((service, index) => {
          const Icon = iconMap[service.icon] || Zap;
          return (
            <HomeCard
              key={service.title || index}
              index={String(index + 1).padStart(2, "0")}
              icon={<Icon className="h-5 w-5" />}
              title={service.title || ""}
              description={service.description || ""}
              footer={
                <Link
                  href={`/${locale}/services`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  {data.learnMore}
                  <ArrowIcon className="h-4 w-4" />
                </Link>
              }
            />
          );
        })}
      </div>
    </HomeSection>
  );
}
