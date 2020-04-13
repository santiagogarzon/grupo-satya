import React from "react";

// Import all components
function retry(fn, retriesLeft = 5, interval = 1000) {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch(error => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            // reject('maximum retries exceeded');
            reject(error);
            return;
          }

          // Passing on "reject" is the important part
          retry(fn, retriesLeft - 1, interval).then(resolve, reject);
        }, interval);
      });
  });
}

const IniciarReclamo = React.lazy(() =>
  retry(() => import("./pages/IniciarReclamo"))
);
const FAQs = React.lazy(() => retry(() => import("./pages/FAQs")));
const PageContact = React.lazy(() => retry(() => import("./pages/Contacto")));
const PageTerms = React.lazy(() =>
  retry(() => import("./pages/TerminosYCondiciones"))
);
const Nosotros = React.lazy(() => retry(() => import("./pages/SobreNosotros")));
const Instructivo = React.lazy(() =>
  retry(() => import("./pages/Instructivo"))
);

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
