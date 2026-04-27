import type { TermData } from './domain-1-dataset';

export const domain2Dataset: TermData[] = [
  {
    id: 11,
    term: "Device Configuration Profiles",
    category: "Manage devices and tenant applications",
    questions: [
      {
        id: 201,
        type: "easy",
        question: "What is the primary purpose of a <b>Device Configuration Profile</b> in Microsoft Intune?",
        options: [
          "To wipe a device when it is lost or stolen.",
          "To push settings and features to devices, such as Wi-Fi, VPN, and device restrictions.",
          "To purchase licenses for Microsoft 365.",
          "To monitor network traffic for security threats."
        ],
        answer: "To push settings and features to devices, such as Wi-Fi, VPN, and device restrictions.",
        explanation: "<b>Device configuration profiles</b> allow administrators to add and configure settings and then push these settings to devices in the organization. This includes configuring Wi-Fi networks, VPN connections, email profiles, and various device restrictions.",
        moreDetails: "These profiles are a core part of Mobile Device Management (MDM), ensuring that devices conform to organizational standards without requiring manual configuration by the end user.",
        otherOptions: "Wiping devices is a remote action. Licensing is handled in Entra/Microsoft 365 admin centers. Network monitoring is handled by security tools like Defender for Endpoint.",
        link: "https://learn.microsoft.com/en-us/mem/intune/configuration/device-profiles"
      },
      {
        id: 202,
        type: "medium",
        question: "When configuring Windows devices, which profile type allows you to search for and configure thousands of specific Windows settings, similar to on-premises Group Policy Objects (GPOs)?",
        options: [
          "Custom OMA-URI profiles",
          "Settings Catalog",
          "Administrative Templates",
          "Endpoint protection profiles"
        ],
        answer: "Settings Catalog",
        explanation: "The <b>Settings Catalog</b> provides a single place to search, browse, and select from thousands of configurable settings for Windows, macOS, and iOS/iPadOS devices. It simplifies profile creation by dynamically showing only the settings you choose to configure.",
        moreDetails: "While Administrative Templates (ADMX) also offer GPO-like settings, the Settings Catalog is the modern, recommended approach as it dynamically lists all available MDM settings, including new ones as they are released, without needing template updates.",
        otherOptions: "Custom OMA-URIs are for settings not yet built into the UI. Endpoint protection focuses on security. Administrative Templates are legacy GPO mappings.",
        link: "https://learn.microsoft.com/en-us/mem/intune/configuration/settings-catalog"
      },
      {
        id: 203,
        type: "hard",
        question: "You need to configure a highly specific Windows setting via Intune that is not available in the Settings Catalog or Administrative Templates. How should you deploy this setting?",
        options: [
          "Create a Custom device configuration profile using an OMA-URI string.",
          "Deploy a .reg (Registry) file using a Win32 app.",
          "Use the App Configuration policy channel.",
          "It is not possible to deploy settings missing from the Intune UI."
        ],
        answer: "Create a Custom device configuration profile using an OMA-URI string.",
        explanation: "For settings that are managed by Windows Configuration Service Providers (CSPs) but not yet exposed in the Intune graphical interface, administrators can create a <b>Custom profile</b> utilizing the specific <b>OMA-URI</b> (Open Mobile Alliance Uniform Resource Identifier).",
        moreDetails: "The OMA-URI points directly to the node in the CSP hierarchy (e.g., `./Device/Vendor/MSFT/Policy/Config/Browser/AllowInPrivate`). This allows day-zero support for new Windows settings.",
        otherOptions: "Deploying registry keys via Win32 or PowerShell is a workaround, but OMA-URI is the native MDM method. App config is for application settings, not OS settings.",
        link: "https://learn.microsoft.com/en-us/mem/intune/configuration/custom-settings-windows-10"
      },
      {
        id: 204,
        type: "medium",
        question: "A user is targeted by two different Device Configuration profiles that configure the exact same setting. Profile A disables the camera, while Profile B enables the camera. What is the outcome in Intune?",
        options: [
          "Profile A applies because restrictive settings always win.",
          "Profile B applies because permissive settings always win.",
          "The device shows a 'Conflict' state in Intune, and the setting is not applied or modified.",
          "The profile created most recently takes precedence."
        ],
        answer: "The device shows a 'Conflict' state in Intune, and the setting is not applied or modified.",
        explanation: "When two different Intune configuration profiles configure the exact same setting with different values (and are applied to the same user or device), a <b>Conflict</b> state occurs.",
        moreDetails: "Unlike Group Policy, which uses a strict hierarchy (LSDOU) to resolve conflicts, Intune simply flags the setting as conflicted and typically does not apply it, requiring the administrator to manually resolve the overlap in assignments.",
        otherOptions: "Intune does not automatically default to restrictive or permissive, nor does it care about creation dates for conflicts in standard configuration profiles.",
        link: "https://learn.microsoft.com/en-us/mem/intune/configuration/device-profile-troubleshoot#conflicts-and-resolutions"
      },
      {
        id: 205,
        type: "easy",
        question: "You have a Wi-Fi configuration profile that you want to apply to all corporate laptops, regardless of who signs into them. Which group type should you assign the profile to?",
        options: [
          "A Device Group",
          "A User Group",
          "The Local Administrators Group",
          "The Microsoft 365 Group"
        ],
        answer: "A Device Group",
        explanation: "When you want a setting to apply to the physical hardware regardless of the logged-in user (such as a corporate Wi-Fi network, computer certificates, or kiosk settings), you should assign the profile to an Entra ID <b>Device Group</b>.",
        moreDetails: "Assigning to a user group means the policy follows the user, applying only after they log into a device. Device group targeting ensures the policy is present on the device even at the login screen.",
        otherOptions: "User groups follow the user. Local Admins and M365 Groups are not standard targeting mechanisms for Intune device profiles.",
        link: "https://learn.microsoft.com/en-us/mem/intune/configuration/device-profile-assign"
      }
    ]
  },
  {
    id: 12,
    term: "Device Compliance Policies",
    category: "Manage devices and tenant applications",
    questions: [
      {
        id: 206,
        type: "easy",
        question: "What is the primary function of a <b>Device Compliance Policy</b> in Intune?",
        options: [
          "To install missing Windows updates.",
          "To evaluate if a device meets the organization's baseline security rules (like OS version or password length).",
          "To configure BitLocker encryption keys.",
          "To block users from accessing personal websites."
        ],
        answer: "To evaluate if a device meets the organization's baseline security rules (like OS version or password length).",
        explanation: "<b>Device Compliance Policies</b> act as a checklist of rules and settings that devices must meet to be considered 'compliant' by the organization (e.g., minimum OS version, requiring a PIN, requiring BitLocker).",
        moreDetails: "Compliance policies do not typically configure settings (that is what configuration profiles are for); they evaluate the current state of the device. This compliance status is then often fed into Conditional Access.",
        otherOptions: "Updates and BitLocker are configured via configuration/security profiles, not compliance policies. Web filtering is done via Endpoint Security.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/device-compliance-get-started"
      },
      {
        id: 207,
        type: "medium",
        question: "In the built-in Intune Compliance Policy settings, what happens if the 'Mark devices with no compliance policy assigned as' setting is configured to 'Noncompliant'?",
        options: [
          "Devices without a policy are automatically wiped.",
          "Devices without an assigned compliance policy will be flagged as noncompliant, potentially blocking them from corporate resources.",
          "Intune will automatically generate a generic policy for those devices.",
          "The setting is ignored for Windows devices."
        ],
        answer: "Devices without an assigned compliance policy will be flagged as noncompliant, potentially blocking them from corporate resources.",
        explanation: "By default, Intune marks devices with no assigned compliance policy as compliant. Changing this global tenant setting to <b>Noncompliant</b> ensures that only devices explicitly evaluated and approved by an administrator-defined policy can be considered safe.",
        moreDetails: "This is a critical security best practice (Zero Trust), ensuring that new or forgotten devices do not automatically gain access to Conditional Access-protected resources.",
        otherOptions: "Devices are not wiped or automatically assigned generic policies based on this setting.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/device-compliance-get-started#compliance-policy-settings"
      },
      {
        id: 208,
        type: "hard",
        question: "You need to check if a highly specific proprietary application is installed on a Windows client before marking it compliant. How can you achieve this using Intune Compliance Policies?",
        options: [
          "Use a Custom Compliance Policy requiring a PowerShell discovery script and a JSON rules file.",
          "Enable the 'Check Line-of-Business App' slider in the standard compliance policy.",
          "Deploy a Win32 app and set its assignment to 'Required for Compliance'.",
          "Create a conditional access policy that queries the registry."
        ],
        answer: "Use a Custom Compliance Policy requiring a PowerShell discovery script and a JSON rules file.",
        explanation: "Intune allows for <b>Custom Compliance Policies</b> on Windows devices. You upload a PowerShell script to the device to discover custom settings (like a specific app, registry key, or file), and a JSON file to Intune that defines the passing criteria for the script's output.",
        moreDetails: "If the script output matches the requirements in the JSON file, the device is marked compliant. This vastly expands Intune's compliance capabilities beyond the built-in UI options.",
        otherOptions: "There is no built-in slider for specific LOB apps in standard compliance. Win32 apps and Conditional Access cannot directly query local registries for compliance state.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/compliance-custom-script"
      },
      {
        id: 209,
        type: "medium",
        question: "When configuring 'Actions for noncompliance' in an Intune compliance policy, what is the default first action taken when a device fails the evaluation?",
        options: [
          "Retire the device immediately.",
          "Mark device noncompliant immediately.",
          "Send an email to the user after 1 day.",
          "Lock the device immediately."
        ],
        answer: "Mark device noncompliant immediately.",
        explanation: "By default, the very first action in any compliance policy is <b>'Mark device noncompliant'</b> set to zero days (immediately).",
        moreDetails: "Administrators can add subsequent actions, such as sending warning emails to the user, sending push notifications, or eventually retiring the device if it remains noncompliant for a set number of days.",
        otherOptions: "Retiring or locking immediately are extreme actions that must be manually added. Sending an email is optional.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/actions-for-noncompliance"
      },
      {
        id: 210,
        type: "easy",
        question: "Which of the following describes the relationship between a Configuration Profile and a Compliance Policy?",
        options: [
          "A Configuration Profile evaluates a setting; a Compliance Policy creates the setting.",
          "A Configuration Profile applies and enforces a setting; a Compliance Policy checks if the setting is present and reports its status.",
          "They are the exact same thing; one is used for Windows, the other for iOS.",
          "Configuration Profiles are managed in Entra ID; Compliance Policies are managed in Intune."
        ],
        answer: "A Configuration Profile applies and enforces a setting; a Compliance Policy checks if the setting is present and reports its status.",
        explanation: "<b>Configuration Profiles</b> actually change the device (e.g., turning on BitLocker). <b>Compliance Policies</b> do not change the device; they simply act as an auditor, checking if the device meets a rule (e.g., 'Is BitLocker turned on?').",
        moreDetails: "They are designed to be used together. You use a Configuration Profile to push the standard, and a Compliance Policy to verify it and flag devices that have somehow drifted from the standard.",
        otherOptions: "The other options incorrectly define the roles or confuse where they are managed.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/device-compliance-get-started"
      }
    ]
  },
  {
    id: 13,
    term: "Conditional Access Policies",
    category: "Manage devices and tenant applications",
    questions: [
      {
        id: 211,
        type: "easy",
        question: "What is the primary function of Entra ID <b>Conditional Access</b>?",
        options: [
          "To route network traffic conditionally based on bandwidth.",
          "To act as an if-then statement engine that evaluates signals (who, where, what device) to enforce access controls (allow, block, require MFA).",
          "To license users conditionally based on their department.",
          "To deploy applications to devices conditionally."
        ],
        answer: "To act as an if-then statement engine that evaluates signals (who, where, what device) to enforce access controls (allow, block, require MFA).",
        explanation: "<b>Conditional Access</b> is Microsoft's Zero Trust policy engine. It analyzes signals like user identity, location, device compliance state, and app sensitivity to make real-time access decisions.",
        moreDetails: "For example, 'IF a user tries to access Exchange Online from an unknown location, THEN require Multi-Factor Authentication.'",
        otherOptions: "It is an identity-driven security boundary, not a network router, licensing tool, or application deployment mechanism.",
        link: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview"
      },
      {
        id: 212,
        type: "medium",
        question: "How do Intune Device Compliance Policies interact with Entra ID Conditional Access?",
        options: [
          "Conditional Access overrides Compliance Policies.",
          "Compliance Policies use Conditional Access to push Windows Updates.",
          "Intune calculates the device compliance state and passes it to Entra ID, allowing Conditional Access to block access if the device is not marked as compliant.",
          "They do not interact; they are completely separate systems."
        ],
        answer: "Intune calculates the device compliance state and passes it to Entra ID, allowing Conditional Access to block access if the device is not marked as compliant.",
        explanation: "Intune acts as the compliance engine. When a Conditional Access policy is configured to 'Require device to be marked as compliant', Entra ID checks the device's status in Intune during the authentication flow.",
        moreDetails: "If Intune says the device is compliant, access is granted. If Intune says it is noncompliant, Conditional Access blocks the user from reaching the cloud app, forming a powerful Zero Trust architecture.",
        otherOptions: "They are deeply integrated. CA does not push updates, nor does it override compliance (it relies on it).",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/conditional-access"
      },
      {
        id: 213,
        type: "hard",
        question: "You want to prevent users from remaining signed in indefinitely when accessing SharePoint Online from an unmanaged, public computer. Which Conditional Access feature should you configure?",
        options: [
          "Grant controls: Require multi-factor authentication",
          "Session controls: Sign-in frequency and Persistent browser session",
          "Conditions: Client apps -> Browser",
          "Conditions: Locations -> Any location"
        ],
        answer: "Session controls: Sign-in frequency and Persistent browser session",
        explanation: "<b>Session controls</b> in Conditional Access allow you to limit the experience within a cloud app. Setting a strict <b>Sign-in frequency</b> (e.g., 1 hour) and setting <b>Persistent browser session</b> to 'Never persistent' ensures users are logged out quickly and their session tokens are not saved on unmanaged devices.",
        moreDetails: "This is crucial for preventing data leakage when users access web apps from kiosks or public internet cafes.",
        otherOptions: "MFA proves identity but doesn't limit session lifetime. Client apps and Locations are conditions (the 'If'), whereas Session controls dictate the experience (the 'Then').",
        link: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-conditional-access-session"
      },
      {
        id: 214,
        type: "medium",
        question: "What does the Conditional Access condition 'Client apps: Legacy authentication clients' refer to, and what is the Microsoft-recommended action for them?",
        options: [
          "It refers to modern browsers like Edge; they should be required to use MFA.",
          "It refers to older protocols (like POP, IMAP, SMTP) that do not support modern MFA; they should be blocked entirely.",
          "It refers to Windows 7 devices; they should be forced to upgrade.",
          "It refers to outdated mobile apps; they should be updated via Intune."
        ],
        answer: "It refers to older protocols (like POP, IMAP, SMTP) that do not support modern MFA; they should be blocked entirely.",
        explanation: "<b>Legacy authentication</b> relies on basic authentication protocols (POP3, IMAP, SMTP) that cannot natively interact with modern Multi-Factor Authentication (MFA) prompts.",
        moreDetails: "Because attackers frequently use legacy auth to bypass MFA during password spray attacks, Microsoft strongly recommends creating a Conditional Access policy to explicitly <b>Block</b> all legacy authentication clients.",
        otherOptions: "It specifically refers to authentication protocols, not browsers, OS versions, or mobile app updates.",
        link: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/block-legacy-authentication"
      },
      {
        id: 215,
        type: "easy",
        question: "Which Conditional Access mode allows administrators to evaluate the impact of a new policy without actually enforcing the block or grant controls on end users?",
        options: [
          "Report-only mode",
          "Simulation mode",
          "Audit log mode",
          "Bypass mode"
        ],
        answer: "Report-only mode",
        explanation: "<b>Report-only mode</b> allows administrators to turn on a Conditional Access policy and see how it would affect users (visible in the Entra ID sign-in logs) without actually interrupting their workflow.",
        moreDetails: "This is a critical best practice before enforcing a new policy broadly, preventing accidental lockouts of executives or service accounts.",
        otherOptions: "The feature is specifically named 'Report-only'. Simulation mode does not exist natively for CA policies in this context.",
        link: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-conditional-access-report-only"
      }
    ]
  },
  {
    id: 14,
    term: "Intune Device Enrollment",
    category: "Manage devices and tenant applications",
    questions: [
      {
        id: 216,
        type: "easy",
        question: "What is the most seamless way for a company-owned Windows 11 device to automatically enroll into Microsoft Intune during the Out-of-Box Experience (OOBE)?",
        options: [
          "Installing the Intune Company Portal app manually.",
          "Configuring MDM User Scope for Automatic Enrollment alongside Entra ID Join.",
          "Applying a Provisioning Package via USB.",
          "Running a PowerShell script to install the management extension."
        ],
        answer: "Configuring MDM User Scope for Automatic Enrollment alongside Entra ID Join.",
        explanation: "By configuring the <b>MDM User Scope</b> in Entra ID to 'All' or 'Some', Windows devices will automatically enroll into Intune the moment the user joins the device to Entra ID during the OOBE (or via Autopilot).",
        moreDetails: "This provides a zero-touch enrollment experience, linking the identity join directly with the mobile device management enrollment.",
        otherOptions: "Company Portal is typically for BYOD. Provisioning packages and scripts are manual interventions.",
        link: "https://learn.microsoft.com/en-us/mem/intune/enrollment/windows-enroll"
      },
      {
        id: 217,
        type: "medium",
        question: "You want to prevent employees from enrolling their personal (BYOD) Windows laptops into Intune, while still allowing company-owned devices to enroll. Which Intune feature should you use?",
        options: [
          "Device Compliance Policies",
          "Enrollment Device Platform Restrictions",
          "App Protection Policies",
          "Conditional Access"
        ],
        answer: "Enrollment Device Platform Restrictions",
        explanation: "<b>Enrollment restrictions</b> allow administrators to block specific platforms (e.g., block iOS entirely) or block personally owned devices from enrolling in Intune.",
        moreDetails: "Intune determines if a device is 'personally owned' versus 'corporate-owned' based on how it enrolls (e.g., Autopilot devices and pre-imported hardware hashes are automatically corporate-owned).",
        otherOptions: "Compliance policies evaluate enrolled devices. App protection secures apps, not enrollment. CA restricts access based on enrollment, but doesn't block the enrollment action itself.",
        link: "https://learn.microsoft.com/en-us/mem/intune/enrollment/enrollment-restrictions-set"
      },
      {
        id: 218,
        type: "hard",
        question: "An organization needs to bulk-enroll 500 Android kiosks using a single user account. However, a standard Entra ID account is limited to enrolling 15 devices. What should the administrator create?",
        options: [
          "A Device Enrollment Manager (DEM) account.",
          "A global administrator account.",
          "A Service Principal Name (SPN).",
          "A Shared Mailbox account."
        ],
        answer: "A Device Enrollment Manager (DEM) account.",
        explanation: "A <b>Device Enrollment Manager (DEM)</b> is a special Intune permission applied to an Entra ID user account that allows that account to enroll up to 1,000 devices.",
        moreDetails: "DEM accounts are explicitly designed for bulk enrollment scenarios, such as provisioning fleets of kiosks, ruggedized devices, or point-of-sale systems where a dedicated user identity per device is unnecessary.",
        otherOptions: "Global admins are still bound by the standard device limit unless assigned DEM status. SPNs and Shared Mailboxes cannot enroll devices.",
        link: "https://learn.microsoft.com/en-us/mem/intune/enrollment/device-enrollment-manager-enroll"
      },
      {
        id: 219,
        type: "medium",
        question: "To enroll company-owned iOS and macOS devices with zero-touch provisioning and supervise them out of the box, what Apple portal must be integrated with Intune?",
        options: [
          "Apple Developer Enterprise Program",
          "Apple Business Manager (ABM) / Apple School Manager (ASM)",
          "iCloud for Windows",
          "macOS Server Profile Manager"
        ],
        answer: "Apple Business Manager (ABM) / Apple School Manager (ASM)",
        explanation: "<b>Apple Business Manager</b> (or Apple School Manager) integrates with Intune to provide <b>Automated Device Enrollment (ADE)</b>. This is Apple's equivalent to Windows Autopilot.",
        moreDetails: "When the Apple device turns on, it contacts Apple, sees it is owned by the organization, and is forced to enroll into Intune, granting the highest level of management control ('Supervised' mode).",
        otherOptions: "Apple Developer program is for writing apps. iCloud is consumer storage. Profile manager is Apple's own legacy MDM.",
        link: "https://learn.microsoft.com/en-us/mem/intune/enrollment/device-enrollment-program-enroll-ios"
      },
      {
        id: 220,
        type: "easy",
        question: "When a user enrolls their personal Android phone using Android Enterprise Personally-Owned Work Profile, how does Intune handle their personal data?",
        options: [
          "Intune takes full control of the device and can view personal SMS messages.",
          "Intune creates a secure, separated 'Work Profile' container; the IT admin cannot view, wipe, or control personal apps and data outside this container.",
          "Intune deletes all personal apps to ensure security.",
          "Intune requires the user to dual-boot the phone."
        ],
        answer: "Intune creates a secure, separated 'Work Profile' container; the IT admin cannot view, wipe, or control personal apps and data outside this container.",
        explanation: "The <b>Android Enterprise Work Profile</b> creates a distinct, encrypted boundary on the device. Work apps are marked with a briefcase icon. IT administrators can only manage, wipe, and view data within that specific work profile.",
        moreDetails: "This provides excellent user privacy, guaranteeing that personal photos, texts, and apps remain completely invisible and untouched by corporate IT.",
        otherOptions: "Intune never views personal SMS or deletes personal apps in a BYOD Work Profile scenario.",
        link: "https://learn.microsoft.com/en-us/mem/intune/user-help/what-happens-when-you-create-a-work-profile-android"
      }
    ]
  },
  {
    id: 15,
    term: "Windows App Deployment",
    category: "Manage devices and tenant applications",
    questions: [
      {
        id: 221,
        type: "easy",
        question: "What is the recommended method for deploying Microsoft Word, Excel, and PowerPoint to Windows 10/11 devices using Intune?",
        options: [
          "Upload individual MSIs for each application.",
          "Use the built-in 'Microsoft 365 Apps for Windows 10 and later' app type.",
          "Require users to download them from the Microsoft Store.",
          "Deploy them via a PowerShell script that downloads from a web server."
        ],
        answer: "Use the built-in 'Microsoft 365 Apps for Windows 10 and later' app type.",
        explanation: "Intune has a native, optimized app type specifically for <b>Microsoft 365 Apps</b>. It allows administrators to easily select which Office apps to install, choose the update channel, and configure XML settings via a simple GUI.",
        moreDetails: "This avoids the complexity of manually packaging the large Office deployment toolkit installers.",
        otherOptions: "Uploading MSIs or using scripts is overly complex and unnecessary given the native integration.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/apps-add-office365"
      },
      {
        id: 222,
        type: "medium",
        question: "Before you can upload a complex legacy Windows application (like an .exe installer) into Intune as a Win32 app, what must you do first?",
        options: [
          "Convert the .exe to an .msi using a third-party tool.",
          "Package the installation files using the Microsoft Win32 Content Prep Tool to create an .intunewin file.",
          "Upload the .exe directly into the Line-of-Business (LOB) app section.",
          "Zip the folder and upload it directly."
        ],
        answer: "Package the installation files using the Microsoft Win32 Content Prep Tool to create an .intunewin file.",
        explanation: "Intune requires Win32 apps to be packaged into a proprietary <b>.intunewin</b> format using the <b>Microsoft Win32 Content Prep Tool</b> before they can be uploaded to the portal.",
        moreDetails: "This tool encrypts and compresses the installation files. Once uploaded, administrators must manually define the install/uninstall command lines, detection rules, and requirements.",
        otherOptions: "LOB apps only accept native .msi, .appx, or .msix files, not .exe files. Zipping the folder natively does not work.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/apps-win32-prepare"
      },
      {
        id: 223,
        type: "hard",
        question: "When configuring a Win32 app in Intune, what is the purpose of a 'Detection Rule'?",
        options: [
          "To detect if the user has an active internet connection.",
          "To detect if the application contains malware before installing.",
          "To allow the Intune Management Extension to verify whether the app successfully installed or is already present on the device.",
          "To detect if the user has an appropriate license."
        ],
        answer: "To allow the Intune Management Extension to verify whether the app successfully installed or is already present on the device.",
        explanation: "<b>Detection rules</b> (checking for a specific file, registry key, or MSI product code) are mandatory for Win32 apps. They tell the Intune agent how to prove that the application is actually installed.",
        moreDetails: "If the detection rule finds the artifact, Intune reports a 'Success' status and won't attempt to install it again. If the detection rule fails after the installer runs, Intune reports an installation failure.",
        otherOptions: "Detection rules are purely for installation state validation, not malware scanning, licensing, or network checks.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/apps-win32-add#step-4-detection-rules"
      },
      {
        id: 224,
        type: "medium",
        question: "Microsoft strongly recommends NOT mixing Win32 apps and Line-of-Business (LOB) apps during which critical Windows deployment phase?",
        options: [
          "During an in-place upgrade.",
          "During the Windows Autopilot Enrollment Status Page (ESP) phase.",
          "During a feature update.",
          "During normal background syncing."
        ],
        answer: "During the Windows Autopilot Enrollment Status Page (ESP) phase.",
        explanation: "Microsoft explicitly warns against mixing Win32 apps and LOB (.msi) apps targeting the same device during the <b>Autopilot ESP</b>.",
        moreDetails: "Both app types use the Windows Trusted Installer service. If the Intune Management Extension (deploying Win32) and the native MDM agent (deploying LOB) try to use the installer simultaneously, it causes conflicts, often causing the Autopilot deployment to fail and timeout.",
        otherOptions: "The conflict specifically breaks the critical OOBE Autopilot provisioning phase.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/apps-win32-app-management#prerequisites"
      },
      {
        id: 225,
        type: "easy",
        question: "If you assign an application to a user group as 'Available for enrolled devices', how does the end-user get the application?",
        options: [
          "It installs automatically in the background.",
          "The user must open the Intune Company Portal app and manually click 'Install'.",
          "It is emailed to them as an attachment.",
          "They must download it from the public Microsoft Store."
        ],
        answer: "The user must open the Intune Company Portal app and manually click 'Install'.",
        explanation: "An <b>Available</b> assignment means the app is completely optional. It is published to the organization's private <b>Company Portal</b>, where the user can browse and choose to install it on demand.",
        moreDetails: "Conversely, a 'Required' assignment forces the app to install silently in the background without user interaction.",
        otherOptions: "Automatic installation is 'Required'. It is not emailed. It is hosted in the Company Portal, not the public Store.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/apps-deploy"
      }
    ]
  },
  {
    id: 16,
    term: "App Protection Policies (MAM)",
    category: "Manage devices and tenant applications",
    questions: [
      {
        id: 226,
        type: "easy",
        question: "What is the primary benefit of Intune <b>App Protection Policies (MAM)</b>?",
        options: [
          "They prevent users from installing personal apps like Facebook on their phones.",
          "They protect and isolate corporate data inside specific managed applications, even on unmanaged, personal devices.",
          "They encrypt the entire hard drive of a device.",
          "They deploy applications to devices."
        ],
        answer: "They protect and isolate corporate data inside specific managed applications, even on unmanaged, personal devices.",
        explanation: "<b>App Protection Policies</b> (Mobile Application Management or MAM) secure the organization's data at the app level. You can protect corporate data inside apps like Outlook or Word, without needing to enroll or control the user's entire personal device (MDM).",
        moreDetails: "This is the cornerstone of modern BYOD security, balancing corporate data protection with user privacy.",
        otherOptions: "MAM does not prevent personal app installation or encrypt the whole device (that requires MDM). It protects data, rather than deploying the apps themselves.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/app-protection-policy"
      },
      {
        id: 227,
        type: "medium",
        question: "Which of the following is a common data transfer restriction enforced by an App Protection Policy?",
        options: [
          "Preventing the device from connecting to public Wi-Fi.",
          "Preventing the user from copying text from a corporate email in Outlook and pasting it into their personal Twitter app.",
          "Preventing the user from making phone calls.",
          "Preventing the device from charging via USB."
        ],
        answer: "Preventing the user from copying text from a corporate email in Outlook and pasting it into their personal Twitter app.",
        explanation: "A key feature of App Protection Policies is controlling data egress. By restricting <b>Copy/Paste/Cut</b> actions to 'Policy managed apps only', you prevent corporate data from leaking into personal, unmanaged applications.",
        moreDetails: "Administrators can also block users from saving corporate files to personal cloud storage (like Google Drive) and restrict them to OneDrive for Business.",
        otherOptions: "MAM cannot control device-level features like Wi-Fi, phone calls, or hardware ports. It only controls the behavior within managed apps.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/app-protection-policy-settings-ios"
      },
      {
        id: 228,
        type: "hard",
        question: "What does the 'Conditional Launch' setting 'Offline grace period' do in an App Protection Policy?",
        options: [
          "It blocks the app immediately if the device goes offline.",
          "It defines how long a user can continue accessing the managed app without connecting to the internet to check in with Intune, after which access is blocked or data is wiped.",
          "It extends the battery life of the device when offline.",
          "It allows the user to play offline games."
        ],
        answer: "It defines how long a user can continue accessing the managed app without connecting to the internet to check in with Intune, after which access is blocked or data is wiped.",
        explanation: "The <b>Offline grace period</b> is a security control. If an employee leaves the company, their access is revoked in the cloud. If their device is offline, it won't receive the wipe command immediately. The grace period ensures that after a set time (e.g., 720 minutes) without checking in, the app automatically blocks access or wipes the corporate data locally.",
        moreDetails: "This prevents a malicious actor from putting a device in airplane mode indefinitely to retain access to cached corporate data.",
        otherOptions: "It is a security timer, not a battery optimizer or an immediate block.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/app-protection-policy-settings-android#conditional-launch"
      },
      {
        id: 229,
        type: "medium",
        question: "For an application to be targeted by Intune App Protection Policies, it must integrate with what Microsoft technology?",
        options: [
          "The Intune App SDK or the Intune App Wrapping Tool.",
          "Microsoft Defender for Endpoint.",
          "Windows Defender Firewall.",
          "Azure Virtual Desktop."
        ],
        answer: "The Intune App SDK or the Intune App Wrapping Tool.",
        explanation: "MAM policies cannot be applied to just any app in the app store. The application must be enlightened, meaning the developer has integrated the <b>Intune App SDK</b>, or an administrator has used the <b>App Wrapping Tool</b> on a custom line-of-business app.",
        moreDetails: "All core Microsoft 365 apps (Outlook, Word, Teams, Edge) natively include the Intune SDK. Many third-party partners (like Zoom or Adobe) also build the SDK into their enterprise apps.",
        otherOptions: "Defender and AVD are unrelated to making mobile apps compatible with MAM data restrictions.",
        link: "https://learn.microsoft.com/en-us/mem/intune/developer/app-sdk-get-started"
      },
      {
        id: 230,
        type: "easy",
        question: "An employee leaves the company, and they were using their personal phone for work (BYOD) via MAM. What action should the IT admin take in Intune to secure the data?",
        options: [
          "Initiate a Full Device Wipe.",
          "Initiate an App Selective Wipe.",
          "Change the user's device PIN.",
          "Brick the phone."
        ],
        answer: "Initiate an App Selective Wipe.",
        explanation: "An <b>App Selective Wipe</b> removes only the corporate data securely stored within the MAM-protected apps (like corporate emails in Outlook), leaving all the user's personal apps, photos, and data completely untouched.",
        moreDetails: "Because it's a BYOD device, a Full Device Wipe would illegally/unethically destroy the user's personal property. Selective wipe is the precise tool for this scenario.",
        otherOptions: "Full wipe destroys personal data. Intune cannot brick phones or change personal device PINs on unenrolled MAM devices.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/apps-selective-wipe"
      }
    ]
  },
  {
    id: 17,
    term: "App Configuration Policies",
    category: "Manage devices and tenant applications",
    questions: [
      {
        id: 231,
        type: "easy",
        question: "What is the purpose of an <b>App Configuration Policy</b> in Intune?",
        options: [
          "To provide apps with pre-configured settings (like server URLs or user preferences) so the user doesn't have to enter them manually.",
          "To block users from opening specific apps.",
          "To deploy the app installation files.",
          "To wipe corporate data from the app."
        ],
        answer: "To provide apps with pre-configured settings (like server URLs or user preferences) so the user doesn't have to enter them manually.",
        explanation: "<b>App Configuration Policies</b> allow administrators to push settings directly into an app. This improves user experience and security by preventing end-users from having to type in complex server addresses or toggle specific privacy settings.",
        moreDetails: "For example, you can use an App Configuration Policy to automatically populate a user's UPN in the Outlook login screen, or configure a specific homepage in Microsoft Edge.",
        otherOptions: "Blocking apps is App Protection/Endpoint Security. Deploying apps is App Assignment. Wiping data is a Remote Action.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/app-configuration-policies-overview"
      },
      {
        id: 232,
        type: "medium",
        question: "App Configuration Policies can be delivered through two different channels based on device management state. What are they?",
        options: [
          "Managed Devices (MDM) channel and Managed Apps (MAM) channel.",
          "Wi-Fi channel and Cellular channel.",
          "Windows channel and Linux channel.",
          "Active Directory channel and Local Workgroup channel."
        ],
        answer: "Managed Devices (MDM) channel and Managed Apps (MAM) channel.",
        explanation: "Intune can deliver App Configuration Policies to apps on <b>Managed Devices</b> (where the OS is enrolled in Intune via MDM) or to <b>Managed Apps</b> (where the device is unmanaged BYOD, but the app itself is managed via MAM App Protection Policies).",
        moreDetails: "This flexibility ensures that you can configure corporate apps like Outlook regardless of whether the organization owns the physical phone or not.",
        otherOptions: "The other options are nonsensical network or OS boundaries.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/app-configuration-policies-overview#managed-device-and-managed-app-routing"
      },
      {
        id: 233,
        type: "hard",
        question: "When creating an App Configuration Policy for an iOS/iPadOS managed device, what format can you use to input complex, custom configuration keys provided by a third-party app developer?",
        options: [
          "A PowerShell script.",
          "An XML data file.",
          "A JSON file or the Configuration Designer (Key/Value pairs).",
          "A CSV spreadsheet."
        ],
        answer: "A JSON file or the Configuration Designer (Key/Value pairs).",
        explanation: "For Managed Device app configuration, Intune provides a <b>Configuration Designer</b> (where you manually type Keys, Value Types, and Values) or an option to enter/upload the raw data via <b>JSON format</b>.",
        moreDetails: "App developers often publish their supported configuration keys in their documentation. Using the XML/JSON editor allows for rapid copy-pasting of complex nested arrays that the simple key/value designer might not support.",
        otherOptions: "PowerShell is for OS scripting. XML is used for Windows OMA-URI, but iOS/Android app config relies on JSON/Plists mapped to the designer.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/app-configuration-policies-use-ios"
      },
      {
        id: 234,
        type: "medium",
        question: "In an App Configuration Policy, how can you dynamically populate a setting with the specific logged-in user's email address without hardcoding it for hundreds of users?",
        options: [
          "Write a custom API integration.",
          "Use configuration tokens (e.g., {{mail}} or {{userprincipalname}}).",
          "You must create a separate policy for every single user.",
          "Ask the user to type it in."
        ],
        answer: "Use configuration tokens (e.g., {{mail}} or {{userprincipalname}}).",
        explanation: "Intune supports <b>configuration tokens</b> (variables enclosed in double curly braces) within App Configuration Policies. When the policy applies, Intune dynamically replaces the token with the actual data from the user's Entra ID profile.",
        moreDetails: "Common tokens include `{{mail}}`, `{{userprincipalname}}`, `{{partialupn}}`, and device tokens like `{{serialnumber}}`. This allows a single policy to scale across thousands of users.",
        otherOptions: "Creating separate policies is unscalable. Asking the user defeats the purpose of the policy.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/app-configuration-policies-use-ios#tokens-used-in-the-property-list"
      },
      {
        id: 235,
        type: "easy",
        question: "Which Microsoft application is most commonly managed via App Configuration Policies to ensure users only browse the internet securely, potentially forcing a VPN connection or setting a corporate homepage?",
        options: [
          "Microsoft Edge",
          "Microsoft Paint",
          "Notepad",
          "Calculator"
        ],
        answer: "Microsoft Edge",
        explanation: "<b>Microsoft Edge</b> for mobile devices is heavily managed using App Configuration Policies. Administrators use it to configure the homepage, disable incognito mode, configure bookmarks, and enforce Azure AD Application Proxy access.",
        moreDetails: "This ensures that when a user clicks a link in a managed Outlook email, it opens securely within managed Edge, keeping the data within the corporate boundary.",
        otherOptions: "Paint, Notepad, and Calculator are local utilities, not managed enterprise mobile apps.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/manage-microsoft-edge"
      }
    ]
  },
  {
    id: 18,
    term: "Device Lifecycle and Remote Actions",
    category: "Manage devices and tenant applications",
    questions: [
      {
        id: 236,
        type: "easy",
        question: "A company laptop has been stolen. Which Intune remote action should you trigger to permanently delete all corporate and personal data, applications, and settings, returning the device to factory defaults?",
        options: [
          "Retire",
          "Wipe",
          "Sync",
          "Remote Lock"
        ],
        answer: "Wipe",
        explanation: "The <b>Wipe</b> action restores a device to its factory default settings. It securely and permanently deletes all user data, applications, and settings on the device.",
        moreDetails: "Wipe is the 'nuclear option' used when a device is lost, stolen, or being completely disposed of. The device will be removed from Intune management once the wipe completes.",
        otherOptions: "Retire removes only corporate data. Sync forces a check-in. Remote Lock simply locks the screen.",
        link: "https://learn.microsoft.com/en-us/mem/intune/remote-actions/devices-wipe"
      },
      {
        id: 237,
        type: "medium",
        question: "What is the difference between the 'Wipe' action and the 'Retire' action in Intune?",
        options: [
          "Wipe destroys the physical hardware; Retire disables the user account.",
          "Wipe removes all data and resets the OS; Retire removes only managed corporate data and apps, leaving the user's personal data intact.",
          "Wipe is for Windows; Retire is for iOS.",
          "There is no difference; they are synonymous."
        ],
        answer: "Wipe removes all data and resets the OS; Retire removes only managed corporate data and apps, leaving the user's personal data intact.",
        explanation: "<b>Retire</b> is specifically designed for BYOD (Bring Your Own Device) scenarios. When an employee leaves, 'Retire' removes the MDM profile, Wi-Fi profiles, corporate email, and managed apps, but absolutely does not touch personal photos or apps. <b>Wipe</b> destroys everything on the device.",
        moreDetails: "Using Wipe on a personal BYOD device is generally a violation of user privacy and company policy.",
        otherOptions: "They do not destroy hardware. They both work across multiple OS platforms.",
        link: "https://learn.microsoft.com/en-us/mem/intune/remote-actions/devices-wipe#retire"
      },
      {
        id: 238,
        type: "hard",
        question: "You want to re-purpose a Windows 11 device for a new user. You want to remove the previous user's files and apps, but you want to KEEP the device enrolled in Intune and joined to Entra ID. Which remote action do you use?",
        options: [
          "Fresh Start",
          "Autopilot Reset",
          "Retire",
          "Delete"
        ],
        answer: "Autopilot Reset",
        explanation: "<b>Autopilot Reset</b> removes personal files, apps, and settings, bringing the device back to the login screen. Crucially, it maintains the device's connection to Entra ID and Intune, making it instantly ready for the next employee to log in.",
        moreDetails: "This saves immense IT time compared to a full wipe, as the device does not need to go through the full OOBE and enrollment process again.",
        otherOptions: "Fresh Start removes OEM bloatware and unenrolls it if 'retain user data' isn't checked. Retire unenrolls the device. Delete just removes the record from the Intune console.",
        link: "https://learn.microsoft.com/en-us/mem/intune/remote-actions/devices-wipe#windows-autopilot-reset"
      },
      {
        id: 239,
        type: "medium",
        question: "An IT administrator makes an urgent change to a compliance policy and needs a specific remote Windows device to evaluate the new policy immediately, rather than waiting 8 hours for the standard check-in. Which action should they use?",
        options: [
          "Send Custom Notification",
          "Sync",
          "Restart",
          "Update Windows Defender Signatures"
        ],
        answer: "Sync",
        explanation: "The <b>Sync</b> device action forces the selected device to immediately connect with Intune to check in and receive any pending policies, app deployments, or remote actions.",
        moreDetails: "This is a daily tool for Intune administrators troubleshooting policy application or deploying urgent configurations.",
        otherOptions: "Notifications just send a message. Restart reboots the PC. Updating signatures only updates the antivirus, not Intune policies.",
        link: "https://learn.microsoft.com/en-us/mem/intune/remote-actions/device-sync"
      },
      {
        id: 240,
        type: "easy",
        question: "A user forgot the PIN to their corporate-owned Android tablet. Which remote action in Intune allows the administrator to assist them?",
        options: [
          "Bypass Activation Lock",
          "Remove Passcode",
          "Locate Device",
          "BitLocker Key Rotation"
        ],
        answer: "Remove Passcode",
        explanation: "For managed Android and iOS devices, administrators can use the <b>Remove Passcode</b> (or Reset Passcode) remote action to clear the forgotten PIN, allowing the user to access the device and set a new one.",
        moreDetails: "This action requires the device to be powered on and connected to the internet. It is not supported on all enrollment types (e.g., heavily restricted BYOD profiles may prevent IT from clearing personal passcodes).",
        otherOptions: "Activation Lock is an Apple theft-deterrent feature. Locate Device finds GPS. BitLocker is for Windows encryption.",
        link: "https://learn.microsoft.com/en-us/mem/intune/remote-actions/device-passcode-reset"
      }
    ]
  },
  {
    id: 19,
    term: "Endpoint Analytics",
    category: "Manage devices and tenant applications",
    questions: [
      {
        id: 241,
        type: "easy",
        question: "What is the primary goal of <b>Endpoint Analytics</b> in Microsoft Intune?",
        options: [
          "To scan devices for malware and viruses.",
          "To provide metrics and insights that help IT understand and improve the end-user experience on their devices.",
          "To track exactly which websites employees are visiting.",
          "To process payroll and HR analytics."
        ],
        answer: "To provide metrics and insights that help IT understand and improve the end-user experience on their devices.",
        explanation: "<b>Endpoint Analytics</b> focuses on the 'User Experience'. It helps IT identify hardware or software issues slowing down users—like long boot times or crashing applications—before the users even complain to the helpdesk.",
        moreDetails: "It shifts IT from being reactive (waiting for tickets) to being proactive in resolving environmental issues.",
        otherOptions: "Malware is Defender. Web tracking is proxy/Defender for Cloud Apps. Payroll is HR.",
        link: "https://learn.microsoft.com/en-us/mem/analytics/overview"
      },
      {
        id: 242,
        type: "medium",
        question: "Which Endpoint Analytics report would you use to identify models of laptops in your fleet that are taking an excessively long time to get from the power-on state to a usable desktop?",
        options: [
          "Application Reliability",
          "Startup Performance",
          "Work from anywhere",
          "Battery health"
        ],
        answer: "Startup Performance",
        explanation: "The <b>Startup Performance</b> report breaks down exactly how long devices take to boot. It separates the time into 'Core boot time' (hardware/OS initialization) and 'Core sign-in time' (Group Policy processing, desktop loading).",
        moreDetails: "This helps IT pinpoint whether slow boots are caused by aging hardware (replace HDD with SSD) or bloated IT policies (too many startup scripts).",
        otherOptions: "App reliability tracks crashing apps. Work from anywhere tracks Windows 11 readiness. Battery health is a separate metric.",
        link: "https://learn.microsoft.com/en-us/mem/analytics/startup-performance"
      },
      {
        id: 243,
        type: "hard",
        question: "You notice that a specific internal application is frequently crashing across the organization. You want Intune to automatically detect when a user's app is broken and run a PowerShell script to clear the app's cache and fix it without user interaction. What feature do you use?",
        options: [
          "Win32 App Supersedence",
          "Proactive Remediations (Remediations)",
          "App Protection Policies",
          "Compliance Policies"
        ],
        answer: "Proactive Remediations (Remediations)",
        explanation: "<b>Remediations</b> (formerly Proactive Remediations) are script packages consisting of a Detection script and a Remediation script. They run on a schedule on the endpoint.",
        moreDetails: "If the Detection script finds an issue (e.g., 'Cache file is corrupted'), it exits with an error code, which automatically triggers the Remediation script (e.g., 'Delete the cache file') to silently fix the issue in the background.",
        otherOptions: "Supersedence replaces old apps. App protection secures data. Compliance policies flag status but don't run custom remediation scripts directly.",
        link: "https://learn.microsoft.com/en-us/mem/analytics/proactive-remediations"
      },
      {
        id: 244,
        type: "medium",
        question: "Your CIO wants to know what percentage of the current Windows 10 fleet meets the strict hardware requirements (TPM 2.0, CPU generation) to upgrade to Windows 11. Which Endpoint Analytics report provides this data?",
        options: [
          "Device Compliance report",
          "Work from anywhere report",
          "Feature Update failures report",
          "Application Reliability report"
        ],
        answer: "Work from anywhere report",
        explanation: "The <b>Work from anywhere</b> report (specifically the Windows 11 readiness tab) evaluates every managed device's CPU, RAM, disk, and TPM against the Windows 11 hardware requirements.",
        moreDetails: "It categorizes devices as Capable, Not Capable, or Unknown, providing IT with an exact list of hardware that must be replaced before a company-wide OS upgrade.",
        otherOptions: "Compliance reports check security rules, not OS upgrade readiness. Feature update failures track updates currently in progress.",
        link: "https://learn.microsoft.com/en-us/mem/analytics/work-from-anywhere"
      },
      {
        id: 245,
        type: "easy",
        question: "To gather data for Endpoint Analytics from Intune-managed Windows devices, what agent processes the telemetry?",
        options: [
          "The Configuration Manager client only.",
          "The Intune Management Extension (IME).",
          "The Windows Update Agent.",
          "A third-party VPN client."
        ],
        answer: "The Intune Management Extension (IME).",
        explanation: "For Intune-enrolled cloud-native devices, the <b>Intune Management Extension (IME)</b> is responsible for gathering and sending the telemetry data (boot times, app crashes) to the Endpoint Analytics cloud service.",
        moreDetails: "Devices must be running a supported version of Windows and have the 'Enable Endpoint analytics' policy applied.",
        otherOptions: "ConfigMgr client does this for co-managed devices, but IME is the native Intune agent. Windows Update and VPNs are unrelated.",
        link: "https://learn.microsoft.com/en-us/mem/analytics/enroll-intune"
      }
    ]
  },
  {
    id: 20,
    term: "Endpoint Security Policies",
    category: "Manage devices and tenant applications",
    questions: [
      {
        id: 246,
        type: "easy",
        question: "What is the primary advantage of using the <b>Endpoint Security</b> node in the Intune console rather than standard Device Configuration profiles?",
        options: [
          "It is the only place to deploy applications.",
          "It provides a dedicated, simplified interface specifically for security administrators to manage features like Antivirus, Firewall, and Disk Encryption without seeing unrelated OS settings.",
          "It bypasses Entra ID authentication.",
          "It is free, whereas Configuration Profiles require premium licenses."
        ],
        answer: "It provides a dedicated, simplified interface specifically for security administrators to manage features like Antivirus, Firewall, and Disk Encryption without seeing unrelated OS settings.",
        explanation: "The <b>Endpoint security</b> node organizes security-specific settings (Defender, BitLocker, Firewall, ASR) into distinct profiles. This allows an organization to implement Role-Based Access Control (RBAC) so that Security Teams can manage security policies without accidentally altering general device settings (like Wi-Fi or Start Menu layouts).",
        moreDetails: "The underlying MDM settings are the same, but the administrative experience is optimized for SecOps.",
        otherOptions: "It doesn't deploy apps, bypass auth, or have different licensing costs than the rest of Intune.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/endpoint-security"
      },
      {
        id: 247,
        type: "medium",
        question: "Which Endpoint Security policy type would you use to enforce silent BitLocker encryption on Windows laptops without requiring any user interaction?",
        options: [
          "Antivirus policy",
          "Disk encryption policy",
          "Firewall policy",
          "Account protection policy"
        ],
        answer: "Disk encryption policy",
        explanation: "The <b>Disk encryption</b> policy manages built-in OS encryption methods like BitLocker for Windows and FileVault for macOS.",
        moreDetails: "Administrators can configure these profiles to silently enable BitLocker, automatically backing up the recovery keys to Entra ID, ensuring compliance without prompting the end-user to create a PIN or save a key to a USB.",
        otherOptions: "Antivirus handles malware. Firewall handles network ports. Account protection handles Windows Hello/Identity.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/endpoint-security-disk-encryption"
      },
      {
        id: 248,
        type: "hard",
        question: "You want to prevent malicious Office macros from launching child processes or downloading executable content. Which Endpoint Security feature provides this specific granular control?",
        options: [
          "Windows Defender Firewall rules",
          "BitLocker Drive Encryption",
          "Attack Surface Reduction (ASR) rules",
          "Endpoint Detection and Response (EDR) onboarding"
        ],
        answer: "Attack Surface Reduction (ASR) rules",
        explanation: "<b>Attack Surface Reduction (ASR) rules</b> are a feature of Microsoft Defender that targets software behaviors frequently abused by attackers, such as Office apps creating child processes (a classic macro malware technique) or scripts launching downloaded executables.",
        moreDetails: "ASR rules can be configured in 'Audit mode' to monitor impact before switching them to 'Block mode' to actively stop the malicious behavior.",
        otherOptions: "Firewalls block network traffic. BitLocker encrypts data at rest. EDR provides post-breach monitoring, whereas ASR is pre-breach prevention.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/endpoint-security-asr"
      },
      {
        id: 249,
        type: "medium",
        question: "What is the purpose of the 'Account protection' policies in the Endpoint security node?",
        options: [
          "To reset user passwords automatically every 30 days.",
          "To manage identity and sign-in security features on the device, such as Windows Hello for Business and Credential Guard.",
          "To protect bank account numbers stored in Excel files.",
          "To create new user accounts in Entra ID."
        ],
        answer: "To manage identity and sign-in security features on the device, such as Windows Hello for Business and Credential Guard.",
        explanation: "<b>Account protection</b> policies help secure the user's identity on the device. This includes configuring Windows Hello for Business (biometrics/PIN instead of passwords) and enabling Credential Guard (using virtualization-based security to protect NTLM hashes and Kerberos tickets from Pass-the-Hash attacks).",
        moreDetails: "These policies are critical for establishing a passwordless and credential-theft-resistant environment.",
        otherOptions: "Password resets are Entra ID policies. Data protection is DLP/MIP. Account creation is Entra ID.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/endpoint-security-account-protection"
      },
      {
        id: 250,
        type: "easy",
        question: "If you have a co-managed environment (Intune and Configuration Manager), which prerequisite must be met before Intune's Endpoint Security policies will apply to the Windows device?",
        options: [
          "The device must be uninstalled from Configuration Manager.",
          "The 'Endpoint Protection' workload slider in Configuration Manager must be moved to Intune.",
          "The device must be upgraded to Windows 11.",
          "The device must be completely wiped and re-enrolled."
        ],
        answer: "The 'Endpoint Protection' workload slider in Configuration Manager must be moved to Intune.",
        explanation: "In a <b>Co-management</b> scenario, authority over specific device features is split. To allow Intune's Endpoint Security policies (like Defender or BitLocker settings) to take effect, the administrator must slide the <b>Endpoint Protection workload</b> over to Intune in the ConfigMgr console.",
        moreDetails: "Until that slider is moved, Configuration Manager retains authority, and any Endpoint Security policies pushed from Intune will be ignored to prevent conflicts.",
        otherOptions: "Uninstalling ConfigMgr breaks co-management. Windows 10 is fully supported. Wiping is unnecessary.",
        link: "https://learn.microsoft.com/en-us/mem/configmgr/comanage/workloads#endpoint-protection"
      }
    ]
  },
  {
    id: 992,
    term: "Identity and Compliance Scenario Steps",
    category: "Manage devices and tenant applications",
    questions: [
      {
        id: 251,
        type: "hard",
        format: "order-steps",
        question: "Arrange the steps to deploy a Custom Compliance Policy in Microsoft Intune:",
        options: [
          "Write a PowerShell discovery script to evaluate the specific setting on the device.",
          "Write a JSON file defining the rules and expected values for compliance.",
          "Upload the PowerShell script to Intune (Compliance policies > Scripts).",
          "Create a new custom Compliance Policy.",
          "Select the uploaded discovery script and upload the JSON rules file.",
          "Assign the policy to a device or user group."
        ],
        answer: "Write Script -> Write JSON -> Upload Script -> Create Policy -> Select Script & Upload JSON -> Assign",
        explanation: "Custom compliance requires two components: the PowerShell script that runs on the device to discover the state, and the JSON file uploaded to the policy itself that tells Intune how to interpret the script's output.",
        moreDetails: "The script must return a single line of JSON-formatted data. The Intune policy then compares that returned JSON against the JSON rules file provided during policy creation.",
        otherOptions: "N/A",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/compliance-custom-script"
      },
      {
        id: 252,
        type: "medium",
        format: "order-steps",
        question: "Arrange the steps an administrator takes to block legacy authentication across the organization using Conditional Access:",
        options: [
          "Navigate to Microsoft Entra ID > Security > Conditional Access.",
          "Create a new Conditional Access policy.",
          "Target 'All users' (excluding emergency break-glass accounts).",
          "Set the 'Client apps' condition to select 'Other clients' (Legacy authentication protocols).",
          "Under 'Grant' controls, select 'Block access'.",
          "Set the policy state to 'On' (or 'Report-only' for initial testing)."
        ],
        answer: "Navigate to CA -> Create Policy -> Target Users -> Set Condition (Legacy Clients) -> Set Block -> Turn On",
        explanation: "Blocking legacy auth is a standard CA policy flow: identify the target (all users minus break-glass), set the condition (legacy clients like POP/IMAP), apply the control (Block), and enable the policy.",
        moreDetails: "Always exclude at least one global administrator (break-glass account) to prevent accidentally locking out the entire tenant if a policy is misconfigured.",
        otherOptions: "N/A",
        link: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/block-legacy-authentication"
      },
      {
        id: 253,
        type: "hard",
        format: "order-steps",
        question: "Arrange the steps to configure and enforce Windows LAPS (Local Administrator Password Solution) using Intune:",
        options: [
          "Enable Windows LAPS in the Microsoft Entra ID tenant settings (Device settings).",
          "Create an Endpoint Security > Account protection policy in Intune.",
          "Select the 'Local admin password solution (Windows LAPS)' profile type.",
          "Configure the backup directory to 'Microsoft Entra ID' and set password complexity rules.",
          "Assign the policy to the targeted Windows devices.",
          "Monitor the device status and view passwords in the Entra ID device properties."
        ],
        answer: "Enable in Entra -> Create Account Protection Policy -> Select LAPS Profile -> Configure Settings -> Assign -> Monitor",
        explanation: "LAPS requires tenant-level enablement first. Then, you use Intune's Endpoint Security (Account protection) to define the LAPS rules (complexity, rotation schedule, backup target) and deploy it to clients.",
        moreDetails: "The clients will then automatically rotate the built-in local admin password and escrow it securely into Entra ID, where authorized admins can retrieve it.",
        otherOptions: "N/A",
        link: "https://learn.microsoft.com/en-us/windows-server/identity/laps/laps-management-intune"
      },
      {
        id: 254,
        type: "medium",
        format: "order-steps",
        question: "Arrange the typical device lifecycle phases when managing a corporately owned asset in Intune:",
        options: [
          "Enroll (Device is registered and management profile is installed via Autopilot/OOBE).",
          "Configure (Wi-Fi, VPN, and security policies are pushed to the device).",
          "Protect (Compliance policies evaluate health, Conditional Access secures apps).",
          "Maintain (Proactive remediations run, apps are updated, remote assistance is provided).",
          "Retire/Wipe (Device is wiped and unenrolled when it reaches end of life or is stolen)."
        ],
        answer: "Enroll -> Configure -> Protect -> Maintain -> Retire/Wipe",
        explanation: "The MDM lifecycle begins with getting the device into the system (Enroll), setting it up (Configure), securing its data (Protect), keeping it healthy over time (Maintain), and finally disposing of it securely (Retire/Wipe).",
        moreDetails: "Understanding this lifecycle is fundamental to endpoint administration and structuring how policies are organized.",
        otherOptions: "N/A",
        link: "https://learn.microsoft.com/en-us/mem/intune/fundamentals/device-lifecycle"
      },
      {
        id: 255,
        type: "hard",
        format: "order-steps",
        question: "Arrange the steps to deploy Windows Hello for Business using the Cloud Trust deployment model:",
        options: [
          "Ensure devices are Hybrid Entra ID joined or Entra ID joined.",
          "Create a Kerberos Server object in the on-premises Active Directory.",
          "Deploy the Entra Kerberos configuration to devices using Intune.",
          "Enable Windows Hello for Business in the Intune enrollment profile or Identity Protection policy.",
          "Users sign in with a password to trigger the WHfB enrollment prompt.",
          "Users configure a PIN/Biometric and can instantly authenticate to on-premises resources via Cloud Trust."
        ],
        answer: "Ensure Join -> Create Kerberos Object -> Deploy Configuration -> Enable WHfB -> User Signs In -> Configure PIN",
        explanation: "Cloud Trust simplifies WHfB deployment by removing the need for complex PKI or ADFS. You simply establish trust by creating a Kerberos Server object in on-prem AD, push the policy via Intune, and the user's PIN is instantly trusted for SSO to legacy local resources via the Entra ID primary refresh token.",
        moreDetails: "If the Kerberos Server object is missing, users will be prompted for a password when trying to access on-prem file shares, even if their PIN is working for the desktop.",
        otherOptions: "N/A",
        link: "https://learn.microsoft.com/en-us/windows/security/identity-protection/hello-for-business/deploy/"
      },
      {
        id: 256,
        type: "medium",
        format: "order-steps",
        question: "Arrange the flow of a Conditional Access policy utilizing a Terms of Use (ToU) agreement:",
        options: [
          "Administrator uploads a PDF containing the Terms of Use to Entra ID.",
          "Administrator creates a Conditional Access policy requiring the ToU for specific apps.",
          "User attempts to access a protected application (e.g., SharePoint).",
          "Entra ID interrupts the authentication flow and presents the PDF.",
          "User reads and accepts the Terms of Use.",
          "Entra ID grants the access token and the user enters the application."
        ],
        answer: "Upload PDF -> Create Policy -> User Attempts Access -> Entra ID Interrupts -> User Accepts -> Token Granted",
        explanation: "Terms of Use are enforced via Conditional Access. The document must be uploaded first, then bound to a CA policy. When a user triggers that policy, the auth flow halts, forces acceptance, records the audit trail, and then proceeds.",
        moreDetails: "If the user declines, access is blocked and an event is logged in the Entra ID sign-in logs.",
        otherOptions: "N/A",
        link: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/terms-of-use"
      }
    ]
  },
  {
    id: 994,
    term: "Multi-Select Identity Scenarios",
    category: "Manage identity and compliance",
    questions: [
      {
        id: 257,
        type: "medium",
        format: "multi-select",
        question: "Which of the following conditions can be evaluated by a Microsoft Entra ID Conditional Access policy? (Select THREE)",
        options: [
          "The user's group membership or role.",
          "The user's typing speed and mouse movements.",
          "The device's compliance status in Intune.",
          "The user's sign-in risk level as determined by Identity Protection.",
          "The battery level of the user's mobile device."
        ],
        multiAnswers: [
          "The user's group membership or role.",
          "The device's compliance status in Intune.",
          "The user's sign-in risk level as determined by Identity Protection."
        ],
        explanation: "Conditional Access uses multiple signals to make access decisions. Common conditions include <b>User/Group</b>, <b>Device Compliance</b>, <b>Location (IP)</b>, <b>Client Apps</b>, and <b>Risk Level</b>.",
        moreDetails: "Behavioral biometrics like typing speed or hardware stats like battery level are not native Conditional Access conditions.",
        otherOptions: "Typing speed and battery level are not Conditional Access signals.",
        link: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-conditional-access-conditions"
      },
      {
        id: 258,
        type: "hard",
        format: "multi-select",
        question: "You need to configure an Intune Compliance Policy for Windows 11. Which of the following settings are natively available in the built-in compliance profile template? (Select THREE)",
        options: [
          "Require BitLocker to be enabled.",
          "Require the device to have a specific registry key value.",
          "Require a minimum OS version.",
          "Require a specific line-of-business app to be installed.",
          "Require Microsoft Defender Antivirus to be active and up to date."
        ],
        multiAnswers: [
          "Require BitLocker to be enabled.",
          "Require a minimum OS version.",
          "Require Microsoft Defender Antivirus to be active and up to date."
        ],
        explanation: "The native Windows compliance template includes settings for <b>BitLocker</b>, <b>OS version thresholds</b>, <b>Password requirements</b>, and <b>Defender Antivirus</b> status.",
        moreDetails: "Checking for a specific registry key or application requires a Custom Compliance script (PowerShell + JSON), not the native template.",
        otherOptions: "Registry keys and specific LOB apps require custom compliance scripts.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/compliance-policy-create-windows"
      },
      {
        id: 259,
        type: "medium",
        format: "multi-select",
        question: "When configuring Local Administrator Password Solution (LAPS) in Intune, which of the following are valid password backup locations? (Select TWO)",
        options: [
          "Microsoft Entra ID.",
          "A local CSV file on the C: drive.",
          "On-premises Active Directory.",
          "An external USB drive."
        ],
        multiAnswers: [
          "Microsoft Entra ID.",
          "On-premises Active Directory."
        ],
        explanation: "Windows LAPS natively supports backing up the local administrator password securely to either <b>Microsoft Entra ID</b> (for cloud/hybrid devices) or <b>On-premises Active Directory</b> (for legacy domains).",
        moreDetails: "You configure the backup directory within the Intune Endpoint Security > Account Protection policy.",
        otherOptions: "CSV files and USB drives are entirely unsecure and unsupported natively.",
        link: "https://learn.microsoft.com/en-us/windows-server/identity/laps/laps-management-intune"
      },
      {
        id: 260,
        type: "hard",
        format: "multi-select",
        question: "Which of the following actions can a Microsoft Entra ID 'Access Review' perform automatically when the review period ends? (Select TWO)",
        options: [
          "Remove access for users who were denied by the reviewer.",
          "Delete the user account from Entra ID permanently.",
          "Remove access for users who did not respond (if configured).",
          "Format the user's Intune-managed device."
        ],
        multiAnswers: [
          "Remove access for users who were denied by the reviewer.",
          "Remove access for users who did not respond (if configured)."
        ],
        explanation: "Access Reviews help manage group memberships and enterprise app assignments. If auto-apply is enabled, the system will automatically <b>remove access for denied users</b> and can also <b>remove access for non-responders</b>.",
        moreDetails: "Access Reviews govern permissions and access; they do not delete user identities or wipe hardware.",
        otherOptions: "Deleting users or wiping devices are not actions performed by Access Reviews.",
        link: "https://learn.microsoft.com/en-us/entra/id-governance/access-reviews-overview"
      }
    ]
  },
  {
    id: 998,
    term: "Multi-Select (Select Two) Identity Scenarios",
    category: "Manage identity and compliance",
    questions: [
      {
        id: 261,
        type: "medium",
        format: "multi-select",
        question: "When configuring a Microsoft Entra ID Device Restriction policy in Intune, which of the following password requirements can be enforced natively? (Select TWO)",
        options: [
          "Minimum password length.",
          "Preventing the use of the 100,000 most common passwords (banned passwords list).",
          "Password expiration (maximum age in days).",
          "Forcing the user to include an emoji in their password."
        ],
        multiAnswers: [
          "Minimum password length.",
          "Password expiration (maximum age in days)."
        ],
        explanation: "Intune Device Restriction policies for Windows natively allow administrators to enforce standard metrics such as <b>Minimum password length</b>, <b>Password complexity</b>, and <b>Password expiration (maximum age)</b>.",
        moreDetails: "Entra ID Password Protection (which bans common passwords) is configured at the tenant level in the Entra portal, not natively inside an Intune Device Restriction profile.",
        otherOptions: "Banned password lists are managed in Entra ID. Emojis cannot be enforced.",
        link: "https://learn.microsoft.com/en-us/mem/intune/configuration/device-restrictions-windows-10"
      },
      {
        id: 262,
        type: "hard",
        format: "multi-select",
        question: "Which of the following scenarios represent a valid use case for implementing Microsoft Entra ID Global Secure Access (Internet Access/Private Access)? (Select TWO)",
        options: [
          "Replacing a traditional legacy VPN to securely access an on-premises web application.",
          "Filtering outbound internet traffic to block malicious or non-compliant web categories.",
          "Imaging bare-metal laptops over the internet via PXE boot.",
          "Providing a local desktop GUI to manage Hyper-V virtual machines."
        ],
        multiAnswers: [
          "Replacing a traditional legacy VPN to securely access an on-premises web application.",
          "Filtering outbound internet traffic to block malicious or non-compliant web categories."
        ],
        explanation: "Global Secure Access provides ZTNA (Zero Trust Network Access). <b>Private Access</b> replaces legacy VPNs for accessing on-prem resources. <b>Internet Access</b> acts as a Secure Web Gateway (SWG) to filter and protect outbound traffic.",
        moreDetails: "It does not provide hardware imaging over the internet, nor is it a virtualization management tool.",
        otherOptions: "Imaging requires MDT/Autopilot. Hyper-V is managed via Hyper-V Manager.",
        link: "https://learn.microsoft.com/en-us/entra/global-secure-access/overview-what-is-global-secure-access"
      },
      {
        id: 263,
        type: "medium",
        format: "multi-select",
        question: "You want to enforce Multi-Factor Authentication (MFA) using Conditional Access, but you want to minimize MFA prompts for users working from the corporate office. Which of the following conditions can you configure to achieve this? (Select TWO)",
        options: [
          "Configure a 'Named location' for the corporate public IP addresses and exclude it from the MFA policy.",
          "Set the policy to only require MFA if the user's sign-in risk is 'High'.",
          "Configure the policy to block access if the user is on a mobile device.",
          "Require the user to log in via a wired Ethernet connection."
        ],
        multiAnswers: [
          "Configure a 'Named location' for the corporate public IP addresses and exclude it from the MFA policy.",
          "Set the policy to only require MFA if the user's sign-in risk is 'High'."
        ],
        explanation: "To reduce MFA friction, you can use <b>Named locations</b> to trust the corporate network IP, or leverage Identity Protection to only require MFA when the sign-in is deemed <b>High risk</b> (e.g., impossible travel).",
        moreDetails: "Conditional access cannot explicitly detect wired vs wireless connections. Blocking mobile devices entirely doesn't solve the MFA prompt frequency issue; it just blocks the devices.",
        otherOptions: "Wired vs wireless is not a CA condition. Blocking mobile devices is not a solution to MFA fatigue.",
        link: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/location-condition"
      }
    ]
  }
];
