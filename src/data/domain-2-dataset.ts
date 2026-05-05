import type { TermData } from './domain-1-dataset';

export const domain2Dataset: TermData[] = [
  {
    id: 11,
    term: "Device Configuration Profiles",
    category: "Manage devices and tenant applications",
    questions: [

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
    ]
  },
  {
    id: 16,
    term: "App Protection Policies (MAM)",
    category: "Manage devices and tenant applications",
    questions: [
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
    ]
  },
  {
    id: 17,
    term: "App Configuration Policies",
    category: "Manage devices and tenant applications",
    questions: [
      {
        id: 233,
        type: "hard",
        question: "When creating an App Configuration Policy for an iOS/iPadOS managed device, what format can you use to input complex, custom configuration keys provided by a third-party app developer?",
        options: [
          "A PowerShell script.",
          "An XML data file.",
          "A JSON file or the Configuration Designer (Key/Value pairs).",
          "A CSV spreadsheet file."
        ],
        answer: "A JSON file or the Configuration Designer (Key/Value pairs).",
        explanation: "For Managed Device app configuration, Intune provides a <b>Configuration Designer</b> (where you manually type Keys, Value Types, and Values) or an option to enter/upload the raw data via <b>JSON format</b>.",
        moreDetails: "App developers often publish their supported configuration keys in their documentation. Using the XML/JSON editor allows for rapid copy-pasting of complex nested arrays that the simple key/value designer might not support.",
        otherOptions: "PowerShell is for OS scripting. XML is used for Windows OMA-URI, but iOS/Android app config relies on JSON/Plists mapped to the designer.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/app-configuration-policies-use-ios"
      },
    ]
  },
  {
    id: 18,
    term: "Device Lifecycle and Remote Actions",
    category: "Manage devices and tenant applications",
    questions: [
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
    ]
  },
  {
    id: 19,
    term: "Endpoint Analytics",
    category: "Manage devices and tenant applications",
    questions: [
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
  },
  {
    id: 99,
    term: "2026 Scenario Based Questions",
    category: "Manage identity and compliance",
    questions: [
      {
        id: 2001,
        type: "hard",
        format: "multiple-choice",
        question: "Your company has a strict Conditional Access policy that requires devices to be 'Hybrid Microsoft Entra joined' to access SharePoint Online. You are rolling out a new Bring Your Own Device (BYOD) program where users enroll their personal Windows 11 devices via Intune. When BYOD users try to access SharePoint, they are blocked. Why is this happening, and how should you adjust the policy?",
        options: [
          "BYOD devices are marked as personal, which automatically fails Conditional Access; change the device ownership to Corporate.",
          "BYOD devices perform a Microsoft Entra registration, not a Hybrid Join; update the Conditional Access policy to require 'Require device to be marked as compliant' instead.",
          "The users do not have Azure AD Premium P2 licenses; assign the licenses to allow BYOD access.",
          "Intune is blocking the connection because it detects a non-domain network; deploy a VPN profile."
        ],
        answer: "BYOD devices perform a Microsoft Entra registration, not a Hybrid Join; update the Conditional Access policy to require 'Require device to be marked as compliant' instead.",
        explanation: "Personal BYOD devices cannot be 'Hybrid Microsoft Entra joined' because that status explicitly requires the device to be joined to a local on-premises Active Directory domain. BYOD devices are typically 'Microsoft Entra registered'.",
        moreDetails: "To allow secure BYOD access, organizations should use Intune Compliance Policies to ensure the device meets security standards, and then configure Conditional Access to 'Require device to be marked as compliant' rather than requiring Hybrid join.",
        otherOptions: "Changing ownership to Corporate doesn't magically join them to the on-prem domain. Licensing is not the cause of this specific CA failure. VPNs are unrelated to the CA Hybrid join requirement.",
        link: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-conditional-access-grant"
      },
      {
        id: 2002,
        type: "hard",
        format: "multiple-choice",
        question: "You have deployed Windows Local Administrator Password Solution (Windows LAPS) natively integrated with Microsoft Entra ID. You configure an Intune endpoint security policy to rotate the LAPS password every 7 days. However, the passwords are not rotating. You discover a legacy GPO for the old Microsoft LAPS is still applied to these Hybrid joined devices. What is the expected behavior?",
        options: [
          "The Intune policy takes precedence because MDM wins over GPO by default in Windows 11.",
          "Windows LAPS goes into an error state because it detects conflicting management sources (GPO vs MDM), pausing all password rotations.",
          "The local LAPS client merges the policies and uses the most restrictive setting (e.g., shortest rotation time).",
          "The GPO overwrites the Intune policy locally, causing the password to rotate to the on-premises AD instead of Entra ID."
        ],
        answer: "Windows LAPS goes into an error state because it detects conflicting management sources (GPO vs MDM), pausing all password rotations.",
        explanation: "Windows LAPS has a built-in safeguard: if it detects that it is being configured by multiple conflicting management authorities (like both Intune MDM policies and local GPOs), it enters a blocked/error state.",
        moreDetails: "When in this state, Windows LAPS will not rotate the password or back it up to either Entra ID or on-premises AD until the administrator removes the conflicting policy (usually the legacy GPO).",
        otherOptions: "MDMWinsOverGP does not apply automatically to LAPS in this specific conflict safeguard scenario. Policies do not merge. The GPO doesn't simply win; the service halts to prevent identity corruption.",
        link: "https://learn.microsoft.com/en-us/windows-server/identity/laps/laps-management-policy-conflicts"
      },
      {
        id: 2003,
        type: "hard",
        format: "multiple-choice",
        question: "A user reports that their custom dictionary, taskbar layout, and Windows theme are no longer syncing to their new Windows 11 device. The organization recently disabled Enterprise State Roaming (ESR) and transitioned fully to OneDrive Known Folder Move (KFM). What is the reason for this issue?",
        options: [
          "OneDrive KFM syncs files (Desktop, Documents, Pictures), not Windows OS settings or app configurations.",
          "The user's OneDrive quota is full, pausing the sync of OS settings.",
          "OneDrive KFM requires a specific Intune policy to sync the AppData folder where the taskbar layout is stored.",
          "The new device is not marked as compliant in Intune."
        ],
        answer: "OneDrive KFM syncs files (Desktop, Documents, Pictures), not Windows OS settings or app configurations.",
        explanation: "Enterprise State Roaming (ESR) was responsible for syncing Windows settings like themes, taskbar layouts, passwords, and custom dictionaries. OneDrive Known Folder Move (KFM) ONLY redirects and syncs user data folders (Desktop, Documents, Pictures).",
        moreDetails: "With the deprecation of ESR in Windows 11, organizations must rely on other methods (like Intune configuration profiles or user experience virtualization) if they wish to mandate specific taskbar layouts, as OneDrive KFM does not handle OS state.",
        otherOptions: "It is not a quota issue. Intune policies configure KFM, but KFM cannot natively sync AppData/OS settings in the way ESR did. Compliance is irrelevant to this specific sync mechanism.",
        link: "https://learn.microsoft.com/en-us/entra/identity/devices/enterprise-state-roaming-windows-settings-reference"
      },
      {
        id: 2004,
        type: "hard",
        format: "multiple-choice",
        question: "Your organization is moving away from Hybrid Microsoft Entra Join to native Microsoft Entra Join for all new laptops. A critical legacy on-premises web application requires Kerberos authentication. Leadership is concerned that Entra Joined devices won't be able to access this application. Is this concern valid?",
        options: [
          "Yes, native Entra Joined devices cannot use Kerberos because they do not have a computer object in the on-premises Active Directory.",
          "No, as long as Microsoft Entra Connect is syncing on-premises identities to the cloud, the Entra Joined device can obtain Kerberos Ticket Granting Tickets (TGTs) for the user.",
          "Yes, the application must be rewritten to support SAML or OIDC before Entra Joined devices can access it.",
          "No, but only if you configure an Always-On VPN that initiates before the user logs into Windows."
        ],
        answer: "No, as long as Microsoft Entra Connect is syncing on-premises identities to the cloud, the Entra Joined device can obtain Kerberos Ticket Granting Tickets (TGTs) for the user.",
        explanation: "Microsoft Entra Joined devices *can* achieve single sign-on (SSO) to on-premises resources that rely on Active Directory (like Kerberos or NTLM).",
        moreDetails: "This works because when a synchronized user signs into the Entra Joined device, the device uses the user's synchronized identity (via Entra Connect/Cloud Sync) to communicate with the local Domain Controller to request a Kerberos TGT, assuming there is line-of-sight to the DC.",
        otherOptions: "The device itself lacks an on-prem computer object, but the *user* authenticates, which is what matters for Kerberos SSO to the app. Rewriting the app is not required. Pre-logon VPN is not strictly required if line-of-sight is established post-logon.",
        link: "https://learn.microsoft.com/en-us/entra/identity/devices/device-sso-to-on-premises-resources"
      },
      {
        id: 2005,
        type: "hard",
        format: "multiple-choice",
        question: "You have a Conditional Access policy blocking access to Microsoft 365 for non-compliant devices. You configure an Intune compliance policy requiring BitLocker, with a 'Mark device noncompliant' grace period of 3 days. A user's device suddenly decrypts its drive. What happens when the user tries to access Exchange Online immediately after decryption?",
        options: [
          "Access is blocked immediately because the hardware state changed, overriding the grace period.",
          "Access is granted. The device enters 'In Grace Period' status, and Conditional Access treats 'In Grace Period' as compliant for the next 3 days.",
          "Access is blocked, and the device is instantly wiped via Intune auto-remediation.",
          "Access is granted, but the user is forced into a read-only mode for Exchange Online."
        ],
        answer: "Access is granted. The device enters 'In Grace Period' status, and Conditional Access treats 'In Grace Period' as compliant for the next 3 days.",
        explanation: "When a compliance policy includes a grace period, a device failing that specific setting is marked as 'In Grace Period' rather than immediately 'Noncompliant'.",
        moreDetails: "Crucially, Microsoft Entra Conditional Access policies treat the 'In Grace Period' state as equivalent to 'Compliant'. Therefore, the user will not be blocked from accessing resources until the 3-day timer expires and the status officially changes to 'Noncompliant'.",
        otherOptions: "Hardware changes do not override the explicitly defined Intune grace period. Auto-wiping does not happen for simple compliance failures. There is no native 'read-only' mode triggered by grace periods.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/actions-for-noncompliance"
      },
      {
        id: 2006,
        type: "hard",
        format: "multiple-choice",
        question: "You are deploying Windows Hello for Business in a Hybrid Microsoft Entra environment. You do not have Active Directory Federation Services (AD FS) infrastructure, and you want to use the Cloud Trust model. Which critical on-premises component must be deployed and configured to support Cloud Trust?",
        options: [
          "A standalone Certificate Authority (CA) to issue user certificates.",
          "Microsoft Entra Kerberos Server object in the on-premises Active Directory.",
          "An always-on VPN to establish trust before login.",
          "A Read-Only Domain Controller (RODC) placed in the Azure DMZ."
        ],
        answer: "Microsoft Entra Kerberos Server object in the on-premises Active Directory.",
        explanation: "Windows Hello for Business Cloud Trust relies on Microsoft Entra ID issuing Kerberos Ticket Granting Tickets (TGTs) on behalf of the on-premises Active Directory.",
        moreDetails: "To facilitate this, you must run the Azure AD Kerberos PowerShell module to create an 'AzureADKerberos' computer object in your on-premises AD. This allows Entra ID to encrypt TGTs that the on-premises DCs can decrypt, granting SSO to local resources without needing complex PKI/Certificate trust or AD FS infrastructure.",
        otherOptions: "Cloud Trust explicitly removes the need for complex PKI (Certificate Trust) or AD FS (Key Trust). A VPN is not fundamentally required for the trust model itself. An RODC in Azure is not related to Hello Cloud Trust.",
        link: "https://learn.microsoft.com/en-us/windows/security/identity-protection/hello-for-business/deploy/hybrid-cloud-trust"
      },
      {
        id: 2007,
        type: "hard",
        format: "multiple-choice",
        question: "You are writing a custom Intune Compliance Policy using a PowerShell script to check for a specific proprietary registry key. You upload the PowerShell script and create the policy. However, all targeted devices are immediately marked as 'Noncompliant' or 'Error'. The Intune Management Extension logs show the script executed successfully. What is the most likely reason for the compliance failure?",
        options: [
          "The script is not digitally signed by a public CA.",
          "The local PowerShell execution policy on the devices is set to 'Restricted'.",
          "The PowerShell script is not returning the output in the strictly required compressed JSON format.",
          "Custom compliance scripts must be written in VBScript, not PowerShell."
        ],
        answer: "The PowerShell script is not returning the output in the strictly required compressed JSON format.",
        explanation: "For an Intune custom compliance PowerShell script to work, it must output its final result as a specifically formatted JSON string using `Write-Output` (e.g., `return @{ 'SettingName' = $value } | ConvertTo-Json -Compress`).",
        moreDetails: "If the script just returns 'True' or exits with a code, Intune cannot parse the result against the JSON discovery file you uploaded during policy creation, resulting in an evaluation error and noncompliant state.",
        otherOptions: "Intune bypasses the local execution policy for its own scripts. Signing is good practice but not the absolute cause of a parsing error if execution succeeded. VBScript is not supported for custom compliance.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/compliance-custom-script"
      },
      {
        id: 2008,
        type: "hard",
        format: "multiple-choice",
        question: "Your organization uses Windows LAPS natively with Microsoft Entra ID. A Helpdesk technician uses the Intune portal to manually rotate the LAPS password for a specific device because they suspect the password was compromised. However, the device is completely powered off and offline. What is the immediate state of the password?",
        options: [
          "The password immediately updates in Entra ID, and the old password on the device is invalidated immediately.",
          "The rotation request is queued in Intune. Entra ID retains the current password until the device powers on, receives the MDM sync, rotates the password locally, and securely posts the new password back to Entra ID.",
          "The password rotation fails instantly because the device is unreachable.",
          "Entra ID generates a new password, but the device must be wiped upon next boot."
        ],
        answer: "The rotation request is queued in Intune. Entra ID retains the current password until the device powers on, receives the MDM sync, rotates the password locally, and securely posts the new password back to Entra ID.",
        explanation: "Windows LAPS is an endpoint-driven process. The device itself is responsible for generating the new local password and securely uploading it to Entra ID.",
        moreDetails: "When a rotation is requested via Intune, Intune simply queues an MDM command. The Entra ID password record does not change until the device comes online, processes the command, generates the new password, and successfully transmits it to the cloud. Therefore, the old password remains valid and viewable until that sync occurs.",
        otherOptions: "Entra ID does not generate the password itself. It does not fail instantly, it queues. The old password isn't magically invalidated offline.",
        link: "https://learn.microsoft.com/en-us/windows-server/identity/laps/laps-scenarios-azure-active-directory"
      },
      {
        id: 2009,
        type: "hard",
        format: "multiple-choice",
        question: "You have an Intune Device Enrollment Restriction policy set to 'Block' personally owned Windows devices. A user purchases a Windows 11 laptop from Best Buy for work and tries to enroll it using the 'Access work or school' settings page. The enrollment is blocked. You need to allow this specific device to enroll without allowing all personal devices. What is the most efficient administrative action?",
        options: [
          "Create a Conditional Access policy excluding this user.",
          "Add the device's hardware hash to the Windows Autopilot devices list, which automatically categorizes it as Corporate.",
          "Change the global enrollment restriction to 'Allow' temporarily.",
          "Instruct the user to use a local account instead of a Microsoft account."
        ],
        answer: "Add the device's hardware hash to the Windows Autopilot devices list, which automatically categorizes it as Corporate.",
        explanation: "If an organization blocks personal device enrollment, Intune relies on Corporate Identifiers to determine if a device is company-owned.",
        moreDetails: "Registering the hardware hash into the Autopilot service explicitly flags the device as a 'Corporate' owned device in Entra/Intune. When the user attempts to enroll it again, the enrollment restriction policy will evaluate it as Corporate and allow the enrollment, without needing to open personal enrollment globally.",
        otherOptions: "CA policies don't override Intune MDM enrollment restrictions directly in this manner. Opening global restrictions is insecure. Local accounts cannot enroll in Entra ID.",
        link: "https://learn.microsoft.com/en-us/mem/intune/enrollment/corporate-identifiers-add"
      },
      {
        id: 2010,
        type: "hard",
        format: "multiple-choice",
        question: "You want to allow users to access SharePoint Online from unmanaged, personal home computers via a web browser, but you must prevent them from downloading, printing, or syncing any documents. How can you achieve this using Microsoft's modern security stack?",
        options: [
          "Configure a Conditional Access policy with a Session Control routing traffic through Microsoft Defender for Cloud Apps (App Enforced Restrictions) to block downloads.",
          "Deploy an Intune App Protection Policy (MAM) to the Microsoft Edge browser on their unmanaged PCs.",
          "Require the devices to Hybrid Entra Join before accessing SharePoint.",
          "Disable downloading globally in the SharePoint Admin Center for all users."
        ],
        answer: "Configure a Conditional Access policy with a Session Control routing traffic through Microsoft Defender for Cloud Apps (App Enforced Restrictions) to block downloads.",
        explanation: "To restrict actions (like downloading or printing) within a web session on an unmanaged device, you must use Conditional Access Session Controls integrated with Microsoft Defender for Cloud Apps (formerly MCAS).",
        moreDetails: "This sets up a reverse proxy. The CA policy detects the device is unmanaged, and applies a 'Use app enforced restrictions' or custom Defender for Cloud Apps policy that inspects the session in real-time, allowing viewing but blocking the download of files.",
        otherOptions: "MAM is primarily for mobile devices (iOS/Android), not full desktop browsers on unmanaged PCs. Hybrid join blocks access entirely (which violates the requirement to *allow* access). Global SharePoint blocks affect managed devices too.",
        link: "https://learn.microsoft.com/en-us/defender-cloud-apps/proxy-intro-aad"
      }
    ]
  },
  {
    id: 992,
    term: "Advanced Identity & Compliance Scenarios (2026 Updates)",
    category: "Manage identity and compliance",
    questions: [
      {
        id: 2001,
        type: "hard",
        question: "Your organization uses Conditional Access to require a 'Compliant Device' to access Microsoft 365 apps. You deploy a new Intune compliance policy with a custom script that checks for a specific registry key. A user reports they are blocked from accessing email immediately after enrolling their new device. The Intune portal shows the device compliance state as 'Not evaluated'. How should you configure the compliance policy settings to prevent this immediate blocking while the custom script runs?",
        options: [
          "Set 'Mark devices with no compliance policy assigned as' to Compliant.",
          "Configure a grace period in the compliance policy, setting 'Mark device noncompliant' to 1 or 2 days instead of 'Immediately'.",
          "Exclude the user from the Conditional Access policy permanently.",
          "Change the Conditional Access policy to 'Require Hybrid Entra ID joined device' instead."
        ],
        answer: "Configure a grace period in the compliance policy, setting 'Mark device noncompliant' to 1 or 2 days instead of 'Immediately'.",
        explanation: "By configuring an action for noncompliance with a grace period (e.g., mark noncompliant after 1 day), the device is considered in a 'grace period' state, which Conditional Access treats as compliant, allowing the user access while the Intune Management Extension runs the custom script.",
        moreDetails: "Custom compliance scripts can take several hours to evaluate upon first enrollment. If the action is set to 'Immediately', Conditional Access will block access until the script returns a result. A grace period provides a smooth onboarding experience.",
        otherOptions: "The policy IS assigned, so 'no policy assigned' setting won't help. Excluding the user defeats security. Changing to Hybrid Join doesn't solve the compliance evaluation delay.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/actions-for-noncompliance"
      },
      {
        id: 2002,
        type: "hard",
        question: "You have deployed Windows Local Administrator Password Solution (Windows LAPS) for Entra ID. A Helpdesk technician is trying to retrieve the local admin password for a device named 'Laptop-01' from the Entra ID portal, but the 'Local administrator password recovery' tab is greyed out. The technician has the 'Helpdesk Administrator' Entra ID role. What is the precise reason for this issue?",
        options: [
          "The device is offline and cannot communicate with Entra ID.",
          "The 'Helpdesk Administrator' role does not have the 'microsoft.directory/deviceLocalCredentials/password/read' permission by default.",
          "Windows LAPS requires the device to be co-managed with Configuration Manager.",
          "The password has already been read by another administrator and cannot be read twice."
        ],
        answer: "The 'Helpdesk Administrator' role does not have the 'microsoft.directory/deviceLocalCredentials/password/read' permission by default.",
        explanation: "By default, only highly privileged roles like Global Administrator or Cloud Device Administrator can read LAPS passwords. To allow Helpdesk staff to read them, you must create a Custom Role with the 'microsoft.directory/deviceLocalCredentials/password/read' permission.",
        moreDetails: "This strict RBAC requirement ensures that local admin passwords are not overly exposed. You can also scope this custom role to specific Administrative Units (AUs) to limit which devices the helpdesk can access.",
        otherOptions: "The device being offline doesn't stop the portal from showing the last backed-up password. LAPS is natively supported in Entra ID without ConfigMgr. Passwords can be read multiple times until rotated.",
        link: "https://learn.microsoft.com/en-us/entra/identity/devices/windows-laps-manage"
      },
      {
        id: 2003,
        type: "hard",
        question: "You configure a Device Cleanup Rule in Intune to delete devices that haven't checked in for 90 days. A user goes on maternity leave for 4 months. When they return, their Intune device record is gone. However, they can still log in to the laptop, but it cannot access company resources due to Conditional Access. What is the status of the device in Entra ID?",
        options: [
          "The Entra ID device record is also automatically deleted when Intune deletes its record.",
          "The Entra ID device record remains active, but the device is no longer managed by Intune, causing it to fail the 'Require device to be marked as compliant' Conditional Access control.",
          "The Entra ID device record is moved to the 'Deleted Objects' container for 30 days.",
          "The device automatically converts to a 'Registered' state instead of 'Joined'."
        ],
        answer: "The Entra ID device record remains active, but the device is no longer managed by Intune, causing it to fail the 'Require device to be marked as compliant' Conditional Access control.",
        explanation: "Intune Device Cleanup Rules ONLY delete the record from Intune. They do not automatically delete the corresponding device object in Entra ID.",
        moreDetails: "Because the Intune record is gone, the device cannot be evaluated for compliance. Therefore, any Conditional Access policy requiring a compliant device will block access. To clean up Entra ID, you must use a separate process (like PowerShell or Entra ID stale device scripts).",
        otherOptions: "Entra ID records are not automatically deleted by Intune cleanup. It doesn't move to deleted objects automatically. It retains its join state, just loses management.",
        link: "https://learn.microsoft.com/en-us/mem/intune/remote-actions/devices-wipe#delete-devices-from-the-intune-portal"
      },
      {
        id: 2004,
        type: "hard",
        question: "An organization is using Defender for Cloud Apps to monitor unsanctioned applications. You want to automatically block access to any app marked as 'Unsanctioned' on all managed Windows endpoints, regardless of whether they are on the corporate network. Which integration must you enable in the Intune and Defender portals to achieve this?",
        options: [
          "Enable the 'Microsoft Defender for Endpoint' integration in Intune and turn on 'Enforce network protection' to block unsanctioned apps.",
          "Configure a VPN profile in Intune that routes all traffic through an Azure Firewall.",
          "Deploy a custom proxy PAC file via Intune to redirect all browser traffic.",
          "Enable 'Block access to apps in the Microsoft Defender for Cloud Apps catalog' directly in the Conditional Access portal."
        ],
        answer: "Enable the 'Microsoft Defender for Endpoint' integration in Intune and turn on 'Enforce network protection' to block unsanctioned apps.",
        explanation: "Defender for Cloud Apps integrates natively with Microsoft Defender for Endpoint (MDE). When an app is tagged as 'Unsanctioned', MDE's Network Protection feature intercepts the traffic at the endpoint and blocks it, even off-network.",
        moreDetails: "This requires Intune to deploy a configuration profile enabling Network Protection in 'Block' mode. This creates a seamless cloud-to-endpoint blocking mechanism without requiring traditional proxies or VPNs.",
        otherOptions: "VPNs and PAC files are legacy approaches. Conditional Access evaluates logins to Entra-integrated apps, not raw network traffic to random unsanctioned web apps.",
        link: "https://learn.microsoft.com/en-us/defender-cloud-apps/mde-integration"
      },
      {
        id: 2005,
        type: "hard",
        question: "A Hybrid Entra ID joined device loses its trust relationship with the on-premises Active Directory domain. The user cannot log in. An administrator removes the device from the local domain and rejoins it. What happens to the device's existing Intune enrollment and Entra ID Hybrid Join state?",
        options: [
          "The device seamlessly reconnects to Intune using its existing certificates without administrative intervention.",
          "The Intune enrollment is broken, and a duplicate Entra ID device object will be created. The device must be wiped or manually re-enrolled.",
          "The device automatically converts from Hybrid Joined to purely Entra ID Joined.",
          "Intune automatically detects the new domain SID and patches the enrollment profile."
        ],
        answer: "The Intune enrollment is broken, and a duplicate Entra ID device object will be created. The device must be wiped or manually re-enrolled.",
        explanation: "Breaking the local AD trust and rejoining the domain generates a new computer SID. Entra Connect syncs this as a completely new device object to Entra ID, creating a duplicate.",
        moreDetails: "The existing Intune enrollment is tied to the old Entra ID object and the old PRT (Primary Refresh Token). The device will no longer receive Intune policies, and the enrollment is effectively orphaned. IT must manually clean up the old records and re-trigger enrollment via Group Policy or wipe the device.",
        otherOptions: "It does not reconnect seamlessly. It does not convert to Entra ID joined (it's still joined to on-prem AD). Intune cannot patch SID changes.",
        link: "https://learn.microsoft.com/en-us/troubleshoot/entra/identity/hybrid/duplicate-device-objects-hybrid-join"
      },
      {
        id: 2006,
        type: "hard",
        question: "Your organization uses Entra ID Privileged Identity Management (PIM). A Helpdesk technician needs to elevate their permissions to 'Intune Administrator' to troubleshoot a critical issue. However, they complain that PIM is requiring them to provide a ticket number and use the Authenticator app, slowing them down. Where are these requirements enforced?",
        options: [
          "In the Conditional Access policy targeting the Intune portal.",
          "In the Entra ID PIM Role settings for the 'Intune Administrator' role.",
          "In the Intune Tenant Administration RBAC settings.",
          "In the Microsoft Defender for Identity portal."
        ],
        answer: "In the Entra ID PIM Role settings for the 'Intune Administrator' role.",
        explanation: "PIM allows global administrators to configure specific activation requirements for each Entra ID role. These settings, such as requiring MFA, requiring justification (ticket number), or requiring approval, are configured directly on the Role within the PIM interface.",
        moreDetails: "This ensures that standing access is eliminated and that every elevation event is securely audited and verified, regardless of the user's initial login conditions.",
        otherOptions: "Conditional access can enforce MFA at login, but PIM enforces it at activation. Intune RBAC doesn't control Entra ID PIM activation rules.",
        link: "https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-how-to-change-default-settings"
      },
      {
        id: 2007,
        type: "hard",
        question: "You deploy Windows LAPS (Local Administrator Password Solution) via Intune. You configure the 'Post-authentication actions' policy to 'Reset the password and logoff the managed account' with a grace period of 8 hours. A technician logs into a server using the LAPS local admin account at 8:00 AM. They disconnect their session but leave it running. What happens exactly at 4:00 PM?",
        options: [
          "The server is abruptly powered off.",
          "The LAPS password is automatically rotated in Entra ID, and the technician's active local admin session is forcibly logged off.",
          "The technician receives a warning prompt allowing them to extend the grace period by 1 hour.",
          "Nothing happens until the technician manually logs off, at which point the password rotates."
        ],
        answer: "The LAPS password is automatically rotated in Entra ID, and the technician's active local admin session is forcibly logged off.",
        explanation: "The 'Post-authentication actions' setting in Windows LAPS natively enforces security hygiene. If set to reset and logoff, once the configured grace period (8 hours) expires after the initial authentication, Windows will forcibly terminate that user's session and rotate the password immediately.",
        moreDetails: "This mitigates the risk of 'pass-the-hash' attacks or unauthorized access from orphaned administrative sessions left running by negligent technicians.",
        otherOptions: "It logs off the user, it doesn't power off the whole server. There are no extension prompts for LAPS post-auth actions. It does not wait for manual logoff if the grace period is reached.",
        link: "https://learn.microsoft.com/en-us/windows/security/identity-protection/laps/laps-scenarios-post-authentication-actions"
      },
      {
        id: 2008,
        type: "hard",
        question: "A user reports their laptop was stolen. You immediately disable their Entra ID account and issue a remote Wipe command from Intune. However, you are concerned the thief might access locally cached corporate emails if the device doesn't connect to the internet to receive the wipe command. What Entra ID action should you take immediately to invalidate their active tokens?",
        options: [
          "Delete the Intune device record.",
          "Select 'Revoke sessions' in the user's Entra ID profile.",
          "Reset their password.",
          "Add them to a blocked Conditional Access group."
        ],
        answer: "Select 'Revoke sessions' in the user's Entra ID profile.",
        explanation: "Revoking sessions in Entra ID forces an immediate revocation of the user's Primary Refresh Token (PRT) and any active session cookies.",
        moreDetails: "While the device might be offline, the moment it attempts to authenticate to any Microsoft 365 service (like Outlook trying to sync), the revoked PRT will be rejected, instantly cutting off access to cloud resources even before the Wipe command is processed.",
        otherOptions: "Deleting the Intune record orphans the device. Resetting the password doesn't immediately invalidate the PRT (it can take up to an hour for continuous access evaluation). Conditional access also relies on token refresh cycles.",
        link: "https://learn.microsoft.com/en-us/entra/identity/users/users-revoke-access"
      },
      {
        id: 2009,
        type: "hard",
        question: "You want to enforce strict security for your IT administrators. You create a Conditional Access policy targeting the 'Intune Administrator' directory role. You want to ensure that if an administrator leaves their desk unlocked, someone else cannot easily use their active session to modify Intune policies. Which Session Control should you configure?",
        options: [
          "Disable persistent browser session.",
          "Sign-in frequency - Periodic reauthentication (e.g., every 1 hour).",
          "Use Conditional Access App Control (Block downloads).",
          "Require Hybrid Entra ID joined device."
        ],
        answer: "Sign-in frequency - Periodic reauthentication (e.g., every 1 hour).",
        explanation: "The 'Sign-in frequency' session control allows you to define the maximum time period before a user is forced to re-authenticate (provide their password/MFA again), regardless of their session activity.",
        moreDetails: "Setting this to a short duration (like 1 hour) for highly privileged roles drastically reduces the window of opportunity for session hijacking or unauthorized physical access to an unlocked workstation.",
        otherOptions: "Persistent browser session only applies after closing the browser. App control for blocking downloads doesn't stop policy modification. Hybrid join restricts where they can log in, not session duration.",
        link: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/howto-conditional-access-session-lifetime"
      },
      {
        id: 2010,
        type: "hard",
        question: "A Windows 11 device is marked as 'Noncompliant' in Intune because it fails the 'Require BitLocker' compliance setting. The user checks the device and confirms BitLocker is fully encrypted and active on the C: drive. The Intune device sync completes successfully, but the status remains Noncompliant. What is the most likely cause of this discrepancy?",
        options: [
          "The device Health Attestation Service (DHA) evaluation has not yet synced the updated BitLocker state to Intune.",
          "The user used a 128-bit encryption cipher instead of 256-bit.",
          "The device is missing a TPM chip.",
          "Intune cannot detect BitLocker status on Windows 11 Home editions."
        ],
        answer: "The device Health Attestation Service (DHA) evaluation has not yet synced the updated BitLocker state to Intune.",
        explanation: "Intune's BitLocker compliance checks often rely on the Device Health Attestation (DHA) service, which evaluates the boot state of the device. The DHA report is generated on boot and sent to the DHA service, which then syncs with Intune.",
        moreDetails: "Even if the drive is encrypted, if the device hasn't rebooted recently, or the DHA sync hasn't completed, Intune will rely on stale attestation data. A simple reboot often forces the DHA report to generate and resolve the false noncompliant state.",
        otherOptions: "While cipher strength can be a policy, the generic 'Require BitLocker' check just looks for active encryption. If it has no TPM, BitLocker can still be software-based. Windows Home doesn't support full BitLocker (only Device Encryption), but the scenario states it IS fully encrypted.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/health-attestation"
      }
    ]
  },
  {
    id: 13,
    term: "Policy Conflicts & Resolutions",
    category: "Manage devices and tenant applications",
    questions: [
      {
        id: 2011,
        type: "easy",
        format: "multiple-choice",
        question: "A Windows 11 device is Hybrid Entra ID joined. A local Active Directory Group Policy (GPO) sets the desktop wallpaper. An Intune Device Configuration profile is assigned to the same device and sets a different desktop wallpaper. Assuming no custom conflict resolution policies are in place, which wallpaper will the user see?",
        options: [
          "The wallpaper configured by Intune.",
          "The wallpaper configured by the GPO.",
          "Neither; the user will see a black screen due to the conflict.",
          "The device will alternate wallpapers on each reboot."
        ],
        answer: "The wallpaper configured by the GPO.",
        explanation: "By default, in a Hybrid joined environment, legacy local Active Directory Group Policy Objects (GPOs) take precedence over modern Intune Mobile Device Management (MDM) policies.",
        moreDetails: "This default behavior ensures that existing on-premises security postures are not inadvertently broken when a device is newly enrolled into Intune.",
        otherOptions: "Intune does not win by default. The OS does not crash or alternate settings; it simply enforces the GPO.",
        link: "https://learn.microsoft.com/en-us/windows/client-management/mdm/group-policy-and-mdm"
      },
      {
        id: 2012,
        type: "medium",
        format: "multiple-choice",
        question: "You want to ensure that Intune configuration profiles always take precedence over local Active Directory GPOs when a direct conflict occurs. Which specific Windows configuration service provider (CSP) setting must you deploy?",
        options: [
          "ControlPolicyConflict/MDMWinsOverGP",
          "DeviceManagement/EnableGPOOverride",
          "Security/AllowMDMOverGPO",
          "System/PolicyPrecedence"
        ],
        answer: "ControlPolicyConflict/MDMWinsOverGP",
        explanation: "The <b>ControlPolicyConflict/MDMWinsOverGP</b> CSP setting is explicitly designed to alter the default conflict resolution behavior on Windows 10 and 11.",
        moreDetails: "When this specific Intune custom OMA-URI or Settings Catalog policy is applied to a device, the Windows MDM client is instructed to enforce the MDM policy payload over any overlapping Group Policy setting, facilitating a smoother transition to cloud management.",
        otherOptions: "The other listed CSP paths are fabricated.",
        link: "https://learn.microsoft.com/en-us/windows/client-management/mdm/policy-csp-controlpolicyconflict"
      },
      {
        id: 2013,
        type: "medium",
        format: "multiple-choice",
        question: "A user belongs to the 'Sales' group and the 'Managers' group. The Sales group is assigned a Device Configuration profile that disables the device camera. The Managers group is assigned a profile that allows the camera. Both profiles are applied to the user's Intune-managed device. What is the resulting state in Intune?",
        options: [
          "The camera is allowed (Permissive wins).",
          "The camera is disabled (Restrictive wins).",
          "The setting enters a 'Conflict' state and the camera setting is not modified on the device.",
          "Intune prompts the user to choose."
        ],
        answer: "The setting enters a 'Conflict' state and the camera setting is not modified on the device.",
        explanation: "For standard Device Configuration profiles, Intune does not automatically evaluate 'restrictive vs permissive' logic.",
        moreDetails: "If two profiles send differing explicit values to the exact same CSP setting, Intune marks the assignment as a <b>'Conflict'</b> in the admin console. Because the MDM engine cannot determine which profile is more important, it drops the payload, and the local setting remains unmodified until an administrator manually resolves the targeting overlap.",
        otherOptions: "Permissive/Restrictive logic applies to compliance and app protection, not general configuration profiles.",
        link: "https://learn.microsoft.com/en-us/mem/intune/configuration/device-profile-troubleshoot#conflicts-and-resolutions"
      },
      {
        id: 2014,
        type: "hard",
        format: "multiple-choice",
        question: "A device is targeted by two different Compliance Policies. Policy A requires a minimum OS version of 10.0.19045. Policy B requires a minimum OS version of 10.0.22621. How does Intune evaluate the final compliance state of the device?",
        options: [
          "Intune applies the most restrictive setting (10.0.22621).",
          "Intune applies the least restrictive setting (10.0.19045).",
          "Intune flags a conflict and marks the device as 'Non-compliant'.",
          "Intune flags a conflict and marks the device as 'Compliant' by default."
        ],
        answer: "Intune applies the most restrictive setting (10.0.22621).",
        explanation: "Unlike Configuration profiles which fail into a 'Conflict' state, <b>Compliance Policies</b> are evaluated with a built-in security hierarchy.",
        moreDetails: "When two compliance policies apply to the same device and configure the exact same requirement, Intune merges them and ensures the <b>most restrictive</b> setting always wins to guarantee maximum security posture. In this case, 10.0.22621 is the higher (more restrictive) hurdle.",
        otherOptions: "Compliance policies do not error out into a 'Conflict' state over differing values; they simply enforce the strictest requirement.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/compliance-policy-create-windows#conflicts-between-compliance-policies"
      },
      {
        id: 2015,
        type: "hard",
        format: "multiple-choice",
        question: "A user's iOS device is targeted by two different Intune App Protection Policies (MAM) for Microsoft Word. Policy 1 blocks copy/paste to unmanaged apps. Policy 2 allows copy/paste to unmanaged apps. How does Intune resolve this conflict?",
        options: [
          "The most recently created policy takes precedence.",
          "The policy with the highest assigned priority number takes precedence.",
          "The most restrictive setting always wins automatically.",
          "Intune removes the app from the device."
        ],
        answer: "The most restrictive setting always wins automatically.",
        explanation: "Similar to Compliance Policies, <b>App Protection Policies (MAM)</b> resolve overlaps natively without administrator intervention by prioritizing data security.",
        moreDetails: "If a user is assigned multiple app protection policies for the same platform and app, Intune evaluates the settings and applies the <b>most restrictive</b> configuration (in this case, blocking copy/paste).",
        otherOptions: "App Protection policies do not use an admin-defined 'priority number' system like Enrollment Restrictions do.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/app-protection-policy#policy-conflicts"
      },
      {
        id: 2016,
        type: "medium",
        format: "multiple-choice",
        question: "You assign a Device Configuration profile to the 'All Users' group, but you explicitly add the 'Executives' group to the 'Excluded groups' list for that same assignment. An executive logs into a newly enrolled Windows 11 device. Will the profile apply?",
        options: [
          "Yes, because Include assignments always override Exclude assignments.",
          "No, because Exclude assignments always take precedence over Include assignments.",
          "Yes, because Device Configuration profiles only apply to device groups.",
          "It depends on which group was created first in Entra ID."
        ],
        answer: "No, because Exclude assignments always take precedence over Include assignments.",
        explanation: "In Intune assignment logic, <b>Exclude</b> always takes precedence over Include.",
        moreDetails: "If a user or device exists in both an included group and an excluded group for the same policy assignment, the exclusion wins, and the policy payload is not delivered to that specific user or device.",
        otherOptions: "Include does not override Exclude. Configuration profiles can absolutely be assigned to user groups.",
        link: "https://learn.microsoft.com/en-us/mem/intune/configuration/device-profile-assign#exclude-groups-from-a-profile-assignment"
      },
      {
        id: 2017,
        type: "hard",
        format: "multiple-choice",
        question: "When managing Apple devices via Intune, how are conflicts between two overlapping Apple configuration profiles handled locally on the iOS/iPadOS device itself (assuming Intune pushes both profiles successfully)?",
        options: [
          "The most restrictive setting is typically enforced by the iOS/iPadOS operating system.",
          "The last installed profile overwrites the previous one.",
          "The device prompts the user to resolve the conflict.",
          "The device unenrolls from MDM to protect itself."
        ],
        answer: "The most restrictive setting is typically enforced by the iOS/iPadOS operating system.",
        explanation: "If Intune pushes multiple valid `.mobileconfig` payloads to an Apple device that happen to overlap, the device itself evaluates the rules locally.",
        moreDetails: "Apple's native MDM framework dictates that when a device receives conflicting profile restrictions, the <b>most restrictive</b> setting is enforced by the OS (e.g., if one profile allows the camera and one blocks it, the camera is disabled).",
        otherOptions: "It is not based on installation order, and the device does not prompt the user.",
        link: "https://support.apple.com/guide/deployment/payload-variables-dep1e479aeb/web"
      },
      {
        id: 2018,
        type: "medium",
        format: "multiple-choice",
        question: "A device is co-managed by Intune and Configuration Manager (SCCM). The 'Device configuration' workload slider in SCCM is set to 'Configuration Manager'. However, an Intune administrator deploys an Intune device configuration profile to the device. What is the result?",
        options: [
          "The device applies both policies, resolving conflicts via MDMWinsOverGP.",
          "The Intune policy is completely ignored because SCCM currently owns that specific workload.",
          "The Intune policy applies, and the SCCM client is automatically uninstalled.",
          "SCCM sends an alert and disables the Intune enrollment."
        ],
        answer: "The Intune policy is completely ignored because SCCM currently owns that specific workload.",
        explanation: "In a co-managed state, the workload sliders act as the absolute authority toggle for the device.",
        moreDetails: "If SCCM owns the 'Device configuration' workload, the local MDM client on the Windows device will actively ignore configuration profiles sent from Intune until the workload slider in the SCCM console is shifted to 'Pilot Intune' or 'Intune'.",
        otherOptions: "MDMWinsOverGP applies to Group Policy, not SCCM baselines. The SCCM client is not uninstalled.",
        link: "https://learn.microsoft.com/en-us/mem/configmgr/comanage/workloads"
      },
      {
        id: 2019,
        type: "hard",
        format: "multiple-choice",
        question: "You deploy a setting using a built-in Intune Administrative Template. Later, you deploy a Custom OMA-URI profile that points to the exact same Windows CSP node but with a different value. Both apply to the same device. What happens?",
        options: [
          "The Custom OMA-URI always wins because custom profiles override GUI templates.",
          "The Administrative Template always wins because built-in templates are prioritized.",
          "A conflict is reported in Intune and the setting fails to apply.",
          "Intune merges the two values."
        ],
        answer: "A conflict is reported in Intune and the setting fails to apply.",
        explanation: "Under the hood, both Administrative Templates and Custom OMA-URI profiles write to the exact same Windows Configuration Service Providers (CSPs).",
        moreDetails: "Intune does not rank profile <i>types</i>. It detects that two different profiles are sending conflicting instructions to the same URI node on the device and flags a standard 'Conflict' state, refusing to apply either.",
        otherOptions: "Custom profiles do not inherently override GUI templates.",
        link: "https://learn.microsoft.com/en-us/mem/intune/configuration/device-profile-troubleshoot#conflicts-and-resolutions"
      },
      {
        id: 2020,
        type: "medium",
        format: "multiple-choice",
        question: "A Device Configuration profile assigning a lock screen background is targeted to a 'Device Group' (the laptop). Another profile assigning a different lock screen background is targeted to a 'User Group' (the user logging into that laptop). What is the expected behavior when the user logs in?",
        options: [
          "The user-targeted profile takes precedence when the user is logged in.",
          "The device-targeted profile takes precedence because it applies at the hardware level.",
          "Intune reports a conflict because they configure the same setting.",
          "The settings are merged."
        ],
        answer: "Intune reports a conflict because they configure the same setting.",
        explanation: "Intune does not natively prioritize User targeting over Device targeting (or vice versa) when it comes to resolving identical settings.",
        moreDetails: "Even though one profile is targeted at the device and the other at the user, they ultimately configure the same CSP setting on the same machine during the user's session. Intune cannot determine which should win, resulting in a conflict.",
        otherOptions: "Neither targeting method automatically overrides the other.",
        link: "https://learn.microsoft.com/en-us/mem/intune/configuration/device-profile-troubleshoot"
      },
      {
        id: 2021,
        type: "medium",
        format: "multiple-choice",
        question: "A user belongs to two different groups. Group A is assigned an Intune Device Enrollment Restriction policy that blocks Android devices. Group B is assigned an Enrollment Restriction policy that allows Android devices. How does Intune determine which policy to apply when the user attempts to enroll an Android phone?",
        options: [
          "The policy with the highest assigned Priority number (e.g., Priority 1) takes precedence.",
          "Intune applies the most restrictive setting (blocks Android).",
          "A conflict occurs and enrollment is halted.",
          "The default restriction policy always overrides custom policies."
        ],
        answer: "The policy with the highest assigned Priority number (e.g., Priority 1) takes precedence.",
        explanation: "Unlike Configuration profiles which simply generate a conflict error, <b>Enrollment Restrictions</b> use a dedicated priority-based system.",
        moreDetails: "The administrator assigns a specific priority number to each restriction policy. When a user belongs to multiple targeted groups, Intune evaluates the policies in order of priority (Priority 1 being the highest/first) and applies the first one it hits, ignoring the rest.",
        otherOptions: "It is not based on the 'most restrictive' logic; it is strictly based on the admin-defined priority list.",
        link: "https://learn.microsoft.com/en-us/mem/intune/enrollment/enrollment-restrictions-set#priorities"
      },
      {
        id: 2022,
        type: "hard",
        format: "multi-select",
        question: "Which TWO of the following scenarios will cause a conflict or severe overlapping behavior when managing Windows Updates via Intune? (Select TWO)",
        options: [
          "Assigning two different 'Update rings for Windows 10 and later' with different deferral settings to the same device.",
          "Assigning a 'Feature updates' profile and a 'Quality updates (Expedited)' profile to the same device.",
          "Assigning an 'Update ring' and a 'Feature updates' profile to the same device.",
          "Assigning an Intune Update Ring to a device that is actively receiving Software Updates from an on-premises WSUS server via legacy Group Policy."
        ],
        multiAnswers: [
          "Assigning two different 'Update rings for Windows 10 and later' with different deferral settings to the same device.",
          "Assigning an Intune Update Ring to a device that is actively receiving Software Updates from an on-premises WSUS server via legacy Group Policy."
        ],
        explanation: "Update management conflicts can severely disrupt the patching cycle.",
        moreDetails: "Assigning two different Update Rings to the same device natively causes a 'Conflict' in Intune because the device doesn't know which deferral schedule to follow. Additionally, having legacy WSUS GPOs active while trying to use Intune WUfB creates severe management conflicts (often referred to as 'Dual Scan' issues), where the device is confused about its update source.",
        otherOptions: "Mixing Feature Update profiles, Expedited Quality Update profiles, and Update Rings is the supported, intended architecture; they complement each other, rather than conflict.",
        link: "https://learn.microsoft.com/en-us/windows/deployment/update/wufb-wsus"
      }
    ]
  }
];
