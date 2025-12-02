import { useEffect, useState } from "react";

export default function Navigator() {
    const BASE_URL = "http://localhost:5000";
    const [isAvailable, setIsAvailable] = useState<boolean | null>(null);

    useEffect(() => {
        fetch(`${BASE_URL}/ping/`)
            .then((response) => setIsAvailable(response.ok))
            .catch(() => setIsAvailable(false));
    }, []);

    const buttonText =
        isAvailable === null
            ? "Checking Service Status..."
            : isAvailable
                ? "Go to Rug Pull Detector"
                : "Service Unavailable, Click to Retry";

    const buttonClasses = [
        "inline-block px-6 py-3 rounded-lg text-lg transition font-medium border",

        isAvailable
            ? "bg-blue-600 hover:bg-blue-700 text-white border-blue-600 cursor-pointer"
            : "bg-gray-300 text-gray-500 border-gray-300 cursor-pointer",
    ].join(" ");

    return (
        <div className="text-center mt-12">
            <a
                href={isAvailable ? `${BASE_URL}/` : undefined}
                onClick={(e) => {
                    if (!isAvailable) {
                        e.preventDefault();
                        window.location.reload();
                    }
                }}
                className={buttonClasses}
            >
                {buttonText}
            </a>
        </div>
    );
}
