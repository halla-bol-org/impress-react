import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./components/Layout";
import { homeSections } from "./config";
import "./index.css";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { RefundPolicy } from "./pages/RefundPolicy";
import { TermsAndConditions } from "./pages/TermsAndConditions";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          {/* /features, /faq, /download…: the home page, scrolled to that section. */}
          {homeSections.map((section) => (
            <Route key={section} path={section} element={<Home />} />
          ))}
          {/* Legal pages accept an optional section, e.g. /terms-and-conditions/eligibility. */}
          <Route path="terms-and-conditions/:section?" element={<TermsAndConditions />} />
          <Route path="privacy-policy/:section?" element={<PrivacyPolicy />} />
          <Route path="refund-policy/:section?" element={<RefundPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
