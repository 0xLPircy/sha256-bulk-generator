async function sha256(text) {
  // Convert the text to an array buffer
  const encoder = new TextEncoder();
  const data = encoder.encode(text);

  // Calculate the SHA-256 hash
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);

  // Convert the hash to a hexadecimal string
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  return hashHex;
}

// Example usage
const text = "vedika";
sha256(text).then((hash) => {
  console.log("SHA-256 Hash:", hash);
});
