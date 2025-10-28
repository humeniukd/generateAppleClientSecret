import { importPKCS8, SignJWT } from "jose";

async function generateAppleClientSecret(clientId: string, teamId: string, keyId: string, privateKey: string) {
    const key = await importPKCS8(privateKey, "ES256");
    const now = Math.floor(Date.now() / 1000);
    return new SignJWT({})
    .setProtectedHeader({ alg: "ES256", kid: keyId })
    .setIssuer(teamId)
    .setSubject(clientId)
    .setAudience("https://appleid.apple.com")
    .setIssuedAt(now)
    .setExpirationTime(now + 180 * 24 * 60 * 60)
    .sign(key);
}

export default {
    async fetch(req: Request, env: Env): Promise<Response> {
        const url = new URL(req.url);
        const jwt = await generateAppleClientSecret("serviceId", "teamId", "keyId", `contents of AuthKey_[keyId].p8`);
        console.log('jwt', jwt);
        return new Response(null);
    }
};