/// <reference path="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.1/js/materialize.min.js" />

function addDiv(content,classes,classesDescriptor) {
    var ob = document.createElement("DIV");
    ob.classList = classes;
    ob.innerHTML = content;
    return ob.outerHTML;
}

function link(type) {
    this.url = "";
    this.desc = "";
}

function addNavLeftVideo(logoName,linksArray,classes,videoID,classesDescriptor) {
    var s='';
    s += '<div height="100%" class="col sm4">';
    s += '<nav class="white" role="navigation">';
    s += '<div class="nav-wrapper container">';
    s += '<a id="logo-container" href="#" class="brand-logo">' + logoName + '</a>';
    s += '<ul class="right hide-on-med-and-down">';
    for (var i = 0; i < linksArray.length; i++) {
        s += '<li><a href="' + linksArray[i].url + '">' + linksArray[i].desc + '</a></li>';
    }
    s += '</ul>';
    s += '<ul id="nav-mobile" class="side-nav">';
    for (var i = 0; i < linksArray.length; i++) {
        s += '<li><a href="' + linksArray[i].url + '">' + linksArray[i].desc + '</a></li>';
    }
    s += '</ul>';
    s += '<a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>';
    s += '</div>';
    s += '</nav>';
    s += '</div>';
    $(document).ready(function () { $('.button-collapse').sideNav(); });
    
    classesDescriptor.push(["white", "barra de navegação"]); 
    classesDescriptor.push(["brand-logo", "logotipo"]);
    return s;
}


function addNavBar(logoName,linksArray,classesDescriptor) {
    var s='';
    s += '<nav class="white" role="navigation">';
    s += '<div class="nav-wrapper container">';
    s += '<a id="logo-container" href="#" class="brand-logo">' + logoName + '</a>';
    s += '<ul class="right hide-on-med-and-down">';
    for (var i = 0; i < linksArray.length; i++) {
        s += '<li><a href="#">' + linksArray[i] + '</a></li>';
    }
    s += '</ul>';
    s += '<ul id="nav-mobile" class="side-nav">';
    for (var i = 0; i < linksArray.length; i++) {
        s += '<li><a href="#">' + linksArray[i] + '</a></li>';
    }
    s += '</ul>';
    s += '<a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>';
    s += '</div>';
    s += '</nav>';
    $(document).ready(function () { $('.button-collapse').sideNav(); });
    
    classesDescriptor.push(["white", "barra de navegação"]); 
    classesDescriptor.push(["brand-logo", "logotipo"]);
    return s;
}

function addParallaxContainer(titulo,texto,textoBotao,linkBotao,imgFundo,altImgFundo,classesDescriptor) {
    var s='';
    s += '<div id="index-banner" class="parallax-container">';
    s += '<div class="section no-pad-bot">';
    s += '<div class="container">';
    s += '<br><br>';
    s += '<h3 class="header center teal-text text-lighten-2">' + titulo + '</h3>';
    s += '<div class="row center">';
    s += '<h5 class="header col s12 light">' + texto + '</h5>';
    s += '</div>';
    s += '<div class="row center">';
    s += '<a href="' + linkBotao + '" id="download-button" class="btn-large waves-effect waves-light teal lighten-1">' + textoBotao + '</a>';
    s += '</div>';
    s += '<br><br>';
    s += '</div>';
    s += '</div>';
    s += '<div class="parallax"><img src="' + imgFundo + '" alt="' + altImgFundo + '"></div>';
    s += '</div>';
    $(document).ready(function(){$(".parallax").parallax();});
  return s;
}

function addOutroParallaxContainer(texto,imgFundo,altImgFundo,classesDescriptor) {
    var s='';
    s+='<div class="parallax-container valign-wrapper">';
    s+='<div class="section no-pad-bot">';
    s+='<div class="container">';
    s+='<div class="row center">';
    s+='<h5 class="header col s12 light">' + texto + '</h5>';
    s+='</div>';
    s+='</div>';
    s+='</div>';
    s+='<div name="test1" id="test1" class="parallax"><img src="' + imgFundo + '" alt="' + altImgFundo + '"></div>';
    s+='</div>';
    $(document).ready(function () { $(".parallax").parallax(); });
    return s;
  }

function addSectionContainer(sectionsArray, classesDescriptor) {
    var s = '';
    s += '<div class="section">';
    s += '<div class="row card-action">';
    for (var i = 0; i < sectionsArray.length; i++) {
        s += '<a href="#">' + sectionsArray[i] + '</a>';
    }
    s += '</div>';
    s += '</div>';
    return s;
}

function addIconText(icon,titulo,texto,classesDescriptor) {
    var s="";
    s+='<div class="col s12 m4">';
    s+='<div class="icon-block">';
    s+='<h2 class="center brown-text"><i class="material-icons">' + icon + '</i></h2>';
    s+='<h5 class="center">' + titulo + '</h5>';
    s+='<p class="light">' + texto + '</p>';
    s+='</div>';
    s+='</div>';
    return s;
}

function addCardPanel(content, colorClass) {
    var s = "";
    s += '<div class="card-panel ' + colorClass + '">';
    s += content;
    s += '</div>';
    return s;
}
function addRow(content, eclass) {
    var s = "";
    s += '<div class="row ' + eclass + '">';
    s += content;
    s += '</div>';
    return s;
}
function addContainer(content, eclass) {
    var s = "";
    s += '<div class="container ' + eclass + '">';
    s += content;
    s += '</div>';
    return s;
}


function addCard(icon,titulo,texto,classesDescriptor) {
    var s="";
    s+='<article id="post-140" class="post-140 post type-post status-publish format-standard has-post-thumbnail hentry category-catatan tag-fedora-workstation">';
    s+='<div class="card hoverable">';
    s+='<div class="card-image">';
    s+='<a href="http://fedora.or.id/2015/09/28/memasang-wps-office-di-fedora/"><img width="640" height="607" src="http://fedora.or.id/wp-content/uploads/2015/09/fedora-default.png" class="attachment-large wp-post-image" alt="fedora-default" /></a>';
    s+='<span class="card-title"><h5><a href="http://fedora.or.id/2015/09/28/memasang-wps-office-di-fedora/" rel="bookmark">Memasang WPS Office di Fedora</a></h5></span>';
    s+='</div>';
    s+='<div class="card-content">';
    s+='<div class="portfolio-overlay">';
    s+='<ul class="collection">';
    s+='<li class="collection-item avatar text-left"><img alt="" src="http://0.gravatar.com/avatar/6a7d1f244946a619883181f5b6f0cddd?s=32&#038;d=mm&#038;r=g" srcset="http://0.gravatar.com/avatar/6a7d1f244946a619883181f5b6f0cddd?s=64&amp;d=mm&amp;r=g 2x" class="avatar avatar-32 photo" height="32" width="32" /><span class="title blue-grey-text text-darken-3"> Bagus Aji Santoso</span>';
    s+='<p class="blue-grey-text text-darken-3"><ul class="post-categories">';
    s+='<li><a href="http://fedora.or.id/category/catatan/" rel="category tag">Catatan</a></li></ul></p>';
    s+='</li>';
    s+='</ul>';
    s+='</div>';
    s+='</div>';
    s+='</div>';
    s+='</article><!-- #post-## -->';

    return s;
}

function dragGrid(type) {
    this.line = [];
    this.getHtml = function () {
        return this.line[0][0].w + ' - ' + this.line[0][0].h;
    };
}
function cell(type) {
    this.w = 0;
    this.h = 0;
    this.tag = 0;
}

