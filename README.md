### Get your Apple OAuth credentials APPLE_CLIENT_ID and APPLE_CLIENT_SECRET

To use Apple sign in, you need a client ID, Team ID, Key ID, and private key. You can get them from the [Apple Developer Portal](https://developer.apple.com/account/resources/authkeys/list), then use them to generate the client secret JWT.

You will need an active **Apple Developer account** to access the developer portal and generate these credentials.

Follow these steps to set up your App ID, Service ID, and generate the key needed for your client secret:
    
0. **Get an Apple Developer Account Team ID:**
   Log in to the Apple Developer Portal and [find](https://developer.apple.com/account/) your Team ID in the Membership section. You will need this as `teamId` later when generating your client secret.

1. **Navigate to Certificates, Identifiers & Profiles:**
   In the Apple Developer Portal, go to the "Certificates, Identifiers & Profiles" section.

2. **Create an App ID:**
   * Go to the `Identifiers` tab.
   * Click the `+` icon next to Identifiers.
   * Select `App IDs`, then click `Continue`.
   * Select `App` as the type, then click `Continue`.
   * **Description:** Enter a name for your app (e.g., "My Awesome App"). This name may be displayed to users when they sign in.
   * **Bundle ID:** Set a bundle ID. The recommended format is a reverse domain name (e.g., `com.yourcompany.yourapp`). Using a suffix like `.ai` (for app identifier) can help with organization but is not required (e.g., `com.yourcompany.yourapp.ai`).
   * Scroll down to **Capabilities**. Select the checkbox for `Sign In with Apple`.
   * Click `Continue`, then `Register`.

3. **Create a Service ID:**
   * Go back to the `Identifiers` tab.
   * Click the `+` icon.
   * Select `Service IDs`, then click `Continue`.
   * **Description:** Enter a description for this service (e.g., your app name again).
   * **Identifier:** Set a unique identifier for the service. Use a reverse domain format, distinct from your App ID (e.g., `com.yourcompany.yourapp.si`, where `.si` indicates service identifier - this is for your organization and not required). **This Service ID will be your `clientId`.**
   * Click `Continue`, then `Register`.

4. **Configure the Service ID:**
   * Find the Service ID you just created in the `Identifiers` list and click on it.
   * Check the `Sign In with Apple` capability, then click `Configure`.
   * Under **Primary App ID**, select the App ID you created earlier (e.g., `com.yourcompany.yourapp.ai`).
   * Under **Domains and Subdomains**, list all the root domains you will use for Sign In with Apple (e.g., `example.com`, `anotherdomain.com`).
   * Under **Return URLs**, enter the callback URL. `https://yourdomain.com/api/auth/callback/apple`. Add all necessary return URLs.
   * Click `Next`, then `Done`.
   * Click `Continue`, then `Save`.

5. **Create a Client Secret Key:**
   * Go to the `Keys` tab.
   * Click the `+` icon to create a new key.
   * **Key Name:** Enter a name for the key (e.g., "Sign In with Apple Key").
   * Scroll down and select the checkbox for `Sign In with Apple`.
   * Click the `Configure` button next to `Sign In with Apple`.
   * Select the **Primary App ID** you created earlier.
   * Click `Save`, then `Continue`, then `Register`.
   * **Download the Key:** Immediately download the `.p8` key file. **This file is only available for download once.** Note the Key ID (available on the Keys page after creation) and your Team ID (available in your Apple Developer Account settings).
