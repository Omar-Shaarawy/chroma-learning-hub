
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Video, CreditCard } from "lucide-react";

const Dashboard = () => {
  // Mock data for dashboard
  const stats = [
    { name: "إجمالي الدورات", value: "12", icon: BookOpen, color: "text-blue-500" },
    { name: "إجمالي الطلاب", value: "254", icon: Users, color: "text-green-500" },
    { name: "جلسات البث", value: "8", icon: Video, color: "text-purple-500" },
    { name: "الربح الشهري", value: "1,200 ج.م", icon: CreditCard, color: "text-orange-500" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">لوحة التحكم</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-md font-medium">{stat.name}</CardTitle>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>أحدث الدورات</CardTitle>
          </CardHeader>
          <CardContent>
            {[1, 2, 3].map((course) => (
              <div key={course} className="py-2 border-b last:border-0">
                <p className="font-medium">دورة تعليمية #{course}</p>
                <p className="text-sm text-gray-500">تم الإضافة منذ {course} أيام</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>نشاط الطلاب</CardTitle>
          </CardHeader>
          <CardContent>
            {[1, 2, 3].map((activity) => (
              <div key={activity} className="py-2 border-b last:border-0">
                <p className="font-medium">تعليق جديد على الدورة #{activity}</p>
                <p className="text-sm text-gray-500">منذ {activity * 2} ساعات</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
