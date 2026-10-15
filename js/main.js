// Botón "Copiar correo" de la sección de contacto
document.getElementById('copyBtn').addEventListener('click', function(){
  var btn = this, el = document.getElementById('mail'), text = el.textContent;
  function done(msg){ btn.textContent = msg; setTimeout(function(){ btn.textContent = 'Copiar correo'; }, 1800); }
  function select(){
    var r = document.createRange(); r.selectNodeContents(el);
    var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
    done('Selecciónalo y copia');
  }
  try{ navigator.clipboard.writeText(text).then(function(){ done('Copiado ✓'); }, select); }
  catch(e){ select(); }
});
