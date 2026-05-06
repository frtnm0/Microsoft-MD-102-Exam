import type { TermData } from './domain-1-dataset';

export const domain3Dataset: TermData[] = [
  {
    id: 21,
    term: "Microsoft Defender for Endpoint",
    category: "Protect devices and data",
    questions: [
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
          "Set 'Allow local policy merge' to False.",
          "Configure an IPsec Connection Security Rule.",
          "Disable the Public Profile."
        ],
        answer: "Set 'Allow local policy merge' to False.",
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
          "A 32-bit (x86) processor, and TPM 1.2 chip.",
          "UEFI firmware version 2.3.1.c or higher with Secure Boot enabled, and CPU virtualization extensions.",
          "Hyper-V hypervisor role installed in Windows."
        ],
        answer: "UEFI firmware version 2.3.1.c or higher with Secure Boot enabled, and CPU virtualization extensions.",
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
          "A Conflict is generated in Intune, and the setting is not enforced.",
          "The camera is disabled because Intune always defaults to the most restrictive setting."
        ],
        answer: "A Conflict is generated in Intune, and the setting is not enforced.",
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
          "Nothing. Existing profiles remain on the old version.",
          "The devices are marked non-compliant."
        ],
        answer: "Nothing. Existing profiles remain on the old version.",
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
        id: 361,
        type: "medium",
        format: "order-steps",
        question: "Arrange the steps to configure and enforce a Terms of Use (Terms of Service) agreement using Entra ID Conditional Access:",
        options: [
          "Create the Terms of Use document in PDF format.",
          "Navigate to Microsoft Entra ID > Security > Conditional Access > Terms of use and upload the PDF.",
          "Configure the Terms of Use settings (e.g., require users to expand the document, consent schedule).",
          "Create a new Conditional Access policy.",
          "Under the 'Grant' control section, select the uploaded Terms of Use to enforce it.",
          "Enable the Conditional Access policy and assign it to the targeted users."
        ],
        answer: "Create PDF -> Upload to Terms of use -> Configure settings -> Create CA policy -> Require in Grant control -> Enable policy",
        explanation: "To enforce a Terms of Service agreement during login, you first create and upload the document in the Terms of Use blade. Then, you link it to a Conditional Access policy by selecting it as a required 'Grant' control.",
        moreDetails: "Users will be prompted to read and accept the terms before they are granted access to the applications targeted by the Conditional Access policy. The document must be in PDF format.",
        otherOptions: "N/A",
        link: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/terms-of-use"
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
        question: "Which of the following Intune remote actions can be performed on a corporate-owned Windows 11 device without requiring the user to interact with the device? (select <b>THREE</b>)",
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
        question: "You are implementing Microsoft Defender for Endpoint (MDE) integration with Intune. Which of the following features require the 'Microsoft Defender for Endpoint' toggle to be enabled in Intune's tenant administration? (select <b>TWO</b>)",
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
        question: "Which of the following reports are natively available within Intune Endpoint Analytics? (select <b>THREE</b>)",
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
        question: "You need to silently enable BitLocker on Entra ID Joined devices via Intune. Which of the following conditions must be met to avoid prompting the standard user? (select <b>THREE</b>)",
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
        question: "Which of the following are valid scopes/profiles under Intune's Endpoint Security node? (select <b>THREE</b>)",
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
        question: "When troubleshooting an Intune device policy failure, which logs on the local Windows client are most useful for diagnosing Configuration Service Provider (CSP) errors? (select <b>TWO</b>)",
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

    ]
  },
  {
    id: 999,
    term: "Multi-Select (select <b>TWO</b>) Device Protection",
    category: "Manage, maintain, and protect devices",
    questions: [
      {
        id: 368,
        type: "medium",
        format: "multi-select",
        question: "You are reviewing the 'Noncompliant devices' report in the Intune admin center. Which of the following states will cause a device to be marked as 'Not compliant'? (select <b>TWO</b>)",
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
        question: "When creating a Configuration Profile in Intune using the Settings Catalog, which of the following features are supported by the Settings Catalog interface? (select <b>TWO</b>)",
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
        question: "Which of the following actions can a Local Administrator perform to temporarily pause BitLocker encryption on a Windows 11 device without fully decrypting the drive? (select <b>TWO</b>)",
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
          "The laptops lack a compatible TPM chip (e.g., they have TPM 1.2 or no TPM).",
          "The laptops are connected to a Wi-Fi network instead of a wired Ethernet network.",
          "The Intune policy was assigned to 'Devices' instead of 'Users'."
        ],
        answer: "The laptops lack a compatible TPM chip (e.g., they have TPM 1.2 or no TPM).",
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
  },
  {
    id: 26,
    term: "Endpoint Security Settings & Setup",
    category: "Protect devices and data",
    questions: [
      {
        id: 3011,
        type: "medium",
        format: "multiple-choice",
        question: "What is the primary administrative advantage of configuring security policies in the 'Endpoint security' node instead of using generic Device Configuration profiles?",
        options: [
          "Endpoint Security policies deploy significantly faster to devices than Configuration profiles.",
          "Endpoint Security policies can be managed by Security Operations (SecOps) teams using dedicated Intune RBAC roles without giving them access to general OS settings.",
          "Endpoint Security policies bypass Entra ID Conditional Access requirements.",
          "Endpoint Security policies are the only way to manage third-party antivirus software."
        ],
        answer: "Endpoint Security policies can be managed by Security Operations (SecOps) teams using dedicated Intune RBAC roles without giving them access to general OS settings.",
        explanation: "The <b>Endpoint security</b> node organizes security-specific settings (Defender, BitLocker, Firewall, ASR) into distinct profiles. This allows an organization to implement Role-Based Access Control (RBAC) specifically tailored for security teams.",
        moreDetails: "By assigning the 'Endpoint Security Manager' role, SecOps can manage Antivirus and Firewall policies without accidentally altering general device settings like Wi-Fi or Start Menu layouts.",
        otherOptions: "They do not deploy faster, bypass CA, or solely manage third-party AV.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/endpoint-security"
      },
      {
        id: 3012,
        type: "hard",
        format: "multiple-choice",
        question: "Microsoft releases a new version of the 'MDM Security Baseline' in the Intune portal. What happens to the Windows devices currently assigned to the older version of the baseline?",
        options: [
          "Intune automatically forces the devices to upgrade to the new baseline on their next sync.",
          "The devices are marked as Noncompliant until the administrator updates the profile.",
          "The devices continue to use the older baseline settings until an administrator explicitly reviews the changes and updates the assigned profile to the new version.",
          "The older baseline is immediately deleted, and devices lose their security settings."
        ],
        answer: "The devices continue to use the older baseline settings until an administrator explicitly reviews the changes and updates the assigned profile to the new version.",
        explanation: "Intune <b>does not automatically force</b> active devices to adopt new Security Baselines when Microsoft publishes a version update.",
        moreDetails: "Because new baselines often introduce stricter settings that could break production workloads, administrators must manually review the version differences in the portal and explicitly migrate the existing profile to the new version when they are ready.",
        otherOptions: "They are not forced, not marked noncompliant, and the old baseline isn't deleted.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/security-baselines-update"
      },
      {
        id: 3013,
        type: "medium",
        format: "multiple-choice",
        question: "You want to deploy an Attack Surface Reduction (ASR) rule to block Office applications from creating child processes. However, you are concerned this might break a legacy macro used by the Finance department. What is the recommended deployment strategy?",
        options: [
          "Deploy the ASR rule in 'Audit mode' first to collect telemetry in the Defender portal without actually blocking the behavior.",
          "Deploy the ASR rule in 'Block mode' to the entire company and wait for helpdesk tickets.",
          "Exclude the entire Finance department from all Endpoint Security policies.",
          "Disable Microsoft Defender Antivirus on the Finance department's computers."
        ],
        answer: "Deploy the ASR rule in 'Audit mode' first to collect telemetry in the Defender portal without actually blocking the behavior.",
        explanation: "Deploying ASR rules can significantly impact business productivity if legitimate applications exhibit behaviors that mimic malware.",
        moreDetails: "By setting the rule to <b>Audit mode</b>, the rule will not block any processes. Instead, it will silently log an event every time the behavior occurs, allowing administrators to review the Microsoft Defender portal and create targeted exclusions before shifting the rule to Block mode.",
        otherOptions: "Blocking blindly is disruptive. Excluding departments entirely reduces security. Disabling AV is a massive security risk.",
        link: "https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/attack-surface-reduction-rules-deployment-test"
      },
      {
        id: 3014,
        type: "medium",
        format: "multi-select",
        question: "You are configuring an Endpoint Security Disk Encryption policy to silently enable BitLocker on all corporate Windows 11 laptops without any user interaction. Which TWO prerequisites are generally required for silent encryption to succeed? (select <b>TWO</b>)",
        options: [
          "The device must have a compatible Trusted Platform Module (TPM) chip.",
          "The user must be a Local Administrator on the device.",
          "The device must be joined to Entra ID (Hybrid or Cloud-only).",
          "The device must have at least three hard drives."
        ],
        multiAnswers: [
          "The device must have a compatible Trusted Platform Module (TPM) chip.",
          "The device must be joined to Entra ID (Hybrid or Cloud-only)."
        ],
        explanation: "For BitLocker to encrypt silently (without prompting the user to accept or manually save a recovery key), specific prerequisites must be met.",
        moreDetails: "A <b>TPM</b> (version 1.2 or 2.0) is required to securely store the encryption keys without user input. Furthermore, the device must be <b>Entra ID joined</b> (or Hybrid) so that the recovery key can be automatically escrowed to the cloud before encryption begins.",
        otherOptions: "The user does NOT need to be a local admin (this is a primary benefit of silent encryption). The number of hard drives is irrelevant.",
        link: "https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/bitlocker-basic-deployment#silent-encryption"
      },
      {
        id: 3015,
        type: "easy",
        format: "multiple-choice",
        question: "Your organization wants to prevent users from copying corporate data to removable USB flash drives, but still allow the use of standard USB mice and keyboards. Which Endpoint Security policy type should you configure?",
        options: [
          "Antivirus policy",
          "Firewall policy",
          "Attack Surface Reduction (ASR) > Device Control policy",
          "Account protection policy"
        ],
        answer: "Attack Surface Reduction (ASR) > Device Control policy",
        explanation: "<b>Device Control</b> is a specific subset of Attack Surface Reduction (ASR) designed to manage removable storage.",
        moreDetails: "Administrators can use Device Control profiles to block write access to USB mass storage devices, CD/DVD drives, or even block specific hardware IDs, while ensuring human interface devices (mice/keyboards) continue to function normally.",
        otherOptions: "Antivirus handles malware. Firewall handles network ports. Account protection handles Windows Hello/Identity.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/endpoint-security-asr#device-control"
      },
      {
        id: 3016,
        type: "hard",
        format: "multiple-choice",
        question: "You notice that advanced malware (or malicious users with local admin rights) are modifying registry keys to manually disable Microsoft Defender Antivirus. Which Endpoint Security feature should you enable to lock down Defender's core settings?",
        options: [
          "Controlled Folder Access",
          "Tamper Protection",
          "SmartScreen for Microsoft Edge",
          "BitLocker Drive Encryption"
        ],
        answer: "Tamper Protection",
        explanation: "<b>Tamper Protection</b> essentially locks Microsoft Defender Antivirus and prevents its security settings from being changed by unauthorized apps or users.",
        moreDetails: "Once enabled (typically configured globally in the Defender portal or via Intune Antivirus policies), even a user with full Local Administrator rights cannot disable real-time protection or modify Defender registry keys.",
        otherOptions: "Controlled Folder Access protects files against ransomware. SmartScreen protects web browsing. BitLocker encrypts the drive.",
        link: "https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/prevent-changes-to-security-settings-with-tamper-protection"
      },
      {
        id: 3017,
        type: "hard",
        format: "multiple-choice",
        question: "Your organization currently uses a third-party antivirus solution as the primary AV, but you want to utilize Microsoft Defender for Endpoint's post-breach detection capabilities. To ensure Defender can intervene and stop malicious artifacts that the third-party AV misses, what feature should you enable?",
        options: [
          "EDR in block mode",
          "Windows LAPS",
          "Always On VPN",
          "Windows Hello for Business"
        ],
        answer: "EDR in block mode",
        explanation: "When a non-Microsoft antivirus is active, Microsoft Defender Antivirus enters 'Passive mode'. However, by enabling <b>EDR in block mode</b>, the Defender Endpoint Detection and Response sensor continues to monitor the device.",
        moreDetails: "If the primary third-party AV misses a threat, EDR in block mode allows Defender to step in post-breach, flag the malicious artifact, and remediate (block/quarantine) the threat.",
        otherOptions: "LAPS manages admin passwords. Always On VPN is networking. Windows Hello is identity.",
        link: "https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/edr-in-block-mode"
      },
      {
        id: 3018,
        type: "medium",
        format: "multiple-choice",
        question: "You are configuring an 'Account protection' policy in the Endpoint security node to deploy Windows Local Administrator Password Solution (LAPS). What is the primary purpose of this policy?",
        options: [
          "To synchronize the user's Entra ID password with their local account.",
          "To randomize the password of the built-in local administrator account, automatically rotate it, and securely back it up to Entra ID.",
          "To enforce Multi-Factor Authentication (MFA) on the Windows lock screen.",
          "To prevent standard users from locking their screens."
        ],
        answer: "To randomize the password of the built-in local administrator account, automatically rotate it, and securely back it up to Entra ID.",
        explanation: "<b>Windows LAPS</b> automatically manages and randomizes the password of the local administrator account on Windows clients.",
        moreDetails: "This completely mitigates 'Pass-the-Hash' attacks that rely on identical local admin passwords shared across corporate workstations. The Account Protection policy allows you to configure rotation schedules and specify the backup location (Entra ID).",
        otherOptions: "It specifically targets the local admin, not standard user passwords, MFA requirements, or lock screen behaviors.",
        link: "https://learn.microsoft.com/en-us/windows-server/identity/laps/laps-overview"
      },
      {
        id: 3019,
        type: "easy",
        format: "multiple-choice",
        question: "When configuring a Microsoft Defender Firewall policy in Endpoint Security, you can specify different rules for different network locations. Which of the following is NOT a standard Windows Firewall profile?",
        options: [
          "Domain Profile",
          "Private Profile",
          "Public Profile",
          "Enterprise Profile"
        ],
        answer: "Enterprise Profile",
        explanation: "The Windows Defender Firewall operates using three distinct network location profiles: <b>Domain</b> (connected to an Active Directory network), <b>Private</b> (connected to a trusted home/work network), and <b>Public</b> (connected to an untrusted public Wi-Fi).",
        moreDetails: "There is no 'Enterprise Profile'. Intune allows administrators to configure distinct firewall rules (like blocking inbound RDP) specifically tailored to which of the three valid profiles is currently active.",
        otherOptions: "Domain, Private, and Public are all valid Windows Firewall profiles.",
        link: "https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/windows-firewall/best-practices-configuring"
      },
      {
        id: 3020,
        type: "medium",
        format: "multiple-choice",
        question: "You need to onboard 500 newly enrolled Windows 11 devices into Microsoft Defender for Endpoint. You have already established the service-to-service connector in the Intune portal. What is the most efficient way to onboard these Intune-managed devices?",
        options: [
          "Download the local onboarding script from the Defender portal and email it to all users to run manually.",
          "Deploy an Endpoint Detection and Response (EDR) policy from the Intune Endpoint Security node.",
          "Use a Group Policy Object (GPO) pointing to a network share.",
          "Purchase a third-party deployment tool."
        ],
        answer: "Deploy an Endpoint Detection and Response (EDR) policy from the Intune Endpoint Security node.",
        explanation: "To onboard devices into Defender for Endpoint via Intune, administrators create an <b>Endpoint detection and response (EDR) policy</b> within the Endpoint Security node.",
        moreDetails: "Because the tenant-to-tenant connection is already established, Intune automatically handles the distribution of the onboarding blob to the targeted Windows devices natively, requiring zero user interaction or manual script execution.",
        otherOptions: "Emailing scripts is inefficient and insecure. GPOs do not apply to modern Intune-only managed devices. Third-party tools are unnecessary.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/endpoint-security-edr-profile"
      }
    ]
  },
  {
    id: 27,
    term: "Advanced Device Lifecycle & Configuration",
    category: "Manage device lifecycle",
    questions: [
      {
        id: 3021,
        type: "hard",
        format: "multiple-choice",
        question: "A corporate-owned Windows 11 device is marked as 'Lost'. You initiate a 'Wipe' action from the Intune portal, but the device is currently powered off and disconnected from the internet. What happens to the Wipe command?",
        options: [
          "It expires after 24 hours if the device does not connect.",
          "It remains queued indefinitely and will execute immediately the next time the device connects to the internet.",
          "It is canceled and must be re-issued manually.",
          "The device relies on a local time-bomb mechanism to wipe itself after 30 days."
        ],
        answer: "It remains queued indefinitely and will execute immediately the next time the device connects to the internet.",
        explanation: "Remote actions like Wipe are queued in the Intune service. Once a device connects to the network and checks in with the MDM service, it receives the queued command and executes it.",
        moreDetails: "There is no 24-hour expiration for critical remote actions like Wipe or Retire. They will remain pending until the device processes them or an administrator explicitly cancels the pending action in the console.",
        otherOptions: "It does not expire, does not need manual re-issuance, and MDM does not use local time-bombs for Wipe.",
        link: "https://learn.microsoft.com/en-us/mem/intune/remote-actions/devices-wipe"
      },
      {
        id: 3022,
        type: "medium",
        format: "multiple-choice",
        question: "You need to hand off a Windows 11 device from an exiting employee to a new hire. You want to remove all user-specific data, apps, and settings, but you must ensure the device remains Entra ID joined and Intune enrolled without requiring the new user to go through the full OOBE. Which remote action should you choose?",
        options: [
          "Wipe",
          "Retire",
          "Fresh Start",
          "Windows Autopilot Reset"
        ],
        answer: "Windows Autopilot Reset",
        explanation: "Windows Autopilot Reset removes personal files, apps, and settings but maintains the device's connection to Entra ID and Intune. The device is returned to a login screen, ready for the next user.",
        moreDetails: "This is the most efficient way to repurpose a device internally. Wipe completely removes the Entra/Intune connection. Fresh Start unenrolls the device if 'retain user data' is unchecked.",
        otherOptions: "Wipe and Fresh Start destroy the enrollment state. Retire only removes corporate data on BYOD.",
        link: "https://learn.microsoft.com/en-us/autopilot/windows-autopilot-reset"
      },
      {
        id: 3023,
        type: "hard",
        format: "multiple-choice",
        question: "You are configuring a Windows 11 kiosk device using the Kiosk configuration profile (Assigned Access). You want to run a legacy Win32 application in full-screen single-app mode. What is a strict requirement for configuring a Win32 app in single-app kiosk mode via Intune?",
        options: [
          "You must package the Win32 app as an MSIX before deploying the profile.",
          "Single-app kiosk mode only supports UWP (Universal Windows Platform) apps or Microsoft Edge; Win32 apps require multi-app kiosk mode.",
          "You must provide the exact AUMID (Application User Model ID) of the Win32 app.",
          "You must configure the device as an Entra ID shared device."
        ],
        answer: "Single-app kiosk mode only supports UWP (Universal Windows Platform) apps or Microsoft Edge; Win32 apps require multi-app kiosk mode.",
        explanation: "In Windows 10/11, single-app kiosk mode (Assigned Access) is architecturally restricted to UWP apps and specific Microsoft Edge kiosk configurations.",
        moreDetails: "To run a legacy Win32 executable as a kiosk, you must configure a multi-app kiosk profile and restrict the UI to only show that single application.",
        otherOptions: "Packaging as MSIX doesn't bypass the limitation. AUMID is used for UWP. Shared device config is a different feature.",
        link: "https://learn.microsoft.com/en-us/windows/configuration/kiosk-single-app"
      },
      {
        id: 3024,
        type: "medium",
        format: "multiple-choice",
        question: "You are using the 'Imported Administrative templates' feature to ingest a custom third-party ADMX file into Intune. Which of the following is a strict prerequisite for the import process to succeed?",
        options: [
          "The ADMX file must be converted into an .MSI package first.",
          "The ADMX file must be uploaded simultaneously with its corresponding ADML (language) file.",
          "The ADMX file must be signed by a trusted Microsoft certificate.",
          "You must deploy a PowerShell script to create the necessary registry keys before importing."
        ],
        answer: "The ADMX file must be uploaded simultaneously with its corresponding ADML (language) file.",
        explanation: "When importing custom ADMX templates into Intune, the portal requires you to upload the .admx file and its associated .adml (language definition) file at the exact same time.",
        moreDetails: "Without the ADML file, Intune cannot parse the display names and descriptions of the settings, and the upload will fail validation.",
        otherOptions: "Conversion to MSI, digital signatures, or pre-requisite registry scripts are not required for ADMX ingestion.",
        link: "https://learn.microsoft.com/en-us/mem/intune/configuration/administrative-templates-import-custom"
      },
      {
        id: 3025,
        type: "hard",
        format: "multiple-choice",
        question: "You deploy a Device Configuration profile that sets the Windows desktop wallpaper to 'ImageA.jpg'. A second configuration profile targets the same device, setting the wallpaper to 'ImageB.jpg'. Both profiles configure the exact same OMA-URI. What is the outcome on the device?",
        options: [
          "The device alternates between the two wallpapers.",
          "The profile that was created most recently takes precedence.",
          "The device goes into a 'Conflict' state in Intune, and the wallpaper setting is not applied or remains unchanged until the conflict is resolved.",
          "The profile assigned to the User group overrides the profile assigned to the Device group."
        ],
        answer: "The device goes into a 'Conflict' state in Intune, and the wallpaper setting is not applied or remains unchanged until the conflict is resolved.",
        explanation: "Intune does not have a built-in tie-breaker or precedence order for conflicting configuration profile settings at the same level (unlike Group Policy).",
        moreDetails: "If two profiles attempt to configure the exact same setting with different values, Intune flags a 'Conflict' and does not apply either setting, leaving the device in its current state until an administrator resolves the targeting overlap.",
        otherOptions: "Intune does not use 'last write wins' or 'user overrides device' logic for configuration conflicts.",
        link: "https://learn.microsoft.com/en-us/mem/intune/configuration/device-profile-troubleshoot#what-happens-when-a-profile-is-deleted-or-no-longer-applicable"
      },
      {
        id: 3026,
        type: "medium",
        format: "multi-select",
        question: "Microsoft strongly recommends using the Settings Catalog over Custom OMA-URI profiles whenever possible. What are TWO significant advantages of using the Settings Catalog? (select <b>TWO</b>)",
        options: [
          "It provides a user-friendly UI to search and configure settings without needing exact OMA-URI strings.",
          "It natively supports dynamic, granular reporting for the status of individual settings per device.",
          "It completely bypasses the Windows MDM client architecture for faster deployment.",
          "It allows you to execute Python and Bash scripts natively on Windows endpoints."
        ],
        multiAnswers: [
          "It provides a user-friendly UI to search and configure settings without needing exact OMA-URI strings.",
          "It natively supports dynamic, granular reporting for the status of individual settings per device."
        ],
        explanation: "The Settings Catalog dynamically builds its UI from the OS's Configuration Service Providers (CSPs), eliminating the error-prone process of manually typing OMA-URI strings.",
        moreDetails: "It also provides granular, per-setting reporting status. Conversely, custom OMA-URIs often just report 'Success' or 'Error' for the whole block, making troubleshooting difficult.",
        otherOptions: "It still relies entirely on the standard Windows MDM client architecture and does not run Python/Bash scripts.",
        link: "https://learn.microsoft.com/en-us/mem/intune/configuration/settings-catalog"
      },
      {
        id: 3027,
        type: "easy",
        format: "multiple-choice",
        question: "A remote user's Windows 11 device is not receiving a newly deployed configuration profile. What is the fastest way for the end-user to manually force the device to check in with Intune for new policies without rebooting?",
        options: [
          "Open Settings > Accounts > Access work or school > select the Entra ID connection > click Info > click Sync.",
          "Run `gpupdate /force` in an elevated Command Prompt.",
          "Open the Microsoft Edge browser and clear the cache.",
          "Disconnect and reconnect to the Wi-Fi network."
        ],
        answer: "Open Settings > Accounts > Access work or school > select the Entra ID connection > click Info > click Sync.",
        explanation: "The 'Access work or school' settings pane provides a direct 'Sync' button that triggers the Windows MDM client to immediately contact the Intune service.",
        moreDetails: "This manually initiates a policy check-in, bypassing the standard 8-hour polling interval. `gpupdate` is strictly for on-premises Group Policy, not MDM.",
        otherOptions: "`gpupdate` does not trigger MDM sync. Clearing browser cache or bouncing Wi-Fi does not trigger a policy sync.",
        link: "https://learn.microsoft.com/en-us/mem/intune/user-help/sync-your-device-manually-windows"
      },
      {
        id: 3028,
        type: "hard",
        format: "multi-select",
        question: "Your organization is using Co-management between Configuration Manager (MECM) and Intune. You want to shift the responsibility for deploying Windows Updates from MECM to Intune. Which TWO actions must be completed? (select <b>TWO</b>)",
        options: [
          "In the Configuration Manager console, move the 'Windows Update policies' workload slider to 'Pilot Intune' or 'Intune'.",
          "Create and assign a Windows Update Ring profile in Intune.",
          "Uninstall the Configuration Manager client agent from the targeted devices.",
          "Disable the WSUS server role entirely on the network."
        ],
        multiAnswers: [
          "In the Configuration Manager console, move the 'Windows Update policies' workload slider to 'Pilot Intune' or 'Intune'.",
          "Create and assign a Windows Update Ring profile in Intune."
        ],
        explanation: "Co-management allows specific workloads to be shifted dynamically between the two systems.",
        moreDetails: "The administrator must move the workload slider in MECM to instruct the local client agent to start listening to Intune for updates. Concurrently, you must actually configure the Update Rings in Intune so the devices have policies to pull down.",
        otherOptions: "Uninstalling the MECM agent breaks co-management entirely. Disabling WSUS is unnecessary and might break servers or non-co-managed clients.",
        link: "https://learn.microsoft.com/en-us/mem/configmgr/comanage/workloads"
      },
      {
        id: 3029,
        type: "medium",
        format: "multiple-choice",
        question: "You are using the Intune Remote Help add-on. A Helpdesk agent needs to troubleshoot a problem on a user's Windows 11 device. The user is logged in with a Standard User account, and the agent needs to run a command prompt as Administrator. How does Remote Help handle this UAC (User Account Control) prompt?",
        options: [
          "The UAC prompt is visible to the agent, and they can enter their own administrator credentials to elevate the process without revealing them to the user.",
          "The UAC prompt is blacked out on the agent's screen for security, requiring the user to type an admin password.",
          "Remote Help automatically bypasses UAC prompts if the agent is a Global Administrator.",
          "The session disconnects immediately when a UAC prompt is triggered."
        ],
        answer: "The UAC prompt is visible to the agent, and they can enter their own administrator credentials to elevate the process without revealing them to the user.",
        explanation: "A key differentiator of Intune Remote Help is its secure interaction with UAC prompts.",
        moreDetails: "If the helper has the 'Elevation' permission in their Intune RBAC role, the UAC prompt renders on their screen, allowing them to securely inject admin credentials without the end-user ever seeing the password.",
        otherOptions: "The screen is not blacked out for authorized helpers. It does not auto-bypass UAC (which would be a security flaw).",
        link: "https://learn.microsoft.com/en-us/mem/intune/remote-actions/remote-help#elevation"
      },
      {
        id: 3030,
        type: "hard",
        format: "multiple-choice",
        question: "You configure a Windows Update Ring to defer Quality updates by 7 days and Feature updates by 30 days. Microsoft releases a critical zero-day security patch out-of-band. How can you ensure this critical patch is installed immediately without altering your standard Update Ring deferral settings?",
        options: [
          "Create an 'Expedite quality updates' profile and target it to the devices.",
          "Pause the Update Ring.",
          "Change the device's network connection to Metered.",
          "Use Delivery Optimization to bypass the deferral."
        ],
        answer: "Create an 'Expedite quality updates' profile and target it to the devices.",
        explanation: "The 'Expedite quality updates' feature in Intune is specifically designed for mitigating zero-day vulnerabilities.",
        moreDetails: "It explicitly overrides normal Update Ring deferrals and deadlines, instructing the device to download and install the specified critical update as quickly as possible, while leaving your standard update cadence intact for future patches.",
        otherOptions: "Pausing stops updates. Metered connections restrict downloads. DO optimizes bandwidth, it doesn't bypass deferrals.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/windows-update-for-business-configure#expedite-windows-quality-updates"
      }
    ]
  },
  {
    id: 28,
    term: "Advanced Device Protection & Compliance",
    category: "Protect devices and data",
    questions: [
      {
        id: 3031,
        type: "hard",
        format: "multiple-choice",
        question: "You have a compliance policy requiring BitLocker to be active. You set the 'Mark device noncompliant' action to have a grace period of 3 days. A device is detected with BitLocker disabled. What is the immediate compliance status of the device in the Intune portal during this 3-day window?",
        options: [
          "In Grace Period",
          "Compliant",
          "Not Evaluated",
          "Noncompliant"
        ],
        answer: "In Grace Period",
        explanation: "When a device fails a compliance check but is within the defined grace period duration, its status is explicitly marked as 'In Grace Period'.",
        moreDetails: "This specific status allows Conditional Access policies to potentially grant access (or provide warnings) without immediately blocking the user, giving them time to remediate the issue.",
        otherOptions: "It is not marked Compliant, nor is it strictly Noncompliant yet. It has already been Evaluated.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/actions-for-noncompliance"
      },
      {
        id: 3032,
        type: "medium",
        format: "multiple-choice",
        question: "You are deploying a Custom Compliance policy in Intune that uses a PowerShell discovery script. What format must the PowerShell script output its findings in so that Intune can parse the results against the JSON rule file?",
        options: [
          "JSON format using Write-Output and ConvertTo-Json",
          "XML format using Export-Clixml",
          "A standard Boolean (True/False) return code",
          "A CSV file saved to a specific local directory"
        ],
        answer: "JSON format using Write-Output and ConvertTo-Json",
        explanation: "Custom compliance discovery scripts in Intune must return a single line of JSON-formatted text to standard output.",
        moreDetails: "Intune reads this JSON dictionary and evaluates its key-value pairs against the rules defined in the uploaded JSON configuration file. Returning flat booleans or XML will result in a script evaluation error.",
        otherOptions: "Intune exclusively expects JSON on standard output for custom compliance.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/compliance-custom-script"
      },
      {
        id: 3033,
        type: "hard",
        format: "multiple-choice",
        question: "A user accesses corporate email on their personal (BYOD) unmanaged iOS device using the Outlook app. You have an App Protection Policy (MAM) targeting Outlook requiring a PIN, and a Device Compliance Policy requiring a 6-digit device passcode. The user's device only has a 4-digit passcode. What happens?",
        options: [
          "The user can access Outlook after setting an App PIN, because device compliance policies do not apply to unmanaged devices.",
          "The user is blocked from accessing Outlook because the device fails the compliance policy.",
          "The App Protection Policy forces the device to upgrade its lock screen passcode to 6 digits.",
          "The Outlook app crashes due to a policy conflict."
        ],
        answer: "The user can access Outlook after setting an App PIN, because device compliance policies do not apply to unmanaged devices.",
        explanation: "Device Compliance policies only evaluate devices that are formally enrolled in Intune (MDM).",
        moreDetails: "For unmanaged BYOD devices, only App Protection Policies (MAM) apply, and they operate strictly at the application layer. The MAM policy will enforce its Outlook PIN, but it cannot read or enforce the OS-level device passcode.",
        otherOptions: "MDM compliance cannot target unmanaged endpoints. MAM cannot force OS-level changes.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/app-protection-policy"
      },
      {
        id: 3034,
        type: "medium",
        format: "multiple-choice",
        question: "You have configured Windows Local Administrator Password Solution (LAPS) via an Intune Endpoint Security Account Protection policy. You specify that the password should be backed up to Entra ID. How does an authorized IT administrator view a device's LAPS password?",
        options: [
          "By navigating to the device properties in the Intune portal and checking the 'Local admin password' tab.",
          "By querying the on-premises Active Directory computer object using ADSI Edit.",
          "By asking the end-user to read it from their Company Portal app.",
          "By downloading an encrypted CSV file from the Endpoint Security node."
        ],
        answer: "By navigating to the device properties in the Intune portal and checking the 'Local admin password' tab.",
        explanation: "When Windows LAPS is configured to back up to Entra ID, authorized administrators (with the correct RBAC permissions) can view the current local administrator password directly in the Intune admin center.",
        moreDetails: "This is found under the specific device's properties (Local admin password tab), or alternatively via the Entra ID portal under Devices.",
        otherOptions: "ADSI Edit is for on-prem LAPS. End-users never see LAPS passwords. There is no CSV download.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/windows-laps-overview"
      },
      {
        id: 3035,
        type: "easy",
        format: "multiple-choice",
        question: "A user loses their Windows 11 laptop, but it is later recovered. During the time it was lost, an IT administrator provided the user with the BitLocker recovery key. To maintain security, what is the most efficient way to ensure the exposed recovery key is no longer valid?",
        options: [
          "Issue a 'BitLocker Key Rotation' remote action from the Intune portal to generate a new key and escrow it to Entra ID.",
          "Decrypt the entire drive and re-encrypt it to generate a new key.",
          "Delete the device from Intune and force the user to re-enroll.",
          "Use a PowerShell script to change the TPM owner password."
        ],
        answer: "Issue a 'BitLocker Key Rotation' remote action from the Intune portal to generate a new key and escrow it to Entra ID.",
        explanation: "Intune supports a 'BitLocker Key Rotation' remote action natively for Windows devices.",
        moreDetails: "This action seamlessly instructs the client to generate a new BitLocker recovery key, securely back it up to Entra ID, and delete the old key, ensuring the previously exposed key is permanently invalidated without requiring full drive decryption.",
        otherOptions: "Decrypting the drive is incredibly slow and risky. Deleting the device is destructive. TPM owner password doesn't change the recovery key.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/encrypt-devices#rotate-bitlocker-recovery-keys"
      },
      {
        id: 3036,
        type: "medium",
        format: "multiple-choice",
        question: "You have deployed an Attack Surface Reduction (ASR) rule to block credential stealing from the Windows local security authority subsystem (lsass.exe). You discover this rule is blocking a legitimate legacy HR application. How do you allow the HR app while keeping the ASR rule active for everything else?",
        options: [
          "Add the path or hash of the HR application executable to the ASR rule exclusions list in the Endpoint Security profile.",
          "Disable the ASR rule entirely for the HR department's devices.",
          "Set the ASR rule to 'Audit mode'.",
          "Code-sign the HR application with a Microsoft certificate."
        ],
        answer: "Add the path or hash of the HR application executable to the ASR rule exclusions list in the Endpoint Security profile.",
        explanation: "ASR profiles in Intune include an 'ASR Only Per Rule Exclusions' or global ASR exclusions setting.",
        moreDetails: "You can specify the file path, folder, or certificate hash of the legitimate application to exempt it from the blocking behavior while maintaining the strict security posture for the rest of the system.",
        otherOptions: "Disabling the rule or using Audit mode lowers security for everything. Code-signing doesn't automatically bypass ASR block rules.",
        link: "https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/enable-attack-surface-reduction#exclude-files-and-folders"
      },
      {
        id: 3037,
        type: "hard",
        format: "multiple-choice",
        question: "A local Windows administrator creates a Windows Defender Firewall rule to block outbound traffic to a specific IP address. However, Intune has pushed an Endpoint Security Firewall policy to the device. By default, how does Windows handle the local rule and the Intune policy?",
        options: [
          "The rules are merged. Both the local rule and the Intune policy rules are evaluated, and the most restrictive action (Block) usually wins.",
          "Intune policies always completely overwrite and delete local rules.",
          "Local rules always override Intune policies because local administrators have the highest priority.",
          "The local rule causes the Intune policy to fail and report an error."
        ],
        answer: "The rules are merged. Both the local rule and the Intune policy rules are evaluated, and the most restrictive action (Block) usually wins.",
        explanation: "By default, Windows Defender Firewall merges local rules with MDM/Group Policy rules.",
        moreDetails: "Administrators can explicitly configure the Intune Firewall policy to 'Disable local rule merging' if they want to ensure only centrally managed rules apply. Otherwise, the engine evaluates both rule sets.",
        otherOptions: "Intune does not automatically delete local rules unless merging is explicitly disabled.",
        link: "https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/windows-firewall/best-practices-configuring#rule-merging"
      },
      {
        id: 3039,
        type: "hard",
        format: "multiple-choice",
        question: "Microsoft Defender for Endpoint detects a highly suspicious file on a Windows 11 device and elevates its 'Machine Risk Score' to High. Which Intune configuration allows you to automatically block this device from accessing corporate email until the threat is remediated?",
        options: [
          "A Device Compliance policy requiring the device to be at or under a specific Machine Risk Score, paired with a Conditional Access policy requiring device compliance.",
          "A Device Configuration profile deploying AppLocker rules.",
          "An App Protection Policy blocking jailbroken devices.",
          "A Windows Update Ring configured to expedite quality updates."
        ],
        answer: "A Device Compliance policy requiring the device to be at or under a specific Machine Risk Score, paired with a Conditional Access policy requiring device compliance.",
        explanation: "The integration between Defender for Endpoint and Intune allows Intune compliance policies to read the 'Machine Risk Score' (Clear, Low, Medium, High).",
        moreDetails: "If the policy requires the score to be 'Clear or Low', a 'High' risk device immediately becomes noncompliant. A Conditional Access policy then enforces the block on corporate resources.",
        otherOptions: "AppLocker manages local app execution, not network access. App Protection is for MAM. Expedited updates don't block access.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/advanced-threat-protection-configure#create-and-assign-compliance-policy-to-set-device-risk-level"
      },
      {
        id: 3040,
        type: "medium",
        format: "multi-select",
        question: "You plan to deploy Windows LAPS (Local Administrator Password Solution) via Intune to manage local admin passwords. Which TWO of the following are prerequisites for managing LAPS natively through Intune and backing up passwords to Entra ID? (select <b>TWO</b>)",
        options: [
          "Devices must be joined to Entra ID or Hybrid Entra ID joined.",
          "You must enable the 'Enable Local Administrator Password Solution (LAPS)' setting in the Entra ID device settings portal.",
          "You must install the legacy LAPS MSI client on the devices.",
          "You must have a site-to-site VPN connected to an on-premises domain controller."
        ],
        multiAnswers: [
          "Devices must be joined to Entra ID or Hybrid Entra ID joined.",
          "You must enable the 'Enable Local Administrator Password Solution (LAPS)' setting in the Entra ID device settings portal."
        ],
        explanation: "Windows LAPS is natively built into Windows 10/11 (starting from the April 2023 update), meaning no MSI client is required.",
        moreDetails: "To back up passwords to Entra ID, the tenant must be explicitly configured to allow it in the Entra ID portal, and the devices must be Entra ID or Hybrid joined.",
        otherOptions: "The MSI client is the legacy on-prem version. A VPN is not required for cloud-backed LAPS.",
        link: "https://learn.microsoft.com/en-us/windows-server/identity/laps/laps-scenarios-azure-active-directory"
      },
      {
        id: 3041,
        type: "hard",
        format: "multiple-choice",
        question: "You want to use Intune to disable the built-in cameras and microphones at the hardware/BIOS level on a fleet of Microsoft Surface laptops. Which Intune feature facilitates this?",
        options: [
          "Device Firmware Configuration Interface (DFCI) profiles",
          "Endpoint Security Antivirus policy",
          "Custom PowerShell scripts utilizing WMI",
          "Attack Surface Reduction (ASR) Device Control"
        ],
        answer: "Device Firmware Configuration Interface (DFCI) profiles",
        explanation: "DFCI allows Intune to securely manage UEFI (BIOS) settings over the air without requiring the traditional BIOS admin password.",
        moreDetails: "It is currently supported by specific OEMs (like Microsoft Surface) and allows administrators to disable hardware components (like cameras, radios, or boot from USB) directly at the firmware level, preventing OS-level overrides.",
        otherOptions: "ASR Device Control manages USB storage at the OS level, not BIOS. Antivirus doesn't manage hardware. WMI scripts can't securely lock BIOS without passwords.",
        link: "https://learn.microsoft.com/en-us/mem/intune/configuration/device-firmware-configuration-interface-windows"
      }
    ]
  }
];
