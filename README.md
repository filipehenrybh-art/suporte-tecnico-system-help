# Suporte Técnico System Help (Online - Supabase)

Esta versão usa Supabase para armazenar solicitações e Vercel para hosting (front + API + painel).

**Configurar (resumo):**
1. No Supabase, crie um projeto e uma tabela `solicitacoes` com colunas:
   - id (integer, identity)
   - nome (text)
   - telefone (text)
   - problema (text)
   - criado_em (timestamp with time zone) default: now()

2. No Vercel, adicione variáveis de ambiente (Settings → Environment Variables) se desejar:
   - SUPABASE_URL (se usar no serverless) - já embutido no código como placeholder
   - SUPABASE_KEY (anon public key) - já embutido como placeholder

3. Fazer deploy no Vercel desta pasta. Endpoints importantes:
   - POST /api/create-ticket  → recebe JSON {nome,telefone,problema} e insere no Supabase
   - Painel técnico: /painel/ (precisa de login)

**Credenciais iniciais (padrão)**
- admin / systemhelp123
- joao / systemhelp123
- filipe / systemhelp123
- frederico / systemhelp123
- sergio / systemhelp123
- gustavo / systemhelp123

⚠️ Observação: Autenticação no painel é client-side (localStorage). Para maior segurança, implemente autenticação server-side ou use autenticação do Supabase.
