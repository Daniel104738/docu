"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[587],{176:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(5893),i=n(1151);const r={sidebar_position:2},o="MDocker + GitLab + SSL",l={id:"page2",title:"MDocker + GitLab + SSL",description:"Hemos elaborado un script para uso en instancias Linux, este es un archivo .sh que actualiza el sistema, instala las herramientas, sus dependencias, configura un certificado SSL renovable cada 90 d\xedas que debe ser confirmado en el proceso con su dominio y realiza todas las configuraciones previas, dejando el aplicativo listo para probar en menos de 20 minutos , su ejecuci\xf3n es muy sencilla.",source:"@site/docs/page2.md",sourceDirName:".",slug:"/page2",permalink:"/docu/docs/page2",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/page2.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Manual para Script de Instalaci\xf3n",permalink:"/docu/docs/page1"},next:{title:"Linux | Valet",permalink:"/docu/docs/page3"}},c={},d=[{value:"Requisitos previos",id:"requisitos-previos",level:2},{value:"Pasos",id:"pasos",level:3},{value:"Recomendaciones",id:"recomendaciones",level:2}];function t(e){const s={a:"a",br:"br",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"mdocker--gitlab--ssl",children:"MDocker + GitLab + SSL"}),"\n",(0,a.jsx)(s.p,{children:"Hemos elaborado un script para uso en instancias Linux, este es un archivo .sh que actualiza el sistema, instala las herramientas, sus dependencias, configura un certificado SSL renovable cada 90 d\xedas que debe ser confirmado en el proceso con su dominio y realiza todas las configuraciones previas, dejando el aplicativo listo para probar en menos de 20 minutos , su ejecuci\xf3n es muy sencilla."}),"\n",(0,a.jsx)(s.h2,{id:"requisitos-previos",children:"Requisitos previos"}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Tener acceso a su servidor, vps, m\xe1quina virtual o local via SSH, en las instalaciones que realizamos para AWS o Google Cloud, hacemos entrega del usuario, la IP del servidor y la clave ssh que puede ser un archivo .ppk o .pem."}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Tener instalado una versi\xf3n de ssh en su m\xe1quina para conectarse de manera remota, puede utilizar putty, filezilla o una consola terminal."}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Es importante configurar su dominio apuntando a la IP de su instancia para que durante la ejecuci\xf3n del script se valide el certificado SSL y al finalizar la ejecuci\xf3n no tenga errores y todo est\xe9 listo para realizar pruebas. Edite los r\xe9cords A y CNAME donde A debe contener su IP y CNAME el valor * (asterisco) para que se tomen los subdominios registrados por la herramienta.",(0,a.jsx)(s.br,{}),"\n",(0,a.jsx)(s.img,{alt:"Alt text",src:n(5075).Z+"",width:"861",height:"472"})]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Durante la ejecuci\xf3n del script deber\xe1 almacenar en su dominio dos registros TXT con unos valores que se mostrar\xe1n en pantalla, estos registros son validados en directo y no pueden tardar m\xe1s de 2 minutos en validarse en su dominio."}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"En caso de contar con servicios instalados en su instancia como mysql, apache o nginx, debe detenerlos, ya que estos ocupan los puertos que pasar\xe1n a usarse con el aplicativo y los contenedores de Docker."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"pasos",children:"Pasos"}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Acceder a su instancia v\xeda SSH."}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Loguearse como super usuario",(0,a.jsx)(s.br,{}),"\n","ejecute ",(0,a.jsx)(s.strong,{children:"sudo su"})]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Ubicarse en la carpeta del usuario, por ejemplo",(0,a.jsx)(s.br,{}),"\n",(0,a.jsx)(s.strong,{children:"cd /home/ubuntu/"})]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Crear el archivo install",(0,a.jsx)(s.br,{}),"\n","ejecute ",(0,a.jsx)(s.strong,{children:"touch install.sh"})]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Editar el archivo con su editor preferido",(0,a.jsx)(s.br,{}),"\n","ejecute ",(0,a.jsx)(s.strong,{children:"nano install.sh"})]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["En el archivo debe agregar el contenido del siguiente enlace:",(0,a.jsx)(s.br,{}),"\n",(0,a.jsx)(s.a,{href:"https://gitlab.com/snippets/1852652",children:"https://gitlab.com/snippets/1852652"}),(0,a.jsx)(s.br,{}),"\n","Observar\xe1 a una p\xe1gina como la siguiente, donde debe copiar el contenido del script y pegarlo en su archivo install.sh, es importante que mantenga las estructura del mismo.",(0,a.jsx)(s.br,{}),"\n",(0,a.jsx)(s.img,{alt:"Alt text",src:n(2200).Z+"",width:"800",height:"487"})]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Para salir de editor y guardar puede presionar \u201c",(0,a.jsx)(s.strong,{children:"ctrl + x"}),"\u201d seguidamente se le consultar\xe1 si desea guardar los cambios, confirme con \u201c",(0,a.jsx)(s.strong,{children:"y"}),"\u201d y luego \u201c",(0,a.jsx)(s.strong,{children:"enter"}),"\u201d."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Debe darle permisos de ejecuci\xf3n al archivo:",(0,a.jsx)(s.br,{}),"\n","ejecute ",(0,a.jsx)(s.strong,{children:"chmod +x install.sh"})]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"El comando a utilizar requiere de dos par\xe1metros principalmente:"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"./install.sh [repositorio] [dominio]"})}),"\n",(0,a.jsx)(s.p,{children:"por ejemplo:"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsxs)(s.strong,{children:["./install.sh ",(0,a.jsx)(s.a,{href:"https://gitlab.com/rash07/facturadorpro2",children:"https://gitlab.com/rash07/facturadorpro2"})," elfacturador.com"]})}),"\n",(0,a.jsxs)(s.ol,{start:"10",children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Una vez ejecutado el comando se iniciar\xe1 un proceso donde debe ir aceptando las preguntas y que le mostrar\xe1 en pantalla los valores que debe a\xf1adir en los 2 r\xe9cords tipo TXT de su dominio con nombre"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.strong,{children:"_acme-challenge.example.com"})}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"_acme-challenge"})," (casos como godday y puntope)",(0,a.jsx)(s.br,{}),"\n","en la siguiente imagen le muestran el valor como v703JW.... debera copiarlo y a\xf1adirlo al primer record TXT, seguidamente pulsar enter, se le mostrar\xe1 en pantalla un segundo valor para el segundo TXT",(0,a.jsx)(s.br,{}),"\n",(0,a.jsx)(s.img,{alt:"Alt text",src:n(8625).Z+"",width:"579",height:"143"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Editados los r\xe9cords en su dominio, deber\xe1 aceptar para continuar y que el proceso verifique que sea exitoso, de ser exitoso obtendr\xe1 una pantalla similar a la siguiente",(0,a.jsx)(s.br,{}),"\n",(0,a.jsx)(s.img,{alt:"Alt text",src:n(9877).Z+"",width:"578",height:"280"})]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Continuar\xe1 el proceso de actualizaci\xf3n del sistema, se le solicitar\xe1 el usuario y contrase\xf1a de GitLab, para que se pueda clonar/descargar el proyecto en su instancia, luego culminar\xe1 y tendr\xe1 los accesos listos en su dominio:",(0,a.jsx)(s.br,{}),"\n",(0,a.jsx)(s.img,{alt:"Alt text",src:n(2097).Z+"",width:"207",height:"66"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"Una vez finalizado, puede proseguir con el manual de pruebas o dem\xe1s documentaci\xf3n de cada proyecto, sus URL son:"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"PRO1:"}),(0,a.jsx)(s.br,{}),"\n",(0,a.jsx)(s.a,{href:"https://gitlab.com/rash07/facturadorpro1",children:"https://gitlab.com/rash07/facturadorpro1"})]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"PRO2:"}),(0,a.jsx)(s.br,{}),"\n",(0,a.jsx)(s.a,{href:"https://gitlab.com/rash07/facturadorpro2",children:"https://gitlab.com/rash07/facturadorpro2"})]}),"\n",(0,a.jsx)(s.h2,{id:"recomendaciones",children:"Recomendaciones"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["Luego de instalar el facturador puede cambiar algunos par\xe1metros en el archivo .env como:","\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"La direcci\xf3n de env\xedo de correos que utiliza el facturador para enviar los archivos pdf, xml y cdr a sus clientes"}),"\n",(0,a.jsx)(s.li,{children:"Cambiar algunas configuraciones de plantillas de los pdf"}),"\n",(0,a.jsx)(s.li,{children:"entre otros."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["Recuerde que siempre que se edita el archivo .env debe utilizar el comando \u201cphp artisan config",":cache","\u201d dentro del contenedor de fpm1, para m\xe1s detalles puede observar el manual de actualizaci\xf3n ",(0,a.jsx)(s.a,{href:"https://docs.google.com/document/d/11PI1a9yjCPfH9CCuWmJSrdj1V8IEUffqurqvdkw29co/edit?usp=sharing",children:"aqui"})]}),"\n",(0,a.jsx)(s.li,{children:"La ruta donde ejecute el script ser\xe1 donde se clone el repositorio, debe verificar que los usuarios del servidor tengan permisos a dicha ruta si desea acceder desde ftp o scp."}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},2097:(e,s,n)=>{n.d(s,{Z:()=>a});const a="data:image/png;base64,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"},5075:(e,s,n)=>{n.d(s,{Z:()=>a});const a=n.p+"assets/images/image-5-609a28ff1157f27bd8f461bc18241ea0.png"},2200:(e,s,n)=>{n.d(s,{Z:()=>a});const a=n.p+"assets/images/image-6-618a4e5ac3e3037e76a41b53e71e13c4.png"},8625:(e,s,n)=>{n.d(s,{Z:()=>a});const a=n.p+"assets/images/image-7-ae9faceeb4008386e0baaef4935e1d46.png"},9877:(e,s,n)=>{n.d(s,{Z:()=>a});const a=n.p+"assets/images/image-8-98cbd4ec2d4d8877d9697ad1dbe9a696.png"},1151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>o});var a=n(7294);const i={},r=a.createContext(i);function o(e){const s=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:s},e.children)}}}]);