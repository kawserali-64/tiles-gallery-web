import { LocationEdit, PhoneCall } from "lucide-react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br bg-[#3f2519] text-gray-300 mt-16">
            <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">

                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">
                        Tiles Gallery
                    </h2>
                    <p className="text-sm leading-6">
                        Premium quality tiles collection for your dream home. Stylish,
                        durable & modern design for every space.
                    </p>

                    {/* Social */}
                    <div className="flex gap-4 mt-5 text-lg">
                        <FaFacebookF className="hover:text-white hover:scale-110 transition cursor-pointer" />
                        <FaInstagram className="hover:text-white hover:scale-110 transition cursor-pointer" />
                        <FaTwitter className="hover:text-white hover:scale-110 transition cursor-pointer" />
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">
                        Quick Links
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                        <li><Link href="/products" className="hover:text-white transition">Products</Link></li>
                        <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                    </ul>
                </div>

                {/* Categories */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">
                        Categories
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white transition">Ceramic Tiles</li>
                        <li className="hover:text-white transition">Floor Tiles</li>
                        <li className="hover:text-white transition">Wall Tiles</li>
                        <li className="hover:text-white transition">Bathroom Tiles</li>
                    </ul>
                </div>

                {/* Contact */}
                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">
                        Contact
                    </h3>

                    <div className="space-y-3 text-sm">

                        <p className="flex items-center gap-2">
                            <LocationEdit className="w-4 h-4 shrink-0" />
                            <span>Dhaka, Bangladesh</span>
                        </p>

                        <p className="flex items-center gap-2">
                            <PhoneCall className="w-4 h-4 shrink-0" />
                            <span>+880 1234-567890</span>
                        </p>

                        <p className="flex items-center gap-2">
                            <MdEmail className="w-4 h-4 shrink-0" />
                            <span>info@tilesgallery.com</span>
                        </p>

                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="border-t border-gray-700 text-center py-4 text-sm">
                © {new Date().getFullYear()} Tiles Gallery. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;