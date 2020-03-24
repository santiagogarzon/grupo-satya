import React from "react";

// Import all components

const Landing = React.lazy(() => import("./pages/Landing/index"));
const IniciarReclamo = React.lazy(() => import("./pages/IniciarReclamo"));
const FAQs = React.lazy(() => import("./pages/FAQs"));
const PageContact = React.lazy(() => import("./pages/Contacto"));
const PageTerms = React.lazy(() => import("./pages/TerminosYCondiciones"));
const Nosotros = React.lazy(() => import("./pages/SobreNosotros"));
const Instructivo = React.lazy(() => import("./pages/Instructivo"));

const routes = [
  // public Routes
  { path: "/index", component: Landing },
  { path: "/iniciar-reclamo", component: IniciarReclamo },
  { path: "/preguntas-frecuentes", component: FAQs },
  { path: "/contacto", component: PageContact },
  { path: "/terminos-y-condiciones", component: PageTerms },
  { path: "/sobre-nosotros", component: Nosotros },
  { path: "/instructivo", component: Instructivo }
];

export default routes;
