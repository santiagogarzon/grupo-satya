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
  { path: "/sobre-nosotros", component: Nosotros },

  { path: "/index-saas", component: Saas },
  { path: "/index-apps", component: Apps },
  { path: "/index-agency", component: Agency },
  { path: "/index-studio", component: Studio },
  { path: "/index-business", component: Business },
  { path: "/index-marketing", component: Marketing },
  { path: "/index-hotel", component: Hotel },
  { path: "/index-modern-business", component: ModernBusiness },
  { path: "/index-coworking", component: Coworking },
  { path: "/index-cloud-hosting", component: CloudHosting },
  { path: "/index-event", component: Event },
  { path: "/index-course", component: Course },
  { path: "/index-personal", component: Personal },
  { path: "/index-single", component: SingleProduct },
  { path: "/index-enterprise", component: Enterprise },
  { path: "/index-portfolio", component: Portfolio },
  { path: "/changelog", component: ChangeLog },
  { path: "/components", component: Components },
  { path: "/documentation", component: Documentation },
  { path: "/page-blog", component: PageBlog },
  { path: "/page-blog-detail", component: PageBlogDetail },
  { path: "/page-blog-sidebar", component: PageBlogSidebar },
  { path: "/page-contact-one", component: PageContactOne },
  { path: "/page-contact-three", component: PageContactThree },
  { path: "/page-job-detail", component: PageJobDetail },
  { path: "/page-job", component: PageJob },
  { path: "/page-pricing", component: PagePricing },
  { path: "/page-privacy", component: PagePrivacy },
  { path: "/page-services", component: PageServices },
  { path: "/page-work", component: PageWork },
  { path: "/page-team", component: PageTeam },
  { path: "/page-work-detail", component: PageWorkDetail },
  { path: "/index-old", component: Main }
];

export default routes;
