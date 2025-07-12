
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-uninote-light via-white to-blue-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-uninote-blue/20 to-uninote-purple/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-uninote-purple/20 to-uninote-blue/20 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        
        {/* Abstract shapes */}
        <svg className="absolute top-20 left-10 w-16 h-16 text-uninote-blue/30" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 10 5.16-.26 9-4.45 9-10V7l-10-5z"/>
        </svg>
        <svg className="absolute bottom-32 right-20 w-12 h-12 text-uninote-purple/30" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-uninote-dark leading-tight">
                All Your University Notes,{" "}
                <span className="bg-gradient-to-r from-uninote-blue to-uninote-purple bg-clip-text text-transparent">
                  One Click Away
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                UniNote helps students access semester-wise and subject-wise notes easily. 
                From B.Tech to MBA – everything you need is here.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-uninote-blue to-uninote-purple hover:from-uninote-purple hover:to-uninote-blue text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-uninote-blue text-uninote-blue hover:bg-uninote-blue hover:text-white px-8 py-6 text-lg font-semibold transition-all duration-300"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-uninote-blue" />
                <span className="text-sm text-gray-600">10,000+ Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-uninote-purple" />
                <span className="text-sm text-gray-600">50+ Courses</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-uninote-blue" />
                <span className="text-sm text-gray-600">Admin Verified</span>
              </div>
            </div>
          </div>

          {/* Right Column - Illustration/Mockup */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              {/* Main mockup container */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200/50">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-uninote-blue to-uninote-purple rounded-lg"></div>
                      <span className="font-semibold text-gray-800">UniNote Dashboard</span>
                    </div>
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  </div>
                  
                  {/* Course cards */}
                  <div className="space-y-3">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-800">Computer Science</h3>
                          <p className="text-sm text-gray-600">Semester 5 • 12 subjects</p>
                        </div>
                        <div className="w-12 h-12 bg-uninote-blue/10 rounded-lg flex items-center justify-center">
                          <BookOpen className="h-6 w-6 text-uninote-blue" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-800">Business Management</h3>
                          <p className="text-sm text-gray-600">Semester 3 • 8 subjects</p>
                        </div>
                        <div className="w-12 h-12 bg-uninote-purple/10 rounded-lg flex items-center justify-center">
                          <BookOpen className="h-6 w-6 text-uninote-purple" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 border border-green-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-800">Engineering</h3>
                          <p className="text-sm text-gray-600">Semester 7 • 15 subjects</p>
                        </div>
                        <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                          <BookOpen className="h-6 w-6 text-green-600" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-uninote-blue to-uninote-purple rounded-2xl shadow-lg flex items-center justify-center animate-float">
                <Zap className="h-8 w-8 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white rounded-xl shadow-lg border border-gray-200 flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
                <Users className="h-6 w-6 text-uninote-purple" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
