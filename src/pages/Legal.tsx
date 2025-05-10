
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Legal = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">المعلومات القانونية</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-3">شروط الخدمة</h2>
            <p className="text-gray-600 mb-4">
              تعرف على شروط استخدام منصة أستاذي وما هي حقوقك ومسؤولياتك كمستخدم.
            </p>
            <Link to="/terms-of-service" className="text-purple-600 hover:text-purple-800 font-medium">
              عرض شروط الخدمة &larr;
            </Link>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-3">سياسة الخصوصية</h2>
            <p className="text-gray-600 mb-4">
              كيف نجمع ونستخدم ونحمي معلوماتك الشخصية عند استخدام منصة أستاذي.
            </p>
            <Link to="/privacy-policy" className="text-purple-600 hover:text-purple-800 font-medium">
              عرض سياسة الخصوصية &larr;
            </Link>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-3">سياسة ملفات تعريف الارتباط</h2>
            <p className="text-gray-600 mb-4">
              كيف نستخدم ملفات تعريف الارتباط (الكوكيز) لتحسين تجربتك على منصة أستاذي.
            </p>
            <Link to="/cookie-policy" className="text-purple-600 hover:text-purple-800 font-medium">
              عرض سياسة ملفات تعريف الارتباط &larr;
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Legal;
