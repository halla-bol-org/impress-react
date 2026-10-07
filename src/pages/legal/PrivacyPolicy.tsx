import { Link } from "react-router";
import { EmailLink, LegalLayout, Placeholder, type LegalSection } from "./LegalLayout";
import { company } from "@/config";

const CompanyName = () => <Placeholder>{company.legalName}</Placeholder>;
const PrivacyEmail = () => <EmailLink address={company.privacyEmail} />;

const sections: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    content: (
      <>
        <p>
          <CompanyName /> (“<strong>we</strong>”, “<strong>our</strong>”, “<strong>us</strong>”) respects your privacy and is
          committed to protecting it. Please read this privacy policy (“<strong>Policy</strong>”) carefully to understand our
          practices regarding your personal information. By installing, accessing or using the Impress App, you give your express
          consent to be governed by this Policy.
        </p>
        <p>
          In this Policy, “<strong>Impress App</strong>” means the Company’s proprietary self-improvement and learning platform
          called ‘Impress’ (including the mobile application, website or any other format in which it is made available), which
          enables users to learn and build skills such as communication, confidence, personality, dating and relationship skills,
          grooming and fitness through video lessons, audio, courses, exercises and other learning content.
        </p>
        <p>
          This Policy sets out, among other things: (i) the types of personal information we collect when you install and use the
          Impress App; (ii) how we use that information; (iii) the purposes for which we collect it; and (iv) how we disclose it.
        </p>
        <p>
          If you do not agree with this Policy, you must immediately stop accessing the Impress App. Your continued access to the
          Impress App indicates your acceptance of this Policy. This Policy forms part of our{" "}
          <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>.
        </p>
      </>
    ),
  },
  {
    id: "scope",
    title: "Scope of this Policy",
    content: (
      <p>
        This Policy applies only to information we obtain from you through the Impress App. It does not apply to information we
        may obtain from other sources that share your information under their own privacy policies, to other websites or landing
        pages you may reach through the Impress App, to your direct interactions with any third party (including other users,
        experts or partners), or to information you provide to, or that is collected by, any third party. We encourage you to
        read the privacy policies of any third parties you interact with.
      </p>
    ),
  },
  {
    id: "information-you-give-us",
    title: "Information You Give Us",
    content: (
      <>
        <p>
          When you install, launch or use the Impress App, we will ask for certain information to create your account, such as
          your name, phone number, email address, gender, age, profile picture and location (city or state). We also ask you to
          choose the topics you want to improve, such as dating skills, conversation skills, personality, confidence, grooming or
          fitness, so that we can personalise your feed.
        </p>
        <p>
          You may choose not to provide some of this information, although some features may then not work as intended. You can
          share your location either by allowing the Impress App to detect it or by entering your city or state manually.
        </p>
        <p>
          If you use community features, contact us, take part in a challenge or contest, or make a purchase, we also collect the
          information you provide in doing so — for example comments, questions, reviews or practice submissions, messages to our
          support team, and the details needed to deliver rewards or process payments.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect-automatically",
    title: "Information We Collect Automatically",
    content: (
      <>
        <p>When you use the Impress App, we may collect:</p>
        <ul>
          <li>
            details of your access to and use of the Impress App, including interaction data, access and usage logs, performance
            data, and the lessons, videos and other content you view, watch or interact with, and your learning progress;
          </li>
          <li>
            information about your device, such as online device identifiers, advertising identifiers, device make, IP address,
            display features, operating system, browser type and network or Wi-Fi type.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies & Similar Technologies",
    content: (
      <>
        <p>
          We may use cookies or pixels (including mobile cookies and pixels). A cookie is a small file placed on your device. You
          may be able to refuse or accept cookies through the settings on your device or browser; if you refuse them, you may be
          unable to access certain features of the Impress App.
        </p>
        <p>
          Pages of the Impress App may also contain small files known as beacons (also called clear gifs, pixel tags or
          single-pixel gifs) that help us improve our services — for example, by recording the popularity of certain content and
          verifying system and server integrity.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    title: "How We Use Your Information",
    content: (
      <>
        <p>We (and our partners) may use the information we collect about you, or that you provide, to:</p>
        <ul>
          <li>provide you with the Impress App, its features and its content, including lessons, videos, audio and offers;</li>
          <li>personalise your feed and recommendations based on the topics you choose and how you use the Impress App;</li>
          <li>notify you about relevant updates or upgrades to the Impress App;</li>
          <li>estimate our audience size and usage patterns, and optimise your searches;</li>
          <li>
            enrich data and build custom audience segments or merged data sets (using the data described in this Policy and/or
            data sets provided by third parties) so that we can offer our services better;
          </li>
          <li>
            improve our customer service and account maintenance, including to detect, deter and prevent fraud or fraudulent
            traffic and to protect the security of our systems; and
          </li>
          <li>
            make disclosures in the event of a merger, sale, other asset transfer or other corporate transaction. If we are
            involved in a merger, acquisition, financing due diligence, reorganisation, bankruptcy, receivership, purchase or sale
            of assets, or transition of service to another provider, your information may be sold or transferred as part of that
            transaction, as permitted by law and/or contract
          </li>
        </ul>
        <p>(together, the “<strong>Permitted Purposes</strong>”).</p>
      </>
    ),
  },
  {
    id: "disclosure",
    title: "Disclosure of Your Information",
    content: (
      <>
        <p>
          We do not sell your personal information. We may disclose aggregated information about our users, and information that
          does not identify any individual or device. For the Permitted Purposes, we may also disclose information we collect or
          that you provide:
        </p>
        <ul>
          <li>to our key shareholders, board and investors (debt or equity); and</li>
          <li>
            for legal purposes: we may access, preserve and disclose information associated with you to external parties if we
            believe in good faith that doing so is required or appropriate to comply with law enforcement or national security
            requests and legal process (such as a court order or subpoena); protect your, our or others’ rights, property or
            safety; enforce our policies or contracts; or assist with an investigation or prosecution of suspected or actual
            illegal activity.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "your-choices",
    title: "Your Choices",
    content: (
      <>
        <p>
          We aim to give you choices about the information you provide to us. You may stop using or uninstall the Impress App at
          any time.
        </p>
        <ul>
          <li>
            <strong>Personal information:</strong> you may choose not to provide optional information, such as your gender or
            email address, by selecting ‘Skip’ when asked for it.
          </li>
          <li>
            <strong>Location:</strong> you can choose whether to let the Impress App detect your location, or enter your city or
            state manually instead.
          </li>
          <li>
            <strong>Tracking technologies:</strong> you can set your browser or device to refuse all or some cookies, to alert you
            when cookies are being sent, or to disable certain features. If you do, some parts of the Impress App may not be
            accessible or may not work properly.
          </li>
          <li>
            <strong>Emails:</strong> you can unsubscribe from non-transactional emails from Impress at any time using the
            ‘Unsubscribe’ option at the bottom of each such email.
          </li>
        </ul>
        <p>
          The submission of your information to the Impress App and your acceptance of this Policy will override any registration
          of your mobile number with the National Do Not Call Registry of the Telecom Regulatory Authority of India, or any other
          Do Not Call registry, for communications from us.
        </p>
      </>
    ),
  },
  {
    id: "data-storage-security",
    title: "Data Storage & Security",
    content: (
      <>
        <p>
          We have implemented suitable technical and organisational measures to secure your personal information in line with our
          legal and privacy requirements. Your data is stored on private servers hosted in India (Mumbai region), and no database
          server is accessible from any public IP address.
        </p>
        <p>
          However, no method of transmission over the internet or of electronic storage is completely secure, and we cannot
          guarantee absolute security.
        </p>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content: (
      <p>
        We retain your information for as long as necessary to continue providing you with access to the Impress App, and as
        otherwise required by law or applicable contract. After the applicable retention period, we may retain and use data in an
        aggregated form as necessary for internal analysis, to comply with our legal obligations, to resolve disputes and to
        enforce our agreements.
      </p>
    ),
  },
  {
    id: "childrens-privacy",
    title: "Children's Privacy",
    content: (
      <p>
        The Impress App is not intended for people under 16 years of age, and we do not knowingly collect personal information
        from them. Users aged 16 or 17 may use the Impress App only with the involvement and consent of a parent or legal guardian,
        as set out in our <Link to="/terms-and-conditions/eligibility">Terms &amp; Conditions</Link>. If you believe a child under
        16 has provided us with personal information, please contact us at <PrivacyEmail /> and we will take appropriate steps to
        delete it.
      </p>
    ),
  },
  {
    id: "your-content",
    title: "Your Content & Community Features",
    content: (
      <>
        <p>
          Where the Impress App offers community features, anything you post — such as comments, questions, reviews or practice
          submissions — is shown to other users together with your name and profile picture (if you have added one), and is
          collected and stored by us. You own the content you post; please think carefully before sharing personal details in it.
        </p>
        <p>
          We are not liable for any harm or damage caused by information that users choose to share publicly within the Impress
          App.
        </p>
      </>
    ),
  },
  {
    id: "payments",
    title: "Payments & Refunds",
    content: (
      <p>
        If you make a purchase, payments made through a third-party application store are processed by that store under its own
        privacy policy; we receive only the information needed to confirm and manage your purchase. Cancellations and refunds are
        covered by our <Link to="/refund-policy">Refund &amp; Cancellation Policy</Link>.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this Policy",
    content: (
      <p>
        We may update this Policy from time to time. If we make any material changes, we will notify you through a notice in the
        Impress App before the change takes effect. The date of the latest revision is shown at the top of this page. Please check
        this Policy regularly to make sure you have read the latest version.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    content: (
      <>
        <p>
          If you have any questions about this Policy or the security of your personal information, or any concerns, requests or
          comments, please contact our Data Protection Officer, <Placeholder>{company.dataProtectionOfficer}</Placeholder>, at{" "}
          <PrivacyEmail />.
        </p>
        <p>
          <strong>
            <CompanyName />
          </strong>
          <br />
          <Placeholder>{company.address}</Placeholder>
          <br />
          Email: <PrivacyEmail />
        </p>
      </>
    ),
  },
];

export function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      metaDescription="How Impress collects, uses and protects your information."
      lastUpdated="6 October 2026"
      intro={<p>Your privacy matters to us. This Policy explains what information we collect, why, and the choices you have.</p>}
      sections={sections}
    />
  );
}
