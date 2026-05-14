import InquiryForm from '@/components/InquiryForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <h1 className="font-serif text-4xl font-bold text-gray-900 mb-2">
            Contact Us
          </h1>
          <p className="text-gray-600">
            Get in touch with our team. We're here to help you find your dream property.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-gray-600 mb-8">
              Have questions about a property? Want to schedule a site visit? Our team is ready to assist you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">+91 98765 43210</p>
                  <p className="text-gray-600">+91 98765 43211</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">info@buildbase.com</p>
                  <p className="text-gray-600">sales@buildbase.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Office</h3>
                  <p className="text-gray-600">
                    123 MG Road, Bangalore<br />
                    Karnataka 560001, India
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary/5 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Office Hours</h3>
              <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
              <p className="text-gray-600">Sunday: 10:00 AM - 5:00 PM</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <InquiryForm inquiryType="general" />
          </div>
        </div>
      </div>
    </div>
  );
}
