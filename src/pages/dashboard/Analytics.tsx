
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PieChart, BarChart2, TrendingUp, Users, Calendar, Download } from "lucide-react";

const Analytics = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">التحليلات</h1>
        <Button variant="outline">
          <Download className="ml-2 h-4 w-4" />
          تصدير التقرير
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-md font-medium">إجمالي المبيعات</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <TrendingUp className="h-5 w-5 text-green-500 ml-2" />
              <div>
                <p className="text-2xl font-bold">3,600 ج.م</p>
                <p className="text-sm text-green-500">+15% من الشهر الماضي</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-md font-medium">طلاب جدد</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Users className="h-5 w-5 text-blue-500 ml-2" />
              <div>
                <p className="text-2xl font-bold">42</p>
                <p className="text-sm text-blue-500">+8% من الشهر الماضي</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-md font-medium">معدل الإكمال</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <BarChart2 className="h-5 w-5 text-purple-500 ml-2" />
              <div>
                <p className="text-2xl font-bold">68%</p>
                <p className="text-sm text-purple-500">+5% من الشهر الماضي</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-md font-medium">الجلسات المباشرة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-orange-500 ml-2" />
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-orange-500">+2 من الشهر الماضي</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-3 border-b">
            <CardTitle className="text-lg">الإيرادات الشهرية</CardTitle>
            <div className="flex items-center">
              <select className="text-sm border rounded px-2 py-1 bg-white">
                <option>آخر 6 أشهر</option>
                <option>آخر 12 شهر</option>
                <option>هذا العام</option>
              </select>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="h-64 flex items-center justify-center">
              <div className="text-center">
                <BarChart2 className="h-12 w-12 text-gray-300 mx-auto mb-2" />
                <p className="text-gray-500">سيظهر هنا رسم بياني للإيرادات الشهرية</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-3 border-b">
            <CardTitle className="text-lg">توزيع الطلاب</CardTitle>
            <div className="flex items-center">
              <select className="text-sm border rounded px-2 py-1 bg-white">
                <option>حسب الدورة</option>
                <option>حسب البلد</option>
              </select>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="h-64 flex items-center justify-center">
              <div className="text-center">
                <PieChart className="h-12 w-12 text-gray-300 mx-auto mb-2" />
                <p className="text-gray-500">سيظهر هنا رسم بياني دائري لتوزيع الطلاب</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-3 border-b">
          <CardTitle className="text-lg">تقرير أداء الدورات</CardTitle>
          <div className="flex items-center">
            <select className="text-sm border rounded px-2 py-1 bg-white">
              <option>آخر 30 يوم</option>
              <option>آخر 3 أشهر</option>
              <option>هذا العام</option>
            </select>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-right">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">اسم الدورة</th>
                  <th scope="col" className="px-6 py-3">الطلاب</th>
                  <th scope="col" className="px-6 py-3">معدل الإكمال</th>
                  <th scope="col" className="px-6 py-3">متوسط التقييم</th>
                  <th scope="col" className="px-6 py-3">الإيرادات</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 font-medium">مقدمة في البرمجة بلغة JavaScript</td>
                  <td className="px-6 py-4">45</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 ml-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                      <span>75%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className={star <= 4 ? "text-yellow-400" : "text-gray-300"}>★</span>
                      ))}
                      <span className="mr-1">4.0</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">1,500 ج.م</td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 font-medium">تطوير واجهات المستخدم باستخدام React</td>
                  <td className="px-6 py-4">32</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 ml-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '62%' }}></div>
                      </div>
                      <span>62%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className={star <= 5 ? "text-yellow-400" : "text-gray-300"}>★</span>
                      ))}
                      <span className="mr-1">4.7</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">1,280 ج.م</td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 font-medium">أساسيات قواعد البيانات SQL</td>
                  <td className="px-6 py-4">28</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 ml-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                      <span>45%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className={star <= 4 ? "text-yellow-400" : "text-gray-300"}>★</span>
                      ))}
                      <span className="mr-1">4.2</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">820 ج.م</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
