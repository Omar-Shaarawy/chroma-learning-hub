
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Blog = () => {
  // Mock blog posts
  const blogPosts = [
    {
      id: 1,
      title: "كيفية إنشاء دورة تعليمية ناجحة",
      excerpt: "نصائح وإرشادات لإنشاء دورات تعليمية تجذب الطلاب وتحقق نتائج ممتازة.",
      date: "10 مايو 2025",
      author: "أحمد محمد"
    },
    {
      id: 2,
      title: "أفضل الممارسات للتدريس عبر الإنترنت",
      excerpt: "تعرف على أفضل الممارسات والاستراتيجيات للتدريس الفعال عبر الإنترنت.",
      date: "5 مايو 2025",
      author: "سارة أحمد"
    },
    {
      id: 3,
      title: "كيف تزيد من مشاركة الطلاب في الفصول الافتراضية",
      excerpt: "استراتيجيات مثبتة لزيادة تفاعل ومشاركة الطلاب في بيئات التعلم الافتراضية.",
      date: "1 مايو 2025",
      author: "محمود علي"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">المدونة</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl">{post.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="text-sm text-gray-500">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.author}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;
