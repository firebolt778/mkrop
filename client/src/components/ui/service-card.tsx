import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow service-card">
      <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-secondary mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <a href="#" className="text-primary font-semibold hover:underline">
        Learn More →
      </a>
    </div>
  );
}
