function EcrireCookiefreecounterstat(nom, valeur, nombre) {
    var argv = EcrireCookiefreecounterstat.arguments;
    var argc = EcrireCookiefreecounterstat.arguments.length;
    var ladate = new Date();
    ladate.setTime(ladate.getTime() + Number(nombre));
    var path = ("/");
    var domain = (argc > 4) ? argv[4] : null;
    var secure = (argc > 5) ? arg[5] : false;
    //toLocaleString
    document.cookie = nom + "=" + escape(valeur) +
        "; expires=" + ladate.toGMTString() +
        ((path == null) ? "" : ("; path=" + path)) +
        ((domain == null) ? "" : ("; domain=" + domain)) +
        ((secure == true) ? "; secure" : "");
}

function getCookieVal(offset) {
    var endstr = document.cookie.indexOf(";", offset);
    if (endstr == -1)
        endstr = document.cookie.length;
    return unescape(document.cookie.substring(offset, endstr));
}

function GetCookie(name) {
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen) {
        var j = i + alen;
        if (document.cookie.substring(i, j) == arg)
            return getCookieVal(j);
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0) break;
    }
    return null;
}

function EcrireCookieGeo(nom, valeur, nombre) {
    var argv = EcrireCookieGeo.arguments;
    var argc = EcrireCookieGeo.arguments.length;
    if (nombre == -1) {
        var ladate = nombre;
        valeur = "";
    }
    else {
        var ladate = new Date();
        ladate.setTime(ladate.getTime() + Number(nombre) * 1000);
    }
    var expires = (argc > 2) ? argv[2] : null;
    var expires = nombre;
    var path = ("/");
    var domain = (argc > 4) ? argv[4] : null;
    var secure = (argc > 5) ? arg[5] : false;
    document.cookie = nom + "=" + escape(valeur) +
        "; expires=" + ladate.toUTCString() +
        ((path == null) ? "" : ("; path=" + path)) +
        ((domain == null) ? "" : ("; domain=" + domain)) +
        ((secure == true) ? "; secure" : "");
}

function deleteCookie(name, path, domain) {
    if (GetCookie(name)) {
        document.cookie = name + "=" +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            "; expires=Thu, 01-Jan-70 00:00:01 GMT";
    }
}

function GetCookiefreecounterstat(name) {
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen) {
        var j = i + alen;
        if (document.cookie.substring(i, j) == arg)
            return getCookieValfreecounterstat(j);
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0) break;
    }
    return null;
}
function getCookieValfreecounterstat(offset) {
    var endstr = document.cookie.indexOf(";", offset);
    if (endstr == -1)
        endstr = document.cookie.length;
    return unescape(document.cookie.substring(offset, endstr));
}
var date_init = new Date();
var test_cookie_value_freecounterstat;
var test_cookie_value_freecounterstat_nv;
var init_freecounterstat = 1;
var init_freecounterstat_nv = 1;
var acceptcookiefreecounterstat;

//tester si accepte cookies
acceptcookiefreecounterstat = GetCookiefreecounterstat('acceptcookiefreecounterstat');
if (acceptcookiefreecounterstat == null) {
    date = new Date;
    date.setTime(date.getTime() + 1000);
    EcrireCookiefreecounterstat('acceptcookiefreecounterstat', 'ok', '31536000000');
}
acceptcookiefreecounterstat = GetCookiefreecounterstat('acceptcookiefreecounterstat');

if (acceptcookiefreecounterstat == 'ok') {
    test_cookie_value_freecounterstat = GetCookiefreecounterstat('counter');
    test_cookie_value_freecounterstat_nv = GetCookiefreecounterstat('counter_nv');
    if (test_cookie_value_freecounterstat == null) {
        init_freecounterstat = 0;
        test_cookie_value_freecounterstat = 'd77952bfd5e238444c80f84d97afcbce';
        EcrireCookiefreecounterstat('counter', test_cookie_value_freecounterstat, '94482000');
    }
    if (test_cookie_value_freecounterstat_nv == null) {
        test_cookie_value_freecounterstat_nv = 'd77952bfd5e238444c80f84d97afcbce';
        EcrireCookiefreecounterstat('counter_nv', test_cookie_value_freecounterstat_nv, '31536000000');
        init_freecounterstat_nv = 0;
    }
}
else {
    var test_cookie_value_freecounterstat = "no";
    acceptcookiefreecounterstat = 'no';
}
init_freecounterstat = 0;
var html_div = '<a href="https://www.freecounterstat.com/geozoom.php?c=63tjw7yey348a8swe2yndrut1sd2hr2g&base=counter4&type_clic=1" target="_blank"><img border="0" src="https://counter4.freecounterstat.com/private/counter.php?c=63tjw7yey348a8swe2yndrut1sd2hr2g&init=' + date_init.getTime() + '&init_freecounterstat=' + init_freecounterstat + '&library=library_counters&coef=1&type=150&lenght=7&pv=0" border="0"  alt="Click to see detail of visits and stats for this site" title="Click to see detail of visits and stats for this site"/></a>';

var nb_couleur;
if (screen.colorDepth != undefined) {
    nb_couleur = screen.colorDepth;
}
else if (screen.pixelDepth != undefined) {
    nb_couleur = screen.pixelDepth;
}
else {
    nb_couleur = 0;
}
var browser = parseInt(navigator.appVersion);
if (browser >= 4) { var resolution = (screen.height + "*" + screen.width) }
else { var resolution; }
if (navigator.appName.indexOf("Microsoft Internet Explorer") != -1) { langue = navigator.systemLanguage; }
else { langue = navigator.language; }
langue = langue.substring(0, 2);
var date_freecounterstat = new Date();

var ref = document.referrer;
var bro_nom = "wget";


html_div += '<img style="border:none" src = "https://counter4.optistats.ovh:4433/private/pointeur/pointeur.gif?|63tjw7yey348a8swe2yndrut1sd2hr2g|' + escape(resolution) + '|' + escape(langue) + '|' + escape(nb_couleur) + '|' + Math.round(date_freecounterstat.getTime() / 1000) + '|' + test_cookie_value_freecounterstat + '|other|||wget|1|United+States|US|40.44420|-79.95570|Pittsburgh|Carnegie+Mellon+University|-14400|' + init_freecounterstat_nv + '|1679449518|' + acceptcookiefreecounterstat + '|' + escape(document.URL) + '|' + escape(ref) + '|js|128.237.82.7|||&init=' + date_init.getTime() + '" border="0"  width="1" height="1">';

var xhrarray = {};
var extension1 = false;
var extension2 = false;
var extension3 = false;



document.getElementById('sfc63tjw7yey348a8swe2yndrut1sd2hr2g').innerHTML = html_div;

freecounterstat_test_cookie_value = GetCookie('acceptcookie');
if (freecounterstat_test_cookie_value == null && freecounterstat_test_cookie_value != "okg") {
    EcrireCookieGeo('acceptcookie', 'ok', 86400);
}

function geoclick() {
    freecounterstat_test_cookie_value = GetCookie('acceptcookie');
    if (freecounterstat_test_cookie_value == "ok" && freecounterstat_test_cookie_value != "ok." && freecounterstat_test_cookie_value != "okg" && freecounterstat_test_cookie_value != "okz") {
        freecounterstat_test_cookie = "012235;63tjw7yey348a8swe2yndrut1sd2hr2g;en;";
        EcrireCookieGeo('acceptcookie', 'ok.', 86400);
    }
}


function popup84() {
    items = new Array();
    if (top.location != self.document.location) {
        items = document.getElementsByTagName('a');
        parent.document.onclick = geoclick;
    }
    else {
        items = document.getElementsByTagName('a');
        if (window.addEventListener) document.body.addEventListener('click', geoclick, false)
        if (window.attachEvent) document.body.attachEvent("onclick", geoclick)
    }
    for (var i = 0; i < items.length; i++) {
        if (items[i].onclick == undefined) items[i].onclick = geoclick;
    }
}
document.onclick = geoclick;

