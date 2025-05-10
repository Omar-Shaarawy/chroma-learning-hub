
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Resources = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">المصادر</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>كتب تعليمية</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              مجموعة متنوعة من الكتب التعليمية التي تساعد المعلمين والطلاب على تحسين مهاراتهم التعليمية.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>أوراق عمل</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              أوراق عمل تفاعلية يمكن للمعلمين استخدامها في الفصل الدراسي أو كواجب منزلي للطلاب.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>مصادر تكنولوجية</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              أدوات وبرامج تعليمية تساعد في تحسين تجربة التعلم وجعلها أكثر تفاعلية وإثارة للاهتمام.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Resources;
