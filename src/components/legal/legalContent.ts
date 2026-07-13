export type LegalBlock =
  | { type: 'p'; text: string }
  | { type: 'list'; items: readonly string[] }
  | { type: 'subhead'; text: string }
  | { type: 'callout'; text: string }

export interface LegalSection {
  id: string
  title: string
  blocks: readonly LegalBlock[]
}

export interface LegalDocument {
  slug: 'privacy' | 'terms'
  eyebrow: string
  title: string
  lastUpdated: string
  lead: string
  sections: readonly LegalSection[]
  related: { label: string; href: string }
}

export const PRIVACY_DOCUMENT: LegalDocument = {
  slug: 'privacy',
  eyebrow: 'Legal',
  title: 'Privacy Policy',
  lastUpdated: 'April 08, 2024',
  lead: 'How Gutsphere collects, uses, and protects your information when you use our website, apps, and services.',
  related: { label: 'Terms and Conditions', href: '/terms' },
  sections: [
    {
      id: 'introduction',
      title: 'Introduction',
      blocks: [
        {
          type: 'p',
          text: 'Gutsphere, its subsidiaries, and affiliated entities ("Gutsphere", "we", "us", or "our") proudly offer the www.gutsphere.com website, any related applications, platforms, and technologies, including content and services provided through them (collectively referred to as the "Service"). This Privacy Policy governs your access and use of the Service, detailing our commitment to protecting your privacy.',
        },
        {
          type: 'p',
          text: 'By registering, logging into an account, or otherwise using the Service, you acknowledge and consent to the practices described in this Privacy Policy. Should we update our Privacy Policy, we will post the revised document here, along with an updated revision date.',
        },
      ],
    },
    {
      id: 'minors',
      title: 'Limitations on Use by Minors',
      blocks: [
        {
          type: 'p',
          text: 'The Service is not targeted towards individuals under the age of eighteen (18). We do not knowingly collect personal information from children under the age of thirteen (13). If a parent or guardian learns that their child has provided us with personal information without their consent, they should contact us at gutsphere@gmail.com. We will delete such information from our files as quickly as possible.',
        },
      ],
    },
    {
      id: 'information-you-provide',
      title: 'Information You Provide Directly',
      blocks: [
        {
          type: 'list',
          items: [
            'Personal and Contact Information: Includes your name, email address, telephone number, and any other information you choose to provide us.',
            'Demographic Information: Your age, gender, and any other demographic information you choose to share with us.',
            'Health Information: While we are not a healthcare provider, you may choose to share information about your GI health for personalized use of our self-help tools. Note, this information is treated with strict confidentiality and is used solely to enhance your experience with our Service.',
            'Account Information: When you create an account, we collect your username, password, and other details necessary for account creation and access.',
          ],
        },
      ],
    },
    {
      id: 'information-automatic',
      title: 'Information Collected Automatically',
      blocks: [
        {
          type: 'list',
          items: [
            'Device and Usage Information: We collect information about how you access our Service, including information about the device and browser you use, your network connection, your IP address, and how you interact with our Service.',
            'Cookies and Tracking Technologies: We use cookies and similar tracking technologies to collect information about your interaction with our Service, preferences, and to personalize your experience.',
          ],
        },
      ],
    },
    {
      id: 'third-party',
      title: 'Information from Third-Party Sources',
      blocks: [
        {
          type: 'p',
          text: 'We may receive additional information about you from third-party sources, such as social media platforms, market research partners, and publicly available sources.',
        },
      ],
    },
    {
      id: 'use',
      title: 'Use of Information',
      blocks: [
        {
          type: 'list',
          items: [
            'Provide, maintain, and improve our Service',
            'Personalize your experience',
            'Communicate with you about the Service, including updates, security alerts, and support messages',
            'Respond to your inquiries and fulfill your requests',
            'Conduct research and analysis to understand our users and improve our Service',
            'Ensure the security and integrity of our Service',
            'Comply with legal obligations and protect the rights and safety of Gutsphere and its users',
          ],
        },
      ],
    },
    {
      id: 'disclosure',
      title: 'Disclosure of Information',
      blocks: [
        {
          type: 'p',
          text: 'We may share your information with:',
        },
        {
          type: 'list',
          items: [
            'Subsidiaries and affiliates for operational purposes',
            'Service providers who perform services on our behalf',
            'Partners in co-branded or collaborative offerings',
            'Legal and regulatory authorities as required by law',
          ],
        },
      ],
    },
    {
      id: 'international',
      title: 'International Data Transfer',
      blocks: [
        {
          type: 'p',
          text: 'Gutsphere operates globally, and we may transfer, store, and process your information in countries other than your own. By using the Service, you consent to the transfer of your information to facilities located elsewhere, including the United States, and the use and disclosure of information about you as described in this Privacy Policy.',
        },
      ],
    },
    {
      id: 'rights',
      title: 'Your Rights and Choices',
      blocks: [
        {
          type: 'p',
          text: 'You have certain rights and choices regarding the personal information we collect and use about you:',
        },
        {
          type: 'list',
          items: [
            'Access and Correction: You can request access to and ask us to correct the personal information we hold about you.',
            'Deletion: You may request that we delete your personal information, subject to certain exceptions.',
            'Object to or Restrict Use: You can ask us to stop using all or some of your personal information or to limit our use of it.',
            'Data Portability: Where applicable, you may request a copy of your personal information in a structured, electronic format.',
          ],
        },
        {
          type: 'p',
          text: 'Please note, these rights are subject to applicable law and may be limited in some circumstances. To exercise these rights, please contact us as specified in the "Contact Us" section below.',
        },
      ],
    },
    {
      id: 'retention',
      title: 'Data Retention',
      blocks: [
        {
          type: 'p',
          text: 'We retain personal information for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, regulatory, tax, accounting, or reporting requirements. In determining the appropriate retention period for personal information, we consider the amount, nature, and sensitivity of the personal information, the potential risk of harm from unauthorized use or disclosure, the purposes for which we process your personal information, and whether those purposes can be achieved through other means, as well as applicable legal requirements.',
        },
      ],
    },
    {
      id: 'security',
      title: 'Security',
      blocks: [
        {
          type: 'p',
          text: 'We employ a variety of security measures designed to protect the personal information we collect, both during transmission and once we receive it. However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.',
        },
      ],
    },
    {
      id: 'changes',
      title: 'Changes to Our Privacy Policy',
      blocks: [
        {
          type: 'p',
          text: 'We may update this Privacy Policy from time to time. The "Last Updated" date at the top of this Privacy Policy will indicate when it was last revised. We encourage you to review this Privacy Policy frequently to be informed of how we are protecting your information.',
        },
      ],
    },
    {
      id: 'contact',
      title: 'Contact Us',
      blocks: [
        {
          type: 'p',
          text: 'If you have any questions about this Privacy Policy or our privacy practices, please contact us at gutsphere@gmail.com or via our contact page at www.gutsphere.com/contact-us.',
        },
        {
          type: 'p',
          text: 'Please include your name, contact information, and a detailed description of your request or privacy concern.',
        },
      ],
    },
  ],
}

export const TERMS_DOCUMENT: LegalDocument = {
  slug: 'terms',
  eyebrow: 'Legal',
  title: 'Terms and Conditions',
  lastUpdated: 'April 08, 2024',
  lead: 'The terms that govern your use of Gutsphere’s website, applications, and digestive-health services.',
  related: { label: 'Privacy Policy', href: '/privacy' },
  sections: [
    {
      id: 'welcome',
      title: 'Welcome to Gutsphere',
      blocks: [
        {
          type: 'p',
          text: 'Your use of Gutsphere\'s services (referred to collectively as the "Services" in this document) is subject to the terms and conditions outlined below. By accessing, browsing, or using our website, applications, services, or any associated content provided by Gutsphere, Inc., or its affiliates ("Gutsphere," "we," "us," or "our"), you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions (the "Agreement").',
        },
      ],
    },
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      blocks: [
        {
          type: 'p',
          text: 'By clicking "I Agree," checking a related box to signify your acceptance, using any other acceptance protocol presented through the Service, or otherwise affirmatively accepting these Terms and Conditions, you enter into a binding contract with Gutsphere. If you do not agree to these Terms and Conditions, do not access, create an account, or use the Service.',
        },
      ],
    },
    {
      id: 'service-description',
      title: 'Service Description',
      blocks: [
        {
          type: 'p',
          text: 'Gutsphere provides tools and resources designed to support individuals managing digestive health conditions. Services include but are not limited to:',
        },
        {
          type: 'list',
          items: [
            'Access to educational articles and videos',
            'Personalized dietary planning tools',
            'Symptom tracking functionalities',
            'Community forums for support and discussion',
          ],
        },
      ],
    },
    {
      id: 'emergency',
      title: 'Emergency Disclaimer',
      blocks: [
        {
          type: 'callout',
          text: 'THE SERVICES ARE NOT DESIGNED FOR MEDICAL EMERGENCIES. IF YOU ARE EXPERIENCING A MEDICAL EMERGENCY, PLEASE DIAL 911 IMMEDIATELY. Gutsphere\'s Services are intended to support, not replace, the existing doctor-patient relationship.',
        },
      ],
    },
    {
      id: 'modifications',
      title: 'Modifications to Terms',
      blocks: [
        {
          type: 'p',
          text: 'Gutsphere reserves the right, at our discretion, to change, modify, add, or remove portions of these Terms at any time. Please check these Terms periodically for changes. Your continued use of the Services following the posting of changes will mean that you accept and agree to the changes.',
        },
      ],
    },
    {
      id: 'communication',
      title: 'Communication',
      blocks: [
        {
          type: 'p',
          text: 'By registering with Gutsphere, you agree to receive communications that are integral to our services, which include:',
        },
        {
          type: 'list',
          items: [
            'Health Updates and Reminders: Essential notifications about colonoscopy preparation steps, dietary advice, appointment reminders, and other health management information critical to your care plan.',
            'Educational Content: Informational guides, checklists, and articles designed to empower you with knowledge about gastrointestinal health care and preventative practices.',
            'Service Updates: Notifications about changes to our platform, new features, maintenance schedules, or availability updates to ensure you\'re informed about how our services evolve.',
            'Occasional Promotional Communications: Updates about new services, special offers, events, partnerships, or promotions that may be of interest to you as part of the Gutsphere community.',
          ],
        },
        {
          type: 'subhead',
          text: 'Managing Your Preferences',
        },
        {
          type: 'p',
          text: 'You have control over your communication preferences. At any time, you can adjust these settings in your account dashboard to tailor how you receive messages from us. Should you decide you do not wish to receive promotional communications, you can opt out directly through the unsubscribe options provided in such messages.',
        },
        {
          type: 'p',
          text: 'Please note, opting out of certain communications, particularly Health Updates and Reminders, may affect the full functionality of the Gutsphere service in assisting with your gastrointestinal health management.',
        },
      ],
    },
    {
      id: 'eligibility',
      title: 'User Eligibility',
      blocks: [
        {
          type: 'p',
          text: 'The Services are available only to individuals who are at least 18 years of age and capable of forming legally binding contracts under applicable law. By using the Services, you represent and warrant that you are eligible.',
        },
      ],
    },
    {
      id: 'account-security',
      title: 'Account Security',
      blocks: [
        {
          type: 'p',
          text: 'You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer or device. You agree to accept responsibility for all activities that occur under your account or password.',
        },
      ],
    },
    {
      id: 'ip',
      title: 'Intellectual Property Rights',
      blocks: [
        {
          type: 'p',
          text: 'All content, trademarks, logos, and service marks displayed on the Services are our property or the property of other third parties. You are not permitted to use these marks without our prior written consent or the consent of such third party that may own the marks.',
        },
      ],
    },
    {
      id: 'privacy',
      title: 'Privacy',
      blocks: [
        {
          type: 'p',
          text: "Your use of the Services is subject to Gutsphere's Privacy Policy, which governs our collection and use of your personal information. By using our Services, you consent to the data practices stated in the Privacy Policy.",
        },
      ],
    },
    {
      id: 'obligations',
      title: 'User Obligations',
      blocks: [
        {
          type: 'p',
          text: "You agree to use Gutsphere's services for your personal, non-commercial use. You must provide accurate and current information about yourself when registering for services and keep this information up to date.",
        },
      ],
    },
    {
      id: 'conduct',
      title: 'User Conduct',
      blocks: [
        {
          type: 'p',
          text: 'You agree not to use the Services to:',
        },
        {
          type: 'list',
          items: [
            'Transmit any content that is unlawful, harmful, threatening, abusive, or otherwise objectionable.',
            'Impersonate any person or entity, including Gutsphere or its employees.',
            'Engage in any activities that could damage, disable, overburden, or impair any Gutsphere server, or the network(s) connected to any Gutsphere server.',
            'Attempt to gain unauthorized access to any parts of the Services, other accounts, computer systems, or networks connected to any Gutsphere server.',
          ],
        },
      ],
    },
    {
      id: 'arbitration',
      title: 'Arbitration Agreement',
      blocks: [
        {
          type: 'p',
          text: 'By agreeing to these Terms, you agree that any dispute or claim relating in any way to your use of the Services will be resolved through binding arbitration, rather than in court, except for certain small claims. You also waive any right to participate in class actions or class-wide arbitration.',
        },
      ],
    },
    {
      id: 'payments',
      title: 'Payments and Subscriptions',
      blocks: [
        {
          type: 'subhead',
          text: 'Fees and Payments',
        },
        {
          type: 'p',
          text: "You agree to pay all fees or charges to your account based on Gutsphere's fees, charges, and billing terms in effect at the time a fee or charge is due and payable. By providing Gutsphere with your payment information, you agree that Gutsphere is authorized to invoice and charge your account for all applicable fees and charges.",
        },
        {
          type: 'subhead',
          text: 'Subscription Services',
        },
        {
          type: 'p',
          text: 'Gutsphere may offer subscription-based services. By subscribing, you authorize Gutsphere to charge your payment method on a recurring basis for the subscription service until you cancel. You may cancel your subscription at any time, subject to the terms of our cancellation policy.',
        },
      ],
    },
    {
      id: 'dispute-resolution',
      title: 'Dispute Resolution',
      blocks: [
        {
          type: 'subhead',
          text: 'Binding Arbitration',
        },
        {
          type: 'p',
          text: 'Any disputes under these Terms that cannot be resolved via our internal processes will be settled by binding arbitration administered by the American Arbitration Association under its Commercial Arbitration Rules. Judgment on the award rendered by the arbitrator(s) may be entered in any court having jurisdiction thereof.',
        },
        {
          type: 'subhead',
          text: 'Class Action Waiver',
        },
        {
          type: 'p',
          text: 'You agree to waive any right to participate in class actions, class arbitrations, or any consolidation of individual arbitrations against Gutsphere.',
        },
      ],
    },
    {
      id: 'general',
      title: 'General Provisions',
      blocks: [
        {
          type: 'subhead',
          text: 'Limitation of Liability',
        },
        {
          type: 'p',
          text: 'Gutsphere, its affiliates, and its Providers will not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Services or these Terms.',
        },
        {
          type: 'subhead',
          text: 'Indemnification',
        },
        {
          type: 'p',
          text: 'You agree to indemnify, defend, and hold harmless Gutsphere, its officers, directors, employees, agents, licensors, and suppliers from and against all losses, expenses, damages, and costs, including reasonable attorneys\' fees, resulting from any violation of these Terms or any activity related to your account (including negligent or wrongful conduct) by you or any other person accessing the Services using your account.',
        },
        {
          type: 'subhead',
          text: 'Termination',
        },
        {
          type: 'p',
          text: 'Gutsphere reserves the right, in its sole discretion, to terminate your access to all or part of the Services, with or without notice, for any reason or no reason, including without limitation for breach of these Terms.',
        },
        {
          type: 'subhead',
          text: 'Governing Law',
        },
        {
          type: 'p',
          text: 'These Terms and your use of the Services will be governed by and construed in accordance with the laws of the jurisdiction in which Gutsphere operates, without giving effect to any choice or conflict of law provision or rule.',
        },
        {
          type: 'subhead',
          text: 'Entire Agreement',
        },
        {
          type: 'p',
          text: 'These Terms constitute the entire agreement between you and Gutsphere regarding the use of the Services, superseding any prior agreements between you and Gutsphere relating to your use of the Services.',
        },
      ],
    },
    {
      id: 'contact',
      title: 'Contact Information',
      blocks: [
        {
          type: 'p',
          text: 'For any questions or concerns about these Terms, please contact us at gutsphere@gmail.com.',
        },
      ],
    },
  ],
}
