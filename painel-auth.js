
// Simulação de integração Supabase
let currentView = 'abertos';
function logout() { window.location.href = 'login.html'; }
function loadTickets(view) {
  document.getElementById('btnAbertos').classList.toggle('active', view === 'abertos');
  document.getElementById('btnResolvidos').classList.toggle('active', view === 'resolvidos');
  const container = document.getElementById('ticketsContainer');
  container.innerHTML = '<div class="ticket-card"><div class="ticket-status status-pendente">🟡 Exemplo de Ticket</div><div>Este é um exemplo visual do painel.</div><div class="historico">[2025-11-03 12:00] Ticket criado</div></div>';
}
window.onload = () => loadTickets('abertos');
