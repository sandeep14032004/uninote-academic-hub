
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, LogOut, User, BookOpen, Code, Building, Briefcase, MoreHorizontal } from "lucide-react";

const courses = [
  {
    id: "btech",
    title: "B.Tech",
    description: "Bachelor of Technology - Engineering courses",
    icon: Code,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "mca",
    title: "MCA",
    description: "Master of Computer Applications",
    icon: BookOpen,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "bca",
    title: "BCA",
    description: "Bachelor of Computer Applications",
    icon: Building,
    color: "from-green-500 to-teal-500"
  },
  {
    id: "mba",
    title: "MBA",
    description: "Master of Business Administration",
    icon: Briefcase,
    color: "from-orange-500 to-red-500"
  },
  {
    id: "others",
    title: "Others",
    description: "Additional courses and programs",
    icon: MoreHorizontal,
    color: "from-gray-500 to-slate-500"
  }
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [userName] = useState("Student"); // This would come from auth context

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-uninote-light via-white to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/dashboard" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-uninote-blue to-uninote-purple p-2 rounded-xl">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-uninote-blue to-uninote-purple bg-clip-text text-transparent">
                UniNote
              </span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-700">
                <User className="h-5 w-5" />
                <span className="font-medium">{userName}</span>
              </div>
              <Button 
                variant="outline" 
                onClick={handleLogout}
                className="flex items-center space-x-2 border-red-200 text-red-600 hover:bg-red-50"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Welcome to Your{" "}
            <span className="bg-gradient-to-r from-uninote-blue to-uninote-purple bg-clip-text text-transparent">
              Study Hub
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your course to access semester-wise notes and study materials. 
            Everything you need for academic success, organized and ready to download.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => {
            const IconComponent = course.icon;
            return (
              <Card 
                key={course.id}
                className="group bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                onClick={() => navigate(`/dashboard/${course.id}`)}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${course.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-uninote-blue transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button 
                    className="w-full bg-gradient-to-r from-uninote-blue to-uninote-purple hover:from-uninote-purple hover:to-uninote-blue text-white font-medium rounded-xl transition-all duration-300"
                  >
                    View Semesters
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
