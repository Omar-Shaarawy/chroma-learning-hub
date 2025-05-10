
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video } from "lucide-react";

const VideoLessons = () => {
  // Mock video lessons
  const videoLessons = [
    {
      id: 1,
      title: "مقدمة في التدريس عبر الإنترنت",
      duration: "15 دقيقة",
      instructor: "أحمد محمد",
      level: "مبتدئ"
    },
    {
      id: 2,
      title: "كيفية استخدام أدوات التدريس التفاعلية",
      duration: "20 دقيقة",
      instructor: "سارة أحمد",
      level: "متوسط"
    },
    {
      id: 3,
      title: "إنشاء محتوى تعليمي جذاب",
      duration: "25 دقيقة",
      instructor: "محمود علي",
      level: "متقدم"
    },
    {
      id: 4,
      title: "استراتيجيات لزيادة مشاركة الطلاب",
      duration: "18 دقيقة",
      instructor: "فاطمة حسن",
      level: "متوسط"
    },
    {
      id: 5,
      title: "كيفية تقييم أداء الطلاب عبر الإنترنت",
      duration: "22 دقيقة",
      instructor: "عمر خالد",
      level: "متقدم"
    },
    {
      id: 6,
      title: "تصميم الاختبارات الإلكترونية",
      duration: "17 دقيقة",
      instructor: "ليلى عادل",
      level: "متوسط"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">الدروس المرئية</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoLessons.map((lesson) => (
          <Card key={lesson.id} className="hover:shadow-lg transition-shadow">
            <div className="bg-gray-100 p-8 flex justify-center items-center">
              <Video className="h-12 w-12 text-purple-500" />
            </div>
            <CardHeader>
              <CardTitle className="text-xl">{lesson.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">المدة:</span>
                  <span>{lesson.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">المدرس:</span>
                  <span>{lesson.instructor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">المستوى:</span>
                  <span>{lesson.level}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VideoLessons;
