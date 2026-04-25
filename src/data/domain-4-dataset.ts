import type { TermData } from './domain-1-dataset';

export const domain4Dataset: TermData[] = [
  {
    id: 31,
    term: "Microsoft 365 Apps Deployment",
    category: "Manage applications and updates",
    questions: [
      {
        id: 401,
        type: "easy",
        question: "When deploying Microsoft 365 Apps via Intune, which built-in profile type eliminates the need to manually create an XML configuration file using the Office Deployment Tool?",
        options: [
          "Win32 App (.intunewin)",
          "Microsoft 365 Apps for Windows 10 and later",
          "Line-of-business (LOB) app",
          "Web link"
        ],
        answer: "Microsoft 365 Apps for Windows 10 and later",
        explanation: "Intune provides a native <b>Microsoft 365 Apps</b> deployment type. This provides a user-friendly GUI within the Intune portal to select which Office applications to install, the update channel, and architecture, automatically generating the underlying configuration without manually writing XML.",
        moreDetails: "If highly complex configurations are required, you can still choose the 'Use XML data' option within this profile.",
        otherOptions: "Win32 requires manual packaging. LOB is for simple MSIs. Web links are just browser shortcuts.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/apps-add-office365"
      },
      {
        id: 402,
        type: "medium",
        question: "You want to deploy Microsoft 365 Apps to your users, but you want to ensure they only receive feature updates once a month on a predictable schedule to allow for internal testing. Which update channel should you select?",
        options: [
          "Current Channel",
          "Monthly Enterprise Channel",
          "Semi-Annual Enterprise Channel",
          "Beta Channel"
        ],
        answer: "Monthly Enterprise Channel",
        explanation: "The <b>Monthly Enterprise Channel</b> delivers new features to users exactly once a month (on Patch Tuesday). This provides a predictable cadence for IT departments to test compatibility while still keeping users relatively up-to-date.",
        moreDetails: "Current Channel updates as soon as features are ready (unpredictable). Semi-Annual updates twice a year. Beta is for early unreleased testing.",
        otherOptions: "Current is too frequent. Semi-Annual is too slow for modern feature adoption. Beta is unstable.",
        link: "https://learn.microsoft.com/en-us/deployoffice/updates/overview-update-channels"
      },
      {
        id: 403,
        type: "hard",
        question: "When configuring Microsoft 365 Apps deployment in Intune, you select the setting 'Remove other versions'. What specific software does this action uninstall?",
        options: [
          "All third-party PDF readers.",
          "Older, MSI-based (Windows Installer) versions of Office, Visio, and Project.",
          "Previous Click-to-Run versions of Microsoft 365 Apps.",
          "Only Office 2010."
        ],
        answer: "Older, MSI-based (Windows Installer) versions of Office, Visio, and Project.",
        explanation: "The <b>'Remove other versions'</b> setting uses the Office Removal Tool logic during installation to automatically uninstall legacy, MSI-based versions of Office products (like Office 2013 or 2016 MSI installs).",
        moreDetails: "This ensures a clean transition to the modern Click-to-Run architecture without leaving conflicting binaries or licensing services on the machine.",
        otherOptions: "It does not touch third-party apps. Click-to-Run versions handle their own upgrades automatically. It removes more than just Office 2010.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/apps-add-office365#configure-app-suite"
      },
      {
        id: 404,
        type: "medium",
        question: "You are deploying Microsoft 365 Apps to a lab of shared computers used by hundreds of different students daily. Which specific setting must be enabled in the Intune deployment profile to prevent licensing errors?",
        options: [
          "Accept the EULA automatically.",
          "Shared computer activation.",
          "Update channel: Semi-Annual.",
          "Install as system."
        ],
        answer: "Shared computer activation.",
        explanation: "<b>Shared computer activation</b> changes the licensing behavior of Microsoft 365 Apps. Normally, an M365 license allows a user to install Office on 5 PCs. On a shared PC, without this setting, the machine would quickly consume all licenses.",
        moreDetails: "With Shared computer activation, the license token is tied to the user's session temporarily and does not count against their 5-device limit.",
        otherOptions: "EULA acceptance is a generic setting. Update channels don't affect licensing. Install context doesn't solve the user licensing limit.",
        link: "https://learn.microsoft.com/en-us/deployoffice/overview-shared-computer-activation"
      },
      {
        id: 405,
        type: "easy",
        question: "By default, which architecture of Microsoft 365 Apps does Intune recommend deploying to modern Windows 10 and Windows 11 devices?",
        options: [
          "32-bit",
          "64-bit",
          "ARM32",
          "x86"
        ],
        answer: "64-bit",
        explanation: "Microsoft strongly recommends the <b>64-bit</b> architecture for modern deployments. It provides better performance, can utilize more than 4GB of RAM (critical for large Excel spreadsheets), and aligns with modern OS architectures.",
        moreDetails: "32-bit should only be used if the organization relies on legacy, hard-coded 32-bit COM add-ins or ActiveX controls that have not been updated.",
        otherOptions: "32-bit and x86 are the same and represent legacy architecture. ARM32 is for legacy mobile/tablet processors.",
        link: "https://learn.microsoft.com/en-us/deployoffice/choose-64-bit-or-32-bit-version"
      }
    ]
  },
  {
    id: 32,
    term: "App Protection Policies (MAM)",
    category: "Manage applications and updates",
    questions: [
      {
        id: 406,
        type: "easy",
        question: "What does the term <b>MAM-WE</b> refer to in the context of Microsoft Intune?",
        options: [
          "Mobile Application Management for Windows Editions.",
          "Mobile Application Management Without Enrollment.",
          "Microsoft App Management Web Environment.",
          "Malware And Malware-Web Engine."
        ],
        answer: "Mobile Application Management Without Enrollment.",
        explanation: "<b>MAM-WE (Mobile Application Management Without Enrollment)</b> allows organizations to protect corporate data inside specific applications (like Outlook or Teams) without requiring the user to enroll their personal device into full MDM control.",
        moreDetails: "This is the cornerstone of BYOD (Bring Your Own Device) strategies, respecting user privacy while securing company data.",
        otherOptions: "The acronym strictly stands for 'Without Enrollment' in Microsoft nomenclature.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/app-protection-policy"
      },
      {
        id: 407,
        type: "medium",
        question: "In an App Protection Policy, what does the 'Offline grace period' setting under 'Conditional Launch' control?",
        options: [
          "How long a user can be fired before their data is wiped.",
          "The amount of time an app can run without connecting to the Intune service before access to corporate data is blocked or wiped.",
          "How long the battery can last offline.",
          "The time a user has to install an update."
        ],
        answer: "The amount of time an app can run without connecting to the Intune service before access to corporate data is blocked or wiped.",
        explanation: "The <b>Offline grace period</b> acts as a dead-man's switch. If a device goes completely offline (e.g., airplane mode) and cannot check in with Intune for a specified period (default is often 720 hours/30 days), the app will block access.",
        moreDetails: "This ensures that if a device is lost or a user is terminated and takes the device offline, the cached corporate data will eventually lock itself.",
        otherOptions: "It is strictly about network check-ins, not battery life, employment status, or app updates.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/app-protection-policy-settings-ios#conditional-launch"
      },
      {
        id: 408,
        type: "hard",
        question: "You have a strict App Protection Policy that prevents users from transferring data out of managed apps. However, users need to open corporate PDF attachments in a specific, third-party unmanaged PDF reader. How do you permit this?",
        options: [
          "Turn off the App Protection Policy entirely.",
          "Add the third-party app's Bundle ID (iOS) or Package ID (Android) to the 'Exempt apps' list in the data transfer settings.",
          "Enroll the device in MDM.",
          "Require a PIN for the PDF reader."
        ],
        answer: "Add the third-party app's Bundle ID (iOS) or Package ID (Android) to the 'Exempt apps' list in the data transfer settings.",
        explanation: "MAM policies allow for <b>Exempt apps</b>. By explicitly listing the specific package/bundle ID of the third-party app, you create a secure bridge that allows managed apps (like Outlook) to pass data to that unmanaged app, while continuing to block all other unmanaged apps (like personal Dropbox or Twitter).",
        moreDetails: "This provides precise flexibility without breaking the isolation boundary.",
        otherOptions: "Turning off the policy destroys security. MDM enrollment doesn't change MAM data routing logic. You cannot enforce a PIN on an unmanaged app.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/exempt-apps"
      },
      {
        id: 409,
        type: "medium",
        question: "A user reports their personal phone was stolen. They were using Outlook for iOS to access corporate email via a MAM-WE policy. How do you secure the company data without affecting their personal photos?",
        options: [
          "Initiate an MDM Device Wipe.",
          "Initiate an App Selective Wipe for that specific user and device.",
          "Delete their Entra ID account.",
          "Block the device's MAC address."
        ],
        answer: "Initiate an App Selective Wipe for that specific user and device.",
        explanation: "An <b>App Selective Wipe</b> targets only the corporate data stored within MAM-enlightened applications (like the corporate mailbox in Outlook).",
        moreDetails: "It leaves the user's personal applications, photos, and even personal email accounts within the Outlook app completely untouched. Since it's a MAM-WE scenario, a full MDM wipe isn't even possible.",
        otherOptions: "MDM wipe requires enrollment. Deleting the user account is destructive and unnecessary. MAC addresses are irrelevant for cloud auth.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/apps-selective-wipe"
      },
      {
        id: 410,
        type: "easy",
        question: "When configuring access requirements in an App Protection Policy, what is the purpose of requiring an 'App PIN'?",
        options: [
          "To unlock the physical device screen.",
          "To provide a secondary layer of authentication required to open the specific managed application, independent of the device passcode.",
          "To authenticate against the corporate VPN.",
          "To connect to corporate Wi-Fi."
        ],
        answer: "To provide a secondary layer of authentication required to open the specific managed application, independent of the device passcode.",
        explanation: "An <b>App PIN</b> is a MAM security control. Even if a user hands their unlocked phone to a child to play a game, the child cannot open the corporate Outlook app without knowing the specific App PIN.",
        moreDetails: "It separates the security of the application from the security of the operating system.",
        otherOptions: "The device passcode unlocks the screen. It has nothing to do with VPN or Wi-Fi auth.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/app-protection-policy-settings-ios#access-requirements"
      }
    ]
  },
  {
    id: 33,
    term: "Windows Package Manager & Store Apps",
    category: "Manage applications and updates",
    questions: [
      {
        id: 411,
        type: "easy",
        question: "With the retirement of the Microsoft Store for Business, what is the new mechanism Intune uses to search, deploy, and manage Microsoft Store apps?",
        options: [
          "Configuration Manager App Catalog",
          "Windows Package Manager (winget) integration",
          "Azure Virtual Desktop",
          "Windows Autopilot"
        ],
        answer: "Windows Package Manager (winget) integration",
        explanation: "Intune now natively integrates with the <b>Windows Package Manager (winget)</b> architecture. This allows administrators to search the entire public Microsoft Store repository directly from the Intune console and deploy apps as 'Microsoft Store app (new)'.",
        moreDetails: "This integration supports both UWP and Win32 applications hosted in the Store without requiring the legacy Store for Business portal.",
        otherOptions: "ConfigMgr is for on-prem. AVD is virtualization. Autopilot is for device provisioning.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/store-apps-microsoft"
      },
      {
        id: 412,
        type: "medium",
        question: "When deploying a 'Microsoft Store app (new)' via Intune, you must choose the 'Install behavior'. What is the difference between 'System' and 'User' context?",
        options: [
          "System installs it for all users on the device; User installs it only for the targeted user profile.",
          "System installs it in the cloud; User installs it locally.",
          "System requires internet access; User works offline.",
          "System applies only to Windows Servers; User applies to Windows 11."
        ],
        answer: "System installs it for all users on the device; User installs it only for the targeted user profile.",
        explanation: "<b>System context</b> installs the application into the core OS directories (like Program Files), making it available to anyone who logs into that physical machine. <b>User context</b> installs it into the specific user's AppData profile.",
        moreDetails: "Certain Store apps only support User context, while others support both. Intune uses the Windows Package Manager to execute the installation according to this context.",
        otherOptions: "Both install locally, require internet, and apply to Windows client OS.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/store-apps-microsoft#install-behavior"
      },
      {
        id: 413,
        type: "hard",
        question: "A required line-of-business application is listed in the Microsoft Store as a 'Paid' app. How do you deploy this paid app to 50 users using the new Intune Microsoft Store integration?",
        options: [
          "Purchase 50 licenses in the Intune portal using a credit card.",
          "You cannot deploy paid apps natively through the new Microsoft Store integration in Intune; users must purchase them individually or the vendor must provide a volume-licensed Win32 package.",
          "Intune automatically bills your Azure subscription.",
          "Deploy it as 'Available' and it becomes free."
        ],
        answer: "You cannot deploy paid apps natively through the new Microsoft Store integration in Intune; users must purchase them individually or the vendor must provide a volume-licensed Win32 package.",
        explanation: "The new Windows Package Manager/Store integration in Intune <b>only supports free applications</b>.",
        moreDetails: "With the deprecation of the Microsoft Store for Business (which handled bulk purchasing), there is no native volume purchasing mechanism in Intune for paid Store apps. Organizations must work directly with ISVs to procure volume licenses and deploy the apps as Win32 (.intunewin) packages.",
        otherOptions: "There is no credit card UI in Intune. It does not bill Azure. Deploying it as 'Available' doesn't bypass payment.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/store-apps-microsoft#prerequisites"
      },
      {
        id: 414,
        type: "medium",
        question: "When adding a new Microsoft Store app in Intune, you notice an app is listed as a 'Win32' framework app rather than a UWP app. What happens on the client side when this app updates?",
        options: [
          "The app cannot be updated.",
          "The user must uninstall and reinstall the app.",
          "The Windows Package Manager (winget) agent on the client detects and downloads the updated Win32 installer automatically from the Store CDN.",
          "The device blue screens."
        ],
        answer: "The Windows Package Manager (winget) agent on the client detects and downloads the updated Win32 installer automatically from the Store CDN.",
        explanation: "One of the major benefits of the new Store integration is that <b>winget natively handles the updating of Win32 apps</b> hosted in the Store repository, just as it handles UWP apps.",
        moreDetails: "Intune simply tells the client 'Ensure App X is installed'. The local winget components manage the background downloading and silent execution of the updates.",
        otherOptions: "The apps can update, reinstalling is not required, and it doesn't cause a blue screen.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/store-apps-microsoft#update-store-apps"
      },
      {
        id: 415,
        type: "easy",
        question: "What is an MSIX file?",
        options: [
          "A legacy script used in Windows 7.",
          "A modern Windows app packaging format that provides reliable installs, clean uninstalls, and containerized execution.",
          "A configuration file for Intune compliance.",
          "A database format for Endpoint Analytics."
        ],
        answer: "A modern Windows app packaging format that provides reliable installs, clean uninstalls, and containerized execution.",
        explanation: "<b>MSIX</b> is Microsoft's modern app packaging format. It combines the features of robust MSI deployments with the safety and containerization of UWP Appx packages.",
        moreDetails: "MSIX apps never leave orphaned registry keys or files behind when uninstalled, which prevents 'Windows Rot' over time.",
        otherOptions: "It is not a legacy script, compliance file, or database.",
        link: "https://learn.microsoft.com/en-us/windows/msix/overview"
      }
    ]
  },
  {
    id: 34,
    term: "Win32 App Deployment",
    category: "Manage applications and updates",
    questions: [
      {
        id: 416,
        type: "easy",
        question: "Before you can upload a traditional .exe or .msi installer into Intune as a Win32 app, what must you do to the file?",
        options: [
          "Zip it using 7-Zip.",
          "Run it through the Microsoft Win32 Content Prep Tool to convert it into an .intunewin file.",
          "Rename the extension to .appx.",
          "Sign it with a public SSL certificate."
        ],
        answer: "Run it through the Microsoft Win32 Content Prep Tool to convert it into an .intunewin file.",
        explanation: "Intune requires Win32 installers (along with any dependencies or scripts in the same folder) to be packaged into a single, encrypted container file with the <b>.intunewin</b> extension.",
        moreDetails: "The <b>Microsoft Win32 Content Prep Tool</b> (IntuneWinAppUtil.exe) handles this compression and encryption locally before you upload it to the cloud.",
        otherOptions: "Standard zip files are not accepted. Renaming the extension breaks the file. Code signing is good practice but not the mechanical step required for Intune upload.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/apps-win32-prepare"
      },
      {
        id: 417,
        type: "medium",
        question: "When deploying a Win32 app, what is the purpose of a <b>Detection Rule</b>?",
        options: [
          "To detect if the user has a virus.",
          "To check if the application is already installed on the device so Intune knows whether to run the installer or report a 'Success' status.",
          "To find the device's IP address.",
          "To determine if the app requires a license."
        ],
        answer: "To check if the application is already installed on the device so Intune knows whether to run the installer or report a 'Success' status.",
        explanation: "Unlike simple MSI deployments, Intune needs explicit instructions on how to verify a Win32 app installed correctly. <b>Detection Rules</b> (which look for specific registry keys, file paths, or MSI product codes) provide this logic.",
        moreDetails: "Before installing, Intune runs the detection rule. If found, it skips installation. After installing, it runs it again. If found, it reports success; if not, it reports failure.",
        otherOptions: "Detection rules are strictly for state configuration management, not AV scanning, networking, or licensing.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/apps-win32-add#step-4-detection-rules"
      },
      {
        id: 418,
        type: "hard",
        question: "You are deploying 'App B' via Intune. 'App B' requires that 'App A' is already installed on the machine to function. Which Win32 app feature should you configure?",
        options: [
          "Supersedence",
          "Dependencies",
          "Requirements",
          "Return codes"
        ],
        answer: "Dependencies",
        explanation: "<b>Dependencies</b> force Intune to evaluate and install a prerequisite application (App A) before it attempts to install the targeted application (App B).",
        moreDetails: "If App A fails to install, Intune will abort the installation of App B, preventing a broken user experience.",
        otherOptions: "Supersedence *replaces* an older app. Requirements check hardware (like RAM/Disk space). Return codes handle reboot prompts.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/apps-win32-add#step-5-dependencies"
      },
      {
        id: 419,
        type: "medium",
        question: "You are rolling out 'App V2' to replace 'App V1'. You want Intune to automatically uninstall 'App V1' and install 'App V2' in its place. Which Win32 app feature should you use?",
        options: [
          "Dependencies",
          "Supersedence",
          "Detection rules",
          "Wipe command"
        ],
        answer: "Supersedence",
        explanation: "<b>Supersedence</b> is the mechanism used to upgrade or replace existing Win32 apps. You configure App V2 to supersede App V1, and specify whether Intune should run the uninstall command for V1 before installing V2.",
        moreDetails: "This prevents having two conflicting versions of the same application installed simultaneously.",
        otherOptions: "Dependencies install prerequisites. Detection rules verify presence. Wipe resets the whole PC.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/apps-win32-supersedence"
      },
      {
        id: 420,
        type: "easy",
        question: "Which client-side service is automatically installed on a Windows device when a Win32 app or PowerShell script is assigned to it from Intune?",
        options: [
          "Microsoft Defender",
          "Intune Management Extension (IME)",
          "Azure AD Connect",
          "Windows Update Agent"
        ],
        answer: "Intune Management Extension (IME)",
        explanation: "The <b>Intune Management Extension (IME)</b> is a lightweight agent that supplements the native Windows MDM client. It is required to process complex tasks like Win32 app installations, Proactive Remediations, and PowerShell scripts.",
        moreDetails: "Intune pushes the IME automatically the first time an applicable payload is assigned to the device.",
        otherOptions: "Defender is AV. Azure AD Connect syncs identities. The Windows Update Agent handles OS updates natively.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/intune-management-extension"
      }
    ]
  },
  {
    id: 35,
    term: "Windows Update for Business (Update Rings)",
    category: "Manage applications and updates",
    questions: [
      {
        id: 421,
        type: "easy",
        question: "What is the purpose of an <b>Update Ring</b> in Microsoft Intune?",
        options: [
          "To physically network computers together.",
          "To group devices and configure the policies that dictate *when* and *how* they receive Windows quality and feature updates.",
          "To force users to reset their passwords.",
          "To monitor CPU performance rings."
        ],
        answer: "To group devices and configure the policies that dictate *when* and *how* they receive Windows quality and feature updates.",
        explanation: "An <b>Update Ring</b> is a collection of Windows Update for Business (WUfB) settings. By assigning different rings (e.g., 'Pilot', 'Fast', 'Broad') to different groups, you create a phased rollout of updates across the organization.",
        moreDetails: "This ensures that if an update breaks a critical application, it only affects the 'Pilot' ring, giving IT time to pause the update before it hits the 'Broad' deployment ring.",
        otherOptions: "It is a patching strategy, not networking, identity, or CPU monitoring.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/windows-update-for-business-configure"
      },
      {
        id: 422,
        type: "medium",
        question: "In an Update Ring policy, what is the maximum number of days you can defer a monthly <b>Quality Update</b> (Patch Tuesday security update)?",
        options: [
          "10 days",
          "30 days",
          "365 days",
          "Indefinitely"
        ],
        answer: "30 days",
        explanation: "Windows Update for Business allows administrators to defer <b>Quality Updates</b> for a maximum of <b>30 days</b>.",
        moreDetails: "Because Quality Updates contain critical security patches, Microsoft enforces this relatively short maximum deferral to prevent devices from remaining vulnerable to known exploits for long periods. (Feature updates can be deferred up to 365 days).",
        otherOptions: "365 days applies to Feature Updates. Indefinite deferral is not allowed in modern WUfB.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/windows-update-settings#update-settings"
      },
      {
        id: 423,
        type: "hard",
        question: "A bad Quality Update is causing blue screens on your 'Fast' ring devices. You click 'Pause' on the Update Ring in Intune. How long does the pause remain in effect before updates automatically resume?",
        options: [
          "7 days",
          "35 days",
          "Until an administrator manually clicks 'Resume'.",
          "90 days"
        ],
        answer: "35 days",
        explanation: "When you pause an Update Ring, the pause is valid for exactly <b>35 days</b> from the time you initiate it. After 35 days, the pause automatically expires, and devices will resume scanning for and installing updates.",
        moreDetails: "This prevents organizations from permanently freezing updates and falling out of security compliance. Administrators can manually resume sooner if the issue is resolved.",
        otherOptions: "It does not pause indefinitely. 7 and 90 days are incorrect values.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/windows-update-for-business-configure#pause-a-policy"
      },
      {
        id: 424,
        type: "medium",
        question: "Which setting in an Update Ring prevents the PC from automatically restarting to apply an update while a user is actively working?",
        options: [
          "Feature Update Deferral",
          "Active hours",
          "Delivery Optimization",
          "Uninstall options"
        ],
        answer: "Active hours",
        explanation: "<b>Active hours</b> let administrators define the typical working hours for their users (e.g., 8:00 AM to 5:00 PM). Windows will suppress automatic restarts for updates during this timeframe.",
        moreDetails: "This ensures that security patches are applied without suddenly interrupting a user's presentation or unsaved work.",
        otherOptions: "Deferrals delay the download. Delivery Optimization saves bandwidth. Uninstall removes patches.",
        link: "https://learn.microsoft.com/en-us/windows/deployment/update/waas-restart#active-hours"
      },
      {
        id: 425,
        type: "easy",
        question: "What is the function of the <b>Deadline</b> setting in a Windows Update Ring?",
        options: [
          "It deletes the user's data if they don't update.",
          "It forces the update to install and forces the device to reboot after a specific number of days, regardless of the user's preferences.",
          "It cancels the update subscription.",
          "It notifies Microsoft that the update failed."
        ],
        answer: "It forces the update to install and forces the device to reboot after a specific number of days, regardless of the user's preferences.",
        explanation: "A <b>Deadline</b> is an enforcement mechanism. While Active Hours and notifications politely ask the user to reboot, a Deadline says: 'You have exactly 3 days to restart. At the end of day 3, the PC will restart automatically, no matter what you are doing.'",
        moreDetails: "Deadlines are critical for ensuring compliance. Without deadlines, stubborn users could leave updates pending a reboot for months.",
        otherOptions: "It enforces installation/rebooting; it does not delete data, cancel subscriptions, or send failure telemetry.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/windows-update-settings#user-experience-settings"
      }
    ]
  },
  {
    id: 36,
    term: "Feature Updates & Expedited Updates",
    category: "Manage applications and updates",
    questions: [
      {
        id: 426,
        type: "easy",
        question: "What is the primary difference between a Quality Update and a Feature Update in Windows?",
        options: [
          "Quality Updates are massive OS upgrades; Feature Updates are small daily patches.",
          "Quality Updates are security/bug fixes (Patch Tuesday); Feature Updates upgrade the entire OS build (e.g., moving from Windows 10 to Windows 11).",
          "Quality Updates only apply to Microsoft Office; Feature Updates apply to Windows.",
          "Quality Updates require a new license; Feature Updates are free."
        ],
        answer: "Quality Updates are security/bug fixes (Patch Tuesday); Feature Updates upgrade the entire OS build (e.g., moving from Windows 10 to Windows 11).",
        explanation: "<b>Quality Updates</b> are cumulative, monthly updates focusing on security and bug fixes. <b>Feature Updates</b> are major OS upgrades released annually that introduce new capabilities and increment the OS version (e.g., 22H2 to 23H2).",
        moreDetails: "Feature Updates require significantly more bandwidth, installation time, and application compatibility testing.",
        otherOptions: "The definitions in the first option are inverted. Both apply to the OS. Neither requires a separate license transaction for enterprise subscribers.",
        link: "https://learn.microsoft.com/en-us/windows/deployment/update/waas-overview"
      },
      {
        id: 427,
        type: "medium",
        question: "You want to ensure all devices in your organization stay exactly on Windows 11 version 22H2 until you finish testing 23H2. Which Intune policy should you deploy?",
        options: [
          "Feature updates for Windows 10 and later",
          "Quality updates for Windows 10 and later",
          "Update Rings for Windows 10 and later",
          "App configuration policy"
        ],
        answer: "Feature updates for Windows 10 and later",
        explanation: "A <b>Feature update profile</b> allows you to explicitly 'pin' or target a specific version of Windows (like Windows 11 22H2). Devices assigned this profile will upgrade to that version (if they are on an older version) and then <b>stay there</b>.",
        moreDetails: "They will not upgrade to 23H2, regardless of deferral settings in the Update Ring, until the administrator updates the Feature update profile.",
        otherOptions: "Quality updates are for security patches. Update rings manage timing, not specific version pinning. App config is for software.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/windows-10-feature-updates"
      },
      {
        id: 428,
        type: "hard",
        question: "A critical zero-day vulnerability is actively being exploited in the wild. You need to deploy an out-of-band security patch immediately, overriding any deferrals or active hours set in your standard Update Rings. Which feature should you use?",
        options: [
          "Pause the Update Ring.",
          "Expedite quality updates",
          "Windows Autopilot",
          "Microsoft Defender Antivirus quick scan"
        ],
        answer: "Expedite quality updates",
        explanation: "<b>Expedited Quality Updates</b> bypass all configured deferrals, pause states, and standard deployment cadences. It tells the Windows Update service to download and install a specific patch immediately.",
        moreDetails: "It also forces an accelerated reboot schedule, warning the user they must restart almost immediately to secure the device.",
        otherOptions: "Pausing stops updates. Autopilot is for provisioning. AV scans look for malware, but cannot patch OS vulnerabilities.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/windows-10-expedite-updates"
      },
      {
        id: 429,
        type: "medium",
        question: "What is a <b>Safeguard Hold</b> in the context of Windows Feature Updates?",
        options: [
          "A policy created by the local IT admin to block users from downloading games.",
          "A block placed by Microsoft on specific devices preventing them from receiving a Feature Update because telemetry indicates a known hardware or software incompatibility.",
          "A firewall rule blocking the Windows Update IP address.",
          "A BitLocker recovery state."
        ],
        answer: "A block placed by Microsoft on specific devices preventing them from receiving a Feature Update because telemetry indicates a known hardware or software incompatibility.",
        explanation: "Microsoft uses telemetry to identify issues (e.g., a specific audio driver causing blue screens on Windows 11 23H2). They place a <b>Safeguard Hold</b> on the cloud side.",
        moreDetails: "Any device with that driver will simply not be offered the update, even if Intune demands it, until the vendor releases a fixed driver. IT admins can opt-out of safeguard holds in Intune, but doing so risks breaking the device.",
        otherOptions: "It is an automated Microsoft telemetry safety net, not an IT firewall rule or BitLocker state.",
        link: "https://learn.microsoft.com/en-us/windows/deployment/update/safeguard-holds"
      },
      {
        id: 430,
        type: "easy",
        question: "After a user installs a new Windows Feature Update, they report their specialized software no longer works. How many days does the user have to 'Go back' (uninstall) to the previous version before Windows automatically deletes the old OS files?",
        options: [
          "1 day",
          "10 days (by default)",
          "30 days",
          "365 days"
        ],
        answer: "10 days (by default)",
        explanation: "By default, Windows keeps the `Windows.old` folder (which contains the previous OS state) for <b>10 days</b>. During this window, the user or administrator can initiate a rollback.",
        moreDetails: "Administrators can configure the 'Uninstall period' setting within the Update Ring to extend this up to 60 days if longer testing periods are required.",
        otherOptions: "1 day is too short. 30 was the old default in early Windows 10. 365 is the deferral limit, not the uninstall limit.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/windows-update-settings#uninstall-period"
      }
    ]
  },
  {
    id: 37,
    term: "Delivery Optimization",
    category: "Manage applications and updates",
    questions: [
      {
        id: 431,
        type: "easy",
        question: "What is the primary goal of <b>Delivery Optimization (DO)</b>?",
        options: [
          "To speed up the physical delivery of laptops to remote employees.",
          "To reduce WAN bandwidth consumption by allowing devices to share downloaded Windows updates and apps with peer devices on the same network.",
          "To optimize the battery life of mobile devices.",
          "To filter spam emails."
        ],
        answer: "To reduce WAN bandwidth consumption by allowing devices to share downloaded Windows updates and apps with peer devices on the same network.",
        explanation: "<b>Delivery Optimization</b> is a peer-to-peer distribution technology. Instead of 1,000 PCs in an office all downloading a 3GB feature update from the internet simultaneously (crushing the external network connection), DO allows one PC to download a piece, and then share it locally with the other 999 PCs.",
        moreDetails: "This significantly reduces external bandwidth usage and can speed up deployment times on fast local networks.",
        otherOptions: "It optimizes data delivery over networks, not physical shipping, battery life, or email.",
        link: "https://learn.microsoft.com/en-us/windows/deployment/update/waas-delivery-optimization"
      },
      {
        id: 432,
        type: "medium",
        question: "In a Delivery Optimization profile, setting the 'Download Mode' to <b>'LAN (1)'</b> restricts peer-to-peer sharing to which devices?",
        options: [
          "Any device on the global internet.",
          "Devices sharing the exact same public IP address (typically devices sitting behind the same corporate NAT/router).",
          "Only devices connected to the same physical network switch.",
          "Only devices in the same Active Directory Domain."
        ],
        answer: "Devices sharing the exact same public IP address (typically devices sitting behind the same corporate NAT/router).",
        explanation: "Download mode 'LAN (1)' is the standard enterprise configuration. It tells the Delivery Optimization cloud service to only match peers if they report the exact same <b>public IP address</b>.",
        moreDetails: "This ensures that a PC in the New York office won't try to send gigabytes of update data to a PC in the London office over the costly WAN link.",
        otherOptions: "Internet (3) allows global sharing. Physical switches are not visible to the DO cloud. AD Domains do not define network topology.",
        link: "https://learn.microsoft.com/en-us/windows/deployment/update/waas-delivery-optimization-reference#download-mode"
      },
      {
        id: 433,
        type: "hard",
        question: "You have a complex corporate network across a large campus where multiple buildings use different public IPs, but they share a high-speed fiber backbone. You want PCs in Building A to share updates with PCs in Building B. How do you configure Delivery Optimization for this?",
        options: [
          "Set Download Mode to 'Internet (3)'.",
          "Set Download Mode to 'Group (2)' and configure a specific 'Group ID' (like a GUID) for all devices on the campus.",
          "Disable Delivery Optimization entirely.",
          "Install a third-party torrent client."
        ],
        answer: "Set Download Mode to 'Group (2)' and configure a specific 'Group ID' (like a GUID) for all devices on the campus.",
        explanation: "<b>Group (2)</b> mode overrides the strict public IP matching of LAN mode. By assigning the same <b>Group ID</b> via Intune to all PCs across the campus, the DO cloud service knows they are allowed to peer with each other, traversing internal routers.",
        moreDetails: "This requires the internal routing and firewalls between the buildings to allow DO traffic (typically port 7680).",
        otherOptions: "Internet mode would share with random consumer PCs globally. Disabling DO forces everyone to pull from the internet. Torrent clients are unauthorized.",
        link: "https://learn.microsoft.com/en-us/windows/deployment/update/waas-delivery-optimization-reference#group-id"
      },
      {
        id: 434,
        type: "medium",
        question: "What is a <b>Microsoft Connected Cache (MCC)</b> server?",
        options: [
          "A hardware appliance sold exclusively by Microsoft.",
          "A software-based caching solution installed on a local server (like Windows Server or ConfigMgr DP) that acts as a dedicated repository for Delivery Optimization content.",
          "A temporary folder on the C: drive.",
          "A cloud database in Azure."
        ],
        answer: "A software-based caching solution installed on a local server (like Windows Server or ConfigMgr DP) that acts as a dedicated repository for Delivery Optimization content.",
        explanation: "While DO is primarily peer-to-peer (PC to PC), organizations can deploy a <b>Microsoft Connected Cache</b> on their local network. If a PC needs an update, it checks the MCC server first.",
        moreDetails: "If the MCC has it, it downloads it at LAN speeds. If not, the MCC downloads it once from the internet, caches it, and serves it to the PC, acting as a highly efficient proxy.",
        otherOptions: "It is software, not proprietary hardware, local folders, or cloud DBs.",
        link: "https://learn.microsoft.com/en-us/windows/deployment/update/waas-microsoft-connected-cache"
      },
      {
        id: 435,
        type: "easy",
        question: "If a user is working from a coffee shop on a metered (data-capped) 4G/5G connection, how does Delivery Optimization handle peer-to-peer sharing by default?",
        options: [
          "It ignores the meter and shares data anyway.",
          "It automatically disables uploading to peers to prevent consuming the user's expensive data plan.",
          "It turns off the Wi-Fi adapter.",
          "It charges the data to the corporate Azure account."
        ],
        answer: "It automatically disables uploading to peers to prevent consuming the user's expensive data plan.",
        explanation: "Delivery Optimization is heavily integrated with the Windows OS network awareness stack. If a network is marked as <b>metered</b>, DO automatically suspends background peer-to-peer uploading.",
        moreDetails: "This protects users from unexpected data overages while traveling or working remotely.",
        otherOptions: "It respects metered connections. It does not disable hardware or charge Azure accounts.",
        link: "https://learn.microsoft.com/en-us/windows/deployment/update/waas-delivery-optimization#how-delivery-optimization-works"
      }
    ]
  },
  {
    id: 38,
    term: "Endpoint Analytics",
    category: "Manage applications and updates",
    questions: [
      {
        id: 436,
        type: "easy",
        question: "What is the primary objective of <b>Endpoint Analytics</b> in the Microsoft Intune admin center?",
        options: [
          "To track which websites employees are browsing.",
          "To provide metrics and insights into the user experience, helping IT identify slow boot times, application crashes, and proactive remediation opportunities.",
          "To serve as the primary antivirus engine.",
          "To track physical hardware inventory for accounting."
        ],
        answer: "To provide metrics and insights into the user experience, helping IT identify slow boot times, application crashes, and proactive remediation opportunities.",
        explanation: "<b>Endpoint Analytics</b> shifts the IT focus from 'Is the device compliant?' to 'Is the user having a good experience?'. It highlights devices that take 5 minutes to boot or apps that crash daily.",
        moreDetails: "This allows IT to proactively order a replacement SSD or patch a broken application before the user even calls the helpdesk.",
        otherOptions: "It does not track web history, perform AV scans, or handle financial asset tracking.",
        link: "https://learn.microsoft.com/en-us/mem/analytics/overview"
      },
      {
        id: 437,
        type: "medium",
        question: "In Endpoint Analytics, the <b>Startup performance</b> score is calculated based on two distinct phases of the boot process. What are they?",
        options: [
          "BIOS POST time and Network connection time.",
          "Core boot time (power on to login screen) and Core sign-in time (login to responsive desktop).",
          "Application load time and Antivirus scan time.",
          "Update installation time and BitLocker unlock time."
        ],
        answer: "Core boot time (power on to login screen) and Core sign-in time (login to responsive desktop).",
        explanation: "Startup performance explicitly measures how long the user is kept waiting. <b>Core boot time</b> covers the OS loading. <b>Core sign-in time</b> covers the processing of Group Policies, login scripts, and profile loading after the user enters their password.",
        moreDetails: "By splitting these, IT can determine if the delay is caused by hardware/drivers (boot time) or bloated startup scripts/policies (sign-in time).",
        otherOptions: "While network and AV affect these phases, the metrics are specifically 'boot' and 'sign-in'.",
        link: "https://learn.microsoft.com/en-us/mem/analytics/startup-performance"
      },
      {
        id: 438,
        type: "hard",
        question: "You want to use <b>Proactive Remediations</b> to automatically detect if the Print Spooler service has crashed and restart it without user intervention. What two components are required to create a Proactive Remediation package?",
        options: [
          "A batch file and a registry key.",
          "A Detection script (PowerShell) and a Remediation script (PowerShell).",
          "A Win32 app and a Detection rule.",
          "An Event Viewer log and a Task Scheduler trigger."
        ],
        answer: "A Detection script (PowerShell) and a Remediation script (PowerShell).",
        explanation: "A Proactive Remediation consists of two scripts. The <b>Detection script</b> runs on a schedule (e.g., every hour). If it returns 'Exit Code 1' (meaning an issue is found—e.g., the Spooler is stopped), Intune immediately executes the <b>Remediation script</b> (e.g., `Start-Service Spooler`).",
        moreDetails: "If the Detection script returns 'Exit Code 0' (no issue), the Remediation script is skipped. This creates a powerful, self-healing automation loop on the endpoint.",
        otherOptions: "Win32 apps install software. Event viewer/Task scheduler is the legacy local way, not the Intune cloud way.",
        link: "https://learn.microsoft.com/en-us/mem/analytics/proactive-remediations"
      },
      {
        id: 439,
        type: "medium",
        question: "The <b>Application Reliability</b> report in Endpoint Analytics highlights which specific metric to help identify problematic software?",
        options: [
          "The amount of disk space the application consumes.",
          "The Mean Time To Failure (MTTF) indicating how often an application crashes over a 14-day rolling window.",
          "The cost of the application license.",
          "The network bandwidth used by the app."
        ],
        answer: "The Mean Time To Failure (MTTF) indicating how often an application crashes over a 14-day rolling window.",
        explanation: "Application Reliability focuses on <b>crashes</b>. It calculates the MTTF, helping IT identify if a recent patch to 'FinanceApp.exe' caused it to start crashing daily for users.",
        moreDetails: "This allows IT to rollback the update or contact the vendor based on empirical data rather than waiting for helpdesk tickets.",
        otherOptions: "It measures stability/crashes, not disk space, financial cost, or network bandwidth.",
        link: "https://learn.microsoft.com/en-us/mem/analytics/application-reliability"
      },
      {
        id: 440,
        type: "easy",
        question: "Which Endpoint Analytics report provides a clear visual summary of which Windows 10 devices meet the strict hardware requirements (TPM 2.0, Secure Boot, CPU generation) to be upgraded to Windows 11?",
        options: [
          "Work from anywhere",
          "Battery health",
          "Resource performance",
          "Windows Autopilot deployment"
        ],
        answer: "Work from anywhere",
        explanation: "The <b>Work from anywhere</b> report includes the 'Windows 11 readiness' metric.",
        moreDetails: "It analyzes the hardware telemetry from enrolled devices and explicitly flags which devices are blocked from upgrading to Windows 11 due to incompatible CPUs, missing TPMs, or insufficient RAM.",
        otherOptions: "Battery health measures battery degradation. Resource performance tracks CPU/RAM spikes. Autopilot tracks provisioning success.",
        link: "https://learn.microsoft.com/en-us/mem/analytics/work-from-anywhere"
      }
    ]
  },
  {
    id: 39,
    term: "Remote Help & Troubleshooting",
    category: "Manage applications and updates",
    questions: [
      {
        id: 441,
        type: "easy",
        question: "What is a major enterprise advantage of the premium <b>Intune Remote Help</b> add-on compared to the built-in Windows Quick Assist tool?",
        options: [
          "Remote Help does not require an internet connection.",
          "Remote Help provides strong identity trust, showing the helper and the user their Entra ID profile pictures and company details to prevent spoofing/scams.",
          "Remote Help is completely free.",
          "Remote Help can install physical hardware."
        ],
        answer: "Remote Help provides strong identity trust, showing the helper and the user their Entra ID profile pictures and company details to prevent spoofing/scams.",
        explanation: "<b>Remote Help</b> is deeply integrated with Entra ID. When a helpdesk worker requests a session, the end-user sees the worker's official corporate name, title, and profile picture.",
        moreDetails: "This mitigates social engineering attacks where malicious actors call users pretending to be 'IT support' and ask them to open Quick Assist or TeamViewer.",
        otherOptions: "It requires internet. It is a premium paid add-on. Software cannot install physical hardware.",
        link: "https://learn.microsoft.com/en-us/mem/intune/remote-actions/remote-help"
      },
      {
        id: 442,
        type: "medium",
        question: "When using Intune Remote Help, how is elevation (interacting with UAC prompts) handled if the end-user does not have local administrator rights?",
        options: [
          "The session immediately disconnects.",
          "If the Helpdesk role has the 'Elevation' permission in Intune RBAC, the helper can enter their own admin credentials into the UAC prompt on the user's screen.",
          "Intune automatically makes the user a local admin.",
          "The UAC prompt is bypassed completely."
        ],
        answer: "If the Helpdesk role has the 'Elevation' permission in Intune RBAC, the helper can enter their own admin credentials into the UAC prompt on the user's screen.",
        explanation: "Intune RBAC governs Remote Help capabilities. If granted the <b>Elevation</b> permission, the IT worker can see the UAC prompt (which is normally hidden on a secure desktop) and type in administrator credentials to install software or change settings without giving the user permanent admin rights.",
        moreDetails: "This is critical for securely supporting standard users.",
        otherOptions: "It does not disconnect, make the user an admin, or bypass security protocols.",
        link: "https://learn.microsoft.com/en-us/mem/intune/remote-actions/remote-help#role-based-access-control-rbac"
      },
      {
        id: 443,
        type: "hard",
        question: "A remote user's device is experiencing issues, but they are too busy to do a screen-sharing session. You need to review their Event Viewer and Intune logs. What Intune feature allows you to gather these logs silently?",
        options: [
          "Autopilot Reset",
          "Collect diagnostics (Remote Action)",
          "Fresh Start",
          "Windows LAPS"
        ],
        answer: "Collect diagnostics (Remote Action)",
        explanation: "The <b>Collect diagnostics</b> remote action tells the device to silently package critical system logs (including Event Viewer, Registry keys, MDM event logs, and IME logs) into a zip file and upload it to the Intune portal.",
        moreDetails: "The administrator can then download the zip file and analyze the failure without interrupting the user's workflow.",
        otherOptions: "Autopilot Reset and Fresh Start wipe the device. LAPS manages local passwords.",
        link: "https://learn.microsoft.com/en-us/mem/intune/remote-actions/collect-diagnostics"
      },
      {
        id: 444,
        type: "medium",
        question: "When troubleshooting a failed Win32 App deployment on a client machine, which specific log file should you review first to see the exact download and execution steps?",
        options: [
          "C:\\Windows\\System32\\winevt\\Logs\\Security.evtx",
          "C:\\ProgramData\\Microsoft\\IntuneManagementExtension\\Logs\\IntuneManagementExtension.log",
          "C:\\Windows\\WindowsUpdate.log",
          "C:\\boot.ini"
        ],
        answer: "C:\\ProgramData\\Microsoft\\IntuneManagementExtension\\Logs\\IntuneManagementExtension.log",
        explanation: "The <b>IntuneManagementExtension.log</b> is the holy grail for troubleshooting Win32 apps and PowerShell scripts.",
        moreDetails: "It tracks the entire process: policy evaluation, downloading the encrypted `.intunewin` blob, decrypting it, running the installation command, and evaluating the detection rules. Tools like CMTrace are typically used to read this log.",
        otherOptions: "Security.evtx tracks logins. WindowsUpdate.log tracks OS patches. boot.ini is an obsolete boot configuration file.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/apps-win32-troubleshoot"
      },
      {
        id: 445,
        type: "easy",
        question: "You just assigned a new critical policy in Intune, but the user's device hasn't received it yet because it only checks in every 8 hours. How can you force the device to check in immediately from the Intune console?",
        options: [
          "Send the 'Sync' remote action to the device.",
          "Send the 'Restart' remote action.",
          "Delete the device and re-enroll it.",
          "Change the user's password."
        ],
        answer: "Send the 'Sync' remote action to the device.",
        explanation: "The <b>Sync</b> remote action pings the device over the Windows Notification Service (WNS), instructing the local MDM client to immediately check in with Intune and download any new policies or app assignments.",
        moreDetails: "Users can also trigger this locally from the Company Portal app or Windows Settings > Accounts > Access work or school.",
        otherOptions: "Restarting works eventually but is disruptive. Deleting the device is drastic and breaks management. Password changes do not trigger MDM syncs.",
        link: "https://learn.microsoft.com/en-us/mem/intune/remote-actions/device-sync"
      }
    ]
  },
  {
    id: 40,
    term: "Windows Application Troubleshooting",
    category: "Manage applications and updates",
    questions: [
      {
        id: 446,
        type: "easy",
        question: "A user complains that an application is being blocked from running. You suspect an Attack Surface Reduction (ASR) rule or AppLocker policy is the culprit. Where on the local Windows machine should you look to confirm this?",
        options: [
          "Task Manager",
          "Event Viewer (Applications and Services Logs > Microsoft > Windows)",
          "Control Panel > Programs and Features",
          "The Recycle Bin"
        ],
        answer: "Event Viewer (Applications and Services Logs > Microsoft > Windows)",
        explanation: "Windows deeply logs security interventions in the <b>Event Viewer</b>.",
        moreDetails: "Specifically, AppLocker blocks are logged under `Microsoft > Windows > AppLocker`. ASR and Microsoft Defender blocks are logged under `Microsoft > Windows > Windows Defender`. This is the definitive source to prove *what* blocked an executable.",
        otherOptions: "Task Manager shows running processes. Control Panel shows installed MSIs. The Recycle Bin holds deleted files.",
        link: "https://learn.microsoft.com/en-us/windows/security/application-security/application-control/windows-defender-application-control/troubleshooting"
      },
      {
        id: 447,
        type: "medium",
        question: "You deployed a Win32 app to a device. The Intune portal says 'Installed', but the user claims it is not there. You check the `IntuneManagementExtension.log` and see the installer returned 'Exit Code 0' (Success). What is the most likely configuration error in Intune?",
        options: [
          "The firewall blocked the download.",
          "The Detection Rule is configured incorrectly.",
          "The device does not have an Intune license.",
          "The installer was a 16-bit application."
        ],
        answer: "The Detection Rule is configured incorrectly.",
        explanation: "If the log shows 'Exit Code 0', the command executed successfully. If Intune reports 'Installed', the <b>Detection Rule</b> found what it was looking for. However, if the app is missing, the Detection Rule was likely pointing to a generic folder (like `C:\\Program Files`) instead of the specific executable.",
        moreDetails: "Because the generic folder exists, Intune assumes the app installed perfectly, creating a false positive.",
        otherOptions: "If the firewall blocked it, it wouldn't run. If there's no license, it wouldn't deploy. Exit Code 0 proves execution happened.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/apps-win32-troubleshoot"
      },
      {
        id: 448,
        type: "hard",
        question: "During Windows Autopilot, a device sits on the Enrollment Status Page (ESP) for exactly 60 minutes and then fails with a timeout error. How can you prevent a single large application from causing the entire Autopilot provisioning process to fail via timeout?",
        options: [
          "Configure the ESP profile setting: 'Show error when installation takes longer than specified number of minutes' to a higher value, or reduce the number of blocking apps.",
          "Connect the device to a 5G hotspot.",
          "Disable BitLocker.",
          "Assign the user a Global Administrator role."
        ],
        answer: "Configure the ESP profile setting: 'Show error when installation takes longer than specified number of minutes' to a higher value, or reduce the number of blocking apps.",
        explanation: "The Enrollment Status Page (ESP) tracks the installation of required apps before letting the user reach the desktop. It has a default <b>timeout</b> (usually 60 minutes).",
        moreDetails: "If deploying massive apps (like AutoCAD), you must either increase the ESP timeout to 120+ minutes, or remove that specific app from the 'Block device use until these required apps are installed' list so it installs silently in the background later.",
        otherOptions: "Network speed helps, but doesn't change the hardcoded timeout policy limit. BitLocker and RBAC roles do not affect ESP timeouts.",
        link: "https://learn.microsoft.com/en-us/mem/intune/enrollment/windows-enrollment-status"
      },
      {
        id: 449,
        type: "medium",
        question: "A user is assigned to two different Entra ID groups. Group A has a Win32 app assigned as 'Required'. Group B has the exact same app assigned as 'Uninstall'. What happens on the user's device?",
        options: [
          "The app constantly installs and uninstalls in a loop.",
          "The 'Uninstall' assignment wins, and the app is removed.",
          "The 'Required' assignment wins, and the app is installed/kept on the device.",
          "Intune disables the device."
        ],
        answer: "The 'Required' assignment wins, and the app is installed/kept on the device.",
        explanation: "Intune has strict conflict resolution logic for app assignments. If a user or device is targeted with both a 'Required' (install) and an 'Uninstall' intent for the same application, the <b>Required intent always wins</b>.",
        moreDetails: "This ensures that a business-critical application is not accidentally removed because a user was added to a broad cleanup group.",
        otherOptions: "It does not loop, the uninstall is ignored, and the device is not disabled.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/apps-deploy#app-intent-resolution"
      },
      {
        id: 450,
        type: "easy",
        question: "An end-user is having trouble installing an Available app from the Company Portal. You ask them to send you the logs. How does the user generate and send Company Portal logs?",
        options: [
          "They must open Command Prompt and run 'ipconfig /flushdns'.",
          "They open the Company Portal app, click Settings > Help & Support, and click 'Upload logs'.",
          "They have to physically mail the hard drive to IT.",
          "They must log into the Azure Portal."
        ],
        answer: "They open the Company Portal app, click Settings > Help & Support, and click 'Upload logs'.",
        explanation: "The <b>Company Portal</b> app has a built-in mechanism for users to easily upload diagnostics. When they click 'Upload logs', the app gathers its internal telemetry and sends an Incident ID to Microsoft.",
        moreDetails: "The user can then give that Incident ID to the IT helpdesk, who can use it to open a support ticket with Microsoft, or the helpdesk can use the 'Collect diagnostics' remote action to get the raw logs themselves.",
        otherOptions: "Flushdns resets network cache. End-users do not use the Azure portal or mail hard drives.",
        link: "https://learn.microsoft.com/en-us/mem/intune/user-help/send-logs-to-your-it-admin-windows"
      }
    ]
  }
];
