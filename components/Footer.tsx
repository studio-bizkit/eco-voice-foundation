import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start justify-between">
          {/* Left: Logo, Tagline, Button */}
          <div className="flex flex-col items-start justify-between h-full">
            <div>
              <h2 className="text-3xl font-bold">Eco Voice Foundation</h2>
              <p className="text-lg text-gray-200">Voice For Species</p>
            </div>
            <div>
              <Button className="bg-white text-secondary rounded-full px-6 py-2 hover:bg-gray-100">
                Donate now
              </Button>
            </div>
          </div>
          {/* Center: Empty for spacing */}
          <div className="hidden lg:block" />
          {/* Right: Sitemap + Social */}
          <div className="flex flex-col lg:flex-row justify-between items-end w-full gap-12">
            <div>
              <p className="font-normal mb-2 text-gray-300">Follow us :</p>
              <div className="flex items-center space-x-4">
                <a href="#" className="bg-white text-secondary rounded-full p-2"><Linkedin className="h-5 w-5" /></a>
                <a href="#" className="bg-white text-secondary rounded-full p-2"><Twitter className="h-5 w-5" /></a>
                <a href="#" className="bg-white text-secondary rounded-full p-2"><Youtube className="h-5 w-5" /></a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Sitemap</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-white">About us</a></li>
                <li><a href="#" className="hover:text-white">Partner program</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Legal</a></li>
                <li><a href="#" className="hover:text-white">Privacy policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 