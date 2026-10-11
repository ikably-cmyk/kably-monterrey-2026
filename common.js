/* caducidad: 15 días después de Monterrey (23 oct 2026) */
(function(){
  var EXP=new Date('2026-11-08T00:00:00-06:00');
  if(new Date()>=EXP) document.body.classList.add('expired');
})();
var lang='es';
function setLang(l){
  lang=l; document.documentElement.lang=l;
  document.querySelectorAll('[data-es]').forEach(function(e){e.innerHTML=e.getAttribute('data-'+l);});
  document.querySelectorAll('.lang button').forEach(function(b){b.classList.toggle('on',b.dataset.l===l);});
  try{localStorage.setItem('kmty-lang',l);}catch(e){}
  if(window.onLang) window.onLang(l);
}
(function(){var l='es';try{var q=new URLSearchParams(location.search).get('lang');if(q==='en'||q==='es')l=q;else{var s=localStorage.getItem('kmty-lang');if(s==='en'||s==='es')l=s;}}catch(e){}setLang(l);})();
