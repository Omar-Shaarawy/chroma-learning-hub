
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>من نحن | إيدو برو</title>
        <meta name="description" content="تعرف على فريقنا ورؤيتنا ومهمتنا في إيدو برو." />
      </Helmet>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-center">من نحن</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 mb-6">
                إيدو برو هي منصة تعليمية رائدة تهدف إلى تمكين المعلمين من إنشاء وتقديم محتوى تعليمي عالي الجودة لطلابهم في جميع أنحاء العالم.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">رؤيتنا</h2>
              <p className="text-gray-600 mb-6">
                نسعى لبناء منصة تعليمية متكاملة تمكن المعلمين من مشاركة معرفتهم وخبراتهم بطريقة سهلة وفعالة، وتساعد الطلاب على الوصول إلى محتوى تعليمي عالي الجودة بغض النظر عن موقعهم الجغرافي.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">مهمتنا</h2>
              <p className="text-gray-600 mb-6">
                توفير منصة سهلة الاستخدام تمكن المعلمين من إنشاء دورات تعليمية احترافية، وتقديم محاضرات مباشرة، وتفاعل مع الطلاب بطرق مبتكرة، مع توفير أدوات تحليلية متقدمة لتحسين المحتوى التعليمي باستمرار.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">قيمنا</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>الجودة: نلتزم بتقديم منصة عالية الجودة وسهلة الاستخدام.</li>
                <li>الابتكار: نسعى دائماً لتطوير حلول مبتكرة للتحديات التعليمية.</li>
                <li>الشمولية: نعمل على جعل التعليم متاحاً للجميع بغض النظر عن خلفياتهم.</li>
                <li>التعاون: نؤمن بقوة التعاون بين المعلمين والطلاب لتحقيق أفضل النتائج.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">فريقنا</h2>
              <p className="text-gray-600 mb-6">
                يضم فريقنا مجموعة من الخبراء في مجالات التعليم والتكنولوجيا والتصميم، يجمعنا شغف مشترك لتحسين تجربة التعليم الإلكتروني وجعلها أكثر فاعلية وجاذبية.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
