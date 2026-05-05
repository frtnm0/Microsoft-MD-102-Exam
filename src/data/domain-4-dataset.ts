import type { TermData } from './domain-1-dataset';

export const domain4Dataset: TermData[] = [
  {
    id: 31,
    term: "Microsoft 365 Apps Deployment",
    category: "Manage applications and updates",
    questions: [
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

    ]
  },
  {
    id: 39,
    term: "Remote Help & Troubleshooting",
    category: "Manage applications and updates",
    questions: [

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
  },
  {
    id: 994,
    term: "App Management Scenario Steps",
    category: "Manage applications and updates",
    questions: [
      {
        id: 452,
        type: "medium",
        format: "order-steps",
        question: "Arrange the phases of deploying an out-of-band Expedited Quality Update via Intune to fix a zero-day vulnerability:",
        options: [
          "Navigate to Devices > Windows > Quality updates for Windows 10 and later.",
          "Create a new Expedited update profile.",
          "Select the specific target release (e.g., '04/11/2026 - 2026.04 B Security Updates').",
          "Configure the number of days until a forced restart occurs (e.g., 1 day).",
          "Assign the profile to all vulnerable devices."
        ],
        answer: "Navigate to Quality Updates -> Create Expedited Profile -> Select Target Release -> Configure Restart Days -> Assign",
        explanation: "Expediting an update requires creating a specific profile that overrides existing deferrals. You must pick the exact KB/Release you want to enforce and set an aggressive forced-restart deadline.",
        moreDetails: "This process relies heavily on the Windows Update for Business deployment service.",
        otherOptions: "N/A",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/windows-10-expedite-updates"
      },
      {
        id: 453,
        type: "hard",
        format: "order-steps",
        question: "Arrange the steps to configure Delivery Optimization (DO) using Intune to optimize bandwidth across a campus with a shared high-speed backbone but multiple public IPs:",
        options: [
          "Create a new Device Configuration profile > Templates > Delivery Optimization.",
          "Set the 'Download mode' to 'Group (2)'.",
          "Configure the 'Group ID' setting using a specific GUID.",
          "Set the 'Minimum RAM (inclusive)' and 'Minimum disk size' requirements for peer caching.",
          "Assign the profile to all PCs on the campus."
        ],
        answer: "Create Profile -> Set Mode to Group (2) -> Configure Group ID GUID -> Set Hardware Minimums -> Assign",
        explanation: "Because multiple public IPs are in use, standard LAN mode will fail. You must use 'Group (2)' mode and explicitly bind all campus devices together using a shared Group ID GUID. You also define which hardware is capable of acting as a cache.",
        moreDetails: "PCs with very low disk space or RAM will automatically opt out of hosting content to prevent performance degradation.",
        otherOptions: "N/A",
        link: "https://learn.microsoft.com/en-us/windows/deployment/update/waas-delivery-optimization-reference#group-id"
      },
      {
        id: 456,
        type: "medium",
        format: "order-steps",
        question: "Arrange the update lifecycle when using the Windows Package Manager (winget) integration for Win32 apps hosted in the Microsoft Store:",
        options: [
          "The ISV (Independent Software Vendor) publishes a new version of the Win32 application installer to the Microsoft Store.",
          "The Microsoft Store catalog is updated with the new version manifest.",
          "The Intune Management Extension on the client checks the local app version against the winget catalog.",
          "Winget silently downloads the updated .exe/.msi from the Store CDN in the background.",
          "Winget executes the installer using the system context to update the application seamlessly."
        ],
        answer: "ISV Publishes Update -> Store Catalog Updates -> Client Checks Catalog -> Winget Downloads -> Winget Installs Update",
        explanation: "One of the greatest benefits of the new Intune Store integration is automatic updates for Win32 apps. The local winget client continuously polls the Store catalog and pulls updates without requiring the administrator to re-package and re-upload .intunewin files.",
        moreDetails: "This drastically reduces the packaging overhead for common third-party apps like Adobe Reader or Zoom.",
        otherOptions: "N/A",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/store-apps-microsoft#update-store-apps"
      }
    ]
  },
  {
    id: 996,
    term: "Multi-Select App Management Scenarios",
    category: "Manage applications",
    questions: [
      {
        id: 458,
        type: "hard",
        format: "multi-select",
        question: "You are packaging a complex desktop application into a `.intunewin` file using the Microsoft Win32 Content Prep Tool. Which of the following requirements MUST be met for the deployment to succeed via Intune? (Select THREE)",
        options: [
          "The uncompressed application folder size must not exceed 8 GB (without requesting a support quota increase).",
          "You must specify an exact silent install command (e.g., msiexec /i setup.msi /qn).",
          "You must specify an uninstallation command.",
          "The application installer must be an .msi file.",
          "You must include a custom PowerShell script for installation."
        ],
        multiAnswers: [
          "The uncompressed application folder size must not exceed 8 GB (without requesting a support quota increase).",
          "You must specify an exact silent install command (e.g., msiexec /i setup.msi /qn).",
          "You must specify an uninstallation command."
        ],
        explanation: "Win32 app deployments require strict metadata. The file size is hard-capped at <b>8 GB</b> by default. Because Intune executes the payload headlessly in the background (SYSTEM context), you MUST provide a <b>silent install command</b> and a valid <b>uninstall command</b>.",
        moreDetails: "Win32 apps can wrap any file type (.exe, .bat, .ps1, .msi); they are not restricted to just .msi. A custom PowerShell script is optional, not mandatory.",
        otherOptions: ".exe installers and batch scripts are completely supported, so it doesn't have to be an .msi or PS1.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/apps-win32-prepare"
      },
      {
        id: 459,
        type: "medium",
        format: "multi-select",
        question: "When creating an App Protection Policy (MAM) for iOS/iPadOS, which of the following 'Data Transfer' restrictions can be enforced? (Select THREE)",
        options: [
          "Prevent users from taking screenshots of the managed app.",
          "Block users from saving corporate files to their personal iCloud Drive.",
          "Restrict cutting, copying, and pasting between other apps.",
          "Prevent the user from uninstalling the managed application.",
          "Require the user to connect to a corporate Wi-Fi network before opening the app."
        ],
        multiAnswers: [
          "Prevent users from taking screenshots of the managed app.",
          "Block users from saving corporate files to their personal iCloud Drive.",
          "Restrict cutting, copying, and pasting between other apps."
        ],
        explanation: "MAM policies at the application layer can enforce <b>screen capture blocking</b> (though on iOS this is often handled by blurring or blocking the OS API), restrict <b>saving to unmanaged storage</b> (like iCloud), and control <b>clipboard behavior</b> (copy/paste).",
        moreDetails: "Because MAM does not manage the device OS, it cannot prevent a user from simply deleting an app from their home screen, nor does it control OS-level Wi-Fi profiles.",
        otherOptions: "MAM cannot prevent app uninstallation or enforce specific Wi-Fi connections.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/app-protection-policy-settings-ios"
      },
      {
        id: 460,
        type: "hard",
        format: "multi-select",
        question: "You are defining 'Detection rules' for a newly packaged Win32 application in Intune. Which of the following methods are natively supported for detecting if the application successfully installed? (Select THREE)",
        options: [
          "MSI product code presence.",
          "File or folder presence (with optional version/date checking).",
          "Registry key presence or value comparison.",
          "Active network port listening on localhost.",
          "Analyzing the output of a native Windows Event Log query."
        ],
        multiAnswers: [
          "MSI product code presence.",
          "File or folder presence (with optional version/date checking).",
          "Registry key presence or value comparison."
        ],
        explanation: "Intune natively supports detecting Win32 apps by checking for an <b>MSI Product Code</b>, looking for a specific <b>File/Folder</b> path, or querying a <b>Registry</b> key.",
        moreDetails: "If you need to detect based on network ports or Event Logs, you would have to write a Custom Detection Script (PowerShell) instead of using the native drop-down rules.",
        otherOptions: "Network ports and Event Logs require custom PowerShell detection scripts.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/apps-win32-add#step-4-detection-rules"
      },
      {
        id: 461,
        type: "medium",
        format: "multi-select",
        question: "Which of the following scenarios are valid use cases for deploying an 'App Configuration Policy' in Intune? (Select TWO)",
        options: [
          "Pre-populating a server URL for a line-of-business iOS app so the user doesn't have to type it.",
          "Silently disabling the 'Save Password' feature inside the managed Microsoft Edge browser.",
          "Blocking an unmanaged personal device from accessing Exchange Online.",
          "Forcing a Windows 11 device to upgrade to the latest Feature Update."
        ],
        multiAnswers: [
          "Pre-populating a server URL for a line-of-business iOS app so the user doesn't have to type it.",
          "Silently disabling the 'Save Password' feature inside the managed Microsoft Edge browser."
        ],
        explanation: "App Configuration Policies inject settings directly into the application's property list (iOS) or managed config (Android). This is used to <b>pre-configure app settings</b> (like URLs) or <b>toggle app features</b> (like disabling Edge features).",
        moreDetails: "Blocking access is handled by Conditional Access. OS updates are handled by Windows Update rings.",
        otherOptions: "Conditional Access blocks devices; Update Rings manage OS upgrades.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/app-configuration-policies-overview"
      }
    ]
  },
  {
    id: 1000,
    term: "Multi-Select (Select Two) App Management",
    category: "Manage applications",
    questions: [
      {
        id: 462,
        type: "medium",
        format: "multi-select",
        question: "You are configuring a Microsoft Edge policy in Intune. Which of the following features can be controlled using Edge Administrative Templates? (Select TWO)",
        options: [
          "Forcing the installation of a specific browser extension.",
          "Configuring the Edge startup page to a corporate intranet site.",
          "Preventing the user from uninstalling the Microsoft Edge application from Windows.",
          "Setting Edge as the default PDF viewer for the entire OS."
        ],
        multiAnswers: [
          "Forcing the installation of a specific browser extension.",
          "Configuring the Edge startup page to a corporate intranet site."
        ],
        explanation: "Edge Administrative Templates allow granular control over browser behavior, including <b>forcing extensions</b> and <b>setting startup pages</b>.",
        moreDetails: "Edge is integrated into Windows 11 and cannot be uninstalled by default, but this isn't controlled via an Edge policy template. OS-level default app associations (like PDF viewers) require a Default Associations configuration file, not a browser template.",
        otherOptions: "App uninstallation and OS default associations are not handled by Edge administrative templates.",
        link: "https://learn.microsoft.com/en-us/deployedge/configure-microsoft-edge"
      },
      {
        id: 463,
        type: "hard",
        format: "multi-select",
        question: "When deploying an iOS store app via Intune, which of the following requirements must be met to silently install the app without prompting the user for an Apple ID? (Select TWO)",
        options: [
          "The app must be purchased/acquired through Apple Volume Purchase Program (VPP) / Apple Business Manager.",
          "The VPP token must be synchronized with Intune and the app assigned as 'Required'.",
          "The user must have an active personal iCloud account signed into the device.",
          "The app must be a custom line-of-business (.ipa) file."
        ],
        multiAnswers: [
          "The app must be purchased/acquired through Apple Volume Purchase Program (VPP) / Apple Business Manager.",
          "The VPP token must be synchronized with Intune and the app assigned as 'Required'."
        ],
        explanation: "To bypass the Apple ID prompt and silently push an iOS app, the app licenses must be managed via <b>Apple Business Manager (VPP)</b> and deployed as device-licensed apps in Intune.",
        moreDetails: "If you just deploy a regular App Store link, iOS will prompt the user to enter their Apple ID to 'purchase' the free app.",
        otherOptions: "Requiring personal iCloud defeats silent deployment. It does not need to be a custom LOB app; public store apps work via VPP.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/vpp-apps-ios"
      },
      {
        id: 464,
        type: "medium",
        format: "multi-select",
        question: "Which of the following application types can be natively added and deployed to Android Enterprise fully managed devices via Intune? (Select TWO)",
        options: [
          "Managed Google Play store apps.",
          "Web links (Web apps) published through Managed Google Play.",
          "Windows Win32 (.intunewin) packages.",
          "macOS (.pkg) installers."
        ],
        multiAnswers: [
          "Managed Google Play store apps.",
          "Web links (Web apps) published through Managed Google Play."
        ],
        explanation: "Android Enterprise relies heavily on <b>Managed Google Play</b> to deliver both native Android <b>store apps</b> and custom <b>web apps/links</b> directly to the managed device.",
        moreDetails: "Win32 packages are explicitly for Windows. macOS installers are for Apple devices.",
        otherOptions: "Win32 and macOS installers cannot run on Android.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/apps-add-android-for-work"
      }
    ]
  },
  {
    id: 99,
    term: "2026 Scenario Based Questions",
    category: "Manage applications",
    questions: [
      {
        id: 4001,
        type: "hard",
        format: "multiple-choice",
        question: "You are deploying a complex Win32 application during the Autopilot Enrollment Status Page (ESP). The application installer strictly requires a hard reboot to finish writing registry keys before any other application can install. If you configure the Win32 app 'Device restart behavior' to 'Force device restart', what happens during the ESP phase?",
        options: [
          "The ESP gracefully pauses, restarts the device, and seamlessly resumes the tracking of the remaining apps.",
          "The ESP fails immediately because hard reboots initiated by Win32 apps break the ESP tracking sequence.",
          "Intune ignores the restart command until the ESP completes and the user reaches the desktop.",
          "The device bootloops until the user manually powers it off."
        ],
        answer: "The ESP fails immediately because hard reboots initiated by Win32 apps break the ESP tracking sequence.",
        explanation: "During the Autopilot ESP, if a Win32 app installation triggers a hard, unmanaged reboot (often using exit code 1641 or 3010 without the proper Intune wrapper handling), the ESP tracking breaks, causing the deployment to fail.",
        moreDetails: "To handle apps that require reboots during ESP, administrators must package the app carefully (using the Intune Win32 Prep Tool) to suppress the native installer reboot, and let Intune handle the soft reboot gracefully based on return codes, or avoid requiring that app during the ESP entirely.",
        otherOptions: "The ESP does not gracefully resume from unexpected hard reboots. Intune cannot 'ignore' a hard reboot if the installer binary executes it. It doesn't bootloop, it just fails the ESP.",
        link: "https://learn.microsoft.com/en-us/troubleshoot/mem/intune/app-management/troubleshoot-app-install"
      },
      {
        id: 4002,
        type: "hard",
        format: "multiple-choice",
        question: "Your organization hires contractors who use their own personal iPhones. They need access to corporate email via the Outlook app, but you cannot legally require them to enroll their personal devices into Intune MDM. How can you ensure corporate data cannot be copied from Outlook to their personal native iOS Notes app?",
        options: [
          "Deploy an iOS configuration profile via Apple Business Manager.",
          "Create a Conditional Access policy requiring device compliance.",
          "Create an Intune App Protection Policy (MAM-WE) targeting the Outlook app, with the 'Target to apps on all device types' set to 'Unmanaged'.",
          "This is not possible; data protection on iOS requires full MDM enrollment."
        ],
        answer: "Create an Intune App Protection Policy (MAM-WE) targeting the Outlook app, with the 'Target to apps on all device types' set to 'Unmanaged'.",
        explanation: "Mobile Application Management without Enrollment (MAM-WE) allows organizations to apply App Protection Policies directly to enlightened apps (like Microsoft Outlook) on personal devices without requiring the device to be managed by an MDM.",
        moreDetails: "The policy creates a secure container around the Outlook app, preventing data leakage (like copy/paste) to unmanaged personal apps. Conditional Access can be used alongside this to enforce that users *must* use the protected Outlook app to access Exchange Online.",
        otherOptions: "ABM requires device ownership/enrollment. Device compliance requires MDM enrollment. It IS possible using MAM-WE.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/app-protection-policy"
      },
      {
        id: 4003,
        type: "hard",
        format: "multiple-choice",
        question: "You need to deploy the 'Adobe Acrobat Reader' app from the Microsoft Store to all Windows 11 devices. You notice the legacy 'Microsoft Store for Business' tab is deprecated and no longer syncing. What is the modern approach to deploy this Store app natively through Intune?",
        options: [
          "Download the .appx bundle manually and upload it as a Line-of-Business (LOB) app.",
          "Use the 'Microsoft Store app (new)' app type in Intune, which leverages the Windows Package Manager (winget) integration.",
          "Deploy a PowerShell script that invokes the Microsoft Store API.",
          "Create a Win32 app containing the installer downloaded from Adobe's website."
        ],
        answer: "Use the 'Microsoft Store app (new)' app type in Intune, which leverages the Windows Package Manager (winget) integration.",
        explanation: "Following the retirement of the Microsoft Store for Business, the new integration in Intune uses the 'Microsoft Store app (new)' type. This natively relies on the Windows Package Manager (winget) to search, deploy, and update Store applications.",
        moreDetails: "This method is far superior to LOB apps or scripts because Intune directly handles the installation and lifecycle updates silently in the background without needing offline files.",
        otherOptions: "LOB apps are legacy for Store apps. PowerShell is unnecessary overhead. Downloading from Adobe bypasses the Store requirement entirely.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/store-apps-windows"
      },
      {
        id: 4004,
        type: "hard",
        format: "multiple-choice",
        question: "You are deploying Microsoft 365 Apps for enterprise to Windows 10 devices using the built-in Intune UI. The devices currently have legacy MSI versions of Office 2016 installed. You configure the policy to 'Remove other versions of Office (MSI)'. What happens to the user's legacy Visio 2016 MSI installation if you do NOT include Visio in the new deployment payload?",
        options: [
          "Visio 2016 is uninstalled, and the user loses Visio entirely.",
          "Visio 2016 is left intact because it was not explicitly included in the new deployment.",
          "Visio 2016 is automatically upgraded to Visio Plan 2.",
          "The entire Microsoft 365 Apps installation fails due to a conflict with the legacy Visio MSI."
        ],
        answer: "Visio 2016 is uninstalled, and the user loses Visio entirely.",
        explanation: "When you select 'Remove other versions of Office (MSI)' in the Intune Microsoft 365 Apps deployment configuration, the Office Deployment Tool (ODT) removes ALL MSI installations of Office products, including Project and Visio.",
        moreDetails: "If you want the user to retain Visio functionality, you must either deploy the Click-to-Run version of Visio alongside the Microsoft 365 Apps, or use a custom XML configuration (instead of the Intune UI) to explicitly exclude Visio from the MSI removal process.",
        otherOptions: "It is not left intact; the removal is aggressive. It does not auto-upgrade without a license/configuration. The installation doesn't fail; it succeeds by destroying the legacy app.",
        link: "https://learn.microsoft.com/en-us/deployoffice/upgrade-from-msi-version"
      },
      {
        id: 4005,
        type: "hard",
        format: "multiple-choice",
        question: "You are using Intune Win32 App Supersedence to upgrade an application from v1.0 to v2.0. In the supersedence relationship, you toggle the 'Uninstall previous version' switch to 'No'. What is the expected behavior on the endpoint when v2.0 is deployed?",
        options: [
          "The installation fails because Win32 apps cannot exist side-by-side.",
          "Intune runs the v1.0 uninstall command anyway as a safety measure.",
          "Intune installs v2.0 over or alongside v1.0, relying on the v2.0 installer's native logic to handle the in-place upgrade.",
          "Intune creates an isolated App-V bubble for v2.0."
        ],
        answer: "Intune installs v2.0 over or alongside v1.0, relying on the v2.0 installer's native logic to handle the in-place upgrade.",
        explanation: "In Intune Win32 App Supersedence, setting 'Uninstall previous version' to 'No' means Intune will not trigger the v1.0 uninstall string. Instead, it assumes the v2.0 installer is capable of performing an in-place upgrade directly over the existing binaries.",
        moreDetails: "This is common for many modern MSIs or EXEs that natively detect older versions and upgrade them. If the installer cannot handle in-place upgrades, the deployment might fail or result in duplicated entries in the Control Panel.",
        otherOptions: "Win32 apps *can* exist side-by-side if the developer allowed it. Intune strictly follows the toggle; it won't run the uninstaller if set to 'No'. Intune Win32 does not use App-V virtualization.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/apps-win32-supersedence"
      },
      {
        id: 4006,
        type: "hard",
        format: "multiple-choice",
        question: "You are deploying an internally developed Line-of-Business (LOB) application as an MSIX package via Intune to all Windows 11 devices. The application refuses to install, and the Intune console reports an error related to the certificate. What must you configure before deploying this custom MSIX package?",
        options: [
          "Deploy the self-signed certificate or internal PKI Root CA certificate used to sign the MSIX package to the 'Trusted Root Certification Authorities' store on the devices.",
          "Change the Intune app type from 'Line-of-Business app' to 'Windows app (Win32)'.",
          "Purchase an Enterprise App Management add-on license for Intune.",
          "Disable Windows Defender SmartScreen via a configuration profile."
        ],
        answer: "Deploy the self-signed certificate or internal PKI Root CA certificate used to sign the MSIX package to the 'Trusted Root Certification Authorities' store on the devices.",
        explanation: "MSIX packages (unlike standard MSIs or EXEs) strictly require a digital signature to install. The Windows OS must explicitly trust the certificate used to sign the package.",
        moreDetails: "If the package was signed with a self-signed certificate or an internal corporate PKI that the endpoint does not yet know about, the installation will be blocked by the OS. You must push the Root CA or the self-signed cert to the endpoints (usually via an Intune Trusted Certificate profile) before deploying the app.",
        otherOptions: "Win32 apps don't bypass the MSIX signature requirement if you are wrapping an MSIX. The Enterprise App add-on is for advanced catalogs, not basic MSIX deployment. Disabling SmartScreen lowers security and doesn't fix the underlying trust issue.",
        link: "https://learn.microsoft.com/en-us/windows/msix/package/sign-app-package-using-signtool"
      },
      {
        id: 4007,
        type: "hard",
        format: "multiple-choice",
        question: "Your company provides fully managed Android Enterprise devices to factory floor workers. You deploy Microsoft Edge to these devices via Managed Google Play. You want Edge to automatically open the company's intranet portal as the homepage without the user having to configure anything. How do you achieve this in Intune?",
        options: [
          "Create a Windows Configuration profile and select the Android platform.",
          "Create an App Configuration Policy targeted to 'Managed devices', select Microsoft Edge, and use the configuration designer to set the 'HomepageLocation' key.",
          "Create an App Protection Policy (MAM) and set the 'Managed Browser' pin.",
          "Publish a custom APK version of Edge."
        ],
        answer: "Create an App Configuration Policy targeted to 'Managed devices', select Microsoft Edge, and use the configuration designer to set the 'HomepageLocation' key.",
        explanation: "App Configuration Policies allow administrators to push specific settings (like homepages, bookmarks, or server URLs) directly into applications that support them (like Microsoft Edge or Outlook).",
        moreDetails: "By targeting 'Managed devices' (since these are fully managed Android Enterprise devices), Intune leverages the Managed Google Play API to inject the configuration into the app silently. The user receives a pre-configured browser upon launching it.",
        otherOptions: "Windows config profiles don't apply to Android. App Protection Policies (MAM) protect data (DLP), they don't configure app UI features like homepages. Custom APKs are unmanageable and against best practices.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/app-configuration-policies-use-android"
      },
      {
        id: 4008,
        type: "hard",
        format: "multiple-choice",
        question: "You have deployed a complex Win32 App via Intune. The installation command works perfectly, but Intune constantly reports the app as 'Failed' or 'Not Installed', and repeatedly attempts to reinstall it every time the device syncs. What is the root cause of this loop?",
        options: [
          "The 'Install behavior' is set to 'System' instead of 'User'.",
          "The Detection Rule is incorrectly configured and cannot find the specified file, registry key, or MSI product code after the installation completes.",
          "The user does not have local administrator rights.",
          "The Intune Management Extension service on the device has crashed."
        ],
        answer: "The Detection Rule is incorrectly configured and cannot find the specified file, registry key, or MSI product code after the installation completes.",
        explanation: "Intune uses Detection Rules to verify if a Win32 app successfully installed. After the installation command finishes executing, Intune immediately checks the detection rule.",
        moreDetails: "If the rule is looking for a file that the installer didn't actually create (e.g., a typo in the path, or checking a 64-bit registry path instead of 32-bit), Intune concludes the installation failed. It will then retry the installation on the next sync cycle, causing an endless loop.",
        otherOptions: "System/User context doesn't inherently cause a loop if the detection rule matches the context. If the user wasn't admin, the install would actually fail, not loop after succeeding. If the IME crashed, it wouldn't be attempting reinstalls.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/apps-win32-add#step-4-detection-rules"
      },
      {
        id: 4009,
        type: "hard",
        format: "multiple-choice",
        question: "Your organization currently uses the Semi-Annual Enterprise Channel for Microsoft 365 Apps. You change the Intune deployment policy to use the Monthly Enterprise Channel. What happens on the endpoints that already have the Semi-Annual channel installed?",
        options: [
          "The devices completely uninstall Microsoft 365 Apps and reinstall the entire 3GB suite from the CDN.",
          "The Office deployment tool performs a delta update, switching the registry keys and downloading only the necessary differential files to transition the channel in the background.",
          "The devices remain on the Semi-Annual channel; channel changes require a manual wipe and load.",
          "The user receives a prompt asking them which channel they prefer."
        ],
        answer: "The Office deployment tool performs a delta update, switching the registry keys and downloading only the necessary differential files to transition the channel in the background.",
        explanation: "Microsoft 365 Apps (Click-to-Run) is designed to handle channel transitions gracefully. When Intune pushes the new configuration, the local Office Update engine updates its configuration.",
        moreDetails: "The engine then reaches out to the Office CDN (or local cache) and downloads only the delta updates required to catch the binaries up to the Monthly Enterprise Channel version. It does not perform a destructive full uninstall/reinstall, saving massive amounts of bandwidth.",
        otherOptions: "It does not reinstall the full suite. It does not require a manual wipe. Users are not prompted for administrative channel selections.",
        link: "https://learn.microsoft.com/en-us/deployoffice/change-update-channels"
      },
      {
        id: 4010,
        type: "hard",
        format: "multiple-choice",
        question: "You write a custom PowerShell script to act as a Detection Rule for a Win32 app in Intune. The script checks a complex WMI class. If the app is present, the script ends with `Write-Host 'App Found'`. If it is not present, it ends with `Write-Host 'App Missing'`. The Intune app always reports as 'Installed' even on fresh PCs. Why?",
        options: [
          "Detection scripts must be signed by a trusted Root CA.",
          "Intune considers any script that exits with a code of 0 (success) AND outputs any string to STDOUT as a successful detection, regardless of what the string actually says.",
          "Intune requires the script to explicitly return 'Exit 1' to signify an app is installed.",
          "WMI classes cannot be queried under the 'System' execution context."
        ],
        answer: "Intune considers any script that exits with a code of 0 (success) AND outputs any string to STDOUT as a successful detection, regardless of what the string actually says.",
        explanation: "The logic for Intune custom script detection rules is very specific: The app is detected (installed) ONLY if the script exits with an exit code of 0 AND writes *at least one character* to standard output (STDOUT).",
        moreDetails: "Because your script writes 'App Missing' to STDOUT and exits normally (code 0) when the app is absent, Intune sees STDOUT content + Exit 0, and incorrectly assumes the app *is* installed. To fix this, the script should output nothing (or `Exit 1`) when the app is not found.",
        otherOptions: "Signing is not strictly required. Exit 1 means 'Not Detected' (failure). WMI queries work perfectly fine in the System context.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/apps-win32-add#step-4-detection-rules"
      }
    ]
  },
  {
    id: 994,
    term: "Advanced App Management Scenarios (2026 Updates)",
    category: "Manage applications",
    questions: [
      {
        id: 4001,
        type: "hard",
        question: "You package a 32-bit legacy application as an Intune Win32 app (.intunewin). The app installs successfully, but Intune repeatedly reports the installation as 'Failed' and attempts to reinstall it every time the device syncs. You configured a custom Registry detection rule looking for a key in `HKEY_LOCAL_MACHINE\\Software\\LegacyApp`. What is the most likely cause of this continuous reinstall loop?",
        options: [
          "The detection rule does not specify to search the 32-bit registry on 64-bit clients, so it is looking in the wrong location.",
          "The Intune Management Extension service does not have permissions to read the registry.",
          "The app is missing a digital signature.",
          "Intune Win32 apps do not support Registry detection rules."
        ],
        answer: "The detection rule does not specify to search the 32-bit registry on 64-bit clients, so it is looking in the wrong location.",
        explanation: "When a 32-bit application installs on a 64-bit OS, Windows redirects its registry keys to the `WOW6432Node` (e.g., `HKEY_LOCAL_MACHINE\\Software\\WOW6432Node\\LegacyApp`).",
        moreDetails: "In Intune, if you set the 'Associated with a 32-bit app on 64-bit clients' setting to 'Yes' in the detection rule, Intune knows to look in the WOW6432Node. If set to 'No', it looks in the native 64-bit path, fails to find the key, assumes the app is not installed, and attempts a reinstall.",
        otherOptions: "IME runs as SYSTEM and has full registry read access. Digital signatures aren't required for Intune deployment (just execution policies). Intune fully supports registry detection.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/apps-win32-add#step-4-detection-rules"
      },
      {
        id: 4002,
        type: "hard",
        question: "You deploy a Mobile Application Management (MAM) App Protection Policy to iOS devices to secure corporate data in Microsoft Outlook. The policy is targeted to unmanaged devices (BYOD). Users report they can copy text from a corporate email in Outlook and paste it into the native iOS Notes app. What setting in the App Protection Policy needs to be modified to prevent this?",
        options: [
          "Set 'Restrict cut, copy, and paste between other apps' to 'Policy managed apps'.",
          "Set 'Send org data to other apps' to 'All apps'.",
          "Require the device to be enrolled in Intune MDM.",
          "Enable 'Require PIN for access' in the policy."
        ],
        answer: "Set 'Restrict cut, copy, and paste between other apps' to 'Policy managed apps'.",
        explanation: "To prevent data leakage from corporate apps (like Outlook) to personal apps (like iOS Notes), the cut/copy/paste restriction must be set to 'Policy managed apps' or 'Blocked'.",
        moreDetails: "This ensures the clipboard data is encrypted and can only be pasted into other apps protected by the same MAM policy (like Microsoft Word or Teams).",
        otherOptions: "Setting 'Send org data' to 'All apps' ENABLES data leakage. You do NOT need full MDM enrollment for MAM policies to work (MAM-WE). A PIN protects the app launch, not the clipboard.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/app-protection-policy-settings-ios"
      },
      {
        id: 4003,
        type: "hard",
        question: "You want to deploy a complex engineering application using Intune. The vendor provides an MSI, an MST (transform file), and several licensing DLLs. You package them all into a single .intunewin file. When configuring the 'Install command' in Intune, how should you reference the MST file to ensure it applies during installation?",
        options: [
          "msiexec /i \"app.msi\" TRANSFORMS=\"app.mst\" /qn",
          "setup.exe /apply app.mst",
          "msiexec /a \"app.msi\" /t \"app.mst\"",
          "Intune automatically applies the MST if it is in the same folder as the MSI."
        ],
        answer: "msiexec /i \"app.msi\" TRANSFORMS=\"app.mst\" /qn",
        explanation: "When deploying an MSI with an MST (transform) file via Intune Win32, you must explicitly declare the transform file in the install command using the standard Windows Installer property `TRANSFORMS=\"filename.mst\"`.",
        moreDetails: "Because all files in the .intunewin package are extracted to the same temporary folder on the client, you only need to provide the relative filename, not a full path. The `/qn` switch ensures it installs silently.",
        otherOptions: "setup.exe syntax depends on the vendor, not MSI standards. `/a` is administrative install, not standard deployment. Intune does NOT automatically apply MSTs.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/apps-win32-add"
      },
      {
        id: 4004,
        type: "hard",
        question: "Your company has thousands of devices spread across multiple branch offices connected by slow WAN links. You deploy a 5GB Autodesk application via Intune Win32 apps. To prevent saturating the WAN links, you rely on Delivery Optimization (DO). However, devices in Branch A are downloading the app directly from Microsoft CDNs instead of peering with each other. What Intune policy must be configured correctly to force peering within the branch?",
        options: [
          "A Device Configuration profile defining the 'Delivery Optimization Group ID' or restricting peering to 'Same NAT/DHCP Option'.",
          "An App Configuration policy setting the download mode to BITS.",
          "A Conditional Access policy requiring location-based compliance.",
          "A Windows Update for Business ring setting."
        ],
        answer: "A Device Configuration profile defining the 'Delivery Optimization Group ID' or restricting peering to 'Same NAT/DHCP Option'.",
        explanation: "By default, DO peering might be restricted or unaware of the branch boundaries. To force devices in the same branch to peer with each other, administrators deploy a Device Configuration Profile configuring DO settings.",
        moreDetails: "Common strategies include setting the Download Mode to 'LAN' (peering behind the same public IP/NAT) or using a custom 'Group ID' (derived from AD sites or DHCP options) so the DO cloud service knows exactly which devices are localized together.",
        otherOptions: "BITS is an older technology; DO replaces it for Intune apps. Conditional Access and WUfB do not control Intune Win32 app P2P peering.",
        link: "https://learn.microsoft.com/en-us/windows/deployment/do/waas-delivery-optimization-reference"
      },
      {
        id: 4005,
        type: "hard",
        question: "You deploy an App Configuration Policy targeted to 'Managed devices' for Microsoft Edge on iOS. The policy disables the ability to save passwords. A user enrolls their iPad in Intune (MDM), downloads Edge from the App Store, and signs in with their corporate Entra ID account. They find they can still save passwords. Why did the App Configuration Policy fail to apply?",
        options: [
          "The policy must be targeted to 'Managed apps' instead of 'Managed devices' for iOS.",
          "App Configuration Policies for Edge are only supported on Android Enterprise.",
          "The user did not restart the iPad after installing Edge.",
          "The Edge app was not deployed as a 'Required' or 'Available' app from Intune; it was downloaded manually from the App Store."
        ],
        answer: "The Edge app was not deployed as a 'Required' or 'Available' app from Intune; it was downloaded manually from the App Store.",
        explanation: "For an App Configuration Policy targeted to 'Managed devices' (MDM channel) to apply on iOS, the application MUST be deployed and managed by Intune. If the user downloads it directly from the App Store, it is an 'unmanaged' app.",
        moreDetails: "Even though the device is enrolled in MDM, Intune cannot configure apps it doesn't own. The administrator must deploy Edge via Intune to force management, or use App Configuration Policies targeted to 'Managed apps' (MAM channel), which applies upon Entra ID sign-in regardless of how the app was installed.",
        otherOptions: "Policies can be targeted to either, but the MDM channel requires the app to be managed. Edge configuration is supported on iOS. Restarting doesn't fix unmanaged app states.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/app-configuration-policies-use-ios"
      },
      {
        id: 4006,
        type: "hard",
        question: "You deploy a new application using the 'Microsoft Store app (new)' repository type in Intune (leveraging Windows Package Manager / winget). The application is assigned as 'Required' to a Device Group. After the sync, administrators can see the app, but standard users log in and cannot find the application. What configuration mistake was made?",
        options: [
          "The app was configured with 'Install behavior' set to 'User' instead of 'System', meaning it only installed for the primary user who was logged in during provisioning.",
          "Standard users are blocked from running winget.exe via AppLocker.",
          "Microsoft Store apps require an Entra ID Premium P2 license for standard users.",
          "The device must be rebooted twice for Store apps to appear for standard users."
        ],
        answer: "The app was configured with 'Install behavior' set to 'User' instead of 'System', meaning it only installed for the primary user who was logged in during provisioning.",
        explanation: "When deploying an app, 'Install behavior' dictates the context. If set to 'User', it installs into the `AppData` profile of the currently logged-in user. If assigned to a device group, it installs for whoever happens to be logged in at that moment (often an admin during staging). Subsequent standard users won't see it.",
        moreDetails: "To ensure an application is available to ALL users who log into a specific machine, the 'Install behavior' must be set to 'System' (installing to Program Files).",
        otherOptions: "Winget execution context is handled by the Intune agent (SYSTEM), not user AppLocker rules. P2 licensing is irrelevant. Reboots don't copy user-profile apps to other users.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/apps-windows-10-app-deploy#install-context"
      },
      {
        id: 4007,
        type: "hard",
        question: "You configure an Intune Win32 App deployment for 'App B'. In the 'Dependencies' section, you specify that 'App A' must be installed first. Furthermore, you set 'Automatically install' to 'Yes' for App A. What happens if App A fails to install during the deployment process?",
        options: [
          "App B attempts to install anyway, ignoring the dependency failure.",
          "Intune continuously retries installing App A in an infinite loop.",
          "App B is not evaluated and its installation is skipped. Intune reports the status as 'Not installed' or 'Failed' due to unmet dependencies.",
          "The device initiates a forced reboot to clear the installation cache."
        ],
        answer: "App B is not evaluated and its installation is skipped. Intune reports the status as 'Not installed' or 'Failed' due to unmet dependencies.",
        explanation: "Intune enforces dependency chains strictly. If a prerequisite application (App A) fails its installation or detection phase, the dependent application (App B) will not even attempt to install.",
        moreDetails: "This prevents compound errors or corrupted installations. The Intune Management Extension will log the dependency failure and halt the chain.",
        otherOptions: "It does not ignore dependencies (that defeats the purpose). It does not infinitely loop (it respects standard retry intervals). Reboots are not triggered by dependency failures.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/apps-win32-add#step-5-dependencies"
      },
      {
        id: 4008,
        type: "hard",
        question: "Your organization uses Apple Business Manager (ABM) synchronized with Intune to deploy iOS Volume Purchase Program (VPP) apps. The VPP location token expires today. What is the immediate impact on existing iOS devices that already have VPP apps installed?",
        options: [
          "The installed VPP apps immediately crash and are uninstalled from the devices.",
          "The installed VPP apps continue to function normally, but you cannot deploy new VPP apps or push updates to existing apps until the token is renewed.",
          "Users will be prompted to enter their personal Apple ID passwords to keep using the apps.",
          "The devices will unenroll from Intune MDM."
        ],
        answer: "The installed VPP apps continue to function normally, but you cannot deploy new VPP apps or push updates to existing apps until the token is renewed.",
        explanation: "When a VPP token expires, the trust between Intune and Apple Business Manager is severed for administrative actions. Existing app licenses assigned to devices remain valid on the device itself, so users experience no interruption.",
        moreDetails: "However, Intune cannot communicate with Apple to assign licenses to new users, push app updates, or sync the app catalog. Administrators must log into ABM, download a new token, and upload it to Intune to restore management.",
        otherOptions: "Apps do not uninstall or crash. VPP apps are device-licensed, so personal Apple IDs are not involved. Token expiration does not unenroll devices.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/vpp-apps-ios#renew-a-vpp-token"
      },
      {
        id: 4009,
        type: "hard",
        question: "You have a fleet of Android Enterprise Fully Managed devices. Your internal development team provides you with a custom, highly confidential Line-of-Business (LOB) .APK file. What is the most secure and Microsoft-recommended method to deploy this app to these devices via Intune?",
        options: [
          "Host the .APK on a public web server and send the URL to users via email.",
          "Upload the .APK directly to the Intune portal as an 'Android line-of-business app'.",
          "Publish the app privately via the Managed Google Play iframe within the Intune console.",
          "Enable 'Install apps from unknown sources' via an Intune restriction policy and manually transfer the file via USB."
        ],
        answer: "Publish the app privately via the Managed Google Play iframe within the Intune console.",
        explanation: "For Android Enterprise devices, the most secure and recommended method is to use the Managed Google Play infrastructure to host private apps.",
        moreDetails: "By uploading the APK directly within the Intune Managed Google Play iframe, the app is hosted securely by Google, scanned for malware, and silently deployed via the Play Store infrastructure, without ever being exposed to the public Play Store or requiring 'Unknown Sources' to be enabled.",
        otherOptions: "Direct APK uploads to Intune ('Android LOB app') are a legacy approach primarily for Android Device Administrator. Web servers and USB transfers are highly insecure and unmanageable.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/apps-add-android-for-work#managed-google-play-private-lob-apps"
      },
      {
        id: 4010,
        type: "hard",
        question: "You manage 500 Co-managed Windows 11 devices at a central headquarters. You want to deploy a 10GB Intune Win32 app to all devices. To drastically reduce internet bandwidth consumption, you configure a Microsoft Connected Cache (MCC) on your on-premises Configuration Manager Distribution Point. What client setting in Intune or ConfigMgr dictates that the Intune Management Extension should pull the Win32 app from the local MCC instead of the cloud?",
        options: [
          "Deploy a Delivery Optimization Device Configuration profile in Intune that sets the 'Cache Server Hostname' to the FQDN of the Distribution Point.",
          "Enable the 'BranchCache' feature on the Distribution Point.",
          "Move the 'Client Apps' co-management workload back to Configuration Manager.",
          "Configure a VPN profile targeting the Intune Win32 app."
        ],
        answer: "Deploy a Delivery Optimization Device Configuration profile in Intune that sets the 'Cache Server Hostname' to the FQDN of the Distribution Point.",
        explanation: "Microsoft Connected Cache acts as a local proxy for Delivery Optimization (DO) cloud traffic. To instruct Intune clients to look for the MCC server first, you must deploy a DO policy specifying the MCC server's IP or FQDN in the 'Cache Server Hostname' (DOCacheHost) setting.",
        moreDetails: "When the Intune Management Extension attempts to download the Win32 app, it respects the DO policies, queries the local MCC server, and downloads the cached 10GB payload over the LAN, saving massive internet bandwidth.",
        otherOptions: "BranchCache is a different legacy technology. Moving the workload to ConfigMgr defeats the purpose of using Intune Win32 apps. VPN profiles do not optimize download routing natively.",
        link: "https://learn.microsoft.com/en-us/mem/configmgr/core/plan-design/hierarchy/microsoft-connected-cache"
      }
    ]
  }
];
