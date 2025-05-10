
import { Helmet } from "react-helmet";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "الخطة الأساسية",
    price: "٢٠٠",
    description: "رفع الدورات المسجلة فقط",
    features: [
      "إنشاء وإدارة الدورات",
      "رفع مقاطع الفيديو المسجلة",
      "رفع المرفقات والملفات",
      "إحصائيات أساسية",
      "دعم فني بالبريد الإلكتروني",
      "شهادات للطلاب",
    ],
    cta: "اشترك الآن",
    popular: false
  },
  {
    name: "الخطة المتقدمة",
    price: "٣٠٠",
    description: "الدورات المسجلة + جلسات البث المباشر",
    features: [
      "جميع ميزات الخطة الأساسية",
      "بث مباشر للمحاضرات",
      "استضافة جلسات تفاعلية",
      "أدوات التفاعل مع الطلاب",
      "إحصائيات متقدمة",
      "دعم فني ذو أولوية",
      "إشعارات للطلاب",
      "تسجيل جلسات البث المباشر",
    ],
    cta: "جرب مجاناً لمدة ١٤ يوم",
    popular: true
  },
  {
    name: "المؤسسات",
    price: "اتصل بنا",
    description: "حلول مخصصة للمؤسسات التعليمية",
    features: [
      "جميع ميزات الخطة المتقدمة",
      "تخصيص العلامة التجارية",
      "إدارة متعددة المستخدمين",
      "تكامل مع الأنظمة الحالية",
      "تدريب شامل",
      "مدير حساب مخصص",
      "تقارير وتحليلات مفصلة",
      "دعم فني على مدار الساعة",
    ],
    cta: "تواصل معنا",
    popular: false
  }
];

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>الأسعار والباقات | إيدو برو</title>
        <meta name="description" content="اطلع على خطط الاشتراك وأسعار منصة إيدو برو للتعليم الإلكتروني." />
      </Helmet>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              أسعار بسيطة وشفافة
            </h1>
            <p className="text-xl text-gray-600">
              اختر الخطة المناسبة لاحتياجاتك التعليمية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-2xl overflow-hidden ${plan.popular ? 'border-2 border-purple-500 shadow-xl' : 'border border-gray-200 shadow'}`}
              >
                {plan.popular && (
                  <div className="bg-purple-500 text-white py-2 text-center text-sm font-medium">
                    الأكثر شيوعاً
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline text-gray-900">
                    <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                    {plan.price !== "اتصل بنا" && <span className="mr-1 text-xl font-semibold">/شهرياً</span>}
                  </div>
                  <p className="mt-4 text-gray-600">{plan.description}</p>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex">
                        <Check className="h-5 w-5 text-purple-500 ml-2" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link to={plan.name === "المؤسسات" ? "/contact" : "/signup"}>
                      <Button 
                        className={`w-full ${plan.popular ? 'bg-purple-600 hover:bg-purple-700' : ''}`}
                        variant={plan.popular ? "default" : "outline"}
                      >
                        {plan.cta}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-16">
            <h2 className="text-2xl font-bold text-center mb-6">الأسئلة الشائعة</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">هل يمكنني تغيير خطتي في أي وقت؟</h3>
                <p className="text-gray-600">نعم، يمكنك الترقية أو تخفيض خطتك في أي وقت. سيتم تعديل الرسوم بشكل نسبي بناءً على الوقت المتبقي في دورة الفوترة الحالية.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">هل هناك عقد طويل الأمد؟</h3>
                <p className="text-gray-600">لا، تعمل جميع خططنا على أساس اشتراك شهري ويمكنك إلغاء الاشتراك في أي وقت.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">هل يمكنني الحصول على فترة تجريبية؟</h3>
                <p className="text-gray-600">نعم، نقدم فترة تجريبية مجانية لمدة 14 يومًا للخطة المتقدمة حتى تتمكن من تجربة جميع الميزات قبل الالتزام.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">هل هناك حد لعدد الطلاب؟</h3>
                <p className="text-gray-600">لا يوجد حد لعدد الطلاب الذين يمكنهم الانضمام إلى دوراتك في أي من خططنا.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
