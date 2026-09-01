// Generate an image via Gemini API (Nano Banana image model) and save it locally.
// Usage: GEMINI_API_KEY=xxxx node scripts/gen-image-gemini.mjs "<prompt text>" <output-path.png>

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
    console.error("Missing GEMINI_API_KEY environment variable.");
    process.exit(1);
}

const prompt = process.argv[2];
const outPath = process.argv[3] || "output.png";
if (!prompt) {
    console.error('Usage: node gen-image-gemini.mjs "<prompt>" <output-path.png>');
    process.exit(1);
}

const MODEL = "gemini-2.5-flash-image";
const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${apiKey}`;

const body = {
    contents: [{ parts: [{ text: prompt }] }]
};

const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
});

if (!res.ok) {
    const errText = await res.text();
    console.error(`Gemini API error ${res.status}:`, errText);
    process.exit(1);
}

const data = await res.json();
const parts = data?.candidates?.[0]?.content?.parts || [];
const imagePart = parts.find(p => p.inlineData?.data);

if (!imagePart) {
    console.error("No image returned. Full response:", JSON.stringify(data, null, 2));
    process.exit(1);
}

const { writeFileSync } = await import("node:fs");
const buffer = Buffer.from(imagePart.inlineData.data, "base64");
writeFileSync(outPath, buffer);
console.log(`Saved image to ${outPath} (${buffer.length} bytes)`);
