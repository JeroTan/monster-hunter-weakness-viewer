import cors from "@elysiajs/cors";

export default function getCorsConfig() {
    const whiteList = [
        "http://localhost:4321",
        "http://127.0.0.1:4321"
    ];
    
    return cors({
        origin: (request) => {
            const origin = request.headers.get("origin");
            if (!origin) return true;
            return whiteList.includes(origin);
        },
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"]
    });
}