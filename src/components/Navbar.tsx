import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md px-12 md:px-16">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-red to-primary-blue mr-2"></div>
          <span className="font-semibold text-lg text-black">SkillMeterMu</span>
        </div>

        {/* Menu Items */}
        <div className="flex space-x-8">
          <Link
            href="/menu-interview"
            className="font-medium text-black text-center py-2 hover:underline"
          >
            Interview
          </Link>
          <Link
            href="/hasil-interview"
            className="font-medium text-black text-center py-2 hover:underline"
          >
            Hasil
          </Link>
          <a href="/register" className="bg-primary-red text-white px-4 py-2 rounded-xl font-semibold">
            Register
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
