import { MultipleChoiceQuestion } from '../types/exam';

export const DOMAIN_3_QUESTIONS: MultipleChoiceQuestion[] = [
  {
    id: 'd3-q6',
    domainId: 3,
    subtopic: 'Network Segmentation & Access Gateways',
    questionNumber: 6,
    type: 'single',
    prompt: 'A company prevents direct network access from administrator workstations to backend database servers. Which component should administrators connect through to administer the servers securely?',
    options: [
      { id: 'A', text: 'Jump server' },
      { id: 'B', text: 'RADIUS' },
      { id: 'C', text: 'HSM' },
      { id: 'D', text: 'Load balancer' }
    ],
    correctAnswers: ['A'],
    explanation: 'A jump server (or bastion host) acts as an isolated, highly monitored intermediary gateway through which authorized administrators establish encrypted sessions to reach sensitive internal servers.',
    examTip: 'Jump servers reduce direct exposure between user LANs and secure backend server tiers.'
  },
  {
    id: 'd3-q7',
    domainId: 3,
    subtopic: 'Application Firewalls',
    questionNumber: 7,
    type: 'single',
    prompt: 'An internet-facing web application was compromised via an application-layer buffer overflow in an HTTP header. What should be deployed in front of the web servers to best inspect and block similar attacks?',
    options: [
      { id: 'A', text: 'NGFW' },
      { id: 'B', text: 'WAF' },
      { id: 'C', text: 'TLS' },
      { id: 'D', text: 'SD-WAN' }
    ],
    correctAnswers: ['B'],
    explanation: 'A Web Application Firewall (WAF) inspects Layer 7 HTTP and HTTPS traffic payloads to detect and block web-based exploits such as SQL injection, cross-site scripting, and web request buffer overflows.',
    examTip: 'Traditional firewalls inspect Layers 3/4; WAFs inspect Layer 7 HTTP/HTTPS traffic.'
  },
  {
    id: 'd3-q20',
    domainId: 3,
    subtopic: 'Firewall ACL Configuration',
    questionNumber: 20,
    type: 'single',
    prompt: 'An analyst creates an inbound firewall rule on a perimeter firewall to block all traffic originating from a known malicious IP address (10.1.4.9). Which rule syntax correctly fulfills this requirement?',
    options: [
      { id: 'A', text: 'access-list inbound deny ip source 0.0.0.0/0 destination 10.1.4.9' },
      { id: 'B', text: 'access-list inbound deny ip source 10.1.4.9 destination 0.0.0.0/0' },
      { id: 'C', text: 'access-list inbound permit ip source 10.1.4.9 destination 0.0.0.0/0' },
      { id: 'D', text: 'access-list inbound permit ip source 0.0.0.0/0 destination 10.1.4.9' }
    ],
    correctAnswers: ['B'],
    explanation: 'To block inbound traffic from an external threat IP, you specify a DENY rule where the SOURCE is the attacker\'s IP (10.1.4.9) and the DESTINATION is any internal address (0.0.0.0/0).',
    examTip: 'In firewall rules: Source is who is sending the traffic, Destination is where it is going.'
  },
  {
    id: 'd3-q38',
    domainId: 3,
    subtopic: 'Cloud Shared Responsibility',
    questionNumber: 38,
    type: 'single',
    prompt: 'According to the cloud shared responsibility model, who is responsible for configuring, patching, and securing the database installed on an Infrastructure as a Service (IaaS) virtual machine?',
    options: [
      { id: 'A', text: 'Client' },
      { id: 'B', text: 'Third-party vendor' },
      { id: 'C', text: 'Cloud provider' },
      { id: 'D', text: 'Data Protection Officer' }
    ],
    correctAnswers: ['A'],
    explanation: 'In IaaS, the cloud service provider manages physical data center hardware, power, and virtualization hypervisors. The client is responsible for guest operating systems, installed applications, and database engines.',
    examTip: 'IaaS: You manage OS & Apps. PaaS: You manage Apps & Data. SaaS: You manage User access & Data.'
  },
  {
    id: 'd3-q49',
    domainId: 3,
    subtopic: 'Disaster Recovery Sites',
    questionNumber: 49,
    type: 'single',
    prompt: 'An organization builds a secondary disaster recovery data center with cost savings as the primary priority, accepting an RTO and RPO of roughly two days. What site type best matches this criterion?',
    options: [
      { id: 'A', text: 'Real-time recovery' },
      { id: 'B', text: 'Hot site' },
      { id: 'C', text: 'Cold site' },
      { id: 'D', text: 'Warm site' }
    ],
    correctAnswers: ['C'],
    explanation: 'Cold sites provide empty facility space, power, and cooling with no pre-installed compute hardware or live data replication. They are the least expensive option but require days to procure hardware and restore data.',
    examTip: 'Hot site = Real-time sync / minutes. Warm site = Pre-installed hardware / hours. Cold site = Empty facility / days.'
  },
  {
    id: 'd3-q65',
    domainId: 3,
    subtopic: 'Compensating Controls',
    questionNumber: 65,
    type: 'single',
    prompt: 'A host-based firewall configured on an unpatchable legacy Linux server restricts incoming connections strictly to two specific internal management IP addresses. What control type does this represent?',
    options: [
      { id: 'A', text: 'Compensating control' },
      { id: 'B', text: 'Network segmentation' },
      { id: 'C', text: 'Transfer of risk' },
      { id: 'D', text: 'SNMP traps' }
    ],
    correctAnswers: ['A'],
    explanation: 'A compensating control is an alternate security safeguard implemented to reduce risk when the primary desired control (such as patching or replacing the legacy OS) cannot be executed.',
    examTip: 'When you cannot patch a critical system, firewall restrictions and segmentation serve as compensating controls.'
  },
  {
    id: 'd3-q93',
    domainId: 3,
    subtopic: 'Network Access Lists',
    questionNumber: 93,
    type: 'single',
    prompt: 'An enterprise wants to restrict outbound DNS queries so that only the internal DNS forwarder at 10.50.10.25 can query external internet DNS servers. Which ACL rule strategy accomplishes this?',
    options: [
      { id: 'A', text: 'Permit all port 53, deny 10.50.10.25 port 53' },
      { id: 'B', text: 'Permit to 10.50.10.25, deny all' },
      { id: 'C', text: 'Permit all, deny 10.50.10.25' },
      { id: 'D', text: 'Permit 10.50.10.25 port 53, deny all other outbound DNS traffic port 53' }
    ],
    correctAnswers: ['D'],
    explanation: 'ACLs follow top-down order of evaluation: an explicit PERMIT rule is created for source IP 10.50.10.25 on UDP/TCP port 53, followed immediately by a broader DENY rule for any other source IP requesting port 53.',
    examTip: 'Specific rules must always come before general catch-all rules in access control lists.'
  },
  {
    id: 'd3-q134',
    domainId: 3,
    subtopic: 'Physical Security & Life Safety',
    questionNumber: 134,
    type: 'single',
    prompt: 'Security controls in an enterprise data center are reviewed to prioritize human life safety during emergencies. How should physical access controls on emergency egress doors be configured?',
    options: [
      { id: 'A', text: 'Remote access fail closed' },
      { id: 'B', text: 'Logging fail open' },
      { id: 'C', text: 'Safety controls fail open' },
      { id: 'D', text: 'Logical controls fail closed' }
    ],
    correctAnswers: ['C'],
    explanation: 'Human life safety always takes precedence over asset protection. Physical locks and exit controls must fail open during fires or building evacuations so occupants can escape without badge credentials.',
    examTip: 'Physical fire/safety doors = Fail Open. Network perimeter security firewalls = Fail Closed.'
  },
  {
    id: 'd3-q135',
    domainId: 3,
    subtopic: 'Air-Gapped Networks',
    questionNumber: 135,
    type: 'single',
    prompt: 'What is the most common attack and data exfiltration vector for an air-gapped classified network that has no physical or wireless connections to external networks?',
    options: [
      { id: 'A', text: 'Bastion host' },
      { id: 'B', text: 'Unsecured Bluetooth' },
      { id: 'C', text: 'Unpatched OS' },
      { id: 'D', text: 'Removable devices' }
    ],
    correctAnswers: ['D'],
    explanation: 'Air-gapped networks lack network physical and wireless interfaces to the outside world; therefore, unauthorized data transfer or malware introduction relies heavily on physical removable media (USB flash drives, external HDDs).',
    examTip: 'Air-gap networks are protected by banning or encrypting USB removable media.'
  },
  {
    id: 'd3-q137',
    domainId: 3,
    subtopic: 'Cloud Edge & SASE',
    questionNumber: 137,
    type: 'single',
    prompt: 'An organization struggling with on-premises VPN concentrator hardware scaling looks for a modern software-defined solution to connect remote workers securely without backhauling all traffic. Which architecture should be deployed?',
    options: [
      { id: 'A', text: 'Deploying SASE to remote employees' },
      { id: 'B', text: 'Building load-balanced VPN' },
      { id: 'C', text: 'Purchasing low-cost SD-WAN' },
      { id: 'D', text: 'Using cloud provider for additional concentrators' }
    ],
    correctAnswers: ['A'],
    explanation: 'Secure Access Service Edge (SASE) delivers software-defined wide-area networking combined with cloud-based security functions (SWG, CASB, ZTNA) at distributed cloud edge points of presence, eliminating VPN bottlenecks.',
    examTip: 'SASE merges SD-WAN with cloud security services (Security as a Service).'
  },
  {
    id: 'd3-q151',
    domainId: 3,
    subtopic: 'Internal Network Controls',
    questionNumber: 151,
    type: 'single',
    prompt: 'A systems administrator set up a perimeter firewall, but continues to observe suspicious lateral connections occurring between internal workstations on the local LAN. Which of the following should be enabled to mitigate this threat?',
    options: [
      { id: 'A', text: 'Host-based firewall' },
      { id: 'B', text: 'Web application firewall' },
      { id: 'C', text: 'Access control list' },
      { id: 'D', text: 'Application allow list' }
    ],
    correctAnswers: ['A'],
    explanation: 'Perimeter firewalls filter traffic entering and leaving the network border, but have no visibility into east-west traffic between workstations on the same switch or VLAN. Host-based firewalls enforce local packet filtering directly on each endpoint.',
    examTip: 'Perimeter firewalls manage North-South traffic; Host-based firewalls restrict East-West lateral traffic.'
  },
  {
    id: 'd3-q174',
    domainId: 3,
    subtopic: 'Cloud Identity & Federation',
    questionNumber: 174,
    type: 'single',
    prompt: 'A company is adopting a cloud-hosted SaaS CRM tool. The security director wants to avoid creating separate local accounts and instead authenticate users using the company\'s existing enterprise user directory via SSO. What standard should be implemented?',
    options: [
      { id: 'A', text: '802.1X' },
      { id: 'B', text: 'SAML' },
      { id: 'C', text: 'RADIUS' },
      { id: 'D', text: 'CHAP' }
    ],
    correctAnswers: ['B'],
    explanation: 'Security Assertion Markup Language (SAML) is an open XML-based standard for federating identity and asserting authentication and authorization tokens between an Identity Provider (IdP) and SaaS Service Providers (SP).',
    examTip: 'SAML is heavily tested for web browser single sign-on (SSO) with cloud SaaS applications.'
  },
  {
    id: 'd3-q179',
    domainId: 3,
    subtopic: 'Virtual Desktop Infrastructure',
    questionNumber: 179,
    type: 'single',
    prompt: 'A company is utilizing a third-party offshore team to process finance records. Management wants to ensure proprietary data never leaves company servers and cannot be downloaded onto external hardware. Which solution meets this objective?',
    options: [
      { id: 'A', text: 'VDI' },
      { id: 'B', text: 'MDM' },
      { id: 'C', text: 'VPN' },
      { id: 'D', text: 'VPC' }
    ],
    correctAnswers: ['A'],
    explanation: 'Virtual Desktop Infrastructure (VDI) streams an interactive corporate desktop image to remote users, executing all processing and retaining all data strictly on centralized company servers with clipboard/storage redirection disabled.',
    examTip: 'VDI allows untrusted or contractor devices to interact with company software without storing data locally.'
  },
  {
    id: 'd3-q184',
    domainId: 3,
    subtopic: 'Media Protocols',
    questionNumber: 184,
    type: 'single',
    prompt: 'An organization deployed cloud-connected IP video cameras to monitor building perimeters. The security team wants to ensure live video feeds streaming over TCP/IP are encrypted and protected against replay attacks. Which protocol should be used?',
    options: [
      { id: 'A', text: 'SSH' },
      { id: 'B', text: 'SRTP' },
      { id: 'C', text: 'S/MIME' },
      { id: 'D', text: 'PPTP' }
    ],
    correctAnswers: ['B'],
    explanation: 'Secure Real-time Transport Protocol (SRTP) provides encryption, message integrity authentication, and replay protection for real-time multimedia, video surveillance streams, and VoIP communications.',
    examTip: 'RTP transfers voice/video; SRTP adds AES encryption and HMAC authentication.'
  },
  {
    id: 'd3-q213',
    domainId: 3,
    subtopic: 'Cloud Security Solutions',
    questionNumber: 213,
    type: 'single',
    prompt: 'A security engineer is working to mitigate risks from shadow cloud services across an enterprise that has no on-premises infrastructure. Which solution provides visibility and policy enforcement over cloud SaaS usage?',
    options: [
      { id: 'A', text: 'Upgrading to a next-generation firewall' },
      { id: 'B', text: 'Deploying an appropriate in-line CASB solution' },
      { id: 'C', text: 'Conducting user training on software policies' },
      { id: 'D', text: 'Configuring double key encryption in SaaS platforms' }
    ],
    correctAnswers: ['B'],
    explanation: 'A Cloud Access Security Broker (CASB) sits between cloud consumers and cloud providers, enforcing security compliance, data loss prevention, and monitoring unapproved shadow cloud applications.',
    examTip: 'CASB = Cloud Access Security Broker, the primary tool for combating cloud shadow IT.'
  },
  {
    id: 'd3-q232',
    domainId: 3,
    subtopic: 'Port-Based Network Access Control',
    questionNumber: 232,
    type: 'single',
    prompt: 'A network administrator is designing secure network authentication requiring: use of existing internal PKI certificates, support for both wired switch ports and wireless SSIDs, and automatic quarantine of non-compliant endpoints. Which standard should be implemented?',
    options: [
      { id: 'A', text: '802.1X' },
      { id: 'B', text: 'EAP' },
      { id: 'C', text: 'RADIUS' },
      { id: 'D', text: 'WPA2' }
    ],
    correctAnswers: ['A'],
    explanation: 'IEEE 802.1X provides port-based Network Access Control (PNAC). It leverages EAP-TLS with digital certificates to authenticate endpoints on wired switch jacks and wireless APs before granting access to network VLANs.',
    examTip: '802.1X is the IEEE standard for port-based authentication.'
  },
  {
    id: 'd3-q249',
    domainId: 3,
    subtopic: 'Switch Security',
    questionNumber: 249,
    type: 'single',
    prompt: 'A penetration tester executes an attack that floods the CAM/MAC address table of access layer switches with thousands of fabricated MAC addresses. Which switch configuration mitigates this attack?',
    options: [
      { id: 'A', text: 'Load balancer' },
      { id: 'B', text: 'Port security' },
      { id: 'C', text: 'IPS' },
      { id: 'D', text: 'NGFW' }
    ],
    correctAnswers: ['B'],
    explanation: 'Switch port security limits the number of valid MAC addresses allowed on a physical switch port and shuts down the interface or drops frames if an unauthorized or flooding MAC address is detected.',
    examTip: 'MAC flooding turns a switch into a broadcasting hub; Port Security prevents MAC table overflow.'
  },
  {
    id: 'd3-q323',
    domainId: 3,
    subtopic: 'High Availability & Scalability',
    questionNumber: 323,
    type: 'single',
    prompt: 'A company wants to improve the availability of its web application so that backend nodes can be replaced, upgraded, or scaled horizontally with zero downtime to end users. Which solution should be deployed?',
    options: [
      { id: 'A', text: 'Load balancing' },
      { id: 'B', text: 'Fault tolerance' },
      { id: 'C', text: 'Proxy servers' },
      { id: 'D', text: 'Replication' }
    ],
    correctAnswers: ['A'],
    explanation: 'A load balancer monitors backend server health and dynamically routes user requests across healthy nodes, allowing nodes to be transparently added or drained for maintenance without user interruption.',
    examTip: 'Load balancers enhance both performance scalability and high availability.'
  },
  {
    id: 'd3-q337',
    domainId: 3,
    subtopic: 'Mobile Deployment Models',
    questionNumber: 337,
    type: 'single',
    prompt: 'A company requires smartphones to be company-owned and centrally hardened by IT, while allowing employees reasonable personal use of the device. Which deployment model fits this policy?',
    options: [
      { id: 'A', text: 'BYOD' },
      { id: 'B', text: 'CYOD' },
      { id: 'C', text: 'COPE' },
      { id: 'D', text: 'COBO' }
    ],
    correctAnswers: ['C'],
    explanation: 'Corporate-Owned, Personally Enabled (COPE) devices are purchased and owned by the organization, enabling full MDM hardening and management while permitting employees to use the phone for personal tasks.',
    examTip: 'COBO = Business Only (no personal use); COPE = Personally Enabled (some personal use); BYOD = Employee owns phone.'
  },
  {
    id: 'd3-q467',
    domainId: 3,
    subtopic: 'Wireless Cryptography',
    questionNumber: 467,
    type: 'single',
    prompt: 'Which wireless authentication handshake protocol introduced in WPA3 replaces PSK and prevents offline dictionary and rainbow table attacks against captured four-way handshakes?',
    options: [
      { id: 'A', text: 'WIPS' },
      { id: 'B', text: 'SSO' },
      { id: 'C', text: 'WPS' },
      { id: 'D', text: 'SAE' }
    ],
    correctAnswers: ['D'],
    explanation: 'Simultaneous Authentication of Equals (SAE), based on the Dragonfly handshake in WPA3-Personal, provides forward secrecy and renders captured over-the-air handshakes resistant to offline dictionary attacks.',
    examTip: 'WPA2 uses PSK (vulnerable to offline cracking); WPA3 uses SAE (resistant to offline cracking).'
  },
  {
    id: 'd3-q488',
    domainId: 3,
    subtopic: 'Enterprise System Hardening',
    questionNumber: 488,
    type: 'single',
    prompt: 'An internal vulnerability assessment revealed that SMBv1 is enabled across hundreds of domain-joined Windows servers. What is the most efficient administrative mechanism to disable SMBv1 enterprise-wide?',
    options: [
      { id: 'A', text: 'GPO' },
      { id: 'B', text: 'ACL' },
      { id: 'C', text: 'SFTP' },
      { id: 'D', text: 'DLP' }
    ],
    correctAnswers: ['A'],
    explanation: 'Group Policy Objects (GPO) in Active Directory allow administrators to enforce configuration baselines, registry settings, and service states across thousands of domain-joined servers in a single policy.',
    examTip: 'GPOs are the primary centralized configuration management tool for Windows environments.'
  },
  {
    id: 'd3-q578',
    domainId: 3,
    subtopic: 'Data Protection & Encryption',
    questionNumber: 578,
    type: 'single',
    prompt: 'Which of the following symmetric cryptographic standards is universally recognized as the gold standard for securely protecting sensitive data at rest on enterprise storage arrays and databases?',
    options: [
      { id: 'A', text: 'TLS 1.2' },
      { id: 'B', text: 'AES-256' },
      { id: 'C', text: 'Masking' },
      { id: 'D', text: 'Salting' }
    ],
    correctAnswers: ['B'],
    explanation: 'Advanced Encryption Standard with a 256-bit key length (AES-256) is the NIST-approved, industry-standard symmetric cipher used globally for encrypting data at rest.',
    examTip: 'AES is symmetric (fast, for data at rest); RSA/ECC are asymmetric (for key exchange).'
  },
  {
    id: 'd3-q589',
    domainId: 3,
    subtopic: 'Software-Defined Networking',
    questionNumber: 589,
    type: 'single',
    prompt: 'Which networking technology enables organizations to dynamically enforce granular, policy-driven microsegmentation between virtual machines and cloud workloads without physical re-cabling?',
    options: [
      { id: 'A', text: 'Next-generation firewalls' },
      { id: 'B', text: 'Software-defined networking' },
      { id: 'C', text: 'Embedded systems' },
      { id: 'D', text: 'Air-gapped' }
    ],
    correctAnswers: ['B'],
    explanation: 'Software-Defined Networking (SDN) decouples the control plane from the data plane, enabling programmatic, centralized enforcement of microsegmentation and virtual network policies across cloud fabrics.',
    examTip: 'SDN enables programmable network isolation and Zero Trust microsegmentation.'
  },
  {
    id: 'd3-q664',
    domainId: 3,
    subtopic: 'Cloud Edge & Network Security',
    questionNumber: 664,
    type: 'single',
    prompt: 'A security analyst must prevent remote users on home Wi-Fi from accessing malicious or newly registered domains inline, checking each request for categorization and reputation. Which technology satisfies this?',
    options: [
      { id: 'A', text: 'VPN' },
      { id: 'B', text: 'SASE' },
      { id: 'C', text: 'IDS' },
      { id: 'D', text: 'SD-WAN' }
    ],
    correctAnswers: ['B'],
    explanation: 'Secure Access Service Edge (SASE) incorporates cloud-delivered Secure Web Gateway (SWG) and DNS filtering, inspecting outbound web requests inline for remote users before connections complete.',
    examTip: 'SASE combines edge networking with cloud-delivered security for the hybrid remote workforce.'
  },
  {
    id: 'd3-q680',
    domainId: 3,
    subtopic: 'Cloud Responsibility Matrix',
    questionNumber: 680,
    type: 'single',
    prompt: 'A company migrates its email system from an on-premises Microsoft Exchange server to a cloud-hosted Software as a Service (SaaS) platform. Which of the following remains the primary security responsibility of the customer?',
    options: [
      { id: 'A', text: 'Patching the underlying database operating system' },
      { id: 'B', text: 'Physical security of the data center storage arrays' },
      { id: 'C', text: 'Configuring user access permissions and classifying sensitive data' },
      { id: 'D', text: 'Maintaining hypervisor isolation between cloud tenants' }
    ],
    correctAnswers: ['C'],
    explanation: 'In the Cloud Shared Responsibility Model (even in SaaS), the customer always retains responsibility for managing user identities, access controls (IAM/MFA), and protecting/classifying their own data.',
    examTip: 'Data, identities, and access permissions are ALWAYS the customer\'s responsibility across IaaS, PaaS, and SaaS.'
  },
  {
    id: 'd3-q685',
    domainId: 3,
    subtopic: 'Industrial Control Systems (ICS/SCADA)',
    questionNumber: 685,
    type: 'single',
    prompt: 'A hydroelectric power utility operates legacy Programmable Logic Controllers (PLCs) on its turbine floor that cannot support modern antivirus agents or encryption. Which architectural strategy best protects these controllers from corporate IT network compromises?',
    options: [
      { id: 'A', text: 'Air-gapping or strict OT/IT network segmentation with a unidirectional data diode' },
      { id: 'B', text: 'Enabling automatic Windows updates on the PLC HMI every Tuesday' },
      { id: 'C', text: 'Placing the PLCs inside the public DMZ for vendor remote support' },
      { id: 'D', text: 'Configuring split-tunnel VPN access directly to the SCADA subnet' }
    ],
    correctAnswers: ['A'],
    explanation: 'Operational Technology (OT) and ICS/SCADA environments rely on strict physical or logical segmentation (Purdue Model zones/conduits) or air-gaps/unidirectional data diodes so compromises on the corporate IT LAN cannot traverse into critical infrastructure.',
    examTip: 'OT/ICS/SCADA protection = Air-gap, VLAN segmentation, and jump servers.'
  },
  {
    id: 'd3-q692',
    domainId: 3,
    subtopic: 'Containerization vs Virtualization',
    questionNumber: 692,
    type: 'single',
    prompt: 'A DevSecOps team deploys microservices using Docker containers on a shared Linux host. Which of the following architectural risks is unique to containers compared to traditional Type 1 virtual machines?',
    options: [
      { id: 'A', text: 'All containers on the node share the same host OS kernel, making a kernel exploit impact every container' },
      { id: 'B', text: 'Each container requires its own full guest operating system license and virtual BIOS' },
      { id: 'C', text: 'Containers cannot be scanned for software vulnerabilities prior to deployment' },
      { id: 'D', text: 'Network traffic between containers is always routed across the public internet' }
    ],
    correctAnswers: ['A'],
    explanation: 'Unlike virtual machines (which run separate guest OS kernels atop a hypervisor), containers share the underlying host operating system kernel. A privilege escalation or kernel panic in the host OS compromises all running containers.',
    examTip: 'VMs isolate at the hardware/hypervisor layer; Containers share the host OS kernel.'
  },
  {
    id: 'd3-q701',
    domainId: 3,
    subtopic: 'Serverless Architecture',
    questionNumber: 701,
    type: 'single',
    prompt: 'An organization transitions its payment webhook processing to a cloud Serverless (Function-as-a-Service) architecture. Which security maintenance task is transferred away from the customer to the Cloud Service Provider?',
    options: [
      { id: 'A', text: 'Securing application API keys and secrets' },
      { id: 'B', text: 'Preventing injection flaws in function source code' },
      { id: 'C', text: 'Patching and hardening the underlying host operating system' },
      { id: 'D', text: 'Defining least-privilege IAM execution roles for the function' }
    ],
    correctAnswers: ['C'],
    explanation: 'In Serverless (FaaS) computing, the cloud provider dynamically provisions and patches the underlying server OS and runtime container. The customer remains responsible for function code security, secrets, and IAM permissions.',
    examTip: 'Serverless eliminates OS patching for the customer, but code vulnerabilities (SQLi, broken IAM) remain the customer\'s duty.'
  },
  {
    id: 'd3-q708',
    domainId: 3,
    subtopic: 'Storage Resilience & RAID',
    questionNumber: 708,
    type: 'single',
    prompt: 'A database architect requires a disk array configuration for a mission-critical medical server that combines mirroring and striping, provides fast read/write performance, and can survive the simultaneous failure of one drive per mirrored pair. Which RAID level should be selected?',
    options: [
      { id: 'A', text: 'RAID 0' },
      { id: 'B', text: 'RAID 1' },
      { id: 'C', text: 'RAID 5' },
      { id: 'D', text: 'RAID 10 (1+0)' }
    ],
    correctAnswers: ['D'],
    explanation: 'RAID 10 (RAID 1+0) stripes data across mirrored pairs (requiring at least 4 drives). It delivers both the speed of striping (RAID 0) and the high fault tolerance of mirroring (RAID 1) without parity calculation overhead.',
    examTip: 'RAID 0 = Striping ONLY (zero fault tolerance); RAID 1 = Mirroring; RAID 5 = Striping with parity (min 3 drives); RAID 10 = Stripe of mirrors (min 4 drives).'
  },
  {
    id: 'd3-q715',
    domainId: 3,
    subtopic: 'Power Resiliency',
    questionNumber: 715,
    type: 'single',
    prompt: 'A data center experiences frequent 15-second brownouts and brief power sags before the diesel backup generators spin up to full capacity. Which component ensures servers do not reboot during that transition gap?',
    options: [
      { id: 'A', text: 'UPS (Uninterruptible Power Supply)' },
      { id: 'B', text: 'PDU (Power Distribution Unit)' },
      { id: 'C', text: 'HVAC' },
      { id: 'D', text: 'Dual NIC bonding' }
    ],
    correctAnswers: ['A'],
    explanation: 'An Uninterruptible Power Supply (UPS) provides immediate battery backup power and line conditioning to bridge the gap between a utility power drop and the startup of long-term backup generators.',
    examTip: 'UPS = Short-term battery bridge + surge protection; Generator = Long-term fuel-powered outage protection.'
  },
  {
    id: 'd3-q722',
    domainId: 3,
    subtopic: 'Hardware Root of Trust',
    questionNumber: 722,
    type: 'single',
    prompt: 'Which dedicated crypto-processor chip soldered onto a laptop motherboard stores full-disk encryption keys (such as BitLocker) and verifies boot-loader integrity via Measured Boot?',
    options: [
      { id: 'A', text: 'HSM' },
      { id: 'B', text: 'TPM' },
      { id: 'C', text: 'SED' },
      { id: 'D', text: 'FPGA' }
    ],
    correctAnswers: ['B'],
    explanation: 'A Trusted Platform Module (TPM) is a dedicated hardware chip integrated into an endpoint motherboard that provides a hardware root of trust, stores FDE keys, and validates UEFI Secure/Measured Boot hashes.',
    examTip: 'TPM = Single endpoint motherboard chip; HSM = Dedicated high-performance network/PCIe appliance managing enterprise keys for many servers.'
  },
  {
    id: 'd3-q729',
    domainId: 3,
    subtopic: 'Enterprise Key Management Appliances',
    questionNumber: 729,
    type: 'single',
    prompt: 'A global certificate authority and payment processor needs a tamper-evident, FIPS 140-3 validated physical appliance to generate, store, and offload high-speed RSA/ECC cryptographic operations for hundreds of web servers. Which device is required?',
    options: [
      { id: 'A', text: 'TPM (Trusted Platform Module)' },
      { id: 'B', text: 'HSM (Hardware Security Module)' },
      { id: 'C', text: 'NGFW (Next-Generation Firewall)' },
      { id: 'D', text: 'CASB (Cloud Access Security Broker)' }
    ],
    correctAnswers: ['B'],
    explanation: 'A Hardware Security Module (HSM) is a hardened, tamper-resistant physical appliance (or cloud-dedicated module) that safeguards and accelerates cryptographic keys and digital signatures at enterprise scale.',
    examTip: 'HSMs feature physical tamper-zeroization (wiping keys immediately if the chassis is drilled or opened).'
  },
  {
    id: 'd3-q735',
    domainId: 3,
    subtopic: 'Network Proxy Architectures',
    questionNumber: 735,
    type: 'single',
    prompt: 'Which security appliance sits in a company\'s DMZ, accepts incoming requests from external internet clients on behalf of internal backend web servers, performs TLS termination, and hides internal server IP addresses?',
    options: [
      { id: 'A', text: 'Forward proxy' },
      { id: 'B', text: 'Reverse proxy' },
      { id: 'C', text: 'Span port / TAP' },
      { id: 'D', text: 'Layer 2 unmanaged switch' }
    ],
    correctAnswers: ['B'],
    explanation: 'A reverse proxy sits in front of backend web servers, protecting them by terminating external client connections, caching content, offloading SSL/TLS decryption, and hiding internal server topology.',
    examTip: 'Forward proxy = Protects internal clients going OUT to internet; Reverse proxy = Protects internal servers from external clients coming IN.'
  },
  {
    id: 'd3-q741',
    domainId: 3,
    subtopic: 'VPN Tunneling Configurations',
    questionNumber: 741,
    type: 'single',
    prompt: 'A remote worker connected to the corporate VPN complains that video streaming and local printer access are slow because all internet traffic is routed back through headquarters for inspection. Which VPN mode is currently enforced?',
    options: [
      { id: 'A', text: 'Split tunnel' },
      { id: 'B', text: 'Full tunnel' },
      { id: 'C', text: 'Site-to-site IPsec' },
      { id: 'D', text: 'Clientless HTML5 VPN' }
    ],
    correctAnswers: ['B'],
    explanation: 'Full-tunnel VPN forces 100% of the remote endpoint\'s network traffic (both corporate subnet requests and general internet browsing) through the encrypted enterprise VPN concentrator for inspection.',
    examTip: 'Full tunnel = More secure (all traffic inspected by HQ firewall), higher bandwidth load; Split tunnel = Faster (only corporate traffic uses VPN), higher risk.'
  },
  {
    id: 'd3-q748',
    domainId: 3,
    subtopic: 'Layer 2 Attack Mitigation',
    questionNumber: 748,
    type: 'single',
    prompt: 'An attacker connects a laptop to a conference room Ethernet jack and runs a rogue DHCP server that hands out malicious default gateway and DNS addresses to employee laptops. Which switch feature prevents this?',
    options: [
      { id: 'A', text: 'DHCP snooping' },
      { id: 'B', text: 'Spanning Tree Protocol (STP)' },
      { id: 'C', text: 'Dynamic ARP Inspection (DAI)' },
      { id: 'D', text: 'VLAN trunking' }
    ],
    correctAnswers: ['A'],
    explanation: 'DHCP snooping is a Layer 2 switch security feature that classifies switch ports as trusted (uplinks to legitimate DHCP servers) or untrusted (access ports), blocking DHCPOFFER/DHCPACK packets from rogue devices.',
    examTip: 'DHCP Snooping stops rogue DHCP servers; Dynamic ARP Inspection (DAI) stops ARP poisoning/spoofing.'
  },
  {
    id: 'd3-q755',
    domainId: 3,
    subtopic: 'High Availability Clustering',
    questionNumber: 755,
    type: 'single',
    prompt: 'Two perimeter firewalls are deployed in a high-availability cluster where both appliances actively process and load-share live traffic simultaneously, and either unit can absorb the full load if the other fails. What configuration is this?',
    options: [
      { id: 'A', text: 'Active-passive' },
      { id: 'B', text: 'Active-active' },
      { id: 'C', text: 'Cold standby' },
      { id: 'D', text: 'Round-robin DNS without health checks' }
    ],
    correctAnswers: ['B'],
    explanation: 'In an Active-Active cluster, all member nodes are online and processing traffic concurrently, maximizing throughput and providing instant failover without idle standby hardware.',
    examTip: 'Active-Active = Both nodes process live traffic; Active-Passive = Secondary node sits idle until primary fails.'
  },
  {
    id: 'd3-q762',
    domainId: 3,
    subtopic: 'Backup Types & Recovery Speed',
    questionNumber: 762,
    type: 'single',
    prompt: 'An organization performs a Full backup every Sunday night. On Monday through Saturday, the backup job copies ONLY the files that have changed since the previous day\'s backup (clearing the archive bit). Which backup type is used Monday–Saturday?',
    options: [
      { id: 'A', text: 'Differential backup' },
      { id: 'B', text: 'Incremental backup' },
      { id: 'C', text: 'Snapshot backup' },
      { id: 'D', text: 'Copy backup' }
    ],
    correctAnswers: ['B'],
    explanation: 'An Incremental backup saves only data modified since the last backup of ANY type (full or incremental) and clears the archive bit. It offers the fastest backup time and lowest storage footprint, though restoration requires the last Full + all subsequent Incrementals.',
    examTip: 'Incremental = Fast backup, slower restore (needs Full + ALL incrementals); Differential = Slower backup, faster restore (needs Full + ONLY latest differential).'
  },
  {
    id: 'd3-q769',
    domainId: 3,
    subtopic: 'Disaster Recovery Sites',
    questionNumber: 769,
    type: 'single',
    prompt: 'A stock trading firm requires near-zero RTO and RPO. It maintains a secondary data center with fully powered servers, identical network configurations, and real-time synchronous database replication ready to take over traffic within seconds. What type of DR site is this?',
    options: [
      { id: 'A', text: 'Cold site' },
      { id: 'B', text: 'Warm site' },
      { id: 'C', text: 'Hot site' },
      { id: 'D', text: 'Mobile trailer site' }
    ],
    correctAnswers: ['C'],
    explanation: 'A Hot site is a fully redundant, live mirror of the primary production environment with real-time data synchronization, capable of assuming production workloads almost instantaneously.',
    examTip: 'Hot site = Minutes/seconds recovery (most expensive); Warm site = Hours/days (hardware present, restore data); Cold site = Weeks (empty room with power/cooling).'
  },
  {
    id: 'd3-q776',
    domainId: 3,
    subtopic: 'Infrastructure as Code (IaC)',
    questionNumber: 776,
    type: 'single',
    prompt: 'A cloud security architect wants to ensure that whenever developers spin up new AWS/Azure environments, firewalls, subnets, and encryption settings are provisioned identically from version-controlled, peer-reviewed declarative files. Which concept is this?',
    options: [
      { id: 'A', text: 'Infrastructure as Code (IaC)' },
      { id: 'B', text: 'Software-Defined Wide Area Network (SD-WAN)' },
      { id: 'C', text: 'Dynamic Host Configuration Protocol (DHCP)' },
      { id: 'D', text: 'Bring Your Own Device (BYOD)' }
    ],
    correctAnswers: ['A'],
    explanation: 'Infrastructure as Code (IaC) uses machine-readable definition files (e.g., Terraform, CloudFormation, Ansible) to provision and manage cloud infrastructure automatically, preventing manual configuration drift.',
    examTip: 'IaC allows security teams to scan infrastructure templates for misconfigurations BEFORE deployment.'
  },
  {
    id: 'd3-q783',
    domainId: 3,
    subtopic: 'Database Integrity & De-identification',
    questionNumber: 783,
    type: 'single',
    prompt: 'A medical research institute shares clinical trial datasets with external university statisticians. Before exporting the table, all direct patient identifiers (names, SSNs, addresses) are irreversibly stripped so individuals cannot be re-identified. What technique was applied?',
    options: [
      { id: 'A', text: 'Anonymization' },
      { id: 'B', text: 'Watermarking' },
      { id: 'C', text: 'Steganography' },
      { id: 'D', text: 'Digital signing' }
    ],
    correctAnswers: ['A'],
    explanation: 'Anonymization permanently and irreversibly removes personally identifiable information (PII/PHI) from datasets so the data subject can no longer be identified.',
    examTip: 'Pseudonymization replaces names with reversible IDs/aliases; Anonymization irreversibly strips identity.'
  },
  {
    id: 'd3-q790',
    domainId: 3,
    subtopic: 'Network Sensors & Traffic Mirroring',
    questionNumber: 790,
    type: 'single',
    prompt: 'A security engineer is deploying a passive Network Intrusion Detection System (NIDS) to analyze copies of all traffic traversing a core switch without introducing inline latency. Which switch feature should be configured?',
    options: [
      { id: 'A', text: 'Port mirroring (SPAN port) or Network TAP' },
      { id: 'B', text: '802.1Q VLAN tagging' },
      { id: 'C', text: 'Port security with sticky MAC' },
      { id: 'D', text: 'Network Address Translation (NAT)' }
    ],
    correctAnswers: ['A'],
    explanation: 'A Switch Port Analyzer (SPAN / port mirroring) or physical Network Test Access Point (TAP) sends a passive duplicate copy of network frames to an out-of-band NIDS sensor for inspection.',
    examTip: 'IDS = Out-of-band / Passive (uses SPAN port or TAP); IPS = Inline / Active (sits directly in traffic path).'
  },
  {
    id: 'd3-q797',
    domainId: 3,
    subtopic: 'Email Authentication Architecture',
    questionNumber: 797,
    type: 'multiple',
    prompt: 'An organization wants to prevent attackers from spoofing its corporate domain in outbound phishing emails. Which three DNS-based email security standards work together to verify sender IP addresses, cryptographically sign headers, and enforce rejection policies? (Select three)',
    options: [
      { id: 'A', text: 'SPF (Sender Policy Framework)' },
      { id: 'B', text: 'DKIM (DomainKeys Identified Mail)' },
      { id: 'C', text: 'DMARC (Domain-based Message Authentication, Reporting, and Conformance)' },
      { id: 'D', text: 'SNMPv3 (Simple Network Management Protocol)' },
      { id: 'E', text: 'LDAPS (Lightweight Directory Access Protocol Secure)' },
      { id: 'F', text: 'BGP (Border Gateway Protocol)' }
    ],
    correctAnswers: ['A', 'B', 'C'],
    explanation: 'SPF lists authorized sending mail server IPs in DNS; DKIM attaches a cryptographic digital signature to email headers; DMARC instructs receiving servers how to handle messages that fail SPF/DKIM (none, quarantine, or reject) and where to send reports.',
    examTip: 'SPF = Authorized IP list; DKIM = Cryptographic header signature; DMARC = Enforcement policy (quarantine/reject) + reporting.'
  },
  {
    id: 'd3-q804',
    domainId: 3,
    subtopic: 'DNS Security Extensions',
    questionNumber: 804,
    type: 'single',
    prompt: 'Which protocol extension adds cryptographic digital signatures to DNS resource records to prevent DNS cache poisoning and forged responses, without encrypting the query itself?',
    options: [
      { id: 'A', text: 'DNSSEC' },
      { id: 'B', text: 'DoH (DNS over HTTPS)' },
      { id: 'C', text: 'DoT (DNS over TLS)' },
      { id: 'D', text: 'DHCPv6' }
    ],
    correctAnswers: ['A'],
    explanation: 'Domain Name System Security Extensions (DNSSEC) digitally signs DNS records to guarantee origin authenticity and data integrity (preventing DNS spoofing/cache poisoning), whereas DoH and DoT encrypt the DNS transport channel for privacy.',
    examTip: 'DNSSEC = Integrity/Authenticity (digital signatures); DoH/DoT = Confidentiality (encryption).'
  },
  {
    id: 'd3-q811',
    domainId: 3,
    subtopic: 'Secure Industrial & IoT Communication',
    questionNumber: 811,
    type: 'single',
    prompt: 'A smart building deploys thousands of wireless Zigbee and Z-Wave HVAC and lighting sensors. What is the primary architectural security control to prevent a compromise of these low-power sensors from affecting the corporate financial database?',
    options: [
      { id: 'A', text: 'Place all IoT sensors on a dedicated, isolated VLAN with firewall deny rules blocking access to corporate subnets' },
      { id: 'B', text: 'Install an enterprise EDR kernel driver directly onto the smart lightbulbs' },
      { id: 'C', text: 'Configure the sensors to authenticate using Active Directory Kerberos tickets' },
      { id: 'D', text: 'Bridge the IoT gateway directly into the data center core switch' }
    ],
    correctAnswers: ['A'],
    explanation: 'Because IoT sensors cannot run endpoint security agents and often have weak firmware, isolating them on a dedicated, non-routable VLAN segmented by a firewall is essential.',
    examTip: 'Always isolate IoT, guest Wi-Fi, and printers onto separate segmented VLANs.'
  },
  {
    id: 'd3-q818',
    domainId: 3,
    subtopic: 'Secure Enclaves & Confidential Computing',
    questionNumber: 818,
    type: 'single',
    prompt: 'A cloud application processes biometric templates in RAM. To protect the data while "in use" even if the host operating system or hypervisor is compromised, the architect uses CPU-level hardware memory encryption. What is this technology?',
    options: [
      { id: 'A', text: 'Trusted Execution Environment (TEE) / Secure Enclave' },
      { id: 'B', text: 'Self-Encrypting Drive (SED)' },
      { id: 'C', text: 'VLAN Trunking Protocol (VTP)' },
      { id: 'D', text: 'Redundant Array of Independent Disks (RAID)' }
    ],
    correctAnswers: ['A'],
    explanation: 'A Trusted Execution Environment (TEE) or Secure Enclave creates an isolated, hardware-encrypted region of CPU and RAM that protects code and data in use from privileged OS or hypervisor inspection.',
    examTip: 'Secure Enclave / TEE protects "Data in Use" inside processor memory.'
  },
  {
    id: 'd3-q825',
    domainId: 3,
    subtopic: 'Web Application Firewall (WAF) Placement',
    questionNumber: 825,
    type: 'single',
    prompt: 'An e-commerce company uses HTTPS with TLS 1.3 on its web servers. It deploys a new inline Web Application Firewall (WAF), but the WAF fails to detect SQL injection payloads inside incoming POST requests. What is the most likely architectural cause?',
    options: [
      { id: 'A', text: 'TLS termination/decryption is occurring on the backend web server instead of on the WAF or load balancer' },
      { id: 'B', text: 'The WAF is operating at OSI Layer 7 instead of Layer 2' },
      { id: 'C', text: 'The database server is located in a private subnet' },
      { id: 'D', text: 'The DNS server has DNSSEC enabled' }
    ],
    correctAnswers: ['A'],
    explanation: 'If HTTPS traffic passes through the WAF still encrypted (end-to-end TLS terminating only at the backend server), the WAF cannot inspect the encrypted HTTP POST body. Configuring TLS termination or SSL inspection at the WAF/load balancer allows cleartext payload inspection.',
    examTip: 'A WAF cannot inspect encrypted HTTPS payloads unless TLS is terminated or decrypted at the WAF.'
  },
  {
    id: 'd3-q832',
    domainId: 3,
    subtopic: 'Microservices & API Gateways',
    questionNumber: 832,
    type: 'single',
    prompt: 'A software architecture team breaks a monolithic application into 40 containerized microservices. Which centralized architectural component should be placed in front of the microservices to enforce rate limiting, OAuth token validation, and schema checking?',
    options: [
      { id: 'A', text: 'API Gateway' },
      { id: 'B', text: 'Network Hub' },
      { id: 'C', text: 'SMTP Relay' },
      { id: 'D', text: 'bastion host' }
    ],
    correctAnswers: ['A'],
    explanation: 'An API Gateway acts as the single entry point for client requests into a microservices architecture, centrally enforcing authentication (OAuth/JWT), rate limiting/throttling, and request validation.',
    examTip: 'API Gateways secure microservices by centralizing rate limiting, authentication, and logging.'
  },
  {
    id: 'd3-q840',
    domainId: 3,
    subtopic: 'Port Security & 802.1X Guest Quarantine',
    questionNumber: 840,
    type: 'single',
    prompt: 'When an employee plugs a corporate laptop into a wired Ethernet port, 802.1X verifies its certificate and health posture. If the laptop is missing critical OS patches, the switch places the device into a restricted VLAN where it can only reach the patch server. What is this zone called?',
    options: [
      { id: 'A', text: 'Remediation / Quarantine VLAN' },
      { id: 'B', text: 'Honeynet' },
      { id: 'C', text: 'Demilitarized Zone (DMZ)' },
      { id: 'D', text: 'Storage Area Network (SAN)' }
    ],
    correctAnswers: ['A'],
    explanation: 'Network Access Control (NAC) with 802.1X places non-compliant endpoints into a Remediation (or Quarantine) VLAN where network access is restricted solely to patch management and antivirus update servers until compliance is restored.',
    examTip: 'NAC posture check failure -> Quarantine/Remediation VLAN.'
  },
  {
    id: 'd3-q848',
    domainId: 3,
    subtopic: 'Data Center Environmental Controls',
    questionNumber: 848,
    type: 'single',
    prompt: 'To optimize cooling efficiency in a high-density server room, racks are arranged so that server front air intakes face each other in one row, while rear exhaust vents face each other in the adjacent row. What is this design called?',
    options: [
      { id: 'A', text: 'Hot aisle / cold aisle containment' },
      { id: 'B', text: 'Access control vestibule' },
      { id: 'C', text: 'Faraday shielding' },
      { id: 'D', text: 'Load balancing' }
    ],
    correctAnswers: ['A'],
    explanation: 'Hot aisle / cold aisle layout separates cold intake air from hot exhaust air, preventing hot exhaust from being sucked directly into neighboring servers and preserving hardware availability.',
    examTip: 'Hot/Cold aisle containment prevents thermal overheating in data centers.'
  },
  {
    id: 'd3-q856',
    domainId: 3,
    subtopic: 'Secure Communication Protocols',
    questionNumber: 856,
    type: 'single',
    prompt: 'A network administrator needs to monitor router CPU temperature and interface traffic counters across the enterprise WAN. Which protocol version provides encrypted and authenticated polling for network management?',
    options: [
      { id: 'A', text: 'SNMPv1' },
      { id: 'B', text: 'SNMPv2c' },
      { id: 'C', text: 'SNMPv3' },
      { id: 'D', text: 'Telnet' }
    ],
    correctAnswers: ['C'],
    explanation: 'Simple Network Management Protocol version 3 (SNMPv3) adds strong cryptographic authentication and packet encryption, replacing the insecure cleartext "community strings" used in SNMPv1 and SNMPv2c.',
    examTip: 'Always choose SNMPv3 over SNMPv1/v2c to prevent cleartext community string sniffing.'
  },
  {
    id: 'd3-q864',
    domainId: 3,
    subtopic: 'Deception & Defense-in-Depth',
    questionNumber: 864,
    type: 'single',
    prompt: 'Where should a company place its public-facing web and email relay servers so that if an external attacker compromises the web server, the attacker still cannot directly reach the internal Active Directory domain controllers?',
    options: [
      { id: 'A', text: 'Screened subnet (DMZ)' },
      { id: 'B', text: 'Internal core VLAN' },
      { id: 'C', text: 'Air-gapped backup vault' },
      { id: 'D', text: 'Management out-of-band network' }
    ],
    correctAnswers: ['A'],
    explanation: 'A Screened Subnet (Demilitarized Zone / DMZ) sits between the public internet and the private internal LAN, bounded by firewall rules that permit external access to public services while blocking lateral movement into the internal corporate network.',
    examTip: 'CompTIA refers to a DMZ as a "Screened Subnet" on the SY0-701 exam.'
  }
];

