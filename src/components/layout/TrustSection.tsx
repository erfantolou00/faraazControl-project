import { ShieldCheck } from "lucide-react";
import { HomeCard, HomeHeader, HomeSection } from "./section-ui";

interface TrustSectionProps {
  data: {
    eyebrow: string;
    title: string;
    items: { title: string; description: string }[];
  };
  locale: string;
}

export default function TrustSection({ data }: TrustSectionProps) {
  return (
    <HomeSection>
      <HomeHeader eyebrow={data.eyebrow} title={data.title} />
      <div className="grid gap-4 sm:grid-cols-2">
        {data.items.map((item, index) => (
          <HomeCard
            key={item.title}
            index={String(index + 1).padStart(2, "0")}
            icon={<ShieldCheck className="h-5 w-5" />}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </HomeSection>
  );
}
