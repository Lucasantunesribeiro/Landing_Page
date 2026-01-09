import { HONEST_POLICY } from "@/lib/content";
import { Card, CardContent } from "@/components/ui/card";
import { XCircle, CheckCircle2, BarChart3 } from "lucide-react";

const policyIcons = [
  { icon: XCircle, color: "text-red-500", bg: "bg-red-50" },
  { icon: CheckCircle2, color: "text-green-600", bg: "bg-green-50" },
  { icon: BarChart3, color: "text-blue-600", bg: "bg-blue-50" },
];

export function HonestPolicy() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 via-white to-gray-50 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-green-100 mb-6">
            <BarChart3 className="w-8 h-8 text-gray-700" />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            {HONEST_POLICY.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600 sm:text-xl">
            {HONEST_POLICY.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {HONEST_POLICY.items.map((item, index) => {
            const IconComponent = policyIcons[index]?.icon || BarChart3;
            const iconColor = policyIcons[index]?.color || "text-gray-600";
            const iconBg = policyIcons[index]?.bg || "bg-gray-50";
            
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-2xl bg-white text-center"
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 ${iconBg} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <CardContent className="p-8 relative">
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className={`w-20 h-20 rounded-2xl ${iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-10 h-10 ${iconColor}`} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-950 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
