
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Calendar, CheckCircle } from "lucide-react";

const Payments = () => {
  // Mock data for subscription
  const subscription = {
    status: "active",
    plan: "الخطة B",
    price: "300",
    nextBilling: "15 يونيو 2025",
    paymentMethod: "فيزا تنتهي بـ 4242",
    isFreeTrial: true,
    trialEndsAt: "15 يونيو 2025"
  };

  // Mock data for payment history
  const paymentHistory = [
    { id: 1, date: "15 مايو 2025", amount: "300 ج.م", status: "مدفوع", plan: "الخطة B" },
    { id: 2, date: "15 أبريل 2025", amount: "300 ج.م", status: "مدفوع", plan: "الخطة B" },
    { id: 3, date: "15 مارس 2025", amount: "300 ج.م", status: "مدفوع", plan: "الخطة B" }
  ];

  // Mock data for subscription plans
  const plans = [
    { id: "a", name: "الخطة A", price: "200", features: ["رفع الدورات المسجلة فقط"], current: false },
    { id: "b", name: "الخطة B", price: "300", features: ["رفع الدورات", "البث المباشر"], current: true },
    { id: "c", name: "الخطة C", price: "400", features: ["كل الميزات", "شهادة رسمية للطلاب", "ترويج الكورس على الصفحة الرئيسية"], current: false }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">المدفوعات</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader className="pb-3 border-b">
              <CardTitle className="text-lg">حالة الاشتراك</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              {subscription.isFreeTrial ? (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4 flex items-start">
                  <Calendar className="h-5 w-5 text-blue-500 ml-2 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-800">أنت في الفترة التجريبية المجانية</h4>
                    <p className="text-sm text-blue-600">تنتهي الفترة التجريبية في {subscription.trialEndsAt}</p>
                  </div>
                </div>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4 flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 ml-2 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-green-800">اشتراكك نشط</h4>
                    <p className="text-sm text-green-600">الفوترة القادمة في {subscription.nextBilling}</p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">الخطة الحالية</p>
                  <p className="font-medium">{subscription.plan}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">السعر الشهري</p>
                  <p className="font-medium">{subscription.price} ج.م</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">تاريخ التجديد</p>
                  <p className="font-medium">{subscription.nextBilling}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">طريقة الدفع</p>
                  <div className="flex items-center">
                    <CreditCard className="h-4 w-4 ml-1 text-gray-400" />
                    <span className="font-medium">{subscription.paymentMethod}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Button variant="outline">تغيير الخطة</Button>
                <Button variant="outline">تحديث طريقة الدفع</Button>
                <Button variant="outline" className="text-red-600 hover:text-red-700">إلغاء الاشتراك</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3 border-b">
              <CardTitle className="text-lg">سجل المدفوعات</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-right">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3">التاريخ</th>
                      <th scope="col" className="px-6 py-3">المبلغ</th>
                      <th scope="col" className="px-6 py-3">الخطة</th>
                      <th scope="col" className="px-6 py-3">الحالة</th>
                      <th scope="col" className="px-6 py-3">الإيصال</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paymentHistory.map((payment) => (
                      <tr key={payment.id} className="bg-white border-b">
                        <td className="px-6 py-4">{payment.date}</td>
                        <td className="px-6 py-4">{payment.amount}</td>
                        <td className="px-6 py-4">{payment.plan}</td>
                        <td className="px-6 py-4">
                          <span className="bg-green-100 text-green-800 text-xs font-medium rounded-full px-2 py-1">
                            {payment.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <Button variant="link" size="sm" className="p-0 h-auto">
                            تحميل
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardHeader className="pb-3 border-b">
              <CardTitle className="text-lg">خطط الاشتراك</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-4">
                {plans.map((plan) => (
                  <div 
                    key={plan.id} 
                    className={`border rounded-lg p-4 transition-all ${
                      plan.current 
                        ? "border-purple-300 bg-purple-50 ring-2 ring-purple-300" 
                        : "hover:border-gray-300"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">{plan.name}</h3>
                      {plan.current && (
                        <span className="bg-purple-100 text-purple-800 text-xs font-medium rounded-full px-2 py-1">
                          الخطة الحالية
                        </span>
                      )}
                    </div>
                    <p className="text-lg font-bold mb-2">{plan.price} ج.م<span className="text-sm font-normal text-gray-500"> / شهرياً</span></p>
                    <ul className="text-sm space-y-1">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 ml-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {!plan.current && (
                      <Button className="w-full mt-3" size="sm">
                        الترقية إلى هذه الخطة
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Payments;
