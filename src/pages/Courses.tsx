
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";

const coursesData = [
  {
    id: 1,
    title: "أساسيات البرمجة بلغة جافاسكريبت",
    instructor: "د. محمد أحمد",
    level: "مبتدئ",
    duration: "٨ ساعات",
    image: "https://via.placeholder.com/300x200",
    price: "٢٠٠ ج.م",
    rating: 4.7,
    students: 1240
  },
  {
    id: 2,
    title: "مقدمة في علم البيانات",
    instructor: "د. سارة محمود",
    level: "متوسط",
    duration: "١٢ ساعة",
    image: "https://via.placeholder.com/300x200",
    price: "٣٠٠ ج.م",
    rating: 4.8,
    students: 950
  },
  {
    id: 3,
    title: "تطوير تطبيقات الويب",
    instructor: "م. أحمد خالد",
    level: "متقدم",
    duration: "١٥ ساعة",
    image: "https://via.placeholder.com/300x200",
    price: "٣٥٠ ج.م",
    rating: 4.6,
    students: 820
  },
  {
    id: 4,
    title: "تصميم واجهات المستخدم",
    instructor: "أ. ليلى حسن",
    level: "مبتدئ",
    duration: "١٠ ساعات",
    image: "https://via.placeholder.com/300x200",
    price: "٢٥٠ ج.م",
    rating: 4.9,
    students: 1560
  },
  {
    id: 5,
    title: "الذكاء الاصطناعي للمبتدئين",
    instructor: "د. عمر فاروق",
    level: "متوسط",
    duration: "١٤ ساعة",
    image: "https://via.placeholder.com/300x200",
    price: "٤٠٠ ج.م",
    rating: 4.7,
    students: 680
  },
  {
    id: 6,
    title: "أساسيات التسويق الرقمي",
    instructor: "أ. نور الدين",
    level: "مبتدئ",
    duration: "٨ ساعات",
    image: "https://via.placeholder.com/300x200",
    price: "٢٢٥ ج.م",
    rating: 4.5,
    students: 1120
  }
];

const Courses = () => {
  return (
    <>
      <Helmet>
        <title>تصفح الدورات | إيدو برو</title>
        <meta name="description" content="استعرض مجموعتنا الواسعة من الدورات التعليمية عبر الإنترنت." />
      </Helmet>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">استكشف الدورات</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              تصفح مجموعتنا الواسعة من الدورات التعليمية المصممة لتطوير مهاراتك وتعزيز معرفتك.
            </p>
          </div>
          
          <div className="mb-8 flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
              <div className="relative rounded-md shadow-sm">
                <input
                  type="text"
                  className="block w-full rounded-md border-gray-300 pr-10 focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                  placeholder="ابحث عن دورة..."
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4 space-x-reverse">
              <select className="block w-full rounded-md border-gray-300 py-2 pr-3 pl-10 text-base focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm">
                <option value="">جميع المستويات</option>
                <option value="beginner">مبتدئ</option>
                <option value="intermediate">متوسط</option>
                <option value="advanced">متقدم</option>
              </select>
              
              <select className="block w-full rounded-md border-gray-300 py-2 pr-3 pl-10 text-base focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm">
                <option value="">جميع الفئات</option>
                <option value="programming">برمجة</option>
                <option value="design">تصميم</option>
                <option value="business">أعمال</option>
                <option value="marketing">تسويق</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coursesData.map((course) => (
              <div key={course.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-purple-600">{course.level}</span>
                    <span className="text-sm text-gray-500">{course.duration}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.instructor}</p>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-gray-600 mr-1">{course.rating} ({course.students})</span>
                    </div>
                    <span className="font-bold text-gray-900">{course.price}</span>
                  </div>
                  <Button className="w-full">تفاصيل الدورة</Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              تحميل المزيد من الدورات
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
