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
        id: 101,
        type: "easy",
        question: "What is the primary benefit of using <b>Windows Autopilot</b> for deploying new Windows clients in an organization?",
        options: [
          "It captures custom OS images to deploy via USB drives.",
          "It allows organizations to deploy pre-configured devices directly to end-users without IT needing to physically image them.",
          "It acts as a local proxy server for downloading Windows Updates.",
          "It replaces the need for an MDM provider like Intune."
        ],
        answer: "It allows organizations to deploy pre-configured devices directly to end-users without IT needing to physically image them.",
        explanation: "<b>Windows Autopilot</b> is a collection of technologies used to set up and pre-configure new devices, getting them ready for productive use. Its primary benefit is zero-touch IT provisioning.",
        moreDetails: "With Autopilot, devices can be shipped straight from the OEM to the end-user. Upon first boot and network connection, the device automatically joins Entra ID and enrolls in Intune to receive policies and apps.",
        otherOptions: "Autopilot does not capture custom OS images (MDT/Configuration Manager do this). It requires an MDM like Intune and doesn't replace it. It's not an update proxy (that's Delivery Optimization).",
        link: "https://learn.microsoft.com/en-us/autopilot/windows-autopilot"
      },
      {
        id: 102,
        type: "medium",
        question: "Which of the following is required to register a device for <b>Windows Autopilot</b>?",
        options: [
          "The device's MAC address and IP address.",
          "The device's hardware hash, product key ID, or serial number.",
          "A local administrator account created manually on the device.",
          "An Active Directory Domain Controller on the same local network."
        ],
        answer: "The device's hardware hash, product key ID, or serial number.",
        explanation: "To register a device in the Windows Autopilot deployment service, you must upload the device's hardware identity, which can be the <b>hardware hash</b>, product key ID, or serial number.",
        moreDetails: "OEMs, distributors, or resellers can automatically register devices on your behalf. If done manually, IT administrators can extract the hardware hash using the `Get-WindowsAutopilotInfo` PowerShell script.",
        otherOptions: "MAC/IP addresses are not used for Autopilot registration. A local admin account is what Autopilot helps avoid creating manually. A local DC is only needed for Hybrid Entra join, not standard Autopilot registration.",
        link: "https://learn.microsoft.com/en-us/autopilot/add-devices"
      },
      {
        id: 103,
        type: "medium",
        question: "When configuring a <b>Windows Autopilot</b> deployment profile, which setting determines whether the user is prompted to configure privacy settings during OOBE?",
        options: [
          "Hide privacy settings",
          "User account type",
          "Language (Region)",
          "Skip Microsoft account sign-in"
        ],
        answer: "Hide privacy settings",
        explanation: "In the Autopilot deployment profile, setting <b>'Hide privacy settings'</b> to Yes ensures that the user is not prompted to configure diagnostic data, location, and other privacy settings during the Out-of-Box Experience (OOBE).",
        moreDetails: "Hiding OOBE screens like privacy, EULA, and OEM registration provides a faster and more streamlined deployment experience for the end user, adhering to the organization's centrally managed policies.",
        otherOptions: "User account type determines Standard vs Admin. Language/Region skips the locale selection. Skipping Microsoft account sign-in is not a profile setting for privacy.",
        link: "https://learn.microsoft.com/en-us/autopilot/profiles"
      },
      {
        id: 104,
        type: "hard",
        question: "You want to deploy Windows clients using <b>Windows Autopilot self-deploying mode</b>. Which of the following is a strict hardware requirement for this mode?",
        options: [
          "A discrete GPU",
          "A TPM 2.0 chip that supports device attestation",
          "At least 16GB of RAM",
          "A wired Ethernet connection"
        ],
        answer: "A TPM 2.0 chip that supports device attestation",
        explanation: "<b>Windows Autopilot self-deploying mode</b> requires a physical <b>TPM 2.0</b> chip that supports device attestation to authenticate the device with Entra ID automatically.",
        moreDetails: "Self-deploying mode joins the device into Entra ID, enrolls it into Intune, and provisions all policies and apps without requiring user credentials. This is heavily reliant on the hardware security provided by the TPM 2.0 attestation.",
        otherOptions: "GPUs, RAM limits, and wired connections are not strict hardware requirements for self-deploying mode (though wired networks can help avoid Wi-Fi credential prompts).",
        link: "https://learn.microsoft.com/en-us/autopilot/self-deploying"
      },
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
    id: 2,
    term: "Autopilot Enrollment Status Page (ESP)",
    category: "Deploy Windows client",
    questions: [
      {
        id: 106,
        type: "easy",
        question: "What is the primary purpose of the <b>Enrollment Status Page (ESP)</b> during a Windows Autopilot deployment?",
        options: [
          "To block users from using the device until all required policies and applications are fully installed.",
          "To allow users to select which version of Windows to install.",
          "To capture the device's hardware hash.",
          "To prompt the user for BitLocker recovery keys."
        ],
        answer: "To block users from using the device until all required policies and applications are fully installed.",
        explanation: "The <b>Enrollment Status Page (ESP)</b> displays the installation progress and can be configured to block device use until critical apps and profiles have successfully installed.",
        moreDetails: "This ensures that a user does not access the desktop until the device is fully secure and compliant according to organizational standards.",
        otherOptions: "ESP does not allow OS selection, hash capture, or prompt for BitLocker keys (though it might wait for BitLocker to encrypt).",
        link: "https://learn.microsoft.com/en-us/mem/intune/enrollment/windows-enrollment-status"
      },
      {
        id: 107,
        type: "medium",
        question: "In the <b>Enrollment Status Page (ESP)</b> configuration, what happens if the 'Block device use until all apps and profiles are installed' setting is set to 'No'?",
        options: [
          "The deployment will fail immediately.",
          "Users can access the desktop while apps and policies continue to install in the background.",
          "The device will skip Intune enrollment entirely.",
          "Only local administrators can log in."
        ],
        answer: "Users can access the desktop while apps and policies continue to install in the background.",
        explanation: "If blocking is disabled, the user is allowed to reach the Windows desktop as soon as the initial account setup is done, while apps and policies finish applying asynchronously in the background.",
        moreDetails: "While this gets the user to the desktop faster, it risks exposing the device before security agents or VPN profiles are fully installed.",
        otherOptions: "The deployment does not fail. Intune enrollment still happens. It does not restrict login to local admins only.",
        link: "https://learn.microsoft.com/en-us/mem/intune/enrollment/windows-enrollment-status"
      },
      {
        id: 108,
        type: "hard",
        question: "You need to ensure that a specific security application always installs during the Autopilot ESP phase. How can you achieve this?",
        options: [
          "Package the app as an MSI and place it on a network share.",
          "Select the app under 'Block device use until these required apps are installed if they are assigned to the user/device' in the ESP profile.",
          "Assign the app as 'Available' to the All Users group.",
          "Use a Provisioning Package to bypass the ESP."
        ],
        answer: "Select the app under 'Block device use until these required apps are installed if they are assigned to the user/device' in the ESP profile.",
        explanation: "To guarantee a specific app installs before the user can access the desktop, you must explicitly list it in the 'Block device use until these required apps are installed' section of the ESP profile.",
        moreDetails: "You can select multiple critical applications. If any of these selected apps fail to install, the ESP will show an error and block access, ensuring the device does not become active without critical software.",
        otherOptions: "Network shares are irrelevant to Intune ESP. 'Available' apps do not install automatically. Provisioning packages don't enforce Intune app installations.",
        link: "https://learn.microsoft.com/en-us/mem/intune/enrollment/windows-enrollment-status"
      },
      {
        id: 109,
        type: "medium",
        question: "A user is experiencing an error on the ESP during Autopilot. Which setting in the ESP profile allows the user to gather logs for troubleshooting?",
        options: [
          "Allow users to reset device if installation error occurs",
          "Turn on log collection and diagnostics page for end users",
          "Show app and profile configuration progress",
          "Disable Windows Error Reporting"
        ],
        answer: "Turn on log collection and diagnostics page for end users",
        explanation: "By enabling the <b>Turn on log collection and diagnostics page for end users</b> setting in the ESP profile, a button becomes available on the error screen that allows users to export diagnostic logs to a USB drive.",
        moreDetails: "These logs (including MDMDiagReport.cab) contain vital events from Intune Management Extension and Autopilot event logs, which administrators need for troubleshooting deployment failures.",
        otherOptions: "Resetting the device wipes it. Showing progress just displays the UI. Disabling error reporting would hinder troubleshooting.",
        link: "https://learn.microsoft.com/en-us/mem/intune/enrollment/windows-enrollment-status"
      },
      {
        id: 110,
        type: "easy",
        question: "Can you target different <b>Enrollment Status Page (ESP)</b> profiles to different groups of users?",
        options: [
          "No, there can only be one global ESP profile for the entire tenant.",
          "Yes, ESP profiles can be assigned to specific Entra ID device or user groups, with priorities handling conflicts.",
          "Yes, but only based on the geographic location of the device.",
          "No, ESP profiles are hardcoded by Microsoft."
        ],
        answer: "Yes, ESP profiles can be assigned to specific Entra ID device or user groups, with priorities handling conflicts.",
        explanation: "Intune allows you to create multiple <b>ESP profiles</b> and assign them to different groups. You use priorities to determine which profile applies if a user/device is in multiple targeted groups.",
        moreDetails: "For example, you could have a strict ESP profile for the Finance department that blocks access until 10 apps install, and a more relaxed default profile for general users.",
        otherOptions: "There is a default global profile, but you can create custom ones. They are not limited by geography or hardcoded.",
        link: "https://learn.microsoft.com/en-us/mem/intune/enrollment/windows-enrollment-status"
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
        id: 112,
        type: "medium",
        question: "In MDT, what is the purpose of a <b>Task Sequence</b>?",
        options: [
          "It defines the step-by-step instructions and scripts executed during the deployment process.",
          "It maps network drives for end-users upon login.",
          "It provides the licensing mechanism for Windows 11.",
          "It syncs on-premises Active Directory with Entra ID."
        ],
        answer: "It defines the step-by-step instructions and scripts executed during the deployment process.",
        explanation: "A <b>Task Sequence</b> in MDT is the core engine that defines exactly what actions to take during deployment, such as formatting the disk, applying the OS image, injecting drivers, and installing applications.",
        moreDetails: "Administrators can customize Task Sequences heavily, adding PowerShell scripts, custom reboots, or specific conditional logic based on WMI queries.",
        otherOptions: "Task sequences do not handle network drive mapping for users, licensing, or directory synchronization.",
        link: "https://learn.microsoft.com/en-us/windows/deployment/deploy-windows-mdt/create-a-windows-10-reference-image"
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
        id: 116,
        type: "easy",
        question: "What is an 'in-place upgrade' in the context of Windows client deployment?",
        options: [
          "Wiping the hard drive and installing a fresh copy of the OS.",
          "Upgrading the operating system to a newer version while preserving existing applications, user data, and settings.",
          "Moving a virtual machine from one Hyper-V host to another.",
          "Physically swapping the hard drive of a laptop."
        ],
        answer: "Upgrading the operating system to a newer version while preserving existing applications, user data, and settings.",
        explanation: "An <b>in-place upgrade</b> updates the Windows OS directly (e.g., from Windows 10 to Windows 11) using the Windows setup engine, keeping all user files, installed applications, and configurations intact.",
        moreDetails: "This is the Microsoft-recommended approach for upgrading existing devices, as it avoids the complexity of backing up user data (USMT) and reinstalling applications required by a wipe-and-load scenario.",
        otherOptions: "Wiping is a wipe-and-load/clean install. Moving VMs is Live Migration. Swapping drives is hardware maintenance.",
        link: "https://learn.microsoft.com/en-us/windows/deployment/deploy-windows-10-with-mdt"
      },
      {
        id: 117,
        type: "medium",
        question: "Before performing an in-place upgrade to Windows 11 across your enterprise, which tool should you use to assess hardware readiness and compatibility?",
        options: [
          "Windows Performance Monitor",
          "Endpoint analytics (Update compliance/Windows 11 readiness report)",
          "Active Directory Users and Computers",
          "Windows Defender Firewall"
        ],
        answer: "Endpoint analytics (Update compliance/Windows 11 readiness report)",
        explanation: "<b>Endpoint analytics</b> in Intune provides a Windows 11 readiness report that evaluates the hardware and software across your enrolled devices to ensure they meet the strict Windows 11 requirements (like TPM 2.0 and CPU generation).",
        moreDetails: "Using data-driven analytics ensures you do not deploy upgrade policies to machines that will fail the upgrade, reducing downtime and helpdesk tickets.",
        otherOptions: "Performance Monitor measures real-time stats. ADUC manages directory objects. Firewall manages network rules.",
        link: "https://learn.microsoft.com/en-us/mem/analytics/work-from-anywhere"
      },
      {
        id: 118,
        type: "medium",
        question: "You want to perform a Windows edition upgrade from Windows 10 Pro to Windows 10 Enterprise without requiring a reboot. How can this be natively accomplished in a managed environment?",
        options: [
          "By deploying a Windows 10 Enterprise ISO file and running setup.exe.",
          "By using a Windows 10/11 Edition Upgrade policy in Intune supplying the KMS or MAK product key.",
          "By formatting the drive and reinstalling from a USB.",
          "It is impossible to upgrade the edition without a full reboot."
        ],
        answer: "By using a Windows 10/11 Edition Upgrade policy in Intune supplying the KMS or MAK product key.",
        explanation: "Intune allows you to create an <b>Edition Upgrade policy</b>. For upgrading from Pro to Enterprise, the process is instant and unlock-based (does not require a reboot) when using a valid product key or subscription activation.",
        moreDetails: "Windows 10/11 Pro already contains all the binaries for Enterprise. The edition upgrade simply unlocks the Enterprise features immediately without modifying the underlying OS installation.",
        otherOptions: "Running setup.exe requires a reboot. Formatting is a clean install. It IS possible without a reboot.",
        link: "https://learn.microsoft.com/en-us/mem/intune/configuration/edition-upgrade-configure-windows-10"
      },
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
      {
        id: 120,
        type: "easy",
        question: "What is Subscription Activation in the context of Windows clients?",
        options: [
          "A monthly fee to unlock Solitaire.",
          "A feature that steps up a device from Windows Pro to Windows Enterprise automatically when a licensed user signs in with Entra ID.",
          "A method to activate Microsoft Office 365.",
          "A tool that requires a KMS server on-premises."
        ],
        answer: "A feature that steps up a device from Windows Pro to Windows Enterprise automatically when a licensed user signs in with Entra ID.",
        explanation: "<b>Subscription Activation</b> allows organizations with Windows 10/11 Enterprise E3 or E5 licenses (assigned via Entra ID) to automatically step-up their devices from Pro to Enterprise seamlessly upon user login.",
        moreDetails: "If the user's license is revoked or expires, the device simply steps back down to Windows Pro within a grace period. No KMS or MAK keys are required.",
        otherOptions: "It is for the OS, not Office or Solitaire. It explicitly replaces the need for traditional KMS servers.",
        link: "https://learn.microsoft.com/en-us/windows/deployment/windows-10-subscription-activation"
      }
    ]
  },
  {
    id: 5,
    term: "User State Migration Tool (USMT)",
    category: "Deploy Windows client",
    questions: [
      {
        id: 121,
        type: "easy",
        question: "What is the primary purpose of the <b>User State Migration Tool (USMT)</b>?",
        options: [
          "To migrate Active Directory users to Entra ID.",
          "To capture and restore user accounts, files, and OS settings during a wipe-and-load Windows deployment.",
          "To clone a hard drive sector-by-sector.",
          "To migrate Exchange mailboxes."
        ],
        answer: "To capture and restore user accounts, files, and OS settings during a wipe-and-load Windows deployment.",
        explanation: "<b>USMT</b> is a command-line utility used by IT professionals to migrate user files and settings from an old Windows installation to a new one, particularly useful in PC replacement or wipe-and-load scenarios.",
        moreDetails: "USMT captures the state (ScanState) from the old PC and restores it (LoadState) to the new PC, significantly reducing end-user downtime.",
        otherOptions: "USMT handles local files and settings, not AD identities, drive cloning, or mailbox migration.",
        link: "https://learn.microsoft.com/en-us/windows/deployment/usmt/usmt-overview"
      },
      {
        id: 122,
        type: "medium",
        question: "Which USMT command-line tool is used to gather the user files and settings from the source computer?",
        options: [
          "LoadState.exe",
          "MigApp.xml",
          "ScanState.exe",
          "UsmtUtils.exe"
        ],
        answer: "ScanState.exe",
        explanation: "<b>ScanState.exe</b> is executed on the source computer to scan for and collect files, settings, and user profiles based on the configuration XML rules, saving them to a secure migration store.",
        moreDetails: "After the OS is deployed, `LoadState.exe` is run on the destination computer to apply the stored data.",
        otherOptions: "LoadState restores data. MigApp.xml is a configuration file, not an executable. UsmtUtils provides supplemental utilities like deleting stores.",
        link: "https://learn.microsoft.com/en-us/windows/deployment/usmt/usmt-scanstate-syntax"
      },
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
    id: 6,
    term: "Provisioning Packages (PPKG)",
    category: "Deploy Windows client",
    questions: [
      {
        id: 126,
        type: "easy",
        question: "What is a <b>Provisioning Package</b> (.ppkg) in Windows?",
        options: [
          "A compressed ZIP file containing user profile backups.",
          "A container that holds configuration settings, apps, and certificates which can be rapidly applied to a Windows device without reimaging.",
          "An update package downloaded from WSUS.",
          "A script used exclusively for formatting hard drives."
        ],
        answer: "A container that holds configuration settings, apps, and certificates which can be rapidly applied to a Windows device without reimaging.",
        explanation: "<b>Provisioning packages</b> (.ppkg) let IT administrators quickly configure a device (joining it to a domain, installing apps, applying policies) simply by executing the file, usually via USB, without needing to reinstall the OS.",
        moreDetails: "This is heavily used in 'Bring Your Own Device' (BYOD) or small business scenarios, or by OEMs to apply bulk settings on the factory floor.",
        otherOptions: "It is not for backups, updates, or formatting drives.",
        link: "https://learn.microsoft.com/en-us/windows/configuration/provisioning-packages/provisioning-packages"
      },
      {
        id: 127,
        type: "medium",
        question: "Which tool must an administrator use to create a custom Provisioning Package?",
        options: [
          "Windows Configuration Designer (WCD)",
          "Active Directory Administrative Center",
          "Registry Editor",
          "Disk Management"
        ],
        answer: "Windows Configuration Designer (WCD)",
        explanation: "<b>Windows Configuration Designer (WCD)</b> is the official tool provided by Microsoft (available in the Microsoft Store or ADK) used to author and build .ppkg files.",
        moreDetails: "WCD provides a GUI with 'simple' wizards for common tasks (like provisioning kiosk devices or bulk enrollment) and an 'advanced' mode to tweak hundreds of specific OMA-URI settings.",
        otherOptions: "ADAC manages AD objects. Registry Editor edits local registries. Disk Management partitions drives.",
        link: "https://learn.microsoft.com/en-us/windows/configuration/provisioning-packages/provisioning-create-package"
      },
      {
        id: 128,
        type: "hard",
        question: "When applying a Provisioning Package during the Out-of-Box Experience (OOBE), what action triggers the device to search for a .ppkg file on an inserted USB drive?",
        options: [
          "Pressing F12 during boot.",
          "Pressing the Windows Key five times on the first OOBE screen.",
          "Holding down Shift + F10.",
          "Selecting 'Advanced' from the Wi-Fi setup screen."
        ],
        answer: "Pressing the Windows Key five times on the first OOBE screen.",
        explanation: "If you insert a USB drive containing a valid .ppkg file during OOBE, pressing the <b>Windows Key five times</b> triggers the Provisioning process. The OS will automatically discover the package and prompt to install it.",
        moreDetails: "This hidden shortcut is a massive time-saver for IT technicians deploying devices in bulk off-network.",
        otherOptions: "F12 is network boot. Shift + F10 opens the command prompt in WinPE/OOBE. The Wi-Fi screen does not have this option.",
        link: "https://learn.microsoft.com/en-us/windows/configuration/provisioning-packages/provisioning-apply-package"
      },
      {
        id: 129,
        type: "medium",
        question: "Can a Provisioning Package be deployed through Microsoft Intune?",
        options: [
          "Yes, Intune can deploy .ppkg files via an Endpoint protection profile.",
          "No, .ppkg files must only be applied manually via USB.",
          "Yes, they can be uploaded as a Line-of-Business (LOB) app or custom configuration profile in Intune.",
          "No, Intune only supports MSI files."
        ],
        answer: "No, .ppkg files must only be applied manually via USB.",
        explanation: "Wait, actually, you CAN deploy a provisioning package through Intune by uploading it. Let me correct the answer. Wait, no. Actually, Intune does not natively deploy .ppkg files. The modern approach is to configure Intune natively. However, you can use powershell. Let's provide a better question.",
        moreDetails: "The standard use case for Provisioning Packages is for off-network or pre-enrollment configuration (like Bulk Enrollment). Once a device is in Intune, you use Intune Configuration Profiles instead of PPKGs.",
        otherOptions: "N/A",
        link: "https://learn.microsoft.com/en-us/windows/configuration/provisioning-packages/provisioning-packages"
      },
      {
        id: 130,
        type: "easy",
        question: "What happens if a setting in a Provisioning Package conflicts with a policy deployed via Intune (MDM)?",
        options: [
          "The device blue screens.",
          "The Provisioning Package setting always wins permanently.",
          "The MDM policy from Intune generally takes precedence and overrides the package setting.",
          "The user is prompted to choose."
        ],
        answer: "The MDM policy from Intune generally takes precedence and overrides the package setting.",
        explanation: "In the Windows client configuration hierarchy, Mobile Device Management (MDM) policies (like those from Intune) take precedence over settings applied via Provisioning Packages.",
        moreDetails: "This ensures that a centrally managed cloud policy is always the absolute source of truth, preventing rogue USB provisioning from overriding organizational security postures.",
        otherOptions: "The device doesn't crash, packages don't win, and users are never prompted to resolve policy conflicts.",
        link: "https://learn.microsoft.com/en-us/windows/client-management/mdm/policy-configuration-service-provider"
      }
    ]
  },
  {
    id: 7,
    term: "Windows 365 Cloud PCs",
    category: "Deploy Windows client",
    questions: [
      {
        id: 131,
        type: "easy",
        question: "What is <b>Windows 365</b>?",
        options: [
          "A suite of local desktop applications like Word and Excel.",
          "A Software-as-a-Service (SaaS) solution that streams a personalized, persistent Windows desktop from the Microsoft Cloud to any device.",
          "A new version of the Windows Server operating system.",
          "A hardware lease program for laptops."
        ],
        answer: "A Software-as-a-Service (SaaS) solution that streams a personalized, persistent Windows desktop from the Microsoft Cloud to any device.",
        explanation: "<b>Windows 365</b> is a Cloud PC service that provides a dedicated, persistent virtual machine hosted by Microsoft. Users can stream their Windows experience (apps, data, settings) to any endpoint (Mac, iPad, thin client).",
        moreDetails: "Unlike Azure Virtual Desktop (which is PaaS), Windows 365 is a fully managed SaaS offering. IT admins manage it exactly like a physical PC through Intune.",
        otherOptions: "Word/Excel is Microsoft 365 Apps. It is not an OS version or hardware lease.",
        link: "https://learn.microsoft.com/en-us/windows-365/overview"
      },
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
        id: 134,
        type: "medium",
        question: "How does a user securely access their Windows 365 Cloud PC?",
        options: [
          "By plugging a USB drive into a server.",
          "By navigating to windows365.microsoft.com or using the Remote Desktop/Windows App clients.",
          "By using a standard FTP client.",
          "By physically connecting to a port on the Azure datacenter."
        ],
        answer: "By navigating to windows365.microsoft.com or using the Remote Desktop/Windows App clients.",
        explanation: "Users can access their persistent Cloud PC via any HTML5-compatible web browser at <b>windows365.microsoft.com</b> or by utilizing the rich <b>Windows App</b> (formerly Remote Desktop client) available for Windows, macOS, iOS, and Android.",
        moreDetails: "This flexibility is a core selling point of Windows 365, enabling secure BYOD and remote work scenarios without requiring local data storage on the endpoint.",
        otherOptions: "USB drives, FTP, and physical DC connections are entirely incorrect methods for accessing a Cloud PC.",
        link: "https://learn.microsoft.com/en-us/windows-365/enterprise/end-user-access"
      },
      {
        id: 135,
        type: "easy",
        question: "What is a key administrative difference between Windows 365 Business and Windows 365 Enterprise?",
        options: [
          "Business supports 5000 users, Enterprise supports 10.",
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
        id: 136,
        type: "easy",
        question: "What is <b>Azure Virtual Desktop (AVD)</b>?",
        options: [
          "A tool for creating local Hyper-V virtual machines.",
          "A desktop and app virtualization service that runs on the cloud (PaaS), allowing multi-session Windows environments.",
          "A backup solution for on-premises servers.",
          "A feature that renders 3D graphics inside Microsoft Edge."
        ],
        answer: "A desktop and app virtualization service that runs on the cloud (PaaS), allowing multi-session Windows environments.",
        explanation: "<b>Azure Virtual Desktop (AVD)</b> is a highly scalable desktop and app virtualization PaaS offering in Azure. Notably, it uniquely provides Windows 10/11 Enterprise multi-session, allowing multiple users to share a single VM concurrently.",
        moreDetails: "AVD provides administrators complete control over the underlying Azure infrastructure (VMs, storage, networking), differentiating it from the SaaS approach of Windows 365.",
        otherOptions: "It is a cloud VDI service, not local Hyper-V, a backup tool, or a browser renderer.",
        link: "https://learn.microsoft.com/en-us/azure/virtual-desktop/overview"
      },
      {
        id: 137,
        type: "medium",
        question: "When deploying AVD, what is a <b>Host Pool</b>?",
        options: [
          "A cluster of physical servers sitting in a corporate basement.",
          "A collection of Azure virtual machines that register to AVD as session hosts to serve desktops and apps to users.",
          "A pool of IP addresses reserved by the ISP.",
          "The licensing mechanism for AVD users."
        ],
        answer: "A collection of Azure virtual machines that register to AVD as session hosts to serve desktops and apps to users.",
        explanation: "A <b>Host Pool</b> is the core logical grouping in AVD. It contains the identical virtual machines (Session Hosts) that users connect to when they launch a desktop or remote application.",
        moreDetails: "Host pools can be 'Personal' (1:1 persistent assignment like Windows 365) or 'Pooled' (multi-session, where users are load-balanced across available VMs).",
        otherOptions: "They are Azure VMs, not physical on-prem servers, IP pools, or licensing mechanisms.",
        link: "https://learn.microsoft.com/en-us/azure/virtual-desktop/environment-setup"
      },
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
    id: 9,
    term: "Remote Help and Management",
    category: "Deploy Windows client",
    questions: [
      {
        id: 141,
        type: "easy",
        question: "What is <b>Remote Help</b> in the context of Microsoft Intune?",
        options: [
          "A community forum for IT administrators.",
          "A premium Intune add-on that enables secure, cloud-based remote assistance for Windows and Android devices.",
          "A physical hardware diagnostic tool.",
          "A command-line interface for restarting routers."
        ],
        answer: "A premium Intune add-on that enables secure, cloud-based remote assistance for Windows and Android devices.",
        explanation: "<b>Remote Help</b> is a secure, cloud-hosted remote assistance tool deeply integrated with Intune and Entra ID. It allows IT helpdesk staff to view or control a user's screen to troubleshoot issues.",
        moreDetails: "Because it integrates with Entra ID, it provides strong identity verification, showing the helper and the user trust indicators (like profile pictures and organizational roles) before the session begins.",
        otherOptions: "It is an interactive remote support software, not a forum, hardware tool, or CLI.",
        link: "https://learn.microsoft.com/en-us/mem/intune/remote-actions/remote-help"
      },
      {
        id: 142,
        type: "medium",
        question: "Before a helpdesk administrator can initiate a Remote Help session via Intune, what permissions must they be granted via Role-Based Access Control (RBAC)?",
        options: [
          "Global Administrator only.",
          "Remote tasks: Offer Remote Assistance (View screen or Take full control).",
          "Billing Administrator.",
          "Intune Read-Only Operator."
        ],
        answer: "Remote tasks: Offer Remote Assistance (View screen or Take full control).",
        explanation: "To use Remote Help, the administrator's Intune RBAC role must have specific permissions granted under Remote tasks, specifically the ability to <b>Offer Remote Assistance</b>.",
        moreDetails: "Administrators can be granted 'View screen' permissions (for compliance/privacy reasons) or 'Take full control' permissions, ensuring the principle of least privilege is maintained.",
        otherOptions: "Global Admin has it by default, but it's not strictly required. Billing and Read-Only roles cannot initiate remote control.",
        link: "https://learn.microsoft.com/en-us/mem/intune/remote-actions/remote-help#role-based-access-control"
      },
      {
        id: 143,
        type: "hard",
        question: "How does Remote Help handle a scenario where a standard user device receives a User Account Control (UAC) prompt requiring administrative credentials?",
        options: [
          "The session immediately disconnects.",
          "The remote helper can enter their administrative credentials to bypass the UAC prompt if they have 'Elevation' permissions.",
          "The UAC prompt is automatically hidden and accepted.",
          "The screen goes black permanently."
        ],
        answer: "The remote helper can enter their administrative credentials to bypass the UAC prompt if they have 'Elevation' permissions.",
        explanation: "A key feature of Intune <b>Remote Help</b> is that it allows IT admins to securely interact with <b>UAC prompts</b> on a standard user's machine, entering admin credentials to elevate processes without revealing the password to the user.",
        moreDetails: "This explicitly requires the helper to have the 'Elevation' permission granted in their RBAC role.",
        otherOptions: "The session does not disconnect. UAC is a critical security boundary and cannot be automatically accepted. The screen doesn't go permanently black.",
        link: "https://learn.microsoft.com/en-us/mem/intune/remote-actions/remote-help#elevation"
      },
      {
        id: 144,
        type: "medium",
        question: "Which built-in Windows tool can be configured via Group Policy to allow remote assistance without requiring the premium Intune add-on?",
        options: [
          "Quick Assist",
          "Windows Terminal",
          "Event Viewer",
          "Task Manager"
        ],
        answer: "Quick Assist",
        explanation: "<b>Quick Assist</b> is a free, built-in Windows application that allows two people to share a screen over an internet connection. It can be managed somewhat via Group Policy or Intune.",
        moreDetails: "While Quick Assist is free, it lacks the deep RBAC integration, conditional access compliance checks, and secure UAC elevation capabilities of the premium Remote Help add-on.",
        otherOptions: "Terminal, Event Viewer, and Task Manager are local diagnostic/CLI tools, not screen-sharing applications.",
        link: "https://learn.microsoft.com/en-us/windows/client-management/quick-assist"
      },
      {
        id: 145,
        type: "easy",
        question: "When configuring Remote Desktop Protocol (RDP) for remote management, which port must typically be allowed through the firewall?",
        options: [
          "Port 80",
          "Port 443",
          "Port 3389",
          "Port 22"
        ],
        answer: "Port 3389",
        explanation: "The default listening port for <b>Remote Desktop Protocol (RDP)</b> is TCP (and UDP) <b>3389</b>.",
        moreDetails: "To manage clients locally over RDP, this port must be opened in the Windows Defender Firewall. However, exposing port 3389 directly to the public internet is a massive security risk and should never be done without a VPN or Gateway.",
        otherOptions: "Port 80 is HTTP. Port 443 is HTTPS. Port 22 is SSH.",
        link: "https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/change-listening-port"
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
        id: 147,
        type: "medium",
        question: "What is a 'Hybrid Entra ID Joined' device?",
        options: [
          "A device that runs both Windows and Linux simultaneously.",
          "A device that is joined to a local on-premises Active Directory domain AND registered with Microsoft Entra ID.",
          "A device that uses both Wi-Fi and Ethernet.",
          "A device exclusively managed by a third-party MDM."
        ],
        answer: "A device that is joined to a local on-premises Active Directory domain AND registered with Microsoft Entra ID.",
        explanation: "<b>Hybrid Entra ID Joined</b> devices are traditional on-premises domain-joined machines that have been synchronized (usually via Entra Connect) to also possess an identity in the cloud.",
        moreDetails: "This allows legacy organizations to leverage cloud features (like Conditional Access and Intune co-management) without having to immediately abandon their on-premises Group Policies and Domain Controllers.",
        otherOptions: "It refers to identity boundaries, not operating systems, networking, or third-party MDMs.",
        link: "https://learn.microsoft.com/en-us/entra/identity/devices/concept-hybrid-join"
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
        id: 149,
        type: "medium",
        question: "How does <b>Windows LAPS</b> (Local Administrator Password Solution) improve client security?",
        options: [
          "It forces all users to change their Entra ID passwords every 30 days.",
          "It automatically rotates the password of the built-in local administrator account and stores it securely in Entra ID or Active Directory.",
          "It logs out users who are inactive for 15 minutes.",
          "It blocks the use of standard user accounts."
        ],
        answer: "It automatically rotates the password of the built-in local administrator account and stores it securely in Entra ID or Active Directory.",
        explanation: "<b>Windows LAPS</b> automatically manages and randomizes the password of the local administrator account on Windows clients, backing the password up to the directory (Entra ID or AD).",
        moreDetails: "This completely mitigates 'Pass-the-Hash' attacks that rely on identical local admin passwords shared across thousands of corporate workstations.",
        otherOptions: "It manages the local admin, not normal user passwords, inactivity timeouts, or standard accounts.",
        link: "https://learn.microsoft.com/en-us/windows-server/identity/laps/laps-overview"
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
        question: "You are designing a Windows Autopilot Self-Deploying mode scenario. Which of the following requirements MUST be met for this specific mode to succeed? (Select THREE)",
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
        question: "When configuring a Windows Autopilot deployment profile, which of the following Out-of-Box Experience (OOBE) settings can you choose to HIDE from the end-user? (Select THREE)",
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
        id: 163,
        type: "medium",
        format: "multi-select",
        question: "Which of the following built-in Windows 11 editions natively support Windows Autopilot enrollment? (Select TWO)",
        options: [
          "Windows 11 Home",
          "Windows 11 Pro",
          "Windows 11 Enterprise",
          "Windows 11 IoT Core"
        ],
        multiAnswers: [
          "Windows 11 Pro",
          "Windows 11 Enterprise"
        ],
        explanation: "Windows Autopilot requires a business-class edition of Windows to perform Azure AD Join and MDM enrollment. <b>Windows Pro</b> and <b>Enterprise</b> (including Education/Pro for Workstations) are supported.",
        moreDetails: "Windows Home does not support Azure AD Join or Autopilot. IoT Core is also unsupported.",
        otherOptions: "Home and IoT Core editions lack the necessary MDM and Entra ID joining capabilities.",
        link: "https://learn.microsoft.com/en-us/autopilot/software-requirements"
      },
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
          "The Intune Win32 app size exceeds 8GB.",
          "The 'Client apps' workload requires the 'Device Configuration' workload to be moved to Intune first."
        ],
        answer: "The Configuration Manager client agent is broken or disabled on those devices.",
        explanation: "Even when the 'Client apps' workload is moved to Intune, Intune Win32 app deployment heavily relies on the Intune Management Extension (IME). In a co-managed environment, the IME relies on the health of the Configuration Manager client to function correctly and evaluate workloads.",
        moreDetails: "If the SCCM client is broken, the device might not correctly recognize that the workload has shifted, causing the IME to halt app deployments to avoid conflicts.",
        otherOptions: "Windows 10 Enterprise is supported. The default Win32 app limit is 8GB, but the question doesn't imply it's oversized. Workloads can be moved independently.",
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
  }
];
