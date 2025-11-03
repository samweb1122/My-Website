function toggleMobileNav(){
  alert('If you want a mobile menu, I can add one. For now use page links.');
}

/* copy contact form message to clipboard */
function copyMessage(e){
  e.preventDefault();
  const name = document.getElementById('nm').value.trim();
  const email = document.getElementById('em').value.trim();
  const msg = document.getElementById('msg').value.trim();
  const plain = Name: ${name}\nEmail: ${email}\n\n${msg};
  navigator.clipboard.writeText(plain).then(()=> {
    alert('Message copied to clipboard. Paste it into WhatsApp or email.');
  }).catch(()=> {
    prompt('Copy this message:', plain);
  });
}

function copySupport(){
  const t = document.getElementById('supportText');
  t.select();
  navigator.clipboard.writeText(t.value).then(()=> alert('Support message copied!')).catch(()=> prompt('Copy this:', t.value));
}
