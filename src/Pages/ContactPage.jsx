import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted: ", formData);
        alert("Message Sent ✅");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Me</h1>

            <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10">

                {/* Left Side - Contact Info */}
                <div className="bg-white p-6 rounded-2xl shadow-lg space-y-5">
                    <h2 className="text-2xl font-semibold text-gray-700">Get in Touch</h2>
                    <p className="text-gray-500">
                        Feel free to reach out to me through email, phone, or by filling out the form.
                    </p>

                    <div className="space-y-3">
                        <p className="flex items-center gap-3 text-gray-600">
                            <Mail size={20} className="text-blue-500" /> demo@example.com
                        </p>
                        <p className="flex items-center gap-3 text-gray-600">
                            <Phone size={20} className="text-green-500" /> +91 9876543210
                        </p>
                        <p className="flex items-center gap-3 text-gray-600">
                            <MapPin size={20} className="text-red-500" /> New Delhi, India
                        </p>
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-6 rounded-2xl shadow-lg flex flex-col space-y-4"
                >
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        rows="5"
                        required
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition"
                    >
                        <Send size={18} /> Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
