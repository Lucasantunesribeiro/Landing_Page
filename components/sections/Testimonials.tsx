import { Check, Instagram, MapPin, QrCode, MessageCircle, ArrowRight } from "lucide-react";
import { HOW_PEOPLE_REACH } from "@/lib/content";

const itemIcons = [
  { icon: Instagram, color: "text-pink-600", bg: "bg-pink-50" },
  { icon: MapPin, color: "text-red-600", bg: "bg-red-50" },
  { icon: QrCode, color: "text-blue-600", bg: "bg-blue-50" },
  { icon: MessageCircle, color: "text-green-600", bg: "bg-green-50" },
  { icon: ArrowRight, color: "text-purple-600", bg: "bg-purple-50" },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-blue-50/20 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-green-100 rounded-full opacity-30 blur-3xl" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-blue-100 rounded-full opacity-30 blur-3xl" />
      
      <div className="container mx-auto px-4 max-w-7xl relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-green-100 mb-6">
            <MessageCircle className="w-8 h-8 text-gray-700" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            {HOW_PEOPLE_REACH.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto" />
        </div>

        {/* Lista de bullets */}
        <div className="max-w-4xl mx-auto">
          <ul className="space-y-4">
            {HOW_PEOPLE_REACH.items.map((item, index) => {
              const iconConfig = itemIcons[index] || { icon: Check, color: "text-green-600", bg: "bg-green-50" };
              const Icon = iconConfig.icon;
              
              return (
                <li
                  key={index}
                  className="group relative"
                >
                  <div className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-green-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    {/* Icon container */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${iconConfig.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                      <Icon className={`w-6 h-6 ${iconConfig.color}`} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <span className="text-lg font-medium text-gray-800 group-hover:text-gray-900 transition-colors">
                        {item}
                      </span>
                    </div>
                    
                    {/* Arrow indicator */}
                    <div className="flex-shrink-0 pt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
