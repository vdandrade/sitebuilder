/// <reference path="componentes.js" />

function mainDKL() {
    var descreveClasses = [["body", "classe da página"]];

    var contLeft="";
    contLeft += "";

    var links = new Array();
    var l = new link("l"); l.url = "#"; l.desc = "/ENDEREÇOS"; links.push(l)
    var l = new link("l"); l.url = "#"; l.desc = "JUIZ DE FORA<br>R. Joas das Couves, 12<br>Tel.:(32)6243-9192<br>"; links.push(l)
    var l = new link("l"); l.url = "#"; l.desc = "PETRÓPOLIS<br>R. Joas das Couves, 23<br>Tel.:(32)6243-9192<br>"; links.push(l)
    var l = new link("l"); l.url = "#"; l.desc = "CONS.LAFAIETE<br>R. Joas das Couves, 23<br>Tel.:(32)6243-9192<br>"; links.push(l)
    var l = new link("l"); l.url = "#"; l.desc = "CONGONHAS<br>R. Joas das Couves, 23<br>Tel.:(32)6243-9192<br>"; links.push(l)
    var l = new link("l"); l.url = "#"; l.desc = "BELO HORIZONTE<br>R. Joas das Couves, 23<br>Tel.:(32)6243-9192<hr>"; links.push(l)
    var l = new link("l"); l.url = "#"; l.desc = "/PROCEDIMENTOS"; links.push(l)
    var l = new link("l"); l.url = "/Botox"; l.desc = "BOTOX"; links.push(l)
    var l = new link("l"); l.url = "/Preencimento"; l.desc = "PREENCHIMENTO"; links.push(l)
    var l = new link("l"); l.url = "/Remocao-de-Tatuagem"; l.desc = "REMOÇÃO DE TATUAGEM"; links.push(l)
    var l = new link("l"); l.url = "#"; l.desc = "OUTOS"; links.push(l)
    var l = new link("l"); l.url = "#"; l.desc = "/CONTATO & CONSULTAS"; links.push(l)

    //container de 4/12 c/ backg video
    document.body.innerHTML += addNavLeftVideo("Dra. Karla Lacerda",links, "col m4", "videoID", descreveClasses);
    //iFrame 8/12
    //document.body.innerHTML += addDivIFrame("url", "col m8", descreveClasses);
    //Logotipo
    //Menu







    document.body.innerHTML += addNavBar("VPA", ["Construções","Urbanismo","Equipamentos"],descreveClasses);
    document.body.innerHTML += addParallaxContainer("VPA Construções","Agora entrando em mares nunca dantes navegados!","EnTrAr>>","http://grupovpa.com.br","foto.jpg","foto cidade escura", descreveClasses);
    var secs = [addIconText("flash_on", "Acelera Tudo", "Framework feito para acelerar o desenvolvimento de sites. Pode usar que é free", descreveClasses),
                addIconText("group", "Grupos de sei-la-o-que", "Cria grupos de pessoa sinteressadas em bla-bla-bla", descreveClasses),
                addIconText("settings", "Configuracoes", "IDEIA, COLOCAR TAMANHO DAS SEÇÕES DE ACORDO COM O NÚMERO DE SECOES NO ARRAY!!", descreveClasses)];
    document.body.innerHTML += addContainer(addSectionContainer(secs,descreveClasses));
    document.body.innerHTML += addOutroParallaxContainer("Agora entrando em mares nunca dantes navegados!", "foto.jpg", "foto cidade escura", descreveClasses);
    document.body.innerHTML += addContainer(addCardPanel("Putz contenido seco", "teal lighten-2"));

    document.body.innerHTML += addDataGrid();

    document.body.innerHTML += descreveClasses.toString();
    document.body.innerHTML += addDiv("", "Teste de DIV Materialize");
    document.body.innerHTML=document.body.innerHTML.replace('@deu', 'Teste');
}

function addDataGrid() {
    
    var c = cell;
    var dg = new dragGrid('tab');

    dg.line.push(new Array());       //adiciona linha
    c = new cell('ce'); c.h = 2; c.w = 2; c.tag = 1000; dg.line[dg.line.length - 1].push(c);  //cria e adiciona celula

    return (dg.getHtml());
}
