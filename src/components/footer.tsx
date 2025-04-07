export default function Footer() {
  return (
    <>
      <footer className="bg-blanc dark:bg-black p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col items-start">
              <h4 className="text-lg font-bold">BeeHive</h4>
              <p className="mt-2 w-2/5">A next-generation crypto investment
                focused on delivering exceptional
                returns through innovative strategies.</p>
            </div>
            <nav className="flex gap-4">
              <a href="#about" className="hover:underline">About</a>
              <a href="#contact" className="hover:underline">Contact</a>
              <a href="#privacy" className="hover:underline">Privacy Policy</a>
            </nav>
          </div>
          <hr className="my-4 border-t border-gray-300 dark:border-gray-700" />
          <p className="text-center mt-4">&copy; 2025 BeeHive. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};