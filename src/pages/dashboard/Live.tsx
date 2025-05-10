
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Video, Users, MessageSquare, Mic, MicOff, Play, StopCircle } from "lucide-react";
import { useState } from "react";

const Live = () => {
  const [isStreaming, setIsStreaming] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">البث المباشر</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
              {!isStreaming ? (
                <div className="text-center">
                  <Video className="h-16 w-16 text-white/20 mx-auto mb-2" />
                  <p className="text-white/50 text-lg">اضغط زر البدء لتشغيل البث المباشر</p>
                </div>
              ) : (
                <>
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm flex items-center">
                    <div className="h-2 w-2 bg-white rounded-full animate-pulse mr-2"></div>
                    مباشر الآن
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-lg text-sm">
                    <Users className="inline-block h-4 w-4 ml-1" />
                    25 متابع
                  </div>
                </>
              )}
            </div>
            
            <CardContent>
              <div className="flex justify-between items-center py-3">
                <div className="flex space-x-4 space-x-reverse">
                  <Button
                    variant={isStreaming ? "destructive" : "default"}
                    onClick={() => setIsStreaming(!isStreaming)}
                  >
                    {isStreaming ? (
                      <>
                        <StopCircle className="ml-2 h-4 w-4" /> إيقاف البث
                      </>
                    ) : (
                      <>
                        <Play className="ml-2 h-4 w-4" /> بدء البث
                      </>
                    )}
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    onClick={() => setIsMuted(!isMuted)}
                  >
                    {isMuted ? (
                      <>
                        <MicOff className="ml-2 h-4 w-4" /> تفعيل الصوت
                      </>
                    ) : (
                      <>
                        <Mic className="ml-2 h-4 w-4" /> كتم الصوت
                      </>
                    )}
                  </Button>
                </div>
                
                <div>
                  <Button variant="outline">حفظ التسجيل</Button>
                </div>
              </div>
              
              <div className="mt-3">
                <Input
                  placeholder="عنوان البث المباشر..."
                  className="mb-2"
                />
                <textarea 
                  className="w-full rounded-lg border border-input bg-background p-3 text-sm"
                  placeholder="وصف البث المباشر..."
                  rows={3}
                ></textarea>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-1">
          <Card className="h-[calc(100vh-300px)] flex flex-col">
            <div className="p-3 border-b flex items-center">
              <MessageSquare className="h-5 w-5 ml-2 text-purple-500" />
              <h3 className="font-medium">المحادثة المباشرة</h3>
              <span className="mr-auto bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full text-xs">25</span>
            </div>
            
            <div className="flex-1 overflow-y-auto p-3">
              {[1, 2, 3, 4, 5, 6].map((message) => (
                <div key={message} className="mb-3 pb-3 border-b last:border-0">
                  <div className="flex items-center mb-1">
                    <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center font-medium text-purple-800">
                      أ
                    </div>
                    <span className="mr-2 font-medium">أحمد محمد</span>
                  </div>
                  <p className="text-sm text-gray-700">هذا سؤال للمعلم حول الموضوع المطروح في البث المباشر</p>
                </div>
              ))}
            </div>
            
            <div className="p-3 border-t mt-auto">
              <div className="flex">
                <Input
                  placeholder="اكتب رسالتك هنا..."
                  className="rounded-l-none"
                />
                <Button className="rounded-r-none">إرسال</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

const Input = ({ ...props }) => {
  return <input className="flex w-full rounded-md border border-input bg-background px-3 h-10 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" {...props} />;
};

export default Live;
