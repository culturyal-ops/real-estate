import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              BuildBase
            </h3>
            <p className="text-sm">
              Your trusted partner in finding the perfect property. Premium
              lands, villas, and development projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/properties" className="hover:text-white transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/lands" className="hover:text-white transition-colors">
                  Lands
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  New Projects
                </Link>
              </li>
              <li>
                <Link href="/map" className="hover:text-white transition-colors">
                  Map View
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span>info@buildbase.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Bangalore, Karnataka, India</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm mb-4">
              Subscribe to get the latest property listings and updates.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-4 py-2 rounded-md text-sm hover:bg-primary/90 transition-colors"
            >
              Subscribe Now
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} BuildBase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
