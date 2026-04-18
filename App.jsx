
import "./styles.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import PreviewPages from "./pages/Previewpages";
import Search from "./pages/Search";
import SearchCompanies from "./pages/Searchcompanies";
import SearchPeople from "./pages/Searchpeople";
import SearchInvestors from "./pages/Searchinvestors";
import SearchOrganizations from "./pages/Searchorganizations";
import SearchEvents from "./pages/Searchevents";
import CompanyDetail from "./pages/Companydetail";
import PersonDetail from "./pages/Persondetail";
import InvestorDetail from "./pages/Investordetail";
import Analytics from "./pages/Analytics";
import AnalyticsEcosystem from "./pages/Analyticsecosystem";
import AnalyticsSectors from "./pages/Analyticssectors";
import AnalyticsGeography from "./pages/Analyticsgeography";
import AnalyticsInvestors from "./pages/Analyticsinvestors";
import AnalyticsTrends from "./pages/Analyticstrends";
import Recommendations from "./pages/Recommendations";
import RecommendationsJobs from "./pages/Recommendationsjobs";
import RecommendationsDeals from "./pages/Recommendationsdeals";
import RecommendationsFounders from "./pages/Recommendationsfounders";
import Dashboard from "./pages/Dashboard";
import DashboardProfile from "./pages/Dashboardprofile";
import DashboardUpdates from "./pages/Dashboardupdates";
import DashboardPrivacy from "./pages/Dashboardprivacy";
import DashboardAnalytics from "./pages/Dashboardanalytics";
import DashboardDelegation from "./pages/Dashboarddelegation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/preview" element={<PreviewPages />} />

          <Route path="/search" element={<Search />} />
          <Route path="/search/companies" element={<SearchCompanies />} />
          <Route path="/search/people" element={<SearchPeople />} />
          <Route path="/search/investors" element={<SearchInvestors />} />
          <Route path="/search/organizations" element={<SearchOrganizations />} />
          <Route path="/search/events" element={<SearchEvents />} />

          <Route path="/company/:id" element={<CompanyDetail />} />
          <Route path="/person/:id" element={<PersonDetail />} />
          <Route path="/investor/:id" element={<InvestorDetail />} />

          <Route path="/analytics" element={<Analytics />} />
          <Route path="/analytics/ecosystem" element={<AnalyticsEcosystem />} />
          <Route path="/analytics/sectors" element={<AnalyticsSectors />} />
          <Route path="/analytics/geography" element={<AnalyticsGeography />} />
          <Route path="/analytics/investors" element={<AnalyticsInvestors />} />
          <Route path="/analytics/trends" element={<AnalyticsTrends />} />

          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/recommendations/jobs" element={<RecommendationsJobs />} />
          <Route path="/recommendations/deals" element={<RecommendationsDeals />} />
          <Route path="/recommendations/founders" element={<RecommendationsFounders />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/profile" element={<DashboardProfile />} />
          <Route path="/dashboard/updates" element={<DashboardUpdates />} />
          <Route path="/dashboard/privacy" element={<DashboardPrivacy />} />
          <Route path="/dashboard/analytics" element={<DashboardAnalytics />} />
          <Route path="/dashboard/delegation" element={<DashboardDelegation />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
