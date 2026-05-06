export interface Question {
  id: number;
  type: 'easy' | 'medium' | 'hard';
  format?: 'multiple-choice' | 'order-steps' | 'multi-select';
  question: string;
  options: string[];
  answer?: string;
  multiAnswers?: string[];
  explanation: string;
  moreDetails: string;
  otherOptions: string;
  link: string;
}

export interface TermData {
  id: number;
  term: string;
  category: string;
  questions: Question[];
}

export const domain1Dataset: TermData[] = [
  {
    id: 1,
    term: "Windows Autopilot Provisioning",
    category: "Deploy Windows client",
    questions: [
      {
        id: 105,
        type: "easy",
        question: "Which Windows Autopilot scenario is best suited for re-purposing an existing device for a new user while ensuring it is restored to a business-ready state?",
        options: [
          "Autopilot Pre-provisioned deployment",
          "Autopilot Reset",
          "Windows Autopilot self-deploying mode",
          "Hybrid Entra ID join"
        ],
        answer: "Autopilot Reset",
        explanation: "<b>Windows Autopilot Reset</b> removes personal files, apps, and settings, but keeps the device's Entra ID join and Intune enrollment intact, bringing it back to a clean, business-ready state for the next user.",
        moreDetails: "This is far faster than a full wipe and re-enrollment. It can be triggered remotely from the Intune console or locally from the Windows lock screen using a specific key combination and administrative credentials.",
        otherOptions: "Pre-provisioned mode is for staging new devices. Self-deploying is for kiosks. Hybrid join is for integrating with local AD.",
        link: "https://learn.microsoft.com/en-us/autopilot/windows-autopilot-reset"
      }
    ]
  },
  {
    id: 3,
    term: "Microsoft Deployment Toolkit (MDT)",
    category: "Deploy Windows client",
    questions: [
      {
        id: 111,
        type: "easy",
        question: "What is the primary function of the <b>Microsoft Deployment Toolkit (MDT)</b>?",
        options: [
          "To provide a cloud-native MDM solution replacing Intune.",
          "To automate the creation of reference images and the deployment of Windows operating systems on-premises.",
          "To manage conditional access policies for Entra ID.",
          "To provide real-time endpoint analytics."
        ],
        answer: "To automate the creation of reference images and the deployment of Windows operating systems on-premises.",
        explanation: "<b>Microsoft Deployment Toolkit (MDT)</b> is a free, on-premises tool used to automate desktop and server deployments, including creating custom reference images (WIM files).",
        moreDetails: "MDT uses Task Sequences to orchestrate the installation of the OS, drivers, applications, and updates, typically utilized in traditional, image-based deployment scenarios.",
        otherOptions: "MDT is an on-prem deployment tool, not a cloud MDM, identity policy manager, or analytics engine.",
        link: "https://learn.microsoft.com/en-us/windows/deployment/deploy-windows-mdt/get-started-with-the-microsoft-deployment-toolkit"
      },
      {
        id: 113,
        type: "hard",
        question: "Which component must be installed alongside MDT to provide the pre-installation environment (Windows PE) necessary for booting bare-metal clients?",
        options: [
          "Windows Server Update Services (WSUS)",
          "Microsoft Assessment and Planning (MAP) Toolkit",
          "Windows Assessment and Deployment Kit (Windows ADK) and the Windows PE add-on",
          "Microsoft Intune Management Extension"
        ],
        answer: "Windows Assessment and Deployment Kit (Windows ADK) and the Windows PE add-on",
        explanation: "MDT heavily relies on the <b>Windows ADK</b> (and the separate Windows PE add-on) to generate the boot images (Windows Preinstallation Environment) used to start bare-metal deployments.",
        moreDetails: "Without the ADK and WinPE add-on installed on the MDT server, the deployment share cannot generate the boot ISOs or WIMs necessary to initialize the task sequence on a new machine.",
        otherOptions: "WSUS is for updates. MAP is for readiness assessments. Intune Management Extension is for cloud policy deployment.",
        link: "https://learn.microsoft.com/en-us/windows/deployment/deploy-windows-mdt/prepare-for-windows-deployment-with-mdt"
      },
      {
        id: 114,
        type: "medium",
        question: "What technology is typically used in conjunction with MDT to allow computers to boot over the network (PXE boot) for deployment?",
        options: [
          "Hyper-V Virtual Switches",
          "Windows Deployment Services (WDS)",
          "Remote Desktop Services (RDS)",
          "BranchCache"
        ],
        answer: "Windows Deployment Services (WDS)",
        explanation: "<b>Windows Deployment Services (WDS)</b> is a server role that works with MDT to provide the PXE (Preboot Execution Environment) boot capabilities, allowing client machines to boot from the network and load the MDT WinPE image.",
        moreDetails: "While WDS can deploy images on its own, it is considered best practice to use WDS solely for PXE booting, while letting MDT handle the complex task sequences and image application.",
        otherOptions: "Hyper-V is virtualization. RDS is for remote sessions. BranchCache is for WAN optimization.",
        link: "https://learn.microsoft.com/en-us/windows/deployment/deploy-windows-mdt/deploy-a-windows-10-image-using-mdt"
      },
      {
        id: 115,
        type: "medium",
        question: "Which two text files does MDT use to automate the Windows Welcome screens and define variables for the deployment share?",
        options: [
          "Unattend.xml and Sysprep.inf",
          "CustomSettings.ini and Bootstrap.ini",
          "Config.xml and Install.wim",
          "DefaultDomainPolicy.xml and GptTmpl.inf"
        ],
        answer: "CustomSettings.ini and Bootstrap.ini",
        explanation: "MDT uses <b>CustomSettings.ini</b> and <b>Bootstrap.ini</b> to control the deployment rules. These files define variables that automate the deployment wizard (Lite Touch Installation), such as skipping the domain join prompt or setting the locale.",
        moreDetails: "Bootstrap.ini is processed first when WinPE boots to connect to the deployment share, while CustomSettings.ini is processed later to evaluate logic based on MAC addresses, gateways, or hardware models.",
        otherOptions: "Unattend.xml handles OS setup phases, not MDT wizard phases. Config.xml/Install.wim are generic deployment files. GptTmpl is for security templates.",
        link: "https://learn.microsoft.com/en-us/windows/deployment/deploy-windows-mdt/configure-mdt-settings"
      }
    ]
  },
  {
    id: 4,
    term: "Windows Client Upgrades",
    category: "Deploy Windows client",
    questions: [


      {
        id: 119,
        type: "hard",
        question: "Which command-line tool can you use to silently initiate an in-place upgrade of Windows while automatically accepting the EULA?",
        options: [
          "setup.exe /auto upgrade /quiet /showoobe none /eula accept",
          "dism.exe /online /upgrade-os",
          "sfc /scannow /upgrade",
          "bootrec.exe /RebuildBcd"
        ],
        answer: "setup.exe /auto upgrade /quiet /showoobe none /eula accept",
        explanation: "The Windows setup engine (`setup.exe`) supports command-line switches to automate the upgrade process. `/auto upgrade` triggers the upgrade, `/quiet` hides the UI, and `/eula accept` bypasses the license agreement prompt.",
        moreDetails: "This method is frequently used inside custom scripts or endpoint management tools (like Configuration Manager or MDT) to force an upgrade in the background without user interaction.",
        otherOptions: "DISM does not perform full OS upgrades. SFC is for system file checking. Bootrec is for fixing boot loaders.",
        link: "https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/windows-setup-command-line-options"
      },
    ]
  },
  {
    id: 5,
    term: "User State Migration Tool (USMT)",
    category: "Deploy Windows client",
    questions: [

      {
        id: 123,
        type: "hard",
        question: "In USMT, what is a <b>Hard-Link Migration Store</b>?",
        options: [
          "A store saved to a physical external USB hard drive.",
          "A migration method that uses NTFS hard links to leave the files on the disk without copying them, enabling rapid wipe-and-load on the same physical device.",
          "An encrypted connection to a cloud backup service.",
          "A mandatory hardware token required to unlock the data."
        ],
        answer: "A migration method that uses NTFS hard links to leave the files on the disk without copying them, enabling rapid wipe-and-load on the same physical device.",
        explanation: "A <b>Hard-Link Migration Store</b> maps files to their current physical location on the disk using NTFS hard links. This means the files are not actually duplicated, making the ScanState and LoadState processes nearly instantaneous.",
        moreDetails: "This is the optimal method for PC Refresh scenarios (reinstalling Windows on the exact same hardware), as it saves massive amounts of time and disk space.",
        otherOptions: "It is software-based (NTFS feature), not related to USB drives, cloud backups, or hardware tokens.",
        link: "https://learn.microsoft.com/en-us/windows/deployment/usmt/usmt-hard-link-migration-store"
      },
      {
        id: 124,
        type: "medium",
        question: "Which default XML file in USMT dictates the migration rules for application settings (e.g., Office configurations, browser settings)?",
        options: [
          "MigUser.xml",
          "MigDocs.xml",
          "MigApp.xml",
          "Config.xml"
        ],
        answer: "MigApp.xml",
        explanation: "<b>MigApp.xml</b> contains the rules required to migrate settings for supported applications. When you run ScanState or LoadState with this XML file, it ensures that application preferences are carried over.",
        moreDetails: "MigUser.xml and MigDocs.xml govern user files, folders, and standard document locations. Administrators can also create custom XML files for bespoke line-of-business apps.",
        otherOptions: "MigUser/MigDocs handles files. Config.xml is generated to exclude/include specific components dynamically.",
        link: "https://learn.microsoft.com/en-us/windows/deployment/usmt/usmt-xml-reference"
      },
      {
        id: 125,
        type: "easy",
        question: "USMT is included as part of which larger Microsoft deployment package?",
        options: [
          "Microsoft Deployment Toolkit (MDT)",
          "Windows Assessment and Deployment Kit (Windows ADK)",
          "Microsoft Intune Management Extension",
          "Windows Server Update Services (WSUS)"
        ],
        answer: "Windows Assessment and Deployment Kit (Windows ADK)",
        explanation: "<b>USMT</b> is installed as a component of the <b>Windows ADK</b>. Once the ADK is installed, the USMT binaries (ScanState, LoadState) are available in the installation directory.",
        moreDetails: "MDT and Configuration Manager both leverage the USMT binaries provided by the ADK to automate user state migrations within their task sequences.",
        otherOptions: "MDT uses USMT but does not natively contain it (it requires the ADK). Intune and WSUS do not include USMT.",
        link: "https://learn.microsoft.com/en-us/windows-hardware/get-started/adk-install"
      }
    ]
  },

  {
    id: 7,
    term: "Windows 365 Cloud PCs",
    category: "Deploy Windows client",
    questions: [

      {
        id: 132,
        type: "medium",
        question: "In Windows 365 Enterprise, what mechanism handles the automatic creation and assignment of Cloud PCs to users?",
        options: [
          "Task Sequences",
          "Provisioning Policies in Intune",
          "Azure Resource Manager (ARM) templates",
          "Group Policy Objects (GPOs)"
        ],
        answer: "Provisioning Policies in Intune",
        explanation: "Cloud PCs are automatically created and assigned to users based on <b>Provisioning Policies</b> configured in the Microsoft Intune admin center.",
        moreDetails: "A provisioning policy defines the network connection, the OS image (gallery or custom), and the Entra ID group. When a user with a Windows 365 license is added to that group, the Cloud PC is provisioned automatically.",
        otherOptions: "Task sequences are MDT/SCCM. ARM templates are for Azure infrastructure. GPOs are for local AD policies.",
        link: "https://learn.microsoft.com/en-us/windows-365/enterprise/provisioning"
      },
      {
        id: 133,
        type: "hard",
        question: "What network configuration must be created in Intune to allow a Windows 365 Enterprise Cloud PC to communicate with on-premises resources via a site-to-site VPN?",
        options: [
          "An Azure Network Connection (ANC)",
          "A Local Area Connection profile",
          "A BranchCache configuration",
          "An ExpressRoute directly attached to the user's laptop"
        ],
        answer: "An Azure Network Connection (ANC)",
        explanation: "To route Cloud PC traffic to an organization's on-premises network, you must configure an <b>Azure Network Connection (ANC)</b> in Intune.",
        moreDetails: "The ANC binds the Cloud PC's virtual NIC to an Azure vNet that your organization controls. This vNet can then use Azure VPN Gateway or ExpressRoute to reach on-premises Active Directory and file servers.",
        otherOptions: "Local Area Connection is for physical PCs. BranchCache optimizes downloads. You don't attach ExpressRoute to user laptops.",
        link: "https://learn.microsoft.com/en-us/windows-365/enterprise/azure-network-connections"
      },
      {
        id: 135,
        type: "easy",
        question: "What is a key administrative difference between Windows 365 Business and Windows 365 Enterprise?",
        options: [
          "Business supports 1000 users, Enterprise supports 300.",
          "Enterprise requires and integrates deeply with Microsoft Intune for management, while Business is meant for smaller organizations without Intune.",
          "Enterprise runs on Linux servers.",
          "Business does not support Windows 11."
        ],
        answer: "Enterprise requires and integrates deeply with Microsoft Intune for management, while Business is meant for smaller organizations without Intune.",
        explanation: "<b>Windows 365 Enterprise</b> is designed to be managed via Microsoft Intune, treating the Cloud PCs exactly like physical devices. <b>Windows 365 Business</b> bypasses Intune and is managed directly by users or via basic portal settings.",
        moreDetails: "Enterprise requires users to be licensed for Intune and Entra ID P1. Business just requires a credit card and provides a static, unmanaged Cloud PC instance.",
        otherOptions: "Business is capped at 300 seats. They both run Windows OS. Both support Windows 11.",
        link: "https://learn.microsoft.com/en-us/windows-365/compare-editions"
      }
    ]
  },
  {
    id: 8,
    term: "Azure Virtual Desktop (AVD)",
    category: "Deploy Windows client",
    questions: [
      {
        id: 138,
        type: "hard",
        question: "In a pooled AVD environment, which technology is recommended to abstract the user profile from the underlying VM, ensuring fast login times across different session hosts?",
        options: [
          "Roaming User Profiles via Active Directory",
          "Folder Redirection",
          "FSLogix Profile Containers",
          "OneDrive Sync Client"
        ],
        answer: "FSLogix Profile Containers",
        explanation: "Microsoft recommends using <b>FSLogix Profile Containers</b> in AVD. It stores the entire user profile inside a VHDX file on a network share. When the user logs in, the VHDX dynamically attaches to the session host.",
        moreDetails: "This dynamic attachment makes the profile load nearly instantly, solving the latency and corruption issues associated with traditional Roaming Profiles or Folder Redirection in non-persistent VDI environments.",
        otherOptions: "Roaming profiles and folder redirection are legacy and slow. OneDrive syncs files, but doesn't handle the AppData or registry profile state efficiently for multi-session.",
        link: "https://learn.microsoft.com/en-us/azure/virtual-desktop/fslogix-directory-entra-id"
      },
      {
        id: 139,
        type: "medium",
        question: "What role does <b>RemoteApp</b> play in an Azure Virtual Desktop deployment?",
        options: [
          "It is the app installed on mobile phones to manage the Azure portal.",
          "It allows administrators to stream specific individual applications to a user's device, rather than a full desktop experience.",
          "It is an antivirus agent.",
          "It forces the VM to restart remotely."
        ],
        answer: "It allows administrators to stream specific individual applications to a user's device, rather than a full desktop experience.",
        explanation: "<b>RemoteApp</b> streaming allows you to publish individual applications (like a legacy accounting app). To the end-user, the app opens in a window and looks like it is running locally, but it is actually running in Azure.",
        moreDetails: "This is highly useful for providing access to resource-heavy or data-sensitive applications without forcing users to adopt a completely different desktop interface.",
        otherOptions: "It is an application streaming tech, not a management app, antivirus, or reboot tool.",
        link: "https://learn.microsoft.com/en-us/azure/virtual-desktop/remote-app-streaming"
      },
      {
        id: 140,
        type: "medium",
        question: "Which load-balancing algorithm should you configure in an AVD Host Pool to minimize Azure compute costs by filling up one VM before powering on or routing to the next?",
        options: [
          "Breadth-first",
          "Depth-first",
          "Round-robin",
          "Randomized"
        ],
        answer: "Depth-first",
        explanation: "The <b>Depth-first</b> load-balancing algorithm routes user sessions to a single session host until its maximum session limit is reached, and then moves to the next host.",
        moreDetails: "This is cost-effective because it allows you to utilize autoscaling rules to shut down unused VMs. Breadth-first spreads users out evenly across all VMs, providing better performance but requiring all VMs to remain powered on.",
        otherOptions: "Breadth-first maximizes performance. Round-robin is a network concept similar to breadth-first. Randomized is not an AVD option.",
        link: "https://learn.microsoft.com/en-us/azure/virtual-desktop/host-pool-load-balancing"
      }
    ]
  },
  {
    id: 10,
    term: "Device Authentication & Identity",
    category: "Deploy Windows client",
    questions: [
      {
        id: 146,
        type: "easy",
        question: "What is the key difference between an 'Entra ID Registered' device and an 'Entra ID Joined' device?",
        options: [
          "Registered devices are corporately owned; Joined devices are mobile phones only.",
          "Registered devices are typically personal BYOD devices using a Microsoft account, while Joined devices are corporately owned and fully integrated with the organizational directory.",
          "Joined devices do not require an internet connection.",
          "There is no difference."
        ],
        answer: "Registered devices are typically personal BYOD devices using a Microsoft account, while Joined devices are corporately owned and fully integrated with the organizational directory.",
        explanation: "<b>Entra ID Registered</b> (formerly Azure AD Registered) is for Bring Your Own Device (BYOD), associating a personal device with an organizational account. <b>Entra ID Joined</b> is for corporate-owned devices, making the organization the primary authority over the device.",
        moreDetails: "Joined devices allow users to log in using their organizational credentials natively at the Windows lock screen, and they can be fully managed by Intune.",
        otherOptions: "Registered devices are not strictly corporate. Joined devices still need internet for initial auth.",
        link: "https://learn.microsoft.com/en-us/entra/identity/devices/concept-directory-join"
      },
      {
        id: 148,
        type: "hard",
        question: "Which feature completely replaces passwords with strong two-factor authentication on Windows 10/11 devices, consisting of a device-bound credential and a PIN or biometric?",
        options: [
          "Windows Defender Credential Guard",
          "Windows Hello for Business",
          "Microsoft Authenticator App",
          "BitLocker Drive Encryption"
        ],
        answer: "Windows Hello for Business",
        explanation: "<b>Windows Hello for Business (WHfB)</b> replaces passwords by using a cryptographic key pair bound to the device's TPM chip. This key is unlocked using a user's gesture (PIN, fingerprint, or facial recognition).",
        moreDetails: "Because the private key never leaves the TPM, WHfB is highly resistant to phishing and credential theft, fulfilling strict passwordless and MFA requirements.",
        otherOptions: "Credential Guard protects NTLM/Kerberos hashes. Authenticator is a mobile app. BitLocker encrypts hard drives.",
        link: "https://learn.microsoft.com/en-us/windows/security/identity-protection/hello-for-business/hello-overview"
      },
      {
        id: 150,
        type: "hard",
        question: "When troubleshooting an Entra ID join failure, which command-line tool provides detailed status about the device's current identity state and TPM capability?",
        options: [
          "ipconfig /all",
          "dsregcmd /status",
          "gpresult /r",
          "certutil -store"
        ],
        answer: "dsregcmd /status",
        explanation: "Running <b>dsregcmd /status</b> from a command prompt outputs extensive diagnostic information regarding the device's Azure AD join state, PRT (Primary Refresh Token) status, and hardware (TPM) details.",
        moreDetails: "It is the primary tool used by endpoint administrators to verify if a Hybrid join succeeded or why an Autopilot device failed to acquire its user token.",
        otherOptions: "ipconfig shows network details. gpresult shows GPOs. certutil shows certificates.",
        link: "https://learn.microsoft.com/en-us/entra/identity/devices/troubleshoot-device-cmd"
      }
    ]
  },
  {
    id: 991,
    term: "Deployment Scenario Steps",
    category: "Deploy Windows client",
    questions: [
      {
        id: 151,
        type: "hard",
        format: "order-steps",
        question: "Arrange the steps to deploy a custom Windows image using the Microsoft Deployment Toolkit (MDT) from scratch:",
        options: [
          "Install the Windows ADK and the WinPE add-on.",
          "Install the Microsoft Deployment Toolkit (MDT).",
          "Create a new Deployment Share.",
          "Import the operating system files (Windows ISO).",
          "Create a new Task Sequence.",
          "Update the Deployment Share to generate boot images."
        ],
        answer: "Install ADK -> Install MDT -> Create Share -> Import OS -> Create Task Sequence -> Update Share",
        explanation: "To use MDT, you first need the prerequisite ADK and WinPE add-on. Then you install MDT, create the Deployment Share, import the OS, configure the Task Sequence, and finally update the share to generate the bootable WIM/ISO.",
        moreDetails: "Updating the deployment share is the final crucial step because it compiles the Bootstrap.ini and CustomSettings.ini into the WinPE boot image.",
        otherOptions: "N/A",
        link: "https://learn.microsoft.com/en-us/windows/deployment/deploy-windows-mdt/prepare-for-windows-deployment-with-mdt"
      },
      {
        id: 153,
        type: "hard",
        format: "order-steps",
        question: "Arrange the steps to configure a Windows Autopilot deployment profile in Microsoft Intune:",
        options: [
          "Extract the hardware hash from the Windows client.",
          "Upload a CSV file containing the hardware hash into Intune.",
          "Create a dynamic or assigned Entra ID group for Autopilot devices.",
          "Create a Windows Autopilot deployment profile.",
          "Assign the deployment profile to the Entra ID device group."
        ],
        answer: "Extract hash -> Upload CSV -> Create Group -> Create Profile -> Assign Profile",
        explanation: "First, you must obtain and register the device identity (hash). Then you group those devices. After grouping, you create the deployment profile and assign it to that group.",
        moreDetails: "OEMs can automate the hardware hash upload, but for manual enrollment, the Get-WindowsAutopilotInfo PowerShell script is used.",
        otherOptions: "N/A",
        link: "https://learn.microsoft.com/en-us/autopilot/profiles"
      },
      {
        id: 157,
        type: "hard",
        format: "order-steps",
        question: "Arrange the steps to enroll a tenant into Windows Autopatch:",
        options: [
          "Ensure licensing prerequisites (e.g., Windows 10/11 Enterprise E3/E5) are met.",
          "Run the Autopatch Readiness Assessment tool in the Intune admin center.",
          "Provide Global Administrator consent to grant Autopatch service permissions.",
          "Review the automatically created 'Windows Autopatch Device Registration' Entra ID group.",
          "Add target devices to the registration group so they are assigned to deployment rings."
        ],
        answer: "Check Licensing -> Run Readiness Assessment -> Grant Consent -> Review Registration Group -> Add Target Devices",
        explanation: "Windows Autopatch is a managed service. You must first ensure your tenant is technically and financially ready. Once you grant Microsoft the necessary permissions, they provision the backend policies and groups. You then simply add devices to the master group, and Autopatch handles the ring distribution.",
        moreDetails: "Autopatch will automatically sort devices into Test, First, Fast, and Broad rings.",
        otherOptions: "N/A",
        link: "https://learn.microsoft.com/en-us/windows/deployment/windows-autopatch/operate/windows-autopatch-tenant-enrollment"
      }
    ]
  },
  {
    id: 993,
    term: "Multi-Select Deployment Scenarios",
    category: "Deploy Windows client",
    questions: [
      {
        id: 158,
        type: "medium",
        format: "multi-select",
        question: "Which of the following are valid methods to extract the hardware hash from a Windows device for Windows Autopilot enrollment? (Select TWO)",
        options: [
          "Running the Get-WindowsAutopilotInfo PowerShell script.",
          "Exporting the hash from the BIOS/UEFI firmware menu.",
          "Using the Microsoft Endpoint Configuration Manager (MECM) Autopilot hardware inventory task.",
          "Typing 'hash.exe' in the Command Prompt."
        ],
        multiAnswers: [
          "Running the Get-WindowsAutopilotInfo PowerShell script.",
          "Using the Microsoft Endpoint Configuration Manager (MECM) Autopilot hardware inventory task."
        ],
        explanation: "The hardware hash (Device ID) can be retrieved manually using the <b>Get-WindowsAutopilotInfo</b> script or harvested at scale using <b>Configuration Manager</b> co-management inventory.",
        moreDetails: "OEMs can also directly upload the hardware hash during the purchase process.",
        otherOptions: "The BIOS/UEFI does not store the Autopilot hash format. 'hash.exe' is not a valid Windows command.",
        link: "https://learn.microsoft.com/en-us/autopilot/add-devices"
      },
      {
        id: 159,
        type: "hard",
        format: "multi-select",
        question: "You are designing a Windows Autopilot Self-Deploying mode scenario. Which of the following requirements MUST be met for this specific mode to succeed? (Select <b>THREE</b>)",
        options: [
          "The device must have a physical TPM 2.0 chip that supports device attestation.",
          "The device must be connected to an Ethernet (wired) network.",
          "The deployment profile must be configured for Entra ID Join (not Hybrid).",
          "The user must enter their Entra ID password.",
          "The device must be running a Pro, Enterprise, or Education edition of Windows."
        ],
        multiAnswers: [
          "The device must have a physical TPM 2.0 chip that supports device attestation.",
          "The deployment profile must be configured for Entra ID Join (not Hybrid).",
          "The device must be running a Pro, Enterprise, or Education edition of Windows."
        ],
        explanation: "Self-Deploying mode securely provisions a device without user credentials. It requires <b>TPM 2.0 attestation</b> to authenticate the hardware to Entra ID, must be <b>Entra ID Joined</b> only, and requires a supported business edition of Windows.",
        moreDetails: "Because it lacks user authentication, it relies entirely on the TPM's cryptographic proof. It does not require a wired connection if Wi-Fi profiles are pushed or selected at OOBE, and users explicitly DO NOT enter passwords.",
        otherOptions: "Wi-Fi is supported during OOBE. Passwords are not used in self-deploying mode.",
        link: "https://learn.microsoft.com/en-us/autopilot/self-deploying"
      },
      {
        id: 160,
        type: "medium",
        format: "multi-select",
        question: "Which of the following scenarios are supported use cases for the Microsoft Deployment Toolkit (MDT)? (Select TWO)",
        options: [
          "Creating a custom Windows 11 reference image (golden image).",
          "Deploying Windows OS to bare-metal servers across the network via PXE boot.",
          "Managing mobile devices like iOS and Android.",
          "Pushing cloud-based Conditional Access policies."
        ],
        multiAnswers: [
          "Creating a custom Windows 11 reference image (golden image).",
          "Deploying Windows OS to bare-metal servers across the network via PXE boot."
        ],
        explanation: "MDT is a traditional imaging tool used to create <b>reference images</b> and deploy Windows via <b>PXE/WDS</b> to bare-metal hardware.",
        moreDetails: "While Autopilot is the modern cloud approach, MDT is still supported for local, heavy-imaging scenarios.",
        otherOptions: "MDT cannot manage mobile devices or cloud policies; those are Intune and Entra ID functions.",
        link: "https://learn.microsoft.com/en-us/windows/deployment/deploy-windows-mdt/get-started-with-the-microsoft-deployment-toolkit"
      },
      {
        id: 161,
        type: "easy",
        format: "multi-select",
        question: "When configuring a Windows Autopilot deployment profile, which of the following Out-of-Box Experience (OOBE) settings can you choose to HIDE from the end-user? (Select <b>THREE</b>)",
        options: [
          "Privacy settings.",
          "End User License Agreement (EULA).",
          "Account options (preventing local admin creation).",
          "The Wi-Fi connection screen (if not plugged into Ethernet).",
          "The 'Welcome to Windows' voiceover by Cortana."
        ],
        multiAnswers: [
          "Privacy settings.",
          "End User License Agreement (EULA).",
          "Account options (preventing local admin creation)."
        ],
        explanation: "Autopilot profiles allow admins to streamline OOBE by hiding the <b>Privacy settings</b>, <b>EULA</b>, and controlling <b>Account type</b> (Standard vs Admin).",
        moreDetails: "Cortana voiceover was disabled by default in newer Windows versions anyway. You cannot hide the Wi-Fi screen if the device has no internet connection, as internet is strictly required to download the Autopilot profile.",
        otherOptions: "Wi-Fi cannot be hidden if needed for connection. Cortana voiceover is a deprecated/irrelevant setting.",
        link: "https://learn.microsoft.com/en-us/autopilot/profiles"
      },
      {
        id: 162,
        type: "hard",
        format: "multi-select",
        question: "You need to migrate 500 devices from Windows 10 to Windows 11 using an In-Place Upgrade. Which tools can natively execute this upgrade at scale? (Select THREE)",
        options: [
          "Microsoft Intune (Feature update profiles).",
          "Microsoft Endpoint Configuration Manager (Task Sequences).",
          "Windows Autopatch.",
          "User State Migration Tool (USMT).",
          "Windows Autopilot."
        ],
        multiAnswers: [
          "Microsoft Intune (Feature update profiles).",
          "Microsoft Endpoint Configuration Manager (Task Sequences).",
          "Windows Autopatch."
        ],
        explanation: "In-Place Upgrades can be driven by <b>Intune Feature Updates</b>, managed automatically via <b>Windows Autopatch</b>, or executed locally using <b>ConfigMgr Task Sequences</b>.",
        moreDetails: "Autopilot is for provisioning a clean OS, not performing an in-place upgrade. USMT migrates data between separate OS installs; it does not perform the OS upgrade itself.",
        otherOptions: "USMT moves data. Autopilot provisions new/reset devices.",
        link: "https://learn.microsoft.com/en-us/windows/deployment/deploy-windows-11"
      }
    ]
  },
  {
    id: 997,
    term: "Multi-Select (Select Two) Deployment Scenarios",
    category: "Deploy Windows client",
    questions: [
      {
        id: 164,
        type: "hard",
        format: "multi-select",
        question: "When using the Enrollment Status Page (ESP) in Intune, which of the following scenarios will cause the ESP to fail and block the user from reaching the desktop? (Select TWO)",
        options: [
          "A required Win32 app assigned to the device fails to install.",
          "An 'Available' app fails to install.",
          "The device fails to acquire an Entra ID Primary Refresh Token (PRT).",
          "A required Wi-Fi profile assigned to the user fails to apply during the Device setup phase."
        ],
        multiAnswers: [
          "A required Win32 app assigned to the device fails to install.",
          "The device fails to acquire an Entra ID Primary Refresh Token (PRT)."
        ],
        explanation: "The ESP is designed to block access if critical setup steps fail. If a <b>Required</b> app fails, or the device fails the underlying <b>Entra ID device authentication (PRT acquisition)</b>, the ESP will halt and display an error.",
        moreDetails: "User-targeted policies (like a Wi-Fi profile for the user) failing during the Device phase won't block the device phase. Available apps are not tracked by ESP.",
        otherOptions: "Available apps are ignored by ESP. User-targeted profiles don't block the device phase.",
        link: "https://learn.microsoft.com/en-us/mem/intune/enrollment/windows-enrollment-status"
      },
      {
        id: 165,
        type: "medium",
        format: "multi-select",
        question: "Which of the following represent valid deployment rings you should configure when managing Windows Update for Business (WUfB) via Intune? (Select TWO)",
        options: [
          "A 'Pilot' or 'Test' ring for IT staff to receive updates immediately (0-day deferral).",
          "A 'Broad' ring for general users to receive updates after a deferral period (e.g., 7-14 days).",
          "An 'Opt-out' ring where devices never receive quality updates.",
          "A 'Pre-release' ring for installing Windows Insider Dev Channel builds on production servers."
        ],
        multiAnswers: [
          "A 'Pilot' or 'Test' ring for IT staff to receive updates immediately (0-day deferral).",
          "A 'Broad' ring for general users to receive updates after a deferral period (e.g., 7-14 days)."
        ],
        explanation: "A standard update strategy utilizes multiple rings to minimize risk. A <b>Pilot ring</b> with zero deferral validates the update, while a <b>Broad ring</b> defers the update for the general population until confidence is established.",
        moreDetails: "Opting out entirely violates security baselines. Production servers should not run Insider builds.",
        otherOptions: "Opting out of updates is insecure. Insider builds are not meant for production servers.",
        link: "https://learn.microsoft.com/en-us/windows/deployment/update/waas-deployment-rings-windows-10-updates"
      }
    ]
  },
  {
    id: 99,
    term: "2026 Scenario Based Questions",
    category: "Deploy Windows client",
    questions: [
      {
        id: 1001,
        type: "hard",
        format: "multiple-choice",
        question: "Your organization is deploying 500 new laptops using Windows Autopilot Pre-provisioned deployment. During the technician flow, several devices fail at the 'Securing your hardware' step with an error indicating TPM attestation timeout. The devices have TPM 2.0. What is the most likely cause, and how should you resolve it?",
        options: [
          "The devices are running Windows 10 Home; upgrade them to Windows 11 Pro.",
          "The TPM 2.0 firmware contains known vulnerabilities and is blocked by Microsoft; update the OEM firmware.",
          "The devices do not have internet access; connect them to a proxy server.",
          "The user does not have an Intune license assigned; assign an Intune license to the technician."
        ],
        answer: "The TPM 2.0 firmware contains known vulnerabilities and is blocked by Microsoft; update the OEM firmware.",
        explanation: "In Autopilot Pre-provisioned (and Self-Deploying) modes, strict TPM attestation is required. If the TPM firmware is outdated or has known vulnerabilities (like the Infineon flaw), the Microsoft attestation service will reject it, causing a timeout or error.",
        moreDetails: "Updating the OEM firmware resolves the attestation block. It is not a licensing issue because the technician flow does not require user credentials or user licenses at that stage.",
        otherOptions: "Autopilot requires Pro/Enterprise, but Home would fail earlier. Internet access is required, but a proxy wouldn't fix a specific TPM attestation error if internet is otherwise working.",
        link: "https://learn.microsoft.com/en-us/autopilot/troubleshoot-device-enrollment"
      },
      {
        id: 1002,
        type: "hard",
        format: "multiple-choice",
        question: "A company acquired a startup and wants to provide the startup's developers with access to internal on-premises file servers. The developers are scattered globally and use their own personal MacBooks. You decide to deploy Windows 365 Cloud PCs. Which edition and configuration must you use to allow routing to the on-premises file servers?",
        options: [
          "Windows 365 Business with a custom image.",
          "Windows 365 Enterprise using an Azure Network Connection (ANC).",
          "Windows 365 Enterprise deployed entirely on the Microsoft Hosted Network.",
          "Windows 365 Business with a Site-to-Site VPN configured on the Cloud PC."
        ],
        answer: "Windows 365 Enterprise using an Azure Network Connection (ANC).",
        explanation: "To route traffic from a Cloud PC back to an on-premises network, you must use Windows 365 Enterprise and configure an Azure Network Connection (ANC).",
        moreDetails: "The ANC binds the Cloud PC's virtual NIC to an Azure vNet that the organization controls, which can then be connected to on-premises via Azure VPN Gateway or ExpressRoute. Windows 365 Business does not support ANCs.",
        otherOptions: "Business does not support ANC. Enterprise on Microsoft Hosted Network cannot natively reach on-premises without third-party VPN software installed inside the VM, which isn't the native architectural solution.",
        link: "https://learn.microsoft.com/en-us/windows-365/enterprise/azure-network-connections"
      },
      {
        id: 1003,
        type: "hard",
        format: "multiple-choice",
        question: "You are attempting an in-place upgrade from Windows 10 to Windows 11 using Intune Feature Updates. However, a group of machines continually rolls back to Windows 10. The Intune console simply reports 'Failed'. Which local tool should you run on the affected endpoints to diagnose the exact cause of the rollback?",
        options: [
          "Event Viewer (System Log)",
          "SetupDiag.exe",
          "Windows Performance Analyzer (WPA)",
          "MDMDiagReport"
        ],
        answer: "SetupDiag.exe",
        explanation: "SetupDiag is a standalone diagnostic tool (included natively in Windows 11, and available for Windows 10) that parses Windows Setup log files to determine why an upgrade failed or rolled back.",
        moreDetails: "It specifically examines files like setupact.log and setuperr.log, matching them against known rules to identify driver incompatibilities, third-party antivirus blocks, or disk space issues causing the rollback.",
        otherOptions: "Event Viewer is too generic. WPA is for performance profiling. MDMDiagReport is for Intune MDM policy failures, not the OS setup engine itself.",
        link: "https://learn.microsoft.com/en-us/windows/deployment/upgrade/setupdiag"
      },
      {
        id: 1004,
        type: "hard",
        format: "multiple-choice",
        question: "You need to migrate 200 users from old desktops to new laptops. Due to strict compliance laws, no user data can be stored on external drives or cloud services (like OneDrive) during the transition. Both the old and new devices are connected to the same gigabit LAN. Which USMT configuration provides the most efficient migration in this scenario?",
        options: [
          "Use a Hard-Link Migration Store on the old desktops.",
          "Use ScanState to output to a network share, and LoadState to pull from it.",
          "Use a compressed Migration Store on a local secondary partition.",
          "Use the Windows Easy Transfer wizard over a crossover cable."
        ],
        answer: "Use ScanState to output to a network share, and LoadState to pull from it.",
        explanation: "Because the migration is from old hardware to new hardware (PC Replacement), a Hard-Link store cannot be used (it only works for wipe-and-load on the same physical disk). Therefore, storing the state on a secure network share is the only viable option that avoids external drives or cloud storage.",
        moreDetails: "USMT can encrypt the store on the network share for compliance. A Hard-Link store is impossible between two distinct physical PCs.",
        otherOptions: "Hard-Link requires the same physical volume. Secondary partition also requires the same physical PC. Windows Easy Transfer is deprecated.",
        link: "https://learn.microsoft.com/en-us/windows/deployment/usmt/usmt-migration-store-types"
      },
      {
        id: 1005,
        type: "hard",
        format: "multiple-choice",
        question: "Your organization uses Co-management with Microsoft Configuration Manager and Intune. You recently moved the 'Client apps' workload slider to Intune. However, a newly deployed Intune Win32 app is not installing on a subset of devices. What is the most likely cause?",
        options: [
          "The devices are running Windows 10 Enterprise.",
          "The Configuration Manager client agent is broken or disabled on those devices.",
          "The Intune Win32 app size exceeds 30GB.",
          "The 'Client apps' workload requires the 'Device Configuration' workload to be moved to Intune first."
        ],
        answer: "The Configuration Manager client agent is broken or disabled on those devices.",
        explanation: "Even when the 'Client apps' workload is moved to Intune, Intune Win32 app deployment heavily relies on the Intune Management Extension (IME). In a co-managed environment, the IME relies on the health of the Configuration Manager client to function correctly and evaluate workloads.",
        moreDetails: "If the SCCM client is broken, the device might not correctly recognize that the workload has shifted, causing the IME to halt app deployments to avoid conflicts.",
        otherOptions: "Windows 10 Enterprise is supported. The default Win32 app limit is 30GB (previously 8GB), but the question doesn't imply it's oversized. Workloads can be moved independently.",
        link: "https://learn.microsoft.com/en-us/mem/configmgr/comanage/workloads"
      },
      {
        id: 1006,
        type: "hard",
        format: "multiple-choice",
        question: "Your organization is hiring 500 remote workers who live in rural areas with low-bandwidth internet. You need to deploy laptops to them using Windows Autopilot. To minimize the amount of data downloaded over their home networks during initial setup, which Autopilot strategy is most appropriate?",
        options: [
          "Use Autopilot User-Driven Mode with Delivery Optimization configured for 'Internet' peers.",
          "Use Autopilot Pre-provisioned deployment (White Glove) at the corporate office before shipping the devices.",
          "Use Autopilot Self-Deploying mode shipped directly from the OEM.",
          "Use Windows 365 Business instead of physical laptops."
        ],
        answer: "Use Autopilot Pre-provisioned deployment (White Glove) at the corporate office before shipping the devices.",
        explanation: "Autopilot Pre-provisioned deployment (formerly White Glove) allows IT staff or the OEM to pre-load all policies, applications, and configurations onto the device on a high-speed corporate network.",
        moreDetails: "When the remote user receives the pre-provisioned device, they simply turn it on and log in. The device only needs to sync the user-specific payload and identity token, drastically reducing the bandwidth required over their slow home network.",
        otherOptions: "User-Driven and Self-Deploying modes download the entire payload (gigabytes of apps) over the user's home connection. Delivery Optimization 'Internet' peers won't help enough on rural connections. Windows 365 doesn't solve the issue of setting up the physical thin-client.",
        link: "https://learn.microsoft.com/en-us/autopilot/pre-provision"
      },
      {
        id: 1007,
        type: "hard",
        format: "multiple-choice",
        question: "You want to integrate your existing on-premises Microsoft Configuration Manager environment with the Microsoft Intune cloud. You want helpdesk staff to be able to initiate a device restart or run a script on a Configuration Manager client directly from the web-based Intune admin center, without moving the 'Device Configuration' workload to Intune. Which feature must you configure?",
        options: [
          "Co-management Workload transition",
          "Tenant Attach",
          "Cloud Management Gateway (CMG)",
          "Endpoint Analytics"
        ],
        answer: "Tenant Attach",
        explanation: "Tenant Attach instantly connects your Configuration Manager environment to the Intune tenant without needing to enroll the devices in Intune MDM or shift any co-management workloads.",
        moreDetails: "Once Tenant Attach is enabled, Configuration Manager devices synchronize into the Intune admin portal. Helpdesk staff can then perform actions like Resource Explorer, CMPivot, scripts, and endpoint restarts directly from the cloud console.",
        otherOptions: "Co-management workloads move the authority of management (e.g., updates or apps). CMG allows managing internet-facing clients, but doesn't project them into the Intune web console natively like Tenant Attach. Endpoint analytics is for telemetry.",
        link: "https://learn.microsoft.com/en-us/mem/configmgr/tenant-attach/"
      },
      {
        id: 1008,
        type: "hard",
        format: "multiple-choice",
        question: "You are setting up Windows 10/11 Subscription Activation to step up devices from Pro to Enterprise. However, when users sign in, the devices remain on Windows Pro. Checking the event logs (Event ID 82) reveals a failure to acquire the subscription token. You verify the users have E5 licenses assigned. What is a common cause for this token acquisition failure during the initial login?",
        options: [
          "The devices are running Windows 11 Pro Education.",
          "A Conditional Access policy is requiring Multi-Factor Authentication (MFA) for the 'Universal Store Service APIs and Web Application' cloud app.",
          "The local Active Directory schema has not been extended for Windows 11.",
          "The devices are connected to an IPv6 network."
        ],
        answer: "A Conditional Access policy is requiring Multi-Factor Authentication (MFA) for the 'Universal Store Service APIs and Web Application' cloud app.",
        explanation: "Subscription Activation relies on the device quietly reaching out to the Microsoft Universal Store API in the background using the user's Entra ID token to verify the E3/E5 license.",
        moreDetails: "If a Conditional Access policy enforces MFA on all cloud apps (including the Universal Store API), the background token acquisition fails silently because it cannot present an interactive MFA prompt to the user at that specific OS-level layer. The API must be excluded from strict MFA requirements.",
        otherOptions: "Pro Education can step up to Enterprise Education. AD Schema is irrelevant for cloud Subscription Activation. IPv6 does not break the licensing API.",
        link: "https://learn.microsoft.com/en-us/windows/deployment/windows-10-subscription-activation#troubleshoot"
      },
      {
        id: 1009,
        type: "hard",
        format: "multiple-choice",
        question: "You are using the Microsoft Deployment Toolkit (MDT) combined with Windows Deployment Services (WDS) to PXE boot clients. PXE boot works perfectly for clients on the same VLAN as the WDS server, but clients on a different VLAN fail to find the boot server. How should you resolve this network boundary issue?",
        options: [
          "Install a separate WDS server on every VLAN.",
          "Configure DHCP Scope Options 66 and 67 on the router for the remote VLAN.",
          "Configure IP Helpers (DHCP Relay) on the router for the remote VLAN to forward UDP port 67/68 and port 4011 traffic to the WDS server.",
          "Enable IGMP Snooping on the network switches."
        ],
        answer: "Configure IP Helpers (DHCP Relay) on the router for the remote VLAN to forward UDP port 67/68 and port 4011 traffic to the WDS server.",
        explanation: "PXE relies on broadcast DHCP traffic, which routers drop by default, preventing clients on remote VLANs from discovering the WDS server.",
        moreDetails: "Microsoft explicitly recommends using IP Helpers (DHCP Relay agents) over DHCP Scope Options 66/67. IP Helpers correctly forward the PXE broadcast requests to the WDS server. Using DHCP Options is unsupported for UEFI clients and can cause routing failures.",
        otherOptions: "Multiple WDS servers is inefficient. DHCP options 66/67 are deprecated and not recommended by Microsoft for UEFI. IGMP snooping is for multicast imaging, not the initial PXE boot discovery.",
        link: "https://learn.microsoft.com/en-us/troubleshoot/mem/configmgr/os-deployment/boot-from-pxe-server"
      },
      {
        id: 1010,
        type: "hard",
        format: "multiple-choice",
        question: "You are testing Windows Autopilot Self-Deploying mode using Generation 2 virtual machines in Hyper-V. The deployment repeatedly fails with an error '0x800705b4' (Timeout) during the TPM attestation phase, even though you have enabled the virtual TPM (vTPM) on the VM. Why is this failing?",
        options: [
          "Hyper-V virtual TPMs do not support the specific hardware-based Endorsement Key (EK) certificate attestation required by Microsoft's Autopilot service.",
          "Generation 2 VMs use UEFI, which is incompatible with Self-Deploying mode.",
          "You must allocate at least 4 virtual processors to process the encryption rapidly.",
          "The vTPM is running version 1.2, but Autopilot requires 2.0."
        ],
        answer: "Hyper-V virtual TPMs do not support the specific hardware-based Endorsement Key (EK) certificate attestation required by Microsoft's Autopilot service.",
        explanation: "Autopilot Self-Deploying mode strictly requires TPM 2.0 with device attestation. The attestation process requires the TPM to have a valid Endorsement Key (EK) certificate injected by a physical manufacturer (OEM).",
        moreDetails: "Virtual TPMs created in Hyper-V or other hypervisors do not possess a trusted hardware EK certificate chained to a known OEM root CA. Therefore, the Microsoft Autopilot service rejects the virtual TPM during the attestation phase, making it impossible to test Self-Deploying mode purely in a VM.",
        otherOptions: "Gen 2 VMs (UEFI) are fully supported. Processor count doesn't cause attestation failure. Hyper-V vTPMs *are* version 2.0, but lack the physical EK cert.",
        link: "https://learn.microsoft.com/en-us/autopilot/self-deploying#requirements"
      },
      {
        id: 1011,
        type: "hard",
        format: "multiple-choice",
        question: "You are managing Windows 11 upgrades via Intune. You want to ensure that if a critical line-of-business application breaks after the upgrade, users have 30 days to roll back to Windows 10, instead of the default 10 days. Which Intune policy must you configure to achieve this?",
        options: [
          "Feature updates for Windows 10 and later",
          "Update rings for Windows 10 and later",
          "Quality updates for Windows 10 and later",
          "Windows Autopatch deployment rings"
        ],
        answer: "Update rings for Windows 10 and later",
        explanation: "The setting to configure the 'Set feature update uninstall period' (rollback window) is located within the 'Update rings for Windows 10 and later' profile in Intune.",
        moreDetails: "While you use the 'Feature updates' policy to target the specific Windows 11 version, the underlying behavior of the update engine (including the rollback timer, which can be extended from 10 to 60 days) is governed by the Update Ring assigned to the device.",
        otherOptions: "Feature updates profile sets the target version but lacks the rollback timer setting. Quality updates handle monthly cumulative patches. Autopatch manages rings automatically but the specific manual setting is in the native Update Ring profile.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/windows-update-settings"
      },
      {
        id: 1012,
        type: "hard",
        format: "multiple-choice",
        question: "A user's Windows Autopilot-enrolled laptop suffers a complete hardware failure, requiring the OEM to replace the motherboard. After the repair, the device boots up but fails to enter the Autopilot OOBE sequence. Instead, it presents a standard consumer Windows setup screen. Why did this happen, and how do you fix it?",
        options: [
          "The hard drive was wiped; you must re-image it with a custom WIM file.",
          "The motherboard replacement changed the device's hardware hash; you must deregister the old hash and upload the new hash to the Autopilot service.",
          "The device lost its Intune license; reassign the license to the device object.",
          "The OEM installed Windows 11 Home; upgrade it to Pro using a provisioning package."
        ],
        answer: "The motherboard replacement changed the device's hardware hash; you must deregister the old hash and upload the new hash to the Autopilot service.",
        explanation: "Autopilot heavily relies on a device's unique hardware hash, which is strongly tied to motherboard components (like the TPM and SMBIOS UUID).",
        moreDetails: "When a motherboard is replaced, the hardware hash changes entirely. The Microsoft Autopilot service no longer recognizes the repaired device. The IT admin (or the OEM repair center) must deregister the original device from Intune/Autopilot, capture the new hardware hash, and upload it before the device will recognize its Autopilot profile again.",
        otherOptions: "Wiping the drive doesn't break Autopilot if the hash matches. Devices don't hold Intune licenses natively (users do, or device licenses are separate but not the cause here). While Windows Home could be an issue, the primary reason a repaired device drops Autopilot is the hash change.",
        link: "https://learn.microsoft.com/en-us/autopilot/autopilot-motherboard-replacement"
      },
      {
        id: 1013,
        type: "hard",
        format: "multiple-choice",
        question: "A Windows 10 PC encounters a blue screen error and can no longer boot into the operating system. The hard drive is encrypted with BitLocker, but you have the recovery key. You need to migrate the user's data to a new PC using the User State Migration Tool (USMT). How can you perform an offline migration?",
        options: [
          "Boot the broken PC into Windows PE, unlock the drive using `manage-bde`, and run `ScanState.exe` with the `/offline` switch.",
          "Remove the hard drive, plug it into the new PC via USB, and run `LoadState.exe` directly against the external drive.",
          "Use the Microsoft Diagnostics and Recovery Toolset (DaRT) to push the data to OneDrive.",
          "Offline migration is not supported by USMT; the OS must be bootable."
        ],
        answer: "Boot the broken PC into Windows PE, unlock the drive using `manage-bde`, and run `ScanState.exe` with the `/offline` switch.",
        explanation: "USMT fully supports offline migrations. If the OS cannot boot, you can boot the machine using Windows PE (Preinstallation Environment).",
        moreDetails: "Once in WinPE, you must first unlock the BitLocker volume using the recovery key and the `manage-bde` command. Then, you execute `ScanState.exe` with the `/offline` parameter pointing to the Windows directory on the unlocked drive. This extracts the user state into a migration store without needing the host OS to be running.",
        otherOptions: "LoadState cannot pull directly from a raw external drive without ScanState creating a store first. DaRT is a recovery tool but doesn't natively do USMT migrations to OneDrive. Offline migration IS supported.",
        link: "https://learn.microsoft.com/en-us/windows/deployment/usmt/usmt-offline-migration-reference"
      },
      {
        id: 1014,
        type: "hard",
        format: "multiple-choice",
        question: "You are deploying a custom Windows 11 image to a fleet of new NVMe-equipped workstations using the Microsoft Deployment Toolkit (MDT). The deployment fails immediately after the 'Install Operating System' step with a BSOD (INACCESSIBLE_BOOT_DEVICE). The WinPE phase booted and formatted the drive perfectly. What is the most likely driver configuration issue in MDT?",
        options: [
          "The NVMe mass storage drivers were injected into the WinPE boot image but were not assigned to the 'Inject Drivers' step for the actual Windows OS.",
          "The WinPE boot image is 32-bit, but the OS is 64-bit.",
          "The workstations require a BIOS update to support Windows 11.",
          "The Task Sequence is missing the 'Format and Partition Disk' step."
        ],
        answer: "The NVMe mass storage drivers were injected into the WinPE boot image but were not assigned to the 'Inject Drivers' step for the actual Windows OS.",
        explanation: "In MDT, driver injection happens in two distinct phases: drivers for WinPE (to see the network and disks during setup) and drivers for the full OS.",
        moreDetails: "Because WinPE successfully formatted the drive, it had the correct NVMe storage drivers. However, when the machine rebooted into the newly applied Windows OS image to finish setup, it blue-screened. This means the 'Inject Drivers' step in the Task Sequence failed to copy those critical NVMe drivers into the actual OS driver store.",
        otherOptions: "MDT handles cross-architecture deployments fine if configured. A BIOS update wouldn't cause a specific boot device BSOD if WinPE saw it. If it formatted the drive, the format step exists.",
        link: "https://learn.microsoft.com/en-us/windows/deployment/deploy-windows-mdt/deploy-a-windows-10-image-using-mdt#step-5-inject-drivers"
      },
      {
        id: 1015,
        type: "hard",
        format: "multiple-choice",
        question: "Your environment is co-managed. You recently moved the 'Endpoint Protection' workload to Intune. You configure a Microsoft Defender Antivirus policy in Intune to enable Real-time Protection, but the Intune portal shows the policy is in a 'Conflict' state. Upon checking the endpoint, Real-time protection is disabled. What is the most likely cause of this conflict?",
        options: [
          "A legacy Group Policy Object (GPO) applied to the domain-joined device is explicitly disabling Real-time Protection.",
          "The Intune policy is assigned to a User group instead of a Device group.",
          "The device needs to be rebooted to switch the workload.",
          "Configuration Manager requires a specific client setting to release the Defender APIs to Intune."
        ],
        answer: "A legacy Group Policy Object (GPO) applied to the domain-joined device is explicitly disabling Real-time Protection.",
        explanation: "Even when a workload is moved to Intune via Co-management, local Active Directory Group Policy Objects (GPOs) still apply to the device.",
        moreDetails: "By default, GPO settings take precedence over Intune MDM policies unless the `MDMWinsOverGP` policy is explicitly configured. If an old GPO is configuring Defender, it will conflict with the Intune policy, causing the Intune portal to report a conflict and the GPO setting to win locally.",
        otherOptions: "User vs Device assignment doesn't cause a conflict status on its own. Rebooting doesn't resolve policy conflicts. Co-management gracefully handles the API handoff without special client settings.",
        link: "https://learn.microsoft.com/en-us/mem/intune/configuration/custom-settings-windows-10#mdmwinsovergp"
      }
    ]
  },
  {
    id: 991,
    term: "Advanced Scenarios (2026 MD-102 Updates)",
    category: "Deploy Windows client",
    questions: [
      {
        id: 1001,
        type: "hard",
        question: "You are implementing Windows Autopilot for pre-provisioned deployment (formerly White Glove). A technician boots a new laptop and presses the Windows key five times, but the pre-provisioning screen fails with a 'hardware mismatch' error. The device was recently repaired by the OEM and the motherboard was replaced. What is the most efficient way to resolve this issue?",
        options: [
          "Delete the Intune device record and ask the user to manually join Entra ID.",
          "Deregister the old hardware hash from the Intune Autopilot devices list, capture the new hash, and upload it.",
          "Reinstall Windows 11 using a USB drive and bypass Autopilot.",
          "Assign a new Intune license to the technician performing the pre-provisioning."
        ],
        answer: "Deregister the old hardware hash from the Intune Autopilot devices list, capture the new hash, and upload it.",
        explanation: "When a motherboard is replaced, the hardware hash changes. The device must be deregistered and re-registered with the new hash for Autopilot to recognize it.",
        moreDetails: "Autopilot pre-provisioning strictly relies on the hardware hash for identity. A motherboard replacement invalidates the existing hash, causing a mismatch during the TPM attestation phase of pre-provisioning.",
        otherOptions: "Deleting the Intune record doesn't fix the Autopilot registration. Reinstalling Windows doesn't fix the hash. The technician's license is irrelevant to the hardware hash.",
        link: "https://learn.microsoft.com/en-us/autopilot/autopilot-motherboard-replacement"
      },
      {
        id: 1002,
        type: "hard",
        question: "Your organization uses Windows 365 Enterprise. You create a provisioning policy to deploy Cloud PCs to a new group of users. However, the provisioning fails with an 'Azure Network Connection (ANC) health check failed' error. Upon investigation, you find the ANC is failing the 'DNS resolution' check. The Cloud PCs need to resolve on-premises Active Directory domains. What is the most likely cause?",
        options: [
          "The Azure Virtual Network (vNet) is configured to use Azure-provided DNS instead of custom DNS servers pointing to the on-premises domain controllers.",
          "The users do not have a valid Intune license assigned.",
          "The Cloud PC gallery image is outdated and missing network drivers.",
          "The on-premises Active Directory Domain Services (AD DS) does not have Entra Connect Sync installed."
        ],
        answer: "The Azure Virtual Network (vNet) is configured to use Azure-provided DNS instead of custom DNS servers pointing to the on-premises domain controllers.",
        explanation: "For Windows 365 Enterprise to connect to on-premises resources and join a domain (Hybrid Entra ID join), the Azure vNet MUST use custom DNS servers that can resolve the on-premises AD domain.",
        moreDetails: "If the vNet uses default Azure-provided DNS, it cannot resolve private on-premises DNS zones, causing the ANC health check to fail before provisioning even begins.",
        otherOptions: "Licensing and image issues would cause different errors (like provisioning timeout or entitlement errors). Entra Connect Sync is required for Hybrid Join, but DNS resolution is checked at the network layer first.",
        link: "https://learn.microsoft.com/en-us/windows-365/enterprise/health-checks#dns-resolution"
      },
      {
        id: 1003,
        type: "hard",
        question: "You are planning a massive in-place upgrade from Windows 10 to Windows 11 using Intune Feature Update policies. Several devices in the 'Marketing' group consistently fail the upgrade and rollback to Windows 10. The setupdiag.exe tool reveals that a legacy marketing application is blocking the upgrade. You cannot uninstall this app before the upgrade. How can you ensure the upgrade proceeds automatically while handling this incompatible app?",
        options: [
          "Deploy a custom OMA-URI policy to ignore all application compatibility warnings during the upgrade.",
          "Use a custom action script (SetupConfig.ini or setupcomplete.cmd) to migrate or bypass the application's registry keys during the upgrade.",
          "Switch from Intune Feature Updates to an MDT Task Sequence and use the 'Wipe and Load' method.",
          "Disable Windows Defender SmartScreen temporarily during the upgrade window."
        ],
        answer: "Use a custom action script (SetupConfig.ini or setupcomplete.cmd) to migrate or bypass the application's registry keys during the upgrade.",
        explanation: "Windows Setup allows for custom actions during feature upgrades via SetupConfig.ini or by running scripts at specific phases (like pre-commit or post-commit) to handle incompatible software.",
        moreDetails: "Administrators can leverage Intune to stage these scripts on the endpoints. These scripts can temporarily disable the app's services, modify registry keys to trick the compatibility checker, or uninstall/reinstall the app seamlessly during the upgrade process.",
        otherOptions: "You cannot simply 'ignore' hard compatibility blockers via OMA-URI. Wipe and load works but is not an 'in-place upgrade' and destroys user state. SmartScreen has nothing to do with OS upgrade app compatibility.",
        link: "https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/windows-setup-custom-actions"
      },
      {
        id: 1004,
        type: "hard",
        question: "A remote user's device is co-managed (Intune and Configuration Manager). The user reports severe OS corruption and needs a fresh start. You initiate an 'Autopilot Reset' from the Intune console. What will be the state of the Configuration Manager client after the reset successfully completes?",
        options: [
          "The Configuration Manager client will be completely uninstalled, and the device will be Intune-only.",
          "The Configuration Manager client remains installed and fully functional, retaining its unique GUID and site assignment.",
          "The device will blue screen because Autopilot Reset is not supported on co-managed devices.",
          "The Configuration Manager client is removed, but a new installation is automatically triggered via an Intune Win32 app deployment."
        ],
        answer: "The Configuration Manager client remains installed and fully functional, retaining its unique GUID and site assignment.",
        explanation: "An Autopilot Reset removes personal files, apps, and settings, but it intentionally preserves the Entra ID join, Intune enrollment, AND the Configuration Manager client state (if co-managed).",
        moreDetails: "This is a key advantage of Autopilot Reset over a standard Windows Wipe. It ensures that the management stack (both Intune and ConfigMgr) is immediately ready for the next user without requiring a full re-provisioning cycle.",
        otherOptions: "Autopilot Reset explicitly protects the ConfigMgr client from being wiped. It does not uninstall it or require reinstallation.",
        link: "https://learn.microsoft.com/en-us/autopilot/windows-autopilot-reset#what-does-windows-autopilot-reset-do"
      },
      {
        id: 1005,
        type: "hard",
        question: "You are migrating a fleet of Windows 10 devices to modern management. The devices are currently managed exclusively by on-premises Configuration Manager. You enable Co-management in ConfigMgr and set the 'Client apps' workload to Intune. However, Intune Win32 apps are not deploying to the clients. What is the most likely missing step?",
        options: [
          "The devices must be Hybrid Entra ID joined and registered in Intune before they can receive Intune policies.",
          "You must uninstall the Configuration Manager Software Center.",
          "Intune Win32 apps require the device to be upgraded to Windows 11.",
          "You must disable the 'Application Management' Client Setting in Configuration Manager."
        ],
        answer: "The devices must be Hybrid Entra ID joined and registered in Intune before they can receive Intune policies.",
        explanation: "Co-management requires the device to have a presence in both on-premises AD/ConfigMgr and the cloud (Entra ID/Intune). If the devices are not Hybrid Entra ID joined and successfully enrolled in Intune, the workload shift means nothing.",
        moreDetails: "Simply moving the slider in the ConfigMgr console tells the ConfigMgr client to stop processing that workload, but if the Intune Management Extension cannot authenticate and pull policies from Intune (due to lack of Entra ID/Intune enrollment), the workload falls into a black hole.",
        otherOptions: "Software Center coexists with Company Portal. Windows 11 is not required. You do not disable the client setting; Co-management handles the orchestration dynamically.",
        link: "https://learn.microsoft.com/en-us/mem/configmgr/comanage/how-to-prepare-win10"
      },
      {
        id: 1006,
        type: "hard",
        question: "You are configuring a Hybrid Entra ID joined Windows Autopilot deployment (user-driven mode). The device successfully completes the TPM attestation and downloads the Autopilot profile, but fails with error 0x80180014 during the 'Device preparation' phase. What is the most likely cause of this failure?",
        options: [
          "The Intune Connector for Active Directory is offline or lacks permissions to create computer objects in the specified on-premises OU.",
          "The device is not connected to a physical Ethernet cable.",
          "The user's Entra ID password has expired.",
          "The Autopilot profile is configured to hide the EULA."
        ],
        answer: "The Intune Connector for Active Directory is offline or lacks permissions to create computer objects in the specified on-premises OU.",
        explanation: "In a Hybrid Autopilot deployment, Intune must request the Intune Connector (installed on an on-premises server) to create the computer object in local Active Directory (Offline Domain Join). If this connector is down or lacks delegation permissions to the target OU, the process fails early.",
        moreDetails: "The ODJ (Offline Domain Join) blob cannot be generated, causing the ESP to halt at the 'Device preparation' step before any policies or apps are applied.",
        otherOptions: "Wi-Fi is supported for Autopilot. Expired passwords fail at authentication, not device prep. Hiding the EULA is a standard supported configuration.",
        link: "https://learn.microsoft.com/en-us/autopilot/windows-autopilot-hybrid"
      },
      {
        id: 1007,
        type: "hard",
        question: "A user is provisioning a Windows 365 Enterprise Cloud PC. They are physically located in the United Kingdom, but when they log in, the Cloud PC's Windows display language is set to US English and the timezone is PST. How can you ensure Cloud PCs automatically match the user's localized requirements upon provisioning?",
        options: [
          "Create a custom script in Intune to scrape the user's IP address and change the region settings dynamically.",
          "Configure the 'Language and region' settings directly within the Windows 365 Provisioning Policy in Intune.",
          "Instruct the user to change their location settings in the Entra ID 'My Account' portal before provisioning.",
          "Windows 365 Enterprise only supports US English; localization requires Azure Virtual Desktop."
        ],
        answer: "Configure the 'Language and region' settings directly within the Windows 365 Provisioning Policy in Intune.",
        explanation: "Administrators can configure the Language and Region setting within the Windows 365 Provisioning policy, allowing the Cloud PC to automatically download the correct language pack and set the locale during the automated provisioning process.",
        moreDetails: "This prevents users from having to manually download language packs or change time zones, providing a seamless localized experience immediately upon first login.",
        otherOptions: "Custom scripts are unnecessary since this is a native feature. Entra ID account portals don't dictate Cloud PC OS language natively. W365 fully supports localization.",
        link: "https://learn.microsoft.com/en-us/windows-365/enterprise/provisioning-policy-language"
      },
      {
        id: 1008,
        type: "hard",
        question: "You are deploying Windows 11 feature updates via Intune to a fleet of older 32GB storage tablets. The updates are consistently failing due to insufficient disk space. What Intune configuration should you deploy prior to the update to maximize the chances of success without manual intervention?",
        options: [
          "Deploy a custom PowerShell script that deletes the C:\\Windows\\System32 folder.",
          "Configure a Storage Sense policy in Intune to aggressively clean temporary files, empty the recycle bin, and hydrate OneDrive files to the cloud.",
          "Deploy an Intune Win32 app that installs a third-party disk cleaning utility.",
          "Increase the virtual memory paging file size via an OMA-URI."
        ],
        answer: "Configure a Storage Sense policy in Intune to aggressively clean temporary files, empty the recycle bin, and hydrate OneDrive files to the cloud.",
        explanation: "Intune can manage Storage Sense settings natively via the Settings Catalog. By configuring it to run daily, delete temp files, and push unused OneDrive files back to 'online-only' (dehydration), you can automatically free up critical gigabytes of space required for the Windows 11 upgrade engine.",
        moreDetails: "This is the Microsoft-recommended, native, and safe way to clear disk space proactively across a fleet.",
        otherOptions: "Deleting System32 destroys the OS. Third-party tools are unnecessary and introduce security risks. Increasing the paging file reduces available storage space.",
        link: "https://learn.microsoft.com/en-us/mem/intune/configuration/settings-catalog"
      },
      {
        id: 1009,
        type: "hard",
        question: "You are using the Microsoft Deployment Toolkit (MDT) to deploy Windows 10 to a lab of 50 identical computers via PXE boot. You want to fully automate the Lite Touch Installation (LTI) so it never prompts for the local administrator password or computer name. Which file must you edit, and what variables must you include?",
        options: [
          "Unattend.xml: Add `AdminPassword` and `ComputerName` to the OOBE phase.",
          "CustomSettings.ini: Set `SkipAdminPassword=YES`, `AdminPassword=YourPwd`, `SkipComputerName=YES`, and `OSDComputerName=Lab-%SERIALNUMBER%`.",
          "Bootstrap.ini: Set `FullyAutomate=True`.",
          "Sysprep.inf: Set `AutoAdminLogon=1`."
        ],
        answer: "CustomSettings.ini: Set `SkipAdminPassword=YES`, `AdminPassword=YourPwd`, `SkipComputerName=YES`, and `OSDComputerName=Lab-%SERIALNUMBER%`.",
        explanation: "In MDT, the `CustomSettings.ini` file controls the behavior of the Lite Touch Deployment Wizard. By setting the `Skip...` variables to `YES` and providing the corresponding values, the wizard bypasses those screens, enabling a Zero Touch-like experience.",
        moreDetails: "Using dynamic variables like `%SERIALNUMBER%` or `%MACADDRESS%` allows you to automatically generate unique computer names without manual input.",
        otherOptions: "Unattend.xml is used by Windows Setup, but MDT's wizard intercepts these prompts first. Bootstrap.ini handles the initial PE connection. Sysprep is for image capture, not deployment wizard automation.",
        link: "https://learn.microsoft.com/en-us/windows/deployment/deploy-windows-mdt/configure-mdt-settings"
      },
      {
        id: 1010,
        type: "hard",
        question: "During a Windows Autopilot deployment, a massive 15GB CAD application assigned as a 'Required' Win32 app is causing the Enrollment Status Page (ESP) to hit its timeout limit, failing the deployment. The app is not required for the user to start working immediately. How can you resolve this without removing the app assignment?",
        options: [
          "Change the app assignment from 'Required' to 'Available'.",
          "Ensure the CAD app is NOT selected in the ESP setting 'Block device use until these required apps are installed if they are assigned to the user/device'.",
          "Increase the ESP timeout to 24 hours.",
          "Convert the Win32 app to an MSIX package."
        ],
        answer: "Ensure the CAD app is NOT selected in the ESP setting 'Block device use until these required apps are installed if they are assigned to the user/device'.",
        explanation: "By explicitly selecting only critical apps (like VPN clients or AV) in the 'Block device use...' ESP setting, the device will allow the user to reach the desktop once those specific critical apps install.",
        moreDetails: "The massive 15GB CAD application will continue to download and install silently in the background while the user is already productive on the desktop, preventing the ESP timeout failure.",
        otherOptions: "Making it 'Available' requires manual user intervention to install. Increasing timeout to 24h is a terrible user experience. MSIX doesn't solve the file size/download time bottleneck.",
        link: "https://learn.microsoft.com/en-us/mem/intune/enrollment/windows-enrollment-status"
      }
    ]
  },
  {
    id: 994,
    term: "Intune/Entra RBAC Roles (Advanced)",
    category: "Deploy Windows client",
    questions: [
      {
        id: 1016,
        type: "hard",
        format: "multiple-choice",
        question: "An IT admin needs to view all device configurations, compliance policies, and app assignments in the Intune admin center to perform an audit. They must not be able to modify any settings or run remote actions. Which of the following Entra ID roles provides the LEAST privileged access to accomplish this?",
        options: [
          "Global Reader",
          "Security Reader",
          "Intune Administrator",
          "Read Only Operator"
        ],
        answer: "Global Reader",
        explanation: "The <b>Global Reader</b> role in Entra ID provides read-only access to almost all administrative features in Microsoft 365, including Intune.",
        moreDetails: "The Intune 'Read Only Operator' is an Intune-specific built-in role, not an Entra ID role. The question explicitly asks for an Entra ID role, making Global Reader the correct answer.",
        otherOptions: "Security Reader focuses on security alerts and Defender. Intune Admin has write access. Read Only Operator is an Intune role, not an Entra ID role.",
        link: "https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#global-reader"
      },
      {
        id: 1017,
        type: "hard",
        format: "multiple-choice",
        question: "You have created a custom Intune role named 'Regional IT' and assigned it to a group of administrators. You want to ensure these administrators can only manage devices located in the 'Europe' office. Which combination of Intune RBAC features is required to achieve this?",
        options: [
          "A custom role assignment applied to an 'All Devices' scope, using a Device Category of 'Europe'.",
          "A custom role assignment targeting an Entra ID group containing the administrators, with a Scope Tag of 'Europe' applied to both the assignment and the target devices.",
          "An Administrative Unit in Entra ID containing the administrators, mapped to the Intune role.",
          "A Conditional Access policy restricting access based on the administrator's IP address."
        ],
        answer: "A custom role assignment targeting an Entra ID group containing the administrators, with a Scope Tag of 'Europe' applied to both the assignment and the target devices.",
        explanation: "<b>Scope Tags</b> are the primary mechanism in Intune RBAC to restrict the visibility and management scope of objects (like policies, apps, and devices) to specific administrators.",
        moreDetails: "By applying the 'Europe' scope tag to both the role assignment and the devices, the administrators can only see and manage those specific devices.",
        otherOptions: "Administrative Units in Entra ID are primarily for managing Entra ID objects (users/groups), not Intune devices directly. Device Categories do not enforce RBAC boundaries natively without scope tags.",
        link: "https://learn.microsoft.com/en-us/mem/intune/fundamentals/scope-tags"
      },
      {
        id: 1018,
        type: "hard",
        format: "multiple-choice",
        question: "A junior administrator is assigned the 'Intune Administrator' role in Entra ID. They are trying to reset the password for a user who is a 'Global Administrator', but the action fails. Why does this occur?",
        options: [
          "The Intune Administrator role does not grant user password reset permissions; only the Helpdesk Administrator can reset passwords.",
          "Intune Administrators can reset passwords for standard users, but they are blocked from resetting passwords for highly privileged roles like Global Administrator.",
          "The Intune Administrator role is strictly for device management and has absolutely no user management capabilities.",
          "Password resets for Global Administrators require a PIM elevation approval from two other Global Admins."
        ],
        answer: "Intune Administrators can reset passwords for standard users, but they are blocked from resetting passwords for highly privileged roles like Global Administrator.",
        explanation: "The <b>Intune Administrator</b> role in Entra ID possesses some basic user management rights, including the ability to reset passwords for standard users to facilitate device enrollment.",
        moreDetails: "However, Entra ID RBAC strictly prevents lower-tier administrators from resetting passwords of highly privileged roles (like Global Admin) to prevent privilege escalation.",
        otherOptions: "Intune Admin CAN reset passwords for non-privileged users. Passwords for Global Admins must be reset by Privileged Role Administrators or other Global Admins, not necessarily through PIM dual-approval.",
        link: "https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#intune-administrator"
      },
      {
        id: 1019,
        type: "hard",
        format: "multiple-choice",
        question: "Which built-in Intune role should you assign to an administrator who needs to deploy Antivirus, Disk Encryption, and Firewall policies, but should NOT be able to wipe devices or deploy Win32 applications?",
        options: [
          "Security Administrator (Entra ID)",
          "Endpoint Security Manager (Intune Built-in Role)",
          "Helpdesk Operator (Intune Built-in Role)",
          "Application Manager (Intune Built-in Role)"
        ],
        answer: "Endpoint Security Manager (Intune Built-in Role)",
        explanation: "The Intune built-in <b>Endpoint Security Manager</b> role is explicitly designed for managing security baselines and endpoint security policies (AV, Firewall, BitLocker) without granting broader device management rights like wiping devices or deploying general applications.",
        moreDetails: "The Entra ID 'Security Administrator' role grants broad security permissions across the entire Microsoft 365 tenant (including Defender and Purview), which violates the principle of least privilege if they only need to manage Intune endpoint security policies.",
        otherOptions: "Security Administrator is too broad. Helpdesk Operator focuses on remote actions, not creating security policies. Application Manager focuses on apps.",
        link: "https://learn.microsoft.com/en-us/mem/intune/fundamentals/role-based-access-control#built-in-roles"
      },
      {
        id: 1020,
        type: "hard",
        format: "multiple-choice",
        question: "Your organization is deploying 5,000 kiosk devices. A service account is used to enroll these devices via an automated provisioning package. You notice the enrollment starts failing after the 15th device. You add the service account to the 'Device Enrollment Manager' (DEM) list. How many devices can this account now enroll, and does it grant the account Intune administrative privileges?",
        options: [
          "1,000 devices; Yes, it grants full read/write access to device configurations.",
          "1,000 devices; No, DEM is not an RBAC role and grants no administrative portal access.",
          "Unlimited devices; Yes, DEM acts as a Read-Only Operator.",
          "Unlimited devices; No, DEM only overrides the device limit."
        ],
        answer: "1,000 devices; No, DEM is not an RBAC role and grants no administrative portal access.",
        explanation: "A <b>Device Enrollment Manager (DEM)</b> account can enroll up to 1,000 devices, bypassing the standard Entra ID per-user device limit.",
        moreDetails: "Crucially, DEM is merely an enrollment mechanism, NOT an RBAC role. It grants absolutely zero administrative permissions within the Intune or Entra ID portals.",
        otherOptions: "DEM does not grant unlimited enrollments (it's hardcoded to 1,000). It does not grant any read or write access to the Intune portal.",
        link: "https://learn.microsoft.com/en-us/mem/intune/enrollment/device-enrollment-manager-enroll"
      },
      {
        id: 1021,
        type: "hard",
        format: "multiple-choice",
        question: "Your environment is co-managed between Configuration Manager and Intune. A user has the 'Full Administrator' security role in Configuration Manager. How do these permissions translate to the Intune admin center?",
        options: [
          "They are automatically granted the Intune Administrator role in Entra ID.",
          "They are granted the Read Only Operator role in Intune.",
          "Configuration Manager RBAC roles do not natively map or sync to Intune; they must be granted separate Intune/Entra ID roles to manage cloud workloads.",
          "The permissions map dynamically based on which workloads have been shifted to Intune."
        ],
        answer: "Configuration Manager RBAC roles do not natively map or sync to Intune; they must be granted separate Intune/Entra ID roles to manage cloud workloads.",
        explanation: "Configuration Manager uses its own local SQL-based RBAC model, while Intune relies on Entra ID and cloud-native Intune RBAC.",
        moreDetails: "There is no automated sync or mapping between the two. An admin must be explicitly granted roles in both environments to fully manage a co-managed state, even if workloads are shifted.",
        otherOptions: "Intune and ConfigMgr RBAC are distinct. Workloads don't automatically grant portal permissions.",
        link: "https://learn.microsoft.com/en-us/mem/configmgr/comanage/overview"
      },
      {
        id: 1022,
        type: "hard",
        format: "multiple-choice",
        question: "You have assigned the 'Germany' scope tag to a specific Windows Autopilot Deployment Profile. An administrator with only the 'France' scope tag assigned to their role attempts to view the list of Autopilot profiles. What will they see?",
        options: [
          "They will see the 'Germany' profile but it will be greyed out and read-only.",
          "They will not see the 'Germany' profile at all.",
          "They will see the profile and can edit it, because Autopilot profiles are global objects that ignore scope tags.",
          "They will see the profile, but cannot assign it to devices."
        ],
        answer: "They will not see the 'Germany' profile at all.",
        explanation: "Scope tags strictly control <b>visibility</b> in Intune. If an administrator does not have a specific scope tag assigned to their role, any objects (like Autopilot profiles) tagged exclusively with that missing scope tag are completely hidden from their view.",
        moreDetails: "This prevents administrators from accidentally modifying or even knowing about policies that belong to other regions or departments.",
        otherOptions: "Objects lacking a matching scope tag are not greyed out; they are entirely invisible to the administrator.",
        link: "https://learn.microsoft.com/en-us/mem/intune/fundamentals/scope-tags"
      },
      {
        id: 1023,
        type: "hard",
        format: "multiple-choice",
        question: "Which of the following remote actions is explicitly DENIED by default for the Intune built-in 'Helpdesk Operator' role?",
        options: [
          "Restart device",
          "Rename device",
          "Wipe device",
          "Sync device"
        ],
        answer: "Wipe device",
        explanation: "The built-in <b>Helpdesk Operator</b> role is designed for front-line support. It allows non-destructive remote actions like Sync, Restart, Rename, and Reset Passcode.",
        moreDetails: "However, highly destructive actions like a full 'Wipe' or 'Retire' are denied by default to prevent accidental data loss by level 1 support staff. To grant Wipe permissions, you would need a Custom Role or a higher built-in role.",
        otherOptions: "Restart, Rename, and Sync are all allowed by default for Helpdesk Operators.",
        link: "https://learn.microsoft.com/en-us/mem/intune/fundamentals/role-based-access-control#built-in-roles"
      },
      {
        id: 1024,
        type: "hard",
        format: "multiple-choice",
        question: "When creating a custom Intune role assignment, you must specify 'Members' and 'Scope (Groups)'. What is the difference between these two assignment parameters?",
        options: [
          "'Members' are the devices being managed; 'Scope (Groups)' are the administrators receiving the role.",
          "'Members' are the users/admins who are granted the permissions; 'Scope (Groups)' defines the target Entra ID groups (users or devices) that those admins are allowed to manage.",
          "They are identical; Intune requires both for redundancy.",
          "'Members' applies the role to Intune; 'Scope (Groups)' applies it to Entra ID."
        ],
        answer: "'Members' are the users/admins who are granted the permissions; 'Scope (Groups)' defines the target Entra ID groups (users or devices) that those admins are allowed to manage.",
        explanation: "In an Intune role assignment, <b>'Members'</b> answers 'WHO gets the power?' (the IT admins). <b>'Scope (Groups)'</b> answers 'WHERE can they use this power?' (the target devices or users they are allowed to impact).",
        moreDetails: "This distinction is critical for delegating administration. For example, assigning the Helpdesk role to the 'Tier 1 Support' group (Members), but restricting their management scope to the 'London Office Devices' group (Scope).",
        otherOptions: "Members are the actors (admins), Scope Groups are the targets. They do not apply to different portals.",
        link: "https://learn.microsoft.com/en-us/mem/intune/fundamentals/assign-role"
      },
      {
        id: 1025,
        type: "hard",
        format: "multiple-choice",
        question: "Your company requires the use of Apple Business Manager (ABM) for automated iOS enrollment. You need to configure the Apple MDM Push certificate in the Intune tenant. Which of the following Entra ID roles has the MINIMUM permissions required to complete this task?",
        options: [
          "Security Administrator",
          "Global Administrator",
          "Intune Administrator",
          "Billing Administrator"
        ],
        answer: "Intune Administrator",
        explanation: "The <b>Intune Administrator</b> role has full administrative rights within the Intune service, including configuring tenant-level settings like the Apple MDM Push certificate.",
        moreDetails: "While a Global Administrator can also do this, Intune Administrator represents the minimum necessary privilege required to configure device enrollment protocols in the tenant.",
        otherOptions: "Security Administrator cannot configure tenant enrollment protocols. Global Admin is too broad and violates least privilege.",
        link: "https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#intune-administrator"
      },
      {
        id: 1026,
        type: "hard",
        format: "multiple-choice",
        question: "Entra ID recently expanded the capability of Administrative Units (AUs) to include devices. How does an Entra ID Administrative Unit differ from an Intune Scope Tag when delegating device management?",
        options: [
          "Administrative Units restrict who can manage the device object in Entra ID (like enabling/disabling the device or BitLocker keys); Scope Tags restrict who can manage Intune policies and apps assigned to that device.",
          "Administrative Units are for Windows devices; Scope Tags are for iOS and Android devices.",
          "Administrative Units replace Scope Tags entirely in modern Intune environments.",
          "There is no difference; they sync automatically."
        ],
        answer: "Administrative Units restrict who can manage the device object in Entra ID (like enabling/disabling the device or BitLocker keys); Scope Tags restrict who can manage Intune policies and apps assigned to that device.",
        explanation: "<b>Administrative Units (AUs)</b> are an Entra ID boundary. Delegating an admin to a device AU allows them to manage the identity layer of the device (viewing BitLocker recovery keys, disabling the object in Entra).",
        moreDetails: "<b>Scope tags</b> are an Intune boundary, controlling who can push MDM policies, apps, and wipe the device via the Intune engine. They complement each other.",
        otherOptions: "AUs do not replace Scope Tags. Both apply to all OS platforms.",
        link: "https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/administrative-units"
      },
      {
        id: 1027,
        type: "hard",
        format: "multiple-choice",
        question: "Your organization uses Entra ID Privileged Identity Management (PIM) to secure administrative access. You want to require Just-In-Time (JIT) elevation for a custom Intune role (e.g., 'Regional Helpdesk'). Which of the following statements about using PIM with Intune RBAC is true?",
        options: [
          "PIM can natively manage assignments for Intune custom built-in roles directly from the Intune portal.",
          "PIM cannot natively manage assignments for Intune custom roles directly; you must assign the Intune role to an Entra ID Security Group and use PIM for Groups.",
          "Elevating to an Intune custom role via PIM takes up to 24 hours to replicate to the Intune portal.",
          "PIM is only compatible with the Global Administrator and Intune Administrator Entra ID roles."
        ],
        answer: "PIM cannot natively manage assignments for Intune custom roles directly; you must assign the Intune role to an Entra ID Security Group and use PIM for Groups.",
        explanation: "Entra ID PIM natively integrates with Entra ID roles. Intune's own internal RBAC roles (built-in or custom) are not directly surfaced in PIM.",
        moreDetails: "To protect an Intune custom role with PIM, you must assign the Intune role to an Entra ID Security Group, and then use <b>PIM for Groups</b> (formerly Privileged Access Groups) to require elevation to join that group.",
        otherOptions: "Replication is typically very fast (within minutes). PIM supports many roles beyond Global/Intune Admin.",
        link: "https://learn.microsoft.com/en-us/entra/id-governance/pim-for-groups"
      },
      {
        id: 1028,
        type: "hard",
        format: "multiple-choice",
        question: "By default, what happens if you create a new Configuration Profile in Intune and do not explicitly assign any custom scope tags to it?",
        options: [
          "The profile is automatically assigned the 'Default' scope tag, and any administrator whose role includes the 'Default' scope tag can view and manage it.",
          "The profile is hidden from all administrators until a Global Administrator assigns a tag.",
          "The profile is assigned the 'All Devices' scope tag.",
          "The profile cannot be saved without selecting a custom scope tag."
        ],
        answer: "The profile is automatically assigned the 'Default' scope tag, and any administrator whose role includes the 'Default' scope tag can view and manage it.",
        explanation: "All objects in Intune are automatically assigned the built-in <b>'Default'</b> scope tag upon creation unless specified otherwise.",
        moreDetails: "Any administrator role that has the 'Default' scope tag in its scope (which is typical for general admins) will have visibility and control over that object. To truly hide a profile, you must remove the 'Default' tag and add a custom tag.",
        otherOptions: "You can save without custom tags. It is not hidden by default.",
        link: "https://learn.microsoft.com/en-us/mem/intune/fundamentals/scope-tags#default-scope-tag"
      },
      {
        id: 1029,
        type: "hard",
        format: "multiple-choice",
        question: "The built-in 'Intune Role Administrator' role in Intune has the unique ability to manage Intune RBAC roles. Which of the following tasks can an Intune Role Administrator perform?",
        options: [
          "They can reset the password of a Global Administrator in Entra ID.",
          "They can create custom Intune roles, assign Intune roles to groups, and manage scope tags.",
          "They can deploy Win32 applications to all devices.",
          "They can assign Entra ID roles (like Security Administrator) to users."
        ],
        answer: "They can create custom Intune roles, assign Intune roles to groups, and manage scope tags.",
        explanation: "The <b>Intune Role Administrator</b> is specifically designed to manage the Intune RBAC framework itself. They can create, edit, and assign custom roles, and manage scope tags.",
        moreDetails: "They do not have permissions to manage devices, deploy apps, or manage Entra ID roles outside of Intune. This role is useful for delegating the architecture of the Intune administration model without giving actual device management power.",
        otherOptions: "They cannot manage Entra ID roles or passwords. They cannot manage device apps.",
        link: "https://learn.microsoft.com/en-us/mem/intune/fundamentals/role-based-access-control#built-in-roles"
      },
      {
        id: 1030,
        type: "hard",
        format: "multiple-choice",
        question: "You manage two separate Entra ID tenants (Tenant A and Tenant B) using Microsoft 365 Lighthouse. You want an administrator in Tenant A to be able to view compliance status and deploy baselines to Intune devices in Tenant B. What RBAC mechanism facilitates this B2B management securely?",
        options: [
          "The administrator must be created as a standard Guest User in Tenant B and assigned the Intune Administrator role via Entra B2B.",
          "Granular Delegated Admin Privileges (GDAP) where Tenant B grants specific Entra ID roles (like Intune Administrator) to a security group in Tenant A.",
          "Exporting the custom Intune RBAC roles from Tenant A and importing them into Tenant B via a JSON file.",
          "Assigning the administrator the 'Global Reader' role in Tenant A, which automatically propagates to Tenant B."
        ],
        answer: "Granular Delegated Admin Privileges (GDAP) where Tenant B grants specific Entra ID roles (like Intune Administrator) to a security group in Tenant A.",
        explanation: "Managed Service Providers (MSPs) and multi-tenant organizations use <b>GDAP (Granular Delegated Admin Privileges)</b> to securely manage customer tenants via portals like Microsoft 365 Lighthouse.",
        moreDetails: "GDAP allows Tenant B to grant precise, time-bound Entra ID roles (like Intune Admin or Security Reader) to a group of administrators residing in Tenant A, enforcing least privilege across tenant boundaries.",
        otherOptions: "B2B Guest Users are not the standard approach for scalable multi-tenant management like Lighthouse. Roles do not automatically propagate between tenants.",
        link: "https://learn.microsoft.com/en-us/microsoft-365/lighthouse/m365-lighthouse-gdap-overview"
      }
    ]
  },
  {
    id: 995,
    term: "Conditional Access & Compliance (MD-102 Scenarios)",
    category: "Deploy Windows client",
    questions: [
      {
        id: 1031,
        type: "medium",
        format: "multi-select",
        question: "You need to ensure that users can only access Microsoft SharePoint Online from devices that meet your organization's security baseline. Which TWO components must be configured to achieve this? (Select TWO)",
        options: [
          "An Intune Compliance Policy assigned to the devices.",
          "An Entra ID Conditional Access policy with the 'Require device to be marked as compliant' grant control.",
          "An Intune Configuration Profile enforcing BitLocker.",
          "An Entra ID Protection sign-in risk policy."
        ],
        multiAnswers: [
          "An Intune Compliance Policy assigned to the devices.",
          "An Entra ID Conditional Access policy with the 'Require device to be marked as compliant' grant control."
        ],
        explanation: "To enforce device compliance for cloud app access, Intune and Entra ID must work together.",
        moreDetails: "First, an Intune Compliance Policy evaluates the device against your baseline. If it passes, Intune updates the device object in Entra ID to 'Compliant'. Second, the Conditional Access policy uses the 'Require device to be marked as compliant' grant control to actually block access if that flag is missing.",
        otherOptions: "A configuration profile applies settings but doesn't natively block Entra ID tokens without a compliance policy. Sign-in risk policies evaluate identity behavior, not device baseline health.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/device-compliance-get-started"
      },
      {
        id: 1032,
        type: "hard",
        format: "multiple-choice",
        question: "An administrator configures a Windows compliance policy. What is the effect of setting the 'Mark device noncompliant' action to '3 days' instead of the default 'Immediately'?",
        options: [
          "The device remains in a 'Compliant' state in Entra ID for 3 days after failing the check, allowing the user continued access via Conditional Access during the grace period.",
          "The device is immediately marked as 'In Grace Period' in Entra ID, which causes Conditional Access to instantly block access.",
          "The device stops checking in with Intune for 3 days.",
          "Intune waits 3 days before evaluating the device's compliance status for the first time."
        ],
        answer: "The device remains in a 'Compliant' state in Entra ID for 3 days after failing the check, allowing the user continued access via Conditional Access during the grace period.",
        explanation: "Configuring a grace period gives users time to remediate issues (like updating the OS or turning on BitLocker) before losing access to corporate resources.",
        moreDetails: "During this 3-day grace period, the device's compliance state in Entra ID technically remains 'Compliant', so any Conditional Access policies requiring a compliant device will continue to allow access.",
        otherOptions: "If it were immediately marked noncompliant, CA would block them, defeating the purpose of a grace period.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/actions-for-noncompliance"
      },
      {
        id: 1033,
        type: "hard",
        format: "multiple-choice",
        question: "You are creating a Conditional Access policy targeting 'All Users' that blocks access to all cloud apps if the sign-in risk is High. To follow Microsoft best practices and prevent tenant lockout, what MUST you do?",
        options: [
          "Exclude at least one highly secure 'break-glass' emergency access account from the policy.",
          "Exclude the 'Global Administrator' role from the policy.",
          "Set the policy to 'Report-only' permanently.",
          "Configure a secondary Conditional Access policy that allows access if the user enters a CAPTCHA."
        ],
        answer: "Exclude at least one highly secure 'break-glass' emergency access account from the policy.",
        explanation: "When creating broad 'Block' policies or policies targeting 'All Users', it is a critical best practice to exclude an emergency access account.",
        moreDetails: "If the risk engine flags all administrators erroneously, or MFA goes down globally, this 'break-glass' account ensures you can still log in to disable the blocking policy and regain control of the tenant.",
        otherOptions: "Excluding Global Admins directly is poor practice. Report-only defeats the purpose of the security policy. CAPTCHA is not a CA grant control.",
        link: "https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/security-emergency-access"
      },
      {
        id: 1034,
        type: "hard",
        format: "multiple-choice",
        question: "A user is actively downloading a file from SharePoint. Suddenly, their device is infected with malware, and Intune immediately marks the device as non-compliant due to a Defender risk score. How does Continuous Access Evaluation (CAE) handle the active SharePoint session?",
        options: [
          "CAE immediately revokes the active session token, blocking the user from completing the download in near real-time.",
          "CAE waits for the token to expire (typically 1 hour) before enforcing the Conditional Access block.",
          "CAE forces the user to re-authenticate with MFA but allows the download to finish.",
          "CAE only applies to Exchange Online and cannot revoke SharePoint sessions."
        ],
        answer: "CAE immediately revokes the active session token, blocking the user from completing the download in near real-time.",
        explanation: "<b>Continuous Access Evaluation (CAE)</b> drastically improves security by listening to critical events (like a device falling out of compliance) and enforcing Conditional Access policies in near real-time.",
        moreDetails: "Instead of waiting up to an hour for the access token to naturally expire (the legacy behavior), CAE instantly revokes the session and halts the active download.",
        otherOptions: "Legacy auth waited 1 hour. CAE applies to Exchange, SharePoint, and Teams.",
        link: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-continuous-access-evaluation"
      },
      {
        id: 1035,
        type: "hard",
        format: "multi-select",
        question: "You want to mark Windows devices as non-compliant if a specific legacy application (CustomApp.exe) is installed. Which TWO components are required to build this Custom Compliance policy in Intune? (Select TWO)",
        options: [
          "A PowerShell discovery script uploaded to Intune.",
          "A JSON file defining the compliance rules and expected values.",
          "A Proactive Remediation script.",
          "An OMA-URI custom configuration profile."
        ],
        multiAnswers: [
          "A PowerShell discovery script uploaded to Intune.",
          "A JSON file defining the compliance rules and expected values."
        ],
        explanation: "Intune Custom Compliance allows you to evaluate settings that aren't built into the UI.",
        moreDetails: "It requires two parts: A PowerShell script that runs on the device to discover the current state (e.g., checking if CustomApp.exe exists), and a JSON rules file uploaded to the compliance policy that defines the expected result (e.g., AppExists = False).",
        otherOptions: "Proactive Remediations can fix issues but don't natively tie into the Entra ID compliance state for Conditional Access. OMA-URI is for configuration, not custom compliance scripts.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/compliance-use-custom-settings"
      },
      {
        id: 1036,
        type: "medium",
        format: "multiple-choice",
        question: "You want to block legacy authentication protocols (like POP3, IMAP, and older Office clients) across your entire tenant using Conditional Access. What is the recommended way to configure the 'Conditions' section of the policy?",
        options: [
          "Under 'Client apps', select 'Other clients' and 'Exchange ActiveSync clients'.",
          "Under 'Device platforms', exclude Windows and macOS.",
          "Under 'Locations', select 'Any location' and exclude 'Trusted locations'.",
          "Under 'Sign-in risk', select 'High'."
        ],
        answer: "Under 'Client apps', select 'Other clients' and 'Exchange ActiveSync clients'.",
        explanation: "Legacy authentication protocols cannot perform MFA. To block them via Conditional Access, you target the legacy client types.",
        moreDetails: "In the CA policy under 'Client apps', selecting 'Other clients' (which encompasses POP, IMAP, SMTP, etc.) and 'Exchange ActiveSync clients' allows you to apply a strict 'Block' control specifically to legacy traffic.",
        otherOptions: "Excluding OS platforms or locations doesn't block the protocol itself. Risk policies don't target legacy auth specifically.",
        link: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/block-legacy-authentication"
      },
      {
        id: 1037,
        type: "medium",
        format: "multiple-choice",
        question: "You want to allow users to access corporate email on personal unmanaged iOS devices, but ONLY if they use the official Microsoft Outlook app and data cannot be copied out of it. Which Conditional Access grant control accomplishes this without requiring full MDM enrollment?",
        options: [
          "Require app protection policy.",
          "Require device to be marked as compliant.",
          "Require Hybrid Entra ID joined device.",
          "Require password change."
        ],
        answer: "Require app protection policy.",
        explanation: "The <b>'Require app protection policy'</b> grant control allows you to implement Mobile Application Management (MAM) without Mobile Device Management (MDM).",
        moreDetails: "It ensures the user can only access the data using a MAM-enlightened app (like Outlook) that has a data-loss prevention policy applied, completely bypassing the need for the device itself to be enrolled or compliant.",
        otherOptions: "Require compliant device or Hybrid join forces full device management/enrollment, which violates the 'unmanaged' requirement.",
        link: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-conditional-access-grant#require-app-protection-policy"
      },
      {
        id: 1038,
        type: "hard",
        format: "multiple-choice",
        question: "You need a Conditional Access policy that requires MFA for all users, but ONLY when they are signing in from personal (BYOD) devices. Which feature allows you to target personal devices dynamically within the CA policy?",
        options: [
          "Filter for devices (Condition).",
          "Grant control: Require approved client app.",
          "Session control: Sign-in frequency.",
          "Intune Device Categories."
        ],
        answer: "Filter for devices (Condition).",
        explanation: "<b>Filter for devices</b> is a powerful condition in Conditional Access that allows you to target or exclude devices based on Entra ID device properties.",
        moreDetails: "You can write a rule such as `device.deviceOwnership -eq 'Personal'` to enforce MFA strictly on unmanaged or BYOD devices, while giving a smoother experience to corporate-owned devices.",
        otherOptions: "Client apps refers to software, not device ownership. Intune device categories group devices in Intune, but are not directly addressable in CA conditions.",
        link: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-condition-filters-for-devices"
      },
      {
        id: 1039,
        type: "medium",
        format: "multiple-choice",
        question: "A Conditional Access policy is configured with a 'Sign-in frequency' session control of 1 hour. What is the user experience for a user accessing an Entra ID integrated web app?",
        options: [
          "The user will be forced to re-authenticate interactively every 1 hour, even if they are actively using the application.",
          "The user is locked out of the app completely after 1 hour of use.",
          "The user's Entra ID password will automatically expire after 1 hour.",
          "The user is prompted for MFA exactly once, then the token lasts 1 hour before self-destructing."
        ],
        answer: "The user will be forced to re-authenticate interactively every 1 hour, even if they are actively using the application.",
        explanation: "The <b>Sign-in frequency</b> session control dictates the absolute maximum lifetime of the session token.",
        moreDetails: "Unlike traditional idle timeouts, sign-in frequency forces a strict re-authentication (usually requiring credentials or MFA) at the specified interval, regardless of user activity. This is typical for highly sensitive 'kiosk' or financial applications.",
        otherOptions: "It does not lock them out, it just forces re-authentication. It does not expire passwords.",
        link: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/howto-conditional-access-session-lifetime"
      },
      {
        id: 1040,
        type: "hard",
        format: "multi-select",
        question: "Which of the following user actions can be protected by a Conditional Access policy targeting the 'User actions: Register or join devices' condition? (Select TWO)",
        options: [
          "A user performing Entra ID Join during the Windows Out-of-Box Experience (OOBE).",
          "A user enrolling their personal phone via the Intune Company Portal app.",
          "A user logging into the Intune admin center.",
          "A user resetting their password via Self-Service Password Reset (SSPR)."
        ],
        multiAnswers: [
          "A user performing Entra ID Join during the Windows Out-of-Box Experience (OOBE).",
          "A user enrolling their personal phone via the Intune Company Portal app."
        ],
        explanation: "The <b>'Register or join devices'</b> condition in Conditional Access specifically targets the device enrollment and identity registration flows.",
        moreDetails: "This allows administrators to require MFA specifically when a user is attempting to Entra ID Join a Windows PC or Entra ID Register a mobile device via the Company Portal, adding a strong layer of security to the hardware provisioning process.",
        otherOptions: "Logging into the admin portal is protected by targeting 'Cloud apps' (Microsoft Intune). SSPR is an identity feature, not a device registration flow.",
        link: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-conditional-access-cloud-apps#user-actions"
      },
      {
        id: 1041,
        type: "medium",
        format: "multi-select",
        question: "When configuring an Intune compliance policy, what are TWO valid options you can configure under the 'Actions for noncompliance' settings? (Select TWO)",
        options: [
          "Send push notification to end user.",
          "Remotely wipe the device automatically.",
          "Add device to retire list.",
          "Downgrade the OS version."
        ],
        multiAnswers: [
          "Send push notification to end user.",
          "Add device to retire list."
        ],
        explanation: "Intune allows a sequenced set of actions when a device falls out of compliance.",
        moreDetails: "Valid actions include: Mark device noncompliant, Send email to end user, <b>Send push notification to end user</b>, Remotely lock the noncompliant device, and <b>Add device to retire list</b>. Wiping a device entirely is considered too destructive to automate via compliance policies.",
        otherOptions: "You cannot automatically wipe a device via compliance actions (only retire). Intune cannot downgrade OS versions.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/actions-for-noncompliance"
      },
      {
        id: 1042,
        type: "hard",
        format: "multiple-choice",
        question: "You have integrated Microsoft Defender for Endpoint with Intune. You want to ensure that devices with an active malware infection are blocked from accessing corporate resources. Where do you define the acceptable 'Machine risk score' threshold?",
        options: [
          "In the Intune Compliance Policy.",
          "In the Entra ID Conditional Access policy.",
          "In the Defender Vulnerability Management portal.",
          "In an Intune Endpoint Security Antivirus profile."
        ],
        answer: "In the Intune Compliance Policy.",
        explanation: "The integration between Defender and Intune relies on the <b>Intune Compliance Policy</b>.",
        moreDetails: "You create a compliance policy and set the 'Require the device to be at or under the machine risk score' setting (e.g., to Low or Medium). Defender reports the real-time score to Intune; if it exceeds the threshold, Intune marks it noncompliant, and Conditional Access blocks the traffic.",
        otherOptions: "Conditional access handles the block, but it relies entirely on the compliance state determined by the Intune policy. Defender reports the score but doesn't set the enforcement boundary for Intune.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/advanced-threat-protection-configure"
      },
      {
        id: 1043,
        type: "easy",
        format: "multiple-choice",
        question: "You are implementing a strict Conditional Access policy that blocks access from outside your country. Before enforcing it, you set the policy to 'Report-only'. Where can you view the impact this policy would have on users if it were enabled?",
        options: [
          "The Entra ID Sign-in logs and Conditional Access Insights workbook.",
          "The Intune Device Compliance reports.",
          "The Microsoft 365 Defender incidents queue.",
          "The Windows Event Viewer on the client devices."
        ],
        answer: "The Entra ID Sign-in logs and Conditional Access Insights workbook.",
        explanation: "<b>Report-only</b> mode evaluates Conditional Access policies without enforcing the grant controls (like Block or Require MFA).",
        moreDetails: "The results of these simulated evaluations are recorded directly in the Entra ID Sign-in logs and can be visualized using the Conditional Access Insights and Reporting workbook in Azure Monitor/Log Analytics.",
        otherOptions: "Intune compliance reports track device health, not CA authentication evaluations.",
        link: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-conditional-access-report-only"
      },
      {
        id: 1044,
        type: "medium",
        format: "multi-select",
        question: "You want to create a Conditional Access policy that requires MFA for all users, EXCEPT when they are physically located inside the corporate office. Which TWO configurations are required? (Select TWO)",
        options: [
          "Define the corporate office public IP address ranges as a 'Named location' in Entra ID.",
          "In the CA policy, set 'Locations' to 'Include Any location' and 'Exclude the configured Named location'.",
          "Deploy a VPN profile to all Intune devices.",
          "Configure Intune Network Boundaries for Delivery Optimization."
        ],
        multiAnswers: [
          "Define the corporate office public IP address ranges as a 'Named location' in Entra ID.",
          "In the CA policy, set 'Locations' to 'Include Any location' and 'Exclude the configured Named location'."
        ],
        explanation: "To bypass MFA based on physical presence, you must map your corporate network to Entra ID.",
        moreDetails: "First, create a <b>Named location</b> containing the external IP addresses of your corporate firewalls. Second, configure the CA policy to apply to all locations but <b>Exclude</b> that specific Named location. This ensures traffic originating from the corporate IP is trusted.",
        otherOptions: "VPN profiles route traffic but do not natively define CA trust without Named Locations. Network boundaries are for update peering, not authentication.",
        link: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/location-condition"
      },
      {
        id: 1045,
        type: "medium",
        format: "multiple-choice",
        question: "You need to ensure that before a user can access any corporate applications, they must explicitly agree to the company's IT acceptable use policy. If the policy changes, they must re-agree. Which Entra ID feature handles this within the Conditional Access flow?",
        options: [
          "Terms of Use.",
          "Entra ID Identity Protection.",
          "Access Reviews.",
          "Privileged Identity Management (PIM)."
        ],
        answer: "Terms of Use.",
        explanation: "Entra ID <b>Terms of Use (ToU)</b> allows organizations to upload a PDF document containing legal or IT policies.",
        moreDetails: "By configuring a Conditional Access policy with the grant control to require the Terms of Use, users are blocked from accessing apps until they read and click 'Accept'. It supports versioning, forcing re-acceptance upon updates.",
        otherOptions: "Access reviews audit group memberships. Identity Protection evaluates risk.",
        link: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/terms-of-use"
      },
      {
        id: 1046,
        type: "medium",
        format: "multi-select",
        question: "When building a Windows 10/11 compliance policy in Intune, which TWO of the following settings are found under the 'System Security' category? (Select TWO)",
        options: [
          "Require a Password to unlock the device.",
          "Require BitLocker encryption.",
          "Minimum OS version.",
          "Maximum minutes of inactivity before screen lock."
        ],
        multiAnswers: [
          "Require a Password to unlock the device.",
          "Require BitLocker encryption."
        ],
        explanation: "The <b>System Security</b> section of the Windows compliance policy focuses on data-at-rest protection and local access.",
        moreDetails: "It contains settings to enforce Password requirements (length, type, expiration), Encryption (BitLocker), and Device Security (Secure Boot, TPM). 'Maximum minutes of inactivity' is also under System Security -> Password.",
        otherOptions: "Minimum OS version is located under the 'Device Health' or 'Device Properties' category, not System Security.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/compliance-policy-create-windows"
      },
      {
        id: 1047,
        type: "hard",
        format: "multiple-choice",
        question: "A newly enrolled Windows device in Intune shows a compliance status of 'Not Evaluated'. A few minutes later, it changes to 'Noncompliant', even though you haven't assigned any custom compliance policies to it. What is the most likely cause?",
        options: [
          "The built-in compliance policy setting 'Mark devices with no compliance policy assigned as' is set to 'Not compliant'.",
          "The device failed the Windows Autopilot attestation process.",
          "The device does not have an active Intune license.",
          "The user is not in the local Administrators group."
        ],
        answer: "The built-in compliance policy setting 'Mark devices with no compliance policy assigned as' is set to 'Not compliant'.",
        explanation: "Intune has a global tenant-level Compliance Policy setting that dictates the default behavior for devices lacking a specific assignment.",
        moreDetails: "For security reasons, the best practice is to set <b>'Mark devices with no compliance policy assigned as'</b> to 'Not compliant'. This ensures devices cannot slip past Conditional Access by simply avoiding compliance policy targeting.",
        otherOptions: "Autopilot attestation failure stops enrollment entirely. Lack of license stops enrollment. Admin rights do not dictate the baseline compliance state.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/device-compliance-get-started#compliance-policy-settings"
      },
      {
        id: 1048,
        type: "hard",
        format: "multiple-choice",
        question: "You configure a Conditional Access policy that targets 'All Users' and is triggered when 'User risk' is High. The grant control is set to 'Require password change'. What is a strict prerequisite for this grant control to function without blocking the user entirely?",
        options: [
          "Entra ID Self-Service Password Reset (SSPR) must be enabled and configured for the users.",
          "The user must be a Hybrid Entra ID joined device administrator.",
          "The user must be on the corporate VPN.",
          "The user must have a FIDO2 security key registered."
        ],
        answer: "Entra ID Self-Service Password Reset (SSPR) must be enabled and configured for the users.",
        explanation: "If a Conditional Access policy forces a user to change their password due to identity risk, the user must actually have the ability to do so.",
        moreDetails: "This absolutely requires <b>Self-Service Password Reset (SSPR)</b> to be enabled, and the user must have previously registered their strong authentication methods (MFA). If SSPR is disabled, the user hits a dead end and is completely blocked.",
        otherOptions: "VPN, Hybrid Join, and FIDO2 are not required to change a password securely via the cloud SSPR flow.",
        link: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/howto-conditional-access-policy-risk-user#prerequisites"
      },
      {
        id: 1049,
        type: "hard",
        format: "multiple-choice",
        question: "To prevent attackers who compromise a password from registering their own MFA device, you want to enforce that users can only register their MFA methods (Security Info) while connected to the corporate network. What condition must you target in the Conditional Access policy?",
        options: [
          "User actions: Register security information.",
          "Cloud apps: Microsoft Azure Management.",
          "Client apps: Browser.",
          "Sign-in risk: High."
        ],
        answer: "User actions: Register security information.",
        explanation: "Conditional Access allows you to target specific sensitive identity flows rather than just applications.",
        moreDetails: "By selecting the <b>'Register security information'</b> user action, you can apply strict conditions (like requiring a trusted IP network/Named Location) specifically to the https://mysignins.microsoft.com/security-info registration page, locking out attackers who try to register MFA from remote locations.",
        otherOptions: "Targeting Azure Management or Browsers generally would block legitimate daily administrative or web work.",
        link: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/howto-conditional-access-policy-registration"
      },
      {
        id: 1050,
        type: "medium",
        format: "multi-select",
        question: "A Conditional Access policy uses the grant control 'Require approved client app'. Which TWO of the following apps are natively considered 'approved' by Entra ID for this specific control? (Select TWO)",
        options: [
          "Microsoft Outlook.",
          "Microsoft Teams.",
          "The native Apple Mail app on iOS.",
          "Google Chrome browser."
        ],
        multiAnswers: [
          "Microsoft Outlook.",
          "Microsoft Teams."
        ],
        explanation: "The 'Require approved client app' control enforces that users access corporate data using a specific list of Microsoft-vetted applications that support Intune App Protection Policies natively.",
        moreDetails: "First-party Microsoft apps like <b>Outlook</b>, <b>Teams</b>, Edge, and OneDrive are fully supported. Third-party native mail clients (like Apple Mail) or standard browsers (like Chrome) are not on the approved list and will be blocked by this control.",
        otherOptions: "Apple Mail and Google Chrome do not support Intune MAM protection and are thus not 'approved client apps' in this context.",
        link: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-conditional-access-grant#require-approved-client-app"
      }
    ]
  },
  {
    id: 996,
    term: "Mobile Device & App Management (MDM/MAM)",
    category: "Deploy Windows client",
    questions: [
      {
        id: 1051,
        type: "hard",
        format: "multiple-choice",
        question: "Before you can enroll any iOS/iPadOS devices into Microsoft Intune for Mobile Device Management (MDM), what is the mandatory first step you must perform in the Intune admin center?",
        options: [
          "Configure an Apple Business Manager (ABM) token.",
          "Download an Intune Certificate Signing Request (CSR) and use it to create an Apple MDM Push certificate (APNs).",
          "Create a Device Configuration profile for iOS.",
          "Link your Entra ID tenant to a Managed Apple ID."
        ],
        answer: "Download an Intune Certificate Signing Request (CSR) and use it to create an Apple MDM Push certificate (APNs).",
        explanation: "Intune cannot communicate with Apple devices without an <b>Apple MDM Push certificate (APNs)</b>.",
        moreDetails: "This certificate establishes a trusted connection between your Intune tenant and Apple's push notification services, which is strictly required to send MDM commands to iOS, iPadOS, and macOS devices. It must be renewed annually.",
        otherOptions: "ABM is for automated enrollment, not a hard prerequisite for basic BYOD enrollment. Configuration profiles require enrollment first.",
        link: "https://learn.microsoft.com/en-us/mem/intune/enrollment/apple-mdm-push-certificate-get"
      },
      {
        id: 1052,
        type: "hard",
        format: "multi-select",
        question: "You are using Apple Automated Device Enrollment (ADE) via Apple Business Manager to deploy corporate-owned iPhones. Which TWO of the following capabilities are exclusive to ADE (formerly DEP) enrollments compared to standard user-driven Company Portal enrollments? (Select TWO)",
        options: [
          "The ability to lock the MDM profile so the user cannot remove it.",
          "The ability to place the device into 'Supervised' mode over-the-air.",
          "The ability to deploy Wi-Fi configuration profiles.",
          "The ability to deploy App Protection Policies (MAM)."
        ],
        multiAnswers: [
          "The ability to lock the MDM profile so the user cannot remove it.",
          "The ability to place the device into 'Supervised' mode over-the-air."
        ],
        explanation: "Automated Device Enrollment (ADE) provides the deepest level of management for corporate-owned Apple devices.",
        moreDetails: "Because the hardware is securely tied to the organization via ABM, ADE allows Intune to silently force the device into <b>Supervised mode</b> and allows you to lock the management profile so users cannot manually unenroll the device.",
        otherOptions: "Wi-Fi profiles and App Protection Policies can be deployed to any enrolled device (or unmanaged devices via MAM), regardless of whether it used ADE.",
        link: "https://learn.microsoft.com/en-us/mem/intune/enrollment/device-enrollment-program-enroll-ios"
      },
      {
        id: 1053,
        type: "medium",
        format: "multiple-choice",
        question: "Your organization allows users to bring their personal Android phones to work. You need to ensure that corporate data is securely separated from personal data at the OS level, without taking full control of the device. Which Android Enterprise management mode should you configure in Intune?",
        options: [
          "Corporate-owned fully managed.",
          "Corporate-owned with a work profile (COPE).",
          "Personally-owned work profile (BYOD).",
          "Android Open Source Project (AOSP) user-associated."
        ],
        answer: "Personally-owned work profile (BYOD).",
        explanation: "The <b>Personally-owned work profile</b> management mode is designed specifically for BYOD scenarios.",
        moreDetails: "It leverages Android's native containerization to create a separate, secure 'Work Profile' on the user's personal device. IT can fully manage and wipe the apps/data inside the work profile but has absolutely zero visibility or control over the user's personal apps, photos, or data.",
        otherOptions: "Corporate-owned modes assume the company bought the hardware and therefore has deeper control over the entire device.",
        link: "https://learn.microsoft.com/en-us/mem/intune/enrollment/android-work-profile-enroll"
      },
      {
        id: 1054,
        type: "hard",
        format: "multi-select",
        question: "You are configuring an Intune App Protection Policy (MAM) for iOS devices. You want to prevent users from copying corporate data out of Microsoft Word and pasting it into their personal Apple Notes app. Which TWO settings should you configure in the Data Protection section? (Select TWO)",
        options: [
          "Set 'Send org data to other apps' to 'Policy managed apps'.",
          "Set 'Restrict cut, copy, and paste between other apps' to 'Policy managed apps'.",
          "Set 'Save copies of org data' to 'Block'.",
          "Set 'Require approved client app' in Conditional Access."
        ],
        multiAnswers: [
          "Set 'Send org data to other apps' to 'Policy managed apps'.",
          "Set 'Restrict cut, copy, and paste between other apps' to 'Policy managed apps'."
        ],
        explanation: "Intune App Protection Policies enforce data-loss prevention (DLP) at the application layer.",
        moreDetails: "By restricting data transfers (like 'Open In' or Share extensions) and clipboard operations (cut/copy/paste) strictly to other <b>Policy managed apps</b>, you create a secure container boundary. Data can flow between Word and Outlook (both managed), but not to unmanaged apps like Apple Notes.",
        otherOptions: "Saving copies of org data prevents saving files to unmanaged storage (like personal iCloud), but doesn't handle the clipboard. Conditional Access manages authentication, not clipboard DLP.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/app-protection-policy-settings-ios"
      },
      {
        id: 1055,
        type: "medium",
        format: "multiple-choice",
        question: "You want to deploy the Microsoft Edge browser to enrolled iOS devices and pre-configure the homepage to the corporate intranet site, so users don't have to type the URL manually. Which Intune feature should you use?",
        options: [
          "App Protection Policy.",
          "App Configuration Policy (Managed devices).",
          "Device Configuration Profile (Web Content Filter).",
          "iOS Custom OMA-URI."
        ],
        answer: "App Configuration Policy (Managed devices).",
        explanation: "<b>App Configuration Policies</b> allow Intune to push specific settings, URLs, or feature toggles directly into supported applications.",
        moreDetails: "For devices enrolled in MDM, you use the 'Managed devices' enrollment type to push an App Configuration policy that automatically sets the homepage, bookmarks, or proxy settings for Microsoft Edge.",
        otherOptions: "App Protection Policies handle data security, not app settings. Web Content Filter blocks websites. OMA-URI is for Windows/Android custom OS settings.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/app-configuration-policies-use-ios"
      },
      {
        id: 1056,
        type: "hard",
        format: "multiple-choice",
        question: "An employee loses their personally-owned iPhone that was enrolled in Intune via User Enrollment. You need to ensure all corporate data is removed from the phone without affecting the user's personal photos and apps. Which Intune remote action MUST you use?",
        options: [
          "Wipe",
          "Retire",
          "Fresh Start",
          "Delete"
        ],
        answer: "Retire",
        explanation: "The <b>Retire</b> action specifically targets and removes only managed apps, configurations, and corporate data, leaving personal data completely untouched.",
        moreDetails: "This is the safest and correct action for a BYOD device. A 'Wipe' action would factory reset the entire device, destroying the user's personal data. 'Fresh Start' is a Windows-specific action.",
        otherOptions: "Wipe performs a full factory reset. Delete just removes the record from Intune without immediately triggering an organized unenrollment.",
        link: "https://learn.microsoft.com/en-us/mem/intune/remote-actions/devices-wipe"
      },
      {
        id: 1057,
        type: "hard",
        format: "multi-select",
        question: "To deploy paid and free store applications silently to managed mobile devices without requiring users to enter their personal Apple ID or Google account credentials, which TWO integrations are required? (Select TWO)",
        options: [
          "Apple Volume Purchase Program (VPP) via Apple Business Manager.",
          "Managed Google Play.",
          "Entra ID Application Proxy.",
          "Intune App Wrapping Tool."
        ],
        multiAnswers: [
          "Apple Volume Purchase Program (VPP) via Apple Business Manager.",
          "Managed Google Play."
        ],
        explanation: "Silent app deployment without user credentials requires enterprise app store integrations.",
        moreDetails: "For iOS, you must link Intune to the <b>Apple Volume Purchase Program (VPP)</b> via ABM to acquire device-based licenses. For Android Enterprise, Intune natively integrates with <b>Managed Google Play</b> to approve and silently push applications.",
        otherOptions: "Application Proxy is for publishing on-premises web apps. App Wrapping Tool is for injecting MAM SDKs into custom line-of-business apps.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/vpp-apps-ios"
      },
      {
        id: 1058,
        type: "medium",
        format: "multiple-choice",
        question: "When configuring an iOS/iPadOS enrollment profile for Automated Device Enrollment (ADE), you want to streamline the Out-of-Box Experience (OOBE) by hiding the Apple Pay and Siri setup screens. In which Intune blade do you configure this?",
        options: [
          "Device Configuration profiles -> Device restrictions.",
          "Devices -> iOS/iPadOS -> Enrollment program tokens -> Profiles.",
          "Apps -> App configuration policies.",
          "Tenant administration -> Customization."
        ],
        answer: "Devices -> iOS/iPadOS -> Enrollment program tokens -> Profiles.",
        explanation: "The customization of the Apple Setup Assistant (OOBE) is strictly handled within the <b>Enrollment program profile</b> linked to the ABM token.",
        moreDetails: "By editing the specific ADE profile under 'Enrollment program tokens', an administrator can choose exactly which screens to show or hide when the user first unboxes and boots the corporate iPhone.",
        otherOptions: "Device restrictions control the OS behavior after setup. App config controls apps. Tenant customization controls the Company Portal branding.",
        link: "https://learn.microsoft.com/en-us/mem/intune/enrollment/device-enrollment-program-enroll-ios#create-an-apple-enrollment-profile"
      },
      {
        id: 1059,
        type: "medium",
        format: "multiple-choice",
        question: "You are deploying Android tablets for a retail store floor. These devices will be locked to a single inventory app and run in Kiosk mode. Which Android Enterprise management scenario is explicitly designed for this use case?",
        options: [
          "Corporate-owned fully managed.",
          "Personally-owned work profile.",
          "Corporate-owned dedicated devices.",
          "Corporate-owned with a work profile."
        ],
        answer: "Corporate-owned dedicated devices.",
        explanation: "<b>Corporate-owned dedicated devices</b> (formerly known as COSU or Kiosk mode) is the Android Enterprise scenario built for single-purpose hardware.",
        moreDetails: "These devices are not associated with a specific user identity. Instead, they run the Microsoft Managed Home Screen or a locked-down kiosk profile, making them ideal for retail, digital signage, or factory floors.",
        otherOptions: "Fully managed is for a primary user who needs all corporate apps. Work profiles are for dual personal/work use.",
        link: "https://learn.microsoft.com/en-us/mem/intune/enrollment/android-kiosk-enroll"
      },
      {
        id: 1060,
        type: "hard",
        format: "multi-select",
        question: "When deploying App Protection Policies (MAM) to unmanaged (MAM-WE) mobile devices, a 'broker app' must be installed on the device to establish the secure MAM identity and broker Conditional Access checks. Which TWO apps serve as the broker app? (Select TWO)",
        options: [
          "Microsoft Authenticator (on iOS).",
          "Intune Company Portal (on Android).",
          "Microsoft Defender for Endpoint.",
          "Microsoft Edge."
        ],
        multiAnswers: [
          "Microsoft Authenticator (on iOS).",
          "Intune Company Portal (on Android)."
        ],
        explanation: "A broker app handles the heavy lifting of Entra ID token acquisition, Conditional Access evaluation, and establishing the MAM secure container on the device.",
        moreDetails: "On iOS/iPadOS, the <b>Microsoft Authenticator</b> app acts as the broker. On Android, the <b>Intune Company Portal</b> app acts as the broker (even if the device is not enrolled in MDM).",
        otherOptions: "Defender and Edge are MAM-enlightened apps, but they rely on the underlying broker app to function securely in an unmanaged state.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/app-protection-policy#app-protection-policies-for-iosipados-and-android"
      },
      {
        id: 1061,
        type: "hard",
        format: "multiple-choice",
        question: "You are creating an App Protection Policy for unmanaged Android devices. You configure the 'Require PIN for access' setting to 'Require'. How does this PIN differ from the device lock screen PIN?",
        options: [
          "It replaces the device PIN completely.",
          "It is a secondary, app-level PIN that the user must enter when launching a managed app, independent of the overall device lock screen.",
          "It requires the user to change their Entra ID password.",
          "It only applies if the device is enrolled in MDM."
        ],
        answer: "It is a secondary, app-level PIN that the user must enter when launching a managed app, independent of the overall device lock screen.",
        explanation: "MAM policies establish a secure container around the application data. The <b>App PIN</b> is specifically tied to that container.",
        moreDetails: "When a user opens a protected app (like Outlook), they must enter the App PIN, even if they already unlocked the phone using their device PIN. This ensures that if the phone is handed to a child or left unlocked, the corporate data remains secure.",
        otherOptions: "It does not replace the device PIN or Entra ID password. It applies heavily to unmanaged (MAM-WE) devices.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/app-protection-policy-settings-android#access-requirements"
      },
      {
        id: 1062,
        type: "hard",
        format: "multi-select",
        question: "You want to deploy a Device Configuration profile to corporate-owned, supervised iOS devices. Which TWO of the following restrictions can ONLY be applied if the device is in 'Supervised' mode? (Select TWO)",
        options: [
          "Block AirDrop.",
          "Block the removal of system apps (like Mail or Safari).",
          "Enforce a minimum password length.",
          "Block the built-in camera."
        ],
        multiAnswers: [
          "Block AirDrop.",
          "Block the removal of system apps (like Mail or Safari)."
        ],
        explanation: "Apple restricts highly intrusive management features to <b>Supervised</b> devices to prevent IT from overreaching on BYOD devices.",
        moreDetails: "Blocking AirDrop, preventing users from uninstalling system apps, modifying the wallpaper, and enabling Single App Mode all strictly require the device to be Supervised (typically via ADE/Apple Configurator).",
        otherOptions: "Enforcing a password length or blocking the camera can be applied to Unsupervised (standard MDM) devices via standard Exchange ActiveSync or MDM payloads.",
        link: "https://learn.microsoft.com/en-us/mem/intune/configuration/device-restrictions-ios"
      },
      {
        id: 1063,
        type: "hard",
        format: "multiple-choice",
        question: "You need to deploy an App Configuration policy to Microsoft Outlook on iOS. The devices are NOT enrolled in Intune (BYOD). Which 'Device enrollment type' must you select when creating the App Configuration policy?",
        options: [
          "Managed devices.",
          "Managed apps.",
          "Automated Device Enrollment.",
          "Line-of-business apps."
        ],
        answer: "Managed apps.",
        explanation: "Intune allows you to configure applications even on unmanaged (BYOD) devices, provided the app is MAM-enlightened (like Outlook).",
        moreDetails: "When creating the policy, selecting <b>'Managed apps'</b> targets the configuration directly to the app container via the App Protection Policy infrastructure, rather than relying on an MDM channel. 'Managed devices' is only for enrolled devices.",
        otherOptions: "Managed devices requires full MDM enrollment. ADE is for corporate Apple devices. LOB apps refers to custom in-house software.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/app-configuration-policies-overview"
      },
      {
        id: 1064,
        type: "medium",
        format: "multiple-choice",
        question: "A user leaves the company. They used their personal iPad to access corporate email via the Microsoft Outlook app using App Protection Policies (no MDM enrollment). How can you remove the corporate data from their device without touching their personal data?",
        options: [
          "Issue a 'Wipe' command from the Intune Devices blade.",
          "Issue a 'Retire' command from the Intune Devices blade.",
          "Issue an 'App Selective Wipe' command from the Intune Apps blade.",
          "Change the user's Entra ID password."
        ],
        answer: "Issue an 'App Selective Wipe' command from the Intune Apps blade.",
        explanation: "Because the device is entirely unmanaged (MAM-only), it will not appear in the standard Intune 'Devices' list, so you cannot use Wipe or Retire.",
        moreDetails: "Instead, you navigate to the Apps blade and issue an <b>App Selective Wipe</b> request. The next time the user's Outlook app checks in with the MAM service, it will cryptographically shred the corporate data container, leaving their personal iPad untouched.",
        otherOptions: "Wipe and Retire only work on MDM-enrolled devices. Changing the password blocks future access but doesn't instantly wipe the cached local data container.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/apps-selective-wipe"
      },
      {
        id: 1065,
        type: "hard",
        format: "multi-select",
        question: "You need to automatically connect fully managed Android devices to the corporate Wi-Fi network using WPA2-Enterprise certificate-based authentication. Which TWO profile types must be deployed as prerequisites before the Wi-Fi profile can successfully authenticate? (Select TWO)",
        options: [
          "A SCEP or PKCS certificate profile containing the client authentication certificate.",
          "A Trusted Certificate profile containing the Root CA that issued the Wi-Fi server's certificate.",
          "An App Protection Policy defining the Wi-Fi SSID.",
          "An OMA-URI custom profile to unlock the Android Keystore."
        ],
        multiAnswers: [
          "A SCEP or PKCS certificate profile containing the client authentication certificate.",
          "A Trusted Certificate profile containing the Root CA that issued the Wi-Fi server's certificate."
        ],
        explanation: "Enterprise Wi-Fi requiring certificates is a multi-step deployment in Intune.",
        moreDetails: "Before the Wi-Fi profile can be applied, the device must first trust the RADIUS server (deployed via a <b>Trusted Root CA profile</b>) and it must possess its own identity to present to the network (deployed via a <b>SCEP or PKCS profile</b>). If either is missing, the WPA2-Enterprise connection fails.",
        otherOptions: "MAM policies do not manage Wi-Fi networks. OMA-URI is not needed as Intune natively supports Wi-Fi and certificate profiles for Android Enterprise.",
        link: "https://learn.microsoft.com/en-us/mem/intune/configuration/wi-fi-settings-configure"
      },
      {
        id: 1066,
        type: "easy",
        format: "multiple-choice",
        question: "Which Android Enterprise management mode is designed exclusively for corporate-owned devices associated with a single user, giving the organization complete control over the entire device, apps, and data?",
        options: [
          "Corporate-owned fully managed.",
          "Corporate-owned dedicated device.",
          "Corporate-owned with a work profile.",
          "Personally-owned work profile."
        ],
        answer: "Corporate-owned fully managed.",
        explanation: "<b>Corporate-owned fully managed</b> (formerly COBO - Corporate Owned, Business Only) is the most comprehensive management mode for Android.",
        moreDetails: "It treats the entire device as a corporate asset. IT has full visibility, can deploy apps silently without a work profile boundary, can track the device, and can perform a full factory wipe.",
        otherOptions: "Dedicated is for kiosks (no primary user). Work profiles are for BYOD or dual-use (COPE) devices.",
        link: "https://learn.microsoft.com/en-us/mem/intune/enrollment/android-fully-managed-enroll"
      },
      {
        id: 1067,
        type: "hard",
        format: "multi-select",
        question: "You want to enforce that mobile users can only access Exchange Online if they use an app that protects corporate data (MAM). Which TWO configurations must work together to achieve this? (Select TWO)",
        options: [
          "An Intune App Protection Policy targeted to the user's Entra ID group.",
          "An Entra ID Conditional Access policy with the 'Require app protection policy' grant control.",
          "An Intune Device Compliance policy targeted to the device.",
          "A Microsoft Defender Vulnerability Management policy."
        ],
        multiAnswers: [
          "An Intune App Protection Policy targeted to the user's Entra ID group.",
          "An Entra ID Conditional Access policy with the 'Require app protection policy' grant control."
        ],
        explanation: "To secure data inside unmanaged mobile apps, you need both configuration and enforcement.",
        moreDetails: "First, you create the <b>Intune App Protection Policy</b> (MAM) to define the DLP rules (like blocking copy/paste). Second, you enforce its usage by creating an <b>Entra ID Conditional Access policy</b> requiring the 'Require app protection policy' grant control. Without the CA policy, users could just use the native mail app and bypass MAM entirely.",
        otherOptions: "Device compliance requires full MDM enrollment. Defender focuses on malware, not enforcing app DLP containers.",
        link: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-conditional-access-grant#require-app-protection-policy"
      },
      {
        id: 1068,
        type: "medium",
        format: "multiple-choice",
        question: "When configuring App Protection Policies (MAM) for iOS devices that are NOT enrolled in Intune (MAM-WE), users are prompted to install a specific app before they can access their managed corporate apps (like Outlook). Which app is this?",
        options: [
          "Microsoft Authenticator.",
          "Intune Company Portal.",
          "Microsoft Defender.",
          "Apple TestFlight."
        ],
        answer: "Microsoft Authenticator.",
        explanation: "For iOS/iPadOS devices that are unmanaged, the <b>Microsoft Authenticator</b> app acts as the essential 'broker' app.",
        moreDetails: "It facilitates the secure authentication with Entra ID, checks Conditional Access compliance, and anchors the App Protection Policy container. (On Android, the Intune Company Portal app serves this exact same broker function, even if the device isn't enrolled).",
        otherOptions: "Company portal is the broker for Android, not iOS. Defender provides threat defense. TestFlight is for beta apps.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/app-protection-policy#app-protection-policies-for-iosipados-and-android"
      }
    ]
  },
  {
    id: 997,
    term: "Endpoint Security",
    category: "Deploy Windows client",
    questions: [
      {
        id: 1069,
        type: "hard",
        format: "multiple-choice",
        question: "Microsoft frequently releases new versions of the 'MDM Security Baseline' in Intune. When a new version is published, what happens to your existing assigned baseline profiles?",
        options: [
          "They are automatically upgraded to the new version, applying the new default settings immediately.",
          "They remain on their current version. You must manually select the profile, choose 'Change Version', and review any setting differences before deploying the update.",
          "The existing profile is deleted, and you must create a new one from scratch.",
          "The profile enters a 'Suspended' state until a Global Administrator approves the update."
        ],
        answer: "They remain on their current version. You must manually select the profile, choose 'Change Version', and review any setting differences before deploying the update.",
        explanation: "Intune does not automatically upgrade security baselines because new settings could potentially break corporate applications or workflows.",
        moreDetails: "Administrators must manually initiate the 'Change Version' process. Intune provides a CSV download during this process to help you compare the old settings versus the new default settings so you can test the impact before broadly deploying.",
        otherOptions: "Automatic upgrades are dangerous. Profiles are never deleted or suspended automatically.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/security-baselines-update"
      },
      {
        id: 1070,
        type: "hard",
        format: "multi-select",
        question: "You want to enable silent BitLocker encryption on your Windows Autopilot devices without requiring any user interaction. Which TWO of the following hardware or configuration prerequisites MUST be met? (Select TWO)",
        options: [
          "The device must have a TPM (Trusted Platform Module) chip enabled.",
          "The user must be a Local Administrator on the device.",
          "The 'Allow standard users to enable encryption during Autopilot' setting must be set to 'Yes' if the user is not an admin.",
          "The device must be Hybrid Entra ID joined (Cloud-only Entra ID join is not supported)."
        ],
        multiAnswers: [
          "The device must have a TPM (Trusted Platform Module) chip enabled.",
          "The 'Allow standard users to enable encryption during Autopilot' setting must be set to 'Yes' if the user is not an admin."
        ],
        explanation: "Silent BitLocker encryption is a seamless security feature but requires specific prerequisites.",
        moreDetails: "It strictly requires a <b>TPM (Trusted Platform Module)</b> to store the encryption keys securely without user intervention. Furthermore, if you deploy devices as 'Standard Users' (which is best practice), you must explicitly configure the Intune Endpoint Security policy to <b>allow standard users to trigger the encryption</b> during the Autopilot flow.",
        otherOptions: "Users do not need to be Local Admins if the correct policy is applied. Cloud-only Entra ID join is fully supported for BitLocker.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/encrypt-devices#silently-enable-bitlocker-on-devices"
      },
      {
        id: 1071,
        type: "medium",
        format: "multiple-choice",
        question: "You need to protect critical corporate data from ransomware by blocking untrusted applications from modifying files in standard document folders (like Documents, Pictures, and Desktop). Which Endpoint Security feature explicitly provides this protection?",
        options: [
          "Controlled Folder Access (part of Attack Surface Reduction).",
          "Windows Defender Credential Guard.",
          "BitLocker Drive Encryption.",
          "Microsoft Defender Application Guard."
        ],
        answer: "Controlled Folder Access (part of Attack Surface Reduction).",
        explanation: "<b>Controlled Folder Access (CFA)</b> is a specific Attack Surface Reduction (ASR) rule designed specifically to combat ransomware.",
        moreDetails: "It monitors the system's protected folders (like C:\\Users\\...\\Documents) and strictly blocks unrecognized or malicious executable files from modifying or encrypting the files inside those directories.",
        otherOptions: "Credential Guard protects identities. BitLocker protects data at rest from physical theft. Application Guard creates isolated browser containers.",
        link: "https://learn.microsoft.com/en-us/defender-endpoint/controlled-folders"
      },
      {
        id: 1072,
        type: "hard",
        format: "multiple-choice",
        question: "You are configuring Windows Local Administrator Password Solution (Windows LAPS) via Intune Endpoint Security. You want the local administrator password to automatically rotate after an IT helpdesk technician views it in the Entra ID portal. Which setting must you configure in the LAPS policy?",
        options: [
          "Post-authentication actions",
          "Password age (days)",
          "Administrator account name",
          "Backup directory"
        ],
        answer: "Post-authentication actions",
        explanation: "Windows LAPS in Intune introduces <b>Post-authentication actions</b> to improve security after a password is used.",
        moreDetails: "When a technician requests and views the LAPS password, a post-authentication action can be configured to automatically reset that password after a specified grace period (e.g., 24 hours), ensuring the technician cannot hoard the password for future unauthorized access.",
        otherOptions: "Password age dictates the standard recurring rotation (e.g., every 30 days). Backup directory determines where the password is saved (Entra ID vs AD).",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/windows-laps-policy"
      },
      {
        id: 1073,
        type: "medium",
        format: "multiple-choice",
        question: "A local administrator on a Windows 11 device attempts to disable real-time protection in the Windows Security app, but the toggle is greyed out. A policy in Intune's Endpoint Security Antivirus blade is enforcing this. Which specific feature ensures that malicious apps or rogue local admins cannot disable Microsoft Defender Antivirus?",
        options: [
          "Tamper Protection",
          "Exploit Protection",
          "Attack Surface Reduction (ASR)",
          "Network Protection"
        ],
        answer: "Tamper Protection",
        explanation: "<b>Tamper Protection</b> locks down Microsoft Defender Antivirus settings so they cannot be altered via the local registry, Group Policy, or UI, even by users with Local Administrator rights.",
        moreDetails: "It ensures that only the centralized MDM authority (Intune/Defender for Endpoint) can manage the security configuration, effectively stopping malware from turning off the antivirus engine before an attack.",
        otherOptions: "Exploit protection stops memory exploits. ASR minimizes attack vectors. Network protection blocks malicious IPs.",
        link: "https://learn.microsoft.com/en-us/defender-endpoint/prevent-changes-to-security-settings-with-tamper-protection"
      },
      {
        id: 1074,
        type: "hard",
        format: "multiple-choice",
        question: "You have an Intune Device Configuration profile that sets the Defender Antivirus 'Scan Archive Files' setting to 'Not Configured'. You also have an Endpoint Security Antivirus policy assigned to the same device that sets 'Scan Archive Files' to 'Allowed'. What is the resulting state on the device?",
        options: [
          "The device reports a 'Conflict' state and neither policy is applied.",
          "The setting is applied as 'Allowed' because Endpoint Security policies always overwrite Device Configuration profiles.",
          "The setting is applied as 'Allowed' because 'Not Configured' simply ignores the setting, allowing the configured policy to win.",
          "The device crashes during policy sync."
        ],
        answer: "The setting is applied as 'Allowed' because 'Not Configured' simply ignores the setting, allowing the configured policy to win.",
        explanation: "In Intune, a state of <b>'Not Configured'</b> is essentially a null value—it tells the MDM engine to ignore the setting.",
        moreDetails: "Because the Device Configuration profile ignores it, there is no actual conflict. The Endpoint Security policy provides the explicit 'Allowed' instruction, which successfully applies to the device. A conflict only occurs when two profiles send differing explicit values (e.g., 'Allowed' vs 'Blocked').",
        otherOptions: "Conflicts only happen with competing explicit values. Endpoint Security does not inherently rank higher than Device Configuration in Intune's conflict resolution.",
        link: "https://learn.microsoft.com/en-us/mem/intune/configuration/device-profile-troubleshoot"
      },
      {
        id: 1075,
        type: "medium",
        format: "multi-select",
        question: "You recently purchased Microsoft Defender for Endpoint licenses and need to onboard your Intune-managed Windows devices. Which TWO methods can you use to silently onboard these devices without deploying a manual script? (Select TWO)",
        options: [
          "Create an Endpoint Security 'Endpoint Detection and Response' policy in Intune and deploy the onboarding package.",
          "Enable the 'Connect Windows devices to Microsoft Defender for Endpoint' toggle in the Intune Advanced Threat Protection connector.",
          "Email the onboarding .zip file to users and ask them to run the batch file.",
          "Deploy an Attack Surface Reduction (ASR) policy."
        ],
        multiAnswers: [
          "Create an Endpoint Security 'Endpoint Detection and Response' policy in Intune and deploy the onboarding package.",
          "Enable the 'Connect Windows devices to Microsoft Defender for Endpoint' toggle in the Intune Advanced Threat Protection connector."
        ],
        explanation: "Integrating Intune with Defender for Endpoint allows for seamless, silent onboarding.",
        moreDetails: "You first establish the service-to-service connection in Tenant Administration (the <b>Advanced Threat Protection connector</b>). Once connected, you deploy an <b>Endpoint Detection and Response (EDR)</b> profile in the Endpoint Security blade, which automatically distributes the onboarding blob to the Windows devices.",
        otherOptions: "Manual scripts defeat the purpose of MDM. ASR rules protect devices but do not perform the onboarding connection.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/advanced-threat-protection-configure#create-and-assign-the-edr-policy"
      },
      {
        id: 1076,
        type: "hard",
        format: "multiple-choice",
        question: "Microsoft Defender Vulnerability Management discovers an outdated version of Adobe Reader with known CVEs across 50 devices. The security team uses the Microsoft Defender portal to open a 'Security Task' for the IT team to update the software. Where does the IT administrator view and accept this task?",
        options: [
          "Intune Admin Center -> Endpoint security -> Security tasks.",
          "Entra ID -> Identity Protection -> Risky users.",
          "Intune Admin Center -> Apps -> App Protection Policies.",
          "Microsoft 365 Admin Center -> Message center."
        ],
        answer: "Intune Admin Center -> Endpoint security -> Security tasks.",
        explanation: "The integration between Defender and Intune creates a seamless workflow between Security and IT Operations.",
        moreDetails: "When the SecOps team creates a remediation request in the Defender portal, it automatically syncs into Intune under <b>Endpoint security -> Security tasks</b>. The IT admin can view the affected devices, accept the task, deploy the updated app, and mark it as complete.",
        otherOptions: "Entra ID Identity Protection is for user account risk. Message center is for Microsoft service alerts.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/tenant-attach-security-tasks"
      },
      {
        id: 1077,
        type: "medium",
        format: "multiple-choice",
        question: "You want to deploy a new Attack Surface Reduction (ASR) rule: 'Block executable files from running unless they meet a prevalence, age, or trusted list criterion'. However, you are worried it might break legacy Line-of-Business apps. How should you deploy the rule initially?",
        options: [
          "Set the rule to 'Block' but assign it to 'All Devices'.",
          "Set the rule to 'Audit mode' to monitor what would have been blocked without actually stopping the processes.",
          "Set the rule to 'Warn mode' and tell users to ignore the warning.",
          "Do not deploy the rule until you manually test every app on a single machine."
        ],
        answer: "Set the rule to 'Audit mode' to monitor what would have been blocked without actually stopping the processes.",
        explanation: "ASR rules can be highly disruptive if deployed aggressively. Microsoft strongly recommends using <b>Audit mode</b> first.",
        moreDetails: "In Audit mode, the ASR rule evaluates processes and logs what it <i>would</i> have blocked to the Windows Event Logs and Defender portal, without actually stopping the application from running. This allows IT to identify and add necessary exclusions before switching the rule to 'Block'.",
        otherOptions: "Deploying to Block immediately causes widespread disruption. Manual testing is inefficient.",
        link: "https://learn.microsoft.com/en-us/defender-endpoint/enable-attack-surface-reduction"
      },
      {
        id: 1078,
        type: "easy",
        format: "multi-select",
        question: "When configuring a Windows Firewall policy in the Intune Endpoint Security blade, which TWO of the following network profiles can you configure rules for? (Select TWO)",
        options: [
          "Domain network profile.",
          "Public network profile.",
          "Corporate VPN profile.",
          "Guest Wi-Fi profile."
        ],
        multiAnswers: [
          "Domain network profile.",
          "Public network profile."
        ],
        explanation: "Windows Defender Firewall categorizes network connections into three core profiles: Domain, Private, and Public.",
        moreDetails: "In Intune's Firewall policies, you explicitly configure settings (like turning the firewall on or blocking inbound connections) for the <b>Domain</b>, <b>Private</b>, and <b>Public</b> profiles.",
        otherOptions: "Corporate VPN and Guest Wi-Fi are not native Windows Firewall profiles; they fall under the Domain/Private/Public categories depending on network authentication and configuration.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/endpoint-security-firewall-profile-settings"
      },
      {
        id: 1079,
        type: "medium",
        format: "multiple-choice",
        question: "Which Microsoft Defender feature, configurable via Intune Endpoint Security, specifically prevents users from using any application to access dangerous domains or IP addresses that host phishing scams, exploits, and other malicious content on the internet?",
        options: [
          "Network Protection.",
          "AppLocker.",
          "Controlled Folder Access.",
          "Windows Defender Credential Guard."
        ],
        answer: "Network Protection.",
        explanation: "<b>Network Protection</b> extends the capabilities of Microsoft Defender SmartScreen to all outbound network traffic on the OS.",
        moreDetails: "Instead of just protecting the web browser, Network Protection blocks outbound connections from any application (e.g., an unauthorized script or a malicious app) that tries to contact known malicious infrastructure.",
        otherOptions: "AppLocker restricts what apps can run. CFA protects local files. Credential Guard protects passwords.",
        link: "https://learn.microsoft.com/en-us/defender-endpoint/network-protection"
      },
      {
        id: 1080,
        type: "medium",
        format: "multiple-choice",
        question: "What is the primary advantage of using 'Security Baselines' in Intune rather than building custom Endpoint Security profiles from scratch?",
        options: [
          "They are free and do not require Intune licenses.",
          "They represent Microsoft's continuously updated, pre-configured group of best-practice settings tailored by security experts.",
          "They bypass Entra ID Conditional Access policies.",
          "They are the only way to manage macOS devices."
        ],
        answer: "They represent Microsoft's continuously updated, pre-configured group of best-practice settings tailored by security experts.",
        explanation: "Intune <b>Security Baselines</b> are pre-packaged templates containing Microsoft's recommended security settings for Windows and Edge.",
        moreDetails: "Instead of manually configuring hundreds of individual settings (like disabling SMBv1, enabling BitLocker, enforcing password lengths), IT admins can apply the baseline to instantly achieve a known good security posture based on industry best practices.",
        otherOptions: "They still require standard licensing. They do not bypass CA policies. macOS has its own Endpoint Security profiles but not a generic Microsoft 'baseline' in the same way Windows does.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/security-baselines"
      },
      {
        id: 1081,
        type: "hard",
        format: "multi-select",
        question: "You want to protect users from downloading malicious files and visiting phishing sites. Which TWO environments natively integrate with Microsoft Defender SmartScreen settings deployed via Intune Endpoint Security? (Select TWO)",
        options: [
          "Microsoft Edge.",
          "Windows OS (File Explorer / App Execution).",
          "Google Chrome natively (without extensions).",
          "Mozilla Firefox."
        ],
        multiAnswers: [
          "Microsoft Edge.",
          "Windows OS (File Explorer / App Execution)."
        ],
        explanation: "Microsoft Defender SmartScreen is natively built into the Microsoft ecosystem.",
        moreDetails: "It natively protects <b>Microsoft Edge</b> (blocking malicious URLs and downloads) and the <b>Windows Operating System itself</b> (evaluating unverified executables launched from File Explorer).",
        otherOptions: "Google Chrome and Mozilla Firefox do not natively integrate with SmartScreen without third-party extensions; they use their own Safe Browsing technologies.",
        link: "https://learn.microsoft.com/en-us/windows/security/threat-protection/microsoft-defender-smartscreen/microsoft-defender-smartscreen-overview"
      },
      {
        id: 1082,
        type: "medium",
        format: "multiple-choice",
        question: "Which Endpoint Security Account Protection feature uses virtualization-based security (VBS) to isolate secrets so that only privileged system software can access them, protecting against Pass-the-Hash and Pass-the-Ticket attacks?",
        options: [
          "Windows Defender Credential Guard.",
          "Windows Hello for Business.",
          "Attack Surface Reduction.",
          "Application Guard."
        ],
        answer: "Windows Defender Credential Guard.",
        explanation: "<b>Windows Defender Credential Guard</b> leverages hardware-based virtualization (VBS) to secure NT hashes and Kerberos tickets.",
        moreDetails: "By moving these secrets into an isolated virtualized container (the secure enclave), it prevents even administrators and kernel-level malware from extracting them, effectively neutralizing Pass-the-Hash attacks.",
        otherOptions: "Windows Hello for Business is an authentication method. Application Guard isolates browsers.",
        link: "https://learn.microsoft.com/en-us/windows/security/identity-protection/credential-guard/"
      },
      {
        id: 1083,
        type: "hard",
        format: "multiple-choice",
        question: "You need to enforce a strict zero-trust application execution environment on Windows 11 kiosks. You only want applications signed by a specific corporate certificate to run. Which feature, deployable via Intune, is Microsoft's recommended modern solution for this application whitelisting?",
        options: [
          "Windows Defender Application Control (WDAC).",
          "Microsoft Defender Antivirus (Full Scan).",
          "BitLocker Drive Encryption.",
          "Windows Defender Firewall with Advanced Security."
        ],
        answer: "Windows Defender Application Control (WDAC).",
        explanation: "<b>Windows Defender Application Control (WDAC)</b> is Microsoft's premier app-control solution (replacing older AppLocker implementations).",
        moreDetails: "WDAC creates a strict execution environment where only trusted, signed, or specifically whitelisted applications and scripts can run. Anything not explicitly trusted by the WDAC policy is blocked from executing.",
        otherOptions: "Antivirus relies on definitions to catch known bad apps, WDAC blocks everything by default. BitLocker and Firewall do not control app execution.",
        link: "https://learn.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/windows-defender-application-control"
      },
      {
        id: 1084,
        type: "medium",
        format: "multi-select",
        question: "You are configuring a 'Device Control' profile under Attack Surface Reduction in Intune. You want to prevent data exfiltration via USB drives. Which TWO actions can you configure for removable storage? (Select TWO)",
        options: [
          "Block write access to all removable storage.",
          "Block read access to all removable storage.",
          "Encrypt the USB drive using BitLocker To Go automatically without user interaction.",
          "Physically disable the USB port hardware via BIOS/UEFI."
        ],
        multiAnswers: [
          "Block write access to all removable storage.",
          "Block read access to all removable storage."
        ],
        explanation: "The Device Control ASR policy provides granular control over removable storage devices (like USB flash drives).",
        moreDetails: "Administrators can configure policies to <b>Block write access</b> (preventing data exfiltration but allowing reading) or completely <b>Block read access</b> (preventing the mounting of the drive entirely).",
        otherOptions: "BitLocker To Go requires user interaction to set a password. Intune Device Control manages the Windows OS layer, not the BIOS/UEFI hardware layer.",
        link: "https://learn.microsoft.com/en-us/defender-endpoint/device-control-removable-storage-access-control"
      },
      {
        id: 1085,
        type: "easy",
        format: "multiple-choice",
        question: "You are expanding your Endpoint Security footprint. Which of the following Intune Endpoint Security policies is fully supported for macOS devices?",
        options: [
          "FileVault (Disk Encryption).",
          "Windows Defender Credential Guard.",
          "Windows LAPS.",
          "BitLocker."
        ],
        answer: "FileVault (Disk Encryption).",
        explanation: "Intune Endpoint Security natively supports disk encryption for multiple platforms.",
        moreDetails: "While BitLocker is used for Windows, the <b>FileVault</b> profile in Endpoint Security is specifically designed to manage full-disk encryption for macOS devices, allowing Intune to securely escrow the recovery keys.",
        otherOptions: "Credential Guard, LAPS, and BitLocker are strictly Windows technologies.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/encrypt-devices-filevault"
      },
      {
        id: 1086,
        type: "hard",
        format: "multiple-choice",
        question: "Your organization uses a third-party Antivirus as the primary real-time protection on Windows devices, but you have onboarded the devices to Microsoft Defender for Endpoint. You want Defender to step in and terminate malicious processes if the third-party AV misses them. Which feature should you enable?",
        options: [
          "Endpoint Detection and Response (EDR) in block mode.",
          "Attack Surface Reduction (ASR) in Audit mode.",
          "Controlled Folder Access.",
          "Tamper Protection."
        ],
        answer: "Endpoint Detection and Response (EDR) in block mode.",
        explanation: "When a third-party AV is active, Microsoft Defender Antivirus goes into 'Passive Mode'.",
        moreDetails: "However, if you enable <b>EDR in block mode</b>, Microsoft Defender for Endpoint acts as a safety net. If it detects a malicious artifact that the primary AV missed, EDR in block mode will actively intervene, terminate the process, and block the threat, even though Defender is in passive mode.",
        otherOptions: "ASR in Audit mode doesn't block anything. Tamper protection locks settings. CFA protects folders.",
        link: "https://learn.microsoft.com/en-us/defender-endpoint/edr-in-block-mode"
      }
    ]
  },
  {
    id: 998,
    term: "Hybrid & Co-Management",
    category: "Deploy Windows client",
    questions: [
      {
        id: 1087,
        type: "medium",
        format: "multiple-choice",
        question: "You have enabled co-management in Configuration Manager (SCCM). You want to ensure that Intune is responsible for deploying all Windows updates to devices, but SCCM continues to handle all application deployments. Which co-management workload slider must you move to 'Intune'?",
        options: [
          "Windows Update policies",
          "Client apps",
          "Compliance policies",
          "Device configuration"
        ],
        answer: "Windows Update policies",
        explanation: "In a co-managed environment, administrators use 'workloads' to dictate which authority (Intune or SCCM) controls specific features.",
        moreDetails: "By moving the <b>Windows Update policies</b> slider to Intune, the device will begin looking to Intune (and by extension, Windows Update for Business) for feature and quality updates, ignoring SCCM Software Update Deployments. Leaving 'Client apps' on SCCM ensures SCCM continues managing software delivery.",
        otherOptions: "Compliance policies handle conditional access reporting. Device configuration handles generic MDM profiles. Client apps handles software deployment.",
        link: "https://learn.microsoft.com/en-us/mem/configmgr/comanage/workloads"
      },
      {
        id: 1088,
        type: "hard",
        format: "multi-select",
        question: "You are planning to deploy Windows Autopilot using the 'Hybrid Entra ID joined' scenario. Which TWO of the following infrastructural components are strictly required for this specific scenario? (Select TWO)",
        options: [
          "Intune Connector for Active Directory installed on an on-premises Windows Server.",
          "A line-of-sight to an on-premises Active Directory Domain Controller during the deployment.",
          "A Microsoft Configuration Manager (SCCM) Site Server.",
          "Entra ID Cloud Sync (instead of Entra Connect Sync)."
        ],
        multiAnswers: [
          "Intune Connector for Active Directory installed on an on-premises Windows Server.",
          "A line-of-sight to an on-premises Active Directory Domain Controller during the deployment."
        ],
        explanation: "Hybrid Autopilot is significantly more complex than cloud-native Autopilot because it must securely join the legacy on-premises Active Directory.",
        moreDetails: "It strictly requires the <b>Intune Connector for Active Directory</b> (to securely request offline domain join blobs) and the physical device must have a <b>direct network line-of-sight to an on-premises Domain Controller</b> (usually via VPN) to process the domain join and authenticate the user's first login.",
        otherOptions: "SCCM is not required for Autopilot. Entra Connect Sync (formerly AD Connect) is required, but Cloud Sync is not a strict replacement for device sync in this scenario yet.",
        link: "https://learn.microsoft.com/en-us/autopilot/windows-autopilot-hybrid"
      },
      {
        id: 1089,
        type: "medium",
        format: "multiple-choice",
        question: "Which feature allows an IT administrator to view device details, run CMPivot, and trigger Defender antivirus scans on on-premises Configuration Manager (SCCM) devices directly from the cloud-based Intune Admin Center, WITHOUT enrolling those devices into Intune MDM?",
        options: [
          "Tenant Attach.",
          "Co-management.",
          "Endpoint Analytics.",
          "Microsoft Defender for Endpoint."
        ],
        answer: "Tenant Attach.",
        explanation: "<b>Tenant Attach</b> connects your on-premises SCCM infrastructure to the cloud.",
        moreDetails: "It syncs the device records up to the Intune admin center so helpdesk staff can perform remote actions (like CMPivot, machine policy syncs, or Defender scans) from a single web portal, entirely bypassing the need to fully MDM-enroll the devices via Co-management.",
        otherOptions: "Co-management requires full MDM enrollment. Endpoint Analytics provides performance metrics. Defender is for security monitoring.",
        link: "https://learn.microsoft.com/en-us/mem/configmgr/tenant-attach/"
      },
      {
        id: 1090,
        type: "hard",
        format: "multiple-choice",
        question: "Your co-managed Windows devices receive an on-premises Group Policy Object (GPO) setting and an Intune Device Configuration profile setting that configure the exact same Windows feature differently. By default, which setting takes precedence, and how can you change this behavior?",
        options: [
          "GPO takes precedence by default. You can change this by configuring the 'MDMWinsOverGP' CSP setting in Intune.",
          "Intune takes precedence by default. You cannot change this behavior in a co-managed state.",
          "GPO takes precedence by default. You can change this by moving the 'Device configuration' workload slider to Intune.",
          "Intune takes precedence by default. You can change this by configuring a WMI filter on the GPO."
        ],
        answer: "GPO takes precedence by default. You can change this by configuring the 'MDMWinsOverGP' CSP setting in Intune.",
        explanation: "In a hybrid environment, legacy on-premises Group Policy wins conflicts against modern MDM (Intune) policies by default.",
        moreDetails: "To facilitate a shift to cloud management without deleting all GPOs immediately, administrators can deploy a custom OMA-URI setting called <b>ControlPolicyConflict/MDMWinsOverGP</b> via Intune. When applied, the Windows client will enforce the Intune policy over the GPO in the event of a direct conflict.",
        otherOptions: "Moving the workload slider to Intune tells SCCM to back off, but does NOT stop Active Directory Group Policy from applying. GPO will still win without the MDMWinsOverGP CSP.",
        link: "https://learn.microsoft.com/en-us/windows/client-management/mdm/policy-csp-controlpolicyconflict"
      },
      {
        id: 1091,
        type: "medium",
        format: "multiple-choice",
        question: "You want to enable co-management for existing cloud-native devices that are already Entra ID joined and managed by Intune. How do you deploy the Configuration Manager (SCCM) client to these Intune-managed devices?",
        options: [
          "Create a Line-of-Business (LOB) or Win32 app in Intune containing the CCMSetup.msi and installation arguments.",
          "Run the 'Discover and deploy' wizard in the SCCM console.",
          "Download the SCCM agent from the Microsoft Store for Business.",
          "Use an Autopilot Deployment Profile to inject the SCCM agent during OOBE."
        ],
        answer: "Create a Line-of-Business (LOB) or Win32 app in Intune containing the CCMSetup.msi and installation arguments.",
        explanation: "To bootstrap SCCM onto internet-based, Intune-managed devices, you use Intune's app deployment capabilities.",
        moreDetails: "You package the <b>CCMSetup.msi</b> as an Intune Line-of-Business (LOB) app or Win32 app. You must include command-line arguments specifying the Cloud Management Gateway (CMG) details so the agent knows how to reach the on-premises SCCM environment securely over the internet.",
        otherOptions: "SCCM cannot discover or push to internet devices that don't already have an agent or VPN. Autopilot profiles don't inject agents directly.",
        link: "https://learn.microsoft.com/en-us/mem/configmgr/comanage/how-to-prepare-win10#install-the-configuration-manager-client"
      },
      {
        id: 1092,
        type: "hard",
        format: "multiple-choice",
        question: "In the Configuration Manager (SCCM) console, you move the 'Compliance policies' co-management workload slider to 'Pilot Intune'. What is the exact effect of this action?",
        options: [
          "Intune evaluates compliance for the devices in the specific Pilot collection in SCCM; SCCM evaluates compliance for all other co-managed devices.",
          "Intune evaluates compliance for all co-managed devices, but in a 'report-only' mode that does not block access.",
          "Both Intune and SCCM evaluate compliance simultaneously, and if either fails, the device is marked non-compliant.",
          "Intune takes over compliance for 10% of devices randomly to test the policies."
        ],
        answer: "Intune evaluates compliance for the devices in the specific Pilot collection in SCCM; SCCM evaluates compliance for all other co-managed devices.",
        explanation: "The <b>'Pilot Intune'</b> workload setting allows for controlled, phased migrations of authority.",
        moreDetails: "When a workload is set to Pilot, you must select a specific SCCM device collection to act as the pilot group. Only devices inside that collection will look to Intune for that workload. Devices outside the collection will continue to look to SCCM.",
        otherOptions: "It is not a global report-only mode, nor is it a random 10% sample. It is strictly based on the defined SCCM collection.",
        link: "https://learn.microsoft.com/en-us/mem/configmgr/comanage/how-to-switch-workloads"
      },
      {
        id: 1093,
        type: "hard",
        format: "multi-select",
        question: "Which TWO of the following scenarios natively require a Cloud Management Gateway (CMG) in a Microsoft Configuration Manager (SCCM) environment? (Select TWO)",
        options: [
          "Deploying software updates from SCCM to co-managed devices operating securely over the internet without a VPN.",
          "Bootstrapping the SCCM client installation on a remote internet-only device managed by Intune.",
          "Synchronizing Entra ID users to on-premises Active Directory.",
          "Utilizing Intune App Protection Policies (MAM) on unmanaged mobile devices."
        ],
        multiAnswers: [
          "Deploying software updates from SCCM to co-managed devices operating securely over the internet without a VPN.",
          "Bootstrapping the SCCM client installation on a remote internet-only device managed by Intune."
        ],
        explanation: "The <b>Cloud Management Gateway (CMG)</b> is an Azure-based proxy that allows internet-based clients to communicate with the on-premises SCCM infrastructure.",
        moreDetails: "If a remote worker is not on the corporate VPN, SCCM cannot manage them or deploy software to them unless a CMG is in place. Similarly, if Intune deploys the CCMSetup.msi to a remote Autopilot device, the installer needs the CMG address to securely download the rest of the agent binaries from the on-premises server.",
        otherOptions: "Entra ID Connect handles identity sync, not CMG. Intune MAM operates entirely in the cloud and does not interact with SCCM.",
        link: "https://learn.microsoft.com/en-us/mem/configmgr/core/clients/manage/cmg/plan-cloud-management-gateway"
      },
      {
        id: 1094,
        type: "medium",
        format: "multiple-choice",
        question: "You are configuring Hybrid Entra ID join for existing on-premises Active Directory domain-joined computers. You have installed Entra ID Connect. Which specific sync feature must be enabled in Entra ID Connect to facilitate the Hybrid Join process?",
        options: [
          "Device Synchronization (Computer objects in the synced OUs).",
          "Device Writeback.",
          "Password Hash Synchronization (PHS)",
          "Group Writeback."
        ],
        answer: "Device Synchronization (Computer objects in the synced OUs).",
        explanation: "To achieve a Hybrid Entra ID join state, the on-premises Active Directory computer object must be known to the cloud.",
        moreDetails: "You must ensure that the OUs containing your computer objects are selected for synchronization in Entra Connect. Entra Connect syncs the device object up to Entra ID, preparing the cloud identity so the physical device can complete the hybrid join registration process.",
        otherOptions: "Device writeback takes Intune cloud-only devices and writes them down to on-premises AD (rarely used). PHS is for user passwords, not devices.",
        link: "https://learn.microsoft.com/en-us/entra/identity/devices/how-to-hybrid-join"
      },
      {
        id: 1095,
        type: "hard",
        format: "multiple-choice",
        question: "A remote user unboxes a new laptop at their home. The laptop is targeted with a Windows Autopilot 'Hybrid Entra ID joined' profile. What critical network requirement must be satisfied for the user to successfully log in to the Windows desktop for the first time?",
        options: [
          "The device must establish a VPN connection (typically pre-logon or device tunnel) to authenticate the user against the on-premises Domain Controller.",
          "The device must connect to an open, unencrypted Wi-Fi network to bypass firewall rules.",
          "The device must download a Cloud Management Gateway (CMG) certificate from Intune.",
          "The device must be connected directly via an Ethernet cable to the home router."
        ],
        answer: "The device must establish a VPN connection (typically pre-logon or device tunnel) to authenticate the user against the on-premises Domain Controller.",
        explanation: "Unlike cloud-native Autopilot where the user authenticates against Entra ID directly over the internet, <b>Hybrid Autopilot</b> creates a legacy on-premises Active Directory computer account.",
        moreDetails: "Because the computer is joined to the on-prem domain, the first time a user attempts to log in to Windows, the OS must contact an on-premises Domain Controller to verify the password and generate the local profile cache. If the user is remote, an Always-On VPN (Device Tunnel) or pre-logon VPN client is strictly required to bridge this gap.",
        otherOptions: "Without a line-of-sight to the DC via VPN, the login will fail with an 'RPC server unavailable' or 'no logon servers' error. CMG is for SCCM management, not domain authentication.",
        link: "https://learn.microsoft.com/en-us/autopilot/windows-autopilot-hybrid#vpn-requirements"
      },
      {
        id: 1096,
        type: "hard",
        format: "multiple-choice",
        question: "In a co-managed environment, the 'Compliance policies' workload is shifted entirely to Intune. However, the organization still uses Configuration Manager (SCCM) baseline configurations to check deep registry settings. How is the final compliance state in Entra ID determined for Conditional Access?",
        options: [
          "Intune can evaluate its own policies and optionally require the SCCM client to report 'compliant' as part of the Intune compliance policy.",
          "Entra ID Conditional Access averages the compliance score between Intune and SCCM.",
          "SCCM compliance baselines are completely ignored by Entra ID if the workload is shifted to Intune.",
          "Intune automatically converts SCCM configuration baselines into Intune JSON format for evaluation."
        ],
        answer: "Intune can evaluate its own policies and optionally require the SCCM client to report 'compliant' as part of the Intune compliance policy.",
        explanation: "Intune acts as the final gatekeeper for compliance reporting to Entra ID, but it can factor in SCCM's localized checks.",
        moreDetails: "Within an Intune compliance policy, there is a setting called <b>'Require Configuration Manager compliance'</b>. If set to 'Require', Intune will check its own cloud policies, wait for the SCCM client to report its own on-premises baseline compliance status to Intune, and only report 'Compliant' to Entra ID if BOTH engines pass.",
        otherOptions: "Conditional Access does not average scores. SCCM baselines are not ignored if the Intune policy is explicitly configured to require them. Intune cannot convert SCCM baselines to JSON automatically.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/compliance-policy-create-windows#configuration-manager-compliance"
      },
      {
        id: 1097,
        type: "medium",
        format: "multi-select",
        question: "You are setting up 'Cloud Attach' (formerly Tenant Attach and Co-management) in your Configuration Manager (SCCM) console. Which TWO accounts or roles are required to complete this wizard? (Select TWO)",
        options: [
          "An Entra ID Global Administrator account.",
          "An on-premises Active Directory Enterprise Admin account.",
          "A user account with the 'Full Administrator' security role in Configuration Manager.",
          "A user account with the 'Intune Service Administrator' role."
        ],
        multiAnswers: [
          "An Entra ID Global Administrator account.",
          "A user account with the 'Full Administrator' security role in Configuration Manager."
        ],
        explanation: "Setting up Cloud Attach builds the bridge between your on-premises servers and your cloud tenant.",
        moreDetails: "To authorize the creation of the enterprise applications in Entra ID and link the tenant, the wizard strictly requires an <b>Entra ID Global Administrator</b> account to log in during setup. Simultaneously, the user running the wizard in the SCCM console must possess the <b>Full Administrator</b> role within Configuration Manager to modify the site settings.",
        otherOptions: "Intune Admin is not sufficient; Global Admin is required to create the Entra ID app registrations. Enterprise Admin is an AD role, not an SCCM or Entra role.",
        link: "https://learn.microsoft.com/en-us/mem/configmgr/tenant-attach/prerequisites"
      },
      {
        id: 1098,
        type: "hard",
        format: "multiple-choice",
        question: "In a cloud-native Entra ID joined Autopilot profile, you can use the '%SERIAL%' macro to name devices. When configuring a 'Hybrid Entra ID joined' Autopilot profile, how is the device naming convention handled?",
        options: [
          "Device naming is configured in the Intune Connector for Active Directory profile (Domain Join profile), not the Autopilot deployment profile itself.",
          "You use the same '%SERIAL%' macro directly in the Autopilot deployment profile.",
          "You must use a PowerShell script deployed via SCCM to rename the device.",
          "Devices are named randomly and cannot be customized in a Hybrid Join scenario."
        ],
        answer: "Device naming is configured in the Intune Connector for Active Directory profile (Domain Join profile), not the Autopilot deployment profile itself.",
        explanation: "Because the device is joining an on-premises Active Directory, the Active Directory domain controller dictates the computer name creation.",
        moreDetails: "In Hybrid Autopilot, you do not name the device in the Autopilot profile. Instead, you create a <b>Domain Join Configuration Profile</b> in Intune and assign it to the devices. This profile uses a prefix (e.g., `CORP-{{RAND:4}}`) and instructs the Intune Connector to request an offline domain join blob with that specific name from the local DC.",
        otherOptions: "The Autopilot profile naming options are greyed out when you select Hybrid. Scripts are not required as the Domain Join profile handles it natively.",
        link: "https://learn.microsoft.com/en-us/autopilot/windows-autopilot-hybrid#create-and-assign-a-domain-join-profile"
      }
    ]
  },
  {
    id: 999,
    term: "Windows Updates & Patching",
    category: "Deploy Windows client",
    questions: [
      {
        id: 1099,
        type: "medium",
        format: "multiple-choice",
        question: "When configuring an 'Update ring for Windows 10 and later' policy in Intune, what is the maximum number of days you can defer the installation of a Quality update?",
        options: [
          "14 days",
          "30 days",
          "90 days",
          "365 days"
        ],
        answer: "30 days",
        explanation: "Windows Update for Business allows you to delay the installation of updates to give your organization time to test them.",
        moreDetails: "<b>Quality updates</b> (which contain monthly security patches and bug fixes) can be deferred for a maximum of <b>30 days</b>. In contrast, Feature updates (which are major OS version upgrades) can be deferred for up to 365 days within an Update Ring.",
        otherOptions: "14 days is a common setting but not the maximum. 365 days is the maximum for Feature updates, not Quality updates.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/windows-update-settings#update-settings"
      },
      {
        id: 1100,
        type: "hard",
        format: "multi-select",
        question: "You have an Update Ring that defers feature updates by 30 days. You subsequently deploy a 'Feature updates for Windows 10 and later' policy setting the target version to Windows 11, version 23H2. What is the effect on the device? (Select TWO)",
        options: [
          "The device upgrades to Windows 11, version 23H2 as soon as the Feature update policy is received.",
          "The 'Feature updates' policy overrides the feature update deferral setting in the Update Ring.",
          "The device waits 30 days after 23H2 is released before upgrading due to the Update Ring deferral.",
          "The device remains on its current version until the 30-day deferral expires."
        ],
        multiAnswers: [
          "The device upgrades to Windows 11, version 23H2 as soon as the Feature update policy is received.",
          "The 'Feature updates' policy overrides the feature update deferral setting in the Update Ring."
        ],
        explanation: "Feature Update policies in Intune act as an absolute targeted deployment, overriding generic deferrals.",
        moreDetails: "When you assign a <b>Feature updates for Windows 10 and later</b> profile to a device, it explicitly dictates the OS version the device should run. As a result, this profile completely <b>overrides</b> any feature update deferral settings configured in the standard Update Ring, causing the device to upgrade immediately (or upon the scheduled start date in the feature profile).",
        otherOptions: "The 30-day deferral from the Update Ring is completely ignored once a targeted Feature Update profile applies to the device.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/windows-10-feature-updates"
      },
      {
        id: 1101,
        type: "medium",
        format: "multiple-choice",
        question: "A critical zero-day vulnerability requires an immediate out-of-band security patch. You use the 'Quality updates for Windows 10 and later' (Expedited) policy in Intune. How does this policy alter the normal update behavior?",
        options: [
          "It forces the device to download the update directly from the Microsoft Update Catalog, bypassing Delivery Optimization.",
          "It bypasses the configured deferral periods and deadlines in the standard Update Ring, forcing the device to install the patch immediately.",
          "It elevates the user to local administrator so they can install the patch manually.",
          "It converts the device to the Windows Insider Dev Channel."
        ],
        answer: "It bypasses the configured deferral periods and deadlines in the standard Update Ring, forcing the device to install the patch immediately.",
        explanation: "The <b>Expedite</b> feature is designed for emergency patching.",
        moreDetails: "Normally, an Update Ring might defer a quality update for 7 days and give the user another 3 days before a forced reboot. An Expedited Quality update profile overrides those deferrals, forcing the device to download the specific security patch immediately and enforce an aggressive restart deadline.",
        otherOptions: "It still utilizes Delivery Optimization to save bandwidth. It does not change user permissions or switch them to the Insider program.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/windows-10-expedite-updates"
      },
      {
        id: 1102,
        type: "medium",
        format: "multiple-choice",
        question: "You want to reduce internet bandwidth consumption by allowing Windows 11 devices to download update payloads from other devices on the same local network, but NOT from devices across the internet. Which Delivery Optimization download mode should you select?",
        options: [
          "HTTP only (0)",
          "LAN (1)",
          "Group (2)",
          "Internet (3)"
        ],
        answer: "LAN (1)",
        explanation: "Delivery Optimization allows peers to share update payloads to save WAN bandwidth.",
        moreDetails: "<b>Mode 1 (LAN)</b> is also known as 'Peering on the same NAT'. It restricts peer-to-peer sharing exclusively to devices that share the same public IP address, keeping the traffic local. Mode 2 is for Active Directory sites/Intune groups, and Mode 3 allows peering across the open internet.",
        otherOptions: "HTTP only (0) disables peer-to-peer entirely. Internet (3) is too permissive for standard corporate security baselines.",
        link: "https://learn.microsoft.com/en-us/windows/deployment/do/waas-delivery-optimization-reference#download-mode"
      },
      {
        id: 1103,
        type: "hard",
        format: "multiple-choice",
        question: "You configure an Update Ring with a 'Deadline for quality updates' set to 3 days, and a 'Grace period' set to 2 days. When will the device force a reboot if the user continually ignores restart prompts after the update is downloaded and installed?",
        options: [
          "Immediately after the update finishes installing.",
          "3 days after the update is published by Microsoft.",
          "5 days (3 days deadline + 2 days grace period) after the update is offered to the device.",
          "2 days after the update is published by Microsoft."
        ],
        answer: "5 days (3 days deadline + 2 days grace period) after the update is offered to the device.",
        explanation: "Deadlines and grace periods work together to enforce compliance without immediately interrupting the user.",
        moreDetails: "The <b>Deadline</b> (3 days) is the time the user has to install the update after it is offered. Once the deadline passes (or if the update installs and requires a reboot), the <b>Grace period</b> (2 days) kicks in, giving the user a final countdown to save their work before a mandatory reboot occurs. Total time = 5 days.",
        otherOptions: "It is calculated from when the update is offered to the specific device, not when Microsoft publishes it.",
        link: "https://learn.microsoft.com/en-us/windows/deployment/update/waas-wufb-group-policy#compliance-deadline-policies"
      },
      {
        id: 1104,
        type: "hard",
        format: "multiple-choice",
        question: "A recently deployed Windows 11 Quality update is causing blue screens on certain Dell laptops. You need to roll back this specific update using Intune. Which feature allows you to initiate an uninstall?",
        options: [
          "Modify the 'Quality update deferral' setting to a higher number.",
          "Use the 'Uninstall' option within the assigned Update Ring for Windows 10 and later.",
          "Create an 'Expedite quality updates' policy with the 'Uninstall' flag checked.",
          "Push a PowerShell script to run the `wusa.exe /uninstall` command."
        ],
        answer: "Use the 'Uninstall' option within the assigned Update Ring for Windows 10 and later.",
        explanation: "Intune provides native controls to pause or uninstall updates via the Update Rings.",
        moreDetails: "By navigating to the specific Update Ring profile assigned to the affected devices, an administrator can select the <b>Uninstall</b> action. This instructs the devices to roll back the latest installed Quality or Feature update.",
        otherOptions: "Increasing deferrals only prevents future installs, it doesn't uninstall existing ones. `wusa.exe` is difficult to manage at scale. Expedite policies do not have an uninstall flag.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/windows-update-for-business-configure#uninstall"
      },
      {
        id: 1105,
        type: "medium",
        format: "multi-select",
        question: "Your organization wants to use 'Windows Autopatch' to completely automate the patching of Windows, Microsoft 365 Apps, Edge, and Teams. Which TWO of the following statements about Windows Autopatch are true? (Select TWO)",
        options: [
          "It requires an Enterprise E3 or E5 license.",
          "It completely replaces the need for an Intune subscription.",
          "Microsoft automatically manages the deployment rings (Test, First, Fast, Broad) on your behalf.",
          "It only supports on-premises Active Directory domain-joined devices without hybrid join."
        ],
        multiAnswers: [
          "It requires an Enterprise E3 or E5 license.",
          "Microsoft automatically manages the deployment rings (Test, First, Fast, Broad) on your behalf."
        ],
        explanation: "<b>Windows Autopatch</b> is a premium cloud service that takes the burden of patch management off the IT team.",
        moreDetails: "It requires Windows 10/11 Enterprise E3 or E5 licensing. Once configured, Microsoft's algorithms automatically divide your devices into optimized deployment rings (Test, First, Fast, Broad) and sequence the rollouts, monitoring for failures and halting rollouts if issues are detected.",
        otherOptions: "It relies heavily on Intune (it does not replace it). It supports Entra ID joined and Hybrid Entra ID joined devices.",
        link: "https://learn.microsoft.com/en-us/windows/deployment/windows-autopilot/windows-autopatch-overview"
      },
      {
        id: 1106,
        type: "easy",
        format: "multiple-choice",
        question: "You need advanced, centralized reporting on update compliance, bandwidth savings from Delivery Optimization, and device update errors. Which Azure service integrates with Intune to provide 'Windows Update for Business reports'?",
        options: [
          "Azure SQL Database",
          "Azure Monitor (Log Analytics workspace)",
          "Microsoft Sentinel",
          "Microsoft Defender for Cloud"
        ],
        answer: "Azure Monitor (Log Analytics workspace)",
        explanation: "<b>Windows Update for Business reports</b> relies on diagnostic data sent from Windows devices to Azure.",
        moreDetails: "To view this data, you must link your Intune tenant to an <b>Azure Monitor Log Analytics workspace</b>. The data is ingested into the workspace, where pre-built Azure Workbooks display rich visual reports on update compliance, feature update tracking, and Delivery Optimization efficiency.",
        otherOptions: "Sentinel is a SIEM for security. Defender for Cloud is for server/workload security. Azure SQL is a relational database.",
        link: "https://learn.microsoft.com/en-us/windows/deployment/update/wufb-reports-overview"
      },
      {
        id: 1107,
        type: "easy",
        format: "multiple-choice",
        question: "In a Windows Update Ring, you configure 'Active hours start' to 8:00 AM and 'Active hours end' to 5:00 PM. What is the primary purpose of this setting?",
        options: [
          "To prevent the device from downloading update payloads during business hours to save bandwidth.",
          "To prevent the device from automatically restarting to apply an update during these hours.",
          "To block the user from manually checking for updates during these hours.",
          "To force the device to reboot at 8:00 AM every morning."
        ],
        answer: "To prevent the device from automatically restarting to apply an update during these hours.",
        explanation: "<b>Active Hours</b> defines the standard working period for the user.",
        moreDetails: "During this defined window, Windows Update will silently download and stage updates in the background, but it will <b>suppress automatic restarts</b> to prevent disrupting the user's productivity. Restarts are deferred until outside of the active hours.",
        otherOptions: "It does not stop downloads, block manual checks, or force morning reboots.",
        link: "https://learn.microsoft.com/en-us/windows/deployment/update/waas-wufb-group-policy#active-hours"
      },
      {
        id: 1108,
        type: "medium",
        format: "multiple-choice",
        question: "Your organization has 500 devices running Windows 10. You want to seamlessly upgrade them to Windows 11 using Intune Windows Update for Business policies. Which specific policy type is designed exclusively to push devices to a major OS upgrade?",
        options: [
          "Update rings for Windows 10 and later.",
          "Quality updates for Windows 10 and later.",
          "Feature updates for Windows 10 and later.",
          "Windows Autopilot deployment profile."
        ],
        answer: "Feature updates for Windows 10 and later.",
        explanation: "Upgrading from Windows 10 to Windows 11 is considered a 'Feature update'.",
        moreDetails: "By creating a <b>Feature updates for Windows 10 and later</b> profile and setting the target version to Windows 11 (e.g., Windows 11 23H2), you explicitly instruct the devices to pull down the Windows 11 payload and perform an in-place OS upgrade.",
        otherOptions: "Update rings govern standard patch flow but cannot explicitly target a major OS jump. Quality updates are for monthly security patches.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/windows-10-feature-updates"
      }
    ]
  },
  {
    id: 1000,
    term: "Intune Suite Add-ons",
    category: "Deploy Windows client",
    questions: [
      {
        id: 1109,
        type: "medium",
        format: "multiple-choice",
        question: "Your organization wants to allow standard users to run specific approved applications that require local administrator rights, without granting those users persistent local administrator permissions. Which Intune Add-on provides this capability?",
        options: [
          "Endpoint Privilege Management (EPM)",
          "Windows LAPS",
          "Remote Help",
          "Enterprise Application Management"
        ],
        answer: "Endpoint Privilege Management (EPM)",
        explanation: "<b>Endpoint Privilege Management (EPM)</b> allows IT to configure policies that dynamically elevate privileges for specific approved applications.",
        moreDetails: "This fundamentally changes how organizations manage local admin rights. Instead of making a user a local administrator (which is a massive security risk), EPM elevates the <i>process</i> of the approved app, allowing the standard user to run it seamlessly without IT intervention.",
        otherOptions: "Windows LAPS manages the built-in local admin password, it doesn't elevate standard users dynamically. Enterprise App Management simplifies packaging, not execution privileges.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/epm-overview"
      },
      {
        id: 1110,
        type: "easy",
        format: "multiple-choice",
        question: "Which Intune Suite Add-on provides administrators with a pre-packaged, secure, and continuously updated catalog of third-party applications, significantly reducing the time IT spends manually packaging Win32 apps?",
        options: [
          "Advanced Analytics",
          "Endpoint Privilege Management",
          "Enterprise Application Management",
          "Managed Home Screen"
        ],
        answer: "Enterprise Application Management",
        explanation: "<b>Enterprise Application Management</b> provides a Microsoft-hosted catalog of common third-party applications.",
        moreDetails: "This streamlines app deployment by removing the need for IT to manually package, wrap with the Intune Win32 Prep Tool, and maintain updates for these apps. You simply select the app from the catalog, and Intune handles the packaging and deployment.",
        otherOptions: "Advanced Analytics monitors device health. EPM manages process elevation. Managed Home Screen is for Android kiosk devices.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/eam-overview"
      },
      {
        id: 1111,
        type: "hard",
        format: "multi-select",
        question: "You are migrating your on-premises infrastructure to a 100% cloud-native environment and need to issue device certificates for Wi-Fi and VPN authentication. Which TWO benefits does the Microsoft Cloud PKI add-on provide over a traditional on-premises AD CS infrastructure? (Select TWO)",
        options: [
          "It eliminates the need to maintain on-premises servers like NDES or enterprise certificate authorities.",
          "It requires physical smart cards for all certificate deployments.",
          "It integrates natively with Intune to seamlessly deploy Root and Issuing CA profiles to cloud-managed devices.",
          "It only supports macOS and iOS devices."
        ],
        multiAnswers: [
          "It eliminates the need to maintain on-premises servers like NDES or enterprise certificate authorities.",
          "It integrates natively with Intune to seamlessly deploy Root and Issuing CA profiles to cloud-managed devices."
        ],
        explanation: "<b>Microsoft Cloud PKI</b> is a cloud-based certificate authority service built directly into Intune.",
        moreDetails: "Historically, deploying certificates to MDM-managed devices required complex on-premises infrastructure (Active Directory Certificate Services, NDES servers, Microsoft Entra Application Proxy). Cloud PKI abstracts all of this into the cloud, allowing you to click a few buttons to spin up Root and Issuing CAs and deploy certificates via SCEP natively in Intune.",
        otherOptions: "It supports Windows, Android, iOS, and macOS. It does not require physical smart cards.",
        link: "https://learn.microsoft.com/en-us/mem/intune/protect/microsoft-cloud-pki-overview"
      },
      {
        id: 1112,
        type: "medium",
        format: "multiple-choice",
        question: "The IT Helpdesk is experiencing a high volume of tickets regarding slow device boot times. Which Intune Add-on extends Endpoint Analytics by providing device-level timeline views, anomalous boot detection, and real-time querying capabilities to troubleshoot performance?",
        options: [
          "Endpoint Privilege Management",
          "Remote Help",
          "Advanced Analytics",
          "Microsoft Tunnel for MAM"
        ],
        answer: "Advanced Analytics",
        explanation: "<b>Advanced Analytics</b> is a premium add-on that significantly deepens the data available in Endpoint Analytics.",
        moreDetails: "It leverages AI to identify anomalous behaviors (like sudden drops in app reliability or spikes in boot times across specific device models) and provides deep, historical device timelines so helpdesk staff can correlate issues with recent changes or updates without interrupting the user.",
        otherOptions: "Remote help is for screen sharing. EPM is for admin rights. Tunnel for MAM is a VPN solution for unmanaged devices.",
        link: "https://learn.microsoft.com/en-us/mem/analytics/advanced-analytics-overview"
      },
      {
        id: 1113,
        type: "hard",
        format: "multiple-choice",
        question: "Which Intune Add-on allows users on unmanaged, personal iOS and Android devices to securely access on-premises corporate web apps via the Edge mobile browser, without requiring full MDM enrollment?",
        options: [
          "Microsoft Tunnel for Mobile Application Management (MAM)",
          "Remote Help",
          "Endpoint Privilege Management",
          "Cloud PKI"
        ],
        answer: "Microsoft Tunnel for Mobile Application Management (MAM)",
        explanation: "<b>Microsoft Tunnel for MAM</b> extends micro-VPN gateway capabilities to BYOD (Bring Your Own Device) scenarios.",
        moreDetails: "Traditionally, device-level VPNs require full MDM enrollment. With Tunnel for MAM, the VPN connection is wrapped securely inside an App Protection Policy applied specifically to Microsoft Edge (or an LOB app). This allows users to access internal resources on personal phones while keeping corporate data containerized and maintaining user privacy.",
        otherOptions: "Cloud PKI handles certificates. Remote help handles assistance. EPM handles execution rights on Windows.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/manage-microsoft-tunnel-for-mam"
      },
      {
        id: 1114,
        type: "medium",
        format: "multiple-choice",
        question: "You have configured the Intune Remote Help add-on. You want to ensure that a helpdesk technician can only assist a user if both the technician's and the user's devices comply with security baselines. Which Entra ID feature natively integrates with Remote Help to enforce this requirement?",
        options: [
          "Conditional Access policies",
          "Microsoft Defender for Endpoint",
          "Privileged Identity Management (PIM)",
          "Access Reviews"
        ],
        answer: "Conditional Access policies",
        explanation: "Because Remote Help relies on Entra ID for authentication, it integrates seamlessly with <b>Conditional Access</b>.",
        moreDetails: "Administrators can configure Entra ID Conditional Access policies specifically targeting the 'Remote Help' cloud app. This allows IT to enforce strong security controls—such as requiring Multi-Factor Authentication (MFA) or ensuring both the helper and the receiver are on 'Compliant' devices—before the screen-sharing session can even begin.",
        otherOptions: "Defender is an XDR platform. PIM is for role elevation. Access Reviews are for auditing group memberships.",
        link: "https://learn.microsoft.com/en-us/mem/intune/remote-actions/remote-help#conditional-access"
      }
    ]
  },
  {
    id: 1115,
    term: "Non-Windows Device Enrollment (Android & Apple)",
    category: "Enroll devices",
    questions: [
      {
        id: 3101,
        type: "hard",
        format: "multiple-choice",
        question: "Your organization’s Apple MDM Push Certificate (APNs) is about to expire. The administrator who originally created the certificate left the company, and you do not know which Apple ID they used. You decide to generate a new CSR and create a brand new APNs certificate using a generic corporate Apple ID. What will happen to your currently enrolled iOS devices when you upload this new certificate to Intune?",
        options: [
          "The devices will automatically negotiate trust with the new certificate during their next check-in.",
          "All currently enrolled Apple devices will become unmanaged and must be factory reset or re-enrolled.",
          "Intune will prompt users via the Company Portal to trust the new certificate.",
          "The Intune admin center will temporarily suspend management until the devices are rebooted."
        ],
        answer: "All currently enrolled Apple devices will become unmanaged and must be factory reset or re-enrolled.",
        explanation: "An APNs certificate MUST be renewed using the exact same Apple ID that created it.",
        moreDetails: "If you upload a completely new certificate instead of renewing the existing one, the trust chain breaks. All currently enrolled devices lose contact with Intune and cannot be managed, wiped, or updated until they are manually re-enrolled.",
        otherOptions: "Devices do not auto-negotiate, nor do they prompt the user.",
        link: "https://learn.microsoft.com/en-us/mem/intune/enrollment/apple-mdm-push-certificate-get"
      },
      {
        id: 3102,
        type: "medium",
        format: "multiple-choice",
        question: "You are configuring Apple User Enrollment for employees using their personal iPads (BYOD). To ensure the separation of personal and corporate data, which specific requirement must be met during the enrollment process?",
        options: [
          "The device must be put into Supervised mode using Apple Configurator.",
          "The user must authenticate using a Managed Apple ID federated with Entra ID.",
          "The device must be registered in Apple Business Manager (ABM).",
          "The user must surrender their personal Apple ID password to the Intune portal."
        ],
        answer: "The user must authenticate using a Managed Apple ID federated with Entra ID.",
        explanation: "Apple User Enrollment relies on the concept of dual identities on the device: the user's personal Apple ID and a corporate Managed Apple ID.",
        moreDetails: "The Managed Apple ID is used to provision the corporate volume on the device and install work apps. Typically, this is achieved by federating Apple Business Manager with Microsoft Entra ID.",
        otherOptions: "ABM registration and Supervised mode are for corporate-owned devices (Device Enrollment / ADE), not BYOD User Enrollment.",
        link: "https://learn.microsoft.com/en-us/mem/intune/enrollment/ios-user-enrollment"
      },
      {
        id: 3103,
        type: "medium",
        format: "multiple-choice",
        question: "Your company still has hundreds of legacy Android devices managed using the Android Device Administrator method. You are planning a migration to Android Enterprise. What happens to devices running Android 10 or later that remain on Device Administrator management?",
        options: [
          "Microsoft automatically converts them to Android Enterprise Personally-owned work profiles.",
          "Google has deprecated Device Administrator, so password enforcement, camera blocking, and wipe commands may fail or be ignored by the OS.",
          "They will continue to function normally, but cannot install apps from the Google Play Store.",
          "The devices will automatically factory reset themselves to enforce the new security standard."
        ],
        answer: "Google has deprecated Device Administrator, so password enforcement, camera blocking, and wipe commands may fail or be ignored by the OS.",
        explanation: "Google officially deprecated Android Device Administrator management starting with Android 9, removing key management APIs in Android 10.",
        moreDetails: "Features like enforcing complex passcodes or restricting the camera no longer work reliably on modern Android versions using Device Administrator. Organizations must migrate to Android Enterprise.",
        otherOptions: "Intune does not auto-migrate devices. They do not auto-wipe. Play Store access is not strictly blocked by the deprecation, but corporate app management is broken.",
        link: "https://learn.microsoft.com/en-us/mem/intune/enrollment/android-enroll-device-administrator"
      },
      {
        id: 3104,
        type: "hard",
        format: "multiple-choice",
        question: "You are deploying 100 corporate-owned MacBooks to developers. You require that the users cannot remove the Intune Management Profile from the System Settings under any circumstances. Which enrollment method strictly enforces this requirement?",
        options: [
          "Direct enrollment using a Device Enrollment Manager (DEM) account.",
          "User-approved MDM via the Intune Company Portal app.",
          "Automated Device Enrollment (ADE) via Apple Business Manager.",
          "Intune Mac App wrapping tool."
        ],
        answer: "Automated Device Enrollment (ADE) via Apple Business Manager.",
        explanation: "The only way to lock an MDM management profile to a macOS or iOS device so the user cannot remove it is via Apple Automated Device Enrollment (formerly DEP).",
        moreDetails: "If a user enrolls via the Company Portal (User-approved MDM), they always retain the administrative right to remove the profile from System Settings.",
        otherOptions: "DEM accounts bypass device limits but don't lock profiles. The App wrapping tool is for application packaging.",
        link: "https://learn.microsoft.com/en-us/mem/intune/enrollment/device-enrollment-program-enroll-macos"
      },
      {
        id: 3105,
        type: "medium",
        format: "multiple-choice",
        question: "You configure an Android Enterprise Corporate-Owned Dedicated device profile for warehouse barcode scanners. When a warehouse worker picks up a scanner, they notice the Intune Company Portal app is missing and they are not prompted to sign in with their Entra ID account. Why does this happen?",
        options: [
          "Dedicated devices are enrolled 'userless' and do not use user affinity or the Company Portal.",
          "The devices have lost connectivity to Managed Google Play.",
          "The worker must first manually download the Company Portal from the public Google Play Store.",
          "The enrollment profile was incorrectly assigned to a User Group instead of a Device Group."
        ],
        answer: "Dedicated devices are enrolled 'userless' and do not use user affinity or the Company Portal.",
        explanation: "Dedicated devices (Kiosk mode) are intended for single-use scenarios where the device is not tied to a specific user's identity.",
        moreDetails: "Because there is no user affinity, the Company Portal app is not installed, and users cannot authenticate to access personalized corporate resources or Conditional Access-protected apps.",
        otherOptions: "It is not a network failure or a mistake; it is the intended design of the Dedicated device scenario.",
        link: "https://learn.microsoft.com/en-us/mem/intune/enrollment/android-kiosk-enroll"
      },
      {
        id: 3106,
        type: "medium",
        format: "multiple-choice",
        question: "You are creating an Apple Automated Device Enrollment (ADE) profile in Intune. You want the device setup to be as fast as possible. Which feature in the ADE profile allows you to streamline the out-of-box experience for the end-user?",
        options: [
          "Hiding Setup Assistant screens (like Apple ID, Siri, and Screen Time).",
          "Automatically accepting the Entra ID Terms of Use without user interaction.",
          "Bypassing the Wi-Fi connection requirement during OOBE.",
          "Disabling the Apple Activation Lock globally."
        ],
        answer: "Hiding Setup Assistant screens (like Apple ID, Siri, and Screen Time).",
        explanation: "ADE profiles allow Intune administrators to selectively hide or skip various screens presented during the Apple Setup Assistant.",
        moreDetails: "This ensures users aren't bogged down by consumer-focused setup prompts (like Apple Pay or Siri) and are pushed directly to the corporate enrollment phase.",
        otherOptions: "You cannot bypass the network requirement (the device needs internet to talk to ABM). Entra Terms of Use must be accepted by the user. Activation Lock is managed separately.",
        link: "https://learn.microsoft.com/en-us/mem/intune/enrollment/device-enrollment-program-enroll-ios#create-an-apple-enrollment-profile"
      },
      {
        id: 3107,
        type: "medium",
        format: "multiple-choice",
        question: "Your organization mandates that only corporate-purchased Android devices can access company resources. You configure an Intune Enrollment Device Platform Restriction to block \"Android Enterprise (work profile)\". What is the immediate effect of this policy?",
        options: [
          "It blocks users from enrolling their personal Android phones into Intune.",
          "It blocks the enrollment of Android Enterprise Corporate-owned fully managed devices.",
          "It unenrolls all currently managed personal Android devices immediately.",
          "It prevents users from downloading the Microsoft Authenticator app on personal devices."
        ],
        answer: "It blocks users from enrolling their personal Android phones into Intune.",
        explanation: "In Intune's platform restrictions, blocking the \"Android Enterprise (work profile)\" specifically targets the Personally-Owned Work Profile enrollment method (BYOD).",
        moreDetails: "This effectively prevents users from downloading the Company Portal on a personal device and establishing a work profile. Corporate-owned methods (Fully Managed, Dedicated, COPE) are controlled by separate toggles or tokens.",
        otherOptions: "Enrollment restrictions only prevent *new* enrollments; they do not wipe existing ones. It does not block Fully Managed devices or the Authenticator app itself.",
        link: "https://learn.microsoft.com/en-us/mem/intune/enrollment/enrollment-restrictions-set"
      },
      {
        id: 3108,
        type: "hard",
        format: "multiple-choice",
        question: "You have hired a contractor to enroll 200 corporate-owned Android devices. To bypass the standard 15-device limit per user, you assign the contractor a Device Enrollment Manager (DEM) role in Intune. Which of the following enrollment types is strictly UNSUPPORTED when using a DEM account?",
        options: [
          "Apple Automated Device Enrollment (ADE) with user affinity.",
          "Android Enterprise Corporate-owned dedicated devices.",
          "Windows Autopilot self-deploying mode.",
          "Android Enterprise Corporate-owned fully managed devices."
        ],
        answer: "Apple Automated Device Enrollment (ADE) with user affinity.",
        explanation: "Device Enrollment Manager (DEM) accounts are designed for bulk provisioning, but they have significant limitations. Specifically, DEM accounts cannot be used to enroll Apple devices via ADE/DEP if the profile is configured \"With User Affinity\".",
        moreDetails: "DEM accounts also cannot be used with Apple User Enrollment, and they do not support Conditional Access policies that require MFA during enrollment.",
        otherOptions: "DEM accounts work fine for dedicated devices and bulk Windows provisioning, though Autopilot self-deploying mode doesn't even require a DEM account.",
        link: "https://learn.microsoft.com/en-us/mem/intune/enrollment/device-enrollment-manager-enroll"
      },
      {
        id: 3109,
        type: "hard",
        format: "multiple-choice",
        question: "An employee is issued a Corporate-Owned phone with a Work Profile (COPE). The employee installs a personal social media app on the personal side of the device. Can the Intune administrator view the data or block the usage of that specific social media app?",
        options: [
          "Yes, because the device is corporate-owned, the administrator has full visibility and control over all apps on the device.",
          "No, the administrator can only view and manage apps installed within the secure Work Profile.",
          "Yes, but only if the device is placed into 'Lost Mode'.",
          "No, unless the administrator enables 'Advanced App Appraisals' in the Endpoint Security blade."
        ],
        answer: "No, the administrator can only view and manage apps installed within the secure Work Profile.",
        explanation: "The COPE (Corporate-Owned, Personally Enabled) model provides device-level hardware control (like wiping the whole device or enforcing Wi-Fi), but it still strictly respects the privacy of the personal profile.",
        moreDetails: "IT administrators cannot see which personal apps are installed, cannot view personal browsing history, and cannot manage or wipe data on the personal side of the COPE boundary.",
        otherOptions: "Even though it is corporate-owned, the dual-profile nature explicitly limits app-level visibility to the work partition.",
        link: "https://learn.microsoft.com/en-us/mem/intune/enrollment/android-corporate-owned-work-profile-enroll"
      },
      {
        id: 3110,
        type: "hard",
        format: "multiple-choice",
        question: "You have deployed an iOS Automated Device Enrollment (ADE) profile with \"User Affinity\" to corporate iPhones. You want Microsoft Word to install silently during the setup process without prompting the user for an Apple ID. How must the app be deployed?",
        options: [
          "The app must be synchronized from Apple Business Manager via a Volume Purchase Program (VPP) token and assigned using 'Device' licensing.",
          "The app must be packaged as an .ipa file and deployed as a Line-of-Business (LOB) app.",
          "The app must be assigned using 'User' licensing via Apple Business Manager.",
          "The user must sign into the Company Portal with a Managed Apple ID."
        ],
        answer: "The app must be synchronized from Apple Business Manager via a Volume Purchase Program (VPP) token and assigned using 'Device' licensing.",
        explanation: "To achieve silent app installation on iOS without prompting for an Apple ID, you must leverage Apple VPP (now part of Apple Business Manager) and assign the licenses to the device itself.",
        moreDetails: "If you use 'User' licensing, the user will be prompted to link their Apple ID to the VPP system, breaking the silent, zero-touch experience.",
        otherOptions: "LOB apps do not update automatically via the App Store. Managed Apple IDs are for User Enrollment.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/vpp-apps-ios"
      },
      {
        id: 3111,
        type: "medium",
        format: "multiple-choice",
        question: "You approve a new custom web app in the Managed Google Play console to be deployed to your Android Enterprise devices. However, the app is not showing up in the Intune Admin Center. What is the most likely reason?",
        options: [
          "You need to manually trigger a synchronization between Intune and Managed Google Play in the Tenant Administration blade.",
          "Custom web apps are only supported on Android Device Administrator enrollments.",
          "You did not wrap the web app using the Intune App Wrapping Tool for Android.",
          "The Android devices must reboot to pull the new app catalog."
        ],
        answer: "You need to manually trigger a synchronization between Intune and Managed Google Play in the Tenant Administration blade.",
        explanation: "When you add, approve, or create custom apps directly in the Managed Google Play portal, they do not appear in Intune instantly.",
        moreDetails: "Intune synchronizes with Managed Google Play periodically. If you need the app to appear immediately so you can assign it, you must navigate to Tenant Administration > Connectors and tokens > Managed Google Play, and manually click \"Sync\".",
        otherOptions: "Web apps are natively supported in Android Enterprise without wrapping. The devices rebooting has no impact on the Intune cloud console visibility.",
        link: "https://learn.microsoft.com/en-us/mem/intune/apps/apps-add-android-for-work"
      },
      {
        id: 3112,
        type: "hard",
        format: "multiple-choice",
        question: "Your organization uses Apple Automated Device Enrollment (ADE). Suddenly, new MacBooks purchased from Apple are failing to enroll during Setup Assistant, and no new devices are appearing in Intune. What is the most likely cause?",
        options: [
          "The Apple Automated Device Enrollment (ADE/DEP) token in Intune has expired.",
          "The Apple Push Notification service (APNs) certificate has expired.",
          "The Intune Company Portal app requires an update on the MacBooks.",
          "The devices were purchased from a retail store instead of an authorized enterprise reseller."
        ],
        answer: "The Apple Automated Device Enrollment (ADE/DEP) token in Intune has expired.",
        explanation: "The ADE token (which connects Intune to Apple Business Manager) expires annually and must be renewed.",
        moreDetails: "If the ADE token expires, Intune can no longer sync new device serial numbers from ABM, and devices attempting OOBE enrollment will fail to pull their management profiles. While an expired APNs certificate breaks management for *existing* devices, an expired ADE token specifically breaks the synchronization of *new* corporate devices from ABM.",
        otherOptions: "If the devices were purchased from retail, they wouldn't even attempt ADE. APNs expiration breaks existing management.",
        link: "https://learn.microsoft.com/en-us/mem/intune/enrollment/device-enrollment-program-enroll-ios#renew-an-ade-token"
      }
    ]
  }
];
