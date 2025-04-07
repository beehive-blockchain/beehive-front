import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="font-display w-full p-4 bg-white text-black shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <h2 className="text-lg font-bold">BeeHive</h2>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-sm">
          <a href="#" className="hover:text-gray-500">Overview</a>
          <a href="#" className="hover:text-gray-500">Current Fund Holdings</a>
          <a href="#" className="hover:text-gray-500">Tokenomics</a>
          <a href="#" className="hover:text-gray-500">Supply</a>
        </nav>

        <Button>Get started</Button>
      </div>
    </header>
  );
}