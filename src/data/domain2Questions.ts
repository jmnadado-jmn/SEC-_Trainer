import { MultipleChoiceQuestion } from '../types/exam';

export const DOMAIN_2_QUESTIONS: MultipleChoiceQuestion[] = [
  {
    id: 'd2-q1',
    domainId: 2,
    subtopic: 'Threat Actors & Motivations',
    questionNumber: 1,
    type: 'single',
    prompt: 'Which threat actor is most likely to be hired by a foreign government as a proxy to attack critical infrastructure?',
    options: [
      { id: 'A', text: 'Hacktivist' },
      { id: 'B', text: 'Whistleblower' },
      { id: 'C', text: 'Organized crime' },
      { id: 'D', text: 'Unskilled attacker' }
    ],
    correctAnswers: ['C'],
    explanation: 'Organized crime syndicates frequently operate as proxies or contractors for state-backed attacks and ransomware against critical infrastructure, giving adversaries plausible deniability.',
    examTip: 'Nation-states have large budgets and APT capabilities; organized crime focuses on financial extortion and ransomware-as-a-service.'
  },
  {
    id: 'd2-q3',
    domainId: 2,
    subtopic: 'Social Engineering',
    questionNumber: 3,
    type: 'single',
    prompt: 'An employee clicked a link in a fake invoice email, entered their credentials on a lookalike landing page, and received a "page not found" error. What attack occurred?',
    options: [
      { id: 'A', text: 'Brand impersonation' },
      { id: 'B', text: 'Pretexting' },
      { id: 'C', text: 'Typosquatting' },
      { id: 'D', text: 'Phishing' }
    ],
    correctAnswers: ['D'],
    explanation: 'Phishing uses deceptive emails and credential harvesting landing pages disguised as legitimate services to trick users into divulging secrets.',
    examTip: 'Phishing is the general term; spear-phishing targets specific individuals; whaling targets senior executives.'
  },
  {
    id: 'd2-q5',
    domainId: 2,
    subtopic: 'Social Engineering & Email Attacks',
    questionNumber: 5,
    type: 'single',
    prompt: 'Which scenario describes a possible Business Email Compromise (BEC) attack?',
    options: [
      { id: 'A', text: 'An employee receives a gift card request in an email that has an executive\'s name in the display field.' },
      { id: 'B', text: 'Employees opening an attachment receive ransomware demands.' },
      { id: 'C', text: 'Service desk receives an email from HR asking for cloud admin credentials.' },
      { id: 'D', text: 'Employee receives a link to a fake email portal.' }
    ],
    correctAnswers: ['A'],
    explanation: 'Business Email Compromise (BEC) involves spoofing or taking over legitimate executive or vendor email identities to defraud companies through fraudulent wire transfers or gift card requests.',
    examTip: 'BEC frequently relies on display name spoofing and urgent financial pretexts without malware payloads.'
  },
  {
    id: 'd2-q9',
    domainId: 2,
    subtopic: 'Social Engineering Vectors',
    questionNumber: 9,
    type: 'multiple',
    prompt: 'An employee receives a text message asking for immediate credential verification pretending to be payroll. Which techniques are being attempted? (Select two)',
    options: [
      { id: 'A', text: 'Typosquatting' },
      { id: 'B', text: 'Phishing' },
      { id: 'C', text: 'Impersonation' },
      { id: 'D', text: 'Vishing' },
      { id: 'E', text: 'Smishing' },
      { id: 'F', text: 'Misinformation' }
    ],
    correctAnswers: ['B', 'E'],
    explanation: 'SMS phishing is known as smishing, which is an SMS-delivered subset of phishing.',
    examTip: 'Phishing = Email; Smishing = SMS / Text; Vishing = Voice / Phone call.'
  },
  {
    id: 'd2-q15',
    domainId: 2,
    subtopic: 'Mobile & Application Vulnerabilities',
    questionNumber: 15,
    type: 'single',
    prompt: 'Which vulnerability is associated with installing mobile applications outside of a manufacturer\'s approved application repository?',
    options: [
      { id: 'A', text: 'Jailbreaking' },
      { id: 'B', text: 'Memory injection' },
      { id: 'C', text: 'Resource reuse' },
      { id: 'D', text: 'Side loading' }
    ],
    correctAnswers: ['D'],
    explanation: 'Sideloading is the practice of downloading and installing app package files (.apk / .ipa) directly from third-party websites or untrusted stores, bypassing vendor security reviews.',
    examTip: 'Jailbreaking removes OS restrictions; sideloading is installing unapproved app binaries.'
  },
  {
    id: 'd2-q32',
    domainId: 2,
    subtopic: 'Application Exploits',
    questionNumber: 32,
    type: 'single',
    prompt: 'Which vulnerability enables an attacker to use a web application input field to execute commands that view, extract, or manipulate database records?',
    options: [
      { id: 'A', text: 'Cross-site scripting' },
      { id: 'B', text: 'Side loading' },
      { id: 'C', text: 'Buffer overflow' },
      { id: 'D', text: 'SQL injection' }
    ],
    correctAnswers: ['D'],
    explanation: 'SQL Injection (SQLi) occurs when unsanitized user inputs are passed directly into database queries, allowing attackers to bypass authentication and manipulate database contents.',
    examTip: 'Primary defense against SQLi: Parameterized queries / prepared statements and input validation.'
  },
  {
    id: 'd2-q53',
    domainId: 2,
    subtopic: 'Endpoint Defenses',
    questionNumber: 53,
    type: 'single',
    prompt: 'Which would be the most effective administrative safeguard to prevent unknown or unapproved programs from executing on company workstations?',
    options: [
      { id: 'A', text: 'Access control list' },
      { id: 'B', text: 'Application allow list' },
      { id: 'C', text: 'Host-based firewall' },
      { id: 'D', text: 'DLP solution' }
    ],
    correctAnswers: ['B'],
    explanation: 'An application allow list (formerly whitelisting, such as Windows AppLocker or WDAC) blocks all executables by default except those explicitly authorized by hash or digital certificate.',
    examTip: 'Allow listing is a default-deny posture for executables; block listing is default-allow.'
  },
  {
    id: 'd2-q69',
    domainId: 2,
    subtopic: 'Password Attacks',
    questionNumber: 69,
    type: 'single',
    prompt: 'A security analyst reviews domain activity logs and notices hundreds of rapid repeated login failures within three minutes for a single user account. What is the explanation?',
    options: [
      { id: 'A', text: 'Account locked out' },
      { id: 'B', text: 'Keylogger installed' },
      { id: 'C', text: 'Brute-force attempt' },
      { id: 'D', text: 'Ransomware deployed' }
    ],
    correctAnswers: ['C'],
    explanation: 'Rapid, automated attempts trying many different password combinations against a single target account indicate an active brute-force or dictionary attack.',
    examTip: 'Brute force = many passwords against one account; Password spraying = one password against many accounts.'
  },
  {
    id: 'd2-q76',
    domainId: 2,
    subtopic: 'Memory Vulnerabilities',
    questionNumber: 76,
    type: 'single',
    prompt: 'Which vulnerability is exploited when an attacker supplies more data than a memory buffer can hold, overwriting CPU instruction registers with a malicious memory address?',
    options: [
      { id: 'A', text: 'VM escape' },
      { id: 'B', text: 'SQL injection' },
      { id: 'C', text: 'Buffer overflow' },
      { id: 'D', text: 'Race condition' }
    ],
    correctAnswers: ['C'],
    explanation: 'A buffer overflow occurs when anomalous volume writes beyond allocated memory boundaries, spilling into adjacent registers (like the instruction pointer EIP/RIP) to hijack process execution flow.',
    examTip: 'Buffer overflows are mitigated by boundary checks, ASLR, and DEP/NX memory protection.'
  },
  {
    id: 'd2-q87',
    domainId: 2,
    subtopic: 'Malware Types',
    questionNumber: 87,
    type: 'single',
    prompt: 'Workstations throughout an office suddenly display a ransom message associated with files renamed to include a .ryk extension. What infection is present?',
    options: [
      { id: 'A', text: 'Virus' },
      { id: 'B', text: 'Trojan' },
      { id: 'C', text: 'Spyware' },
      { id: 'D', text: 'Ransomware' }
    ],
    correctAnswers: ['D'],
    explanation: 'Ryuk ransomware targets enterprise networks, encrypting network shares and appending extensions like .ryk before demanding cryptocurrency payments.',
    examTip: 'Ransomware locks or encrypts data to demand extortion payments.'
  },
  {
    id: 'd2-q92',
    domainId: 2,
    subtopic: 'Enterprise Threat Types',
    questionNumber: 92,
    type: 'single',
    prompt: 'The marketing department sets up and uses their own cloud project management software without IT knowledge or security vetting. What is this categorized as?',
    options: [
      { id: 'A', text: 'Shadow IT' },
      { id: 'B', text: 'Insider threat' },
      { id: 'C', text: 'Data exfiltration' },
      { id: 'D', text: 'Service disruption' }
    ],
    correctAnswers: ['A'],
    explanation: 'Shadow IT refers to unauthorized software, hardware, or cloud services deployed within an organization without IT and security team oversight.',
    examTip: 'Shadow IT bypasses security baselines and compliance controls.'
  },
  {
    id: 'd2-q107',
    domainId: 2,
    subtopic: 'Social Engineering & Web Attacks',
    questionNumber: 107,
    type: 'single',
    prompt: 'Malware spread across an engineering firm\'s internal network after several senior architects visited an unpatched, trusted aerospace trade blog. What attack is this?',
    options: [
      { id: 'A', text: 'Impersonation' },
      { id: 'B', text: 'Disinformation' },
      { id: 'C', text: 'Watering-hole' },
      { id: 'D', text: 'Smishing' }
    ],
    correctAnswers: ['C'],
    explanation: 'A watering hole attack compromises a specific legitimate website or blog known to be frequently visited by a desired corporate target audience to infect their endpoint browsers.',
    examTip: 'Think "predator waiting at the water hole where prey gathers".'
  },
  {
    id: 'd2-q154',
    domainId: 2,
    subtopic: 'Network Indicators & Exfiltration',
    questionNumber: 154,
    type: 'single',
    prompt: 'A security analyst receives alerts regarding an internal database server generating a high volume of unusual, rapid DNS queries to external servers during non-business hours. Which of the following is most likely occurring?',
    options: [
      { id: 'A', text: 'A worm is propagating across the network.' },
      { id: 'B', text: 'Data is being exfiltrated.' },
      { id: 'C', text: 'A logic bomb is deleting data.' },
      { id: 'D', text: 'Ransomware is encrypting files.' }
    ],
    correctAnswers: ['B'],
    explanation: 'DNS tunneling exploits UDP port 53 queries to covertly exfiltrate encoded sensitive data outside the perimeter when HTTP/HTTPS egress ports are blocked.',
    examTip: 'High volumes of abnormal outbound DNS queries are a classic indicator of DNS tunneling / exfiltration.'
  },
  {
    id: 'd2-q175',
    domainId: 2,
    subtopic: 'Privilege Escalation & Lateral Movement',
    questionNumber: 175,
    type: 'single',
    prompt: 'An attacker scraped PC memory using Mimikatz to capture NTLM hashes. Without cracking the plaintext passwords, the attacker used the hashes to authenticate to other servers. What attack is this?',
    options: [
      { id: 'A', text: 'Privilege escalation' },
      { id: 'B', text: 'Buffer overflow' },
      { id: 'C', text: 'SQL injection' },
      { id: 'D', text: 'Pass-the-hash' }
    ],
    correctAnswers: ['D'],
    explanation: 'Pass-the-hash (PtH) captures password hashes directly from system memory (e.g. LSASS) and reuses them directly against network authentication protocols without reversing them to plaintext.',
    examTip: 'Mitigate Pass-the-Hash with Credential Guard, LAPS, and tier-based administrative access.'
  },
  {
    id: 'd2-q180',
    domainId: 2,
    subtopic: 'Malware Types',
    questionNumber: 180,
    type: 'single',
    prompt: 'Computers were infected with malware that silently mines cryptocurrency in the background. The attackers specifically configured it to keep CPU utilization moderate to avoid triggering alerts. Which attack is this?',
    options: [
      { id: 'A', text: 'Malicious flash drive' },
      { id: 'B', text: 'Remote access Trojan' },
      { id: 'C', text: 'Brute-forced password' },
      { id: 'D', text: 'Cryptojacking' }
    ],
    correctAnswers: ['D'],
    explanation: 'Cryptojacking hijacks computing and electricity resources to mine cryptocurrency secretly, often throttled to evade detection by users and performance monitors.',
    examTip: 'Cryptojacking = unauthorized cryptocurrency mining on host or browser.'
  },
  {
    id: 'd2-q212',
    domainId: 2,
    subtopic: 'Web Application Attacks',
    questionNumber: 212,
    type: 'single',
    prompt: 'A web application user clicked an email link while logged into their bank portal. Immediately afterward, web logs show their password was modified without their consent. What attack occurred?',
    options: [
      { id: 'A', text: 'Cross-site request forgery' },
      { id: 'B', text: 'Directory traversal' },
      { id: 'C', text: 'ARP poisoning' },
      { id: 'D', text: 'SQL injection' }
    ],
    correctAnswers: ['A'],
    explanation: 'Cross-Site Request Forgery (CSRF or XSRF) tricks a user\'s authenticated browser into executing unwanted commands (like password changes or fund transfers) against a trusted web application.',
    examTip: 'CSRF exploits the trust a site has in a user\'s browser session; XSS exploits the trust a user has in a specific website.'
  },
  {
    id: 'd2-q280',
    domainId: 2,
    subtopic: 'Web Attacks & Log Forensics',
    questionNumber: 280,
    type: 'single',
    prompt: 'An analyst discovers the following log entry: GET /profile?id=123%20INSERT%20INTO%20users%20VALUES(\'temp\',\'pass123\')# HTTP/1.1. Which action should the analyst take first?',
    options: [
      { id: 'A', text: 'Implement a WAF' },
      { id: 'B', text: 'Disable the query.php script' },
      { id: 'C', text: 'Block brute-force attempts on temporary users' },
      { id: 'D', text: 'Check the users table for new unauthorized accounts' }
    ],
    correctAnswers: ['D'],
    explanation: 'The log exhibits a successful SQL injection payload attempting to insert a backdoor user ("temp"). The analyst must immediately inspect the database users table to confirm whether the account was created.',
    examTip: 'When incident logs show an active INSERT/UPDATE statement, immediately investigate database state.'
  },
  {
    id: 'd2-q309',
    domainId: 2,
    subtopic: 'Virtualization Attacks',
    questionNumber: 309,
    type: 'single',
    prompt: 'Which of the following is the most severe consequence of a successful VM escape vulnerability?',
    options: [
      { id: 'A', text: 'Malicious instructions can be inserted into memory and give the attacker elevated permissions.' },
      { id: 'B', text: 'An attacker can break out of guest isolation to access the hypervisor and compromise other VMs.' },
      { id: 'C', text: 'Unencrypted data can be read by a user in a separate environment.' },
      { id: 'D', text: 'Users can install software that is not on the manufacturer\'s approved list.' }
    ],
    correctAnswers: ['B'],
    explanation: 'A Virtual Machine (VM) escape allows an adversary to break through guest OS sandboxing to execute arbitrary commands on the underlying hypervisor host, endangering all tenant VMs on the hardware.',
    examTip: 'Hypervisor patches and microcode updates are paramount for preventing VM escape.'
  },
  {
    id: 'd2-q341',
    domainId: 2,
    subtopic: 'Social Engineering & Domains',
    questionNumber: 341,
    type: 'single',
    prompt: 'A user attempts to navigate to a corporate training website by manually typing the URL, but lands on an ad-laden clone site with subtle misspellings in the address bar. What attack vector is this?',
    options: [
      { id: 'A', text: 'Cross-site scripting' },
      { id: 'B', text: 'Pretexting' },
      { id: 'C', text: 'Typosquatting' },
      { id: 'D', text: 'Vishing' }
    ],
    correctAnswers: ['C'],
    explanation: 'Typosquatting (URL hijacking) preys on common human typing errors and misspellings to steer users toward lookalike scam or malware landing sites.',
    examTip: 'Organizations buy common typo variations of their domain to prevent typosquatting.'
  },
  {
    id: 'd2-q353',
    domainId: 2,
    subtopic: 'Software Vulnerabilities',
    questionNumber: 353,
    type: 'single',
    prompt: 'During an automated database update, a temporary validation flag was modified by an attacker in the millisecond between checking user access and executing the record update. What vulnerability type is this?',
    options: [
      { id: 'A', text: 'Race condition' },
      { id: 'B', text: 'Memory injection' },
      { id: 'C', text: 'Malicious update' },
      { id: 'D', text: 'Side loading' }
    ],
    correctAnswers: ['A'],
    explanation: 'A race condition (specifically Time-of-Check to Time-of-Use / TOCTOU) occurs when asynchronous processes manipulate shared memory or variables out of sequence between inspection and action.',
    examTip: 'Race conditions are prevented with thread locks, atomic transactions, and mutexes.'
  },
  {
    id: 'd2-q428',
    domainId: 2,
    subtopic: 'Supply Chain Attacks',
    questionNumber: 428,
    type: 'single',
    prompt: 'A malicious backdoor was compiled into a legitimate third-party enterprise monitoring update and distributed to hundreds of Fortune 500 companies. What best describes this attack?',
    options: [
      { id: 'A', text: 'DDoS attack' },
      { id: 'B', text: 'Rogue employee' },
      { id: 'C', text: 'Insider threat' },
      { id: 'D', text: 'Supply chain' }
    ],
    correctAnswers: ['D'],
    explanation: 'A supply chain compromise infiltrates upstream software development pipelines, vendor repositories, or hardware suppliers to push poisoned updates to downstream customers (e.g. SolarWinds).',
    examTip: 'Mitigate supply chain risk via code signing, SBOM (Software Bill of Materials), and vendor audits.'
  },
  {
    id: 'd2-q457',
    domainId: 2,
    subtopic: 'Web Exploits',
    questionNumber: 457,
    type: 'single',
    prompt: 'While reviewing web server access logs, a security administrator identifies the following query parameter: search=<script>function(send_info)</script>. What attack was attempted?',
    options: [
      { id: 'A', text: 'XSS' },
      { id: 'B', text: 'SQLI' },
      { id: 'C', text: 'DDoS' },
      { id: 'D', text: 'CSRF' }
    ],
    correctAnswers: ['A'],
    explanation: 'The inclusion of HTML/JavaScript tags like <script> or javascript: payloads in HTTP parameters indicates a Cross-Site Scripting (XSS) code injection attempt.',
    examTip: 'XSS injects client-side scripts to steal session cookies or hijack DOM sessions.'
  },
  {
    id: 'd2-q524',
    domainId: 2,
    subtopic: 'Defensive Deception',
    questionNumber: 524,
    type: 'single',
    prompt: 'A security analyst created a fake administrative user credential, placed it into a dummy spreadsheet titled "salaries_backup.xlsx", and configured an alert if the document is accessed. What deception technique is this?',
    options: [
      { id: 'A', text: 'Honeypot' },
      { id: 'B', text: 'Honey account' },
      { id: 'C', text: 'Honeytoken' },
      { id: 'D', text: 'Honeynet' }
    ],
    correctAnswers: ['C'],
    explanation: 'A honeytoken (or honeyfile) is a piece of decoy data (such as a fake database record, API key, or file) that should never be accessed during normal operations, acting as a tripwire against intruders.',
    examTip: 'Honeypot = Decoy system/server; Honeynet = Decoy network; Honeytoken = Decoy file/credential.'
  },
  {
    id: 'd2-q525',
    domainId: 2,
    subtopic: 'Malware & Propagation',
    questionNumber: 525,
    type: 'single',
    prompt: 'A security operations team responds to high latency and complete network unavailability across multiple subnets. Flow logs reveal explosive traffic surges on TCP port 445. What is the root cause?',
    options: [
      { id: 'A', text: 'Buffer overflow' },
      { id: 'B', text: 'NTP amplification attack' },
      { id: 'C', text: 'Worm' },
      { id: 'D', text: 'Kerberoasting attack' }
    ],
    correctAnswers: ['C'],
    explanation: 'Network worms propagate autonomously across networks without human intervention by scanning open ports like TCP 445 (Server Message Block / SMB) to infect and replicate (like WannaCry and EternalBlue).',
    examTip: 'Viruses require human execution (clicking an attachment); Worms replicate automatically across network services.'
  },
  {
    id: 'd2-q671',
    domainId: 2,
    subtopic: 'Web Attacks',
    questionNumber: 671,
    type: 'single',
    prompt: 'An analyst examines a web server log containing: GET /viewimage?file=../../../../etc/passwd HTTP/1.1. Which attack is being attempted?',
    options: [
      { id: 'A', text: 'File injection' },
      { id: 'B', text: 'Privilege escalation' },
      { id: 'C', text: 'Directory traversal' },
      { id: 'D', text: 'Cookie forgery' }
    ],
    correctAnswers: ['C'],
    explanation: 'Directory traversal (dot-dot-slash ../ attack) attempts to escape the designated web document root folder and access restricted files in the underlying operating system file hierarchy.',
    examTip: 'Seeing ../ or ..\\ in URL query paths is a dead giveaway for directory traversal (path traversal).'
  },
  {
    id: 'd2-q865',
    domainId: 2,
    subtopic: 'Emerging Technologies & AI Security',
    questionNumber: 865,
    type: 'single',
    prompt: 'Which of the following AI application vulnerabilities is best prevented by implementing strict input validation and boundary checks on user inputs to an LLM chatbot?',
    options: [
      { id: 'A', text: 'Model manipulation' },
      { id: 'B', text: 'Bias' },
      { id: 'C', text: 'Prompt injection' },
      { id: 'D', text: 'Hallucinations' }
    ],
    correctAnswers: ['C'],
    explanation: 'Prompt injection occurs when an attacker crafts adversarial user inputs designed to override the system instructions or safety filters of a Large Language Model (LLM). Strict input validation mitigates this risk.',
    examTip: 'CompTIA SY0-701 tests AI/ML concepts including prompt injection and data poisoning.'
  },
  {
    id: 'd2-q874',
    domainId: 2,
    subtopic: 'Identity Indicators & SIEM Alerts',
    questionNumber: 874,
    type: 'single',
    prompt: 'An analyst reviews SIEM logs showing successful logins for the same employee account occurring 10 minutes apart from IP addresses located in Atlanta, USA and Beijing, China. Which anomaly is displayed?',
    options: [
      { id: 'A', text: 'Impossible travel' },
      { id: 'B', text: 'SMTP replay' },
      { id: 'C', text: 'Directory traversal' },
      { id: 'D', text: 'Cross-site request forgery' }
    ],
    correctAnswers: ['A'],
    explanation: 'Impossible travel describes a detection rule where logins for a single identity occur from geographically distant locations within a window of time where physical travel between them is impossible.',
    examTip: 'Impossible travel triggers automatic step-up MFA or account suspension.'
  },
  {
    id: 'd2-q10',
    domainId: 2,
    subtopic: 'Social Engineering Remediation',
    questionNumber: 10,
    type: 'multiple',
    prompt: 'Multiple employees received a text message from a fake CEO phone number asking them to purchase employee recognition gift cards. What are the best immediate organizational responses? (Select two)',
    options: [
      { id: 'A', text: 'Cancel current employee recognition gift cards.' },
      { id: 'B', text: 'Add a smishing exercise to annual security awareness training.' },
      { id: 'C', text: 'Issue a general email warning to the company alerting staff to the scam.' },
      { id: 'D', text: 'Have the CEO change personal phone numbers.' },
      { id: 'E', text: 'Conduct a forensic investigation on the CEO\'s smartphone.' },
      { id: 'F', text: 'Implement mobile device management.' }
    ],
    correctAnswers: ['B', 'C'],
    explanation: 'Issuing an immediate company-wide alert stops employees from falling for the active scam, and incorporating smishing simulations into recurring training builds long-term resilience.',
    examTip: 'Smishing spoofs external caller/SMS numbers; the CEO\'s actual phone was not compromised.'
  },
  {
    id: 'd2-q31',
    domainId: 2,
    subtopic: 'Threat Actors',
    questionNumber: 31,
    type: 'single',
    prompt: 'Which threat actor category leverages massive financial budgets and military/intelligence resources to conduct long-term espionage against critical infrastructure in foreign countries?',
    options: [
      { id: 'A', text: 'Insider' },
      { id: 'B', text: 'Unskilled attacker' },
      { id: 'C', text: 'Nation-state' },
      { id: 'D', text: 'Hacktivist' }
    ],
    correctAnswers: ['C'],
    explanation: 'Nation-state actors operate as Advanced Persistent Threats (APTs) backed by government funding, capable of developing custom zero-day exploits and dwelling undetected inside foreign critical infrastructure.',
    examTip: 'Keywords "foreign country", "critical infrastructure", "massive resources", and "APT" point to Nation-state.'
  },
  {
    id: 'd2-q47',
    domainId: 2,
    subtopic: 'Hardware & Firmware Vulnerabilities',
    questionNumber: 47,
    type: 'single',
    prompt: 'Which of the following represents a hardware-specific vulnerability rather than an application software flaw?',
    options: [
      { id: 'A', text: 'Firmware version' },
      { id: 'B', text: 'Buffer overflow' },
      { id: 'C', text: 'SQL injection' },
      { id: 'D', text: 'Cross-site scripting' }
    ],
    correctAnswers: ['A'],
    explanation: 'Firmware is low-level code embedded directly on hardware motherboards, network cards, and IoT controllers (e.g., UEFI/BIOS). Outdated firmware versions represent hardware-specific security risks.',
    examTip: 'Firmware exploits execute beneath the OS kernel and often evade standard OS antivirus.'
  },
  {
    id: 'd2-q90',
    domainId: 2,
    subtopic: 'Social Engineering',
    questionNumber: 90,
    type: 'single',
    prompt: 'An attacker spear-phishes the Chief Financial Officer (CFO) with a tailored legal subpoena attachment designed to harvest executive credentials. What technique is used?',
    options: [
      { id: 'A', text: 'Smishing' },
      { id: 'B', text: 'Disinformation' },
      { id: 'C', text: 'Impersonating' },
      { id: 'D', text: 'Whaling' }
    ],
    correctAnswers: ['D'],
    explanation: 'Whaling is a highly targeted spear-phishing attack aimed specifically at C-suite executives (the "big fish") who hold high-level financial and administrative authority.',
    examTip: 'Phishing = Anyone; Spear-phishing = Specific group/person; Whaling = C-level Executive.'
  },
  {
    id: 'd2-q167',
    domainId: 2,
    subtopic: 'Memory & Process Exploits',
    questionNumber: 167,
    type: 'single',
    prompt: 'A security analyst investigates an application server where a legitimate local batch-processing binary is suddenly generating outbound traffic over random high ports. Which vulnerability was most likely exploited?',
    options: [
      { id: 'A', text: 'Memory injection' },
      { id: 'B', text: 'Race condition' },
      { id: 'C', text: 'Side loading' },
      { id: 'D', text: 'SQL injection' }
    ],
    correctAnswers: ['A'],
    explanation: 'Memory injection (such as DLL injection or process hollowing) inserts malicious shellcode directly into the allocated memory space of a trusted, already-running process to evade detection.',
    examTip: 'Memory injection hijacks a legitimate running process in RAM.'
  },
  {
    id: 'd2-q171',
    domainId: 2,
    subtopic: 'Password Attacks',
    questionNumber: 171,
    type: 'single',
    prompt: 'A SOC analyst reviews authentication logs and discovers that 500 distinct employee accounts experienced a single failed login attempt each from the same external IP address within a 10-minute window. Which attack took place?',
    options: [
      { id: 'A', text: 'Password spraying' },
      { id: 'B', text: 'Brute-force' },
      { id: 'C', text: 'Dictionary' },
      { id: 'D', text: 'Rainbow table' }
    ],
    correctAnswers: ['A'],
    explanation: 'Password spraying tests one or two common passwords (e.g., "Summer2026!") across hundreds of different usernames simultaneously to avoid triggering individual account lockout thresholds.',
    examTip: 'Password spraying = 1 password tried against many accounts (avoids account lockouts).'
  },
  {
    id: 'd2-q186',
    domainId: 2,
    subtopic: 'Wireless & Network Threats',
    questionNumber: 186,
    type: 'single',
    prompt: 'A company uses corporate Wi-Fi with strict web content filtering. An employee noticed a coworker bypassing the filter. While investigating, the security admin discovered an unauthorized consumer router plugged into an office Ethernet jack broadcasting Wi-Fi. What is this risk?',
    options: [
      { id: 'A', text: 'The host-based security agent is not running on all computers.' },
      { id: 'B', text: 'A rogue access point is allowing users to bypass controls.' },
      { id: 'C', text: 'Employees who have certain credentials are using a hidden SSID.' },
      { id: 'D', text: 'A valid access point is being jammed to limit availability.' }
    ],
    correctAnswers: ['B'],
    explanation: 'A rogue access point is an unauthorized wireless AP connected to the physical corporate network without IT approval, creating an unmonitored backdoor that bypasses network security controls.',
    examTip: 'Rogue AP = Plugged into internal LAN without authorization; Evil Twin = External attacker AP spoofing corporate SSID.'
  },
  {
    id: 'd2-q206',
    domainId: 2,
    subtopic: 'Physical & Reconnaissance Attacks',
    questionNumber: 206,
    type: 'single',
    prompt: 'During a cyber-awareness briefing on securing office printing centers, the security team warns against throwing unshredded printouts into recycling bins. Which attack method is the team addressing?',
    options: [
      { id: 'A', text: 'Whaling' },
      { id: 'B', text: 'Credential harvesting' },
      { id: 'C', text: 'Prepending' },
      { id: 'D', text: 'Dumpster diving' }
    ],
    correctAnswers: ['D'],
    explanation: 'Dumpster diving involves physically sifting through company trash or recycling containers near printing centers to recover sensitive documents, org charts, or discarded credentials.',
    examTip: 'Mitigate dumpster diving with cross-cut shredders and locked disposal bins.'
  },
  {
    id: 'd2-q211',
    domainId: 2,
    subtopic: 'Authentication Vulnerabilities',
    questionNumber: 211,
    type: 'single',
    prompt: 'Which of the following best explains why SMS-based One-Time Passwords (OTP) are riskier to implement than an authenticator app using TOTP?',
    options: [
      { id: 'A', text: 'The SMS OTP method requires an end user to have an active mobile telephone service and SIM card.' },
      { id: 'B', text: 'Generally, SMS OTP codes are valid for up to 15 minutes while the TOTP time frame is 30 to 60 seconds.' },
      { id: 'C', text: 'SMS OTP messages are transmitted unencrypted across carrier networks and are vulnerable to SIM swapping and interception.' },
      { id: 'D', text: 'The algorithm used to generate an SMS OTP code is weaker than the one used to generate a TOTP code.' }
    ],
    correctAnswers: ['C'],
    explanation: 'SMS messages travel over cellular SS7 networks in plaintext and can be hijacked via SIM swapping (port-out fraud) or SS7 interception, whereas TOTP codes are generated locally on the device using a shared cryptographic secret.',
    examTip: 'Prefer FIDO2 hardware keys or TOTP/Push authenticator apps over SMS OTP.'
  },
  {
    id: 'd2-q238',
    domainId: 2,
    subtopic: 'Secure Coding & Injection Mitigation',
    questionNumber: 238,
    type: 'single',
    prompt: 'While investigating a breach, an analyst finds that an attacker gained database access via SQL injection through a customer search form. Which recommendation should be given to developers to prevent recurrence?',
    options: [
      { id: 'A', text: 'Secure cookies' },
      { id: 'B', text: 'Input sanitization and parameterized queries' },
      { id: 'C', text: 'Code signing' },
      { id: 'D', text: 'Blocklist' }
    ],
    correctAnswers: ['B'],
    explanation: 'Input sanitization (validation) and parameterized queries (prepared statements) ensure that user-supplied characters are treated strictly as data literals and can never be executed as SQL commands.',
    examTip: 'Input validation + Parameterized queries is the #1 root-cause fix for SQLi.'
  },
  {
    id: 'd2-q269',
    domainId: 2,
    subtopic: 'Alert Triage & Fatigue',
    questionNumber: 269,
    type: 'single',
    prompt: 'Which of the following SIEM alert classifications is most likely to cause "alert fatigue" and lead analysts to ignore real security incidents over time?',
    options: [
      { id: 'A', text: 'True positive' },
      { id: 'B', text: 'True negative' },
      { id: 'C', text: 'False positive' },
      { id: 'D', text: 'False negative' }
    ],
    correctAnswers: ['C'],
    explanation: 'False positives fire noisy alerts for benign, non-threatening events. High volumes of false positives overwhelm SOC analysts (alert fatigue), causing them to overlook genuine attacks.',
    examTip: 'High false positives = Alert fatigue; High false negatives = Undetected breaches.'
  },
  {
    id: 'd2-q274',
    domainId: 2,
    subtopic: 'Insider Threat Vectors',
    questionNumber: 274,
    type: 'single',
    prompt: 'Which threat vector is most commonly utilized by a malicious insider with physical office access attempting to exfiltrate gigabytes of proprietary engineering files?',
    options: [
      { id: 'A', text: 'Unidentified removable USB devices' },
      { id: 'B', text: 'Default network device credentials' },
      { id: 'C', text: 'Spear phishing emails' },
      { id: 'D', text: 'Impersonation of business units through typosquatting' }
    ],
    correctAnswers: ['A'],
    explanation: 'Malicious insiders with physical workstation access frequently plug in unauthorized removable USB flash drives to copy sensitive files unless blocked by endpoint DLP or GPO port controls.',
    examTip: 'Endpoint DLP and disabling USB mass storage via GPO mitigate removable media exfiltration.'
  },
  {
    id: 'd2-q279',
    domainId: 2,
    subtopic: 'Zero-Day Vulnerabilities',
    questionNumber: 279,
    type: 'single',
    prompt: 'A company relies heavily on open-source libraries to build its customer web portal. Which vulnerability type is the most difficult to remediate immediately upon discovery?',
    options: [
      { id: 'A', text: 'Buffer overflow' },
      { id: 'B', text: 'SQL injection' },
      { id: 'C', text: 'Cross-site scripting' },
      { id: 'D', text: 'Zero-day' }
    ],
    correctAnswers: ['D'],
    explanation: 'A zero-day vulnerability is an newly discovered or undisclosed flaw for which no official vendor or maintainer patch yet exists, requiring compensating controls until a fix is written.',
    examTip: 'Zero-day = 0 days of patch availability; mitigate temporarily with WAF/IPS rules and segmentation.'
  },
  {
    id: 'd2-q316',
    domainId: 2,
    subtopic: 'Threat Actor Profiles',
    questionNumber: 316,
    type: 'single',
    prompt: 'Which threat actor category is most likely to use pre-built automated scripts downloaded from public forums to deface a high-profile entertainment website for bragging rights?',
    options: [
      { id: 'A', text: 'Unskilled attacker' },
      { id: 'B', text: 'Organized crime' },
      { id: 'C', text: 'Nation-state' },
      { id: 'D', text: 'Insider threat' }
    ],
    correctAnswers: ['A'],
    explanation: 'Unskilled attackers (script kiddies) lack deep programming expertise and rely on off-the-shelf exploit kits to conduct opportunistic web defacements for thrill and notoriety.',
    examTip: 'Unskilled attackers seek notoriety/thrill; Hacktivists seek political/ideological disruption.'
  },
  {
    id: 'd2-q386',
    domainId: 2,
    subtopic: 'Voice Social Engineering',
    questionNumber: 386,
    type: 'single',
    prompt: 'A customer receives a telephone call from someone claiming to work for their bank\'s fraud department asking for their PIN. The caller ID displays the bank\'s actual 1-800 support number. Which attack is this?',
    options: [
      { id: 'A', text: 'Phishing' },
      { id: 'B', text: 'Whaling' },
      { id: 'C', text: 'Smishing' },
      { id: 'D', text: 'Vishing' }
    ],
    correctAnswers: ['D'],
    explanation: 'Vishing (voice phishing) uses voice calls and VoIP caller ID spoofing to impersonate trusted institutions and trick victims into disclosing sensitive credentials over the phone.',
    examTip: 'Phone call scam = Vishing; SMS scam = Smishing; Email scam = Phishing.'
  },
  {
    id: 'd2-q407',
    domainId: 2,
    subtopic: 'Threat Actor Motivations',
    questionNumber: 407,
    type: 'single',
    prompt: 'Which threat actor attacking an enterprise is most likely motivated by philosophical, environmental, or political beliefs rather than financial gain?',
    options: [
      { id: 'A', text: 'Nation-state' },
      { id: 'B', text: 'Organized crime' },
      { id: 'C', text: 'Hacktivist' },
      { id: 'D', text: 'Insider threat' }
    ],
    correctAnswers: ['C'],
    explanation: 'Hacktivists conduct cyberattacks (such as DDoS, web defacements, or doxxing leaks) to promote political, social, or ideological causes.',
    examTip: 'Hacktivist = Ideological/Political/Philosophical beliefs.'
  },
  {
    id: 'd2-q416',
    domainId: 2,
    subtopic: 'Vulnerability Assessment Risks',
    questionNumber: 416,
    type: 'single',
    prompt: 'Which of the following is a primary operational risk of running an aggressive, unthrottled vulnerability scan against legacy production servers during business hours?',
    options: [
      { id: 'A', text: 'A disruption of business operations' },
      { id: 'B', text: 'Unauthorized access to the system' },
      { id: 'C', text: 'Reports of false positives' },
      { id: 'D', text: 'Finding security gaps in the system' }
    ],
    correctAnswers: ['A'],
    explanation: 'Aggressive vulnerability scanning sends thousands of malformed probes and service checks that can crash fragile legacy services or exhaust bandwidth, causing an unintended Denial of Service.',
    examTip: 'Always schedule aggressive scans during maintenance windows and throttle checks on fragile/ICS systems.'
  },
  {
    id: 'd2-q597',
    domainId: 2,
    subtopic: 'Wireless Attacks',
    questionNumber: 597,
    type: 'single',
    prompt: 'Which of the following attacks primarily targets users connecting to public Wi-Fi networks by broadcasting a fraudulent SSID identical to a legitimate hotel or coffee shop network?',
    options: [
      { id: 'A', text: 'Evil twin' },
      { id: 'B', text: 'Impersonation' },
      { id: 'C', text: 'Watering hole' },
      { id: 'D', text: 'Pretexting' }
    ],
    correctAnswers: ['A'],
    explanation: 'An Evil Twin is a rogue wireless access point set up by an attacker that mimics the SSID of a legitimate nearby Wi-Fi network to lure users into connecting and intercept their traffic (On-Path/MitM).',
    examTip: 'Evil Twin = Cloned wireless SSID used to intercept client traffic.'
  },
  {
    id: 'd2-q600',
    domainId: 2,
    subtopic: 'Deception Technologies',
    questionNumber: 600,
    type: 'single',
    prompt: 'A Chief Security Officer signs off on a request to intentionally allow inbound SMB and RDP traffic from the public internet to an isolated, heavily monitored VLAN containing synthetic servers. What is the explanation?',
    options: [
      { id: 'A', text: 'The company built a new file-sharing site.' },
      { id: 'B', text: 'The organization is preparing for a penetration test.' },
      { id: 'C', text: 'The security team is integrating with a SASE platform.' },
      { id: 'D', text: 'The security team created a honeynet.' }
    ],
    correctAnswers: ['D'],
    explanation: 'A honeynet is a network of decoy servers (honeypots) intentionally exposed with attractive ports (SMB 445, RDP 3389) in an isolated segment to lure attackers and study their Tactics, Techniques, and Procedures (TTPs).',
    examTip: 'Honeynet = Network of multiple decoy honeypots.'
  },
  {
    id: 'd2-q609',
    domainId: 2,
    subtopic: 'SQL Injection Indicators',
    questionNumber: 609,
    type: 'single',
    prompt: 'An analyst discovers a suspicious entry in the web application logs. Which of the following strings is classic evidence of an attempted SQL injection (SQLi) tautology attack?',
    options: [
      { id: 'A', text: 'cat /etc/shadow' },
      { id: 'B', text: 'dig 25.36.99.11' },
      { id: 'C', text: 'cd ../../../' },
      { id: 'D', text: 'UserId=10 OR 1=1;' }
    ],
    correctAnswers: ['D'],
    explanation: '"OR 1=1;" is a classic SQL injection boolean tautology payload that forces the WHERE clause of a SQL query to always evaluate to TRUE, bypassing authentication or dumping entire tables.',
    examTip: 'Look for single quotes (\'), OR 1=1, UNION SELECT, or -- comments for SQLi.'
  },
  {
    id: 'd2-q835',
    domainId: 2,
    subtopic: 'Exfiltration & Next-Gen Firewalls',
    questionNumber: 835,
    type: 'single',
    prompt: 'The Cyber Incident Response Team is reviewing an incident involving an insider exfiltrating sensitive records using HTTP traffic disguised over UDP/TCP port 53. Which security appliance could have identified and blocked this protocol anomaly?',
    options: [
      { id: 'A', text: 'WAF utilizing SSL decryption' },
      { id: 'B', text: 'NGFW utilizing application inspection (Deep Packet Inspection)' },
      { id: 'C', text: 'UTM utilizing a threat feed' },
      { id: 'D', text: 'SD-WAN utilizing IPsec' }
    ],
    correctAnswers: ['B'],
    explanation: 'A Next-Generation Firewall (NGFW) performs Layer 7 Deep Packet Inspection (DPI) and application-layer awareness, allowing it to detect when non-DNS protocols (like HTTP) are tunneled over port 53.',
    examTip: 'NGFW inspects application signatures regardless of port number.'
  },
  {
    id: 'd2-q852',
    domainId: 2,
    subtopic: 'Vulnerability Prioritization',
    questionNumber: 852,
    type: 'single',
    prompt: 'A company completes a vulnerability scan and receives four findings: (1) Internet-facing Web Server, CVSS 9.8; (2) Internal Print Server, CVSS 4.0; (3) Internet-facing Marketing Blog, CVSS 4.0; (4) Internal Test VM, CVSS 9.8. Which should be patched first?',
    options: [
      { id: 'A', text: 'Vulnerability 1 (Internet-facing Web Server, CVSS 9.8)' },
      { id: 'B', text: 'Vulnerability 2 (Internal Print Server, CVSS 4.0)' },
      { id: 'C', text: 'Vulnerability 3 (Internet-facing Marketing Blog, CVSS 4.0)' },
      { id: 'D', text: 'Vulnerability 4 (Internal Test VM, CVSS 9.8)' }
    ],
    correctAnswers: ['A'],
    explanation: 'Vulnerability prioritization combines CVSS severity score with asset exposure. An internet-facing server with a critical 9.8 CVSS score poses the highest immediate risk of exploitation.',
    examTip: 'Always prioritize Critical CVSS + Public Internet Exposure first.'
  }
];
