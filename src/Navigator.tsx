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
                : "Service Unavailable";

    // 🎨 Tailwind styling based on status
    const buttonClasses = [
        "inline-block px-6 py-3 rounded-lg text-lg transition font-medium border",

        isAvailable
            ? // 🔵 AVAILABLE: primary button
              "bg-blue-600 hover:bg-blue-700 text-white border-blue-600 cursor-pointer"
            : // ⚪ CHECKING or ❌ UNAVAILABLE: disabled grey button
              "bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed",
    ].join(" ");

    return (
        <div className="text-center mt-12">
            <a
                href={isAvailable ? `${BASE_URL}/` : undefined}
                onClick={(e) => {
                    if (!isAvailable) {
                        e.preventDefault();
                        // no reload here unless you want it:
                        // window.location.reload();
                    }
                }}
                className={buttonClasses}
            >
                {buttonText}
            </a>
        </div>
    );
}
