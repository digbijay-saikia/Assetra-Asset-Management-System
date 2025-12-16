import LoginForm from "./components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex flex-col xl:flex-row h-screen overflow-hidden">

      {/* LEFT SIDE - Login (45%) */}
      <div className="flex-1 xl:flex-none xl:w-[45%] bg-gray-50 px-6 h-screen">
        <div className="max-w-md mx-auto h-full flex flex-col">

          {/* Logo */}
          <div className="pt-8 sm:pt-10 md:pt-12 lg:pt-16">
            <img src="/logo.svg" alt="Assetra Logo" className="h-10 w-auto" />
          </div>

          {/* Login Form */}
          <LoginForm />

          {/* Mobile / Tablet Illustration */}
          <div className="mt-6 pb-8 xl:hidden flex justify-center">
            <img
              src="/illustration-1.png"
              alt="Illustration"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md max-h-48 object-contain"
            />
          </div>

        </div>
      </div>

      {/* RIGHT SIDE BANNER (55%) */}
      <div className="hidden xl:flex xl:flex-none xl:w-[55%] h-screen">
        <img src="/login-banner.png" alt="Banner" className="w-full h-full object-cover" />
      </div>

    </div>
  );
}
