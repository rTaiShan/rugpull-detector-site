import { useEffect, useState } from "react";

export default function Navigator() {
    const BASE_URL = "https://amirah-unpulverized-noninstructively.ngrok-free.dev";
    const [isAvailable, setIsAvailable] = useState<boolean | null>(null);

    const check = async () => {
        setIsAvailable(null);
        
        try {
            const res = await fetch(`${BASE_URL}/ping/`);
            const data = await res.json();

            if (res.ok && data?.status === "ok") {
                setIsAvailable(true);
            } else {
                setIsAvailable(false);
            }
        } catch {
            setIsAvailable(false);
        }
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        check();
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
                        check();
                    }
                }}
                className={buttonClasses}
            >
                {buttonText}
            </a>
        </div>
    );
}
