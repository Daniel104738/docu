"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[264],{5303:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=s(5893),r=s(1151);const i={sidebar_position:1},t="Manual para Script de Instalaci\xf3n",c={id:"page1",title:"Manual para Script de Instalaci\xf3n",description:"Hemos elaborado un script para uso en instancias Linux con Ubuntu 18 o superior, este es un archivo que actualiza el sistema, instala las herramientas, sus dependencias y realiza todas las configuraciones previas, dejando el aplicativo listo para probar en menos de 20 minutos (siempre y cuando el dominio ya est\xe9 configurado hacia la instancia), su ejecuci\xf3n es muy sencilla.",source:"@site/docs/page1.md",sourceDirName:".",slug:"/page1",permalink:"/docu/docs/page1",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/page1.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"MDocker + GitLab + SSL",permalink:"/docu/docs/page2"}},d={},l=[{value:"Requisitos previos",id:"requisitos-previos",level:2},{value:"Pasos",id:"pasos",level:3},{value:"Enlaces de inter\xe9s",id:"enlaces-de-inter\xe9s",level:2}];function o(e){const n={a:"a",br:"br",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"manual-para-script-de-instalaci\xf3n",children:"Manual para Script de Instalaci\xf3n"}),"\n",(0,a.jsx)(n.p,{children:"Hemos elaborado un script para uso en instancias Linux con Ubuntu 18 o superior, este es un archivo que actualiza el sistema, instala las herramientas, sus dependencias y realiza todas las configuraciones previas, dejando el aplicativo listo para probar en menos de 20 minutos (siempre y cuando el dominio ya est\xe9 configurado hacia la instancia), su ejecuci\xf3n es muy sencilla."}),"\n",(0,a.jsx)(n.h2,{id:"requisitos-previos",children:"Requisitos previos"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Tener acceso a su servidor, vps, m\xe1quina virtual o local via SSH, en las instalaciones que realizamos para AWS o Google Cloud, hacemos entrega del usuario, la IP del servidor y la clave ssh que puede ser un archivo .ppk o .pem, recuerde almacenarlas en su equipo local."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Tener instalado una versi\xf3n de ssh en su m\xe1quina para conectarse de manera remota, puede utilizar putty, filezilla o una consola terminal. para mayor informaci\xf3n sobre el acceso SSH visite los siguientes manuales:",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"https://docs.google.com/document/d/1PmQejvNd_dkXVm8DPUYlQTag0wvES46tMpxX3MPhkNY/edit#",children:"gu\xeda para acceder con Putty (gesti\xf3n de servidor)"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"https://docs.google.com/document/d/1Xpri2102N4b5C-dG-FVPXW5ZWjEz5S4iDjpvl7Zwq2E/edit#",children:"gu\xeda para acceder con Winscp (gesti\xf3n de archivos con aplicaci\xf3n de escritorio)"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Si es posible configurar su dominio apuntando a su instancia para que al finalizar la instalaci\xf3n se encuentre disponible el aplicativo. Edite los r\xe9cords A y CNAME donde A debe contener su IP y CNAME el valor * (asterisco) para que se tomen los subdominios registrados por la herramienta.",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.img,{alt:"Alt text",src:s(9772).Z+"",width:"863",height:"475"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"En caso de contar con servicios instalados en su instancia como mysql, apache o nginx, debe detenerlos, ya que estos ocupan los puertos que pasar\xe1n a usar el aplicativo con los contenedores de Docker."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"pasos",children:"Pasos"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Acceder a su instancia v\xeda SSH."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Loguearse como super usuario",(0,a.jsx)(n.br,{}),"\n","ejecute ",(0,a.jsx)(n.strong,{children:"sudo su"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Clonar el snippet de gitlab que contiene el script",(0,a.jsx)(n.br,{}),"\n","git clone ",(0,a.jsx)(n.a,{href:"https://gitlab.com/snippets/2079063.git",children:"https://gitlab.com/snippets/2079063.git"})," script"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Ingrese a la carpeta clonada\r\ncd ",(0,a.jsx)(n.strong,{children:"script"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Dar permisos de ejecuci\xf3n al script",(0,a.jsx)(n.br,{}),"\n","chmod +x install.sh"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["El comando a utilizar para iniciar el despliegue requiere de un par\xe1metro principalmente:",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"./install.sh [dominio]"}),(0,a.jsx)(n.br,{}),"\n","por ejemplo:",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:"./install.sh facturador.pro"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Una vez ejecutado el comando iniciar\xe1 el proceso de actualizaci\xf3n del sistema, en el proceso se le solicitar\xe1:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"el usuario y contrase\xf1a de GitLab, para que se pueda descargar el proyecto en su instancia"}),"\n",(0,a.jsxs)(n.li,{children:["si desea instalar  SSL gratuito, tenga en cuenta que este debe ser actualizado cada 90 d\xedas, el mensaje ser\xe1 el siguiente:",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.img,{alt:"Alt text",src:s(2465).Z+"",width:"505",height:"56"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"deber\xe1 contestar con \u201cs\u201d o \u201cn\u201d para continuar"}),"\n",(0,a.jsxs)(n.li,{children:["si selecciona S\xcd, deber\xe1 contestar las siguientes preguntas con \u201cy\u201d, son 2 en total, seguidamente se le ofrecer\xe1 un c\xf3digo que debe a\xf1adir en un r\xe9cord tipo TXT en su dominio quedando como ",(0,a.jsx)(n.strong,{children:"_acme-challenge.example.com"})," o simplemente ",(0,a.jsx)(n.strong,{children:"_acme-challenge"})," depender\xe1 de su proveedor.",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.img,{alt:"Alt text",src:s(1570).Z+"",width:"805",height:"204"})]}),"\n",(0,a.jsxs)(n.li,{children:["para continuar presione ",(0,a.jsx)(n.strong,{children:"enter"}),", luego deber\xe1 repetir las acciones para a\xf1adir un segundo c\xf3digo y habr\xe1 finalizado la configuraci\xf3n, si el proceso es exitoso la ejecuci\xf3n del script continuar\xe1."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["si desea obtener y gestionar actualizaciones autom\xe1ticas, deber\xe1 disponer de su sesi\xf3n de gitlab al momento",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.img,{alt:"Alt text",src:s(560).Z+"",width:"505",height:"53"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"deber\xe1 contestar con \u201cs\u201d o \u201cn\u201d para continuar"}),"\n",(0,a.jsxs)(n.li,{children:["de seleccionar S\xcd, al final del despliegue se le dar\xe1 un extracto de texto que debe a\xf1adir a su configuraci\xf3n de gitlab",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.img,{alt:"Alt text",src:s(9390).Z+"",width:"661",height:"439"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Finalizado el script y dependiendo de sus selecciones anteriores, se le entregar\xe1 varios datos que debe guardar, como:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"usuario administrador"}),"\n",(0,a.jsx)(n.li,{children:"contrase\xf1a para usuario administrador"}),"\n",(0,a.jsx)(n.li,{children:"url del proyecto"}),"\n",(0,a.jsx)(n.li,{children:"ubicaci\xf3n del proyecto dentro del servidor"}),"\n",(0,a.jsx)(n.li,{children:"clave ssh para a\xf1adir a gitlab (obligatorio para quienes seleccionan la instalaci\xf3n de SSH)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"enlaces-de-inter\xe9s",children:"Enlaces de inter\xe9s"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://gitlab.com/b.mendoza/facturadorpro3/snippets/1955372",children:"Actualizaci\xf3n de SSL"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://docs.google.com/document/d/1D87YJ9fq9yHiAauu6SGVugiC3m_i42DrFUt6VKYXuDI/edit?usp=sharing",children:"Actualizaci\xf3n mediante ejecuci\xf3n Script para instalaciones Docker"})}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://gitlab.com/b.mendoza/facturadorpro3/snippets/1971490",children:"Gu\xeda gitlab para la instalaci\xf3n, contiene el script usado en el presente manual"}),", adem\xe1s posee los par\xe1metros extras que pueden usarse en la ejecuci\xf3n del paso 6"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},9772:(e,n,s)=>{s.d(n,{Z:()=>a});const a=s.p+"assets/images/image-1-005fa53d2aecc490ee41eb504d2aa0f8.png"},1570:(e,n,s)=>{s.d(n,{Z:()=>a});const a=s.p+"assets/images/image-2-9e3092145d5c9a489e3ce045215e0cb7.png"},560:(e,n,s)=>{s.d(n,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfkAAAA1CAYAAABC65KfAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABS9SURBVHhe7Z07iF1VF8dPviLaRLGI4iP4wEBURBARHBAlWihipVgIUTB2abTyAQpRMJE0ARFSxKAjKAQC0UaLKIqMgjCFRUTQiYLRFFOphRiL+53fnvu/rruyz+M+Z+Zk/WBz79nPtdd+rH32OffuLUVR9EoXBEEQBEHH+F//MwiCIAiCjhFGPgiCIAg6Shj5IAiCIOgoYeSDIAiCoKOEkQ+CIAiCjhJGPgiCIAg6Shj5IAiCIOgoYeSDIAiCoKOEkQ+CIAiCjrLuRv61114r/vnnn6LX6xVnzpwp/vzzz+S3WTl16lRx9uzZYvfu3X2f+UK5lI8+5XLy7NmzJ+naxjt9+nQ/9L98qE8O4tr4XQQd7d+/v381GdL30aNH0/W89FfVH/GnzSXPenL48OG5jJeqOlM2MoBvp0nx44y5rml+09hbz7a5GMb3xQR/a7turuxIyeXCNqMrJ5JeOUB75UDNhs/SlRNKr5xQkgzWH/3iTzjX5STTKyebXjmJDOIgL3JLdl37vOS61m7eSZdWR5O4aec3idtIssxrvFTVuamfT+JUph0nlMPYYwzauNYRp8tjK9x83breyZcDrLj88suLc+fO9X2CSbjvvvvS53vvvZc+xcGDB9OnwhcWForV1dXigw8+SNfw+eefF8eOHSsuu+yy4v777+/7Bl3k/fffT+387LPP9n26z3rUWeNN4w/eeOONNPYYgznKhUFxxx13FCdOnOj7BMHkZK2/nFa6wq9CWRlb7IpYq/SlpaV+aC+tbFnhapUr+H7y5Mn0qfx9nOXl5XRNmQqzK3Pvx2pYaQB/Xx8gnLRVaZS/ddTNonqrzrozIb1HcSnLr9ipO2VLBz690uYccZvuEnDkYeucc013ODnZ5VQH2+5eLr7jZ1F+yFVOhIP0krUuTc41tTWO+lm4Jpx4gjJUJ18H61cnn/JUf8Ifl5NRKG5dvjifh9U19bH90ce1+lB9Pv7446HyJEfONcmmeto08rO6tzL7PG161WdlZaUfuhbu28zKzHcP+Xhd8P3AgQND7aQyLVwrjLItth45pzJtHtapfmov8mIsMCeBwuraEef1QZuSD/n5vmjjy09tpPCmNqE9JI/qVpcm56raSeG+Tr7OxLXYtE2y1KXFEV+0bWOLl3XOLuuZnIRVx8KPyktgvtsKS5FSkBSna+UnBeta4aQnbz6r4gKdwXdKnPcjrW8Q/JSnTSO/XBrvqupNuYRJX/irPrm0xPdl2fR8J706h2TFX/GtszoCW0/rlI/I5ae8qsryerRO+rCy27qofNt2fAc+FS49EN6URn7WeRmVh/yQqaodfXmEcW3byvq1rZPC6/SHv+relK/ayerK6prvPi9bLt8VV/Wvyktp5Jpk4zpXT+tn5ePap/cyEx/45FoyWxmtzLaNCFO42l36U36+TjYu1yqPcMKs7MrL+nlHPays1nlZcCrP6lAy2nh8V74+XNeqh65VRxtHfraN8LM6kJy+TWx+TWm8Ix7lKz6OfL3MNj3fpWsbV/lxjRxNshBO3pShtJJFcVUO4b4s78jXypmTfZ6udruebVu2uNjGZTsXHnzwweT322+/Fbt27Sq++uqr4tVXX01hfHKNf6mQ5PfXX38Nto/J44cffkhb9Aqv4sknn0zlaKtL28nnz59P121ha+yLL77oXxXFbbfdlpxgG+/XX3/tX63h01iQO1fvSy655IKtQPypg+LB119/nV6+AbbLKUtbd8obHQHfjx8/nmQEPrm+++6707aeBx1dd911xTvvvJOub7311sELP2XHTH5APsj12WefpesHHnhgEK/s8MlP2DDryLsJKzvblGVHL55++ulB+VZfX375ZeorFvSgftc2jaWurUdpxzaMI18O2mnHjh3FSy+9lOrelG/dGCWtJbd97B/lwKeffjrIi/4KO3fuTJ+WadXZcs899xTff//9IE/KoB+hE/V58tecwjhlDH377beD+v7yyy/pE5rGYB1NfQQ9M96kKz41dnOUk3xx8803p5f8fNvAtddem2S18otvvvmm/22trRhLjClhxxfOhkuH40KbWB1QT/obbVIauuRHm9D2ok0aC/Hq2inXdxnb6B/q2qlJlhtuuCH5CytLbnw1PXJpY2PmSa2Rv+aaa9Lnjz/+mD4tVR2ShkG5hAOdjQXBqKB4nxY52gxOyx9//DFoHAuTaZXBqkoDdQOxCiYn6kJZr7zyStIPUAaTAh2UCUUdCh2qnL179w7kxHHdBB17y5YtyWGk0SGf3oAzSSneU089lQYqstpB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"},9390:(e,n,s)=>{s.d(n,{Z:()=>a});const a=s.p+"assets/images/image-4-77c40675304ec46d99e668236e2f88ba.png"},2465:(e,n,s)=>{s.d(n,{Z:()=>a});const a="data:image/png;base64,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"},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>t});var a=s(7294);const r={},i=a.createContext(r);function t(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);