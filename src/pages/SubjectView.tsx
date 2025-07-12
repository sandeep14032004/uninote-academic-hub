
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { GraduationCap, LogOut, User, ChevronRight, Home, Download, FileText, Search, BookOpen } from "lucide-react";

const SubjectView = () => {
  const { course, semester, subject } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

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

  const getSubjectName = (subjectId: string) => {
    const subjectNames: Record<string, string> = {
      'math1': 'Mathematics I',
      'physics': 'Physics',
      'chemistry': 'Chemistry',
      'english': 'English',
      'dsa': 'Data Structures',
      'dbms': 'DBMS',
      'oop': 'Object Oriented Programming',
      'os': 'Operating Systems'
    };
    return subjectNames[subjectId] || subjectId;
  };

  // Sample notes data
  const notes = [
    {
      id: 1,
      title: "Introduction to Data Structures",
      uploadedBy: "UniNote Team",
      format: "PDF",
      size: "2.5 MB",
      downloads: 1250
    },
    {
      id: 2,
      title: "Arrays and Linked Lists",
      uploadedBy: "Prof. Kumar",
      format: "PDF",
      size: "3.2 MB",
      downloads: 980
    },
    {
      id: 3,
      title: "Stack and Queue Operations",
      uploadedBy: "UniNote Team",
      format: "PDF",
      size: "1.8 MB",
      downloads: 756
    },
    {
      id: 4,
      title: "Tree Data Structures",
      uploadedBy: "Dr. Singh",
      format: "PDF",
      size: "4.1 MB",
      downloads: 1120
    },
    {
      id: 5,
      title: "Graph Algorithms",
      uploadedBy: "UniNote Team",
      format: "PDF",
      size: "3.7 MB",
      downloads: 894
    }
  ];

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDownload = (noteId: number, title: string) => {
    // Simulate download
    console.log(`Downloading note: ${title}`);
    // In a real app, this would trigger the actual download
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
          <Link to={`/dashboard/${course}/${semester}`} className="hover:text-uninote-blue transition-colors">
            Semester {semester}
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="font-medium text-gray-800">{getSubjectName(subject || '')}</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {getSubjectName(subject || '')}{" "}
            <span className="bg-gradient-to-r from-uninote-blue to-uninote-purple bg-clip-text text-transparent">
              Notes
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Download verified study materials and notes for {getSubjectName(subject || '')}.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search notes..."
              className="pl-10 h-12 bg-white/50 border-gray-200 focus:border-uninote-blue rounded-xl"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Notes List */}
        {filteredNotes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNotes.map((note) => (
              <Card 
                key={note.id}
                className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                        {note.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-gray-600">
                        Uploaded by {note.uploadedBy}
                      </CardDescription>
                    </div>
                    <div className="bg-gradient-to-r from-uninote-blue to-uninote-purple p-2 rounded-xl ml-4">
                      <FileText className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <span className="bg-gray-100 px-2 py-1 rounded-full text-xs font-medium">
                      {note.format}
                    </span>
                    <span>{note.size}</span>
                  </div>
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <span>{note.downloads} downloads</span>
                  </div>
                  <Button 
                    onClick={() => handleDownload(note.id, note.title)}
                    className="w-full bg-gradient-to-r from-uninote-blue to-uninote-purple hover:from-uninote-purple hover:to-uninote-blue text-white font-medium rounded-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
              <BookOpen className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No Notes Found</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              {searchQuery 
                ? `No notes match your search for "${searchQuery}"`
                : "No notes have been uploaded for this subject yet. Check back later!"
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubjectView;
