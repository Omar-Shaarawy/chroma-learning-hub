
import { Separator } from "@/components/ui/separator";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">سياسة الخصوصية</h1>
      
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600 mb-6">
          آخر تحديث: 10 مايو 2025
        </p>
        
        <Separator className="my-6" />
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. المقدمة</h2>
          <p className="text-gray-700">
            تلتزم منصة أستاذي بحماية خصوصية مستخدميها. توضح سياسة الخصوصية هذه كيفية جمعنا واستخدامنا للمعلومات الشخصية
            عند استخدامك لموقعنا وخدماتنا. باستخدامك للموقع، فإنك توافق على جمع واستخدام المعلومات وفقًا لهذه السياسة.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. المعلومات التي نجمعها</h2>
          <p className="text-gray-700 mb-4">
            نقوم بجمع أنواع مختلفة من المعلومات لأغراض متنوعة لتوفير وتحسين خدماتنا، بما في ذلك:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>معلومات التعريف الشخصية: الاسم، عنوان البريد الإلكتروني، رقم الهاتف، العنوان.</li>
            <li>معلومات الدفع: تفاصيل بطاقة الائتمان، سجلات المعاملات (يتم معالجتها بشكل آمن عبر معالج دفع خارجي).</li>
            <li>معلومات الاستخدام: كيفية استخدامك لموقعنا وخدماتنا، الميزات التي تستخدمها، والوقت الذي تقضيه.</li>
            <li>معلومات الجهاز: نوع الجهاز، نظام التشغيل، متصفح الويب، عنوان IP.</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. كيفية استخدامنا للمعلومات</h2>
          <p className="text-gray-700 mb-4">
            نستخدم المعلومات التي نجمعها للأغراض التالية:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>توفير وصيانة خدماتنا.</li>
            <li>إخطارك بالتغييرات في خدماتنا.</li>
            <li>تمكينك من المشاركة في الميزات التفاعلية لخدماتنا عندما تختار ذلك.</li>
            <li>تقديم الدعم للعملاء.</li>
            <li>جمع التحليلات لتحسين خدماتنا.</li>
            <li>مراقبة استخدام خدماتنا.</li>
            <li>اكتشاف ومنع الاحتيال.</li>
          </ul>
        </section>
        
        {/* يمكن إضافة المزيد من الأقسام حسب الحاجة */}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
