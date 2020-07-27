(function(e){function t(t){for(var i,o,n=t[0],l=t[1],c=t[2],d=0,p=[];d<n.length;d++)o=n[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],i=!0,n=1;n<r.length;n++){var l=r[n];0!==s[l]&&(i=!1)}i&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var i={},s={app:0},a=[];function o(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=i,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(r,i,function(t){return e[t]}.bind(null,i));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=t,n=n.slice();for(var c=0;c<n.length;c++)t(n[c]);var u=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var i=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app2"}},[r("div",{attrs:{id:"search-frame"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{id:"search",title:"Champ de recherche",placeholder:"Sigle ou acronyme","aria-label":"Rechercher un sigle ou acronyme",type:"search",autofocus:"autofocus"},domProps:{value:e.search},on:{keyup:e.makeSearch,input:function(t){t.target.composing||(e.search=t.target.value)}}})]),r("p",{directives:[{name:"show",rawName:"v-show",value:!e.rows[0]&&""===e.search,expression:"!rows[0] && search === ''"}]},[e._v("Recherchez la signification d'un sigle parmi les "+e._s(e.nbTerms)+" que compte ce dictionnaire")]),r("table",{directives:[{name:"show",rawName:"v-show",value:e.rows[0]&&!e.loading&&e.search,expression:"rows[0] && !loading && search"}],attrs:{id:"results"}},[e._m(0),e._m(1),r("tbody",e._l(e.rows,(function(t){return r("tr",{key:t.term+t.definition},[r("td",[e._v(e._s(t.term))]),r("td",[e._v(e._s(t.definition))]),r("td",[r("a",{attrs:{href:t.url_source,target:"_blank"}},[e._v(e._s(t.source))])])])})),0)]),r("p",{directives:[{name:"show",rawName:"v-show",value:!e.loading&&!e.rows[0]&&""!==e.search,expression:"!loading && !rows[0] && search !== ''"}]},[e._v("Le dictionnaire ne contient pas de sigle contenant le texte "),r("strong",[e._v(e._s(e.search))]),e._v(".")]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}]},[r("p",[e._v("Chargement...")])]),r("about-section",{directives:[{name:"show",rawName:"v-show",value:!e.rows[0],expression:"!rows[0]"}],attrs:{id:"about"}})],1)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("colgroup",[r("col",{}),r("col",{}),r("col",{})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",[r("td",[e._v("Sigle")]),r("td",[e._v("Définition")]),r("td",[e._v("Source")])])}],o=(r("99af"),r("d3b7"),r("ac1f"),r("25f0"),r("841c"),r("1276"),r("96cf"),r("1da1")),n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Dictionnaire des sigles de l’administration française")]),r("p",[e._v("Ce dictionnaire en ligne est destiné à combler le fossé qui existe en France entre les personnes qui connaissent le sens des sigles, et celles qui ne le connaissent pas.")]),r("p",[r("strong",[e._v("Les données")]),e._v(" de ce dictionnaire ont été rassemblées et triées par Colin Maudry à partir de plusieurs "),r("a",{attrs:{href:"#lessources"}},[e._v("sources")]),e._v(". Elles sont publiées selon les termes de la "),r("a",{attrs:{href:"http://creativecommons.org/publicdomain/zero/1.0/"}},[e._v("licence Creative Commons Zero")]),e._v(".")]),r("ul",[r("li",[r("a",{attrs:{href:"https://www.data.gouv.fr/datasets/5ee0d624d915e528468166c6"}},[e._v("Le jeu de données sur data.gouv.fr")])])]),r("p",[r("strong",[e._v("Le code source")]),e._v(" de cette application a été rédigé par Colin Maudry à l’aide de plein de logiciels libres et est publié selon les termes de la licence MIT.")]),r("p",[e._v("Quelques précieuses heures ont été économisées grâce à du code partagé par "),r("a",{attrs:{href:"https://github.com/taniki"}},[e._v("Tam-Kien Duong")]),e._v(".")]),r("p",[e._v("Cette application se veut volontairement minimaliste de façon à être accessible, rapide et peu gourmande en énergie.")]),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/ColinMaudry/dictionnaire-sigles"}},[e._v("Le code source sur github.com")])])]),r("h2",[e._v("Comment contribuer")]),r("p",[e._v("Si vous souhaitez ajouter ou corriger un sigle, ça se passe "),r("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1kEJzE-8nCBZakKWptfrc5HhuctOEnMYy8AgxGz6dNW4/edit"}},[e._v("par ici")]),e._v(" (tableur Google, pas besoin d’un compte).")]),r("p",[e._v("Si vous souhaitez ajouter une épaisse liste de sigles à ce dictionnaire et que vous l’avez sous forme de fichier, merci de "),r("a",{attrs:{href:"#contact"}},[e._v("me contacter")]),e._v(". Il doit s’agir de sigles utilisés par l’administration française ou utilisés dans la loi française.")]),r("p",[e._v("Souvent, la limite à ne pas franchir est celle du vocabulaire technique ou scientifique, même s’il y a des exceptions pour les termes les plus employés.")]),r("p",[e._v("Merci de privilégier les formats structurés, par ordre de préférence :")]),r("ul",[r("li",[e._v("csv (comma separated values)")]),r("li",[e._v("json (javascript object notation)")]),r("li",[e._v("xml (extended markup language)")]),r("li",[e._v("ods (Open Document spreadsheet), xlsx (Excel Microsoft Office Open XML Format Spreadsheet file)")]),r("li",[e._v("html (hypertext markup language)")])]),r("h2",[e._v("Les sources")]),r("ul",[r("li",[r("a",{attrs:{href:"https://www.senat.fr/histoire/sigles.html"}},[e._v("Petit dictionnaire des sigles du Sénat")])]),r("li",[r("a",{attrs:{href:"http://www.metiers-fonctionpubliquehospitaliere.sante.gouv.fr/Lexique-des-abreviations-ou-sigles.html"}},[e._v("Lexique des abréviations ou sigles de la direction générale de l’offre de soins (DGOS)")])]),r("li",[r("a",{attrs:{href:"https://github.com/betagouv/glossary-bot"}},[e._v("Les contributions de la communauté beta.gouv.fr")])]),r("li",[r("a",{attrs:{href:"http://www.cce-lrv.com/documents/images/general_photos/151_Fichier.pdf"}},[e._v("Petit dictionnaire des sigles et acronymes de la Compagnie des commissaires-enquêteurs du Languedoc-Roussillon")]),e._v(", assemblé par Michel Lefay")]),r("li",[r("a",{attrs:{href:"http://maraudes.fr/glossaire-sigles-social-de-sante-de-ladministration/"}},[e._v("Glossaire des sigles du social, de la santé et de l’administration")]),e._v(", par "),r("a",{attrs:{href:"https://twitter.com/lolobobo"}},[e._v("Laurent Bohu")])]),r("li",[r("a",{attrs:{href:"https://www.cnle.gouv.fr/Sigles-de-l-Administration.html"}},[e._v("Sigles de l’Administration")]),e._v(" du Conseil national des politiques de lutte contre la pauvreté et l’exclusion sociale (CNLE)")]),r("li",[r("a",{attrs:{href:"http://www.marche-public.fr/Marches-publics/Definitions/Marches-publics-Sigles.htm"}},[e._v("Sigles et acronymes relatifs aux marchés publics")]),e._v(", par "),r("a",{attrs:{href:"https://twitter.com/marchespublics"}},[e._v("Frédéric Makowski")])]),r("li",[r("a",{attrs:{href:"https://www.fonction-publique.gouv.fr/files/files/statistiques/rapports_annuels/2016/G_Liste_des_sigles.pdf"}},[e._v("Liste des sigles")]),e._v(", par la Direction générale de l’administration et de la fonction publique (DGAFP)")]),r("li",[r("a",{attrs:{href:"http://www.justice.gouv.fr/art_pix/Stat_Annuaire_ministere-justice_sigles.pdf"}},[e._v("Sigles et abbréviations utilisées")]),e._v(", par le Ministère de la justice")]),r("li",[r("a",{attrs:{href:"https://www.keratocone.net/acronymes.html"}},[e._v("Acronymes administratifs")]),e._v(", par l’association Keratocone")]),r("li",[r("a",{attrs:{href:"https://concours-fonction-publique.publidia.fr/guide-fonction-publique/infos-utiles/lexique-fonction-publique"}},[e._v("Lexique des abréviations de la Fonction Publique")]),e._v(", par Publidia")]),r("li",[r("a",{attrs:{href:"http://www.ac-grenoble.fr/college/poisy/orientation/orientation-sigles-et-acronymes/"}},[e._v("Glossaire des sigles et acronymes")]),e._v(", par le collège de Poisy (académie de Grenoble), à partir d’un manuel de l’Onisep")]),r("li",[r("a",{attrs:{href:"https://gist.github.com/ColinMaudry/fe30f024d3cea20d1f6ccd579d9acd3f#file-gendarmerie-csv"}},[e._v("Sigles de la gendarmerie et de la police nationale")]),e._v(" collectés par "),r("a",{attrs:{href:"https://merigoux.ovh"}},[e._v("Denis Merigoux")])]),r("li",[e._v("Sources indiquées par les contributeurs et contributrices de ce dictionnaire")])]),r("h2",[e._v("Contact")]),r("ul",[r("li",[e._v("email : colin+sigles@maudry.com")]),r("li",[e._v("twitter : "),r("a",{attrs:{href:"https://twitter.com/col1m"}},[e._v("@col1m")])])]),r("h2",[e._v("Vie privée")]),r("p",[e._v("Ce site dépose un petit fichier texte (un « cookie ») sur votre ordinateur lorsque vous le consultez ("),r("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Cookie_(informatique)"}},[e._v("Wikipédia")]),e._v("). Cela me permet de mesurer le nombre de visites et de distinguer les nouveaux visiteurs des utilisateurs réguliers.")]),r("p",[e._v('<div style="background-color: #ccc;"><iframe style="border: 0; height: 200px; width: 600px;" title="Opt-out du cookie de suivi" src="https://analytics.maudry.com/index.php?module=CoreAdminHome&action=optOut&language=fr&backgroundColor=&fontColor=&fontSize=&fontFamily="></iframe></div>')]),r("h3",[e._v("Ce site n’affiche pas de bannière de consentement aux cookies, pourquoi ?")]),r("p",[e._v("C’est vrai, vous n’avez pas eu à cliquer sur un bloc qui recouvre la moitié de la page pour dire que vous êtes d’accord avec le dépôt de cookies.")]),r("p",[e._v("Rien d’exceptionnel, je respecte simplement la loi, qui dit que certains outils de suivi d’audience, correctement configurés pour respecter la vie privée, sont exemptés d’autorisation préalable.")]),r("p",[e._v("J’utilise pour cela "),r("a",{attrs:{href:"https://matomo.org/"}},[e._v("Matomo")]),e._v(", un outil "),r("a",{attrs:{href:"https://matomo.org/free-software/"}},[e._v("libre")]),e._v(", paramétré pour être en conformité avec la "),r("a",{attrs:{href:"https://www.cnil.fr/fr/solutions-pour-les-cookies-de-mesure-daudience"}},[e._v("recommandation « Cookies »")]),e._v(' de la <abbr title="Commission Nationale de l’Informatique et des Libertés">CNIL</abbr>. Cela signifie que votre adresse IP, par exemple, est anonymisée avant d’être enregistrée. Il m’est donc impossible d’associer vos visites sur ce site à votre personne.')]),r("h2",[e._v("Mentions légales")]),r("p",[e._v("Le dictionnaire des sigles de l’administration française a été compilé et édité par Colin Maudry, inscrit au répertoire SIRENE sous le numéro 812 231 132, et dont le siège social est situé au 7 avenue Aristide Briand, 35000 Rennes.")]),r("p",[e._v("Le dictionnaire des sigles de l’administration française est hébergé par la société Github, propriété de Microsoft Corporation.")])])}],c=r("2877"),u={},d=Object(c["a"])(u,n,l,!1,null,null,null),p=d.exports,v={components:{AboutSection:p},data:function(){return{endpoint:null,total:0,error:null,currentPage:1,perPage:100,loading:!1,search:"",nbTerms:"5089",resource:{url:"https://static.data.gouv.fr/resources/dictionnaire-des-sigles-et-acronymes-de-ladministration/20200727-191731/sigles.csv"},showRowId:!1,columns:[],rows:[]}},created:function(){var e=window.location.href.split("/"),t=e[e.length-1];"#"!==t&&"#"!==t[0]&&(this.search=t,this.makeSearch())},computed:{},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.search&&e.makeSearch();case 1:case"end":return t.stop()}}),t)})))()},methods:{request:function(e,t){return new Promise((function(r,i){var s=new XMLHttpRequest;s.open(e,t),s.onload=r,s.onerror=i,s.send()}))},makeSearch:function(){var e=this;if(""!==this.search){var t=this;console.log("Let's search "+this.search);var r="https://csvapi.data.gouv.fr/apify";return this.loading=!0,this.request("GET","".concat(r,"?url=").concat(encodeURIComponent(this.resource.url))).then((function(t){var r=JSON.parse(t.target.response);return e.endpoint=r.endpoint,e.endpoint})).then((function(r){var i="_offset=".concat((t.currentPage-1)*t.perPage,"&_shape=objects&term__contains=").concat(e.search);return e.showRowId||(i+="&_rowid=hide"),e.request("GET","".concat(r,"?").concat(i))})).then((function(t){var r=JSON.parse(t.target.response);e.loading=!1,e.columns=r.columns,e.total=r.total,e.rows=r.rows})).catch((function(t){e.loading=!1,t.target.response?e.error=t.response.error:e.error=t.toString()})),null}this.rows=[]}}},h=v,m=Object(c["a"])(h,s,a,!1,null,null,null),f=m.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(f)}}).$mount("#app")}});