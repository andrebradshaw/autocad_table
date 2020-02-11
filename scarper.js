var reg = (o, n) => o ? o[n] : '';
var cn = (o, s) => o ? o.getElementsByClassName(s) : console.log(o);
var tn = (o, s) => o ? o.getElementsByTagName(s) : console.log(o);
var gi = (o, s) => o ? o.getElementById(s) : console.log(o);
var rando = (n) => Math.round(Math.random() * n);
var unq = (arr) => arr.filter((e, p, a) => a.indexOf(e) == p);
var delay = (ms) => new Promise(res => setTimeout(res, ms));

var command_table = [];

async function getDoc(url){
  var res = await fetch(url);
  var text = await res.text();
  return new DOMParser().parseFromString(text,'text/html');
}

async function getPageLinks(){
  var pages = '-+?3ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
  for(var i=0; i<pages.length; i++){
    var res = await getCommandsFromList(pages[i]);
    await delay(rando(1000)+333);
  }
  console.log(command_table);
}


async function getCommandsFromList(p){
  console.log(`starting ${p}`);
  var doc = await getDoc(`https://www.cadforum.cz/cadforum_en/command.asp?ini=${encodeURIComponent(p)}&lan=EN`);
  var links = Array.from(tn(tn(cn(doc,'mainbox')[0],'ul')[0],'a')).map(el=> el.href);
  for(var i=0; i<links.length; i++){
    var alt_commands = await getAltLangs(links[i]);
    command_table.push(alt_commands);
    await delay(rando(1000));
  }

}

async function getAltLangs(url){
  var doc = await getDoc(url);
  var alts = Array.from(tn(cn(doc,'mainbox')[0],'h4')).map(el=> {
    return {
      command: reg(/(?<=<img.+?>\s*).+?(?=\s*<)/.exec(el.innerHTML),0).trim(),
      lang: el.getAttribute('lang')
    };
  });
  return alts;
}


getPageLinks()
