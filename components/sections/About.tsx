import { ABOUT } from "@/lib/content";
import { Card, CardContent } from "@/components/ui/card";
import { User, Code, Rocket, MessageSquare } from "lucide-react";

export function About() {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-green-50/30 to-white lg:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full opacity-20 blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-gray-200 shadow-2xl bg-white/80 backdrop-blur-sm overflow-hidden group hover:shadow-3xl transition-all duration-300">
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-blue-500/0 to-green-500/0 group-hover:from-green-500/10 group-hover:via-blue-500/10 group-hover:to-green-500/10 transition-all duration-500" />
            
            <CardContent className="p-8 md:p-12 relative">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Avatar/Icon */}
                <div className="flex-shrink-0 relative">
                  {ABOUT.image ? (
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 rounded-full blur-xl opacity-50 animate-pulse" />
                      <img
                        src={ABOUT.image}
                        alt={ABOUT.name}
                        className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl"
                      />
                    </div>
                  ) : (
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 rounded-full blur-xl opacity-50 animate-pulse" />
                      <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center shadow-xl border-4 border-white">
                        <User className="w-16 h-16 text-white" />
                      </div>
                    </div>
                  )}
                  
                  {/* Badge decoration */}
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                    <Rocket className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-semibold text-green-600 uppercase tracking-wide">
                      Desenvolvedor
                    </span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                    {ABOUT.name}
                  </h2>
                  
                  <p className="text-xl text-green-600 font-semibold mb-6 flex items-center justify-center md:justify-start gap-2">
                    <MessageSquare className="w-5 h-5" />
                    {ABOUT.role}
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {ABOUT.description}
                  </p>
                  
                  {/* Decorative line */}
                  <div className="mt-6 w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto md:mx-0" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
