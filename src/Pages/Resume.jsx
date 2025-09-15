import React, { useRef } from "react";
import { Download } from "lucide-react";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";

export default function Resume() {
    const resumeRef = useRef();

    // PNG Download
    const downloadPNG = async () => {
        if (!resumeRef.current) return;
        const dataUrl = await toPng(resumeRef.current);
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "resume.png";
        link.click();
    };

    // PDF Download
    const downloadPDF = async () => {
        if (!resumeRef.current) return;
        const dataUrl = await toPng(resumeRef.current);
        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("NiteshResume.pdf");
    };



    return (
        <div
            className="min-h-screen py-10 px-6 flex flex-col items-center "
            style={{ backgroundColor: "rgba(172, 219, 251, 0.5)" }}
        >

            <h1 className="text-4xl font-bold text-gray-800 mb-6">My Resume</h1>

            {/* Buttons */}
            <div className="flex gap-4 mb-6">
                <button
                    onClick={downloadPNG}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                    <Download size={18} /> Download PNG
                </button>
                <button
                    onClick={downloadPDF}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                    <Download size={18} /> Download PDF
                </button>
            </div>

            {/* Resume Preview */}
            <div
                ref={resumeRef}
                className="bg-white w-full max-w-3xl shadow-xl rounded-lg p-8 text-gray-800"
            >
                {/* Header */}
                <div className="border-b pb-4 mb-4 text-center">
                    <h2 className="text-3xl font-bold">Nitesh Gupta</h2>
                    <p className="text-gray-600 font-semibold">Full-Stack Developer</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <span >Email: niteshgupta@gmail.com</span>
                        <span>Phone: +91 8808824412</span>
                        <span>Github: CodeWithNitesh7</span>
                        <span>Linkdin: Nitesh Gupta</span>
                    </div>
                </div>

                {/* About Me */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold border-b pb-2 mb-3">
                        About me
                    </h3>

                    <p className="text-gray-600">I am <b> Nitesh Gupta</b>, a passionate <b>Full-Stack Developer</b> with strong skills
                        in <b>MERN stack</b>, <b>Java</b>,
                        <b> Spring Boot</b>, and <b>Flutter</b>.
                        I enjoy building scalable web applications, interactive UIs, and real-world projects that solve practical problems.</p>
                </div>
                {/* Education */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold border-b pb-2 mb-3">
                        Education
                    </h3>
                    <p className="font-medium">Diploma in Computer Science</p>
                    <p className="text-gray-600">MMIT Santkabirnagar College • 2022 - 2025</p>

                    <p className="font-medium">HighSchool</p>
                    <p className="text-gray-600">Jyoti Inter Collage Gorakhpur • 2021-2022</p>
                </div>

                {/* Skills */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold border-b pb-2 mb-3">Skills</h3>
                    <ul className="grid grid-cols-2 gap-2">
                        <li>HTML / CSS</li>
                        <li>JavaScript</li>
                        <li>BootStrap</li>
                        <li>Tailwindcss</li>
                        <li>Mern Stack</li>
                        <li>Electron.Js</li>
                        <li>Java With Springboot</li>
                        <li>Python</li>
                        <li>Flutter</li>
                        <li>Git & GitHub</li>
                    </ul>
                </div>

                {/* Projects */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold border-b pb-2 mb-3">Major Projects</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <span className="font-medium">Gym Management System</span> — Multi-tenant gym software built using MERN stack.
                        </li>
                        <li>
                            <span className="font-medium">Quiz App</span> — Login-based quiz platform with admin dashboard.
                        </li>
                        <li>
                            <span className="font-medium">Portfolio Website</span> — Personal portfolio showcasing projects and skills.
                        </li>
                    </ul>
                </div>

                {/* Experience */}
                <div>
                    <h3 className="text-xl font-semibold border-b pb-2 mb-3">
                        Experience
                    </h3>
                    <p className="font-medium">Full Stack Developer (Intern)</p>
                    <p className="text-gray-600">Asv Consulting Services • 2025</p>
                    <p className="font-medium">Full Stack Engineer (Trainee)</p>
                    <p className="text-gray-600">Techpile Technology• Aug-2024</p>
                </div>
            </div>
        </div>
    );
}
