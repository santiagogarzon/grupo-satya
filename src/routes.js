//import React from "react";

// Import all components
import IniciarReclamo from "./pages/IniciarReclamo";
import FAQs from "./pages/FAQs";
import PageContact from "./pages/Contacto";
import PageTerms from "./pages/TerminosYCondiciones";
import Nosotros from "./pages/SobreNosotros";
import Instructivo from "./pages/Instructivo";

const routes = [
  // public Routes
  { path: "/iniciar-reclamo", component: IniciarReclamo },
  { path: "/preguntas-frecuentes", component: FAQs },
  { path: "/contacto", component: PageContact },
  { path: "/terminos-y-condiciones", component: PageTerms },
  { path: "/sobre-nosotros", component: Nosotros },
  { path: "/instructivo", component: Instructivo }
];

export default routes;
