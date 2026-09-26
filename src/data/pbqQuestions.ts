import { PBQuestion } from '../types/exam';

export const PBQ_QUESTIONS: PBQuestion[] = [
  {
    id: 'pbq-74',
    domainId: 2,
    subtopic: 'Attacks & Incident Remediation Controls',
    type: 'pbq',
    prompt: 'CompTIA SY0-701 Simulation: Match each security threat scenario or attack type to its corresponding industry-standard mitigation/remediation control.',
    explanation: 'Matching attack vectors to mitigation controls is a fundamental Security+ skill. Botnets require DDoS scrubbing; RATs require EDR/HIPS on endpoints; Worms exploit unpatched network vulnerabilities; Keyloggers are mitigated via MFA and behavioral monitoring; Application backdoors require disabling default services/accounts.',
    pbqData: {
      pbqType: 'threat-matching',
      title: 'PBQ 1: Threat Vector & Remediation Matching',
      subtitle: 'CompTIA Hotspot Simulation - SY0-701',
      scenario: 'You are the Lead Cybersecurity Analyst reviewing a recent threat report across company endpoints and networks. Several malicious activities were recorded during a security assessment. You must assign the most appropriate mitigation control for each specific threat to minimize blast radius and stop propagation.',
      instructions: [
        'Review each threat scenario on the left.',
        'Select and drag/match the most effective mitigation control from the right-hand options.',
        'Each mitigation option should be paired with the single best threat according to CompTIA SY0-701 standards.'
      ],
      matchPairs: [
        {
          threat: 'Botnet',
          threatDesc: 'Distributed swarm of compromised devices orchestrating coordinated volumetric network flooding.',
          correctMitigation: 'Enable DDoS protection / traffic scrubbing'
        },
        {
          threat: 'RAT (Remote Access Trojan)',
          threatDesc: 'Covert background backdoor established on executive laptops granting interactive shell and keyboard control.',
          correctMitigation: 'Implement host-based IPS or EDR'
        },
        {
          threat: 'Worm',
          threatDesc: 'Self-replicating malicious code aggressively scanning and jumping port 445 (SMB) across subnets without user interaction.',
          correctMitigation: 'Patch vulnerabilities and segment the network'
        },
        {
          threat: 'Keylogger',
          threatDesc: 'Spyware intercepting physical keystrokes and plain credentials entered into client applications.',
          correctMitigation: 'Implement 2FA using push notifications / endpoint behavioral monitoring'
        },
        {
          threat: 'Application Backdoor',
          threatDesc: 'Hardcoded developer credentials and dormant debug ports accessible on internal enterprise software.',
          correctMitigation: 'Disable vulnerable services / change default application passwords'
        }
      ],
      matchOptions: [
        'Enable DDoS protection / traffic scrubbing',
        'Implement host-based IPS or EDR',
        'Patch vulnerabilities and segment the network',
        'Implement 2FA using push notifications / endpoint behavioral monitoring',
        'Disable vulnerable services / change default application passwords',
        'Deploy air-gapped tape backup storage',
        'Enforce biometric multi-factor authentication at physical mantrap'
      ],
      fullExplanation: '1. Botnet -> DDoS protection/traffic scrubbing filters out massive bogus traffic before reaching border routers. 2. RAT -> Host-based IPS/EDR detects unauthorized remote command-and-control handles and processes. 3. Worm -> Patching known CVEs eliminates exploit vectors and network segmentation arrests automated spreading. 4. Keylogger -> Push-notification 2FA renders intercepted passwords alone insufficient for compromise. 5. Application Backdoor -> Hardening and disabling dormant services/default passwords closes unauthorized entry doors.'
    }
  },
  {
    id: 'pbq-75',
    domainId: 4,
    subtopic: 'Log Analysis & Forensic Network Isolation',
    type: 'pbq',
    prompt: 'CompTIA SY0-701 Simulation: Review network and firewall logs across multiple enterprise hosts to identify the infection source, lateral movement, and isolate infected nodes.',
    explanation: 'Incident response log analysis requires identifying anomalies (e.g., svchost.exe communicating across high volumes of external IPs on port 443, unauthorized internal SMB/RDP to engineering subnets) and performing rapid containment via host isolation.',
    pbqData: {
      pbqType: 'log-forensics',
      title: 'PBQ 2: Incident Response Log Forensics & Quarantine',
      subtitle: 'SIEM Log Analysis & Network Troubleshooting Simulation',
      scenario: 'Your SOC detected an anomalous spike in outbound SSL traffic originating from the corporate subnet. Examine the process activity and firewall connection logs for the four monitored endpoints below. Identify the patient-zero infection source, any secondary nodes compromised via lateral movement, and enact network quarantine on the infected hosts while leaving clean hosts online.',
      instructions: [
        'Inspect the telemetry and active connections for each host tab.',
        'Identify which hosts exhibit indicators of compromise (C2 beaconing or internal lateral spread).',
        'Click the "Quarantine / Isolate" button ONLY for compromised endpoints. Leave legitimate production hosts active.',
        'Submit the incident response verdict.'
      ],
      logHosts: [
        {
          ip: '192.168.10.22',
          hostname: 'WKSTN-FIN-04',
          role: 'Finance Workstation (User: M. Vance)',
          status: 'infected',
          isMalicious: true,
          isolationRequired: true,
          logs: [
            '[08:14:02 UTC] EventID 4688: Process creation "powershell.exe -enc JABzAD0..." by user "mvance"',
            '[08:14:15 UTC] Network: svchost.exe PID 4412 spawned from unusual path C:\\Users\\Public\\svchost.exe',
            '[08:14:19 UTC] Firewall Outbound: 192.168.10.22:49812 -> 185.220.101.5:443 [SYN_SENT - 280 pkts/min]',
            '[08:14:22 UTC] Firewall Outbound: 192.168.10.22:49814 -> 194.26.29.112:443 [ESTABLISHED - Beaconing payload]',
            '[08:15:40 UTC] Lateral Traffic: 192.168.10.22 -> 10.10.9.18:445 [SMBv2 Session Setup Request - NTLMSSP]'
          ]
        },
        {
          ip: '10.10.9.18',
          hostname: 'ENG-SRV-BUILD02',
          role: 'Engineering Build Server',
          status: 'infected',
          isMalicious: true,
          isolationRequired: true,
          logs: [
            '[08:15:42 UTC] EventID 4624: Successful network logon from source IP 192.168.10.22 (User: mvance)',
            '[08:16:05 UTC] EventID 7045: New service installed "WinDefUpdate" ImagePath: C:\\Windows\\Temp\\srvmgr.exe',
            '[08:16:11 UTC] Netstat: TCP 10.10.9.18:51203 -> 185.220.101.5:8080 ESTABLISHED (Outbound C2 connection)',
            '[08:16:30 UTC] File Activity: Mass file access across \\\\ENG-SRV-BUILD02\\Repository'
          ]
        },
        {
          ip: '192.168.10.37',
          hostname: 'WKSTN-RD-01',
          role: 'R&D Workstation (User: J. Doe)',
          status: 'clean',
          isMalicious: false,
          isolationRequired: false,
          logs: [
            '[08:00:15 UTC] EventID 4624: User logon "jdoe" via Kerberos ticket',
            '[08:10:22 UTC] Browser: git pull origin main -> git.internal.corp:22 (Authorized SSH)',
            '[08:20:45 UTC] Firewall Outbound: 192.168.10.37:52110 -> 142.250.190.46:443 [Google Docs - Clean session]',
            '[08:25:00 UTC] Baseline CPU/RAM: Normal usage (14% CPU, 4.2GB RAM)'
          ]
        },
        {
          ip: '192.168.10.41',
          hostname: 'WKSTN-RD-02',
          role: 'R&D Workstation (User: A. Gomez)',
          status: 'clean',
          isMalicious: false,
          isolationRequired: false,
          logs: [
            '[08:05:00 UTC] EventID 4624: User logon "agomez"',
            '[08:12:10 UTC] Application: VS Code extension update via code.visualstudio.com (HTTPS 443)',
            '[08:18:30 UTC] DNS Query: jira.corporate.local -> 10.10.1.5 (Standard internal DNS resolution)',
            '[08:22:15 UTC] Endpoint Security Status: Defender Antivirus active, signature DB up to date'
          ]
        }
      ],
      fullExplanation: 'Source of Infection: Host 192.168.10.22 (WKSTN-FIN-04) had an anomalous rogue svchost.exe launched from C:\\Users\\Public communicating with known malicious external IPs on port 443 (botnet C2 beaconing). Lateral Spread: 192.168.10.22 authenticated to 10.10.9.18 via SMB port 445 and installed a malicious persistence service (srvmgr.exe). Action: Quarantine both 192.168.10.22 and 10.10.9.18 immediately. Hosts 192.168.10.37 and 192.168.10.41 show normal baseline R&D traffic and must remain untouched.'
    }
  },
  {
    id: 'pbq-566',
    domainId: 3,
    subtopic: 'Cloud Payment Network Architecture Diagram',
    type: 'pbq',
    prompt: 'CompTIA SY0-701 Simulation: Architect a resilient, PCI DSS-compliant cloud network for a customer-facing payment web application with proper network segmentation.',
    explanation: 'PCI DSS requires strict isolation between internet-facing presentation tiers and sensitive backend payment processing & cardholder databases. Web traffic terminates at an internet-facing WAF and Load Balancer in a public subnet, while app servers and databases reside in isolated private subnets with strict security groups.',
    pbqData: {
      pbqType: 'cloud-architecture',
      title: 'PBQ 3: Cloud Architecture & Segmentation Design',
      subtitle: 'PCI DSS Compliant Network Diagram Simulation (SY0-701 Q566)',
      scenario: 'Your organization is deploying a customer-facing payment processing platform on a cloud provider. To meet PCI DSS requirements and Security+ architectural best practices, place the correct security and networking components into their designated tier (Public Subnet vs. Private Subnet).',
      instructions: [
        'Review the 4 architecture slots across the Public and Private Subnets.',
        'Choose the appropriate component for each slot from the available options.',
        'Ensure the perimeter layer shields web servers, and internal application databases are completely isolated from direct public internet exposure.'
      ],
      networkSlots: [
        {
          slotId: 'public-edge',
          slotLabel: 'Public Subnet: Inbound Entry Point & Application Inspection',
          tier: 'Perimeter',
          correctComponentId: 'waf-alb',
          explanation: 'Public ingress requires an Internet Gateway coupled with a Web Application Firewall (WAF) and Load Balancer to filter Layer 7 exploits (SQLi/XSS) before hitting servers.'
        },
        {
          slotId: 'public-compute',
          slotLabel: 'Public Subnet: Frontend Web Presentation Tier',
          tier: 'Compute',
          correctComponentId: 'autoscaling-web',
          explanation: 'Autoscaling frontend web servers sit in the public subnet to handle incoming client HTTPS requests over port 443.'
        },
        {
          slotId: 'private-app',
          slotLabel: 'Private Subnet: Core Business & Payment Logic Tier',
          tier: 'Compute',
          correctComponentId: 'internal-app-servers',
          explanation: 'Internal application servers process transactions and communicate with web servers, unreachable directly from the public internet.'
        },
        {
          slotId: 'private-db',
          slotLabel: 'Private Subnet: Cardholder Data Environment (CDE)',
          tier: 'Data',
          correctComponentId: 'encrypted-db-cluster',
          explanation: 'Cardholder databases reside deep inside the private subnet with encryption at rest (AES-256) and strict security groups permitting traffic solely from application servers.'
        }
      ],
      componentChoices: [
        {
          id: 'waf-alb',
          label: 'Internet Gateway + WAF + Load Balancer',
          description: 'Layer 7 inspection with SSL termination and dynamic traffic distribution.'
        },
        {
          id: 'autoscaling-web',
          label: 'Autoscaling Web Cluster (Frontend)',
          description: 'Stateless web nodes in public subnet serving customer HTTPS traffic.'
        },
        {
          id: 'internal-app-servers',
          label: 'Internal Application Servers (Private)',
          description: 'Processes business logic and connects to database via restricted internal security groups.'
        },
        {
          id: 'encrypted-db-cluster',
          label: 'Encrypted Database Cluster (CDE)',
          description: 'PCI DSS cardholder data store with AES-256 encryption at rest, no public routing.'
        },
        {
          id: 'open-ftp-relay',
          label: 'Public FTP / Telnet Relay',
          description: 'Legacy unencrypted file transfer service (Non-compliant).'
        },
        {
          id: 'unfiltered-nat',
          label: 'Direct Internet Ingress to Database',
          description: 'Direct routing without firewall inspection (Critical Security Failure).'
        }
      ],
      fullExplanation: 'PCI DSS Network Segmentation Solution: 1) Public Subnet houses Internet Gateway, Web Application Firewall (WAF), and Internet-facing Load Balancer to inspect HTTP/HTTPS traffic and defend against OWASP Top 10 vulnerabilities. 2) Frontend web servers reside in public subnet behind the load balancer. 3) Private Subnet houses internal application processing nodes. 4) Database cluster (CDE) is completely isolated in the deepest private subnet, accessible only via restricted database ports (e.g. 5432/3306) originating from application servers, with full encryption at rest and in transit.'
    }
  },
  {
    id: 'pbq-567',
    domainId: 1,
    subtopic: 'Identity Security, Password Policies & Digital Forensics',
    type: 'pbq',
    prompt: 'CompTIA SY0-701 Simulation: Investigate employee credentials discovered on the dark web, identify weak password policy practices, and select the containment control that preserves host evidence.',
    explanation: 'Analyzing credential dumps from dark web leaks highlights legacy password weaknesses (Age, Reuse, Length, Complexity). The best modern remediation that is phishing-resistant and leaves host evidence intact is hardware-based FIDO2 security keys.',
    pbqData: {
      pbqType: 'password-darkweb',
      title: 'PBQ 4: Dark Web Credential Audit & Evidence Containment',
      subtitle: 'CompTIA SY0-701 Simulation - Q567',
      scenario: 'A threat intelligence feed discovered a corporate credential dump on a dark web marketplace. Investigation reveals that multiple employee accounts share identical patterns, expired policies, and short passwords. Simultaneously, the forensic team is investigating compromised endpoints and cannot destroy in-memory or host evidence.',
      instructions: [
        'Select the four (4) legacy or weak password practices demonstrated in the credential audit report.',
        'Choose the single most secure containment / identity remediation step that prevents unauthorized access while preserving forensic host evidence.'
      ],
      passwordAudit: [
        {
          id: 'weak-practices',
          title: 'Select the 4 Weak Password Practices to Remediate:',
          category: 'practice',
          options: [
            { id: 'age', text: 'Age (Passwords kept active for multiple years without rotation)', isCorrect: true },
            { id: 'reuse', text: 'Reuse (Using the same password across corporate and personal services)', isCorrect: true },
            { id: 'length', text: 'Length (Short passwords under 8 characters easily cracked via brute-force)', isCorrect: true },
            { id: 'complexity', text: 'Complexity (Lack of required character variety: uppercase, lowercase, numbers, symbols)', isCorrect: true },
            { id: 'salting', text: 'Cryptographic Salting (Adding random bits prior to hashing)', isCorrect: false },
            { id: 'passkeys', text: 'FIDO2 WebAuthn Passkeys', isCorrect: false }
          ]
        },
        {
          id: 'containment-step',
          title: 'Select the Best Security Containment Step that Preserves Host Evidence:',
          category: 'solution',
          options: [
            { id: 'fido-key', text: 'Deploy Hardware-Based FIDO Security Keys (Phishing-resistant MFA, requires no code entry on endpoint, keeps forensic disk/RAM state intact)', isCorrect: true },
            { id: 'format-drive', text: 'Format and Reimage all affected employee laptops immediately', isCorrect: false },
            { id: 'sms-otp', text: 'Switch to SMS-based One Time Passwords (OTP)', isCorrect: false },
            { id: 'reboot-all', text: 'Perform a cold power cycle on all workstations across the department', isCorrect: false }
          ]
        }
      ],
      fullExplanation: 'Weak Password Practices: Age (passwords kept too long), Reuse (using same credentials across different accounts), Length (short characters facilitate brute-forcing), and Complexity (simple predictable words). Best Containment Step: Hardware-based FIDO security keys provide cryptographic, phishing-resistant multi-factor authentication. Reimaging or power cycling destroys volatile RAM evidence, violating digital forensics preservation standards.'
    }
  },
  {
    id: 'pbq-636',
    domainId: 3,
    subtopic: 'Web Architecture Defense & Protocol Security',
    type: 'pbq',
    prompt: 'CompTIA SY0-701 Simulation: Build a defense-in-depth web architecture to remediate penetration test findings (Directory Traversal, XSS, CSRF, Insecure HTTP).',
    explanation: 'A hardened web architecture places a stateful firewall at the internet perimeter, followed by routing, a Web Application Firewall (WAF) for HTTP/HTTPS inspection against XSS/SQLi/traversal, web servers, and PKI certificates to enforce HTTPS TLS 1.3.',
    pbqData: {
      pbqType: 'web-defense-rules',
      title: 'PBQ 5: Multi-Tier Web Architecture & Security Controls',
      subtitle: 'Defense-in-Depth Pipeline Simulation (SY0-701 Q636)',
      scenario: 'A black-box penetration test against http://example.com discovered multiple high-severity vulnerabilities: directory traversal, cross-site scripting (XSS), cross-site request forgery (CSRF), and transmission over plaintext HTTP. You are tasked with assembling the secure architecture layers and configuring defense controls.',
      instructions: [
        'Place the appropriate security node into each pipeline position from Internet to Web Servers.',
        'Choose the cryptographic control required to encrypt web traffic in transit.'
      ],
      networkSlots: [
        {
          slotId: 'pos-1',
          slotLabel: 'Position 1: First node after Internet (Inbound Traffic Point)',
          tier: 'Perimeter',
          correctComponentId: 'firewall',
          explanation: 'The perimeter Firewall controls and filters incoming packets from the public internet and drops unauthorized port traffic.'
        },
        {
          slotId: 'pos-2',
          slotLabel: 'Position 2: Next node (Internal Traffic Routing & Segmentation)',
          tier: 'Routing',
          correctComponentId: 'router',
          explanation: 'The Router steers packets across internal subnets and applies core routing access control lists.'
        },
        {
          slotId: 'pos-3',
          slotLabel: 'Position 3: Next layer (Between router and web infrastructure)',
          tier: 'Inspection',
          correctComponentId: 'waf',
          explanation: 'A Web Application Firewall (WAF) inspects Layer 7 HTTP/HTTPS traffic to block XSS, SQLi, CSRF, and directory traversal.'
        },
        {
          slotId: 'pos-4',
          slotLabel: 'Position 4: Web Application Tier',
          tier: 'Compute',
          correctComponentId: 'web-server',
          explanation: 'Web Servers host the backend application services behind the WAF and reverse proxy.'
        },
        {
          slotId: 'pos-5',
          slotLabel: 'Position 5: Cryptographic Protection for Secure Protocols',
          tier: 'Inspection',
          correctComponentId: 'pki-cert',
          explanation: 'A PKI Certificate (SSL/TLS) is applied on the WAF/Web Server to enforce HTTPS (TLS 1.3) and secure transit.'
        }
      ],
      componentChoices: [
        { id: 'firewall', label: 'Perimeter Firewall', description: 'Filters incoming internet traffic and blocks unapproved IP/ports.' },
        { id: 'router', label: 'Core Router', description: 'Routes packets inside the network with subnet ACLs.' },
        { id: 'waf', label: 'WAF (Web Application Firewall)', description: 'Inspects Layer 7 HTTP/HTTPS payloads for XSS, SQLi, CSRF, and traversal.' },
        { id: 'web-server', label: 'Hardened Web Server', description: 'Hosts backend application services in DMZ.' },
        { id: 'pki-cert', label: 'PKI Certificate (TLS 1.3)', description: 'Cryptographic certificate enabling HTTPS encryption.' },
        { id: 'hub', label: 'Unmanaged Network Hub', description: 'Broadcasts all packets insecurely across LAN.' }
      ],
      fullExplanation: 'CompTIA Defense-in-Depth Solution: 1) Inbound Traffic Point: Firewall controls edge traffic. 2) Internal Control: Router routes internal traffic. 3) Between Router & Web Infrastructure: WAF inspects HTTP/HTTPS payloads to defeat directory traversal, XSS, and SQLi. 4) Web Servers: Web Server hosts application. 5) Encryption: PKI Certificate deployed on web server/WAF enforces HTTPS over TLS 1.3.'
    }
  },
  {
    id: 'pbq-701-acl',
    domainId: 3,
    subtopic: 'Firewall ACL Rule Configuration & Network Segmentation',
    type: 'pbq',
    prompt: 'CompTIA SY0-701 Simulation: Configure firewall Access Control List (ACL) rules to block a known malicious IP, restrict outbound DNS to a single internal forwarder, and secure administrative jump box access.',
    explanation: 'Firewall ACLs are evaluated top-down. Specific permit/deny rules must precede broader catch-all rules. Blocking an inbound attacker requires denying the attacker source IP; restricting DNS requires permitting the authorized forwarder IP on port 53 before denying all other outbound port 53 traffic.',
    pbqData: {
      pbqType: 'web-defense-rules',
      title: 'PBQ 6: Enterprise Firewall ACL Rule & Port Configuration',
      subtitle: 'Network Perimeter & Internal Segmentation ACL Simulation',
      scenario: 'You are configuring a new enterprise perimeter and internal segmentation firewall. You must implement 4 critical security requirements: (1) Block all inbound traffic from known malicious threat actor IP 10.1.4.9, (2) Permit outbound DNS (Port 53) strictly from the authorized DNS forwarder 10.50.10.25 while blocking rogue DNS tunneling, (3) Allow external clients to reach the reverse proxy over HTTPS (Port 443), and (4) Restrict administrative access to the internal database tier solely via the Bastion Jump Server over SSH (Port 22).',
      instructions: [
        'Review each firewall rule slot in the ACL table.',
        'Select the exact ACL rule syntax that fulfills the security requirement.',
        'Remember: Source is the initiator of the packet, Destination is the receiver, and secure encrypted protocols must be enforced.'
      ],
      networkSlots: [
        {
          slotId: 'acl-rule-1',
          slotLabel: 'Rule 10 (Inbound Perimeter): Block Known Threat Actor IP (10.1.4.9)',
          tier: 'Perimeter',
          correctComponentId: 'deny-inbound-threat',
          explanation: 'To block inbound traffic originating from 10.1.4.9, the rule must DENY IP where SOURCE is 10.1.4.9 and DESTINATION is 0.0.0.0/0 (any).'
        },
        {
          slotId: 'acl-rule-2',
          slotLabel: 'Rule 20 (Outbound Egress): Restrict Outbound DNS Queries to Authorized Forwarder (10.50.10.25)',
          tier: 'Routing',
          correctComponentId: 'permit-dns-forwarder',
          explanation: 'ACLs evaluate top-down: explicitly PERMIT source 10.50.10.25 on UDP/TCP port 53 first, followed immediately by DENY any outbound port 53 to stop DNS exfiltration.'
        },
        {
          slotId: 'acl-rule-3',
          slotLabel: 'Rule 30 (DMZ Ingress): Allow Public Customer Traffic to Web Reverse Proxy',
          tier: 'Inspection',
          correctComponentId: 'permit-https-proxy',
          explanation: 'Customer web traffic must be encrypted in transit using HTTPS (TCP Port 443) terminating at the DMZ Reverse Proxy / WAF.'
        },
        {
          slotId: 'acl-rule-4',
          slotLabel: 'Rule 40 (Internal Vault): Secure Administrative Access to Database Servers',
          tier: 'Data',
          correctComponentId: 'permit-ssh-jumpbox',
          explanation: 'Database servers should never be managed directly from user workstations or via cleartext Telnet (23); only PERMIT encrypted SSH (Port 22) originating from the hardened Jump Server.'
        }
      ],
      componentChoices: [
        {
          id: 'deny-inbound-threat',
          label: 'DENY IP Source 10.1.4.9 -> Destination 0.0.0.0/0 (Port ANY)',
          description: 'Drops all inbound packets originating from malicious host 10.1.4.9.'
        },
        {
          id: 'permit-dns-forwarder',
          label: 'PERMIT Source 10.50.10.25 Port 53 -> DENY All Other Outbound Port 53',
          description: 'Allows only the designated DNS server to resolve external names; blocks DNS tunneling.'
        },
        {
          id: 'permit-https-proxy',
          label: 'PERMIT TCP Source 0.0.0.0/0 -> Destination DMZ-Proxy Port 443 (HTTPS)',
          description: 'Allows encrypted TLS web traffic from internet clients to the reverse proxy.'
        },
        {
          id: 'permit-ssh-jumpbox',
          label: 'PERMIT TCP Source Jump-Server (10.10.5.5) -> Destination DB-Tier Port 22 (SSH)',
          description: 'Enforces bastion host administrative access over encrypted SSH.'
        },
        {
          id: 'deny-dest-threat',
          label: 'DENY IP Source 0.0.0.0/0 -> Destination 10.1.4.9 (Inbound)',
          description: 'Incorrectly sets the external attacker IP as the inbound destination.'
        },
        {
          id: 'permit-telnet-db',
          label: 'PERMIT TCP Source Admin-LAN -> Destination DB-Tier Port 23 (Telnet)',
          description: 'Insecure cleartext protocol and bypasses jump server segmentation.'
        }
      ],
      fullExplanation: 'Firewall ACL Best Practices: 1) Inbound threat blocking requires matching the attacker IP (10.1.4.9) as the SOURCE. 2) Outbound DNS restriction places a specific PERMIT for 10.50.10.25 on port 53 above a general DENY for port 53. 3) Public web ingress permits TCP 443 (HTTPS) to the DMZ proxy. 4) Database management enforces least privilege via an intermediary Jump Server over TCP 22 (SSH).'
    }
  },
  {
    id: 'pbq-702-crypto',
    domainId: 1,
    subtopic: 'Cryptography & PKI Lifecycle Operations',
    type: 'pbq',
    prompt: 'CompTIA SY0-701 Simulation: Match each cryptographic or Public Key Infrastructure (PKI) mechanism to its exact enterprise security use case.',
    explanation: 'PKI and cryptographic primitives solve distinct problems: Salting defeats rainbow tables; Key Escrow recovers lost decryption keys; OCSP validates certificate revocation in real time; CSR initiates certificate creation; Homomorphic encryption processes encrypted data in the cloud without decryption.',
    pbqData: {
      pbqType: 'threat-matching',
      title: 'PBQ 7: Cryptography & PKI Lifecycle Matching',
      subtitle: 'Domain 1.0 Cryptographic Implementation Simulation',
      scenario: 'As the Enterprise Cryptographic Architect, you are reviewing engineering requests across five departments. Match each requirement on the left to the exact cryptographic or PKI mechanism on the right.',
      instructions: [
        'Read each departmental security requirement on the left.',
        'Select the matching cryptographic concept or PKI component from the drop-down list.',
        'Verify that all 5 mappings align with CompTIA SY0-701 Domain 1.0 standards.'
      ],
      matchPairs: [
        {
          threat: 'Defeat Precomputed Rainbow Table Attacks',
          threatDesc: 'Add a unique 36-character random string to each user password before running SHA-256 hashing.',
          correctMitigation: 'Cryptographic Salting'
        },
        {
          threat: 'Real-Time Certificate Status Verification',
          threatDesc: 'Passively query whether a presented digital certificate has been revoked without downloading a full list.',
          correctMitigation: 'OCSP (Online Certificate Status Protocol)'
        },
        {
          threat: 'Cloud Computation on Encrypted Financial Data',
          threatDesc: 'Perform mathematical analytics on sensitive customer records in the cloud without ever decrypting the ciphertext.',
          correctMitigation: 'Homomorphic Encryption'
        },
        {
          threat: 'Emergency Decryption Key Recovery',
          threatDesc: 'Securely store a backup copy of Full Disk Encryption (FDE) private keys with a trusted third party in case an employee leaves.',
          correctMitigation: 'Key Escrow'
        },
        {
          threat: 'Obtain a New Signed TLS Certificate from a CA',
          threatDesc: 'Generate a formal digital file containing the server public key and organization details to submit to DigiCert.',
          correctMitigation: 'CSR (Certificate Signing Request)'
        }
      ],
      matchOptions: [
        'Cryptographic Salting',
        'OCSP (Online Certificate Status Protocol)',
        'Homomorphic Encryption',
        'Key Escrow',
        'CSR (Certificate Signing Request)',
        'Steganography (Image LSB Concealment)',
        'Self-Signed Root Certificate'
      ],
      fullExplanation: '1. Salting prepends/appends random data before hashing so identical passwords yield different hashes, defeating rainbow tables. 2. OCSP checks single-certificate revocation status in real time (whereas CRL requires downloading a list). 3. Homomorphic encryption allows processing data in use while remaining encrypted. 4. Key Escrow stores recovery keys in a secure vault. 5. A CSR is generated with the public key and sent to a Certificate Authority (CA) for signing.'
    }
  },
  {
    id: 'pbq-703-siem',
    domainId: 4,
    subtopic: 'SIEM Web Log Triage & Attack Containment',
    type: 'pbq',
    prompt: 'CompTIA SY0-701 Simulation: Inspect SIEM web server and authentication logs across four servers to identify active SQL Injection and Directory Traversal compromises, and isolate affected servers.',
    explanation: 'Web server and SIEM logs reveal specific attack signatures: "../" sequences indicate Directory Traversal; "OR 1=1" or "INSERT INTO" in query strings indicate SQL Injection; rapid failed logins followed by success indicate Brute-Force.',
    pbqData: {
      pbqType: 'log-forensics',
      title: 'PBQ 8: SIEM Web Server Log Forensics & Containment',
      subtitle: 'Application & Authentication Log Analysis Simulation',
      scenario: 'Your SIEM generated high-priority alerts across the application server farm. Inspect the HTTP access and authentication logs for all four servers below. Identify which servers have suffered successful exploitation (SQL Injection backdoor insertion or Directory Traversal /etc/passwd exfiltration) and place ONLY the compromised servers into network quarantine.',
      instructions: [
        'Click through each of the 4 server tabs to inspect raw HTTP and system logs.',
        'Look for indicators of successful compromise versus blocked/benign traffic.',
        'Click "Enact Network Quarantine" on compromised servers while leaving clean/protected servers online.'
      ],
      logHosts: [
        {
          ip: '10.20.1.15',
          hostname: 'WEB-PORTAL-01',
          role: 'Customer Portal Web Server',
          status: 'infected',
          isMalicious: true,
          isolationRequired: true,
          logs: [
            '[14:02:11 UTC] HTTP GET /login.php?user=admin HTTP/1.1 200 OK',
            '[14:03:45 UTC] HTTP GET /query.php?id=123%20INSERT%20INTO%20users%20VALUES(\'temp\',\'pass123\')# HTTP/1.1 200 OK',
            '[14:04:02 UTC] DB-AUDIT: New row inserted into table "users" -> username="temp" role=" superadmin"',
            '[14:04:19 UTC] AUTH-LOG: User "temp" logged in from 118.19.200.55 and exported customer_cards.csv'
          ]
        },
        {
          ip: '10.20.1.28',
          hostname: 'IMG-ASSET-SRV',
          role: 'Static Media & Image Server',
          status: 'infected',
          isMalicious: true,
          isolationRequired: true,
          logs: [
            '[14:10:05 UTC] HTTP GET /image?filename=logo.png HTTP/1.1 200 OK (14,200 bytes)',
            '[14:11:30 UTC] HTTP GET /image?filename=../../../../etc/passwd HTTP/1.1 200 OK (2,840 bytes)',
            '[14:11:42 UTC] HTTP GET /image?filename=../../../../etc/shadow HTTP/1.1 200 OK (1,920 bytes)',
            '[14:12:15 UTC] SSHD: Root login succeeded from 198.51.100.77 using cracked shadow hash'
          ]
        },
        {
          ip: '10.20.1.40',
          hostname: 'API-GATEWAY-02',
          role: 'Hardened REST API Gateway',
          status: 'clean',
          isMalicious: false,
          isolationRequired: false,
          logs: [
            '[14:05:10 UTC] HTTP POST /api/v1/search body={"q": "<script>alert(1)</script>"}',
            '[14:05:10 UTC] WAF-INLINE: Rule 941100 Triggered (XSS Attack Detected) -> Action: 403 FORBIDDEN (Dropped)',
            '[14:08:00 UTC] HEALTH-CHECK: TLS 1.3 active, parameterized prepared statements enforced, 0 errors'
          ]
        },
        {
          ip: '10.20.1.55',
          hostname: 'INTRA-DOCS-01',
          role: 'Internal Documentation Wiki',
          status: 'clean',
          isMalicious: false,
          isolationRequired: false,
          logs: [
            '[14:01:00 UTC] HTTP GET /wiki/security-policy.html HTTP/1.1 200 OK (User: ksmith)',
            '[14:06:22 UTC] HTTP GET /wiki/onboarding-guide.pdf HTTP/1.1 200 OK (User: jdoe)',
            '[14:15:00 UTC] FIM-AGENT: All system binary SHA-256 hashes verified intact against baseline'
          ]
        }
      ],
      fullExplanation: 'Compromised Servers to Isolate: 1) WEB-PORTAL-01 (10.20.1.15) suffered a successful SQL Injection (SQLi) attack where 118.19.200.55 injected "INSERT INTO users VALUES(\'temp\',\'pass123\')" and exfiltrated data. 2) IMG-ASSET-SRV (10.20.1.28) suffered a successful Directory Traversal attack ("../../../../etc/passwd" and "/etc/shadow" returned 200 OK) leading to root SSH compromise. Clean Servers to Leave Online: API-GATEWAY-02 blocked the XSS attempt with a 403 Forbidden via its inline WAF, and INTRA-DOCS-01 shows normal employee traffic.'
    }
  },
  {
    id: 'pbq-704-drp',
    domainId: 5,
    subtopic: 'Business Continuity, Disaster Recovery & Risk Metrics',
    type: 'pbq',
    prompt: 'CompTIA SY0-701 Simulation: Match each Business Impact Analysis (BIA), Disaster Recovery (DR), and Quantitative Risk metric to its corresponding organizational scenario.',
    explanation: 'BIA and Risk metrics govern resilience investments: RPO dictates backup frequency (acceptable data loss in time); RTO dictates maximum tolerable downtime; MTTR measures repair duration; MTBF measures hardware reliability; ALE = SLE x ARO.',
    pbqData: {
      pbqType: 'threat-matching',
      title: 'PBQ 9: Disaster Recovery & Risk Metrics Matching',
      subtitle: 'Domain 5.0 Governance, BIA & Continuity Simulation',
      scenario: 'During an executive Business Impact Analysis (BIA) and Disaster Recovery review, leadership asks you to classify five operational metrics and recovery site models based on their exact definitions.',
      instructions: [
        'Review each business continuity or risk management scenario on the left.',
        'Select the corresponding metric or recovery model on the right.',
        'Ensure you distinguish carefully between RTO, RPO, MTTR, Warm Site, and ALE.'
      ],
      matchPairs: [
        {
          threat: 'Maximum Acceptable Data Loss Measured in Time',
          threatDesc: 'Dictates how frequently database backups or replication snapshots must occur (e.g., max 15 minutes of lost transactions).',
          correctMitigation: 'RPO (Recovery Point Objective)'
        },
        {
          threat: 'Maximum Tolerable Downtime After an Outage',
          threatDesc: 'Defines the maximum time allowed to restore critical business processes before severe financial damage occurs (e.g., must be back online within 4 hours).',
          correctMitigation: 'RTO (Recovery Time Objective)'
        },
        {
          threat: 'Balanced Cost & Recovery Speed Standby Facility',
          threatDesc: 'Maintains pre-installed server hardware and network connectivity, but requires loading recent backups to become fully operational.',
          correctMitigation: 'Warm Site'
        },
        {
          threat: 'Expected Yearly Financial Loss from a Threat',
          threatDesc: 'Calculated as Single Loss Expectancy ($15,000) multiplied by Annualized Rate of Occurrence (2/3 per year) = $10,000/yr.',
          correctMitigation: 'ALE (Annualized Loss Expectancy)'
        },
        {
          threat: 'Average Time Required to Fix a Failed Server',
          threatDesc: 'Measures how long technicians take to diagnose, replace a failed RAID controller, and bring the hardware back online.',
          correctMitigation: 'MTTR (Mean Time to Repair)'
        }
      ],
      matchOptions: [
        'RPO (Recovery Point Objective)',
        'RTO (Recovery Time Objective)',
        'Warm Site',
        'ALE (Annualized Loss Expectancy)',
        'MTTR (Mean Time to Repair)',
        'Cold Site (Empty Shell Facility)',
        'MTBF (Mean Time Between Failures)'
      ],
      fullExplanation: '1. RPO (Recovery Point Objective) measures acceptable data loss in time and drives backup schedules. 2. RTO (Recovery Time Objective) measures maximum tolerable system downtime. 3. A Warm Site balances cost and speed with pre-installed hardware but non-live data. 4. ALE (Annualized Loss Expectancy) = SLE × ARO. 5. MTTR (Mean Time to Repair) measures average troubleshooting and repair time.'
    }
  },
  {
    id: 'pbq-705-mdm',
    domainId: 2,
    subtopic: 'Mobile Device Security, BYOD/COPE & MDM Controls',
    type: 'pbq',
    prompt: 'CompTIA SY0-701 Simulation: Audit a compromised fleet of employee mobile devices, identify the four mobile vulnerabilities exploited, and select the best MDM policy architecture.',
    explanation: 'Mobile devices face risks from sideloading unapproved APKs, jailbreaking/rooting OS controls, lost/stolen unencrypted storage, and lack of screen locks. Deploying an MDM with COPE/BYOD containerization, remote wipe, FDE, and application allow listing mitigates these vectors.',
    pbqData: {
      pbqType: 'password-darkweb',
      title: 'PBQ 10: Enterprise Mobile Security & MDM Compliance Audit',
      subtitle: 'CompTIA SY0-701 Mobile Vulnerability & Architecture Simulation',
      scenario: 'Several field sales employees lost company smartphones while traveling, and others reported strange battery drain after installing third-party utility apps outside the official app store. Conduct a mobile security audit to identify the 4 mobile vulnerabilities present and select the most comprehensive MDM remediation strategy.',
      instructions: [
        'Select the four (4) mobile device vulnerabilities/risks identified in the audit.',
        'Select the single best Mobile Device Management (MDM) remediation architecture to protect corporate data on lost or compromised phones.'
      ],
      passwordAudit: [
        {
          id: 'mobile-vulns',
          title: 'Select the 4 Mobile Device Vulnerabilities Identified in the Incident:',
          category: 'practice',
          options: [
            { id: 'sideloading', text: 'Sideloading (Installing unverified applications/binaries outside the official app store, introducing rootkits/trojans)', isCorrect: true },
            { id: 'jailbreaking', text: 'Jailbreaking / Rooting (Removing manufacturer OS restrictions and bypassing built-in mobile sandboxing)', isCorrect: true },
            { id: 'no-screenlock', text: 'Missing Screen Locks & Biometric PINs (Allowing immediate physical access to unattended or lost phones)', isCorrect: true },
            { id: 'unencrypted-storage', text: 'Lack of Full Device Encryption (FDE) (Allowing attackers to extract cleartext corporate files from stolen phones)', isCorrect: true },
            { id: 'wpa3-sae', text: 'Simultaneous Authentication of Equals (SAE) on Wi-Fi', isCorrect: false },
            { id: 'totp-auth', text: 'Time-Based One-Time Passwords (TOTP) Authenticator App', isCorrect: false }
          ]
        },
        {
          id: 'mdm-remediation',
          title: 'Select the Best Enterprise MDM Remediation & Containment Solution:',
          category: 'solution',
          options: [
            { id: 'mdm-full-suite', text: 'Enforce MDM with Application Allow Listing, Mandatory Screen Locks, Full Device Encryption (FDE), and Remote Wipe capability', isCorrect: true },
            { id: 'disable-wifi', text: 'Disable Wi-Fi on all smartphones and force SMS-only communication', isCorrect: false },
            { id: 'open-bluetooth', text: 'Enable open Bluetooth pairing for rapid file backups', isCorrect: false },
            { id: 'self-signed-certs', text: 'Install untrusted self-signed certificates without root CA validation', isCorrect: false }
          ]
        }
      ],
      fullExplanation: 'Mobile Security Audit Solution: The 4 mobile vulnerabilities are Sideloading (bypassing official app stores), Jailbreaking/Rooting (modifying the mobile OS), Missing Screen Locks, and Lack of Full Device Encryption (FDE). The comprehensive remediation is deploying an Enterprise MDM solution that enforces Application Allow Listing (blocks sideloading), Device Integrity Attestation (blocks jailbroken devices), Mandatory Screen Locks + FDE, and Remote Wipe for lost/stolen devices.'
    }
  },
  {
    id: 'pbq-706-ztna',
    domainId: 3,
    subtopic: 'Zero Trust Architecture (ZTA) & Control/Data Plane Design',
    type: 'pbq',
    prompt: 'CompTIA SY0-701 Simulation: Architect a NIST 800-207 Zero Trust Architecture (ZTA) pipeline by placing the Policy Engine, Policy Administrator, Policy Enforcement Point, and Continuous Diagnostics into their proper architectural roles.',
    explanation: 'In a Zero Trust Architecture (NIST SP 800-207), the Control Plane consists of the Policy Engine (PE) and Policy Administrator (PA), while the Data Plane uses the Policy Enforcement Point (PEP) to gate sessions between untrusted subjects and enterprise resources.',
    pbqData: {
      pbqType: 'cloud-architecture',
      title: 'PBQ 11: Zero Trust Architecture (Control vs. Data Plane)',
      subtitle: 'CompTIA SY0-701 Domain 3.0 Zero Trust Pipeline Simulation',
      scenario: 'Your enterprise is replacing its legacy implicit-trust perimeter VPN with a modern Zero Trust Network Access (ZTNA) architecture. Place the 4 core Zero Trust components into their exact architectural slots across the Control Plane, Data Plane, and Telemetry feeds.',
      instructions: [
        'Review each of the 4 Zero Trust architectural slots.',
        'Select the matching Zero Trust component from the choices.',
        'Ensure you distinguish between the brain (Policy Engine), the session token issuer (Policy Administrator), and the inline gatekeeper (Policy Enforcement Point).'
      ],
      networkSlots: [
        {
          slotId: 'zt-slot-1',
          slotLabel: 'Control Plane (Decision Brain): Evaluates Subject Trust, Risk Score & Access Policies',
          tier: 'Control Plane',
          correctComponentId: 'policy-engine',
          explanation: 'The Policy Engine (PE) is the brain of the Control Plane: it ingests identity context, device health, and threat intelligence to make the ultimate grant/deny decision.'
        },
        {
          slotId: 'zt-slot-2',
          slotLabel: 'Control Plane (Orchestrator): Generates Ephemeral Session Tokens & Commands the Gatekeeper',
          tier: 'Control Plane',
          correctComponentId: 'policy-admin',
          explanation: 'The Policy Administrator (PA) executes the Policy Engine\'s decision by generating session-specific authentication tokens and signaling the PEP to open or terminate the connection.'
        },
        {
          slotId: 'zt-slot-3',
          slotLabel: 'Data Plane (Inline Gatekeeper): Terminates Connections Between Subject & Protected Resource',
          tier: 'Data Plane',
          correctComponentId: 'pep-gateway',
          explanation: 'The Policy Enforcement Point (PEP) sits inline in the Data Plane, establishing, monitoring, and cutting off the actual communication tunnel between the user device and the enterprise resource.'
        },
        {
          slotId: 'zt-slot-4',
          slotLabel: 'Telemetry Input: Feeds Real-Time Device Posture, SIEM Alerts & Threat Intelligence to Control Plane',
          tier: 'Telemetry',
          correctComponentId: 'cdm-siem-feed',
          explanation: 'Continuous Diagnostics and Mitigation (CDM), SIEM, and PKI feeds supply real-time device compliance and threat intelligence to the Policy Engine for adaptive trust evaluation.'
        }
      ],
      componentChoices: [
        {
          id: 'policy-engine',
          label: 'Policy Engine (PE) - Trust Evaluation Brain',
          description: 'Uses a trust algorithm to evaluate access requests against enterprise policy and risk inputs.'
        },
        {
          id: 'policy-admin',
          label: 'Policy Administrator (PA) - Session Controller',
          description: 'Establishes or shuts down the communication path by issuing commands/tokens to the PEP.'
        },
        {
          id: 'pep-gateway',
          label: 'Policy Enforcement Point (PEP) - Data Plane Gatekeeper',
          description: 'Inline proxy/agent that guards the protected resource and enforces per-session access.'
        },
        {
          id: 'cdm-siem-feed',
          label: 'Continuous Diagnostics & Mitigation (CDM) + Threat Intel',
          description: 'Provides real-time endpoint patch status, EDR health, and behavioral telemetry.'
        },
        {
          id: 'split-tunnel-vpn',
          label: 'Legacy Split-Tunnel L2TP VPN Concentrator',
          description: 'Grants broad subnet-level network access without continuous verification.'
        },
        {
          id: 'flat-vlan-hub',
          label: 'Unsegmented Layer 2 Broadcast Domain',
          description: 'Allows unrestricted east-west lateral movement once inside the perimeter.'
        }
      ],
      fullExplanation: 'Zero Trust Architecture (ZTA) Breakdown: 1) Policy Engine (PE) is the decision-making brain in the Control Plane. 2) Policy Administrator (PA) pairs with the PE in the Control Plane to configure the data path and issue ephemeral credentials. 3) Policy Enforcement Point (PEP) resides in the Data Plane to actually broker and terminate client-to-resource traffic. 4) CDM + Threat Intel feeds continuous context into the PE.'
    }
  },
  {
    id: 'pbq-707-ad-logs',
    domainId: 4,
    subtopic: 'Active Directory Identity Attacks & SIEM Log Triage',
    type: 'pbq',
    prompt: 'CompTIA SY0-701 Simulation: Analyze Windows Active Directory & Kerberos authentication logs across four domain systems to detect Kerberoasting and Pass-the-Hash lateral movement, and isolate the compromised hosts.',
    explanation: 'Active Directory attacks leave distinct Event ID signatures: Event ID 4769 with encryption type 0x17 (RC4) across multiple service accounts indicates Kerberoasting; Event ID 4624 Logon Type 3 with NTLM and Sekurlsa/Mimikatz artifacts indicates Pass-the-Hash.',
    pbqData: {
      pbqType: 'log-forensics',
      title: 'PBQ 12: Active Directory Kerberoasting & Pass-the-Hash Triage',
      subtitle: 'Domain 4.0 Identity Telemetry & Lateral Movement Simulation',
      scenario: 'Your SOC received a high-severity Identity Threat Detection & Response (ITDR) alert indicating credential harvesting inside the Windows Active Directory forest. Examine the Windows Security Event Logs across the four domain machines below and isolate ONLY the compromised hosts.',
      instructions: [
        'Inspect the Windows Event IDs and Kerberos/NTLM authentication logs on each tab.',
        'Identify hosts performing Kerberoasting ticket harvesting or Pass-the-Hash lateral movement.',
        'Click "Enact Network Quarantine" on compromised endpoints while keeping legitimate domain systems online.'
      ],
      logHosts: [
        {
          ip: '10.100.4.52',
          hostname: 'CORP-MKT-WK12',
          role: 'Marketing Workstation (User: bturner)',
          status: 'infected',
          isMalicious: true,
          isolationRequired: true,
          logs: [
            '[11:04:12 UTC] EventID 4104 (PowerShell ScriptBlock): Invoke-Kerberoast -OutputFormat Hashcat',
            '[11:04:15 UTC] EventID 4769: Kerberos Service Ticket (TGS) requested for SPN "MSSQLSvc/db01.corp:1433" TicketEncryptionType: 0x17 (RC4-HMAC)',
            '[11:04:16 UTC] EventID 4769: Kerberos Service Ticket (TGS) requested for SPN "HTTP/intranet.corp" TicketEncryptionType: 0x17 (RC4-HMAC)',
            '[11:04:18 UTC] EventID 4769: 42 additional RC4 TGS tickets harvested in 3 seconds for offline cracking'
          ]
        },
        {
          ip: '10.100.2.19',
          hostname: 'SQL-PROD-DB01',
          role: 'Production SQL Server',
          status: 'infected',
          isMalicious: true,
          isolationRequired: true,
          logs: [
            '[11:18:02 UTC] EventID 4624: Successful Logon (LogonType: 3 - Network) Account: "svc_mssql" AuthPackage: NTLM (Pass-the-Hash from 10.100.4.52)',
            '[11:18:19 UTC]Sysmon EventID 10: Process Access -> lsass.exe accessed by C:\\Temp\\sekurlsa_dump.exe (GrantedAccess: 0x1010)',
            '[11:19:05 UTC] EventID 4720: Backdoor local administrator account "support_adm$" created'
          ]
        },
        {
          ip: '10.100.1.10',
          hostname: 'DC-PRIMARY-01',
          role: 'Primary Domain Controller',
          status: 'clean',
          isMalicious: false,
          isolationRequired: false,
          logs: [
            '[11:00:01 UTC] EventID 4768: Kerberos TGT issued to "admin_soc" EncryptionType: 0x12 (AES256-CTS-HMAC-SHA1-96)',
            '[11:05:00 UTC] Defender for Identity Sensor: Active and forwarding telemetry to SIEM',
            '[11:15:00 UTC] Directory Replication: AD DS sync completed with DC-SECONDARY-02 (0 errors)'
          ]
        },
        {
          ip: '10.100.8.33',
          hostname: 'HR-LAPTOP-09',
          role: 'HR Manager Laptop (User: lchen)',
          status: 'clean',
          isMalicious: false,
          isolationRequired: false,
          logs: [
            '[11:02:10 UTC] EventID 4624: LogonType 10 (RemoteInteractive) via Windows Hello for Business FIDO2 PIN',
            '[11:10:44 UTC] HTTPS Outbound: workday.com:443 (TLS 1.3 Verified Session)',
            '[11:20:00 UTC] LSASS Protection: RunAsPPL (Protected Process Light) enabled and enforced'
          ]
        }
      ],
      fullExplanation: 'Compromised Hosts: 1) CORP-MKT-WK12 (10.100.4.52) executed Invoke-Kerberoast and requested dozens of downgraded RC4 (0x17) Kerberos TGS service tickets (Event ID 4769) to crack service account passwords offline. 2) SQL-PROD-DB01 (10.100.2.19) was compromised via NTLM Pass-the-Hash from 10.100.4.52, had its LSASS memory dumped, and had a rogue admin account created. Clean Hosts: DC-PRIMARY-01 (using secure AES256 0x12 Kerberos) and HR-LAPTOP-09 (protected by RunAsPPL and Windows Hello) must remain online.'
    }
  },
  {
    id: 'pbq-708-physical',
    domainId: 1,
    subtopic: 'Physical Security Controls & Data Center Environmental Protection',
    type: 'pbq',
    prompt: 'CompTIA SY0-701 Simulation: Match each physical security or data center threat scenario to the exact physical/environmental control required to prevent or mitigate it.',
    explanation: 'Physical security defense-in-depth combines access control vestibules (mantraps) against tailgating, Faraday cages against EMI/RF leakage, bollards against vehicular ramming, clean-agent FM-200/inert gas fire suppression to protect electronics, and privacy screens against shoulder surfing.',
    pbqData: {
      pbqType: 'threat-matching',
      title: 'PBQ 13: Physical Security & Data Center Defense Matrix',
      subtitle: 'Domain 1.0 & 3.0 Physical & Environmental Controls Simulation',
      scenario: 'You are conducting a physical security audit for a newly constructed Tier 4 Enterprise Data Center and Executive R&D facility. Match each physical vulnerability or threat vector on the left to the best physical/environmental security control on the right.',
      instructions: [
        'Examine each physical threat scenario on the left.',
        'Select the best physical or environmental control from the dropdown options.',
        'Ensure electronics are protected from water damage and unauthorized wireless emanations are blocked.'
      ],
      matchPairs: [
        {
          threat: 'Unauthorized Tailgating / Piggybacking into Server Vault',
          threatDesc: 'An intruder walks closely behind an authorized badge holder to slip through the data center doorway before it closes.',
          correctMitigation: 'Access Control Vestibule (Mantrap) with Dual Interlocking Doors & Weight Sensors'
        },
        {
          threat: 'Electromagnetic Eavesdropping & Rogue Cellular/RF Signals',
          threatDesc: 'Competitors attempt to intercept wireless RF emanations and cellular signals inside the classified cryptographic research room.',
          correctMitigation: 'Faraday Cage / RF Shielded Enclosure'
        },
        {
          threat: 'Server Rack Fire in Unattended Data Center Hall',
          threatDesc: 'An electrical short ignites a server cabinet; extinguishing it with water would destroy millions of dollars of adjacent storage arrays.',
          correctMitigation: 'Clean-Agent Gas Fire Suppression System (FM-200 / Inert Gas)'
        },
        {
          threat: 'Vehicle Ramming Attack Against Glass Building Lobby',
          threatDesc: 'Physical threat actors attempt to drive a heavy vehicle through the main data center perimeter entrance.',
          correctMitigation: 'Reinforced Concrete & Steel Security Bollards'
        },
        {
          threat: 'Visual Shoulder Surfing in Public Airport Lounges',
          threatDesc: 'Passersby view sensitive financial spreadsheets on an executive\'s laptop screen from an angled side view.',
          correctMitigation: 'Polarized Monitor Privacy Screen Filter'
        }
      ],
      matchOptions: [
        'Access Control Vestibule (Mantrap) with Dual Interlocking Doors & Weight Sensors',
        'Faraday Cage / RF Shielded Enclosure',
        'Clean-Agent Gas Fire Suppression System (FM-200 / Inert Gas)',
        'Reinforced Concrete & Steel Security Bollards',
        'Polarized Monitor Privacy Screen Filter',
        'Wet-Pipe Overhead Water Sprinkler System',
        'Chain-Link Perimeter Warning Sign'
      ],
      fullExplanation: '1. Access Control Vestibule (Mantrap) enforces one-person-at-a-time authentication between two interlocking doors to stop tailgating/piggybacking. 2. Faraday Cage blocks incoming and outgoing electromagnetic/RF signals. 3. Clean-Agent Gas Suppression (FM-200/Novec 1230) extinguishes electrical fires without conductive water damage. 4. Bollards stop vehicle ramming attacks. 5. Polarized Privacy Screens black out angled side views to defeat shoulder surfing.'
    }
  },
  {
    id: 'pbq-709-vuln-triage',
    domainId: 4,
    subtopic: 'Vulnerability Management, CVSS Triage & True/False Positive Analysis',
    type: 'pbq',
    prompt: 'CompTIA SY0-701 Simulation: Review an enterprise vulnerability scan report, identify the 4 critical conditions that require immediate emergency patching, and select the best compensating control for a legacy system that cannot be patched.',
    explanation: 'Vulnerability prioritization weighs CVSS score, public internet exposure, active exploitation in the wild (CISA KEV / weaponized exploit), and asset criticality. When a legacy system cannot be patched, network segmentation combined with a WAF/IPS virtual patch serves as a compensating control.',
    pbqData: {
      pbqType: 'password-darkweb',
      title: 'PBQ 14: Vulnerability Scan Triage & Compensating Controls',
      subtitle: 'Domain 4.0 Vulnerability Management & Risk Prioritization Simulation',
      scenario: 'Your vulnerability management team just completed an authenticated credentialed scan across corporate assets. You have limited maintenance window bandwidth this evening, and one legacy medical imaging controller runs a proprietary OS whose vendor went out of business.',
      instructions: [
        'Select the four (4) factors/findings that elevate a vulnerability to Top-Priority Emergency Remediation.',
        'Select the single best Compensating Control for the unpatchable legacy controller.'
      ],
      passwordAudit: [
        {
          id: 'priority-factors',
          title: 'Select the 4 Findings/Factors Requiring Immediate Priority Remediation:',
          category: 'practice',
          options: [
            { id: 'public-facing-rce', text: 'Public Internet-Facing Exposure (Asset sits in the DMZ reachable from 0.0.0.0/0 with a CVSS 9.8 Remote Code Execution flaw)', isCorrect: true },
            { id: 'active-exploitation', text: 'Weaponized Exploit in the Wild (Listed on CISA Known Exploited Vulnerabilities catalog with public Metasploit modules)', isCorrect: true },
            { id: 'mission-critical-asset', text: 'High Asset Criticality (System processes core revenue transactions and stores unmasked regulated PII/PHI)', isCorrect: true },
            { id: 'low-attack-complexity', text: 'Low Attack Complexity & Unauthenticated Network Vector (CVSS vector AV:N/AC:L/PR:N requiring zero user interaction)', isCorrect: true },
            { id: 'false-positive-banner', text: 'Backported Patch Version Mismatch (Scanner flagged Apache version header even though Red Hat backported the security fix)', isCorrect: false },
            { id: 'isolated-dev-low', text: 'Informational CVSS 2.1 Finding on an Offline Air-Gapped Lab Sandbox', isCorrect: false }
          ]
        },
        {
          id: 'legacy-compensating',
          title: 'Select the Best Compensating Control for the Unpatchable Legacy Medical Controller:',
          category: 'solution',
          options: [
            { id: 'segment-virtual-patch', text: 'Isolate the legacy controller in a restricted VLAN with an inline IPS/Firewall enforcing strict allow-listed IP/port rules ("Virtual Patching")', isCorrect: true },
            { id: 'decommission-hospital', text: 'Shut down the hospital medical imaging department permanently until a new building is constructed', isCorrect: false },
            { id: 'connect-public-wifi', text: 'Move the legacy controller onto the public guest Wi-Fi so it is off the main LAN', isCorrect: false },
            { id: 'ignore-risk-forever', text: 'Delete the device from the asset inventory so auditors do not see it', isCorrect: false }
          ]
        }
      ],
      fullExplanation: 'Vulnerability Triage Solution: The 4 high-priority drivers are Public Internet Exposure, Active Weaponized Exploitation in the Wild, High Business Asset Criticality, and Low Attack Complexity with No Privileges Required (AV:N/AC:L/PR:N). Note that a backported patch version mismatch is a classic False Positive! For the unpatchable legacy medical controller, isolating it in a segmented VLAN behind an inline IPS/Firewall ("virtual patching") is the textbook CompTIA Compensating Control.'
    }
  },
  {
    id: 'pbq-710-governance',
    domainId: 5,
    subtopic: 'Third-Party Vendor Risk & Inter-Organizational Agreements',
    type: 'pbq',
    prompt: 'CompTIA SY0-701 Simulation: Match each third-party vendor governance agreement or legal document (SLA, MSA, SOW, ISA, NDA) to its exact business security scenario.',
    explanation: 'CompTIA Domain 5.0 heavily tests third-party legal agreements: NDA protects confidential secrets; SLA defines uptime/response metrics; SOW specifies project deliverables and tasks; MSA provides the umbrella legal terms; ISA governs technical network interconnections.',
    pbqData: {
      pbqType: 'threat-matching',
      title: 'PBQ 15: Third-Party Governance & Legal Agreements Matching',
      subtitle: 'Domain 5.0 Vendor Risk Management & Contracts Simulation',
      scenario: 'Your Legal and GRC (Governance, Risk, and Compliance) teams are onboarding five external vendors and partner agencies. Match each business scenario on the left to the mandatory contract or agreement type on the right.',
      instructions: [
        'Read each vendor onboarding scenario on the left.',
        'Select the exact governance agreement that legally addresses that scenario.',
        'Distinguish carefully between SLA, SOW, MSA, ISA, and NDA.'
      ],
      matchPairs: [
        {
          threat: 'Enforce 99.99% Uptime & 15-Minute Incident Response Penalty Clauses',
          threatDesc: 'Define measurable availability metrics, mean time to respond, and financial credits if the cloud host experiences extended outages.',
          correctMitigation: 'SLA (Service Level Agreement)'
        },
        {
          threat: 'Define Specific Penetration Test Deliverables, Timeline & Scope',
          threatDesc: 'Detail the exact IP ranges to be tested, project milestones, final report format, and fixed cost for a 3-week security engagement.',
          correctMitigation: 'SOW (Statement of Work)'
        },
        {
          threat: 'Securely Connect Two Separate Corporate Networks via Site-to-Site VPN',
          threatDesc: 'Document technical encryption standards, firewall ports, and security responsibilities for a dedicated link between a hospital and an insurance agency.',
          correctMitigation: 'ISA (Interconnection Security Agreement)'
        },
        {
          threat: 'Protect Proprietary Source Code Shared During Pre-Sales Evaluation',
          threatDesc: 'Legally prohibit a prospective consulting firm from disclosing or leaking internal trade secrets and architecture diagrams.',
          correctMitigation: 'NDA (Non-Disclosure Agreement)'
        },
        {
          threat: 'Establish Overarching Multi-Year Legal Terms for Future Work Orders',
          threatDesc: 'Create a foundational umbrella contract covering liability, indemnification, and dispute resolution so future projects can be spun up quickly.',
          correctMitigation: 'MSA (Master Service Agreement)'
        }
      ],
      matchOptions: [
        'SLA (Service Level Agreement)',
        'SOW (Statement of Work)',
        'ISA (Interconnection Security Agreement)',
        'NDA (Non-Disclosure Agreement)',
        'MSA (Master Service Agreement)',
        'AUP (Acceptable Use Policy)',
        'Clean Desk Policy'
      ],
      fullExplanation: '1. SLA defines measurable performance metrics (uptime %, response times, penalties). 2. SOW defines granular project-specific work tasks, deliverables, and timelines. 3. ISA specifies technical security requirements for linking two distinct IT networks. 4. NDA legally binds parties to secrecy regarding confidential information. 5. MSA serves as the overarching umbrella contract governing long-term vendor relationships.'
    }
  }
];

