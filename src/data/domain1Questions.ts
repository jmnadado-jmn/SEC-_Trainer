import { MultipleChoiceQuestion } from '../types/exam';

export const DOMAIN_1_QUESTIONS: MultipleChoiceQuestion[] = [
  {
    id: 'd1-q2',
    domainId: 1,
    subtopic: 'Cryptographic Concepts',
    questionNumber: 2,
    type: 'single',
    prompt: 'Which of the following is used to add extra complexity before using a one-way data transformation algorithm?',
    options: [
      { id: 'A', text: 'Key stretching' },
      { id: 'B', text: 'Data masking' },
      { id: 'C', text: 'Steganography' },
      { id: 'D', text: 'Salting' }
    ],
    correctAnswers: ['D'],
    explanation: 'Salting adds random bits to input data (such as passwords) before hashing to ensure identical passwords yield completely unique hash outputs, effectively defeating precomputed rainbow table attacks.',
    examTip: 'Salting is added BEFORE hashing. Key stretching (e.g., bcrypt, PBKDF2) repeats the hash operation thousands of times to slow down brute-force.'
  },
  {
    id: 'd1-q4',
    domainId: 1,
    subtopic: 'Authentication & Access Models',
    questionNumber: 4,
    type: 'single',
    prompt: 'A data administrator is configuring authentication for a SaaS application and would like to reduce the number of credentials employees need to maintain. Which method would allow this?',
    options: [
      { id: 'A', text: 'SSO' },
      { id: 'B', text: 'LEAP' },
      { id: 'C', text: 'MFA' },
      { id: 'D', text: 'PEAP' }
    ],
    correctAnswers: ['A'],
    explanation: 'Single Sign-On (SSO) enables users to authenticate once using a single set of enterprise domain credentials to access multiple connected cloud and internal applications.',
    examTip: 'SSO reduces credential fatigue and minimizes password reuse across third-party software.'
  },
  {
    id: 'd1-q8',
    domainId: 1,
    subtopic: 'Identity & Access Management (IAM)',
    questionNumber: 8,
    type: 'single',
    prompt: 'An administrator notices users logging in from suspicious IP addresses, resets passwords, and wants to prevent unauthorized access from stolen credentials in the future. What should be implemented?',
    options: [
      { id: 'A', text: 'Multifactor authentication' },
      { id: 'B', text: 'Permissions assignment' },
      { id: 'C', text: 'Access management' },
      { id: 'D', text: 'Password complexity' }
    ],
    correctAnswers: ['A'],
    explanation: 'Multifactor authentication (MFA) requires an additional verification factor (e.g. authenticator token, biometric push), blocking unauthorized logins even if user passwords have been compromised or leaked.',
    examTip: 'MFA combines at least two distinct categories: something you know, something you have, and something you are.'
  },
  {
    id: 'd1-q17',
    domainId: 1,
    subtopic: 'Zero Trust Architecture',
    questionNumber: 17,
    type: 'single',
    prompt: 'An analyst evaluates the implementation of Zero Trust principles within the data plane. Which would be most relevant?',
    options: [
      { id: 'A', text: 'Secured zones' },
      { id: 'B', text: 'Subject role' },
      { id: 'C', text: 'Adaptive identity' },
      { id: 'D', text: 'Threat scope reduction' }
    ],
    correctAnswers: ['D'],
    explanation: 'Within the data plane, Zero Trust focuses on micro-segmentation and threat scope reduction, restricting lateral communication between workloads so that a breach in one zone cannot readily reach other data assets.',
    examTip: 'The control plane handles policy decisions and identity context; the data plane executes traffic filtering and micro-segmentation.'
  },
  {
    id: 'd1-q25',
    domainId: 1,
    subtopic: 'Data Protection & Encryption',
    questionNumber: 25,
    type: 'single',
    prompt: 'A security administrator would like to protect data on employees\' laptops if a device is lost or stolen. Which encryption technique should be used?',
    options: [
      { id: 'A', text: 'Partition' },
      { id: 'B', text: 'Asymmetric' },
      { id: 'C', text: 'Full disk' },
      { id: 'D', text: 'Database' }
    ],
    correctAnswers: ['C'],
    explanation: 'Full disk encryption (FDE), such as BitLocker or FileVault, encrypts the entire physical storage volume, ensuring all user documents, system files, and operating system data remain unreadable without authentication keys.',
    examTip: 'FDE secures "data at rest" against physical drive theft.'
  },
  {
    id: 'd1-q26',
    domainId: 1,
    subtopic: 'Security Control Types',
    questionNumber: 26,
    type: 'single',
    prompt: 'Which security control type does an acceptable use policy (AUP) best represent?',
    options: [
      { id: 'A', text: 'Detective' },
      { id: 'B', text: 'Compensating' },
      { id: 'C', text: 'Corrective' },
      { id: 'D', text: 'Preventive' }
    ],
    correctAnswers: ['D'],
    explanation: 'Policies define organizational rules and acceptable boundaries to prevent security violations and improper behavior before they occur, categorizing them as preventive administrative (managerial) controls.',
    examTip: 'Control functional categories: Preventive (stops action), Detective (identifies action), Corrective (restores state).'
  },
  {
    id: 'd1-q27',
    domainId: 1,
    subtopic: 'Security Principles',
    questionNumber: 27,
    type: 'single',
    prompt: 'An IT manager restricts access to the administrator console of help desk software strictly to the manager and lead. What technique is this?',
    options: [
      { id: 'A', text: 'Hardening' },
      { id: 'B', text: 'Employee monitoring' },
      { id: 'C', text: 'Configuration enforcement' },
      { id: 'D', text: 'Least privilege' }
    ],
    correctAnswers: ['D'],
    explanation: 'Restricting access rights strictly to the minimum personnel and permissions necessary to perform required job duties implements the principle of least privilege.',
    examTip: 'Least privilege prevents excess privilege creep and reduces blast radius if an account is compromised.'
  },
  {
    id: 'd1-q33',
    domainId: 1,
    subtopic: 'Data Classification',
    questionNumber: 33,
    type: 'single',
    prompt: 'Employees in research and development use extensive training to protect what primary type of data?',
    options: [
      { id: 'A', text: 'Encrypted' },
      { id: 'B', text: 'Intellectual property' },
      { id: 'C', text: 'Critical' },
      { id: 'D', text: 'Data in transit' }
    ],
    correctAnswers: ['B'],
    explanation: 'Research and development (R&D) business units heavily design proprietary software, trade secrets, blueprints, and patents, classified as sensitive intellectual property (IP).',
    examTip: 'Intellectual property (IP) represents a company\'s proprietary competitive advantage.'
  },
  {
    id: 'd1-q46',
    domainId: 1,
    subtopic: 'Access Management & Policies',
    questionNumber: 46,
    type: 'single',
    prompt: 'A company\'s legal department wants to ensure documents in a SaaS app cannot be accessed by individuals in high-risk countries. What is the most effective way?',
    options: [
      { id: 'A', text: 'Data masking' },
      { id: 'B', text: 'Encryption' },
      { id: 'C', text: 'Geolocation policy' },
      { id: 'D', text: 'Data sovereignty regulation' }
    ],
    correctAnswers: ['C'],
    explanation: 'A geolocation policy (geofencing or IP location filtering) explicitly permits or restricts access to applications and documents based on the geographic origin/country of the connecting IP address.',
    examTip: 'Geolocation filtering is commonly enforced within Conditional Access policies.'
  },
  {
    id: 'd1-q50',
    domainId: 1,
    subtopic: 'Media Sanitization & Destruction',
    questionNumber: 50,
    type: 'single',
    prompt: 'A company requires hard drives to be securely wiped before recycling. What best describes this policy?',
    options: [
      { id: 'A', text: 'Enumeration' },
      { id: 'B', text: 'Sanitization' },
      { id: 'C', text: 'Destruction' },
      { id: 'D', text: 'Inventory' }
    ],
    correctAnswers: ['B'],
    explanation: 'Sanitization is the process of removing or overwriting sensitive data from storage media so that it cannot be reconstructed or recovered, allowing the drives to be safely repurposed or recycled.',
    examTip: 'Destruction physically crushes or shreds media; sanitization clears/purges data while leaving hardware reusable.'
  },
  {
    id: 'd1-q60',
    domainId: 1,
    subtopic: 'Cryptographic Concepts',
    questionNumber: 60,
    type: 'single',
    prompt: 'Which security property allows for the indisputable attribution of messages to individuals?',
    options: [
      { id: 'A', text: 'Adaptive identity' },
      { id: 'B', text: 'Non-repudiation' },
      { id: 'C', text: 'Authentication' },
      { id: 'D', text: 'Access logs' }
    ],
    correctAnswers: ['B'],
    explanation: 'Non-repudiation ensures that a sender cannot successfully dispute or deny having created and sent a message, achieved via asymmetric digital signatures and cryptographic hashing.',
    examTip: 'Digital signatures provide authentication, integrity, AND non-repudiation.'
  },
  {
    id: 'd1-q62',
    domainId: 1,
    subtopic: 'Data Security Controls',
    questionNumber: 62,
    type: 'single',
    prompt: 'Which tool assists with detecting an employee accidentally emailing a file containing a customer\'s PII?',
    options: [
      { id: 'A', text: 'SCAP' },
      { id: 'B', text: 'NetFlow' },
      { id: 'C', text: 'Antivirus' },
      { id: 'D', text: 'DLP' }
    ],
    correctAnswers: ['D'],
    explanation: 'Data Loss Prevention (DLP) solutions inspect content in transit, matching regex and classification tags for sensitive patterns like SSNs, credit cards, or customer PII, blocking unauthorized transmissions.',
    examTip: 'DLP operates in three modes: Data in Transit (network/email DLP), Data in Use (endpoint DLP), and Data at Rest (storage DLP).'
  },
  {
    id: 'd1-q78',
    domainId: 1,
    subtopic: 'Obfuscation & Steganography',
    questionNumber: 78,
    type: 'single',
    prompt: 'Which describes the process of concealing code or text inside a graphical image?',
    options: [
      { id: 'A', text: 'Symmetric encryption' },
      { id: 'B', text: 'Hashing' },
      { id: 'C', text: 'Data masking' },
      { id: 'D', text: 'Steganography' }
    ],
    correctAnswers: ['D'],
    explanation: 'Steganography is the science of hiding data inside ordinary files (such as embedding hidden text or payloads inside least significant bits of an image or audio track) without altering the host file\'s apparent appearance.',
    examTip: 'Encryption hides the meaning of data; steganography hides the very existence of data.'
  },
  {
    id: 'd1-q80',
    domainId: 1,
    subtopic: 'Authentication Factors',
    questionNumber: 80,
    type: 'single',
    prompt: 'A network manager implements MFA using "something you know, something you have, and something you are." What accomplishes this?',
    options: [
      { id: 'A', text: 'Domain name, PKI, GeoIP lookup' },
      { id: 'B', text: 'VPN IP address, company ID, facial structure' },
      { id: 'C', text: 'Password, authentication token, thumbprint' },
      { id: 'D', text: 'Company URL, TLS certificate, home address' }
    ],
    correctAnswers: ['C'],
    explanation: 'Password represents "something you know", authentication token represents "something you have", and thumbprint represents biometric "something you are".',
    examTip: 'Two instances of the same factor (e.g. password + PIN) is NOT multi-factor; they must come from distinct categories.'
  },
  {
    id: 'd1-q86',
    domainId: 1,
    subtopic: 'Data Protection Techniques',
    questionNumber: 86,
    type: 'single',
    prompt: 'Which method is best to use when a requirement is to display only the last four digits on a credit card?',
    options: [
      { id: 'A', text: 'Encryption' },
      { id: 'B', text: 'Hashing' },
      { id: 'C', text: 'Masking' },
      { id: 'D', text: 'Tokenization' }
    ],
    correctAnswers: ['C'],
    explanation: 'Data masking hides sensitive portions of data elements (e.g., displaying ****-****-****-1234) while allowing customer service agents or receipts to view partial context.',
    examTip: 'Tokenization replaces the whole number with a vault token; masking merely obscures characters on display/logs.'
  },
  {
    id: 'd1-q91',
    domainId: 1,
    subtopic: 'Data States',
    questionNumber: 91,
    type: 'single',
    prompt: 'An organization leverages a VPN tunnel between HQ and a branch office. What data state is the VPN protecting?',
    options: [
      { id: 'A', text: 'Data in use' },
      { id: 'B', text: 'Data in transit' },
      { id: 'C', text: 'Geographic restrictions' },
      { id: 'D', text: 'Data sovereignty' }
    ],
    correctAnswers: ['B'],
    explanation: 'Data moving across public networks or between network interfaces is "data in transit" (or data in motion). Encrypted VPN tunnels (IPsec/TLS) protect its confidentiality and integrity during transmission.',
    examTip: 'Three data states: Data at Rest (storage), Data in Transit (network), Data in Use (RAM/CPU memory).'
  },
  {
    id: 'd1-q106',
    domainId: 1,
    subtopic: 'Privacy & Data Roles',
    questionNumber: 106,
    type: 'single',
    prompt: 'A marketing department collects and stores customer data, while IT infrastructure secures the systems. What role best describes the customer whose personal information is stored?',
    options: [
      { id: 'A', text: 'Processor' },
      { id: 'B', text: 'Custodian' },
      { id: 'C', text: 'Subject' },
      { id: 'D', text: 'Owner' }
    ],
    correctAnswers: ['C'],
    explanation: 'Under privacy legislation (such as GDPR), the individual whose identifiable personal data is collected and processed is the data subject.',
    examTip: 'Data Controller decides why/how data is processed; Data Processor processes it on behalf of controller; Data Custodian manages day-to-day IT controls.'
  },
  {
    id: 'd1-q118',
    domainId: 1,
    subtopic: 'Data Classification',
    questionNumber: 118,
    type: 'multiple',
    prompt: 'A company is developing a critical defense system for the government and storing project files. How is this data classified? (Select two)',
    options: [
      { id: 'A', text: 'Private' },
      { id: 'B', text: 'Confidential' },
      { id: 'C', text: 'Public' },
      { id: 'D', text: 'Operational' },
      { id: 'E', text: 'Urgent' },
      { id: 'F', text: 'Restricted' }
    ],
    correctAnswers: ['B', 'F'],
    explanation: 'Government and military data models use classifications like Confidential, Secret, and Top Secret, while enterprise/defense contractors also designate proprietary defense work as Restricted or Confidential.',
    examTip: 'Pay attention to government vs commercial classifications. Government: Unclassified, Confidential, Secret, Top Secret.'
  },
  {
    id: 'd1-q133',
    domainId: 1,
    subtopic: 'CIA Triad',
    questionNumber: 133,
    type: 'single',
    prompt: 'Which security concept is the primary reason HR file permissions follow least privilege?',
    options: [
      { id: 'A', text: 'Integrity' },
      { id: 'B', text: 'Availability' },
      { id: 'C', text: 'Confidentiality' },
      { id: 'D', text: 'Non-repudiation' }
    ],
    correctAnswers: ['C'],
    explanation: 'Restricting access to HR files ensures that unauthorized personnel cannot view private employee salaries, evaluations, and background records, directly serving Confidentiality.',
    examTip: 'Confidentiality = preventing unauthorized disclosure; Integrity = preventing unauthorized modification; Availability = ensuring authorized access when needed.'
  },
  {
    id: 'd1-q145',
    domainId: 1,
    subtopic: 'Identity Federation & Password Security',
    questionNumber: 145,
    type: 'multiple',
    prompt: 'An employee creates an intranet password and gains access to other company partner sites based on that profile. Which concepts are used? (Select two)',
    options: [
      { id: 'A', text: 'Federation' },
      { id: 'B', text: 'Identity proofing' },
      { id: 'C', text: 'Password complexity' },
      { id: 'D', text: 'Default password changes' },
      { id: 'E', text: 'Password manager' },
      { id: 'F', text: 'Open authentication' }
    ],
    correctAnswers: ['A', 'C'],
    explanation: 'Federation allows an identity provider to authenticate a user across separate external partner systems, while the requirement for password rules governs password complexity.',
    examTip: 'Federation links user identities across disparate organizational boundaries (e.g. SAML, OpenID Connect).'
  },
  {
    id: 'd1-q158',
    domainId: 1,
    subtopic: 'Physical Security Controls',
    questionNumber: 158,
    type: 'single',
    prompt: 'Visitors to a secured facility are required to check in with a photo ID and enter the facility through an access control vestibule (mantrap). Which of the following best describes this form of security control?',
    options: [
      { id: 'A', text: 'Physical' },
      { id: 'B', text: 'Managerial' },
      { id: 'C', text: 'Technical' },
      { id: 'D', text: 'Operational' }
    ],
    correctAnswers: ['A'],
    explanation: 'Access control vestibules (mantraps), turnstiles, fences, locks, and photo ID checks are physical security controls designed to restrict direct physical entry to real-world assets.',
    examTip: 'Physical controls protect perimeter and hardware; Technical controls are implemented in software/systems; Managerial controls are administrative policies.'
  },
  {
    id: 'd1-q181',
    domainId: 1,
    subtopic: 'Cryptographic Hashing & Integrity',
    questionNumber: 181,
    type: 'single',
    prompt: 'Which of the following is an algorithm performed to verify that data has not been modified in transit or at rest?',
    options: [
      { id: 'A', text: 'Hash' },
      { id: 'B', text: 'Code check' },
      { id: 'C', text: 'Encryption' },
      { id: 'D', text: 'Checksum' }
    ],
    correctAnswers: ['A'],
    explanation: 'A cryptographic hash function (e.g., SHA-256) takes an arbitrary input and produces a fixed-length unique digest. If any bit of the data changes, the hash changes completely (avalanche effect), proving integrity.',
    examTip: 'Hashing proves integrity; Encryption proves confidentiality; Digital signatures prove both plus non-repudiation.'
  },
  {
    id: 'd1-q225',
    domainId: 1,
    subtopic: 'Advanced Cryptography',
    questionNumber: 225,
    type: 'single',
    prompt: 'A financial institution would like to store customer data in the cloud and allow data to be computed and manipulated while remaining encrypted, preventing the CSP from reading cleartext. Overhead is not a concern. Which technique best meets this requirement?',
    options: [
      { id: 'A', text: 'Asymmetric' },
      { id: 'B', text: 'Symmetric' },
      { id: 'C', text: 'Homomorphic' },
      { id: 'D', text: 'Ephemeral' }
    ],
    correctAnswers: ['C'],
    explanation: 'Homomorphic encryption enables mathematical operations and computations directly upon ciphertexts without decrypting them first, keeping sensitive data confidential even from the hosting cloud provider.',
    examTip: 'Homomorphic encryption enables processing "data in use" without decryption keys on third-party compute instances.'
  },
  {
    id: 'd1-q227',
    domainId: 1,
    subtopic: 'Personnel Security Controls',
    questionNumber: 227,
    type: 'single',
    prompt: 'Which of the following best describes why a critical financial process would require a two-person integrity security control?',
    options: [
      { id: 'A', text: 'To increase the chance that the activity will be completed in half the time' },
      { id: 'B', text: 'To permit two users from another department to observe the activity' },
      { id: 'C', text: 'To reduce the risk that procedures are performed incorrectly or by an unauthorized user' },
      { id: 'D', text: 'To allow one person to perform the activity while being recorded on CCTV' }
    ],
    correctAnswers: ['C'],
    explanation: 'Two-person integrity (dual control or separation of duties) mandates that high-risk critical tasks require the concurrent authorization or execution of two separate individuals to prevent fraud and accidental errors.',
    examTip: 'Two-person integrity prevents collusion and single points of failure in administrative processes.'
  },
  {
    id: 'd1-q284',
    domainId: 1,
    subtopic: 'AAA Framework',
    questionNumber: 284,
    type: 'single',
    prompt: 'Which of the following is the primary purpose of a service that tracks log-ins, session duration, and bandwidth consumption?',
    options: [
      { id: 'A', text: 'Availability' },
      { id: 'B', text: 'Accounting' },
      { id: 'C', text: 'Authentication' },
      { id: 'D', text: 'Authorization' }
    ],
    correctAnswers: ['B'],
    explanation: 'Accounting (the third A in AAA) tracks what actions a user performs, recording login timestamps, resource consumption, and telemetry for auditing and billing.',
    examTip: 'Authentication = Who are you? Authorization = What are you permitted to do? Accounting = What did you actually do?'
  },
  {
    id: 'd1-q295',
    domainId: 1,
    subtopic: 'Transport Security Protocols',
    questionNumber: 295,
    type: 'single',
    prompt: 'Which of the following is the most appropriate modern protocol to protect web data in transit?',
    options: [
      { id: 'A', text: 'SHA-256' },
      { id: 'B', text: 'SSL 3.0' },
      { id: 'C', text: 'TLS 1.3' },
      { id: 'D', text: 'AES-256' }
    ],
    correctAnswers: ['C'],
    explanation: 'Transport Layer Security (TLS) version 1.3 is the modern, secure cryptographic protocol designed to protect data in transit across networks. (SSL 3.0 is obsolete and insecure; SHA-256 is a hash; AES is a cipher).',
    examTip: 'SSL is deprecated; always select TLS 1.2 or TLS 1.3 for secure transport.'
  },
  {
    id: 'd1-q305',
    domainId: 1,
    subtopic: 'Security Baselines',
    questionNumber: 305,
    type: 'single',
    prompt: 'Which of the following most accurately describes the correct lifecycle order in which a security engineer should implement secure baselines?',
    options: [
      { id: 'A', text: 'Deploy, maintain, establish' },
      { id: 'B', text: 'Establish, maintain, deploy' },
      { id: 'C', text: 'Establish, deploy, maintain' },
      { id: 'D', text: 'Deploy, establish, maintain' }
    ],
    correctAnswers: ['C'],
    explanation: 'Security baselines must first be Established (researched, defined, and documented), then Deployed (configured and rolled out across fleet), and finally Maintained (audited, patched, and kept compliant).',
    examTip: 'Remember EDM: Establish -> Deploy -> Maintain.'
  },
  {
    id: 'd1-q317',
    domainId: 1,
    subtopic: 'Data Sovereignty',
    questionNumber: 317,
    type: 'single',
    prompt: 'Which of the following best describes the concept of information being stored outside of its country of origin while still being subject to the laws and requirements of the country of origin?',
    options: [
      { id: 'A', text: 'Data sovereignty' },
      { id: 'B', text: 'Geolocation' },
      { id: 'C', text: 'Intellectual property' },
      { id: 'D', text: 'Geographic restrictions' }
    ],
    correctAnswers: ['A'],
    explanation: 'Data sovereignty dictates that digital data is governed by the laws and legal structures of the country where it originated or where data subjects reside, even when hosted in foreign cloud servers.',
    examTip: 'Data sovereignty often dictates where customer PII can be legally stored or transferred.'
  },
  {
    id: 'd1-q414',
    domainId: 1,
    subtopic: 'Cryptographic Algorithms',
    questionNumber: 414,
    type: 'single',
    prompt: 'Which of the following cryptographic methods is preferred for securing mobile devices and IoT communications with limited computing resources?',
    options: [
      { id: 'A', text: 'Hashing algorithm' },
      { id: 'B', text: 'Public key infrastructure' },
      { id: 'C', text: 'Symmetric encryption' },
      { id: 'D', text: 'Elliptic curve cryptography' }
    ],
    correctAnswers: ['D'],
    explanation: 'Elliptic Curve Cryptography (ECC) delivers equivalent asymmetric cryptographic strength to RSA using significantly smaller key sizes (e.g. 256-bit ECC ≈ 3072-bit RSA), making it ideal for low-power and resource-constrained devices.',
    examTip: 'Whenever you see "low power", "mobile", or "limited computing resources" in an asymmetric cryptography question, think ECC.'
  },
  {
    id: 'd1-q456',
    domainId: 1,
    subtopic: 'Resilience Metrics',
    questionNumber: 456,
    type: 'single',
    prompt: 'An organization would like to calculate the average time needed to troubleshoot and resolve a hardware failure on a server. Which metric describes this?',
    options: [
      { id: 'A', text: 'Recovery point objective' },
      { id: 'B', text: 'Mean time between failures' },
      { id: 'C', text: 'Recovery time objective' },
      { id: 'D', text: 'Mean time to repair' }
    ],
    correctAnswers: ['D'],
    explanation: 'Mean Time to Repair (MTTR) measures the average elapsed time required to troubleshoot, fix, and return a failed component or server back to working order.',
    examTip: 'MTTR = Repair time; MTBF = Time between breakdowns; RTO = Maximum allowable downtime.'
  },
  {
    id: 'd1-q472',
    domainId: 1,
    subtopic: 'Zero Trust Principles',
    questionNumber: 472,
    type: 'single',
    prompt: 'Which of the following best explains a core principle of a Zero Trust security model?',
    options: [
      { id: 'A', text: 'Devices connected to the internal network are automatically trusted after initial authentication.' },
      { id: 'B', text: 'Access to resources is granted only after strict identity verification and continuous monitoring.' },
      { id: 'C', text: 'Security policies require multifactor authentication for remote access to sensitive data.' },
      { id: 'D', text: 'Network access is limited by role, and access controls are reviewed on a regular schedule.' }
    ],
    correctAnswers: ['B'],
    explanation: 'Zero Trust operates under the paradigm of "Never Trust, Always Verify." Every access request is continuously verified based on identity, device health posture, and context, regardless of whether it originates inside or outside the physical network perimeter.',
    examTip: 'Zero Trust removes implicit trust based on network location.'
  },
  {
    id: 'd1-q642',
    domainId: 1,
    subtopic: 'Fail-Safe vs Fail-Open',
    questionNumber: 642,
    type: 'single',
    prompt: 'An organization designs an inbound firewall with a fail-open configuration while implementing an e-commerce website. Which of the following does the organization consider to be the highest priority?',
    options: [
      { id: 'A', text: 'Confidentiality' },
      { id: 'B', text: 'Non-repudiation' },
      { id: 'C', text: 'Availability' },
      { id: 'D', text: 'Integrity' }
    ],
    correctAnswers: ['C'],
    explanation: 'A fail-open configuration permits network traffic to pass through uninspected if the security appliance crashes or fails, ensuring maximum uptime and Availability over strict security enforcement.',
    examTip: 'Fail-closed prioritizes Confidentiality/Security; Fail-open prioritizes Availability/Uptime (and human life safety).'
  },
  {
    id: 'd1-q653',
    domainId: 1,
    subtopic: 'PKI & Key Management',
    questionNumber: 653,
    type: 'single',
    prompt: 'Which of the following can assist an organization in recovering encrypted business data if the primary decryption key is lost or the employee holding it departs?',
    options: [
      { id: 'A', text: 'CSR' },
      { id: 'B', text: 'Salting' },
      { id: 'C', text: 'Root of trust' },
      { id: 'D', text: 'Escrow' }
    ],
    correctAnswers: ['D'],
    explanation: 'Key escrow securely deposits a duplicate copy of cryptographic keys with a trusted designated third party or enterprise key vault for authorized recovery in emergency situations.',
    examTip: 'Key escrow prevents permanent data loss when cryptographic keys become inaccessible.'
  },
  {
    id: 'd1-q777',
    domainId: 1,
    subtopic: 'Fail Modes & Risk Trade-offs',
    questionNumber: 777,
    type: 'single',
    prompt: 'A company processes a large volume of sensitive financial transactions and explicitly prioritizes data confidentiality over transaction availability. Which action best aligns with this requirement if a firewall failure occurs?',
    options: [
      { id: 'A', text: 'Ensure the firewall data plane moves to fail-closed mode.' },
      { id: 'B', text: 'Implement a deny-all rule as the last firewall ACL rule.' },
      { id: 'C', text: 'Prioritize business-critical application traffic through the firewall.' },
      { id: 'D', text: 'Configure rate limiting between the firewall interfaces.' }
    ],
    correctAnswers: ['A'],
    explanation: 'Fail-closed mode terminates all traffic transmission if a failure occurs, guaranteeing that uninspected or unauthorized communications cannot pass through, preserving confidentiality over uptime.',
    examTip: 'High-security environments (banking, defense) use fail-closed.'
  },
  {
    id: 'd1-q786',
    domainId: 1,
    subtopic: 'Quantitative Risk Analysis',
    questionNumber: 786,
    type: 'single',
    prompt: 'A company performs risk analysis on server hardware and estimates it will experience about 10 disk failure incidents over a 5-year period. Which of the following is the correct Annual Rate of Occurrence (ARO)?',
    options: [
      { id: 'A', text: '2' },
      { id: 'B', text: '5' },
      { id: 'C', text: '10' },
      { id: 'D', text: '50' }
    ],
    correctAnswers: ['A'],
    explanation: 'Annual Rate of Occurrence (ARO) is the expected frequency of an event per single year. 10 incidents / 5 years = 2 incidents per year (ARO = 2).',
    examTip: 'Formula: ARO = Total Incidents / Total Years. ALE = SLE * ARO.'
  },
  {
    id: 'd1-q51',
    domainId: 1,
    subtopic: 'Data Classification',
    questionNumber: 51,
    type: 'single',
    prompt: 'A hospital administrator needs to ensure electronic patient medical records are properly labeled and secured. Which data classification should be used?',
    options: [
      { id: 'A', text: 'Private' },
      { id: 'B', text: 'Critical' },
      { id: 'C', text: 'Sensitive' },
      { id: 'D', text: 'Public' }
    ],
    correctAnswers: ['C'],
    explanation: 'Patient health data (PHI/ePHI under HIPAA) is legally protected health information classified as sensitive (or confidential/restricted) requiring strict encryption and access controls.',
    examTip: 'Health records (PHI) and PII are classified as Sensitive or Confidential.'
  },
  {
    id: 'd1-q61',
    domainId: 1,
    subtopic: 'Configuration Management',
    questionNumber: 61,
    type: 'single',
    prompt: 'Which is the best way to consistently determine daily whether production server security settings have been modified from baseline?',
    options: [
      { id: 'A', text: 'Automation' },
      { id: 'B', text: 'Compliance checklist' },
      { id: 'C', text: 'Attestation' },
      { id: 'D', text: 'Manual audit' }
    ],
    correctAnswers: ['A'],
    explanation: 'Checking server configurations daily across an enterprise fleet is best achieved through automated configuration management and continuous compliance enforcement tools.',
    examTip: 'Automation eliminates human error and detects configuration drift continuously.'
  },
  {
    id: 'd1-q139',
    domainId: 1,
    subtopic: 'Access Control Models',
    questionNumber: 139,
    type: 'single',
    prompt: 'A systems administrator wants to prevent users from accessing data outside of their job responsibilities using a simplified group format. What should be applied?',
    options: [
      { id: 'A', text: 'RBAC' },
      { id: 'B', text: 'ACL' },
      { id: 'C', text: 'SAML' },
      { id: 'D', text: 'GPO' }
    ],
    correctAnswers: ['A'],
    explanation: 'Role-Based Access Control (RBAC) assigns permissions to specific job roles or organizational groups (e.g., Finance, HR, Engineering) rather than individual users.',
    examTip: 'RBAC = Job role/group; ABAC = Dynamic attributes (time, IP, device); DAC = Owner decides; MAC = Security labels/clearance.'
  },
  {
    id: 'd1-q217',
    domainId: 1,
    subtopic: 'Privacy & Data Security',
    questionNumber: 217,
    type: 'single',
    prompt: 'In which of the following scenarios is tokenization the best privacy technique to use?',
    options: [
      { id: 'A', text: 'Providing pseudo-anonymization for social media user accounts' },
      { id: 'B', text: 'Serving as a second factor for authentication requests' },
      { id: 'C', text: 'Enabling established customers to safely store credit card information for recurring payments' },
      { id: 'D', text: 'Masking personal information inside databases by segmenting data' }
    ],
    correctAnswers: ['C'],
    explanation: 'Tokenization replaces sensitive payment card primary account numbers (PAN) with a random non-sensitive surrogate value (token) while storing the original card in a secure PCI-compliant token vault.',
    examTip: 'Tokenization is reversible only via the secure lookup vault and cannot be mathematically reversed like encryption.'
  },
  {
    id: 'd1-q299',
    domainId: 1,
    subtopic: 'AAA Concepts',
    questionNumber: 299,
    type: 'single',
    prompt: 'Which of the following security concepts is accomplished when granting specific folder and application access after an individual has logged into a computer network?',
    options: [
      { id: 'A', text: 'Authorization' },
      { id: 'B', text: 'Identification' },
      { id: 'C', text: 'Non-repudiation' },
      { id: 'D', text: 'Authentication' }
    ],
    correctAnswers: ['A'],
    explanation: 'Authorization determines what resources, files, and permissions a user is granted access to AFTER their identity has been verified via authentication.',
    examTip: 'Identification claims identity (username); Authentication proves identity (password/MFA); Authorization grants permissions.'
  },
  {
    id: 'd1-q302',
    domainId: 1,
    subtopic: 'Infrastructure as Code & Version Control',
    questionNumber: 302,
    type: 'single',
    prompt: 'A company wants to track modifications, commit history, and author attribution for the code templates used to build new virtual servers. Which tool will the company most likely deploy?',
    options: [
      { id: 'A', text: 'Change management ticketing system' },
      { id: 'B', text: 'Behavioral analyzer' },
      { id: 'C', text: 'Collaboration platform' },
      { id: 'D', text: 'Version control tool' }
    ],
    correctAnswers: ['D'],
    explanation: 'A version control tool (such as Git) tracks line-by-line code modifications, branching, rollbacks, and historical commits for software and Infrastructure-as-Code (IaC) templates.',
    examTip: 'Version control tracks revisions to code, scripts, and contracts over time.'
  },
  {
    id: 'd1-q304',
    domainId: 1,
    subtopic: 'Partner Agreements',
    questionNumber: 304,
    type: 'single',
    prompt: 'Company A jointly develops a product with Company B, which is located in a different country. Company A discovers that their intellectual property is being shared with unauthorized third parties. Which agreement has been breached?',
    options: [
      { id: 'A', text: 'SLA' },
      { id: 'B', text: 'AUP' },
      { id: 'C', text: 'SOW' },
      { id: 'D', text: 'MOA' }
    ],
    correctAnswers: ['D'],
    explanation: 'A Memorandum of Agreement (MOA) or NDA between joint venture partner organizations outlines binding terms, responsibilities, and protections regarding shared intellectual property.',
    examTip: 'MOA is a formal binding cooperative agreement between two organizations working together on a joint objective.'
  },
  {
    id: 'd1-q320',
    domainId: 1,
    subtopic: 'Governance Documents',
    questionNumber: 320,
    type: 'single',
    prompt: 'Which of the following documents would a security administrator follow step-by-step to comply with a secure baseline during a routine server patch update?',
    options: [
      { id: 'A', text: 'Information security policy' },
      { id: 'B', text: 'Service-level expectations' },
      { id: 'C', text: 'Standard operating procedure' },
      { id: 'D', text: 'Test result report' }
    ],
    correctAnswers: ['C'],
    explanation: 'Standard Operating Procedures (SOPs) provide detailed, step-by-step technical instructions required for administrators to execute routine operational tasks consistently and securely.',
    examTip: 'Policies are high-level "what/why"; Procedures (SOPs) are step-by-step "how-to" instructions.'
  },
  {
    id: 'd1-q351',
    domainId: 1,
    subtopic: 'Vendor Governance',
    questionNumber: 351,
    type: 'single',
    prompt: 'A company has yearly engagements with a service provider where the overarching legal terms and conditions are identical for all engagements. The company wants to simplify future statements of work and revisit the overarching terms every three years. Which document provides the best way to set these general terms?',
    options: [
      { id: 'A', text: 'MSA' },
      { id: 'B', text: 'NDA' },
      { id: 'C', text: 'MOU' },
      { id: 'D', text: 'SLA' }
    ],
    correctAnswers: ['A'],
    explanation: 'A Master Services Agreement (MSA) establishes the core legal terms and umbrella conditions governing ongoing multi-year commercial relationships, making subsequent individual SOWs faster to execute.',
    examTip: 'MSA = Umbrella legal contract for long-term vendor relationships.'
  },
  {
    id: 'd1-q451',
    domainId: 1,
    subtopic: 'Security Control Functional Types',
    questionNumber: 451,
    type: 'multiple',
    prompt: 'A company installed security cameras at the building entrance and added prominent signs alerting visitors that they are being recorded. Which of the following control types did the company implement? (Select two)',
    options: [
      { id: 'A', text: 'Directive' },
      { id: 'B', text: 'Deterrent' },
      { id: 'C', text: 'Preventive' },
      { id: 'D', text: 'Detective' },
      { id: 'E', text: 'Corrective' },
      { id: 'F', text: 'Compensating' }
    ],
    correctAnswers: ['B', 'D'],
    explanation: 'Warning signs act as a deterrent control by discouraging potential intruders, while security cameras record events during and after the fact, serving as a detective control.',
    examTip: 'Signs/Banners = Deterrent; Cameras/Logs/Alarms = Detective.'
  },
  {
    id: 'd1-q535',
    domainId: 1,
    subtopic: 'Cryptographic Vulnerabilities',
    questionNumber: 535,
    type: 'single',
    prompt: 'Which of the following is a category of vulnerability that directly results from using deprecated algorithms like DES, MD5, or SHA-1, or insufficient key lengths?',
    options: [
      { id: 'A', text: 'Hash collision' },
      { id: 'B', text: 'Cryptographic' },
      { id: 'C', text: 'Buffer overflow' },
      { id: 'D', text: 'Input validation' }
    ],
    correctAnswers: ['B'],
    explanation: 'Using weak, deprecated, or outdated cipher suites and short keys introduces cryptographic vulnerabilities that allow attackers to break encryption or forge hashes.',
    examTip: 'Avoid MD5, SHA-1, DES, 3DES, RC4, and SSL; use SHA-256+, AES-256, and TLS 1.3.'
  },
  {
    id: 'd1-q549',
    domainId: 1,
    subtopic: 'Host Security Controls',
    questionNumber: 549,
    type: 'multiple',
    prompt: 'Which of the following security control functional types is a company implementing when deploying a Host-based Intrusion Prevention System (HIPS)? (Select two)',
    options: [
      { id: 'A', text: 'Directive' },
      { id: 'B', text: 'Preventive' },
      { id: 'C', text: 'Physical' },
      { id: 'D', text: 'Corrective' },
      { id: 'E', text: 'Compensating' },
      { id: 'F', text: 'Detective' }
    ],
    correctAnswers: ['B', 'F'],
    explanation: 'A Host-based Intrusion Prevention System (HIPS) monitors host behaviors and alerts administrators to threats (detective) while actively blocking malicious processes from executing (preventive).',
    examTip: 'IDS is Detective only; IPS is both Detective AND Preventive.'
  },
  {
    id: 'd1-q572',
    domainId: 1,
    subtopic: 'Encryption vs Hashing',
    questionNumber: 572,
    type: 'single',
    prompt: 'Which of the following accurately describes the fundamental difference between encryption and hashing?',
    options: [
      { id: 'A', text: 'Encryption protects data in transit, while hashing protects data at rest.' },
      { id: 'B', text: 'Encryption is a two-way reversible function converting cleartext to ciphertext, while hashing is a one-way mathematical function calculating a fixed-size checksum.' },
      { id: 'C', text: 'Encryption ensures data integrity, while hashing ensures data confidentiality.' },
      { id: 'D', text: 'Encryption uses a public-key exchange, while hashing uses a private key.' }
    ],
    correctAnswers: ['B'],
    explanation: 'Encryption is a two-way reversible transformation designed for confidentiality (decrypted with a key), whereas hashing is a one-way irreversible mathematical digest designed to verify data integrity.',
    examTip: 'You can never "decrypt" a hash; hashes are one-way only.'
  },
  {
    id: 'd1-q592',
    domainId: 1,
    subtopic: 'BIA & Backup Metrics',
    questionNumber: 592,
    type: 'single',
    prompt: 'Which of the following metrics directly dictates how frequently database backups must be scheduled as part of a Business Impact Analysis (BIA)?',
    options: [
      { id: 'A', text: 'RTO' },
      { id: 'B', text: 'RPO' },
      { id: 'C', text: 'MTTR' },
      { id: 'D', text: 'MTBF' }
    ],
    correctAnswers: ['B'],
    explanation: 'Recovery Point Objective (RPO) defines the maximum tolerable amount of data loss measured in time (e.g. 1 hour), directly governing how frequently backups or snapshots must run.',
    examTip: 'RPO = Data loss time (drives backup schedule); RTO = Downtime duration (drives failover speed).'
  },
  {
    id: 'd1-q611',
    domainId: 1,
    subtopic: 'Code Signing & PKI',
    questionNumber: 611,
    type: 'single',
    prompt: 'A customer reports that an installer downloaded from a vendor website contained malware. The software vendor wants to provide cryptographic proof that their official release binary has not been tampered with since compilation. Which technique addresses this?',
    options: [
      { id: 'A', text: 'Secure storage' },
      { id: 'B', text: 'Static code analysis' },
      { id: 'C', text: 'Input validation' },
      { id: 'D', text: 'Code signing' }
    ],
    correctAnswers: ['D'],
    explanation: 'Code signing uses the developer\'s private key and a trusted CA digital certificate to sign executables, verifying both publisher authenticity and file integrity prior to installation.',
    examTip: 'Code signing proves both who published the software (authenticity) and that it was not modified (integrity).'
  },
  {
    id: 'd1-q618',
    domainId: 1,
    subtopic: 'Non-Production Data Protection',
    questionNumber: 618,
    type: 'single',
    prompt: 'A database analyst wants to copy realistic customer records from the production database to the User Acceptance Testing (UAT) server for testing a new release, while hiding real PII from developers. Which strategy should be used?',
    options: [
      { id: 'A', text: 'Data masking' },
      { id: 'B', text: 'Data tokenization' },
      { id: 'C', text: 'Data obfuscation' },
      { id: 'D', text: 'Data encryption' }
    ],
    correctAnswers: ['A'],
    explanation: 'Data masking replaces sensitive production fields with realistic-looking fictitious or redacted characters so QA/UAT testing can proceed without exposing real customer PII.',
    examTip: 'When moving production data to test/UAT environments, use Data Masking.'
  },
  {
    id: 'd1-q675',
    domainId: 1,
    subtopic: 'PKI Certificates',
    questionNumber: 675,
    type: 'single',
    prompt: 'Which of the following is an example of a digital certificate generated and signed by an internal server itself rather than an external commercial Certificate Authority?',
    options: [
      { id: 'A', text: 'Digital signature' },
      { id: 'B', text: 'Asymmetric key' },
      { id: 'C', text: 'Self-signed' },
      { id: 'D', text: 'Symmetric key' }
    ],
    correctAnswers: ['C'],
    explanation: 'A self-signed certificate is signed by the same entity whose identity it certifies rather than a trusted third-party CA. Browsers display untrusted warnings unless the certificate is manually trusted.',
    examTip: 'Self-signed certificates are acceptable only for internal lab/testing, never for public production websites.'
  },
  {
    id: 'd1-q746',
    domainId: 1,
    subtopic: 'PKI Trust Chains',
    questionNumber: 746,
    type: 'single',
    prompt: 'An administrator installs a new SSL/TLS certificate on an internal web server. During testing, client browsers display an error indicating the certificate chain is not trusted, even though the private key and CSR were verified. What should the administrator check next?',
    options: [
      { id: 'A', text: 'If the wildcard certificate is configured' },
      { id: 'B', text: 'If the certificate signing request is valid' },
      { id: 'C', text: 'If the root and intermediate CA certificates are installed in the trust store' },
      { id: 'D', text: 'If the public key is configured' }
    ],
    correctAnswers: ['C'],
    explanation: 'For a client to trust a server certificate issued by an internal or subordinate CA, the issuing CA\'s root and intermediate certificates must be installed in the client\'s trusted root certification authorities store.',
    examTip: 'Untrusted valid certificate = Missing Root/Intermediate CA certificate in the trust store.'
  },
  {
    id: 'd1-q753',
    domainId: 1,
    subtopic: 'Legacy & Embedded Systems',
    questionNumber: 753,
    type: 'single',
    prompt: 'A manufacturing plant receives penetration test results showing that critical production floor controllers display known vulnerabilities, have minimal vendor patch support, and must be segmented immediately. Which devices were most likely identified?',
    options: [
      { id: 'A', text: 'Workstations' },
      { id: 'B', text: 'Embedded systems' },
      { id: 'C', text: 'Core router' },
      { id: 'D', text: 'DNS server' }
    ],
    correctAnswers: ['B'],
    explanation: 'Embedded systems, IoT, and ICS/SCADA programmable logic controllers (PLCs) in manufacturing environments frequently run specialized firmware with long lifecycles and limited vendor patching, requiring network segmentation.',
    examTip: 'Protect legacy embedded/ICS devices via network segmentation (VLANs) and compensating firewall controls.'
  },
  {
    id: 'd1-q824',
    domainId: 1,
    subtopic: 'Vulnerability Scoring',
    questionNumber: 824,
    type: 'single',
    prompt: 'Which of the following standards is used to quantitatively measure and score the technical severity and criticality of a software vulnerability from 0.0 to 10.0?',
    options: [
      { id: 'A', text: 'CVE' },
      { id: 'B', text: 'CVSS' },
      { id: 'C', text: 'CIA' },
      { id: 'D', text: 'CERT' }
    ],
    correctAnswers: ['B'],
    explanation: 'The Common Vulnerability Scoring System (CVSS) calculates a standardized numerical severity score (0.0 to 10.0, with 9.0–10.0 as Critical) to help security teams prioritize patching.',
    examTip: 'CVE = Dictionary identifier (e.g. CVE-2024-1234); CVSS = Numerical severity score (0 to 10).'
  },
  {
    id: 'd1-q826',
    domainId: 1,
    subtopic: 'Risk Matrix Assessment',
    questionNumber: 826,
    type: 'multiple',
    prompt: 'Which two primary metrics are combined to calculate the overall risk rating in a qualitative risk matrix heat map? (Select two)',
    options: [
      { id: 'A', text: 'Likelihood' },
      { id: 'B', text: 'Quantitative' },
      { id: 'C', text: 'SLE' },
      { id: 'D', text: 'Impact' },
      { id: 'E', text: 'ALE' },
      { id: 'F', text: 'ARO' }
    ],
    correctAnswers: ['A', 'D'],
    explanation: 'Risk matrices evaluate and plot risks along two axes: Likelihood (probability of occurrence) and Impact (severity of business damage if realized).',
    examTip: 'Qualitative Risk Matrix = Likelihood × Impact.'
  },
  {
    id: 'd1-q873',
    domainId: 1,
    subtopic: 'Filesystem Integrity & Recovery',
    questionNumber: 873,
    type: 'single',
    prompt: 'Which of the following best describes the operational importance of implementing filesystem journaling on critical servers?',
    options: [
      { id: 'A', text: 'Replication to a secondary form of media reduces the risk of failure when the secondary media is remote.' },
      { id: 'B', text: 'The recovery time always exceeds the RTO and RPO requirements during system downtime.' },
      { id: 'C', text: 'A point-in-time backup provides faster data recovery if data on a disk is corrupted.' },
      { id: 'D', text: 'A sequential log of changes enables rapid recovery to a consistent desired state after an unexpected power failure or crash.' }
    ],
    correctAnswers: ['D'],
    explanation: 'Filesystem journaling (e.g., NTFS, ext4, XFS) records pending write transactions in a dedicated journal log before committing them to main disk storage, preventing corruption and enabling rapid recovery after a crash.',
    examTip: 'Journaling preserves filesystem integrity and consistency across sudden crashes.'
  }
];
