import type { TermData } from './domain-1-dataset';

export const domain3Dataset: TermData[] = [
  {
    id: 21,
    term: "Microsoft Defender for Endpoint",
    category: "Protect devices and data",
    questions: [
      {
        id: 301,
        type: "easy",
        question: "What is the primary function of <b>Microsoft Defender for Endpoint</b>?",
        options: [
          "To provide email filtering against phishing attacks.",
          "To provide an enterprise endpoint detection and response (EDR) platform to prevent, detect, investigate, and respond to advanced threats.",
          "To encrypt network traffic between clients and servers.",
          "To deploy virtual machines in Azure."
        ],
        answer: "To provide an enterprise endpoint detection and response (EDR) platform to prevent, detect, investigate, and respond to advanced threats.",
        explanation: "<b>Microsoft Defender for Endpoint</b> is a comprehensive endpoint security solution. It moves beyond traditional antivirus by using behavioral sensors, cloud security analytics, and threat intelligence to identify and mitigate complex cyberattacks post-breach.",
        moreDetails: "It is deeply integrated into Windows 10/11 and operates seamlessly with Intune for configuration and policy deployment.",
        otherOptions: "Email filtering is Defender for Office 365. Network encryption is IPsec/VPN. VM deployment is Azure Resource Manager.",
        link: "https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/microsoft-defender-endpoint"
      },
      {
        id: 302,
        type: "medium",
        question: "How do you establish the initial service-to-service connection between Microsoft Intune and Microsoft Defender for Endpoint?",
        options: [
          "By deploying a PowerShell script to all Windows devices.",
          "By enabling the 'Microsoft Defender for Endpoint' toggle within the Intune Tenant Administration > Connectors and tokens menu.",
          "By installing a physical firewall appliance.",
          "By creating a Conditional Access policy."
        ],
        answer: "By enabling the 'Microsoft Defender for Endpoint' toggle within the Intune Tenant Administration > Connectors and tokens menu.",
        explanation: "To allow Intune and Defender for Endpoint to share data (such as onboarding status and device risk scores), you must explicitly establish a service-to-service connection in the <b>Intune admin center</b> under Tenant Administration > Connectors and tokens.",
        moreDetails: "Once connected, Intune can push the onboarding packages to devices natively, and Defender can report back the threat level of the devices.",
        otherOptions: "Scripts are for onboarding clients, not connecting the cloud services. Firewalls are physical hardware. Conditional Access uses the integration but doesn't establish it.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/advanced-threat-protection-configure"
      },
      {
        id: 303,
        type: "hard",
        question: "You want to block users from accessing Microsoft 365 services if Microsoft Defender for Endpoint detects active malware on their device. How do you implement this?",
        options: [
          "Configure a compliance policy to require the device to be at or under a specific 'Machine Risk Score', and then use a Conditional Access policy to block non-compliant devices.",
          "Create a Windows Defender Firewall rule to block port 443.",
          "Send a Remote Lock command from Intune.",
          "Uninstall Microsoft 365 apps remotely."
        ],
        answer: "Configure a compliance policy to require the device to be at or under a specific 'Machine Risk Score', and then use a Conditional Access policy to block non-compliant devices.",
        explanation: "This is a classic Zero Trust scenario. Defender for Endpoint calculates a <b>Machine Risk Score</b> (Clear, Low, Medium, High). You map this score into an Intune <b>Compliance Policy</b>. Finally, an Entra ID <b>Conditional Access</b> policy blocks access if the device is marked non-compliant by Intune.",
        moreDetails: "This automated workflow ensures that a compromised device instantly loses access to corporate data without requiring manual IT intervention.",
        otherOptions: "Blocking port 443 breaks all web traffic. Remote lock and uninstalling apps do not dynamically revoke cloud access based on real-time threat telemetry.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/advanced-threat-protection-configure#create-and-assign-compliance-policy-to-set-device-risk-level"
      },
      {
        id: 304,
        type: "medium",
        question: "Which feature within Microsoft Defender for Endpoint continuously discovers missing updates, zero-day vulnerabilities, and misconfigurations on your enrolled devices?",
        options: [
          "Endpoint Detection and Response (EDR)",
          "Attack Surface Reduction (ASR)",
          "Threat and Vulnerability Management (TVM)",
          "Automated Investigation and Remediation (AIR)"
        ],
        answer: "Threat and Vulnerability Management (TVM)",
        explanation: "<b>Threat and Vulnerability Management (TVM)</b> is a built-in module of Defender for Endpoint that uses a risk-based approach to discover, prioritize, and remediate endpoint vulnerabilities and misconfigurations in real-time.",
        moreDetails: "It eliminates the need for periodic network scans by third-party tools, as the telemetry is constantly fed by the local Windows sensor to the cloud.",
        otherOptions: "EDR looks for active attacks. ASR hardens the OS. AIR automatically cleans up malware. TVM proactively finds software patching gaps.",
        link: "https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/next-gen-threat-and-vuln-mgt"
      },
      {
        id: 305,
        type: "easy",
        question: "When deploying the Microsoft Defender for Endpoint onboarding package to Windows 11 devices via Intune, what type of profile is typically used?",
        options: [
          "Wi-Fi profile",
          "Endpoint detection and response (EDR) policy under Endpoint Security",
          "Provisioning package (.ppkg)",
          "Compliance policy"
        ],
        answer: "Endpoint detection and response (EDR) policy under Endpoint Security",
        explanation: "To onboard devices into Defender for Endpoint via Intune, administrators create an <b>Endpoint detection and response (EDR) policy</b> within the Endpoint Security node.",
        moreDetails: "Because the tenant-to-tenant connection is already established, Intune automatically handles the distribution of the onboarding blob to the targeted Windows devices without requiring manual script creation.",
        otherOptions: "Wi-Fi handles networks. Provisioning packages are for offline OOBE. Compliance policies evaluate rules but don't deploy the onboarding package.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/endpoint-security-edr-profile"
      }
    ]
  },
  {
    id: 22,
    term: "Microsoft Defender Antivirus",
    category: "Protect devices and data",
    questions: [
      {
        id: 306,
        type: "easy",
        question: "What is the core difference between <b>Real-time protection</b> and a <b>Scheduled scan</b> in Microsoft Defender Antivirus?",
        options: [
          "Real-time protection scans files as they are accessed, downloaded, or executed; Scheduled scans run a deep check of the file system at a specific time.",
          "Real-time protection requires a constant internet connection; Scheduled scans work offline.",
          "Real-time protection only scans emails; Scheduled scans check hard drives.",
          "Real-time protection is for Macs; Scheduled scans are for Windows."
        ],
        answer: "Real-time protection scans files as they are accessed, downloaded, or executed; Scheduled scans run a deep check of the file system at a specific time.",
        explanation: "<b>Real-time protection</b> actively monitors the system for malicious behavior as it happens (on-access scanning). <b>Scheduled scans</b> (Quick or Full) are periodic tasks that review the disk for dormant or previously undetected malware.",
        moreDetails: "Both are required for a healthy security posture. If real-time protection is disabled, the device is immediately vulnerable to incoming threats.",
        otherOptions: "Both work offline (using local definitions). Both scan files, not just emails. Both apply to Windows.",
        link: "https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/configure-real-time-protection-microsoft-defender-antivirus"
      },
      {
        id: 307,
        type: "medium",
        question: "Which Microsoft Defender Antivirus feature allows the client to send suspicious file characteristics to Microsoft's cloud infrastructure to receive an immediate block/allow decision based on global threat intelligence?",
        options: [
          "Network Protection",
          "Cloud-delivered protection",
          "Tamper Protection",
          "Controlled Folder Access"
        ],
        answer: "Cloud-delivered protection",
        explanation: "<b>Cloud-delivered protection</b> (also known as Microsoft Advanced Protection Service or MAPS) connects the local antivirus sensor to Microsoft's massive cloud security graph.",
        moreDetails: "When a never-before-seen file executes, Defender pauses execution, queries the cloud, and if the cloud identifies it as malicious based on global heuristics, the file is blocked in milliseconds.",
        otherOptions: "Network Protection blocks bad IPs/domains. Tamper Protection stops local disablement. Controlled Folder Access stops ransomware encryption.",
        link: "https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/cloud-protection-microsoft-defender-antivirus"
      },
      {
        id: 308,
        type: "hard",
        question: "To prevent malware (or malicious local administrators) from disabling Microsoft Defender Antivirus or changing its settings via the registry or PowerShell, what feature MUST be enabled from the Microsoft 365 Defender portal or Intune?",
        options: [
          "BitLocker Drive Encryption",
          "Windows Defender Credential Guard",
          "Tamper Protection",
          "AppLocker"
        ],
        answer: "Tamper Protection",
        explanation: "<b>Tamper Protection</b> locks down Microsoft Defender Antivirus and its configuration. When enabled, malicious apps, scripts, or even local administrators cannot disable real-time protection, turn off cloud-delivered protection, or remove security intelligence updates.",
        moreDetails: "Tamper Protection relies on Windows OS-level protections (often backed by virtualization-based security) to ensure that only the centralized management plane (Intune/Defender portal) can modify AV settings.",
        otherOptions: "BitLocker encrypts disks. Credential Guard protects hashes. AppLocker controls which executables can run.",
        link: "https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/prevent-changes-to-security-settings-with-tamper-protection"
      },
      {
        id: 309,
        type: "medium",
        question: "Your developers are complaining that Microsoft Defender Antivirus is slowing down the compilation of their custom application located in 'C:\\CodeProject'. How can you resolve this in Intune without compromising device security?",
        options: [
          "Disable Real-time protection entirely.",
          "Add 'C:\\CodeProject' to the Antivirus Exclusions list in the Endpoint Security Antivirus policy.",
          "Uninstall Microsoft Defender Antivirus.",
          "Give the developers Global Administrator rights."
        ],
        answer: "Add 'C:\\CodeProject' to the Antivirus Exclusions list in the Endpoint Security Antivirus policy.",
        explanation: "An <b>Antivirus Exclusion</b> instructs Defender not to scan specific folders, files, file types, or processes.",
        moreDetails: "Exclusions are critical for maintaining performance in development, database, or specialized software environments. However, exclusions must be strictly targeted (like a specific folder) rather than broad, to avoid creating massive blind spots for malware.",
        otherOptions: "Disabling real-time protection or uninstalling AV destroys the security posture. Admin rights do not fix the AV scanning slowdown.",
        link: "https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/configure-exclusions-microsoft-defender-antivirus"
      },
      {
        id: 310,
        type: "easy",
        question: "Which feature of Microsoft Defender extends protection to the network level, preventing users and apps from accessing malicious domains, phishing sites, and command-and-control servers, regardless of the browser being used?",
        options: [
          "Network Protection",
          "Microsoft Edge SmartScreen",
          "BitLocker",
          "Windows Hello for Business"
        ],
        answer: "Network Protection",
        explanation: "<b>Network Protection</b> evaluates all outbound HTTP/HTTPS traffic from any application (not just Edge) and blocks connections to known malicious IP addresses and domains.",
        moreDetails: "While SmartScreen protects traffic within Microsoft Edge, Network Protection provides OS-level filtering, stopping a malicious PowerShell script or a third-party browser from reaching out to a threat actor's infrastructure.",
        otherOptions: "SmartScreen is browser/app specific. BitLocker is disk encryption. Windows Hello is authentication.",
        link: "https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/network-protection"
      }
    ]
  },
  {
    id: 23,
    term: "Microsoft Defender Firewall",
    category: "Protect devices and data",
    questions: [
      {
        id: 311,
        type: "easy",
        question: "The Microsoft Defender Firewall uses three distinct 'Network Profiles' to apply different rules based on the network the device is connected to. What are they?",
        options: [
          "Home, Work, and Cafe",
          "Internal, External, and DMZ",
          "Domain, Private, and Public",
          "Secure, Open, and Filtered"
        ],
        answer: "Domain, Private, and Public",
        explanation: "The firewall applies rules based on three profiles: <b>Domain</b> (connected to a network with an AD Domain Controller), <b>Private</b> (user-trusted networks like home Wi-Fi), and <b>Public</b> (untrusted networks like an airport or coffee shop).",
        moreDetails: "This allows administrators to be highly restrictive on Public networks (blocking all inbound traffic) while being more permissive on the Domain network (allowing inbound RDP or file sharing).",
        otherOptions: "The other options are informal terms, not the actual technical profile names used in Windows OS.",
        link: "https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/windows-defender-firewall/network-location-awareness"
      },
      {
        id: 312,
        type: "medium",
        question: "In a standard Microsoft Intune Firewall policy, what is the default behavior for inbound connections that do not match a specific 'Allow' rule?",
        options: [
          "Allow",
          "Block",
          "Prompt the user",
          "Route to a honeypot"
        ],
        answer: "Block",
        explanation: "By default, the Microsoft Defender Firewall is configured to <b>Block inbound connections</b> unless an explicit rule allows them.",
        moreDetails: "Conversely, the default behavior for outbound connections is 'Allow' (unless explicitly blocked). This ensures the device can reach the internet but is protected from unsolicited incoming network scans or attacks.",
        otherOptions: "Allowing all inbound traffic would be a massive security failure. Prompting the user leads to fatigue and poor choices.",
        link: "https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/windows-defender-firewall/best-practices"
      },
      {
        id: 313,
        type: "hard",
        question: "You want to deploy Intune Firewall rules to your endpoints, but you want to ensure that any local firewall rules created by end-users or older software are completely ignored by the system. Which firewall profile setting must you configure?",
        options: [
          "Enable Stealth Mode.",
          "Set 'Policy rules from group policy not merged' to True.",
          "Configure an IPsec Connection Security Rule.",
          "Disable the Public Profile."
        ],
        answer: "Set 'Policy rules from group policy not merged' to True.",
        explanation: "By configuring <b>rule merging</b> settings (specifically setting 'Merge local rules' to Block/No), Intune forces the device to rely exclusively on the firewall rules deployed from the cloud or Group Policy.",
        moreDetails: "This prevents a local administrator or a piece of software from creating a local rule that punches a hole in the firewall, maintaining strict corporate compliance.",
        otherOptions: "Stealth mode prevents the machine from responding to ping/scans. IPsec is for secure tunnels. Disabling a profile turns the firewall off for that network type.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/endpoint-security-firewall-profile-settings"
      },
      {
        id: 314,
        type: "medium",
        question: "What type of firewall rule allows you to require that traffic between two specific computers be authenticated and encrypted using IPsec before the connection is permitted?",
        options: [
          "Outbound Port Rule",
          "Inbound Application Rule",
          "Connection Security Rule",
          "Stealth Mode Rule"
        ],
        answer: "Connection Security Rule",
        explanation: "<b>Connection Security Rules</b> do not open or close ports; instead, they specify how traffic must be secured (authenticated and/or encrypted via IPsec) between two endpoints.",
        moreDetails: "For example, you can create a rule stating that any communication to the internal HR database server must be encrypted with IPsec. If it is not, the firewall drops the connection.",
        otherOptions: "Standard inbound/outbound rules dictate *if* traffic can pass. Connection security rules dictate *how* it must be protected.",
        link: "https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/windows-defender-firewall/windows-firewall-with-advanced-security"
      },
      {
        id: 315,
        type: "easy",
        question: "When configuring a firewall rule in Intune, you want to allow a specific application to communicate over the network regardless of which port it dynamically chooses. What should you specify in the rule?",
        options: [
          "Set the Protocol to 'Any'.",
          "Provide the file path to the executable (e.g., %ProgramFiles%\\App\\app.exe).",
          "Open all TCP ports from 1 to 65535.",
          "Disable the firewall entirely for that device."
        ],
        answer: "Provide the file path to the executable (e.g., %ProgramFiles%\\App\\app.exe).",
        explanation: "The Microsoft Defender Firewall is application-aware. Instead of opening broad port ranges, administrators can specify the <b>file path of the executable</b>.",
        moreDetails: "The firewall will then dynamically allow network traffic originating from or destined to that specific application, significantly reducing the attack surface compared to leaving a port permanently open.",
        otherOptions: "Setting protocol to 'Any' or opening all ports removes all security. Disabling the firewall is never recommended.",
        link: "https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/windows-defender-firewall/best-practices#create-rules"
      }
    ]
  },
  {
    id: 24,
    term: "BitLocker Drive Encryption",
    category: "Protect devices and data",
    questions: [
      {
        id: 316,
        type: "easy",
        question: "What is the primary difference between <b>BitLocker</b> and the <b>Encrypting File System (EFS)</b> in Windows?",
        options: [
          "BitLocker is for Macs; EFS is for Windows.",
          "BitLocker encrypts the entire volume/drive, while EFS encrypts individual files or folders based on user accounts.",
          "BitLocker only works on USB drives; EFS only works on the C: drive.",
          "BitLocker is a third-party tool; EFS is built-in."
        ],
        answer: "BitLocker encrypts the entire volume/drive, while EFS encrypts individual files or folders based on user accounts.",
        explanation: "<b>BitLocker Drive Encryption</b> encrypts the entire OS volume or data drive, protecting data at rest from offline attacks (e.g., someone stealing the physical laptop and pulling the hard drive). <b>EFS</b> encrypts files per user, so User A cannot read User B's files on the same running OS.",
        moreDetails: "BitLocker relies on hardware (TPM) for key protection, whereas EFS relies on the user's Windows login certificate.",
        otherOptions: "Both are Windows native tools. BitLocker works on OS drives, fixed drives, and USBs (BitLocker To Go).",
        link: "https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/"
      },
      {
        id: 317,
        type: "medium",
        question: "You want to configure BitLocker via Intune so that it encrypts the OS drive completely silently in the background, without showing any prompts to the end-user. What is a strict hardware requirement for this to succeed?",
        options: [
          "The device must have a discrete GPU.",
          "The device must have a Trusted Platform Module (TPM) chip enabled.",
          "The user must have local administrator rights.",
          "The device must be connected via Ethernet."
        ],
        answer: "The device must have a Trusted Platform Module (TPM) chip enabled.",
        explanation: "<b>Silent encryption</b> requires a <b>TPM</b> chip (usually TPM 1.2 or 2.0). The TPM securely stores the encryption keys and releases them to the OS during boot only if the boot sequence hasn't been tampered with.",
        moreDetails: "If a TPM is missing or disabled, BitLocker requires a user-entered password or a USB startup key, which breaks the silent, zero-touch deployment requirement.",
        otherOptions: "A GPU or Ethernet is irrelevant. Intune policy can trigger silent encryption without the end user needing local admin rights.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/encrypt-devices#silently-enable-bitlocker-on-devices"
      },
      {
        id: 318,
        type: "hard",
        question: "If a user enters the wrong PIN at the BitLocker pre-boot screen too many times, the device goes into Recovery Mode. Where does Intune natively back up the BitLocker Recovery Key so the user or helpdesk can unlock the device?",
        options: [
          "In the user's personal OneDrive.",
          "On a hidden partition on the hard drive.",
          "In Microsoft Entra ID (Azure AD), attached to the device object.",
          "It is sent to the user via SMS."
        ],
        answer: "In Microsoft Entra ID (Azure AD), attached to the device object.",
        explanation: "When configured correctly via Intune, BitLocker automatically escrows the 48-digit <b>Recovery Key</b> to <b>Microsoft Entra ID</b>. It is stored on the specific Device object.",
        moreDetails: "Administrators can retrieve it from the Intune/Entra portals. Additionally, users can retrieve their own keys by visiting `myaccount.microsoft.com` without calling the helpdesk.",
        otherOptions: "Storing it on the same drive defeats the purpose. Storing it in consumer OneDrive or SMS is not the native enterprise MDM approach.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/encrypt-devices#manage-bitlocker-recovery-keys"
      },
      {
        id: 319,
        type: "medium",
        question: "What is the security advantage of requiring a 'TPM + PIN' for BitLocker compared to using 'TPM only'?",
        options: [
          "It encrypts the drive twice.",
          "It protects against DMA (Direct Memory Access) and cold-boot attacks by requiring user authentication before the OS even starts to load.",
          "It allows the user to bypass the Windows login screen.",
          "It makes the hard drive spin faster."
        ],
        answer: "It protects against DMA (Direct Memory Access) and cold-boot attacks by requiring user authentication before the OS even starts to load.",
        explanation: "<b>TPM only</b> unlocks the drive automatically as long as the hardware hasn't changed. However, if the laptop is stolen while powered on or asleep, attackers can use advanced hardware attacks against the RAM or exposed ports to extract the key.",
        moreDetails: "<b>TPM + PIN</b> requires a pre-boot authentication step. Even if the attacker steals the laptop, the TPM will not release the decryption key to the OS until the correct PIN is entered.",
        otherOptions: "It does not double encrypt, bypass Windows login, or affect disk speed.",
        link: "https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/bitlocker-countermeasures"
      },
      {
        id: 320,
        type: "easy",
        question: "Before performing a BIOS/UEFI firmware update on a Windows laptop, what action should you take regarding BitLocker to prevent the device from entering a recovery state upon reboot?",
        options: [
          "Decrypt the entire drive.",
          "Format the drive.",
          "Suspend BitLocker protection.",
          "Change the BitLocker PIN."
        ],
        answer: "Suspend BitLocker protection.",
        explanation: "Firmware updates change the hardware footprint of the motherboard. If BitLocker is active, the TPM will notice this change, assume the drive was moved to a hacked machine, and trigger Recovery Mode.",
        moreDetails: "To prevent this, you should <b>Suspend</b> BitLocker. Suspending does not decrypt the data; it simply puts the encryption key in the clear temporarily for one reboot, allowing the hardware change to be validated and securely sealed by the TPM again.",
        otherOptions: "Decrypting takes hours and is unnecessary. Formatting destroys data. Changing the PIN does not stop the TPM hardware check.",
        link: "https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/bitlocker-upgrading-faq"
      }
    ]
  },
  {
    id: 25,
    term: "Attack Surface Reduction (ASR)",
    category: "Protect devices and data",
    questions: [
      {
        id: 321,
        type: "easy",
        question: "What is the main purpose of <b>Attack Surface Reduction (ASR) rules</b> in Microsoft Defender?",
        options: [
          "To shrink the physical size of the Windows OS on the hard drive.",
          "To block specific software behaviors that are frequently abused by malware and attackers, such as Word documents launching PowerShell scripts.",
          "To reduce the number of applications a user can pin to the taskbar.",
          "To turn off the computer's Wi-Fi adapter automatically."
        ],
        answer: "To block specific software behaviors that are frequently abused by malware and attackers, such as Word documents launching PowerShell scripts.",
        explanation: "<b>ASR rules</b> are preventative security controls. They target typical attacker techniques (like macros spawning child processes, executing obfuscated scripts, or stealing credentials from LSASS) and block the behavior outright.",
        moreDetails: "ASR focuses on restricting risky application behavior rather than relying on signature-based virus scanning.",
        otherOptions: "ASR is not about disk space, UI customization, or disabling hardware adapters.",
        link: "https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/attack-surface-reduction"
      },
      {
        id: 322,
        type: "medium",
        question: "Before fully enforcing a new ASR rule (like 'Block executable files from running unless they meet a prevalence, age, or trusted list criterion'), what mode should administrators apply the rule in first?",
        options: [
          "Block mode",
          "Warn mode",
          "Audit mode",
          "Disabled mode"
        ],
        answer: "Audit mode",
        explanation: "<b>Audit mode</b> enables the ASR rule to run silently in the background. It evaluates behaviors and logs events to the Microsoft Defender portal whenever it *would* have blocked an action.",
        moreDetails: "This allows administrators to review the telemetry and ensure the rule won't accidentally block legitimate line-of-business applications before switching the rule to 'Block mode'.",
        otherOptions: "Block mode immediately stops the action. Warn mode prompts the user. Disabled turns it off entirely.",
        link: "https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/evaluate-attack-surface-reduction"
      },
      {
        id: 323,
        type: "hard",
        question: "You have an ASR rule configured to 'Block all Office applications from creating child processes'. However, your finance team uses a legitimate Excel macro that launches a custom calculator.exe. How do you allow this specific action?",
        options: [
          "Turn off the ASR rule for the entire organization.",
          "Configure an ASR exclusion using the file path of the custom calculator.exe.",
          "Add the user to the local Administrators group.",
          "Run Excel as an administrator."
        ],
        answer: "Configure an ASR exclusion using the file path of the custom calculator.exe.",
        explanation: "ASR supports <b>exclusions</b> based on file paths or folders. By excluding `C:\\Program Files\\CustomApp\\calculator.exe` from the ASR rules, Intune tells Defender to permit the action for that specific file while keeping the strict block in place for everything else.",
        moreDetails: "Exclusions should be as precise as possible to maintain the integrity of the attack surface reduction.",
        otherOptions: "Turning it off globally degrades security. Local admin rights do not bypass ASR blocks.",
        link: "https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/attack-surface-reduction-rules-deployment-test#exclude-files-and-folders"
      },
      {
        id: 324,
        type: "medium",
        question: "Which component of Attack Surface Reduction is designed to stop ransomware from encrypting user data by restricting which applications can modify files in key locations like the Documents and Pictures folders?",
        options: [
          "Controlled Folder Access",
          "Device Control",
          "Exploit Protection",
          "Web Protection"
        ],
        answer: "Controlled Folder Access",
        explanation: "<b>Controlled Folder Access</b> specifically monitors apps attempting to modify files in protected folders. Only applications explicitly trusted by Microsoft or manually added by an administrator are allowed to change files in those directories.",
        moreDetails: "If unauthorized malware or ransomware attempts to encrypt the data, Controlled Folder Access blocks the write action and alerts the user.",
        otherOptions: "Device Control handles USBs. Exploit Protection mitigates memory corruption bugs. Web Protection blocks malicious sites.",
        link: "https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/controlled-folders"
      },
      {
        id: 325,
        type: "easy",
        question: "An organization wants to prevent employees from plugging in unapproved USB flash drives to steal corporate data or introduce malware. Which ASR capability handles this?",
        options: [
          "Network Protection",
          "Device Control",
          "AppLocker",
          "SmartScreen"
        ],
        answer: "Device Control",
        explanation: "<b>Device Control</b> is a feature in the ASR suite that allows administrators to allow, block, or set read-only permissions on removable storage media (like USB drives, SD cards, and external hard drives).",
        moreDetails: "Policies can be incredibly granular, such as blocking all USBs except those with a specific hardware ID approved by the company.",
        otherOptions: "Network Protection is for web traffic. AppLocker is for executables. SmartScreen evaluates file downloads/sites.",
        link: "https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/device-control-removable-storage-access-control"
      }
    ]
  },
  {
    id: 26,
    term: "Endpoint Security - Account Protection",
    category: "Protect devices and data",
    questions: [
      {
        id: 326,
        type: "easy",
        question: "What is the primary benefit of <b>Windows Hello for Business</b> compared to a traditional password?",
        options: [
          "It types the password for the user automatically.",
          "It replaces the reusable password with strong, device-bound, asymmetric cryptographic keys (backed by biometrics or a PIN) that never leave the device.",
          "It makes the password completely invisible on the screen.",
          "It synchronizes the password to Google Chrome."
        ],
        answer: "It replaces the reusable password with strong, device-bound, asymmetric cryptographic keys (backed by biometrics or a PIN) that never leave the device.",
        explanation: "<b>Windows Hello for Business</b> is a passwordless strategy. Instead of sending a password over the network (which can be intercepted or phished), the device generates a cryptographic keypair secured in the hardware TPM.",
        moreDetails: "The biometric (face/fingerprint) or PIN simply unlocks the local TPM to sign the authentication request. Therefore, stealing the PIN is useless unless the attacker also steals the physical laptop.",
        otherOptions: "It doesn't auto-type or sync passwords; it fundamentally replaces the underlying authentication mechanism.",
        link: "https://learn.microsoft.com/en-us/windows/security/identity-protection/hello-for-business/"
      },
      {
        id: 327,
        type: "medium",
        question: "Which Windows security feature uses Virtualization-Based Security (VBS) to isolate and protect NTLM password hashes and Kerberos Ticket Granting Tickets (TGTs) from memory-scraping malware like Mimikatz?",
        options: [
          "Microsoft Defender Antivirus",
          "BitLocker",
          "Windows Defender Credential Guard",
          "Application Guard"
        ],
        answer: "Windows Defender Credential Guard",
        explanation: "<b>Credential Guard</b> uses Hyper-V virtualization to create an isolated, secure container within the OS memory. It places the Local Security Authority (LSA)—which holds hashes and tickets—inside this protected enclave.",
        moreDetails: "This prevents Pass-the-Hash and Pass-the-Ticket attacks. Even if a computer is infected with malware running as a local administrator, it cannot read the secrets hidden inside the VBS container.",
        otherOptions: "Antivirus scans files. BitLocker encrypts disks. Application Guard isolates web browsers.",
        link: "https://learn.microsoft.com/en-us/windows/security/identity-protection/credential-guard/"
      },
      {
        id: 328,
        type: "hard",
        question: "To successfully enable Windows Defender Credential Guard, the endpoint's hardware must meet specific requirements. Which of the following is a mandatory prerequisite?",
        options: [
          "A minimum of 32GB RAM.",
          "A wired network connection.",
          "UEFI firmware version 2.3.1.c or higher with Secure Boot enabled, and CPU virtualization extensions (Intel VT-x/AMD-V).",
          "A dedicated graphics card."
        ],
        answer: "UEFI firmware version 2.3.1.c or higher with Secure Boot enabled, and CPU virtualization extensions (Intel VT-x/AMD-V).",
        explanation: "Because Credential Guard relies on Virtualization-Based Security (VBS), the CPU must support <b>hardware virtualization</b>. Furthermore, to ensure the hypervisor hasn't been compromised by a bootkit, the system must boot securely using <b>UEFI and Secure Boot</b>.",
        moreDetails: "Without Secure Boot and a TPM, the secrets inside the enclave cannot be cryptographically sealed to a trusted state.",
        otherOptions: "RAM size, network type, and GPUs are not architectural prerequisites for VBS/Credential Guard.",
        link: "https://learn.microsoft.com/en-us/windows/security/identity-protection/credential-guard/credential-guard-requirements"
      },
      {
        id: 329,
        type: "medium",
        question: "How do <b>FIDO2 Security Keys</b> integrate with Account Protection on Windows devices?",
        options: [
          "They physically block the USB ports.",
          "They provide a hardware-backed, phishing-resistant, passwordless authentication method allowing users to log into Entra ID joined Windows devices.",
          "They are used exclusively to store BitLocker recovery keys.",
          "They act as local firewall appliances."
        ],
        answer: "They provide a hardware-backed, phishing-resistant, passwordless authentication method allowing users to log into Entra ID joined Windows devices.",
        explanation: "<b>FIDO2</b> is an open standard for passwordless authentication. Users can plug in a FIDO2 USB/NFC key (like a YubiKey), tap it, and securely log into their Windows 10/11 device and Entra ID without ever typing a password.",
        moreDetails: "This is currently considered the strongest defense against phishing attacks, as the authentication ceremony is bound to the specific hardware token and the specific website/service being accessed.",
        otherOptions: "They are identity tokens, not physical blockers, BitLocker drives, or firewalls.",
        link: "https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-passwordless"
      },
      {
        id: 330,
        type: "easy",
        question: "When configuring Account Protection in Intune, you require a PIN for Windows Hello for Business. Why does Microsoft recommend a PIN over a complex password for local device login?",
        options: [
          "A PIN is less secure and easier for helpdesk to guess.",
          "A PIN is tied directly to the specific physical device; if stolen, it cannot be used to log into other corporate systems remotely.",
          "A PIN is processed faster by the CPU.",
          "A PIN doesn't expire."
        ],
        answer: "A PIN is tied directly to the specific physical device; if stolen, it cannot be used to log into other corporate systems remotely.",
        explanation: "A password is a shared secret; if stolen via a keylogger or phishing, it can be used from anywhere in the world. A <b>Windows Hello PIN</b> is local. It only unlocks the cryptographic key stored in the specific TPM of that physical laptop.",
        moreDetails: "Therefore, an attacker would need both your physical laptop AND your PIN to compromise the account, significantly raising the barrier to entry.",
        otherOptions: "A PIN is actually more secure in this context. Speed and expiration are not the primary architectural reasons.",
        link: "https://learn.microsoft.com/en-us/windows/security/identity-protection/hello-for-business/hello-why-pin-is-better-than-password"
      }
    ]
  },
  {
    id: 27,
    term: "Windows Local Administrator Password Solution (LAPS)",
    category: "Protect devices and data",
    questions: [
      {
        id: 331,
        type: "easy",
        question: "What specific security threat does the <b>Windows Local Administrator Password Solution (LAPS)</b> primarily mitigate?",
        options: [
          "Phishing emails targeting the CEO.",
          "Lateral movement and pass-the-hash attacks caused by all endpoints sharing the exact same local administrator password.",
          "Ransomware encrypting the file server.",
          "Users installing unwanted browser extensions."
        ],
        answer: "Lateral movement and pass-the-hash attacks caused by all endpoints sharing the exact same local administrator password.",
        explanation: "Historically, IT deployed the same local administrator password to all PCs. If an attacker compromised one PC, they could extract the password hash and use it to compromise every other PC on the network (lateral movement).",
        moreDetails: "<b>Windows LAPS</b> solves this by automatically generating a unique, complex, and regularly rotated password for the built-in local administrator account on every single device.",
        otherOptions: "LAPS protects the local admin identity, not email, network shares, or browsers.",
        link: "https://learn.microsoft.com/en-us/windows-server/identity/laps/laps-overview"
      },
      {
        id: 332,
        type: "medium",
        question: "For a cloud-native, Entra ID-joined device managed by Intune, where does Windows LAPS securely store the rotated local administrator password?",
        options: [
          "In a text file on the C: drive.",
          "In on-premises Active Directory.",
          "In Microsoft Entra ID (Azure AD), attached to the device object.",
          "In the Intune Company Portal app."
        ],
        answer: "In Microsoft Entra ID (Azure AD), attached to the device object.",
        explanation: "With the modern iteration of Windows LAPS natively built into Windows 10/11, passwords for cloud-joined devices are backed up securely to <b>Microsoft Entra ID</b>.",
        moreDetails: "Authorized IT administrators (with the correct RBAC permissions) can retrieve the current local admin password for a specific device directly from the Intune or Entra ID portals.",
        otherOptions: "Local text files are completely insecure. On-premises AD is used for hybrid/on-prem devices. The Company Portal is for end-users, not IT password vaulting.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/windows-laps-overview"
      },
      {
        id: 333,
        type: "hard",
        question: "In Intune's Windows LAPS policy, what does the 'Post-authentication action' setting do?",
        options: [
          "It forces the user to provide a fingerprint after typing the password.",
          "It defines what the system should do (e.g., reset the password and log off the managed account) after a set grace period following the usage of the LAPS password.",
          "It emails the IT director whenever the password is used.",
          "It automatically encrypts the drive."
        ],
        answer: "It defines what the system should do (e.g., reset the password and log off the managed account) after a set grace period following the usage of the LAPS password.",
        explanation: "To ensure the local admin account isn't left exposed after IT finishes troubleshooting, the <b>Post-authentication action</b> dictates a cleanup process.",
        moreDetails: "For example, you can configure it so that 24 hours after the LAPS password is used to authenticate, the OS automatically forces the account to log off and immediately rotates the password to a new value.",
        otherOptions: "It dictates automated security hygiene post-usage, not biometric prompts, emails, or disk encryption.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/windows-laps-policy-settings"
      },
      {
        id: 334,
        type: "medium",
        question: "How do you deploy a Windows LAPS configuration to devices using Microsoft Intune?",
        options: [
          "By deploying a custom PowerShell script that generates random passwords.",
          "By creating a Windows LAPS policy in the Endpoint Security > Account protection node.",
          "By installing a third-party MSI agent.",
          "By configuring an App Protection Policy."
        ],
        answer: "By creating a Windows LAPS policy in the Endpoint Security > Account protection node.",
        explanation: "Windows LAPS is natively integrated into Intune and Windows. Administrators simply create a policy under <b>Endpoint Security > Account protection > Local admin password solution (Windows LAPS)</b>.",
        moreDetails: "This policy configures the password length, complexity, rotation schedule (e.g., every 30 days), and the backup directory (Entra ID or Local AD). No custom scripts or third-party agents are required.",
        otherOptions: "Scripts and agents are obsolete methods. App protection is for MAM data isolation.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/windows-laps-create-policy"
      },
      {
        id: 335,
        type: "easy",
        question: "When creating a Windows LAPS policy, you must specify the 'Administrator account name'. What happens if you specify the name 'Administrator' but the built-in account was previously renamed by a different policy?",
        options: [
          "LAPS automatically creates a second account.",
          "LAPS manages the built-in account using its well-known SID, automatically identifying it regardless of its current localized name.",
          "LAPS fails to apply and the device crashes.",
          "LAPS changes the name back to 'Administrator'."
        ],
        answer: "LAPS manages the built-in account using its well-known SID, automatically identifying it regardless of its current localized name.",
        explanation: "Windows LAPS is smart enough to target the built-in administrator account by its <b>well-known Security Identifier (SID)</b> (which ends in -500).",
        moreDetails: "Even if an organization has renamed the built-in account to 'LocalAdmin' or 'ITSupport' for obfuscation purposes, configuring LAPS to manage the built-in account ensures it targets the correct identity based on the SID.",
        otherOptions: "It does not fail, crash, or create duplicates when managing the built-in SID.",
        link: "https://learn.microsoft.com/en-us/windows-server/identity/laps/laps-concepts#managing-the-built-in-administrator-account"
      }
    ]
  },
  {
    id: 28,
    term: "Security Baselines in Intune",
    category: "Protect devices and data",
    questions: [
      {
        id: 336,
        type: "easy",
        question: "What is an Intune <b>Security Baseline</b>?",
        options: [
          "A physical hardware boundary for network security.",
          "A group of pre-configured Windows settings and values that represent Microsoft's recommended security posture.",
          "A licensing tier for Microsoft 365.",
          "A backup of the device's current configuration."
        ],
        answer: "A group of pre-configured Windows settings and values that represent Microsoft's recommended security posture.",
        explanation: "<b>Security Baselines</b> are pre-packaged templates containing dozens of security-related settings (like blocking auto-play, enforcing password length, enabling firewall).",
        moreDetails: "Instead of an administrator researching and configuring every single security setting manually, they can deploy a baseline to instantly bring devices up to a highly secure standard curated by Microsoft security experts.",
        otherOptions: "They are policy templates, not hardware, licenses, or system backups.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/security-baselines"
      },
      {
        id: 337,
        type: "medium",
        question: "Are Intune Security Baselines strictly read-only, or can administrators modify the settings before deployment?",
        options: [
          "They are strictly read-only and cannot be altered.",
          "Administrators can customize the baseline by changing the value of individual settings to match organizational needs before deploying.",
          "They can only be modified using PowerShell.",
          "They can be modified, but doing so voids Microsoft support."
        ],
        answer: "Administrators can customize the baseline by changing the value of individual settings to match organizational needs before deploying.",
        explanation: "While the baseline provides Microsoft's recommended defaults, administrators have full flexibility to <b>customize</b> the profile.",
        moreDetails: "For example, if the baseline recommends a screen lock timeout of 5 minutes, but HR requires a 15-minute timeout, the IT admin can change that specific dropdown within the baseline profile before assigning it.",
        otherOptions: "They are heavily customizable via the Intune UI. Altering them does not void support.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/security-baselines-configure"
      },
      {
        id: 338,
        type: "hard",
        question: "A device is targeted by both the 'MDM Security Baseline' (which disables the camera) and a custom 'Device Configuration Profile' (which enables the camera). What is the result on the endpoint?",
        options: [
          "The Security Baseline always wins because it is a security policy.",
          "The Custom profile always wins.",
          "A Conflict is generated in Intune, and the setting is not enforced until the administrator resolves the overlap.",
          "The device blue screens."
        ],
        answer: "A Conflict is generated in Intune, and the setting is not enforced until the administrator resolves the overlap.",
        explanation: "In Intune, Security Baselines are technically just collections of configuration settings. If a baseline and a custom profile target the same setting with conflicting values on the same device, it creates a <b>Conflict</b>.",
        moreDetails: "Intune does not have an automatic precedence hierarchy between baselines and custom profiles. The administrator must locate the conflict and modify one of the profiles to align them.",
        otherOptions: "Baselines do not inherently override custom profiles. Conflict states prevent either from applying.",
        link: "https://learn.microsoft.com/en-us/mem/intune/configuration/device-profile-troubleshoot#conflicts-and-resolutions"
      },
      {
        id: 339,
        type: "medium",
        question: "Microsoft releases a new version of the Windows 10/11 Security Baseline. What happens to your existing baseline profiles?",
        options: [
          "They are automatically upgraded and pushed to users without warning.",
          "They are immediately deleted.",
          "Nothing. Existing profiles remain on the old version until an administrator manually selects them and clicks 'Change Version' to upgrade them.",
          "The devices are marked non-compliant."
        ],
        answer: "Nothing. Existing profiles remain on the old version until an administrator manually selects them and clicks 'Change Version' to upgrade them.",
        explanation: "Intune supports <b>versioning</b> for Security Baselines. When Microsoft updates a baseline with new settings, existing assigned baselines are NOT automatically changed. This prevents unexpected disruptions to users.",
        moreDetails: "Administrators must review the changes between versions and manually initiate an upgrade process within the console, mapping old settings to the new baseline.",
        otherOptions: "Automatic upgrades of security policies would cause massive operational risks. They are not deleted or marked non-compliant automatically.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/security-baselines-configure#change-the-baseline-version-for-a-profile"
      },
      {
        id: 340,
        type: "easy",
        question: "Intune offers multiple different Security Baselines out of the box. Which of the following is an example of a specific baseline provided by Microsoft?",
        options: [
          "Microsoft Solitaire Baseline",
          "Microsoft Defender for Endpoint Baseline",
          "Azure Virtual Desktop GPU Baseline",
          "Hyper-V Network Baseline"
        ],
        answer: "Microsoft Defender for Endpoint Baseline",
        explanation: "Intune provides several distinct baselines, including the general 'Windows 10/11 Security Baseline', the 'Microsoft Edge Baseline', and the <b>'Microsoft Defender for Endpoint Baseline'</b>.",
        moreDetails: "The Defender baseline specifically configures the advanced EDR, ASR, and Next-Gen protection settings required to fully optimize the Defender sensor on the endpoint.",
        otherOptions: "The other options do not exist as built-in Intune security baselines.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/security-baselines"
      }
    ]
  },
  {
    id: 29,
    term: "Microsoft Defender SmartScreen & Application Guard",
    category: "Protect devices and data",
    questions: [
      {
        id: 341,
        type: "easy",
        question: "What is the primary function of <b>Microsoft Defender SmartScreen</b>?",
        options: [
          "To adjust the brightness of the monitor based on ambient light.",
          "To check visited websites and downloaded files against a dynamic, cloud-based list of reported phishing sites and malicious software, blocking access if a match is found.",
          "To prevent users from taking screenshots of corporate data.",
          "To project the screen to a wireless display."
        ],
        answer: "To check visited websites and downloaded files against a dynamic, cloud-based list of reported phishing sites and malicious software, blocking access if a match is found.",
        explanation: "<b>SmartScreen</b> is a reputation-based service. As users browse (primarily via Microsoft Edge) or download files, SmartScreen queries Microsoft's threat intelligence cloud. If a site is known for phishing or a file is known malware, it displays a bright red warning screen and blocks the action.",
        moreDetails: "It is a frontline defense against socially engineered attacks.",
        otherOptions: "It is a security feature, not related to hardware brightness, screen capturing (which is WIP/MAM), or casting.",
        link: "https://learn.microsoft.com/en-us/windows/security/operating-system-security/virus-and-threat-protection/microsoft-defender-smartscreen/"
      },
      {
        id: 342,
        type: "medium",
        question: "Which feature of Microsoft Defender protects the operating system by forcing untrusted websites and downloads to open inside an isolated, hardware-backed Hyper-V container?",
        options: [
          "Windows Sandbox",
          "Microsoft Defender Application Guard (MDAG)",
          "Attack Surface Reduction",
          "Credential Guard"
        ],
        answer: "Microsoft Defender Application Guard (MDAG)",
        explanation: "<b>Microsoft Defender Application Guard (MDAG)</b> is an enterprise security feature. When a user browses to a website that is not explicitly defined as 'trusted' by the company, Edge seamlessly opens the site inside a lightweight Hyper-V virtual machine.",
        moreDetails: "If the untrusted site contains zero-day malware, the malware is trapped inside the VM. When the user closes the browser tab, the VM is destroyed, and the host operating system remains completely untouched.",
        otherOptions: "Windows Sandbox is a manual desktop VM tool. ASR blocks behaviors. Credential Guard protects passwords.",
        link: "https://learn.microsoft.com/en-us/windows/security/application-security/application-isolation/microsoft-defender-application-guard/md-app-guard-overview"
      },
      {
        id: 343,
        type: "hard",
        question: "To effectively deploy Microsoft Defender Application Guard, you must define the corporate network boundaries so MDAG knows which sites are 'trusted' and which should be sent to the isolated container. What Intune feature is used to define these boundaries?",
        options: [
          "Conditional Access Locations",
          "Windows Network Isolation settings (Enterprise Resource Domains)",
          "Endpoint Security Firewall Rules",
          "Azure Route Tables"
        ],
        answer: "Windows Network Isolation settings (Enterprise Resource Domains)",
        explanation: "Application Guard relies on <b>Network Isolation settings</b> to determine trust. Administrators configure 'Enterprise Resource Domains' (e.g., *.contoso.com, sharepoint.com) within Intune.",
        moreDetails: "Any URL matching that list opens normally on the host PC. Any URL *not* on that list is deemed untrusted and is forced into the MDAG Hyper-V container.",
        otherOptions: "Conditional access locations define login boundaries. Firewall rules block traffic. Azure Route tables route cloud traffic.",
        link: "https://learn.microsoft.com/en-us/windows/security/application-security/application-isolation/microsoft-defender-application-guard/configure-md-app-guard"
      },
      {
        id: 344,
        type: "medium",
        question: "SmartScreen includes a feature to block <b>Potentially Unwanted Applications (PUA)</b>. What constitutes a PUA?",
        options: [
          "A verified, highly destructive ransomware payload.",
          "Software that is not strictly malware, but may cause performance degradation, display unwanted ads, or install bundled toolbars without clear consent.",
          "Any application not published by Microsoft.",
          "Any application that requires administrator rights."
        ],
        answer: "Software that is not strictly malware, but may cause performance degradation, display unwanted ads, or install bundled toolbars without clear consent.",
        explanation: "<b>Potentially Unwanted Applications (PUA)</b> are a gray area. They aren't viruses or Trojans, but they are often bundled adware, cryptominers, or optimization tools that degrade the user experience and enterprise security posture.",
        moreDetails: "Microsoft Defender and SmartScreen can be explicitly configured via Intune to block PUAs, ensuring cleaner, faster endpoints.",
        otherOptions: "Ransomware is actual malware (not just 'potentially unwanted'). Non-Microsoft apps and admin apps are standard and not inherently PUAs.",
        link: "https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/detect-block-potentially-unwanted-apps-microsoft-defender-antivirus"
      },
      {
        id: 345,
        type: "easy",
        question: "Can Microsoft Defender SmartScreen protect users who are not using the Microsoft Edge browser?",
        options: [
          "No, it only functions within Microsoft Edge.",
          "Yes, the 'SmartScreen for Windows apps' feature checks the reputation of files downloaded from the web by *any* application before they execute.",
          "Yes, but only if they use Google Chrome.",
          "No, it is a server-side only technology."
        ],
        answer: "Yes, the 'SmartScreen for Windows apps' feature checks the reputation of files downloaded from the web by *any* application before they execute.",
        explanation: "While SmartScreen provides the deepest web-browsing integration in Edge, <b>SmartScreen for Windows apps</b> operates at the OS level.",
        moreDetails: "If a user downloads a file using Chrome, Firefox, or a third-party app, the moment they attempt to double-click and run the executable, the OS calls the SmartScreen API to verify the file's reputation and block it if malicious.",
        otherOptions: "It is an OS-level integration, not strictly limited to Edge, nor exclusively for Chrome.",
        link: "https://learn.microsoft.com/en-us/windows/security/operating-system-security/virus-and-threat-protection/microsoft-defender-smartscreen/"
      }
    ]
  },
  {
    id: 30,
    term: "Intune Role-Based Access Control (RBAC)",
    category: "Protect devices and data",
    questions: [
      {
        id: 346,
        type: "easy",
        question: "What is the core principle behind <b>Role-Based Access Control (RBAC)</b> in Microsoft Intune?",
        options: [
          "Ensuring every user has full administrator rights to fix their own PC.",
          "Granting administrators the exact minimum level of permissions they need to perform their specific job functions (Principle of Least Privilege).",
          "Routing network traffic based on user roles.",
          "Applying configuration profiles based on the user's job title."
        ],
        answer: "Granting administrators the exact minimum level of permissions they need to perform their specific job functions (Principle of Least Privilege).",
        explanation: "<b>RBAC</b> ensures that an IT helpdesk worker can reset a passcode, but cannot accidentally delete a tenant-wide compliance policy. It separates administrative powers into specific buckets (roles).",
        moreDetails: "This prevents accidental misconfigurations and limits the blast radius if an administrator's account is compromised.",
        otherOptions: "Granting full admin rights is the opposite of RBAC. RBAC governs admin portal access, not network routing or profile application.",
        link: "https://learn.microsoft.com/en-us/mem/intune/fundamentals/role-based-access-control"
      },
      {
        id: 347,
        type: "medium",
        question: "In Intune RBAC, what is the purpose of a <b>Scope Tag</b>?",
        options: [
          "To categorize applications in the Company Portal.",
          "To limit exactly *which* devices or policies an administrator is allowed to see and manage.",
          "To tag devices physically with asset numbers.",
          "To define the geographic location of the Intune tenant."
        ],
        answer: "To limit exactly *which* devices or policies an administrator is allowed to see and manage.",
        explanation: "While a 'Role' defines *what* an admin can do (e.g., wipe devices), a <b>Scope Tag</b> defines *where* they can do it.",
        moreDetails: "For example, you assign the 'Germany' Scope Tag to German devices, and give the German IT Admin role access only to the 'Germany' Scope Tag. That admin will now literally not be able to see US devices in their Intune console.",
        otherOptions: "Scope tags are an administrative security boundary, not app categories, physical tags, or datacenter locations.",
        link: "https://learn.microsoft.com/en-us/mem/intune/fundamentals/scope-tags"
      },
      {
        id: 348,
        type: "hard",
        question: "An organization wants a dedicated IT team to ONLY manage 'Endpoint Security' policies (Antivirus, Firewall, ASR) and nothing else. How should you configure this in Intune?",
        options: [
          "Assign them the Global Administrator role.",
          "Assign them the built-in 'Endpoint Security Manager' role.",
          "Tell them to only click on the Endpoint Security node and ignore the rest.",
          "Give them local administrator rights on all PCs."
        ],
        answer: "Assign them the built-in 'Endpoint Security Manager' role.",
        explanation: "Intune includes several built-in roles mapped to common IT operations. The <b>Endpoint Security Manager</b> role grants read/write access exclusively to security baselines, device compliance, and endpoint security profiles.",
        moreDetails: "This prevents the security team from interfering with application deployments or general device configuration, enforcing strict separation of duties.",
        otherOptions: "Global Admin is massive over-permissioning. Trusting them not to click is not a security control. Local admin rights don't grant Intune portal access.",
        link: "https://learn.microsoft.com/en-us/mem/intune/fundamentals/role-based-access-control#built-in-roles"
      },
      {
        id: 349,
        type: "medium",
        question: "When creating a Role Assignment in Intune, you must define three specific components. What are they?",
        options: [
          "Username, Password, and MFA token.",
          "Members (Who has the power), Scope Groups (Who/What they can use the power on), and Scope Tags (Which specific Intune objects they can see).",
          "Device name, IP address, and MAC address.",
          "Tenant ID, Application ID, and Client Secret."
        ],
        answer: "Members (Who has the power), Scope Groups (Who/What they can use the power on), and Scope Tags (Which specific Intune objects they can see).",
        explanation: "A complete <b>Role Assignment</b> requires binding the custom or built-in Role to: 1. <b>Members</b> (the IT admins receiving the rights), 2. <b>Scope Groups</b> (the Entra ID user/device groups the admins are allowed to target with policies), and 3. <b>Scope Tags</b> (the filter dictating which objects appear in their console).",
        moreDetails: "If any of these are misconfigured, the administrator will either lack access or have too much access.",
        otherOptions: "These define the granular RBAC assignment architecture, not basic authentication, network specs, or API credentials.",
        link: "https://learn.microsoft.com/en-us/mem/intune/fundamentals/assign-role"
      },
      {
        id: 350,
        type: "easy",
        question: "Which Entra ID role automatically grants full, unrestricted access to all features in Microsoft Intune, bypassing all specific Intune RBAC restrictions?",
        options: [
          "Helpdesk Administrator",
          "Intune Administrator (or Global Administrator)",
          "Security Reader",
          "Billing Administrator"
        ],
        answer: "Intune Administrator (or Global Administrator)",
        explanation: "Users assigned the <b>Global Administrator</b> or the <b>Intune Administrator</b> role in Entra ID inherently have full, absolute control over the Intune tenant.",
        moreDetails: "They do not need to be assigned specific Intune scope tags or custom roles; their directory-level role supersedes the application-level RBAC.",
        otherOptions: "Helpdesk, Security Reader, and Billing Admin are restricted roles that do not grant full Intune administrative power.",
        link: "https://learn.microsoft.com/en-us/mem/intune/fundamentals/role-based-access-control#roles-created-in-entra-id"
      }
    ]
  }
];
