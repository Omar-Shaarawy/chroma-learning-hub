
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const SignInForm = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "تم تسجيل الدخول بنجاح",
        description: "مرحباً بك مجدداً في أستاذي!",
      });
      // Here you would typically redirect to dashboard
    }, 1500);
  };

  return (
    <div className="w-full max-w-md space-y-8" dir="rtl">
      <div className="text-center">
        <h2 className="mt-6 text-3xl font-bold text-gray-900">مرحباً بك مجدداً</h2>
        <p className="mt-2 text-sm text-gray-600">
          قم بتسجيل الدخول للوصول إلى حسابك في أستاذي
        </p>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-4 rounded-md">
          <div>
            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 mb-1">
              البريد الإلكتروني
            </label>
            <Input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="البريد الإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              كلمة المرور
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="كلمة المرور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded ml-2"
            />
            <label htmlFor="remember-me" className="block text-sm text-gray-900">
              تذكرني
            </label>
          </div>

          <div className="text-sm">
            <Link to="/reset-password" className="font-medium text-purple-600 hover:text-purple-500">
              نسيت كلمة المرور؟
            </Link>
          </div>
        </div>

        <div>
          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
          </Button>
        </div>
      </form>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">أو المتابعة باستخدام</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <Button variant="outline" type="button" className="w-full">
            جوجل
          </Button>
          <Button variant="outline" type="button" className="w-full">
            فيسبوك
          </Button>
        </div>
      </div>

      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          ليس لديك حساب؟{" "}
          <Link to="/signup" className="font-medium text-purple-600 hover:text-purple-500">
            إنشاء حساب
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
