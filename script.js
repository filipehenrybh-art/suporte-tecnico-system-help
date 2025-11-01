// Sends ticket to serverless API on Vercel which stores in Supabase
document.getElementById('support-form').addEventListener('submit', async function(e){
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const problema = document.getElementById('problema').value.trim();
  if(!nome || !telefone || !problema) return alert('Preencha todos os campos');
  const payload = { nome, telefone, problema };
  try{
    const res = await fetch('/api/create-ticket', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) });
    if(!res.ok) throw new Error('Erro ao enviar');
    document.getElementById('support-form').reset();
    const msg = document.getElementById('msg'); msg.style.display='block';
    setTimeout(()=>msg.style.display='none',4000);
  }catch(err){
    alert('Erro ao enviar solicitação. Tente novamente mais tarde.');
    console.error(err);
  }
});
