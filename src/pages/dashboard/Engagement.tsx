
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BarChart2, ThumbsUp, MessageSquare } from "lucide-react";

const Engagement = () => {
  // Mock data for student engagement
  const courses = [
    { id: 1, title: "مقدمة في البرمجة بلغة JavaScript", completion: 75, students: 45, reviews: 32 },
    { id: 2, title: "تطوير واجهات المستخدم باستخدام React", completion: 62, students: 32, reviews: 28 },
    { id: 3, title: "أساسيات قواعد البيانات SQL", completion: 45, students: 28, reviews: 15 },
  ];

  // Mock data for recent feedback
  const feedback = [
    { id: 1, student: "محمد أحمد", course: "مقدمة في البرمجة بلغة JavaScript", content: "دورة ممتازة وشرح رائع، استفدت كثيرًا من المحتوى العملي.", rating: 5 },
    { id: 2, student: "سارة محمود", course: "تطوير واجهات المستخدم باستخدام React", content: "محتوى تعليمي عالي الجودة، لكن أتمنى لو كان هناك المزيد من التمارين.", rating: 4 },
    { id: 3, student: "خالد عبدالله", course: "أساسيات قواعد البيانات SQL", content: "شرح واضح ومبسط للمفاهيم المعقدة.", rating: 5 },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">تفاعل الطلاب</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-md font-medium">إجمالي الطلاب</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center">
            <Users className="h-5 w-5 text-blue-500 ml-2" />
            <p className="text-2xl font-bold">105</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-md font-medium">متوسط الإكمال</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center">
            <BarChart2 className="h-5 w-5 text-green-500 ml-2" />
            <p className="text-2xl font-bold">68%</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-md font-medium">التقييمات</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center">
            <ThumbsUp className="h-5 w-5 text-yellow-500 ml-2" />
            <p className="text-2xl font-bold">75</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-md font-medium">التعليقات</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center">
            <MessageSquare className="h-5 w-5 text-purple-500 ml-2" />
            <p className="text-2xl font-bold">124</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>معدل إكمال الدورات</CardTitle>
          </CardHeader>
          <CardContent>
            {courses.map((course) => (
              <div key={course.id} className="mb-4 last:mb-0">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{course.title}</span>
                  <span className="text-gray-500">{course.completion}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-purple-500 h-2.5 rounded-full" 
                    style={{ width: `${course.completion}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>آراء الطلاب الحديثة</CardTitle>
          </CardHeader>
          <CardContent>
            {feedback.map((item) => (
              <div key={item.id} className="mb-4 pb-4 border-b last:mb-0 last:pb-0 last:border-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium">{item.student}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < item.rating ? "text-yellow-400" : "text-gray-300"}>★</span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-1">{item.course}</p>
                <p className="text-sm">{item.content}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>نشاط الطلاب لكل درس</CardTitle>
        </CardHeader>
        <CardContent className="h-80 flex items-center justify-center">
          <div className="text-center">
            <BarChart2 className="h-12 w-12 text-gray-300 mx-auto mb-2" />
            <p className="text-gray-500">سيظهر هنا رسم بياني يوضح التفاعل لكل درس</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Engagement;
