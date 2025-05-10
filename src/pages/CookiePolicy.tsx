
import { Separator } from "@/components/ui/separator";

const CookiePolicy = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">سياسة ملفات تعريف الارتباط</h1>
      
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600 mb-6">
          آخر تحديث: 10 مايو 2025
        </p>
        
        <Separator className="my-6" />
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. ما هي ملفات تعريف الارتباط (الكوكيز)؟</h2>
          <p className="text-gray-700">
            ملفات تعريف الارتباط هي ملفات نصية صغيرة يتم تخزينها على جهازك (كمبيوتر، هاتف ذكي، أو جهاز لوحي) عندما تزور مواقع الويب.
            تُستخدم هذه الملفات على نطاق واسع لجعل مواقع الويب تعمل بشكل أكثر كفاءة، وتوفير معلومات لأصحاب الموقع، وتحسين تجربة المستخدم.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. أنواع ملفات تعريف الارتباط التي نستخدمها</h2>
          <p className="text-gray-700 mb-4">
            تستخدم منصة أستاذي أنواعًا مختلفة من ملفات تعريف الارتباط للأغراض التالية:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>ملفات تعريف الارتباط الضرورية:</strong> هذه ضرورية لعمل موقعنا الإلكتروني وتمكينك من التنقل واستخدام ميزاته.</li>
            <li><strong>ملفات تعريف الارتباط الوظيفية:</strong> تسمح لنا بتذكر اختياراتك وتوفير ميزات مخصصة.</li>
            <li><strong>ملفات تعريف الارتباط التحليلية:</strong> تساعدنا في فهم كيفية استخدام الزوار لموقعنا، مما يسمح لنا بتحسين طريقة عمله.</li>
            <li><strong>ملفات تعريف الارتباط للإعلانات:</strong> تُستخدم لتقديم إعلانات أكثر صلة باهتماماتك.</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. كيفية إدارة ملفات تعريف الارتباط</h2>
          <p className="text-gray-700 mb-4">
            يمكنك التحكم في ملفات تعريف الارتباط وإدارتها من خلال إعدادات المتصفح الخاص بك. معظم المتصفحات تسمح لك بما يلي:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>عرض ملفات تعريف الارتباط الموجودة على جهازك وحذفها بشكل فردي.</li>
            <li>حظر ملفات تعريف الارتباط من جهات خارجية أو من مواقع محددة.</li>
            <li>حظر جميع ملفات تعريف الارتباط.</li>
            <li>حذف جميع ملفات تعريف الارتباط عند إغلاق المتصفح.</li>
          </ul>
          <p className="text-gray-700 mt-4">
            يرجى ملاحظة أن حظر أو حذف ملفات تعريف الارتباط قد يؤثر على تجربتك على موقعنا وقد يجعل بعض الميزات غير متاحة.
          </p>
        </section>
        
        {/* يمكن إضافة المزيد من الأقسام حسب الحاجة */}
      </div>
    </div>
  );
};

export default CookiePolicy;
