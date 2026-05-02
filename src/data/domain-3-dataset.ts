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
  },
  {
    id: 993,
    term: "Device Maintenance Scenario Steps",
    category: "Protect devices and data",
    questions: [
      {
        id: 352,
        type: "medium",
        format: "order-steps",
        question: "Arrange the steps to silently enable BitLocker on an Entra ID joined device using Intune:",
        options: [
          "Create an Endpoint Security > Disk encryption policy.",
          "Set 'Require devices to be backed up to Azure AD' to 'Yes'.",
          "Set 'Warning for other disk encryption' to 'Block'.",
          "Set 'Allow standard users to enable encryption during Autopilot' to 'Yes'.",
          "Assign the policy to a device group containing TPM-enabled hardware."
        ],
        answer: "Create Policy -> Require Backup -> Block Warning -> Allow Standard Users -> Assign",
        explanation: "To achieve silent, zero-touch encryption, you must configure the policy to automatically backup the key to Entra ID, suppress any third-party encryption warnings, and allow standard users to trigger the encryption process without needing local admin rights.",
        moreDetails: "If the device lacks a TPM chip, silent encryption will fail, and the user will be prompted.",
        otherOptions: "N/A",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/encrypt-devices#silently-enable-bitlocker-on-devices"
      },
      {
        id: 353,
        type: "hard",
        format: "order-steps",
        question: "Arrange the steps to deploy Microsoft Defender Application Guard (MDAG) for Edge and define its network isolation boundaries:",
        options: [
          "Create an Endpoint Security > Attack Surface Reduction policy.",
          "Select the 'App and browser isolation' profile.",
          "Turn on Application Guard for Edge (Standalone mode or Enterprise mode).",
          "Create a separate 'Network boundary' configuration profile.",
          "Define the 'Enterprise resource domains' (e.g., contoso.com) that are trusted.",
          "Assign both profiles to the targeted users."
        ],
        answer: "Create ASR Policy -> Select Isolation Profile -> Turn on MDAG -> Create Network Boundary -> Define Domains -> Assign",
        explanation: "First, you must actually enable the MDAG feature on the endpoint using an ASR profile. Then, to make it functional in Enterprise mode, you must define the Network Boundary profile so the system knows which domains are safe and which must open in the isolated container.",
        moreDetails: "Without the network boundary definitions, MDAG doesn't know what to protect and typically won't enforce isolation properly.",
        otherOptions: "N/A",
        link: "https://learn.microsoft.com/en-us/windows/security/application-security/application-isolation/microsoft-defender-application-guard/configure-md-app-guard"
      },
      {
        id: 355,
        type: "hard",
        format: "order-steps",
        question: "Arrange the steps to configure and deploy a custom OMA-URI policy in Intune:",
        options: [
          "Navigate to Devices > Configuration profiles and create a new profile.",
          "Select 'Windows 10 and later' as the platform and 'Templates' > 'Custom' as the profile type.",
          "Click 'Add' to create a new OMA-URI row.",
          "Enter a clear Name, Description, the exact OMA-URI string, and specify the Data type (e.g., String, Integer).",
          "Enter the corresponding Value for the OMA-URI setting and save the row.",
          "Assign the Custom profile to the target user or device group."
        ],
        answer: "Create Profile -> Select Custom Template -> Add Row -> Enter OMA-URI/Type -> Enter Value -> Assign",
        explanation: "When a native GUI toggle isn't available in Intune, administrators can push raw Configuration Service Provider (CSP) settings using OMA-URI (Open Mobile Alliance Uniform Resource Identifier). You must select the Custom template, explicitly define the URI path, data type, and value.",
        moreDetails: "Typos in the OMA-URI string or selecting the wrong data type will result in a silent failure or 'Error' status on the client.",
        otherOptions: "N/A",
        link: "https://learn.microsoft.com/en-us/mem/intune/configuration/custom-settings-windows-10"
      },
      {
        id: 356,
        type: "medium",
        format: "order-steps",
        question: "Arrange the recommended phases for safely deploying a new Attack Surface Reduction (ASR) rule:",
        options: [
          "Create an ASR profile with the target rule set to 'Audit mode'.",
          "Deploy the Audit profile to a representative group of pilot users.",
          "Monitor the Microsoft Defender portal (ASR reports) to identify any legitimate line-of-business apps being flagged.",
          "Create file path exclusions for the legitimate apps discovered during auditing.",
          "Change the ASR rule from 'Audit mode' to 'Block mode' and deploy broadly."
        ],
        answer: "Set to Audit -> Deploy to Pilot -> Monitor Logs -> Create Exclusions -> Set to Block",
        explanation: "ASR rules can be highly disruptive to legacy or custom software. Best practice dictates running in Audit mode first, which logs what *would* have been blocked. After analyzing the logs and exempting critical apps, you can safely flip the switch to Block mode.",
        moreDetails: "Skipping the audit phase often results in significant helpdesk call volume.",
        otherOptions: "N/A",
        link: "https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/enable-attack-surface-reduction"
      },
      {
        id: 357,
        type: "hard",
        format: "order-steps",
        question: "Arrange the steps to deploy a Proactive Remediation to automatically clear temporary files on Windows devices:",
        options: [
          "Write a PowerShell Detection script (e.g., checking if the Temp folder is > 1GB).",
          "Write a PowerShell Remediation script (e.g., deleting files in the Temp folder).",
          "In Endpoint Analytics, go to Proactive remediations and create a script package.",
          "Upload both the Detection and Remediation scripts into the package.",
          "Configure the execution schedule (e.g., run daily).",
          "Assign the package to a device group."
        ],
        answer: "Write Detection -> Write Remediation -> Create Package -> Upload Scripts -> Set Schedule -> Assign",
        explanation: "Proactive remediations require a strict two-script architecture. The Detection script runs first; if it exits with code 1 (issue found), the Remediation script triggers immediately to fix it. Both are uploaded to Endpoint Analytics and scheduled to run recursively.",
        moreDetails: "If the Detection script returns code 0 (no issue), the remediation is skipped, saving CPU cycles.",
        otherOptions: "N/A",
        link: "https://learn.microsoft.com/en-us/mem/analytics/proactive-remediations"
      },
      {
        id: 358,
        type: "medium",
        format: "order-steps",
        question: "Arrange the steps to configure Endpoint Analytics to collect data from Intune-managed devices:",
        options: [
          "Ensure devices are licensed properly (e.g., Windows Enterprise E3).",
          "Navigate to Reports > Endpoint analytics in the Intune admin center.",
          "Click 'Start' to begin the onboarding process.",
          "Configure the Intune data collection policy (Windows health monitoring profile) to enable 'Endpoint analytics'.",
          "Assign the health monitoring profile to target devices.",
          "Wait up to 24-48 hours for telemetry data to populate the portal dashboards."
        ],
        answer: "Check Licensing -> Navigate to Portal -> Start Onboarding -> Configure Policy -> Assign Policy -> Wait",
        explanation: "Endpoint analytics is not fully active by default. You must onboard the tenant, then explicitly create and assign a Windows health monitoring profile to tell the Intune Management Extension on the clients to start uploading startup and app reliability metrics.",
        moreDetails: "The data processing is not real-time; new devices may take a couple of days to appear in the reports.",
        otherOptions: "N/A",
        link: "https://learn.microsoft.com/en-us/mem/analytics/enroll-intune"
      },
      {
        id: 360,
        type: "medium",
        format: "order-steps",
        question: "Arrange the steps to securely wipe a stolen laptop using the Intune portal:",
        options: [
          "Navigate to Devices > Windows.",
          "Search for and select the stolen device.",
          "Click the 'Wipe' remote action from the top menu.",
          "Select the 'Wipe device, and continue to wipe even if device loses power' checkbox.",
          "Confirm the action by clicking 'Wipe' again.",
          "Monitor the device's status; the wipe will execute the next time the device connects to the internet."
        ],
        answer: "Navigate to Devices -> Select Device -> Click Wipe Action -> Select Force Wipe Checkbox -> Confirm -> Monitor",
        explanation: "The 'Wipe' remote action is the nuclear option for stolen devices. Checking the box to continue even if the device loses power forces the firmware to resume the wipe process even if the thief attempts to interrupt it by holding the power button.",
        moreDetails: "Once triggered, the action remains queued until the device connects to a network. If it never connects, the wipe cannot occur.",
        otherOptions: "N/A",
        link: "https://learn.microsoft.com/en-us/mem/intune/remote-actions/devices-wipe"
      }
    ]
  },
  {
    id: 995,
    term: "Multi-Select Device Protection Scenarios",
    category: "Manage, maintain, and protect devices",
    questions: [
      {
        id: 361,
        type: "medium",
        format: "multi-select",
        question: "Which of the following Intune remote actions can be performed on a corporate-owned Windows 11 device without requiring the user to interact with the device? (Select THREE)",
        options: [
          "Autopilot Reset.",
          "Remote Assistance (via Quick Assist).",
          "Sync.",
          "Restart.",
          "BitLocker PIN recovery prompt."
        ],
        multiAnswers: [
          "Autopilot Reset.",
          "Sync.",
          "Restart."
        ],
        explanation: "Intune allows silent, remote execution of <b>Sync</b>, <b>Restart</b>, and <b>Autopilot Reset</b> without any interaction from the end-user.",
        moreDetails: "Remote Assistance requires the user to accept a prompt for privacy reasons. BitLocker PIN recovery is an action the user takes when locked out, not something pushed silently to their screen.",
        otherOptions: "Quick Assist and BitLocker recovery require user presence and interaction.",
        link: "https://learn.microsoft.com/en-us/mem/intune/remote-actions/device-management"
      },
      {
        id: 362,
        type: "hard",
        format: "multi-select",
        question: "You are implementing Microsoft Defender for Endpoint (MDE) integration with Intune. Which of the following features require the 'Microsoft Defender for Endpoint' toggle to be enabled in Intune's tenant administration? (Select TWO)",
        options: [
          "Enforcing local Windows Firewall rules.",
          "Using MDE machine risk scores in Intune Compliance Policies.",
          "Deploying a Defender Antivirus scan schedule.",
          "Syncing device security tasks from Defender Vulnerability Management to Intune.",
          "Configuring Attack Surface Reduction (ASR) rules."
        ],
        multiAnswers: [
          "Using MDE machine risk scores in Intune Compliance Policies.",
          "Syncing device security tasks from Defender Vulnerability Management to Intune."
        ],
        explanation: "The Intune-MDE service-to-service connector specifically enables cross-platform communication like <b>evaluating machine risk scores for compliance</b> and <b>passing security tasks</b> (from Defender's TVM dashboard) into Intune as actionable items.",
        moreDetails: "Basic Defender Antivirus, Firewall, and ASR policies are native OS capabilities managed by Intune directly; they do not require the MDE connector to function (though MDE is needed for reporting).",
        otherOptions: "Firewall, AV, and ASR are native OS features managed independently of the MDE connector.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/advanced-threat-protection-configure"
      },
      {
        id: 363,
        type: "medium",
        format: "multi-select",
        question: "Which of the following reports are natively available within Intune Endpoint Analytics? (Select THREE)",
        options: [
          "Startup performance.",
          "Application reliability.",
          "Network proxy bandwidth consumption.",
          "Work from anywhere (Windows 11 readiness).",
          "Detailed browser history for Microsoft Edge."
        ],
        multiAnswers: [
          "Startup performance.",
          "Application reliability.",
          "Work from anywhere (Windows 11 readiness)."
        ],
        explanation: "Endpoint Analytics focuses on user experience metrics, specifically providing deep insights into <b>Startup performance</b> (boot times), <b>Application reliability</b> (crash rates), and <b>Work from anywhere</b> (hardware readiness for Windows 11).",
        moreDetails: "It explicitly does not track user privacy data like browser history or granular network bandwidth per proxy.",
        otherOptions: "Browser history and proxy bandwidth are not tracked by Endpoint Analytics.",
        link: "https://learn.microsoft.com/en-us/mem/analytics/overview"
      },
      {
        id: 364,
        type: "hard",
        format: "multi-select",
        question: "You need to silently enable BitLocker on Entra ID Joined devices via Intune. Which of the following conditions must be met to avoid prompting the standard user? (Select THREE)",
        options: [
          "The device must have a TPM 1.2 or 2.0 chip.",
          "The policy must be set to 'Allow standard users to enable encryption during Autopilot'.",
          "The policy must suppress third-party encryption warnings.",
          "The device must have a local Administrator account active.",
          "The user must manually run 'manage-bde.exe'."
        ],
        multiAnswers: [
          "The device must have a TPM 1.2 or 2.0 chip.",
          "The policy must be set to 'Allow standard users to enable encryption during Autopilot'.",
          "The policy must suppress third-party encryption warnings."
        ],
        explanation: "Silent encryption requires a <b>TPM</b> to securely store the key, the policy must explicitly <b>allow standard users</b> to trigger the process (otherwise it fails citing lack of admin rights), and you must <b>suppress third-party warnings</b> so no UI popups halt the flow.",
        moreDetails: "Standard users normally cannot enable BitLocker. Intune temporarily bypasses this restriction if the specific policy is configured.",
        otherOptions: "Local admins and manage-bde.exe defeat the purpose of zero-touch silent encryption.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/encrypt-devices#silently-enable-bitlocker-on-devices"
      },
      {
        id: 365,
        type: "medium",
        format: "multi-select",
        question: "Which of the following are valid scopes/profiles under Intune's Endpoint Security node? (Select THREE)",
        options: [
          "Antivirus.",
          "Disk encryption.",
          "Microsoft Office macros.",
          "Attack surface reduction.",
          "SharePoint external sharing."
        ],
        multiAnswers: [
          "Antivirus.",
          "Disk encryption.",
          "Attack surface reduction."
        ],
        explanation: "The Endpoint Security node consolidates security-focused profiles, including <b>Antivirus</b>, <b>Disk encryption (BitLocker/FileVault)</b>, <b>Firewall</b>, <b>Endpoint detection and response</b>, and <b>Attack surface reduction</b>.",
        moreDetails: "Office macros are typically managed via Settings Catalog or Administrative Templates. SharePoint sharing is managed in the SharePoint admin center.",
        otherOptions: "Office macros and SharePoint sharing are not managed in the Endpoint Security node.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/endpoint-security"
      },
      {
        id: 366,
        type: "hard",
        format: "multi-select",
        question: "When troubleshooting an Intune device policy failure, which logs on the local Windows client are most useful for diagnosing Configuration Service Provider (CSP) errors? (Select TWO)",
        options: [
          "Event Viewer > Applications and Services > Microsoft > Windows > DeviceManagement-Enterprise-Diagnostics-Provider.",
          "C:\\ProgramData\\Microsoft\\IntuneManagementExtension\\Logs\\IntuneManagementExtension.log.",
          "Event Viewer > Windows Logs > Security.",
          "C:\\Windows\\System32\\winevt\\Logs\\Setup.evtx."
        ],
        multiAnswers: [
          "Event Viewer > Applications and Services > Microsoft > Windows > DeviceManagement-Enterprise-Diagnostics-Provider.",
          "C:\\ProgramData\\Microsoft\\IntuneManagementExtension\\Logs\\IntuneManagementExtension.log."
        ],
        explanation: "The <b>DeviceManagement-Enterprise-Diagnostics-Provider</b> event log tracks native MDM sync and CSP application errors. The <b>IntuneManagementExtension.log</b> tracks Win32 app deployments and PowerShell scripts pushed by Intune.",
        moreDetails: "These two locations contain 90% of the relevant client-side diagnostic data for Intune troubleshooting.",
        otherOptions: "The standard Security and Setup logs do not track Intune MDM policy execution.",
        link: "https://learn.microsoft.com/en-us/windows/client-management/mdm/diagnose-mdm-failures-in-windows-10"
      },
      {
        id: 367,
        type: "easy",
        format: "multi-select",
        question: "Which of the following actions will trigger an immediate compliance evaluation on a Windows device managed by Intune? (Select TWO)",
        options: [
          "Clicking 'Sync' from the device properties in the Intune portal.",
          "Clicking 'Sync' from the Access work or school settings in the Windows Settings app.",
          "Rebooting the device.",
          "Changing the desktop wallpaper."
        ],
        multiAnswers: [
          "Clicking 'Sync' from the device properties in the Intune portal.",
          "Clicking 'Sync' from the Access work or school settings in the Windows Settings app."
        ],
        explanation: "Forcing a <b>Sync</b>—either from the cloud portal or locally on the device—prompts the device to check in with Intune, download new policies, and immediately upload its current compliance state.",
        moreDetails: "Reboots and wallpaper changes do not force an immediate check-in, though a device typically checks in shortly after a reboot.",
        otherOptions: "Reboots do not guarantee an immediate compliance sync. Wallpaper changes are entirely unrelated.",
        link: "https://learn.microsoft.com/en-us/mem/intune/user-help/sync-your-device-manually-windows"
      }
    ]
  },
  {
    id: 999,
    term: "Multi-Select (Select Two) Device Protection",
    category: "Manage, maintain, and protect devices",
    questions: [
      {
        id: 368,
        type: "medium",
        format: "multi-select",
        question: "You are reviewing the 'Noncompliant devices' report in the Intune admin center. Which of the following states will cause a device to be marked as 'Not compliant'? (Select TWO)",
        options: [
          "The device fails to meet a setting defined in its assigned compliance policy.",
          "The device has not checked in with Intune before its compliance validity period expires.",
          "The user changed their desktop wallpaper.",
          "The device is currently downloading a Windows Update."
        ],
        multiAnswers: [
          "The device fails to meet a setting defined in its assigned compliance policy.",
          "The device has not checked in with Intune before its compliance validity period expires."
        ],
        explanation: "A device becomes noncompliant if it violates a specific <b>compliance rule</b> (e.g., BitLocker disabled) or if it fails to sync with Intune within the tenant's defined <b>compliance validity period</b> (default is 30 days).",
        moreDetails: "Downloading updates does not break compliance unless the OS version drops below a required threshold. Wallpaper changes are irrelevant.",
        otherOptions: "Updating and changing wallpapers do not affect Intune compliance state.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/device-compliance-get-started"
      },
      {
        id: 369,
        type: "hard",
        format: "multi-select",
        question: "When creating a Configuration Profile in Intune using the Settings Catalog, which of the following features are supported by the Settings Catalog interface? (Select TWO)",
        options: [
          "Searching for specific keywords across all available Windows configuration service providers (CSPs).",
          "Deploying complex PowerShell scripts directly within the catalog.",
          "Viewing a dynamically generated summary of the configured settings before saving.",
          "Packaging a Win32 application (.intunewin)."
        ],
        multiAnswers: [
          "Searching for specific keywords across all available Windows configuration service providers (CSPs).",
          "Viewing a dynamically generated summary of the configured settings before saving."
        ],
        explanation: "The Settings Catalog simplifies policy creation by allowing admins to <b>search across all CSPs</b> and select only the exact settings they want. It then provides a clean <b>summary view</b> of the chosen configuration.",
        moreDetails: "The Settings Catalog does not execute PowerShell scripts (that is a separate policy type) or package Win32 apps.",
        otherOptions: "PowerShell scripts and Win32 apps are entirely different workload types in Intune.",
        link: "https://learn.microsoft.com/en-us/mem/intune/configuration/settings-catalog"
      },
      {
        id: 370,
        type: "medium",
        format: "multi-select",
        question: "Which of the following actions can a Local Administrator perform to temporarily pause BitLocker encryption on a Windows 11 device without fully decrypting the drive? (Select TWO)",
        options: [
          "Run 'Suspend-BitLocker' in an elevated PowerShell session.",
          "Click 'Suspend protection' in the BitLocker Drive Encryption Control Panel applet.",
          "Delete the TPM module from Device Manager.",
          "Disable the Windows Firewall."
        ],
        multiAnswers: [
          "Run 'Suspend-BitLocker' in an elevated PowerShell session.",
          "Click 'Suspend protection' in the BitLocker Drive Encryption Control Panel applet."
        ],
        explanation: "BitLocker protection can be temporarily suspended (which leaves the drive encrypted but temporarily stores a clear key on the disk) using the <b>PowerShell cmdlet</b> or the <b>Control Panel UI</b>. This is often necessary when updating BIOS/firmware.",
        moreDetails: "Deleting the TPM module will cause a BitLocker recovery event, not suspend it. The firewall is unrelated to disk encryption.",
        otherOptions: "Messing with the TPM triggers recovery mode. Firewall is a network security component.",
        link: "https://learn.microsoft.com/en-us/powershell/module/bitlocker/suspend-bitlocker"
      }
    ]
  },
  {
    id: 99,
    term: "2026 Scenario Based Questions",
    category: "Manage, maintain, and protect devices",
    questions: [
      {
        id: 3001,
        type: "hard",
        format: "multiple-choice",
        question: "You deploy Microsoft Defender for Endpoint Attack Surface Reduction (ASR) rules in 'Block' mode to all Windows 11 devices. Shortly after, your internal software developers report that their custom macro-enabled Excel templates and PowerShell scripts are failing to execute, severely impacting their work. Other departments are unaffected. What is the best way to resolve this while maintaining security?",
        options: [
          "Change the ASR rules from 'Block' to 'Audit' mode globally.",
          "Create a new ASR policy targeted only to the developers, setting the conflicting rules (like 'Block Office applications from creating executable content') to 'Audit' mode or adding specific folder exclusions.",
          "Disable Microsoft Defender Antivirus on the developers' machines.",
          "Add the developers to the local Administrators group so they can bypass the ASR rules."
        ],
        answer: "Create a new ASR policy targeted only to the developers, setting the conflicting rules (like 'Block Office applications from creating executable content') to 'Audit' mode or adding specific folder exclusions.",
        explanation: "ASR rules are highly effective but can easily break legitimate developer workflows (which often mimic malicious behavior, like scripts launching executables). You should never lower security globally when only a small subset of users is affected.",
        moreDetails: "The correct approach is to use Intune targeting to apply a customized ASR policy to the developer group, utilizing exclusions for their specific work folders or setting specific rules to 'Audit' mode, while leaving the rest of the company in 'Block' mode.",
        otherOptions: "Global changes weaken the entire organization. Disabling Defender entirely is a massive security risk. Local Admins cannot bypass ASR rules enforced by Intune MDM policies.",
        link: "https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/attack-surface-reduction"
      },
      {
        id: 3002,
        type: "hard",
        format: "multiple-choice",
        question: "You are configuring Windows Update for Business (WUfB) update rings in Intune. Your goal is to defer Windows 11 Feature Updates for the 'Broad' deployment group for as long as natively possible using the deferral settings to ensure application compatibility testing. What is the maximum number of days you can defer a Feature Update?",
        options: [
          "30 days",
          "90 days",
          "365 days",
          "1095 days (3 years)"
        ],
        answer: "365 days",
        explanation: "In Windows Update for Business (WUfB) via Intune, Feature Updates can be deferred for a maximum of 365 days.",
        moreDetails: "Quality updates, on the other hand, can only be deferred for a maximum of 30 days. If an organization needs to pause feature updates for longer than 365 days, they must use the 'Feature updates for Windows 10 and later' policy to lock devices to a specific version, rather than relying on a deferral timer.",
        otherOptions: "30 days is the limit for Quality Updates. 90 days and 3 years are incorrect limits for native Intune WUfB deferrals.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/windows-update-settings"
      },
      {
        id: 3003,
        type: "hard",
        format: "multiple-choice",
        question: "You configure a BitLocker Endpoint Security profile in Intune to require 'Silently encrypt device'. However, on a batch of newly enrolled legacy laptops, the silent encryption fails, and users are prompted to manually start the BitLocker drive encryption wizard. What is the most likely reason for this failure?",
        options: [
          "The users are not local administrators on the laptops.",
          "The laptops lack a compatible TPM chip (e.g., they have TPM 1.2 or no TPM), which is required for silent encryption.",
          "The laptops are connected to a Wi-Fi network instead of a wired Ethernet network.",
          "The Intune policy was assigned to 'Devices' instead of 'Users'."
        ],
        answer: "The laptops lack a compatible TPM chip (e.g., they have TPM 1.2 or no TPM), which is required for silent encryption.",
        explanation: "Silent BitLocker encryption requires specific hardware readiness. Most notably, the device must have a TPM (Trusted Platform Module) version 1.2 or 2.0 (2.0 is highly recommended/required for modern standby devices) that is ready and unlocked.",
        moreDetails: "If the TPM is missing, disabled in BIOS, or requires a physical presence check to clear/take ownership (often seen on legacy hardware), the silent encryption process will fail and gracefully fall back to prompting the user.",
        otherOptions: "Silent encryption specifically *solves* the issue of standard users not being local admins (it elevates automatically). Network connection type does not affect encryption. Device vs User targeting doesn't cause this specific hardware-level failure.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/encrypt-devices"
      },
      {
        id: 3004,
        type: "hard",
        format: "multiple-choice",
        question: "A developer frequently needs to install unsigned drivers and modify restricted system registry keys, which require local administrator rights. You want to avoid giving them permanent local admin access (via LAPS or group membership) to maintain a zero-trust posture. Which Intune feature allows you to grant them temporary, approved access specifically for these tasks?",
        options: [
          "Windows Local Administrator Password Solution (LAPS)",
          "Endpoint Privilege Management (EPM)",
          "Privileged Identity Management (PIM)",
          "User Account Control (UAC) Bypass profiles"
        ],
        answer: "Endpoint Privilege Management (EPM)",
        explanation: "Endpoint Privilege Management (EPM) is an Intune feature that allows standard users to perform tasks that require elevated privileges (like installing software or modifying the registry) without giving them broad local administrator rights.",
        moreDetails: "EPM works by defining rules that elevate specific executables or processes, or by allowing users to request temporary elevation which is then audited. LAPS provides the actual local admin password, which is broader access. PIM is for Entra ID/Azure roles, not local endpoint processes.",
        otherOptions: "LAPS gives full local admin access (even if temporary, it's unrestricted while logged in). PIM is for cloud directory roles. UAC Bypass profiles do not exist in Intune natively.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/epm-overview"
      },
      {
        id: 3005,
        type: "hard",
        format: "multiple-choice",
        question: "An employee reports their company-owned laptop was stolen at an airport. The laptop contains highly sensitive customer data. You need to ensure the data is immediately inaccessible the next time the device connects to the internet. Which remote action must you initiate from the Intune console?",
        options: [
          "Retire",
          "Autopilot Reset",
          "Wipe (with 'Wipe device, but keep enrollment state and associated user account' unchecked)",
          "Fresh Start (with 'Retain user data' checked)"
        ],
        answer: "Wipe (with 'Wipe device, but keep enrollment state and associated user account' unchecked)",
        explanation: "A 'Wipe' action restores the device to its factory default settings, permanently deleting all user data, applications, and settings. This is the correct action for a lost or stolen device to prevent data breach.",
        moreDetails: "'Retire' only removes corporate data (apps/profiles pushed by Intune) but leaves personal user data intact, which is insufficient for a stolen corporate device. 'Autopilot Reset' retains the MDM enrollment to quickly give the device to a *new* employee, which is useless if the device is stolen.",
        otherOptions: "Retire leaves user data. Autopilot reset is for repurposing internally. Fresh Start with retained data obviously fails the requirement to secure the data.",
        link: "https://learn.microsoft.com/en-us/mem/intune/remote-actions/devices-wipe"
      },
      {
        id: 3006,
        type: "hard",
        format: "multiple-choice",
        question: "You have configured Delivery Optimization (DO) via Intune to use 'Group ID' download mode (Option 2) to reduce WAN bandwidth. However, you notice that devices in the New York office are downloading Windows Updates from peers in the London office over the costly site-to-site VPN. How do you prevent peers from sharing across the WAN link while keeping DO enabled?",
        options: [
          "Change the DO download mode to 'Internet' (Option 3).",
          "Configure the Intune DO policy setting 'Restrict Peer Selection By' to 'Subnet mask'.",
          "Set the 'Maximum Download Bandwidth' to 1 Kbps.",
          "Disable Delivery Optimization and use Microsoft Connected Cache exclusively."
        ],
        answer: "Configure the Intune DO policy setting 'Restrict Peer Selection By' to 'Subnet mask'.",
        explanation: "By default, 'Group ID' mode allows any devices sharing the same Entra ID tenant or explicit Group ID to peer with each other, regardless of their physical network location.",
        moreDetails: "To constrain peer-to-peer sharing to local LAN segments and prevent WAN traversal, you must configure 'Restrict Peer Selection By' to 'Subnet mask'. This forces the DO client to only peer with devices on the exact same local IP subnet.",
        otherOptions: "Internet mode allows peering with random PCs globally. Throttling bandwidth doesn't solve the routing logic flaw. Disabling DO entirely loses the benefits of local peering.",
        link: "https://learn.microsoft.com/en-us/windows/deployment/do/waas-delivery-optimization-reference"
      },
      {
        id: 3007,
        type: "hard",
        format: "multiple-choice",
        question: "You enable Windows Defender Credential Guard via Intune on all Windows 11 devices to protect against Pass-the-Hash attacks. The next day, users report that a critical legacy accounting application can no longer authenticate to its on-premises database. What authentication protocol is Credential Guard likely blocking?",
        options: [
          "Kerberos v5",
          "NTLMv2",
          "SAML 2.0",
          "NTLMv1 or WDigest"
        ],
        answer: "NTLMv1 or WDigest",
        explanation: "Credential Guard leverages virtualization-based security (VBS) to isolate secrets. By design, it strictly blocks legacy, insecure authentication protocols like NTLMv1, MS-CHAPv2, and WDigest.",
        moreDetails: "If an older application relies on these deprecated protocols to authenticate, it will break when Credential Guard is enabled. The application or backend server must be upgraded to support NTLMv2 or, preferably, Kerberos.",
        otherOptions: "Kerberos v5 and NTLMv2 are modern, secure protocols that are fully supported and protected by Credential Guard. SAML is a cloud/web identity protocol not handled by the local LSA secrets.",
        link: "https://learn.microsoft.com/en-us/windows/security/identity-protection/credential-guard/how-it-works"
      },
      {
        id: 3008,
        type: "hard",
        format: "multiple-choice",
        question: "Your organization wants to transition from manually managing Windows Update for Business (WUfB) rings to using Windows Autopatch to automate the patching of Windows, Microsoft 365 Apps, and Edge. What specific diagnostic data setting must be enabled in Intune for Autopatch to function?",
        options: [
          "Diagnostic data must be set to 'Off'.",
          "Diagnostic data must be set to 'Required' (formerly Basic) or 'Optional' (formerly Full).",
          "Windows Error Reporting must be disabled.",
          "Desktop Analytics log collection must be configured to 'Verbose'."
        ],
        answer: "Diagnostic data must be set to 'Required' (formerly Basic) or 'Optional' (formerly Full).",
        explanation: "Windows Autopatch relies heavily on Microsoft's telemetry and data analytics to determine device readiness, monitor update success, and automatically halt deployments if issues are detected.",
        moreDetails: "If Windows diagnostic data is set to 'Off', Autopatch cannot see the health of the endpoints and will not manage them. The minimum requirement is 'Required' diagnostic data.",
        otherOptions: "Setting it to 'Off' breaks the service. Disabling error reporting harms analytics. Desktop Analytics is a deprecated service (replaced by Endpoint Analytics).",
        link: "https://learn.microsoft.com/en-us/windows/deployment/windows-autopatch/prepare/windows-autopatch-prerequisites"
      },
      {
        id: 3009,
        type: "hard",
        format: "multiple-choice",
        question: "You configure an Intune BitLocker policy requiring a startup PIN. However, on your fleet of modern, thin-and-light Windows 11 tablets, the policy applies successfully but the users are never prompted to create a PIN, and the device boots straight to the Windows login screen. Why?",
        options: [
          "The tablets use Modern Standby (InstantGo), which silently ignores pre-boot PINs by default to support background network connectivity.",
          "The users do not have Azure AD Premium P2 licenses.",
          "BitLocker PINs are only supported on Windows Enterprise, not Windows Pro.",
          "The tablets are missing a physical keyboard, which disables PIN entry."
        ],
        answer: "The tablets use Modern Standby (InstantGo), which silently ignores pre-boot PINs by default to support background network connectivity.",
        explanation: "Devices that support Modern Standby (also known as InstantGo or connected standby) are designed to behave like smartphones, receiving emails and updates while asleep.",
        moreDetails: "A pre-boot BitLocker PIN breaks this behavior because it stops the boot process entirely. Therefore, Windows natively suppresses the PIN requirement on these devices. To enforce a PIN on Modern Standby devices, you must explicitly enable the specific policy 'Enable use of BitLocker authentication requiring preboot keyboard input on slates'.",
        otherOptions: "Licensing doesn't affect hardware PIN behavior. PINs are supported on Pro. On-screen touch keyboards are supported in the pre-boot environment.",
        link: "https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/bitlocker-device-encryption-overview-windows-10"
      },
      {
        id: 3010,
        type: "hard",
        format: "multiple-choice",
        question: "You are reviewing Endpoint Analytics in Intune and notice the 'Startup performance' score has plummeted across the organization. Drilling into the data, you see a specific third-party VPN agent's service is causing a 45-second delay during the 'Core boot' phase. How can you leverage Intune to automatically fix this without waiting for a vendor patch?",
        options: [
          "Use Proactive Remediations to deploy a PowerShell script that changes the VPN service startup type from 'Automatic' to 'Automatic (Delayed Start)'.",
          "Deploy a Win32 App supersedence rule to downgrade the VPN client.",
          "Configure an Endpoint Security Firewall rule to block the VPN until the desktop loads.",
          "Change the Windows Autopilot deployment profile to 'Self-Deploying'."
        ],
        answer: "Use Proactive Remediations to deploy a PowerShell script that changes the VPN service startup type from 'Automatic' to 'Automatic (Delayed Start)'.",
        explanation: "Proactive Remediations are script packages (Detection and Remediation) used to find and fix common support issues natively through the Intune Management Extension before the user even notices.",
        moreDetails: "In this scenario, changing a heavy service to 'Delayed Start' moves its execution out of the critical Core Boot path, instantly improving the startup performance score and user experience. Proactive Remediations are perfect for this targeted, automated fix.",
        otherOptions: "Downgrading might reintroduce security flaws. Blocking the firewall doesn't stop the service from hanging the boot sequence. Autopilot profiles have nothing to do with daily boot performance.",
        link: "https://learn.microsoft.com/en-us/mem/analytics/proactive-remediations"
      }
    ]
  },
  {
    id: 993,
    term: "Advanced Device Management Scenarios (2026 Updates)",
    category: "Manage, maintain, and protect devices",
    questions: [
      {
        id: 3001,
        type: "hard",
        question: "You deploy a BitLocker endpoint security policy via Intune requiring silent encryption (Warning for other disk encryption = Block). However, the policy fails with error code 0x803100b2 ('The drive cannot be encrypted because it contains unencrypted DMA ports'). How can you modify the Intune policy to allow silent encryption on these devices without entirely disabling DMA protection?",
        options: [
          "Set the 'Allow Warning for Other Disk Encryption' setting to 'Not Configured'.",
          "Configure the 'Disable new DMA devices when this computer is locked' setting to 'Yes' and set 'Block Direct Memory Access' to 'Not Configured'.",
          "Enable 'Allow standard users to enable encryption during Autopilot'.",
          "Switch the encryption method from XTS-AES 256 to XTS-AES 128."
        ],
        answer: "Configure the 'Disable new DMA devices when this computer is locked' setting to 'Yes' and set 'Block Direct Memory Access' to 'Not Configured'.",
        explanation: "Silent encryption often fails on hardware with external DMA ports (like Thunderbolt) because Windows blocks automatic encryption to prevent DMA attacks. By configuring 'Disable new DMA devices when this computer is locked', Windows satisfies the security requirement and allows silent encryption to proceed.",
        moreDetails: "You can also explicitly configure the 'Block Direct Memory Access' setting to False (or 'Allowed') in an Endpoint Protection profile to bypass this check, though it lowers the security posture. DMA protection ensures that malicious devices cannot read memory directly over Thunderbolt/PCIe.",
        otherOptions: "Allowing warnings defeats silent encryption. Standard users setting is for OOBE, not DMA. Cipher strength (128 vs 256) has no impact on DMA port checks.",
        link: "https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/ts-bitlocker-intune-issues"
      },
      {
        id: 3002,
        type: "hard",
        question: "Your organization uses Windows Autopatch to manage updates. You notice that a group of developers' machines are receiving feature updates significantly later than the 'Broad' ring, despite being assigned to it. Upon investigation, you find these devices also have a legacy Windows Update for Business (WUfB) profile assigned that defers feature updates by 180 days. Which update setting takes precedence?",
        options: [
          "Windows Autopatch dynamically overwrites all legacy WUfB policies on the client.",
          "The legacy WUfB deferral policy of 180 days takes precedence, causing a conflict and delaying the Autopatch schedule.",
          "The client device blue screens due to conflicting update rings.",
          "The user is prompted to choose which update schedule to follow."
        ],
        answer: "The legacy WUfB deferral policy of 180 days takes precedence, causing a conflict and delaying the Autopatch schedule.",
        explanation: "Windows Autopatch relies on specific WUfB settings deployed via Intune. If an administrator accidentally leaves a legacy WUfB profile deployed to the same devices with longer deferral periods, Windows will honor the stricter/longer deferral setting, breaking the Autopatch SLA.",
        moreDetails: "Microsoft explicitly advises administrators to unassign or delete any existing WUfB feature update and quality update rings from devices that are being onboarded into Windows Autopatch to prevent these exact policy conflicts.",
        otherOptions: "Autopatch does not automatically magically delete your Intune profiles. The device does not crash. The user is never prompted for MDM conflict resolution.",
        link: "https://learn.microsoft.com/en-us/windows/deployment/windows-autopatch/prepare/windows-autopatch-conflicts"
      },
      {
        id: 3003,
        type: "hard",
        question: "You author a custom PowerShell script for Proactive Remediations (Endpoint Analytics) to clear the Google Chrome cache in the `Appdata\\Local` folder. The script works perfectly when tested locally, but when deployed via Intune, it fails to clear the cache. The Intune logs show the script executed successfully. What is the most likely reason for the failure?",
        options: [
          "The script was not signed with a trusted code-signing certificate.",
          "The script is configured to run using the 'System' credentials rather than the 'Logged-on credentials'.",
          "Endpoint Analytics does not support PowerShell version 5.1.",
          "The devices do not have an active Microsoft 365 E5 license."
        ],
        answer: "The script is configured to run using the 'System' credentials rather than the 'Logged-on credentials'.",
        explanation: "If a Proactive Remediation script needs to modify files within a specific user's profile (like AppData), the setting 'Run this script using the logged-on credentials' MUST be set to 'Yes'.",
        moreDetails: "If run as System, the script executes in the context of the Local System account and will attempt to clear the cache in `C:\\Windows\\System32\\config\\systemprofile\\AppData`, which is not the actual user's profile, leading to silent failure.",
        otherOptions: "Unsigned scripts can run if execution policy allows (or is bypassed). Intune fully supports PS 5.1. E5 is not strictly required for basic script execution if properly licensed for Intune.",
        link: "https://learn.microsoft.com/en-us/mem/analytics/proactive-remediations"
      },
      {
        id: 3004,
        type: "hard",
        question: "You deploy Microsoft Defender for Endpoint (MDE) to Windows clients using the Intune Endpoint Detection and Response (EDR) policy. However, the devices are not appearing in the Microsoft Defender portal. You verify the Intune policy shows 'Succeeded'. You run the MDE Client Analyzer tool on a failing device. What is the most common network-related cause for this silent onboarding failure?",
        options: [
          "The devices are blocking ICMP Echo Requests (ping) to the Azure datacenter.",
          "The corporate firewall is performing TLS inspection on traffic to *.ods.opinsights.azure.com without having the correct root certificate distributed.",
          "The devices do not have a static IPv4 address assigned.",
          "Port 3389 is blocked on the local Windows Firewall."
        ],
        answer: "The corporate firewall is performing TLS inspection on traffic to *.ods.opinsights.azure.com without having the correct root certificate distributed.",
        explanation: "MDE relies on specific URLs for telemetry and command-and-control. If a corporate firewall or proxy performs SSL/TLS inspection (HTTPS interception) on this traffic without properly trusting the certificates, the MDE sensor will fail to communicate with the cloud, silently failing the onboarding.",
        moreDetails: "Microsoft recommends bypassing TLS inspection entirely for MDE URLs to ensure telemetry integrity and prevent onboarding failures.",
        otherOptions: "ICMP is not required for MDE. Static IPs are irrelevant. Port 3389 is RDP and has nothing to do with MDE telemetry.",
        link: "https://learn.microsoft.com/en-us/defender-endpoint/configure-proxy-internet"
      },
      {
        id: 3005,
        type: "hard",
        question: "A critical Line-of-Business (LOB) application suddenly stops working for all users after a new Intune policy is deployed. The application uses complex VBA macros embedded in Excel files to communicate with a local database. Which Intune policy is the most likely culprit?",
        options: [
          "An Attack Surface Reduction (ASR) rule set to 'Block' for 'Block all Office applications from creating child processes'.",
          "A Windows Update for Business policy that upgraded Office to the 64-bit version.",
          "A Device Restriction policy that disabled the Microsoft Store.",
          "A BitLocker policy that enforced full disk encryption."
        ],
        answer: "An Attack Surface Reduction (ASR) rule set to 'Block' for 'Block all Office applications from creating child processes'.",
        explanation: "Attack Surface Reduction (ASR) rules are highly effective at stopping malware, but they frequently break legacy applications that rely on Office macros executing external commands, spawning scripts, or creating child processes.",
        moreDetails: "When deploying ASR rules, it is a critical best practice to deploy them in 'Audit mode' first. You then review the MDE Advanced Hunting logs to identify legitimate business applications that are being caught, and add exclusions for them before switching the rule to 'Block'.",
        otherOptions: "While 64-bit Office can break macros, Intune WUfB doesn't force architecture changes. Store restrictions and BitLocker do not interfere with Excel VBA execution.",
        link: "https://learn.microsoft.com/en-us/defender-endpoint/attack-surface-reduction-rules-deployment-test"
      },
      {
        id: 3006,
        type: "hard",
        question: "Your organization uses Microsoft Defender for Endpoint (MDE). You want to isolate highly sensitive 'R&D' laptops into a specific MDE Device Group that applies stricter automated investigation and remediation (AIR) policies. You manage these devices via Intune. What is the most automated way to assign these devices to the correct MDE Device Group?",
        options: [
          "Manually search for the devices in the MDE portal and type 'R&D' in the tags field.",
          "Use an Intune Device Configuration profile (Settings Catalog) to deploy a custom Registry key containing the 'R&D' device tag.",
          "Create an Entra ID dynamic group and sync it directly to the MDE Device Group.",
          "Run a PowerShell script manually on each laptop to modify the local hosts file."
        ],
        answer: "Use an Intune Device Configuration profile (Settings Catalog) to deploy a custom Registry key containing the 'R&D' device tag.",
        explanation: "MDE device tags can be injected automatically by creating a specific registry key (`HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Windows Advanced Threat Protection\\DeviceTagging`). Intune can deploy this via the Settings Catalog natively.",
        moreDetails: "Once the tag (e.g., 'R&D') is deployed via Intune to the R&D device group, the MDE portal reads the registry key, tags the device, and a dynamic rule in the MDE portal automatically places it into the corresponding high-security Device Group.",
        otherOptions: "Manual tagging is not automated. Entra ID groups cannot be used directly as MDE Device Groups (MDE relies on its own RBAC/Group structure based on tags, OS, or domains). Hosts file has nothing to do with MDE tagging.",
        link: "https://learn.microsoft.com/en-us/defender-endpoint/machine-tags"
      },
      {
        id: 3007,
        type: "hard",
        question: "A recent Windows Quality Update deployed via Windows Update for Business (WUfB) causes a critical line-of-business application to crash with a Blue Screen of Death (BSOD) across your organization. What is the fastest native Intune method to resolve this for affected devices and prevent it from installing on others?",
        options: [
          "Deploy a Win32 app containing a PowerShell script executing `wusa.exe /uninstall /kb:XXXXXX`.",
          "Use the 'Uninstall' feature located within the specific Windows 10/11 Update Ring profile in Intune.",
          "Wipe all affected devices and redeploy via Autopilot.",
          "Change the WUfB quality update deferral setting from 0 days to 365 days."
        ],
        answer: "Use the 'Uninstall' feature located within the specific Windows 10/11 Update Ring profile in Intune.",
        explanation: "Intune provides a native 'Uninstall' remote action directly within the Update Ring profile properties. Selecting 'Uninstall' for Quality updates commands all devices in that ring to revert the latest quality update and pauses further installations of that update.",
        moreDetails: "This native feature is far more reliable and faster than deploying custom uninstallation scripts, as it leverages the built-in Windows Update rollback mechanisms.",
        otherOptions: "Scripting wusa.exe is error-prone. Wiping is drastic and unacceptable. Changing deferral to 365 days prevents future updates but doesn't uninstall the already applied bad update.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/windows-update-for-business-configure#uninstall"
      },
      {
        id: 3008,
        type: "hard",
        question: "You need to deploy a specific legacy Active Directory ADMX policy setting that is not natively available in the Intune Settings Catalog or Administrative Templates. You possess the raw ADMX and ADML files. How can you deploy this setting using Intune?",
        options: [
          "Upload the ADMX file directly to a 'Custom Configuration' profile as an OMA-URI payload.",
          "Import the ADMX file into the 'Imported Administrative templates' section in Intune, then create a profile using the imported template.",
          "You cannot deploy custom ADMX files via Intune; you must use Configuration Manager.",
          "Convert the ADMX file to a .ppkg Provisioning Package."
        ],
        answer: "Import the ADMX file into the 'Imported Administrative templates' section in Intune, then create a profile using the imported template.",
        explanation: "Intune natively supports the ingestion of third-party or custom ADMX/ADML files via the 'Imported Administrative templates' feature. Once imported, administrators can configure the settings via a standard GUI profile, just like native templates.",
        moreDetails: "Previously, this required complex Custom OMA-URI string manipulation (ADMX ingestion), but the modern approach natively parses the uploaded XML and generates a user-friendly configuration interface.",
        otherOptions: "Custom OMA-URI was the old, complex way. Intune fully supports custom ADMX. PPKG conversion is unnecessary and complex.",
        link: "https://learn.microsoft.com/en-us/mem/intune/configuration/administrative-templates-import-custom"
      },
      {
        id: 3009,
        type: "hard",
        question: "You deploy a strict Microsoft Defender Firewall policy via Intune that blocks all inbound traffic. However, a local IT technician manually creates a local firewall rule on their laptop allowing inbound port 8080. When testing, the technician finds port 8080 is still successfully blocked. Which Intune setting ensures the local rule was ignored?",
        options: [
          "Set 'Firewall rule merging' to 'Not Configured'.",
          "Set 'Firewall rule merging' to 'Block'.",
          "Enable 'Stealth Mode'.",
          "Set 'IPsec Exemptions' to 'Block'."
        ],
        answer: "Set 'Firewall rule merging' to 'Block'.",
        explanation: "The 'Firewall rule merging' setting dictates whether local firewall rules (created by users or local admins) are evaluated alongside MDM-deployed rules. If set to 'Block' (or 'Disable'), the firewall exclusively honors the Intune policies, and all local rules are completely ignored.",
        moreDetails: "This is a critical security posture requirement for Enterprise environments to prevent local administrators from bypassing central firewall policies.",
        otherOptions: "Not Configured allows merging by default. Stealth mode drops ICMP/unsolicited packets but doesn't override local port rules. IPsec exemptions relate to encrypted traffic bypasses.",
        link: "https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/windows-firewall/best-practices-configuring"
      },
      {
        id: 3010,
        type: "hard",
        question: "A helpdesk agent attempts to initiate a Remote Help session with a user. The Intune portal shows the action as successful, but the user's Remote Help app launches and immediately displays an error stating 'You do not have access to this application.' What is the most likely cause?",
        options: [
          "The user does not have local administrator privileges.",
          "The user is not assigned the premium Remote Help add-on license.",
          "A Conditional Access policy is blocking access to the 'Remote Help' cloud application.",
          "The user's device is missing the Intune Management Extension."
        ],
        answer: "A Conditional Access policy is blocking access to the 'Remote Help' cloud application.",
        explanation: "Remote Help authenticates against Entra ID and is treated as a cloud application. If a Conditional Access policy explicitly blocks access to this app (e.g., due to coming from an untrusted IP or failing a compliance check), the app will launch but fail authentication.",
        moreDetails: "Because Remote Help relies on identity verification to establish trust between the helper and the user, strict CA policies can inadvertently block the support session.",
        otherOptions: "Standard users can receive Remote Help (admin is only needed for elevation). The user does not need the premium license (only the helper/tenant needs it). IME is not required for the standalone Remote Help app execution.",
        link: "https://learn.microsoft.com/en-us/mem/intune/remote-actions/remote-help#conditional-access"
      }
    ]
  }
];
