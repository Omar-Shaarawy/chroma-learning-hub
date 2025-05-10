
import { Separator } from "@/components/ui/separator";

const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">شروط الخدمة</h1>
      
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600 mb-6">
          آخر تحديث: 10 مايو 2025
        </p>
        
        <Separator className="my-6" />
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. مقدمة</h2>
          <p className="text-gray-700">
            مرحبًا بك في منصة أستاذي. يرجى قراءة شروط الخدمة هذه بعناية قبل استخدام موقعنا الإلكتروني وخدماتنا.
            باستخدامك للموقع، فإنك توافق على الالتزام بهذه الشروط. إذا كنت لا توافق على أي من هذه الشروط، فيرجى عدم استخدام خدماتنا.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. استخدام الخدمات</h2>
          <p className="text-gray-700 mb-4">
            تقدم منصة أستاذي خدمات تعليمية عبر الإنترنت للمعلمين والطلاب. باستخدامك لهذه الخدمات، فإنك توافق على ما يلي:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>استخدام الخدمات فقط للأغراض القانونية وبطريقة لا تنتهك حقوق الآخرين.</li>
            <li>عدم نشر أو مشاركة محتوى مخالف للقانون أو مسيء أو تشهيري أو غير لائق.</li>
            <li>عدم محاولة الوصول غير المصرح به إلى أنظمتنا أو شبكاتنا.</li>
            <li>الالتزام بجميع القوانين المعمول بها عند استخدام خدماتنا.</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. حسابات المستخدمين</h2>
          <p className="text-gray-700 mb-4">
            عند إنشاء حساب على منصة أستاذي، فإنك تتحمل مسؤولية:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>توفير معلومات دقيقة وكاملة.</li>
            <li>الحفاظ على سرية كلمة المرور الخاصة بك.</li>
            <li>تحمل المسؤولية عن جميع الأنشطة التي تتم باستخدام حسابك.</li>
            <li>إخطارنا فورًا بأي استخدام غير مصرح به لحسابك.</li>
          </ul>
        </section>
        
        {/* يمكن إضافة المزيد من الأقسام حسب الحاجة */}
      </div>
    </div>
  );
};

export default TermsOfService;
