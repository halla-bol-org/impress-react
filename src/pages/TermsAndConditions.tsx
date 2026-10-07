import { Link } from "react-router";
import { EmailLink, LegalLayout, Placeholder, type LegalSection } from "../components/LegalLayout";
import { company } from "../config";

// Shared details come from config.ts; anything still in [brackets] is highlighted on the page.
const CompanyName = () => <Placeholder>{company.legalName}</Placeholder>;
const Address = () => <Placeholder>{company.address}</Placeholder>;
const SupportEmail = () => <EmailLink address={company.email} />;

const sections: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    content:(
      <>
        <p>
          Your acceptance of these Terms and Conditions (“<strong>Terms</strong>”) is a legal agreement between you (“
          <strong>End-User</strong>”, “<strong>you</strong>” or “<strong>your</strong>”) and the Company. These Terms govern your
          use of the Impress Platform. This document is an electronic record and does not require any physical or digital
          signatures.
        </p>
        <ul>
          <li>
            “<strong>Company</strong>”, “<strong>us</strong>”, “<strong>our</strong>” or “<strong>we</strong>” means <CompanyName />,
            having its registered office at <Address />.
          </li>
          <li>
            “<strong>Impress Platform</strong>” means the Company’s proprietary self-improvement and learning platform called
            ‘Impress’ (whether made available as an application, website, feature or in any other format), which enables you to
            learn and build skills such as communication, confidence, personality, dating and relationship skills, grooming and
            personal style, and fitness through video lessons, audio, courses, exercises, quizzes, challenges and other learning
            content, and to interact with other learners where community features are available.
          </li>
          <li>
            “<strong>Infotech Laws</strong>” means the (Indian) Information Technology Act, 2000 and the rules made under it,
            including the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "about",
    title: "About the Impress Platform",
    content: (
      <>
        <p>
          The Impress Platform may be (i) downloaded and installed by you from a third-party application store; (ii) accessed
          through our website; or (iii) made available to you in any other format we may offer from time to time.
        </p>
        <p>
          Comments, questions, reviews, posts and any other information or materials you contribute to community or public areas
          of the Impress Platform are visible to other users and are deemed non-confidential (except private messages, where
          offered). We encourage you to exercise caution and not to share information, content or materials that are private or
          confidential in nature.
        </p>
        <p>Please read these Terms carefully before downloading, subscribing to, accessing or using the Impress Platform.</p>
      </>
    ),
  },
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: (
      <>
        <p>
          By installing, subscribing to, accessing or using the Impress Platform, you agree to these Terms. If you do not agree
          to these Terms, please do not use the Impress Platform and uninstall it.
        </p>
        <p>
          You must also comply with the software and device licences and the terms of use of the third-party application store or
          platform from which you downloaded the Impress Platform.
        </p>
        <p>
          These Terms incorporate by reference our <Link to="/privacy-policy">Privacy Policy</Link>, the{" "}
          <Link to="/terms-and-conditions/community-guidelines">Community Guidelines</Link> set out below and our{" "}
          <Link to="/refund-policy">Refund &amp; Cancellation Policy</Link>. By using the Impress Platform, you agree to be bound
          by them.
        </p>
        <p>
          These Terms apply to all users of the Impress Platform, including learners who view and access the Content and users
          who contribute Materials:
        </p>
        <ul>
          <li>
            “<strong>Content</strong>” includes the text, software, scripts, graphics, photos, sounds, music, videos, audio-visual
            combinations, lessons, courses, interactive features and other materials that you may view on or access through the
            Impress Platform, including community discussions and other original content.
          </li>
          <li>
            “<strong>Materials</strong>” includes the text, software, scripts, graphics, photos, sounds, music, videos,
            audio-visual combinations, interactive features and other materials and content that you may contribute in any manner
            to the Impress Platform, including comments, questions, reviews, posts, practice submissions and messages.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "Eligibility",
    content: (
      <>
        <p>
          You affirm that you are 16 years of age or above, and competent to enter into the terms, conditions, obligations,
          affirmations, representations and warranties set out in these Terms, and to abide by and comply with them. The Impress
          Platform is not intended for people under 16. If you are under 16 years of age, please do not use the Impress Platform.
        </p>
        <p>
          If you are under 18 years of age, you may use the Impress Platform only with the involvement and consent of your parent
          or legal guardian, who agrees to these Terms on your behalf.
        </p>
        <p>
          You may use the Impress Platform and the Content only in India, where we offer our service. We make no representation
          that the Content or Materials are appropriate or available for use outside India, or that the Impress Platform complies
          with the privacy laws of any other country. Accessing the Impress Platform from territories where the Content is
          illegal is prohibited. If you access the Impress Platform from outside India, you do so on your own initiative and are
          responsible for compliance with local laws.
        </p>
      </>
    ),
  },
  {
    id: "learning-content",
    title: "Learning Content & Disclaimer",
    content: (
      <>
        <p>
          The Content is provided for general educational, informational and self-improvement purposes only. It is not
          professional advice of any kind — including medical, psychological, mental-health, fitness, nutritional,
          relationship-counselling, legal or financial advice — and it does not replace advice from a qualified professional.
        </p>
        <p>
          Fitness, grooming and wellness Content may not be suitable for everyone. Please consult a doctor or other qualified
          professional before starting any exercise, diet or wellness routine, and stop if you feel pain or discomfort.
        </p>
        <p>
          Personal growth depends on many factors, including your own effort and circumstances. We do not guarantee any
          particular outcome, including in your confidence, communication, appearance, fitness or relationships.
        </p>
        <p>
          Some Content is created by experts, coaches, creators or other partners. Their views are their own, and the Company
          does not guarantee the accuracy or completeness of any Content.
        </p>
        <p>
          Dating and relationship Content is meant to help you build respectful, genuine and consensual connections. You must
          never use any Content to harass, stalk, deceive, manipulate, pressure or intimidate anyone, and you must always respect
          other people’s boundaries, consent and privacy.
        </p>
        <p>
          Any progress scores, streaks, badges or certificates offered on the Impress Platform are for motivation and personal
          tracking only and are not accredited qualifications.
        </p>
      </>
    ),
  },
  {
    id: "acknowledgements",
    title: "Acknowledgements",
    content: (
      <>
        <p>You agree and acknowledge that:</p>
        <ul>
          <li>
            The Impress Platform may include third-party Content, advertising information or promotional material (“
            <strong>Third-Party Content</strong>”). The Company is not responsible or liable for any Third-Party Content, or for
            the intellectual property and other proprietary rights in it, and is not responsible for the accuracy of any Content
            you may access or of the Materials. Your use of the Impress Platform, the Third-Party Content, the Materials and the
            Content — including your decision to view, contribute to, interact with or act on them — is at your sole risk and
            discretion.
          </li>
          <li>
            You must make your own independent judgment about (i) any third-party landing pages, websites, applications or phone
            numbers to which the Company redirects you; and (ii) your participation in promotions or interaction with
            Third-Party Content of any advertisers, content providers, e-commerce partners, reward partners or payment
            facilitators, even if you choose to engage with such content on the Impress Platform. We assume no liability for
            these. Your correspondence or business dealings with such third parties — including payment for and delivery of
            related goods or services, and any related terms, conditions, warranties or representations — are solely between
            you and that third party. We urge you to review the terms of use, warranties and licence agreements of any third
            party you interact with.
          </li>
          <li>
            You are responsible for providing, at your own expense, all the equipment and resources needed to use the Impress
            Platform, including a device, software and internet access (and any fees associated with such access). Mobile
            internet transmissions are never completely private or secure, and your use of the Impress Platform may be affected,
            interrupted or disrupted for reasons beyond the Company’s reasonable control. Any message or information you send
            using the Impress Platform may be read or intercepted by others, even if there is a special notice that a particular
            transmission is encrypted.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "account-registration",
    title: "Account Registration & Privacy",
    content: (
      <>
        <p>
          To access certain services or features, you need an account. You may obtain an account only by completing our
          registration process, which asks for certain information, including your phone number, name, age, gender, location and
          the topics you want to learn about (“<strong>Registration Data</strong>”). You will not use another user’s account
          without permission.
        </p>
        <p>
          By registering, you agree that all the information in your Registration Data is true and accurate, and that you will
          keep it current, complete and accurate. If any information you disclose is identified as inaccurate or false, we may
          delete your account and block all your activity on the Impress Platform.
        </p>
        <p>
          You may voluntarily verify your account using an active Indian phone number at the time of registration, or at any time
          by logging out and logging back in.
        </p>
        <p>
          We are not liable for any financial loss or other damage caused by inaccurate information provided by any user. You
          are solely responsible for the activity on your account and must keep your password, if any, secure. You must notify
          the Company immediately of any breach of security or unauthorised use of your account. You may not use your account to
          breach the security of another account or attempt to gain unauthorised access to another network or server. Not all
          areas of the Impress Platform may be available to you or other users. You shall not interfere with anyone else’s use
          and enjoyment of the Impress Platform. Users who violate system or network security may incur criminal or civil
          liability under the law of the land.
        </p>
        <p>
          Some of your Registration Data may be personal information under applicable data privacy laws. To provide the best
          experience, we may also collect certain other information, such as device information, IP address, location data and
          how you use the Impress Platform (for example, the lessons you watch and the topics you choose). You consent to this
          information and your Registration Data being collected, used and processed in accordance with our{" "}
          <Link to="/privacy-policy">Privacy Policy</Link>, which explains how we collect, use and share your data.
        </p>
        <p>
          By providing your Registration Data, you also consent to the Company using it to contact you (including by call, SMS,
          email, WhatsApp, Telegram or other means of communication) to improve our services and to support your learning and
          your use of the Impress Platform. Where the Impress Platform shows personalised advertising, you can disable certain
          features or opt out of targeted advertising in the settings of your device.
        </p>
      </>
    ),
  },
  {
    id: "subscriptions-payments",
    title: "Subscriptions & Payments",
    content: (
      <>
        <p>
          Some Content or features may be offered through paid subscriptions, courses or in-app purchases. The price, billing
          period and what is included will be shown to you before you complete a purchase.
        </p>
        <p>
          Purchases made through a third-party application store are processed by that store and are subject to its terms and
          payment policies.
        </p>
        <p>
          Cancellations and refunds are governed by our <Link to="/refund-policy">Refund &amp; Cancellation Policy</Link>. We may
          change prices or the features included in a paid plan from time to time; where required, we will notify you in
          advance.
        </p>
      </>
    ),
  },
  {
    id: "challenges-rewards",
    title: "Challenges, Contests & Rewards",
    content: (
      <p>
        If you take part in any learning challenge, contest or reward programme on the Impress Platform, your participation is
        subject to the specific terms we notify you of from time to time. We may ask you for additional information to
        communicate with you about it and to disburse rewards (including your postal address, PAN and bank account details), and
        may share that information with our rewards or logistics partners solely for that purpose.
      </p>
    ),
  },
  {
    id: "license-restrictions",
    title: "License & Content Restrictions",
    content: (
      <>
        <h3>License restrictions</h3>
        <p>
          Subject to these Terms, we grant you a personal, limited, non-exclusive, non-transferable and revocable license to use
          the Impress Platform for your own non-commercial learning. Except as expressly set out in these Terms, you agree:
        </p>
        <ul>
          <li>
            not to copy the Impress Platform (including its specific design and user interface), except where such copying is
            incidental to normal use or necessary for back-up or operational security;
          </li>
          <li>not to rent, lease, sub-license, loan, translate, merge, adapt, vary or modify the Impress Platform;</li>
          <li>
            not to make alterations to or modifications of the whole or any part of the Impress Platform, or permit it or any part
            of it to be combined with or incorporated into any other programs, including any root software;
          </li>
          <li>
            not to disassemble, decompile, reverse-engineer or create derivative works based on the whole or any part of the
            Impress Platform, or attempt to do any such thing, except to the extent permitted by applicable law solely because it
            is essential for achieving inter-operability with another software program, and provided that the information you
            obtain:
            <ul>
              <li>is used only for the purpose of achieving inter-operability with another software program;</li>
              <li>is not disclosed or communicated to any third party without our prior written consent; and</li>
              <li>is not used to create any software that is substantially similar to the Impress Platform;</li>
            </ul>
          </li>
          <li>
            not to provide or otherwise make available the Impress Platform, in whole or in part (including object and source
            code), in any form to any person without our prior written consent;
          </li>
          <li>
            to comply with all technology control and export laws and regulations that apply to the technologies used or
            supported by the Impress Platform;
          </li>
          <li>
            not to use the Impress Platform in an unlawful manner, for any unlawful purpose or in any manner inconsistent with
            these Terms, or act fraudulently or maliciously (for example, by hacking into it or inserting malicious code,
            including viruses or harmful data, into the Impress Platform or any operating system), and to remain compliant at all
            times with the laws applicable to your use of the Impress Platform;
          </li>
          <li>
            not to infringe our intellectual property rights or those of any third party, or any license terms, in your use of the
            Impress Platform or any associated service;
          </li>
          <li>
            not to use the Impress Platform in a way that could damage, disable, overburden, impair or compromise our systems or
            security, or interfere with other users; and
          </li>
          <li>
            not to collect or harvest any information or data from the Impress Platform or our systems, or attempt to decipher any
            transmissions to or from the servers running the Impress Platform, including any attempt to sell, resell, broker,
            re-broker, reverse-engineer or make derivative works of such data.
          </li>
        </ul>

        <h3>Content use restrictions</h3>
        <p>
          The Content is provided to you “as is”. All rights not expressly granted to you are reserved by us, our content
          partners and the providers of Third-Party Content. You may access the Content for your information and personal
          learning only, through the functionality of the Impress Platform and as permitted by these Terms. Unless expressly
          permitted by the Impress Platform, you may not:
        </p>
        <ul>
          <li>
            use the Content in an obscene, pornographic, defamatory, disparaging, infringing or otherwise unlawful manner, or in
            violation of any applicable law or any proprietary or privacy right;
          </li>
          <li>use the Content for any commercial, promotional, advertorial, endorsement, advertising or merchandising purpose;</li>
          <li>
            record, screen-capture, share, redistribute, reproduce, download, sub-license, publish, copy, create derivative works
            of, offer for sale or otherwise use any Content (including lessons and courses) or advertising displayed on the
            Impress Platform, unless you are specifically permitted to do so through a feature such as a ‘Share’ or ‘Download’
            button;
          </li>
          <li>share your account or any paid access with anyone else; or</li>
          <li>re-order, re-purpose, modify, edit, obscure or truncate in any way the Content, any advertising or the Impress Platform.</li>
        </ul>
        <p>
          You understand that when using the Impress Platform you may be exposed to Content from a variety of sources, including
          other users, and that the Company is not responsible for the accuracy, usefulness, safety or intellectual property
          rights of or relating to such Content. You further acknowledge that you may be exposed to Content that is inaccurate,
          offensive, indecent or objectionable, and you agree to waive, and hereby waive, any legal or equitable rights or
          remedies you may have against the Company in this respect.
        </p>
      </>
    ),
  },
  {
    id: "your-materials",
    title: "Your Materials & Conduct",
    content: (
      <>
        <p>
          You are solely responsible for your Materials and the consequences of submitting and publishing them on the Impress
          Platform. You affirm, represent and warrant that you own, or have the necessary licenses, rights, consents and
          permissions to publish, the Materials you submit. You may remove your Materials from the Impress Platform at any time,
          and you must remove them if you no longer have the rights required by these Terms.
        </p>
        <p>
          If any Materials you post are sponsored, paid or otherwise promotional, you must clearly label them and include the
          disclaimers and disclosures required by applicable law (including the Infotech Laws), relevant industry guidelines and
          any guidelines of the brands you are promoting.
        </p>
        <p>
          By posting on the Impress Platform or using any comments, community or other interactive features, you agree that you
          will not upload, share, post or otherwise distribute, or facilitate the distribution of, any Materials that breach the{" "}
          <Link to="/terms-and-conditions/community-guidelines">Community Guidelines</Link>, including any Materials that:
        </p>
        <ul>
          <li>
            are unlawful, threatening, abusive, harassing, defamatory, libellous, deceptive, fraudulent, invasive of another
            person’s privacy or otherwise tortious, or contain explicit or graphic descriptions or accounts of sexual acts
            (including sexual language of a violent or threatening nature directed at another individual or group);
          </li>
          <li>
            harm minors in any way, or are grossly harmful, blasphemous, hateful, or racially or ethnically objectionable,
            disparaging, or relate to or encourage money laundering or gambling;
          </li>
          <li>
            victimise, harass, degrade or intimidate an individual or group on the basis of religion, gender, sexual orientation,
            race, ethnicity, age, disability or any other legally protected basis;
          </li>
          <li>
            belong to another person and to which you do not have any right, or infringe any patent, trademark, trade secret,
            copyright, right of publicity, moral right or other proprietary right of any party;
          </li>
          <li>
            constitute unauthorised or unsolicited advertising, junk or bulk messages (“spam”), chain letters, any other form of
            unauthorised solicitation, or any form of lottery or gambling;
          </li>
          <li>
            contain software viruses or any other computer code, files or programs designed or intended to disrupt, damage or
            limit the functioning of any software, hardware or telecommunications equipment, or to damage or obtain unauthorised
            access to any data or other information of any third party;
          </li>
          <li>
            impersonate any person or entity, including any of our employees or representatives, deceive or mislead the addressee
            about the origin of any Content or message, or communicate any information that is grossly offensive or menacing; or
          </li>
          <li>
            threaten the unity, integrity, defence, security or sovereignty of India or any other nation, friendly relations with
            foreign states or public order, incite the commission of any cognisable offence, prevent the investigation of any
            offence, or insult any other nation.
          </li>
        </ul>
        <p>
          You acknowledge that we neither endorse nor assume any liability for the Materials uploaded or submitted by users. We
          have no obligation to pre-screen, monitor or edit Materials, but we may choose to do so to the extent required to comply
          with applicable laws and the Company’s policies and guidelines. We and our agents may, at our sole discretion, remove any
          Materials that, in our judgment, do not comply with these Terms or are otherwise harmful, objectionable or inaccurate.
          We are not responsible for any failure or delay in removing such Materials. You consent to any such removal, waive any
          claim against us arising from it, and agree to indemnify and hold us harmless from any claims based on it. See{" "}
          <Link to="/terms-and-conditions/infringement">Reporting Infringement</Link> for what to do if you believe any Materials on the Impress Platform
          infringe your rights.
        </p>
        <p>
          If the Company reasonably believes that any Materials breach these Terms, applicable laws or any legal or contractual
          obligation of the Company, or may cause harm to the Company, its users or third parties, it may remove or take them
          down at its discretion, without any liability.
        </p>
        <p>
          We may, at any time and at our sole discretion, terminate your account or other affiliation with the Impress Platform,
          without prior notice, for violating these Terms, and remove any Materials you have posted. We cooperate fully with any
          investigation of violations of systems or network security, including with law enforcement authorities investigating
          suspected criminal or civil violations.
        </p>
        <p>
          You retain all of your ownership rights in your Materials. However, by submitting Materials to the Impress Platform, you
          grant the Company a worldwide, non-exclusive, royalty-free, sub-licensable and transferable license, including for
          commercial use, to use, reproduce, distribute, prepare derivative works of, display, modify, re-brand, publish, adapt,
          make available online or electronically transmit, and perform your Materials in connection with the Impress Platform
          and the business of the Company (and its successors and affiliates) and its partners and collaborators — including to
          promote and redistribute part or all of them (and derivative works) in any media format and through any media channel,
          including on the Company’s own platforms, sites and applications (“<strong>Company Properties</strong>”) and on partner
          platforms where they meet those platforms’ content guidelines and technical specifications. Once Materials are shared
          with a third-party partner platform, they are governed by that platform’s terms of use and privacy policy. You also
          grant each user of the Company Properties a non-exclusive license to access your Materials through the Company
          Properties, and to use, reproduce, distribute, display, publish and perform them as permitted by the functionality of
          the Company Properties and these Terms.
        </p>
        <p>
          Subject to applicable laws, including the Infotech Laws, we may at our sole discretion use automated monitoring devices
          or techniques to protect our users from spam, other communications we deem inconsistent with our business purposes,
          and content that breaches the Community Guidelines or these Terms. These tools are not perfect and may affect the
          transmission of both legitimate and unsolicited content and communications. We are not responsible for any legitimate
          Content, Materials or communication that is blocked, or for any unsolicited Content, Materials or communication that is
          not blocked, nor for any information shared between users. We retain your Materials, information and communications
          (including your Registration Data, information collected through your use of the Impress Platform, and photos, videos
          and files) for internal quality monitoring, content moderation and takedown, or as otherwise required under applicable
          laws, including the Infotech Laws.
        </p>
      </>
    ),
  },
  {
    id: "infringement",
    title: "Reporting Infringement",
    content: (
      <>
        <p>
          We view the removal or “take down” of Content from the Impress Platform as a significant step. If you believe your
          copyright or other protected work has been infringed by anything on the Impress Platform, please send us a written
          notification that includes:
        </p>
        <ul>
          <li>a detailed identification of your copyrighted or otherwise protected work that you believe has been infringed;</li>
          <li>
            identification of the specific Content or Materials on the Impress Platform that you claim infringe that work;
          </li>
          <li>your contact information (email address preferred); and</li>
          <li>
            contact information for the owner or administrator of the allegedly infringing Content (email address preferred).
          </li>
        </ul>
        <p>Your notification must also include the following statements, and you must sign it:</p>
        <blockquote>
          “I have a good faith belief that use of the copyrighted materials described in this notification as allegedly
          infringing is not authorised by the copyright owner, its agent or the law.”
        </blockquote>
        <blockquote>
          “I swear, under penalty of perjury, that the information in this notification is accurate and that I am the copyright
          owner, or am authorised to act on behalf of the owner of an exclusive right that is allegedly infringed.”
        </blockquote>
        <p>
          Send the completed, signed notification to <SupportEmail />.
        </p>
      </>
    ),
  },
  {
    id: "trademarks",
    title: "Trademarks & Copyrights",
    content: (
      <p>
        Impress, the Company, the Company’s logo and the other trademarks, service marks, graphics and logos used in connection
        with the Impress Platform are trademarks or registered trademarks of the Company and/or its affiliates. You are not
        granted any right or license with respect to any of them. All copyright in the Impress Platform and, to the extent stated
        in these Terms, the Content belongs to the Company and/or its licensors and content providers, and is protected by
        applicable copyright, trademark and other domestic and international proprietary rights laws. Any violation of these laws
        may result in severe civil and criminal penalties, including monetary damages.
      </p>
    ),
  },
  {
    id: "disclaimer",
    title: "Disclaimer of Warranties",
    content: (
      <>
        <p>Any implied warranties, including those prescribed by statute, are expressly disclaimed.</p>
        <p>
          <strong>
            To the maximum extent permitted by law, the Impress Platform is provided to you “as is”, with all faults, without
            warranty, performance assurance or guarantee of any kind, and your use of it is at your sole risk.
          </strong>{" "}
          The entire risk as to satisfactory quality and performance rests with you. The Company, its affiliates and licensors do
          not make, and hereby disclaim, any and all express, implied or statutory warranties, including implied warranties of
          condition, uninterrupted use, accuracy of data, merchantability, satisfactory quality, fitness for a particular purpose,
          non-infringement of third-party rights, and warranties (if any) arising from a course of dealing, usage or trade
          practice. They do not warrant against interference with your enjoyment of the Impress Platform, or that it will meet
          your requirements, be uninterrupted or error-free, interoperate or be compatible with any other service, or that any
          errors will be corrected. No oral or written advice provided by the Company or any authorised representative creates a
          warranty. Some jurisdictions do not allow the exclusion of, or limitations on, implied warranties or the statutory rights
          of a consumer, so these exclusions and limitations apply only to the fullest extent permitted by law.
        </p>
        <p>
          To the extent the Impress Platform hosts Materials posted by users, the Company acts as an intermediary under the
          Infotech Laws and exercises diligence to the extent those laws require. We do not refer, endorse, recommend, verify,
          evaluate or guarantee any action, outcome or information in connection with the Impress Platform, the Content or the
          Materials, nor do we warrant the validity, accuracy, completeness, safety, legality, quality or applicability of
          anything said, displayed, promoted or provided on it. The Impress Platform is intended for general educational and
          informational purposes, and you are responsible for your own decisions and actions, including when providing any
          Materials.
        </p>
      </>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          <strong>
            In no event will the Company, its affiliates and/or licensors be liable for loss of profits, or for special,
            incidental or consequential damages resulting from the possession, access, use or malfunction of the Impress Platform
          </strong>
          , including damage to property, loss of goodwill, or device failure or malfunction, and, to the extent permitted by law,
          for punitive damages from any cause of action arising out of or related to these Terms, whether in tort (including
          negligence), contract, strict liability or otherwise, and whether or not they have been advised of the possibility of
          such damages. Except as required by applicable law, the total liability of the Company, its affiliates and/or licensors
          for all damages shall not exceed an amount equivalent to five hundred United States dollars (USD 500). These
          limitations do not apply solely to the extent that a specific provision is prohibited by a law that cannot be
          pre-empted.
        </p>
        <p>Nothing in these Terms limits or excludes our liability for:</p>
        <ul>
          <li>death or personal injury resulting from our gross negligence;</li>
          <li>fraud or fraudulent misrepresentation; and</li>
          <li>any other liability that cannot be excluded or limited under applicable law.</li>
        </ul>
      </>
    ),
  },
  {
    id: "termination",
    title: "Termination",
    content: (
      <p>
        These Terms terminate automatically if you fail to comply with them, or if the Company suspects that you have. In that
        event, your access to the Impress Platform may be disabled and you must stop using the Impress Platform, its Content and
        any other Materials comprising it. The Company may, without liability, change, suspend, remove, disable or terminate
        access to the Impress Platform, its Content or Materials, or any of its areas or features, at any time and for any
        reason (including to protect our interests, during an investigation of a suspected violation of these Terms, or after
        finding that a violation has occurred), with or without notice. The Company may also change, modify, update, impose
        limits on, deny or create different access to the Impress Platform or any part of it without prior notice, while
        complying with all applicable privacy laws in doing so.
      </p>
    ),
  },
  {
    id: "indemnity",
    title: "Indemnity",
    content: (
      <>
        <p>
          You agree to defend, indemnify and hold harmless the Company, its affiliates, licensors, third-party partners,
          officers, directors, employees and agents from and against any and all claims, damages, actions, losses, liabilities,
          costs and expenses (including attorneys’ fees) arising from: (i) your use of and access to the Impress Platform, its
          Content and any Materials; (ii) the Materials you contribute; (iii) your violation of any of these Terms; (iv) your
          violation of any other terms, conditions or policies you have accepted; and (v) your violation of any third-party
          rights.
        </p>
        <p>This obligation survives these Terms and your use of the Impress Platform.</p>
      </>
    ),
  },
  {
    id: "events-outside-our-control",
    title: "Events Outside Our Control",
    content: (
      <p>
        We will not be liable or responsible for any failure or delay in performing our obligations under these Terms caused by
        an act or event beyond our reasonable control, including pandemics, epidemics, war, strikes, industrial action,
        lock-outs, government lockdowns or shutdowns, accidents, fire, blockades, terrorism or the threat of terrorism, natural
        catastrophes, or failure of public or private telecommunications networks (an “<strong>Event Outside Our Control</strong>
        ”). If such an event affects the performance of our obligations: (a) our obligations will be suspended, and the time for
        performing them extended, for the duration of the event; and (b) we will use reasonable endeavours to find a way to
        perform our obligations despite it.
      </p>
    ),
  },
  {
    id: "changes-general",
    title: "Changes & General Terms",
    content: (
      <>
        <p>
          These Terms, together with the Privacy Policy and the other policies they incorporate, are the complete agreement
          between you and us about your use of the Impress Platform, and supersede all prior agreements and representations
          between us.
        </p>
        <p>
          The Company may, at its discretion, change, modify, add or remove parts of these Terms. If we make material changes
          that affect your rights and obligations, we will try to notify you and will post the updated Terms on this page. The
          date these Terms were last revised is shown at the top of this page. Subject to any requirement for express consent
          under applicable data privacy laws, your continued use of the Impress Platform after changes take effect means you
          accept them, so please check this page periodically.
        </p>
        <p>
          When you use particular features, services or Materials on the Impress Platform, you are also subject to any rules
          posted for them, which may contain terms in addition to these Terms. All such additional rules are incorporated into
          these Terms by reference.
        </p>
        <p>
          If any provision of these Terms is held to be unenforceable for any reason, it will be reformed only to the extent
          necessary to make it enforceable, and the remaining provisions will not be affected.
        </p>
        <p>
          You may not assign your rights and obligations under these Terms to anyone, and any attempt to do so will be void. We
          may freely assign our rights and obligations under these Terms to any party without your permission.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law & Disputes",
    content: (
      <p>
        Except where applicable local laws provide for exclusive jurisdiction, or where expressly prohibited by applicable law,
        these Terms, their subject matter and their formation are governed by the laws of India. You and we agree that the
        competent courts of India will have non-exclusive jurisdiction.
      </p>
    ),
  },
  {
    id: "community-guidelines",
    title: "Community Guidelines",
    content: (
      <>
        <p>
          We are committed to keeping Impress a safe and respectful place to learn and grow. These Community Guidelines apply,
          alongside these Terms, to everything you post or share on the Impress Platform. Please make sure you have the right to
          post your Materials, and respect other people’s copyrights, trademarks and other legal rights; you are responsible for
          obtaining any licenses and permissions needed for proprietary materials you post.
        </p>
        <p>
          If you violate these Guidelines, the Company may, without prejudice to its other rights and remedies under law, warn
          you, take down the content, and suspend or terminate your account. The consequences depend on the severity of the
          violation and your history on the Impress Platform. We may also involve law enforcement agencies if we believe there is
          a genuine risk of harm or a direct threat to public safety.
        </p>
        <p>
          The following content is not permitted on the Impress Platform. This list is not exhaustive, and you must use
          reasonable and sound judgment in all cases.
        </p>

        <h3>Violent, graphic and obscene content</h3>
        <p>
          We do not permit violent, criminal, dangerous or obscene content directed at any individual, gender or community,
          including content that:
        </p>
        <ul>
          <li>features prolonged name-calling or malicious insults, or is uploaded with the intent to shame, deceive or insult anyone;</li>
          <li>may pose an imminent risk of physical injury to oneself, other people or animals;</li>
          <li>shows pranks that make victims fear imminent serious physical danger, or that cause serious emotional distress;</li>
          <li>shows how to perform activities meant to kill or harm people or animals;</li>
          <li>depicts the abuse of, or gives instructions on how to make, drugs such as cocaine or opioids;</li>
          <li>
            promotes or glorifies violence against people (including minors) or animals, or violent tragedies such as mob
            lynching;
          </li>
          <li>
            shows how to steal money or goods, or how to use technology to steal credentials, compromise personal data or cause
            serious harm to others;
          </li>
          <li>promotes, or is produced by, violent criminal or terrorist organisations;</li>
          <li>
            shows road accidents, natural disasters, the aftermath of war or terrorist attacks, street fights, physical or sexual
            assaults, immolation, torture, corpses, protests or riots, robberies, medical procedures or similar scenes with the
            intent to shock or disgust;
          </li>
          <li>inflicts unnecessary suffering on animals, or encourages or coerces animals to fight;</li>
          <li>depicts nudity, sex, contraceptives or paedophilia, or contains obscene or vulgar language or clothing;</li>
          <li>harms minors in any way, or is grossly harmful or blasphemous;</li>
          <li>is overtly political or religious; or</li>
          <li>relates to illegal activities such as hacking or anti-national activities.</li>
        </ul>

        <h3>Regulated goods</h3>
        <ul>
          <li>
            Promoting or selling alcohol, tobacco, currency, organs, endangered species or their parts, pharmaceuticals without a
            prescription, sex or escort services, unlicensed medical services, human smuggling or historical artefacts.
          </li>
          <li>Promoting or selling firearms, ammunition, explosives, magazines and the like.</li>
          <li>Promoting any illegal activities, gambling, vices or goods.</li>
        </ul>

        <h3>Spam, fraud and deception</h3>
        <ul>
          <li>Content that deceives, misleads or manipulates its viewers, or incentivises spam.</li>
          <li>Scams, such as offers of cash gifts or quick-money schemes.</li>
          <li>Content made to look as if it is posted by someone else, or that otherwise impersonates any person or entity.</li>
          <li>Misinformation spread through fake or hoax news.</li>
        </ul>

        <h3>Hate speech, bullying and harassment</h3>
        <ul>
          <li>
            Content that disparages, is hateful or racially or ethnically objectionable, or dehumanises an individual or group on
            the basis of religion, race, national origin or sexual orientation.
          </li>
          <li>Statements that degrade an individual or group using targeted curse words, slurs or sexualised terms.</li>
          <li>Mocking people for their occupation or socio-economic condition.</li>
          <li>Racial slurs, or comparing people with animals or serious diseases.</li>
          <li>Praising, celebrating or mocking the death of private individuals.</li>
          <li>Negative physical descriptions of a private individual, or describing body parts in an explicit, obscene or hurtful way.</li>
        </ul>

        <h3>Disrespectful dating and relationship conduct</h3>
        <ul>
          <li>
            Content that promotes manipulating, pressuring, stalking or harassing a romantic interest, or ignoring anyone’s
            consent or boundaries.
          </li>
          <li>Content that objectifies or degrades any person.</li>
        </ul>

        <h3>Privacy violations</h3>
        <ul>
          <li>
            Content that contains or shares the personal or private data of any individual, such as phone numbers, personal IDs,
            or images of money transactions that show bank account numbers or digital payment details of a private individual.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "contact",
    title: "Grievance Redressal & Contact",
    content: (
      <>
        <ul>
          <li>
            <strong>Customer support:</strong> for any questions about our services and features, or if you need help with the
            Impress Platform, write to us at <SupportEmail />.
          </li>
          <li>
            <strong>Data privacy:</strong> to ask questions about data privacy or our privacy practices, or to exercise any data
            subject rights available to you under applicable privacy laws, email us at{" "}
            <EmailLink address={company.privacyEmail} />.
          </li>
          <li>
            <strong>Grievance Officer:</strong> if you see something objectionable or offensive, or that adversely affects you or
            your community, report it to our Grievance Officer, <Placeholder>{company.grievanceOfficer}</Placeholder>, at{" "}
            <SupportEmail /> with the relevant details of your complaint or concern. Reporting content does not guarantee that it
            will be removed, but we are committed to creating a safe environment and will consider all genuine grievances.
          </li>
          <li>
            <strong>Physical address for communications under the Infotech Laws:</strong> <CompanyName />, registered office at{" "}
            <Address />.
          </li>
          <li>
            <strong>Chief Compliance Officer</strong> (for ensuring compliance with the Infotech Laws): <SupportEmail />.
          </li>
          <li>
            <strong>Nodal Contact Officer</strong> (for 24×7 coordination with law enforcement agencies and officers to ensure
            compliance with their orders or requisitions under applicable law): <SupportEmail />.
          </li>
        </ul>
        <p>
          <strong>Government communications and court orders:</strong> under the Infotech Laws, orders from a court of competent
          jurisdiction or an appropriate government or its agency, for takedown or any other purpose, should be addressed to the
          Nodal Contact Officer, with a copy to the Grievance Officer and the Chief Compliance Officer (contact details above).
        </p>
      </>
    ),
  },
];

export function TermsAndConditions() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      metaDescription={`The terms that govern your use of Impress, the self-improvement and learning platform by ${company.legalName}.`}
      lastUpdated="6 October 2026"
      intro={
        <p>
          These Terms are a legal agreement between you and <CompanyName />. Please read them carefully before downloading,
          subscribing to, accessing or using Impress.
        </p>
      }
      sections={sections}
    />
  );
}
