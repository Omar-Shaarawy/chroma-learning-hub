
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Plus, Search, Edit, Trash2 } from "lucide-react";

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock course data
  const courses = [
    { id: 1, title: "مقدمة في البرمجة بلغة JavaScript", students: 45, lessons: 12, status: "منشور" },
    { id: 2, title: "تطوير واجهات المستخدم باستخدام React", students: 32, lessons: 15, status: "منشور" },
    { id: 3, title: "أساسيات قواعد البيانات SQL", students: 28, lessons: 10, status: "مسودة" },
    { id: 4, title: "تطوير تطبيقات الويب المتكاملة", students: 0, lessons: 8, status: "مسودة" },
  ];

  const filteredCourses = courses.filter(course => 
    course.title.includes(searchQuery)
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">دوراتي</h1>
        <Button>
          <Plus className="ml-2 h-4 w-4" />
          إنشاء دورة جديدة
        </Button>
      </div>
      
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="البحث عن دورة..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pr-10"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden">
              <div className="h-40 bg-gradient-to-r from-purple-200 to-purple-100 flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-purple-500" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>{course.lessons} دروس</span>
                  <span>{course.students} طالب</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className={`px-2 py-1 rounded text-xs ${
                    course.status === "منشور" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                  }`}>
                    {course.status}
                  </span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
            <BookOpen className="h-16 w-16 text-gray-300 mb-4" />
            <h3 className="text-xl font-medium text-gray-600 mb-1">لا توجد دورات</h3>
            <p className="text-gray-500">قم بإنشاء دورتك الأولى للبدء</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
