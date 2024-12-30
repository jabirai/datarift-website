import React, { useState } from "react";

function Footer() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");

    const handleSubscribe = async (e) => {
        e.preventDefault();

        // Mock API endpoint to handle subscriptions
        const response = await fetch("https://your-backend-api.com/subscribe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        });

        if (response.ok) {
            setStatus("Successfully subscribed!");
            setEmail(""); // Clear the input field
        } else {
            setStatus("Failed to subscribe. Please try again.");
        }
    };

    return (
        <footer className="bg-gradient-to-r from-blue-900 via-purple-900 to-gray-900 py-16 text-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Section: Logo and About */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Logo and Short Description */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                                <img
                                    src="/path-to-your-logo.svg"
                                    alt="Datarift Logo"
                                    className="h-8 w-8"
                                />
                            </div>
                            <span className="text-white text-2xl font-extrabold">
                                Datarift
                            </span>
                        </div>
                        <p className="text-gray-400">
                            Building intelligent AI-driven solutions that empower
                            businesses to transform and grow.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-white text-lg font-bold uppercase">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
{/*                             <li>
                                <a
                                    href="#about"
                                    className="hover:text-purple-400 transition"
                                >
                                    About Us
                                </a>
                            </li> */}
                            <li>
                                <a
                                    href="#services"
                                    className="hover:text-purple-400 transition"
                                >
                                    Our Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#portfolio"
                                    className="hover:text-purple-400 transition"
                                >
                                    Portfolio
                                </a>
                            </li>
{/*                             <li>
                                <a
                                    href="#careers"
                                    className="hover:text-purple-400 transition"
                                >
                                    Careers
                                </a>
                            </li> */}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h3 className="text-white text-lg font-bold uppercase">
                            Subscribe
                        </h3>
                        <p className="text-gray-400">
                            Get the latest updates and offers.
                        </p>
                        <form
                            onSubmit={handleSubscribe}
                            className="flex items-center space-x-2"
                        >
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="flex-1 px-4 py-2 rounded-md bg-gray-800 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="px-6 py-2 bg-purple-600 text-white font-bold rounded-md hover:bg-purple-500 transition"
                            >
                                Subscribe
                            </button>
                        </form>
                        {status && (
                            <p
                                className={`text-sm ${
                                    status.includes("Successfully")
                                        ? "text-green-400"
                                        : "text-red-400"
                                }`}
                            >
                                {status}
                            </p>
                        )}
                    </div>
                </div>

                {/* Bottom Section: Social Media and Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                    <p className="text-sm text-gray-400">
                        © 2024 Datarift. All rights reserved.
                    </p>
                    <div className="flex space-x-4">
{/*                         <a
                            href="#"
                            className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-purple-500 transition"
                        >
                            <span className="text-white font-bold">F</span>
                        </a> */}
{/*                         <a
                            href="#"
                            className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-purple-500 transition"
                        >
                            <span className="text-white font-bold">T</span>
                        </a> */}
                        <a
                            href="https://www.linkedin.com/company/datarift-ai"
                            className="flex items-center justify-center"
                        >
                            <span className="text-white font-bold bg-gray-800 hover:bg-purple-500 transition">Linkedin</span>
                        </a>
{/*                         <a
                            href="#"
                            className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-purple-500 transition"
                        >
                            <span className="text-white font-bold">G</span>
                        </a> */}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
