
import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, LogOut, User, ChevronRight, Home, BookOpen } from "lucide-react";

const SemesterView = () => {
  const { course, semester } = useParams();
  const navigate = useNavigate();

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

  const getCourseName = (courseId: string) => {
    const courseNames: Record<string, string> = {
      'btech': 'B.Tech',
      'mca': 'MCA',
      'bca': 'BCA',
      'mba': 'MBA',
      'others': 'Others'
    };
    return courseNames[courseId] || courseId;
  };

  const getSubjects = (courseId: string, sem: string) => {
    // Sample subjects for different courses
    const subjects: Record<string, Record<string, any[]>> = {
      'btech': {
        '1': [
          { id: 'math1', name: 'Mathematics I', description: 'Calculus and Linear Algebra' },
          { id: 'physics', name: 'Physics', description: 'Mechanics and Thermodynamics' },
          { id: 'chemistry', name: 'Chemistry', description: 'Organic and Inorganic Chemistry' },
          { id: 'english', name: 'English', description: 'Technical Communication' }
        ],
        '2': [
          { id: 'math2', name: 'Mathematics II', description: 'Differential Equations' },
          { id: 'programming', name: 'Programming', description: 'C/C++ Programming' },
          { id: 'electronics', name: 'Electronics', description: 'Basic Electronics' },
          { id: 'workshop', name: 'Workshop', description: 'Engineering Practices' }
        ],
        '3': [
          { id: 'dsa', name: 'Data Structures', description: 'Algorithms and Data Structures' },
          { id: 'dbms', name: 'DBMS', description: 'Database Management Systems' },
          { id: 'oop', name: 'OOP', description: 'Object Oriented Programming' },
          { id: 'os', name: 'Operating Systems', description: 'System Programming' }
        ]
      },
      'mca': {
        '1': [
          { id: 'programming', name: 'Programming in C', description: 'Basic Programming Concepts' },
          { id: 'math', name: 'Discrete Mathematics', description: 'Mathematical Foundations' },
          { id: 'computer', name: 'Computer Fundamentals', description: 'Basic Computer Science' },
          { id: 'stats', name: 'Statistics', description: 'Statistical Methods' }
        ]
      }
    };

    return subjects[courseId]?.[sem] || [
      { id: 'subject1', name: 'Subject 1', description: 'Course material and notes' },
      { id: 'subject2', name: 'Subject 2', description: 'Course material and notes' },
      { id: 'subject3', name: 'Subject 3', description: 'Course material and notes' }
    ];
  };

  const subjects = getSubjects(course || '', semester || '');

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
                <span className="font-medium">Student</span>
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

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          <Link to="/dashboard" className="flex items-center hover:text-uninote-blue transition-colors">
            <Home className="h-4 w-4 mr-1" />
            Dashboard
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link to={`/dashboard/${course}`} className="hover:text-uninote-blue transition-colors">
            {getCourseName(course || '')}
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="font-medium text-gray-800">Semester {semester}</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Semester {semester}{" "}
            <span className="bg-gradient-to-r from-uninote-blue to-uninote-purple bg-clip-text text-transparent">
              Subjects
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select a subject to access notes and study materials for {getCourseName(course || '')} Semester {semester}.
          </p>
        </div>

        {/* Subject Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject) => (
            <Card 
              key={subject.id}
              className="group bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              onClick={() => navigate(`/dashboard/${course}/${semester}/${subject.id}`)}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-uninote-blue to-uninote-purple flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-uninote-blue transition-colors">
                  {subject.name}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {subject.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  className="w-full bg-gradient-to-r from-uninote-blue to-uninote-purple hover:from-uninote-purple hover:to-uninote-blue text-white font-medium rounded-xl transition-all duration-300"
                >
                  View Notes
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SemesterView;
