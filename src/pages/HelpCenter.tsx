
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const HelpCenter = () => {
  // Mock FAQ items
  const faqItems = [
    {
      question: "كيف يمكنني إنشاء حساب جديد؟",
      answer: "يمكنك إنشاء حساب جديد بالنقر على زر 'إنشاء حساب' في الزاوية العلوية اليمنى من الصفحة الرئيسية. ثم قم بإدخال بياناتك الشخصية واتبع الخطوات المطلوبة للتسجيل."
    },
    {
      question: "كيف يمكنني إنشاء دورة تعليمية؟",
      answer: "لإنشاء دورة تعليمية، قم بتسجيل الدخول إلى حسابك، ثم انتقل إلى لوحة التحكم. انقر على 'إنشاء دورة جديدة' واملأ التفاصيل المطلوبة مثل العنوان والوصف والفئة."
    },
    {
      question: "ما هي خطط الاشتراك المتاحة؟",
      answer: "نحن نقدم ثلاث خطط اشتراك: الخطة A بسعر 200 جنيه شهريًا وتتيح رفع الدورات المسجلة فقط، والخطة B بسعر 300 جنيه شهريًا وتتيح رفع الدورات والبث المباشر، والخطة C بسعر 400 جنيه شهريًا وتتضمن كافة الميزات بالإضافة إلى شهادة رسمية للطلاب وترويج الكورس على الصفحة الرئيسية."
    },
    {
      question: "كيف يمكنني التواصل مع الدعم الفني؟",
      answer: "يمكنك التواصل مع فريق الدعم الفني عبر البريد الإلكتروني support@ostazi.com أو من خلال نموذج الاتصال في صفحة 'تواصل معنا'."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">مركز المساعدة</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>روابط سريعة</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="hover:text-purple-500 cursor-pointer">دليل المستخدم</li>
                <li className="hover:text-purple-500 cursor-pointer">أسئلة شائعة</li>
                <li className="hover:text-purple-500 cursor-pointer">استكشاف الأخطاء وإصلاحها</li>
                <li className="hover:text-purple-500 cursor-pointer">تواصل مع الدعم</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">الأسئلة الشائعة</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-right">{item.question}</AccordionTrigger>
                <AccordionContent className="text-right">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
