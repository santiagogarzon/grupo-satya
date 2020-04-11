// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col,} from 'reactstrap';

class PageTerms extends Component {

    constructor(props) {
        super(props);
        this.state = {
            t1 : true,
            t2 : false,
            t3 : false,
            t4 : false
        }
        window.scrollTo(0,0);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
    }
    
     // Make sure to remove the DOM listener when the component is unmounted.
     componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation);
     }

    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
            document.getElementById('topnav').classList.add('nav-sticky');
        }
        else {
            document.getElementById('topnav').classList.remove('nav-sticky');
        }
    }

    render() {

        return (
            <React.Fragment>
                <section className="bg-half bg-light">
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <Row className="justify-content-center">
                                    <Col lg={12} className="text-center">
                                        <div className="page-next-level">
                                            <h4 className="title"> Terminos y Condiciones </h4>
                                            <ul className="page-next d-inline-block bg-white shadow p-2 pl-4 pr-4 rounded mb-0">
                                                <li>
                                                <Link
                                                    to="index"
                                                    className="text-uppercase font-weight-bold text-dark"
                                                >
                                                    Inicio
                                                </Link>
                                                </li>
                                                <li>
                                                <Link
                                                    to="/iniciar-reclamo"
                                                    className="ml-1 text-uppercase font-weight-bold text-dark"
                                                >
                                                    Reclamos
                                                </Link>
                                                </li>
                                                <li>
                                                <span className="ml-1 text-uppercase text-primary font-weight-bold">
                                                    Terminos y Condiciones
                                                </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section pt-60">
                    <div className="container">
                        <Row className="justify-content-center">
                            <Col lg={9}>
                                <div className="p-3 shadow border rounded">
                                    <h4>Acuerdos de Usuario :</h4>
                                    <p className="text-muted">Los presentes “Condiciones Generales de Contratación” (en adelante, “CGC”), constituyen un contrato entre una persona física o jurídica (en adelante, “Usuario” o, en plural, “Usuarios”) que desee acceder, contratar y/o usar los servicios profesionales brindados por GRUPO SATYA, integrado por el abogado matriculado en el Colegio de Abogados de la Ciudad de Córdoba, Gastón E. Durio, DNI 36.706.787, MP 1-39722, y/o abogados matriculados que trabajen para y/o con ellos, todos con domicilio en Duarte Quiros nro.  525 6º piso, oficina “A” de la Ciudad de Córdoba, en la web www.grupo-satya.com.ar (en adelante, los “Profesionales”), en cuyo caso el Usuario estará sujeto a las siguientes condiciones generales de contratación.  
                                                En estas Condiciones Generales se describen todos los derechos y obligaciones de las partes al contratar el servicio profesional de los Profesionales ofrecido en el sitio www.grupo-satya.com.ar 
                                                Es obligación del Usuario leer y aceptar las condiciones que se establecen en adelante, como así también las relacionadas a las Políticas de Privacidad - las cuales forman parte de las presentes - previo a proceder a la utilización los servicios proporcionados por Los Profesionales. En caso de no estar de acuerdo con alguna/s de las cláusulas insertas, deberá abstenerse de la utilización de los servicios que brinden o pudieren brindar en un futuro Los Profesionales. La utilización del servicio implica la aceptación total por parte del Usuario de las presentes CGC.-
                                                A todo efecto, se entiende por:
                                                Usuario/Usuarios: Persona física o jurídica que desea utilizar y/o acceder a la contratación del SERVICIO. 
                                                Profesionales: Gastón E. Durio, DNI 36.706.787 , MP 1-39722, y/o abogados matriculados que trabajen para y/o con ellos, todos con domicilio en Duarte Quiros nro. 525  6º piso, oficina “A” de la Ciudad de Córdoba
                                                Sitio: www.grupo-satya.com.ar 
                                                Servicio: Es el servicio ofrecido por Los Profesionales y que Ud. contrata a través del mismo. El mismo se encuentra descripto en la cláusula 1) de las presentes CGC.
                                                Compañía de Seguro: Una compañía de seguros es una sociedad que tiene por objeto exclusivo realizar las actividades y operaciones de seguros, coaseguros y reaseguros en general, exclusivamente en las coberturas autorizadas por la Superintendencia de Seguros de la Nación. Son las únicas autorizadas por dicho organismo a celebrar contratos de seguro. Aquí podrá encontrar las Compañías habilitadas por la S.S.N.: http://service.ssn.gob.ar/kausay/consulta_entidades.php 
                                                Damnificado: A los fines de la presente, se entiende por damnificado a la persona que sufre un daño en su propiedad y/o persona y  la producción de dicho daño es pura y exclusivamente atribuible a un tercero.
                                                Siniestro/Accidente de tránsito: Es el hecho jurídico que produce un daño en la propiedad  (automóvil, motocicleca, etc) y/o persona del damnificado.
                                                DNI: Documento Único de Identidad.
                                                Política: Así se abrevia la “Política de Privacidad” del Sitio.
                                                CGC: Son las “Condiciones Generales de Contrataciónn”, las cuales rigen toda la relación contractual establecida entre el Usuario y Los Profesionales.
                                                S.S.N.: Superintendencia de Seguros de la Nación - Organismo de contralor.
                                                A.A.I.P.: Agencia de Acceso a la Informaciónn Pública - Organismo de contralor.
                                                D.N.P.D.P.: Dirección Nacional de Protección de Datos Personales - Organismo de contralor.

                                             </p>
                                                <h5>1) SERVICIO - OBJETO.</h5>
                                                <p className="text-muted">
                                                El presente es un contrato de adhesión por el cual Ud. - el “Usuario” - contrata a Los Profesionales a los fines de que los mismos le provean el Servicio ofrecido por ella y que consiste en lo siguiente: Cuando el Usuario ha sido el damnificado en un siniestro/accidente de tránsito y a juicio de los Profesionales - previo examen de las circunstancias fácticas y legales del caso - se comunique al Usuario que su caso es procedente, los mismos se comprometen a la preparación de un reclamo administrativo/extra-judicial (en adelante, “El Reclamo”) fundamentado de manera fáctica, lógica y jurídica para ser presentado de manera personal ante las compañías de seguro como digital y a distancia ante la “Compañías de Seguros” que aseguraba el rodado/vehículo productor de dicho siniestro; siempre que la “Compañía de Seguros” sea una de las comprendidas en el listado que a tal efecto se dispone en el Sitio dentro del formulario de carga de datos. Ninguna obligación nace para los Profesionales en relación al Usuario, mientras la comunicación de procedencia del siniestro no sea manifestada en favor del Usuario. 
                                                A los efectos de la prestación del Servicio, el Usuario otorga en favor de los Profesionales un MANDATO EXPRESO y por un asunto determinado (preparación, tramitación y gestión del Reclamo ante la Compañía de Seguro) y cuyo plazo de duración viene determinado por la naturaleza del negocio que constituye su objeto (el Reclamo) para que los mismos actúen de manera indistinta, conjunta o separada (Art. 1326 C.C. y C) y el cual se entenderá extinguido por la ejecución del negocio por el cual fue dado (Art. 1329 del C.C. y C)  
                                                OBLIGACION DE MEDIO Y NO DE RESULTADO. Conforme lo establecido en la cláusula 3.2. de las presentes CGC, la obligación asumida por los Profesionales será siempre juzgada como de medios y jamás y bajo ninguna circunstancia como una de resultados.
                                                Con carácter meramente informativo, las compañías contra las cuales reclaman los Profesionales  de manera digital- al momento de sanción de las presentes CGC - son las siguientes: i) Federación Patronal ii) Rivadavia iii) La Segunda iv) Mapfre v) La Meridional vi) Segurcoop vii) Prudencia Seguros viii) Berkley ix) La Mercantil x) Libra. Se informa que este listado puede sufrir actualizaciones, ya que las mencionadas compañías por exclusiva decisión de ellas pueden dejar de ofrecer el servicio de siniestros a distancia/remoto/digital, etc. En dicho caso, la actualización del presente listado no implicará modificación de las Condiciones Generales de Contratación. 
                                                En cuanto al resto de las compañías de seguro que estén autorizadas por la Superintendencia de Seguros de la Nación, los profesionales gestionaran el reclamo de manera personal ante las mismas, siempre y cuanto esta exista fehacientemente y no haya sido disuelta por algún motivo.-
                                                </p>
                                                <h5>2) FORMULARIO DE SOLICITUD DE TRÁMITE.</h5>
                                                <p className="text-muted">
                                                Todo Usuario que desee utilizar el servicio proporcionado por Los Profesionales, debe hacerlo mediante la utilización del Sitio web www.grupo-satya.com.ar , (en adelante, el “Sitio”) especialmente a través del “Formulario de Solicitud de Servicio” (en adelante, el “Formulario”) y a través de las comunicaciones a él dirigidas por correo electrónico a la dirección que el Usuario suministra (ver cláusula 4). Asimismo, luego de ingresar al Sitio, deberá consignar todos y cada uno de los datos solicitados en el Formulario. Los Profesionales no se responsabilizan por la veracidad de los datos introducidos por los Usuarios. Los Usuarios serán responsables y garantizan y responden, en cualquier caso, por la veracidad, exactitud, integridad, vigencia y autenticidad de los datos y/o documentación ingresada. Todos los datos y/o documentación proporcionada por los Usuarios revisten el carácter de declaración jurada siendo el mismo responsable por la veracidad, exactitud y vigencia de los mismos.-
                                                Los Profesionales no procederán a auditar ni a realizar acción alguna a los fines de validar, verificar, etc. los datos y/o documentación proporcionadas por Ud. con ocasión de la contratación del SERVICIO. Ud. es el único responsable de ello y no podrá - jamás y bajo ninguna circunstancia - suplantar la identidad de un tercero o utilizar el servicio en perjuicio de un tercero y/o para fines que están vedados legalmente y/o para generar un fraude a las Compañías de Seguros.-
                                                Los Profesionales se reservan el derecho de rechazar una solicitud de tramite o de cancelarla y/o suspenderla, temporal o definitivamente, en caso de detectar incongruencias o inconsistencias en la información y/o documentación provista por un Usuario. Tal decisión no dará lugar a reclamo alguno de ningún tipo por parte del Usuario.
                                                </p>
                                                <h5>3.1) SERVICIO OFRECIDO EN EL SITIO. PASOS PARA SU SOLICITUD. RESPONSABILIDAD.</h5>
                                                <p className="text-muted">
                                                El Usuario podrá acceder al Servicio brindado por Los Profesionales y descrito en la cláusula 1 de las presentes. Los pasos para su solicitud son los siguientes:
                                                1) El Usuario al ingresar al Sitio y que desee usar el Servicio, deberá completar los campos requeridos en el Formulario de la forma indicada en la cláusula anterior e indicará - entre otros datos requeridos - un correo electrónico valido de su propiedad como contacto.
                                                2) Luego de cargado el Formulario, aceptadas estas “Condiciones Generales de Contratación” y “Política de Privacidad” y enviado a Los Profesionales, los mismos examinarán el mismo a los fines de determinar - en base a las consideraciones fácticas y jurídicas del siniestro descripto por el Usuario -  si la contratación del Servicio procede o no procede. 
                                                3) En caso que, a juicio de los Profesionales, la contratación del Servicio no proceda, se lo hará saber al Usuario por medio de una comunicación por correo electrónico.
                                                4) Para el supuesto de que, a juicio de los Profesionales, proceda la contratación del Servicio por parte del Usuario, los Profesionales se lo hará saber al Usuario por medio de una comunicación por correo electrónico, informandole la aceptación de su solicitud de servicio.
                                                5) Confirmado el Servicio por parte de ambas partes, acto seguido los Profesionales enviarán un correo electrónico a la dirección suministrada por el Usuario con toda la documentación requerida para elaborar el Reclamo.
                                                5.1) En el supuesto caso de que el Usuario haya padecido lesiones a causa del siniestro, deberá dirigirse al Consultorio Medico Legista del Dr. Rodolfo Enrique Martinez, sito en calle San Luis nro. 726, Ciudad de Córdoba,  con el objeto de ser estudiada la lesion en cuestion por los medicos del Consultorio, para que luego ellos redacten un informe que posteriormente presentaremos ante la compañia de seguros reclamada. En este supuesto, para el Usuario, se le cobrará sobre el total de capital abonado por la compañia de seguros reclamada un cinco por ciento (5%) en concepto de honorarios. Ante el incumplimiento de pago por parte del Usuario, los Profesionales tendran la facultad de iniciar las acciones legales correspodientes para obtener su efectivo cobro, como ser embargos, inhibiciones, pedidos de quiebra, etc.
                                                6) Una vez remitida totalmente la documentación por parte del Usuario a los Profesionales, los mismos contarán con un plazo de tres días hábiles para la preparación del Reclamo. En caso que la documentación sea parcial, los Profesionales se lo harán saber al Usuario, quien deberá complementar la misma. Mientras no se complete la documentación, ninguna obligación pesará sobre los Profesionales en relación a la elaboración y tramitación del Reclamo. Es responsabilidad absoluta del Usuario realizar tal envío de documentación, y por ello, éste último declara expresamente que tiene pleno conocimiento que Los Profesionales no podrán efectuar gestión alguna frente a la Compañía de Seguros si no cuentan con los datos y documentación necesaria que fuere solicitada, y en razón de esto, el Usuario dispensa a Los Profesionales de cualquier tipo de responsabilidad que ante él o terceros pudiere surgir con motivo de no cumplir con la obligación de envío de la documentación necesaria, que pesa a su cargo. Asimismo, las partes acuerdan y consienten que la procuración/recolección de dicha documental corre por exclusiva cuenta del Usuario y que Los Profesionales no realizarán gestión alguna para recoger la misma en nombre del Usuario.  
                                                7) Para el supuesto caso que la compañia a reclamar se trate de aquella que se encuentra en la lista de compañias digitales (Servicio. Objeto.1) el procedimiento es el siguiente:
                                                a) Preparado el Reclamo, los Profesionales lo enviarán al Usuario para que el mismo lo lea, examine y corrobore el mismo. Estando conforme con el mismo, procederá a firmarlo (con aclaración y DNI) y luego enviará el mismo escaneado a los Profesionales. En caso que detecte algún error en el mismo, se lo deberá hacer saber inmediatamente a los Profesionales, quienes dispondrán de 48 horas para enmendar dicho error conforme las directivas impartidas por el Usuario.
                                                b) Recibido el Reclamo firmado por el Usuario, los Profesionales se obligan a presentar/cargar, etc. el mismo ante la “Compañía de Seguros” en un plazo de dos (2) días hábiles. Se deja constancia - conforme cláusula 1 de las presentes - que la tramitación será SIEMPRE Y EXCLUSIVAMENTE digital/remota/a distancia, etc. y jamás comprenderá la tramitación presencial y/o de manera analógica del Reclamo. 
                                                c) Una vez presentado el Reclamo, Los Profesionales le harán saber por correo electrónico al Usuario el número de Reclamo otorgado por la Compañía de Seguros y el plazo estimado de resolución, en caso que así lo informe la Compañía de Seguros.
                                                8) En cuanto se trate de un reclamo ante una compañia de seguros que no brinde la posibilidad de presentar su reclamo de manera digital el procedimiento es el detallado a continuacion:
                                                a)Una vez que los Profesionales cuenten con toda la documentacion completa, procederán a redactar el reclamo administrativo en un plazo no mayor a los tres (3) dias habiles computados desde que el Usuario completo la documentacion a presentar. 
                                                b)Una vez listo el reclamo, los Profesionales y/o dependientes de ellos, se contactarán con el Usuario de manera telefónica a fin de hacerle saber que debe llegarse al domicilio supra indicado (domicilio de los Profesionales) para insertar su firma de manera ológrafa en el reclamo administrativo a presentar. 
                                                c) Los Profesionales y/o dependientes, presentaran dicho reclamo de manera personal dentro de los tres (3) dias hables posteriores a la firma ante la compañia de seguros reclamada. 
                                                10) Recibida una resolución por parte de la Compañía de Seguros, se le comunicará inmediatamente (dentro de las 24 horas de recibida) al Usuario. Será el Usuario quien tendrá la potestad de rechazarla, aprobarla o solicitar la tramitación de una reconsideración ante la Compañía de Seguros por parte de Los Profesionales.
                                                11) En caso que el Usuario decida rechazar la oferta, el vínculo entre los Profesionales y el mismo quedará disuelto y ninguna obligación subsistirá en cabeza de los Profesionales excepto aquella de comunicar la decisión (rechazo de oferta) a la Compañía de Seguros.
                                                12) En caso que el Usuario decida ACEPTAR la oferta, Los Profesionales se lo comunicarán dentro de las 24 horas a la Compañía de Seguros a los fines de que arbitre los medios para proceder al pago de la oferta aceptada. Informados los Profesionales sobre la modalidad de pago, se lo comunicará al Usuario en un plazo de 24 horas de recibida la información.
                                                13) En caso que el Usuario decida “RECONSIDERAR” la oferta, Los Profesionales deberán comunicar dicha decisión a la Compañía de Seguros en un plazo de 24 horas. Obtenida respuesta por parte de la Compañía de Seguros, se procederá conforme a las cláusulas 3.1.10, 3.1.11 y 3.1.12 de las presentes.
                                                
                                                3.2) ALCANCE DE LA PRESTACIÓN. OBLIGACIÓN DE MEDIO Y NO DE RESULTADO.
                                                El Usuario declara conocer y comprender que la prestación llevada a cabo por Los Profesionales sólo implica la preparación, tramitación y gestión del Reclamo ante la Compañía de Seguros que aplique pero que JAMAS Y BAJO NINGUNA CIRCUNSTANCIA Los Profesionales aseguran una resolución favorable respecto del Usuario por parte de la Compañía de Seguros; toda vez que dicha resolución escapa a la órbita de acción y decisión de Los Profesionales y recae pura y exclusivamente en la Compañía de Seguros.
                                                
                                                </p>
                                                <h5>4) COMUNICACIONES.</h5>
                                                <p className="text-muted">
                                                El Usuario, por medio de la presente, autoriza de forma expresa la suplantación del soporte físico/papel por el electrónico para todas y cada una de las comunicaciones que Los Profesionales realicen o deban realizar con motivo de la contratación del Servicio. En consecuencia, las comunicaciones serán dirigidas a la casilla de correo electrónica suministrada por el Usuario.
                                                </p>
                                                <h5>5) FORMA Y MODALIDAD DE CONTRATACIÓN.</h5>
                                                <p className="text-muted">
                                                Acorde a lo estipulado por los arts. 1105 y 1106 del Código Civil y Comercial de la República Argentina, el presente constituye un contrato de los denominados “a distancia”. A los fines de cumplimentar con el art. 1107 del Código Civil y Comercial, se informa mediante las presentes “CGC”, que a los fines de utilizar correctamente el Sitio, y en consecuencia obtener correctamente el Servicio prestado por Los Profesionales, se pone a su disposición en el Sitio, una sección de “Preguntas y respuestas (FAQ)” que encontrará en el siguiente enlace: XXXXX como así también un claro GLOSARIO que se encuentra en las presentes. 
                                                No obstante, al ser una contratación electrónica a distancia, se informa que la navegación del sitio es gratuita.
                                                Advertimos que el principal riesgo de este tipo de contratación es aquel inherente a la contratación electrónica y a distancia. Ya que no presenta ninguna dificultad comprensiva y/o términos extraños o en otra lengua. Desde nuestra plataforma hemos desplegado un diseño de interfaz simple, sencilla de usar para todas las edades y condiciones y didáctica para evitar cualquier tipo de riesgo y/o confusión en el uso de la misma. 
                                                </p>
                                                
                                                <h5>6) PERFECCIÓN DEL CONTRATO.</h5>
                                                <p className="text-muted">
                                                Conforme lo establecido anteriormente, el presente es un contrato a distancia. El mismo no se considerará perfeccionado, sino hasta que se produce la llamada telefónica en que ambas partes acuerdan perfeccionar el contrato y proseguir con la  Contratación del Servicio. Todo de conformidad a la cláusula 3.1.4 de las presentes. 
                                                Ambas partes entienden y consienten en que, antes de la perfección del contrato conforme a lo aquí estipulado, NINGUNA obligación de prestar el servicio pesa sobre Los Profesionales.
                                                </p>
                                                <h5>7) ACEPTACIÓN DEL CONTRATO.</h5>
                                                <p className="text-muted">
                                                Luego de haberse perfeccionado el contrato según lo estipulado en la cláusula que antecede, y dando cumplimiento a lo estipulado por el Art. 1108 in fine del Código Civil y Comercial de la República Argentina, Los Profesionales enviarán un correo electrónico, a la dirección indicada por el Usuario al momento de completar el formulario de solicitud de trámite, de la Aceptación de la Contratación del Servicio y solicitando al Usuario en el mismo la documentación necesaria que deberá enviar a los fines de proceder a la ejecución del Servicio, todo conforme a lo indicado en la “cláusula 3.1” de las presentes “CGC”.
                                                </p>
                                                <h5>8) RESPONSABILIDAD.</h5>
                                                <p className="text-muted">
                                                a) Los Profesionales no tendrán responsabilidad de ningún tipo si por medio de la utilización de los servicios que se prestan o prestaran en un futuro, los Usuarios infrinjan alguna ley y/o utilicen el mismo para cometer actos ilícitos, ilegales, engañosos, fraudulentos, abusivos, etc. o permitir, facilitar o inducir a que terceros los cometan. En tal sentido, el Usuario presta expresa conformidad de ello y manifiesta abstenerse de utilizar los servicios que Los Profesionales pone o pondrá a disposición, para cometer actos o hechos de la naturaleza referida en este punto. 
                                                b) Los Profesionales no serán responsables en caso de que el trámite solicitado por el Usuario no pueda ser concluido como consecuencia de haber aportado o consignado en el mismo datos erróneos, falsos, confusos, incorrectos, etc., o por no haber enviado a Los Profesionales la documentación que éstos requieran por ser necesaria para la ejecución del Servicio. Se deja expresamente establecido que el Usuario deberá introducir correctamente todos los datos solicitados, debiendo prestar especial atención en cada uno de ellos. El Usuario desde ya asume, reconoce y acepta su total responsabilidad en caso de que no pueda concluirse adecuadamente el servicio solicitado, como así también por los daños, perjuicios, pérdidas o cualquier otro tipo de menoscabo ya sea económico o extrapatrimonial, que sean consecuencia de haber consignado datos erróneos, falsos, confusos, incorrectos, etc.  A mayor recaudo, se deberá prestar especial atención a la “Política de Privacidad” de Los Profesionales que es parte integrante de las presentes CGC y puede consultar aquí (XXX Completar con hipervínculo a la Política)
                                                c) El Usuario declara conocer y comprender que la prestación llevada a cabo por Los Profesionales sólo implica la elaboración del reclamo, presentación y gestión del trámite ante la Compañía de Seguros pero que JAMAS Y BAJO NINGUNA CIRCUNSTANCIA Los Profesionales aseguran una resolución favorable respecto del Usuario por parte de la misma; toda vez que dicha resolución escapa a la órbita de acción y decisión de Los Profesionales y recae pura y exclusivamente en la Compañía de Seguros.
                                                </p>
                                                <h5>9) PRECIO.</h5>
                                                <p className="text-muted">
                                                A los fines de brindar la mayor información y protección posible al Usuario, Los Profesionales informan que en el supuesto caso que se trate de un reclamo meramente de daños materiales, es decir la reparacion del rodado, el Servicio ofrecido no generará cargo alguno en relación a “honorarios profesionales” por parte del Usuario, ya que los mismos hacemos expresa renuncia de perseguir el cobro de honorarios en contra del Usuario. Ello en virtud de que, presentado el reclamo y aceptada la oferta de la Compañía de Seguros por parte del Usuario, la Compañía de Seguros deberá afrontar el pago de los honorarios por la actuación profesional desplegada por Los Profesionales. Ello en virtud del carácter facultativo del Art. 2 del “Código Arancelario para Abogados” - Ley 9.459 - el cual dice “Artículo 2º.- Los abogados y procuradores pueden pactar libremente con su cliente el monto de sus honorarios en todo tipo de procesos, dentro de los límites establecidos en la presente Ley. El monto de los honorarios podrá ser reducido o renunciado conforme a la libre voluntad de las partes, así como la forma y oportunidad de su pago.” y el Art. 105 - “Cuando el cobro de créditos se efectuare extrajudicialmente puede requerirse hasta el diez por ciento (10%) al obligado e igual cantidad al comitente, más los adicionales.”
                                                Ante el eventual caso que el siniestro le genere lesiones al Ususario y como consecuencia deba ser intervenido ante una junta medica en el Consultorio del Dr. Martinez, conjuntamente con un informe elaborado por  ellos, es que se cobrará un cinco por ciento (5%) del total de capital que cobrase eventualmente el Ususario en relacion al siniestro reclamado, el cual deberá ser abonado dentro de las 96hs habiles posteriores al efectivo cobro por el mismo, bajo riesgo de ser ejecutado ese monto por parte de los Profesionales de manera judicial, pudiendo iniciar acciones civil, penales, embargos, inhibiciones, solicitudes de quiebra, etc. 
                                                
                                                </p>
                                                <h5>10) RECTIFICACIÓN DE ERRORES Y RESOLUCIÓN UNILATERAL.</h5>
                                                <p className="text-muted">
                                                En el supuesto que se encuentren errores en los datos personales suministrados o en la documentación enviada, y/o que no haya sido enviada la documentación necesaria previamente habiendo sido requerida por Los Profesionales al Usuario, y que ello no permitan a Los Profesionales cumplir con el Servicio, los mismos podrán resolver totalmente el contrato de manera unilateral y sin compensación alguna en favor del Usuario. La falta de envío de la documental mencionada en la cláusula 3.1 de las presentes CGC se considerará incumplimiento esencial en los términos del Art. 1084 del C.C. y C.
                                                Si los Profesionales hicieran uso de dicha potestad, se lo deberán comunicar por correo electrónico al Usuario, quien admite esta forma de comunicación y la tendrá como notificación válida y fehaciente.
                                                
                                                </p>
                                                <h5>11) PRUEBA.</h5>
                                                <p className="text-muted">
                                                Las constancias emitidas por Los Profesionales serán consideradas prueba suficiente del cumplimiento del “Formulario de Solicitud de Servicio” ingresado por el Usuario, y sustituyen la necesidad de cualquier otro documento y son plenamente oponibles al Usuario y a todo tipo de terceros. 
                                                </p>
                                                
                                                <h5>12) PLAZO DE CUMPLIMIENTO DEL SERVICIO.</h5>
                                                <p className="text-muted">
                                                Los Profesionales, cuando la información proporcionada sea correcta, veraz y cumpla en un todo con lo requerido en estas CGC, y en especial al envío de la documentación requerida, Los Profesionales se comprometen a finalizar la ejecución del SERVICIO contratado en los plazos aquí establecidos.  No obstante, se deja expresa constancia de que - una vez presentado el reclamo ante la Compañía de Seguros por Los Profesionales - la misma contará con un plazo de treinta días para su emitir resolución tanto positiva como negativa. 
                                                Asimismo, se deja expresa constancia que - ante el supuesto que desde la Compañía de Seguros soliciten nueva documentación - dicha circunstancia será comunicada al Usuario dentro de las 24 horas hábiles siguientes y el plazo anteriormente estipulado se prorrogará a contar desde que el Usuario remita la “nueva” documentación solicitada.
                                                
                                                </p>
                                                <h5>13) CESIÓN.</h5>
                                                <p className="text-muted">
                                                El Usuario no podrá ceder el presente contrato, ni delegar facultades y/u obligaciones sin el previo consentimiento de Los Profesionales.
                                                
                                                </p><h5>14) JURISDICCIÓN Y LEY APLICABLE.</h5>
                                                <p className="text-muted">
                                                Este acuerdo estará regido en todos sus puntos por las leyes vigentes en la Argentina. Cualquier controversia derivada del presente acuerdo, su existencia, validez, interpretación, alcance o cumplimiento, será sometida a los Tribunales Provinciales en lo Civil y Comercial de la Ciudad Córdoba, renunciando a cualquier fuero de excepción que pudiese corresponder.
                                                </p>
                                                <h6>Córdoba, 1/03/2020.</h6><div className="mt-3">
                                        <Link to="#" className="btn btn-primary mt-2 mr-2">Aceptar</Link>
                                        <Link to="#" className="btn btn-outline-primary mt-2">Declinar</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default PageTerms;
