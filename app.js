const apiKey = process.env.API_KEY;

if (!apiKey) {
  throw new Error("API_KEY is missing");
}

console.log("API key loaded successfully");