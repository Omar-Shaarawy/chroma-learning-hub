
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Image, FileArchive, File, Upload, Trash2, Download } from "lucide-react";
import { useState } from "react";

const Files = () => {
  const [selectedFile, setSelectedFile] = useState<number | null>(null);

  // Mock data for files
  const files = [
    { id: 1, name: "ملزمة البرمجة بلغة JavaScript.pdf", type: "pdf", size: "2.5 MB", date: "12 مايو 2025" },
    { id: 2, name: "مثال لمشروع React.zip", type: "zip", size: "8.7 MB", date: "10 مايو 2025" },
    { id: 3, name: "شرح الدرس الأول.docx", type: "doc", size: "1.2 MB", date: "8 مايو 2025" },
    { id: 4, name: "واجهة المشروع.png", type: "image", size: "3.5 MB", date: "5 مايو 2025" },
    { id: 5, name: "مصادر إضافية.pdf", type: "pdf", size: "5.1 MB", date: "3 مايو 2025" },
  ];

  // Get file icon based on type
  const getFileIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <FileText className="h-8 w-8 text-red-500" />;
      case "image":
        return <Image className="h-8 w-8 text-blue-500" />;
      case "zip":
        return <FileArchive className="h-8 w-8 text-yellow-500" />;
      case "doc":
        return <FileText className="h-8 w-8 text-purple-500" />;
      default:
        return <File className="h-8 w-8 text-gray-500" />;
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">إدارة الملفات</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader className="pb-3 border-b flex flex-row items-center justify-between">
              <CardTitle className="text-lg">الملفات المرفوعة</CardTitle>
              <Button size="sm">
                <Upload className="h-4 w-4 ml-2" />
                رفع ملف جديد
              </Button>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-right">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3">الملف</th>
                      <th scope="col" className="px-6 py-3">الحجم</th>
                      <th scope="col" className="px-6 py-3">تاريخ الإضافة</th>
                      <th scope="col" className="px-6 py-3 text-left">إجراءات</th>
                    </tr>
                  </thead>
                  <tbody>
                    {files.map((file) => (
                      <tr 
                        key={file.id} 
                        className={`bg-white border-b hover:bg-gray-50 cursor-pointer ${
                          selectedFile === file.id ? "bg-purple-50" : ""
                        }`}
                        onClick={() => setSelectedFile(file.id)}
                      >
                        <td className="px-6 py-4 font-medium flex items-center">
                          {getFileIcon(file.type)}
                          <span className="mr-3">{file.name}</span>
                        </td>
                        <td className="px-6 py-4">{file.size}</td>
                        <td className="px-6 py-4">{file.date}</td>
                        <td className="px-6 py-4 text-left flex items-center space-x-2 space-x-reverse">
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0 text-red-500 hover:text-red-600">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="text-center text-sm text-gray-500 mt-4">
                إجمالي المساحة المستخدمة: 21 ميجابايت من إجمالي 1 جيجابايت
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3 border-b">
              <CardTitle className="text-lg">رفع ملفات متعددة</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                <p className="text-lg font-medium text-gray-700 mb-1">اسحب وأفلت الملفات هنا</p>
                <p className="text-sm text-gray-500 mb-3">أو</p>
                <Button>تصفح الملفات</Button>
                <p className="text-xs text-gray-500 mt-2">الحد الأقصى لحجم الملف: 50 ميجابايت</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-1">
          {selectedFile ? (
            <Card>
              <CardHeader className="pb-3 border-b">
                <CardTitle className="text-lg">تفاصيل الملف</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="text-center mb-4">
                  {getFileIcon(files.find(f => f.id === selectedFile)?.type || "")}
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">اسم الملف</p>
                    <p className="font-medium">{files.find(f => f.id === selectedFile)?.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">النوع</p>
                    <p className="font-medium">{files.find(f => f.id === selectedFile)?.type.toUpperCase()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">الحجم</p>
                    <p className="font-medium">{files.find(f => f.id === selectedFile)?.size}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">تاريخ الإضافة</p>
                    <p className="font-medium">{files.find(f => f.id === selectedFile)?.date}</p>
                  </div>
                </div>
                
                <div className="border-t pt-4 mt-4 space-y-2">
                  <p className="text-sm text-gray-500 mb-2">إجراءات</p>
                  <Button className="w-full" variant="outline">
                    <Download className="ml-2 h-4 w-4" />
                    تنزيل الملف
                  </Button>
                  <Button className="w-full" variant="outline">
                    إرفاق بدورة
                  </Button>
                  <Button className="w-full text-red-500 hover:text-red-600" variant="outline">
                    <Trash2 className="ml-2 h-4 w-4" />
                    حذف الملف
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-6 text-center">
                <File className="h-12 w-12 text-gray-300 mx-auto mb-2" />
                <p className="text-gray-500">اختر ملفًا لعرض التفاصيل</p>
              </CardContent>
            </Card>
          )}
          
          <Card className="mt-6">
            <CardHeader className="pb-3 border-b">
              <CardTitle className="text-lg">المساحة التخزينية</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="mb-2 flex justify-between">
                <span>المساحة المستخدمة</span>
                <span className="font-medium">21 ميجابايت</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: "21%" }}></div>
              </div>
              <div className="text-sm text-gray-500">
                21 ميجابايت من إجمالي 1 جيجابايت (21%)
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Files;
