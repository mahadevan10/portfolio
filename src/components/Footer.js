export default function Footer() {
  return (
    <footer className="w-full py-6 bg-ash_gray-300 text-center text-white mt-12">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Mahadevan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}