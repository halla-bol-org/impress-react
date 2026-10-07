import { Link } from "react-router";
import { EmailLink, LegalLayout, Placeholder, type LegalSection } from "./LegalLayout";
import { company } from "@/config";

const CompanyName = () => <Placeholder>{company.legalName}</Placeholder>;
const SupportEmail = () => <EmailLink address={company.email} />;

const sections: LegalSection[] = [
  {
    id: "subscription-digital-services",
    title: "Subscription and Digital Services",
    content: (
      <>
        <p>Impress provides digital services and premium features through the Impress App. These may include:</p>
        <ul>
          <li>premium membership plans;</li>
          <li>premium lessons, courses and learning content;</li>
          <li>other premium or paid services available within the app.</li>
        </ul>
        <p>
          These services may be offered through monthly, quarterly, yearly, trial-based or other subscription plans. All services
          are digital in nature and are generally activated within the app after successful payment.
        </p>
      </>
    ),
  },
  {
    id: "auto-renewal",
    title: "Subscription and Auto-Renewal",
    content: (
      <>
        <p>
          Some Impress membership plans may renew automatically at the end of the applicable trial period or billing period unless
          the subscription is cancelled before the next renewal date.
        </p>
        <p>
          By starting a trial or purchasing an auto-renewing subscription, you authorise recurring payments through the selected
          payment method, including:
        </p>
        <ul>
          <li>UPI AutoPay;</li>
          <li>eMandate;</li>
          <li>debit or credit cards;</li>
          <li>wallets; and</li>
          <li>other supported payment methods.</li>
        </ul>
        <p>
          You are responsible for cancelling your subscription before the trial or current billing period ends if you do not wish
          to continue with the paid service.
        </p>
        <p>
          Subscription reminders, payment confirmations and other billing-related communications may be sent through app
          notifications, SMS, WhatsApp, email or other available communication channels.
        </p>
      </>
    ),
  },
  {
    id: "free-trial",
    title: "Free Trial Policy",
    content: (
      <>
        <p>You may cancel your subscription at any time during the trial period.</p>
        <p>
          If the subscription is not cancelled before the trial period ends, the selected subscription plan may automatically
          convert into a paid subscription and the linked payment method may be charged.{" "}
          <strong>Please cancel before the trial expiry date and time to avoid automatic billing.</strong>
        </p>
        <p>After cancelling during the trial period, you may continue to access eligible premium services until the end of the active trial period.</p>
      </>
    ),
  },
  {
    id: "refunds",
    title: "Refund Policy",
    content: (
      <>
        <p>
          Once a subscription, membership plan or premium digital service has been activated and payment has been successfully
          processed, the amount paid is non-refundable, except where otherwise required under applicable law.
        </p>
        <p>Refunds will generally not be provided for:</p>
        <ul>
          <li>subscription payments after the subscription has started;</li>
          <li>automatic renewal charges where the subscription was not cancelled before the renewal date;</li>
          <li>partial use of a subscription or premium service;</li>
          <li>unused days or remaining subscription duration;</li>
          <li>failure to use the available membership features or benefits;</li>
          <li>digital services, lessons, courses or premium features that have already been delivered or activated; or</li>
          <li>a change of mind after successful activation of the service.</li>
        </ul>
        <p>
          Cancelling a subscription will stop future renewals, but it will not create a refund for the subscription period that
          has already been billed.
        </p>
        <p>
          In cases involving an accidental duplicate payment, an unauthorised transaction or a technical issue caused directly by
          the platform, you may contact the Impress support team at <SupportEmail />. Each request will be reviewed based on the
          available payment records and applicable law.
        </p>
      </>
    ),
  },
  {
    id: "cancellation",
    title: "Cancellation Policy",
    content: (
      <>
        <p>You may cancel your subscription or membership at any time. After a successful cancellation:</p>
        <ul>
          <li>automatic renewal of the subscription will stop;</li>
          <li>no further recurring subscription charge will be initiated after the current active billing period;</li>
          <li>premium benefits may remain available until the current trial or paid subscription validity expires; and</li>
          <li>the amount already paid for the active subscription period will not be refunded.</li>
        </ul>
        <p>
          Please complete the cancellation before the next billing date. A cancellation made after a payment has already been
          processed will apply to future renewals and will not reverse the completed payment.
        </p>
      </>
    ),
  },
  {
    id: "how-to-cancel",
    title: "How to Cancel Your Subscription",
    content: (
      <>
        <h3>Method 1: Cancel through the Impress App</h3>
        <ol className="list-decimal space-y-2 pl-5 marker:font-semibold marker:text-purple">
          <li>Open the Impress App.</li>
          <li>Go to your Profile page.</li>
          <li>Open Settings.</li>
          <li>Select My Membership.</li>
          <li>Select your active membership or subscription.</li>
          <li>Tap Cancel Membership.</li>
          <li>Complete the cancellation process and check that a cancellation confirmation is displayed.</li>
        </ol>
        <h3>Method 2: Cancel AutoPay through your payment app</h3>
        <p>You may also cancel the AutoPay or eMandate from the payment app used to purchase the trial or subscription plan.</p>
        <ol className="list-decimal space-y-2 pl-5 marker:font-semibold marker:text-purple">
          <li>Open the payment app used for the transaction, such as Google Pay, PhonePe, Paytm, BHIM or another supported app.</li>
          <li>Open the section named AutoPay, Mandates, Automatic Payments or Subscriptions.</li>
          <li>
            Find the active mandate created for <CompanyName /> or Impress.
          </li>
          <li>Select Cancel AutoPay, Cancel Mandate or the equivalent option.</li>
          <li>Complete the verification required by the payment app.</li>
          <li>Check that the mandate status shows as cancelled, revoked or inactive.</li>
        </ol>
        <p>Once the AutoPay mandate has been successfully cancelled, future automatic renewals linked to that mandate will stop.</p>
      </>
    ),
  },
  {
    id: "activation-delivery",
    title: "Service Activation and Delivery",
    content: (
      <>
        <p>Digital subscriptions and premium services are generally activated immediately after successful payment.</p>
        <p>
          In some cases, activation may take up to 10 minutes because of payment confirmation, server processing or other
          technical delays. Please make sure you are signed in with the same account or mobile number through which the
          subscription was purchased.
        </p>
      </>
    ),
  },
  {
    id: "payment-issues",
    title: "Payment or Technical Issues",
    content: (
      <>
        <p>
          If you experience a duplicate payment, unsuccessful activation or another payment-related technical issue, please contact
          our support team with the relevant details, which may include:
        </p>
        <ul>
          <li>your registered mobile number;</li>
          <li>the transaction ID or UTR number;</li>
          <li>the date and amount of the payment;</li>
          <li>a screenshot of the payment confirmation; and</li>
          <li>a description of the issue.</li>
        </ul>
        <p>
          <strong>Support email:</strong> <SupportEmail />
        </p>
        <p>The support team generally responds within 48 working hours, excluding Saturdays, Sundays and public holidays.</p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: (
      <p>
        <CompanyName /> may update this policy from time to time to reflect changes in services, subscription processes, payment
        methods, legal requirements or business practices. The revised policy will be published with an updated “Last updated”
        date. Please review this page periodically.
      </p>
    ),
  },
  {
    id: "acceptance",
    title: "Acceptance of This Policy",
    content: (
      <p>
        By starting a trial, purchasing a subscription or using any paid or premium digital service offered through Impress, you
        acknowledge that you have read and agreed to this Refund, Cancellation and Subscription Policy. You also agree to our{" "}
        <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>, <Link to="/privacy-policy">Privacy Policy</Link>, billing
        terms and AutoPay authorisation terms.
      </p>
    ),
  },
];

export function RefundPolicy() {
  return (
    <LegalLayout
      title="Refund, Cancellation & Subscription Policy"
      metaDescription="How refunds, cancellations, free trials and auto-renewing subscriptions work for Impress."
      lastUpdated="6 October 2026"
      intro={
        <div className="rounded-3xl bg-blush/40 p-5 text-base ring-1 ring-pink/30 sm:p-6">
          <p className="font-bold text-navy">Important notice</p>
          <p className="mt-2">
            Once a subscription or premium digital service has been activated and payment has been successfully processed, the
            amount paid is non-refundable, except where a refund is required under applicable law.
          </p>
          <p className="mt-2">
            Please cancel your subscription before the trial period or current billing period ends to avoid the next automatic
            charge.
          </p>
          <p className="mt-3 text-sm text-muted">
            Platform: Impress · Operated by <CompanyName />
          </p>
        </div>
      }
      sections={sections}
    />
  );
}
