// Botones "Copiar" de la sección de contacto (correo y teléfono)
document.querySelectorAll('.copy[data-copy]').forEach(function(btn){
  btn.addEventListener('click', function(){
    var el = document.getElementById(btn.dataset.copy), text = el.textContent, label = btn.dataset.label;
    function done(msg){ btn.textContent = msg; setTimeout(function(){ btn.textContent = label; }, 1800); }
    function select(){
      var r = document.createRange(); r.selectNodeContents(el);
      var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
      done('Selecciónalo y copia');
    }
    try{ navigator.clipboard.writeText(text).then(function(){ done('Copiado ✓'); }, select); }
    catch(e){ select(); }
  });
});
