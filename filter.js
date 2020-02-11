var reg = (o, n) => o ? o[n] : '';
var cn = (o, s) => o ? o.getElementsByClassName(s) : console.log(o);
var tn = (o, s) => o ? o.getElementsByTagName(s) : console.log(o);
var gi = (o, s) => o ? o.getElementById(s) : console.log(o);
var rando = (n) => Math.round(Math.random() * n);
var unq = (arr) => arr.filter((e, p, a) => a.indexOf(e) == p);
var delay = (ms) => new Promise(res => setTimeout(res, ms));
var ele = (t) => document.createElement(t);
var attr = (o, k, v) => o.setAttribute(k, v);

var a = (l, r) => r.forEach(a => attr(l, a[0], a[1]));

var svgs = {
  close: `<svg x="0px" y="0px" viewBox="0 0 100 100"><g style="transform: scale(0.85, 0.85)" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><g transform="translate(2, 2)" stroke="#e21212" stroke-width="8"><path d="M47.806834,19.6743435 L47.806834,77.2743435" transform="translate(49, 50) rotate(225) translate(-49, -50) "/><path d="M76.6237986,48.48 L19.0237986,48.48" transform="translate(49, 50) rotate(225) translate(-49, -50) "/></g></g></svg>`,
  eye: `<svg transform="translate(-8, 5)" width="18px" height="18px" viewBox="0 0 137.145 137.145" enable-background="new 0 0 137.145 137.145">  <g>    <g>      <path fill="#007862" d="m109.715,0h-82.286c-15.148,0-27.429,12.281-27.429,27.428v82.287c0,15.148 12.28,27.429 27.429,27.429h82.286c15.149,0 27.429-12.281 27.429-27.429v-82.287c0-15.147-12.28-27.428-27.429-27.428zm13.715,102.858c0,11.361-9.21,20.572-20.571,20.572h-68.573c-11.361,0-20.572-9.211-20.572-20.572v-68.572c0-11.361 9.21-20.572 20.572-20.572h68.572c11.361,0 20.571,9.211 20.571,20.572v68.572zm-54.857-61.715c-32.917,0.137-41.143,27.429-41.143,27.429s8.226,27.292 41.143,27.429c32.845,0.137 41.143-27.429 41.143-27.429s-8.298-27.566-41.143-27.429zm0,48.001c-11.361,0-20.571-9.21-20.571-20.572s9.21-20.572 20.571-20.572c11.361,0 20.572,9.211 20.572,20.572s-9.21,20.572-20.572,20.572zm0-27.429c-3.787,0-6.857,3.07-6.857,6.857 0,3.787 3.07,6.857 6.857,6.857 3.787,0 6.857-3.07 6.857-6.857 0.001-3.787-3.069-6.857-6.857-6.857z"/>    </g>  </g></svg>`,
  add: `<svg transform="translate(-8, 5)" width="18px" height="18px" viewBox="0 0 137.144 137.144" enable-background="new 0 0 137.144 137.144">  <g>    <g>      <path fill="#007862" d="M75.429,34.286H61.715v27.429H34.286v13.714h27.429v27.43h13.714v-27.43h27.429V61.715H75.429V34.286z M109.715,0H27.429    C12.28,0,0,12.281,0,27.429v82.286c0,15.149,12.28,27.429,27.429,27.429h82.286c15.149,0,27.429-12.28,27.429-27.429V27.429    C137.144,12.281,124.864,0,109.715,0z M123.43,102.858c0,11.361-9.21,20.572-20.571,20.572H34.286    c-11.361,0-20.571-9.21-20.571-20.572V34.286c0-11.361,9.21-20.572,20.571-20.572h68.573c11.361,0,20.571,9.21,20.571,20.572    V102.858z"/>    </g>  </g></svg>`,
  micon: `<svg transform="translate(-8, 5)" width="18px" height="18px" x="0px" y="0px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve"><path fill="#007862" d="M37.341,37.567c0.264,0,0.526-0.104,0.724-0.31c2.852-2.987,4.487-7.332,4.487-11.922c0-4.589-1.636-8.934-4.486-11.921  c-0.381-0.399-1.016-0.414-1.414-0.033c-0.399,0.382-0.414,1.015-0.033,1.414c2.5,2.619,3.934,6.461,3.934,10.54  c0,4.08-1.434,7.922-3.935,10.541c-0.381,0.399-0.366,1.032,0.033,1.414C36.844,37.476,37.093,37.567,37.341,37.567z"/><path fill="#007862" d="M34.016,34.482c0.252,0,0.504-0.095,0.698-0.284c2.225-2.172,3.501-5.401,3.501-8.861c0-3.461-1.276-6.69-3.501-8.862  c-0.395-0.385-1.027-0.378-1.414,0.018c-0.386,0.396-0.378,1.028,0.018,1.414c1.841,1.797,2.897,4.506,2.897,7.431  s-1.057,5.633-2.897,7.43c-0.396,0.386-0.403,1.019-0.018,1.414C33.496,34.382,33.756,34.482,34.016,34.482z"/><path fill="#007862" d="M30.084,29.571c-0.424,0.354-0.479,0.985-0.126,1.409c0.198,0.236,0.482,0.358,0.769,0.358c0.226,0,0.453-0.076,0.641-0.232  c1.572-1.314,2.511-3.472,2.511-5.77c0-2.333-0.961-4.508-2.57-5.82c-0.428-0.35-1.058-0.282-1.407,0.144  c-0.349,0.428-0.284,1.058,0.144,1.407c1.148,0.936,1.834,2.532,1.834,4.27C31.878,27.05,31.207,28.633,30.084,29.571z"/><path fill="#007862" d="M24.03,12.536l-8.203,6.134h-4.275c-0.553,0-1,0.447-1,1v11.334c0,0.553,0.447,1,1,1h4.275l8.203,6.134  c0.176,0.132,0.387,0.199,0.599,0.199c0.152,0,0.307-0.035,0.448-0.105c0.338-0.17,0.552-0.516,0.552-0.895v-24  c0-0.379-0.214-0.725-0.552-0.895C24.739,12.275,24.332,12.31,24.03,12.536z M23.629,35.341l-6.87-5.138  c-0.173-0.129-0.383-0.199-0.599-0.199h-3.608V20.67h3.608c0.216,0,0.426-0.07,0.599-0.199l6.87-5.138V35.341z"/></svg>`,
  micoff: `<svg transform="translate(-8, 5)" width="18px" height="18px" x="0px" y="0px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve"><path fill="#db0f3c" d="M35.735,24.4l4.542-4.548c0.39-0.392,0.39-1.024-0.001-1.415c-0.391-0.389-1.024-0.39-1.415,0.001l-4.545,4.552  l-4.545-4.552c-0.391-0.391-1.024-0.39-1.415-0.001c-0.391,0.391-0.391,1.023-0.001,1.415l4.542,4.548l-4.542,4.547  c-0.39,0.392-0.39,1.024,0.001,1.415c0.195,0.194,0.451,0.292,0.707,0.292s0.513-0.098,0.708-0.293l4.545-4.551l4.545,4.551  c0.195,0.195,0.452,0.293,0.708,0.293s0.512-0.098,0.707-0.292c0.391-0.391,0.391-1.023,0.001-1.415L35.735,24.4z"/><path fill="#db0f3c" d="M22.642,38.06c0.152,0,0.306-0.035,0.448-0.105c0.338-0.17,0.552-0.516,0.552-0.895v-24c0-0.379-0.214-0.725-0.552-0.895  c-0.341-0.168-0.744-0.132-1.047,0.094l-8.2,6.134H9.569c-0.553,0-1,0.447-1,1v11.334c0,0.553,0.447,1,1,1h4.273l8.2,6.134  C22.219,37.992,22.43,38.06,22.642,38.06z M21.642,35.063l-6.867-5.137c-0.173-0.129-0.383-0.199-0.599-0.199h-3.606v-9.334h3.606  c0.216,0,0.426-0.07,0.599-0.199l6.867-5.137V35.063z"/></svg>`,
  locked: `<svg transform="translate(0, -2.5)" width="28px" height="28px" version="1.1"  x="0px" y="0px" viewBox="0 0 100.25 100.25" style="enable-background:new 0 0 100.25 100.25;" xml:space="preserve">  <path fill="#db0f3c" d="M79,36.5h-5.5V36c0-12.958-10.542-23.5-23.5-23.5S26.5,23.042,26.5,36v0.5H21c-0.828,0-1.5,0.672-1.5,1.5v48  c0,0.828,0.672,1.5,1.5,1.5h58c0.828,0,1.5-0.672,1.5-1.5V38C80.5,37.172,79.828,36.5,79,36.5z M29.5,36  c0-11.304,9.196-20.5,20.5-20.5S70.5,24.696,70.5,36v0.5h-41V36z M77.5,84.5h-55v-45h55V84.5z"/></svg>`,
  unlocked: `<svg transform="translate(0, -4.5)" width="28px" height="28px" version="1.1"  x="0px" y="0px" viewBox="0 0 100.25 100.25" style="enable-background:new 0 0 100.25 100.25;" xml:space="preserve">  <path fill="#007862" d="M79,43H29.5V29.5C29.5,18.196,38.696,9,50,9s20.5,9.196,20.5,20.5c0,0.828,0.672,1.5,1.5,1.5s1.5-0.672,1.5-1.5  C73.5,16.542,62.958,6,50,6S26.5,16.542,26.5,29.5V43H21c-0.828,0-1.5,0.672-1.5,1.5v48c0,0.828,0.672,1.5,1.5,1.5h58  c0.828,0,1.5-0.672,1.5-1.5v-48C80.5,43.672,79.828,43,79,43z M77.5,91h-55V46h55V91z"/></svg>`
};

function aninCloseBtn() {
  var l1 = tn(this, 'path')[0];
  var l2 = tn(this, 'path')[1];
  l1.style.transform = "translate(49px, 50px) rotate(45deg) translate(-49px, -50px)";
  l1.style.transition = "all 233ms";
  l2.style.transform = "translate(49px, 50px) rotate(135deg) translate(-49px, -50px)";
  l2.style.transition = "all 233ms";
}

function anoutCloseBtn() {
  var l1 = tn(this, 'path')[0];
  var l2 = tn(this, 'path')[1];
  l1.style.transform = "translate(49px, 50px) rotate(225deg) translate(-49px, -50px)";
  l1.style.transition = "all 233ms";
  l2.style.transform = "translate(49px, 50px) rotate(225deg) translate(-49px, -50px)";
  l2.style.transition = "all 233ms";
}

function dragElement() {
  var el = this.parentElement;
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(this.id)) document.getElementById(this.id).onmousedown = dragMouseDown;
  else this.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    el.style.top = (el.offsetTop - pos2) + "px";
    el.style.left = (el.offsetLeft - pos1) + "px";
    el.style.opacity = "0.85";
    el.style.transition = "opacity 700ms";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
    el.style.opacity = "1";
  }
}



function createSearchHTML(){
  if (gi(document, 'command_loopup_cont')) gi(document, 'command_loopup_cont').outerHTML = '';

  var cont = ele('div');
  a(cont, [    ['id', 'command_loopup_cont'],    ['style', `position: fixed; top: 100px; left: 20%; z-index: ${new Date().getTime()}; width: 500px; border: 1px solid #004471; border-radius: 0.4em; background: transparent; padding: 0px;`]  ]);
  document.body.appendChild(cont);

  var head = ele('div');
  a(head, [    ['style', `width: 100%; background: #0a1114; border: 1.6px solid #0a1114; border-top-left-radius: 0.4em; border-top-right-radius: 0.4em; cursor: move;`]  ]);
  cont.appendChild(head);
  head.onmouseover = dragElement;

  var txt = ele('span');
  a(txt, [     ['style', `color: #fff; font-size: 1.1em; cursor: pointer; border-radius: 0.5em;`]  ]);
  head.appendChild(txt);
  txt.innerText = 'English 2 German lookup';

  var cls = ele('div');
  a(cls, [    ['style', `width: 22px; height: 22px; cursor: pointer; float: right;`]  ]);
  head.appendChild(cls);
  cls.innerHTML = svgs.close;
  cls.onmouseenter = aninCloseBtn;
  cls.onmouseleave = anoutCloseBtn;
  cls.onclick = () => cont.outerHTML = '';

  var cbod = ele('div');
  a(cbod, [ ['id','command_loopup_cbod'],   ['style', `width: 100%; border-bottom-right-radius: 0.4em; border-bottom-left-radius: 0.4em; background: #fff;`]  ]);
  cont.appendChild(cbod);

  var cmd = ele('input');
  a(cmd, [['placeholder','command'],    ['style', `width: 90%; padding: 4px; border: .5px solid #004471; border-radius: 0.4em; `]  ]);
  cbod.appendChild(cmd);
  cmd.onkeyup = getGermanFromEnglish;

}

function getGermanFromEnglish(e){
  if(e.key == 'Enter'){
    var command = this.value;
    var matches = command_table.filter(el=> el.some(ii=> new RegExp(command.replace(/\+/,'\+'),'i').test(ii.command)));
    var exact = command_table.filter(el=> el.some(ii=> ii.command.toLowerCase() == command.toLowerCase()));
    addSearchResultsHTML(exact);
    console.log(exact);
  }
}
createSearchHTML()

function addSearchResultsHTML(objArr){
  if(gi(document,'command_loopup_res')) gi(document,'command_loopup_res').outerHTML = '';
  var res = ele('div');
  a(res,[['id','command_loopup_res'],['style',`padding: 6px;`]]);
  gi(document,'command_loopup_cbod').appendChild(res);
  res.innerText = 'German:\n'+objArr[0].filter(el=> el.lang == 'de' )[0].command;
}

// getGermanFromEnglish('acadlog',command_table)
