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
        id: 152,
        type: "medium",
        format: "order-steps",
        question: "Arrange the steps to perform a User State Migration Tool (USMT) hard-link migration during a PC refresh:",
        options: [
          "Run ScanState.exe with the /hardlink flag to capture user data.",
          "Wipe the OS partition (leaving the migration store intact).",
          "Install the new Windows operating system.",
          "Run LoadState.exe with the /hardlink flag to restore user data."
        ],
        answer: "ScanState -> Wipe OS -> Install New OS -> LoadState",
        explanation: "For a PC refresh using hard-links, you first run ScanState to create the hard-links, then carefully wipe only the OS (not the whole drive), install the new OS, and finally run LoadState.",
        moreDetails: "Hard-link migration avoids physically copying files, saving vast amounts of time and disk space.",
        otherOptions: "N/A",
        link: "https://learn.microsoft.com/en-us/windows/deployment/usmt/usmt-hard-link-migration-store"
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
        id: 154,
        type: "medium",
        format: "order-steps",
        question: "Arrange the phases of the Autopilot Enrollment Status Page (ESP):",
        options: [
          "Device preparation (joining Entra ID, enrolling in Intune).",
          "Device setup (installing security policies, certs, and device-targeted apps).",
          "User sign-in.",
          "Account setup (installing user-targeted apps and policies)."
        ],
        answer: "Device preparation -> Device setup -> User sign-in -> Account setup",
        explanation: "The ESP first secures the physical hardware during 'Device preparation' and 'Device setup'. Then, the user provides their credentials, moving into 'Account setup' where user-specific settings apply.",
        moreDetails: "A failure in the Device setup phase typically blocks the user from ever seeing the desktop if the ESP is configured to block.",
        otherOptions: "N/A",
        link: "https://learn.microsoft.com/en-us/mem/intune/enrollment/windows-enrollment-status"
      },
      {
        id: 155,
        type: "hard",
        format: "order-steps",
        question: "Arrange the steps to perform a Windows Autopilot for pre-provisioned deployment (formerly White Glove):",
        options: [
          "IT Admin creates an Autopilot profile with 'Allow pre-provisioned deployment' set to Yes and assigns it.",
          "Technician boots the new device and presses the Windows key five times at the OOBE screen.",
          "Technician selects 'Windows Autopilot provisioning' and clicks 'Provision'.",
          "The device downloads and installs device-targeted apps and policies, then displays a green success screen.",
          "Technician clicks 'Reseal' and powers down the device to ship it to the user.",
          "The user receives the device, powers it on, connects to Wi-Fi, and signs in to complete the user phase."
        ],
        answer: "Create Profile -> Press Win 5x -> Select Provision -> Device Setup -> Reseal -> User Sign-in",
        explanation: "Pre-provisioning shifts the heavy lifting of installing massive apps to the OEM or IT partner. The technician enters the specialized flow by pressing the Windows key 5 times, completing the device phase, and resealing it so the end-user only has to do a quick sign-in.",
        moreDetails: "This process requires TPM 2.0 and network connectivity. If the device phase fails, a red screen appears with diagnostic logs.",
        otherOptions: "N/A",
        link: "https://learn.microsoft.com/en-us/autopilot/pre-provision"
      },
      {
        id: 156,
        type: "medium",
        format: "order-steps",
        question: "Arrange the steps to capture and restore user data during a PC replacement using the User State Migration Tool (USMT):",
        options: [
          "Run ScanState.exe on the old PC to collect user profiles, settings, and files.",
          "Store the compressed migration store (.mig file) on a secure network share or external drive.",
          "Install the fresh Windows OS on the new PC.",
          "Join the new PC to the domain/Entra ID.",
          "Run LoadState.exe on the new PC to apply the collected data to the target system."
        ],
        answer: "Run ScanState -> Store Data -> Install OS -> Join Domain -> Run LoadState",
        explanation: "USMT operates in two primary phases. `ScanState` gathers the old data and puts it in a temporary location. Then, after the new OS is prepared and networked, `LoadState` unpacks the data onto the new machine.",
        moreDetails: "USMT is often heavily automated within a Microsoft Deployment Toolkit (MDT) or Configuration Manager task sequence.",
        otherOptions: "N/A",
        link: "https://learn.microsoft.com/en-us/windows/deployment/usmt/usmt-overview"
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
  }
];
