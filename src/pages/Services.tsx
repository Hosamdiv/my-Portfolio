// components/Services.tsx
import { FC } from "react";
import { FaLaptopCode, FaMobileAlt, FaPalette } from "react-icons/fa";

export interface IService {
    title: string;
    description: string;
    icon: JSX.Element;
}

const services: IService[] = [
    {
        title: "Web Development",
        description: "Building responsive and modern websites using React, Next.js, and Tailwind CSS.",
        icon: <FaLaptopCode size={40} className="text-blue-500" />,
    },
    {
        title: "Mobile Apps",
        description: "Creating cross-platform mobile applications using React Native and Flutter.",
        icon: <FaMobileAlt size={40} className="text-green-500" />,
    },
    {
        title: "UI/UX Design",
        description: "Designing beautiful and user-friendly interfaces for web and mobile apps.",
        icon: <FaPalette size={40} className="text-pink-500" />,
    },
];

const Services: FC = () => {
    return (
        <section
            id="services-section" className="w-[90%] max-w-7xl mx-auto py-20">
            <h2 className="text-3xl font-bold text-center mb-12">My Services</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
                    >
                        <div className="mb-4 flex justify-center">{service.icon}</div>
                        <h3 className="text-xl text-white font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
