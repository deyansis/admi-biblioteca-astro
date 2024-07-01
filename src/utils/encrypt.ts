import * as crypto from 'crypto';

export function decryptJson({ encryptedJson, secretKey }: { encryptedJson: string, secretKey: string }) {
  const textParts = encryptedJson.split(':');
  const ivHex = textParts.shift();
  if (!ivHex) {
    throw new Error("IV is missing");
  }
  const iv = Buffer.from(ivHex, 'hex');
  const encryptedText = Buffer.from(textParts.join(':'), 'hex');
  const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(secretKey, 'hex'), iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  const decryptedString = decrypted.toString();


  let parsedJson;
  try {
    parsedJson = JSON.parse(decryptedString);
    while (typeof parsedJson === 'string') {
      parsedJson = JSON.parse(parsedJson);
    }
  } catch (e: any) {
    throw new Error("Failed to parse JSON: " + e.message);
  }

  return parsedJson;
}