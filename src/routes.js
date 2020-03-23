import React from "react";

// Import all components

const Landing = React.lazy(() => import("./pages/Landing/index"));
const IniciarReclamo = React.lazy(() => import("./pages/IniciarReclamo"));
const FAQs = React.lazy(() => import("./pages/FAQs"));
const PageContact = React.lazy(() => import("./pages/Contacto"));
const PageTerms = React.lazy(() => import("./pages/TerminosYCondiciones"));
const Nosotros = React.lazy(() => import("./pages/SobreNosotros"));

const Main = React.lazy(() => import("./pages/Home/indexMain"));
const Agency = React.lazy(() => import("./pages/Agency/index"));
const Saas = React.lazy(() => import("./pages/Saas/index"));
const Apps = React.lazy(() => import("./pages/Apps/index"));
const Studio = React.lazy(() => import("./pages/Studio/index"));
const Business = React.lazy(() => import("./pages/Business/index"));
const Marketing = React.lazy(() => import("./pages/Marketing/index"));
const Hotel = React.lazy(() => import("./pages/Hotel/index"));
const ModernBusiness = React.lazy(() => import("./pages/ModernBusiness/index"));
const Coworking = React.lazy(() => import("./pages/Coworking/index"));
const CloudHosting = React.lazy(() => import("./pages/CloudHosting/index"));
const Event = React.lazy(() => import("./pages/Event/index"));
const Course = React.lazy(() => import("./pages/Course/index"));
const Personal = React.lazy(() => import("./pages/Personal/index"));
const SingleProduct = React.lazy(() => import("./pages/SingleProduct/index"));
const Enterprise = React.lazy(() => import("./pages/Enterprise/index"));
const Portfolio = React.lazy(() => import("./pages/Portfolio/index"));
const ChangeLog = React.lazy(() => import("./pages/ChangeLog"));
const Components = React.lazy(() => import("./pages/Components"));
const Documentation = React.lazy(() => import("./pages/Documentation"));
const PageBlog = React.lazy(() => import("./pages/PageBlog"));
const PageBlogDetail = React.lazy(() => import("./pages/PageBlogDetail"));
const PageBlogSidebar = React.lazy(() => import("./pages/PageBlogSidebar"));
const PageContactOne = React.lazy(() => import("./pages/PageContactOne"));
const PageContactThree = React.lazy(() => import("./pages/PageContactThree"));
const PageJobDetail = React.lazy(() => import("./pages/PageJobDetail"));
const PageJob = React.lazy(() => import("./pages/PageJob"));
const PagePricing = React.lazy(() => import("./pages/PagePricing"));
const PagePrivacy = React.lazy(() => import("./pages/PagePrivacy"));
const PageServices = React.lazy(() => import("./pages/PageServices"));
const PageTeam = React.lazy(() => import("./pages/PageTeam"));
const PageWork = React.lazy(() => import("./pages/PageWork"));
const PageWorkDetail = React.lazy(() => import("./pages/PageWorkDetail"));

const routes = [
  // public Routes
  { path: "/index", component: Landing },
  { path: "/iniciar-reclamo", component: IniciarReclamo },
  { path: "/preguntas-frecuentes", component: FAQs },
  { path: "/contacto", component: PageContact },
  { path: "/terminos-y-condiciones", component: PageTerms },
  { path: "/sobre-nosotros", component: Nosotros }
];

export default routes;
