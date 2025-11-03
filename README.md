# Suporte Técnico System Help - Completo (Supabase Auth + Histórico)

Este pacote contém a versão completa com autenticação via Supabase Auth, painel em lista simples, atribuição de técnico, alteração de status e histórico concatenado.

## Passos pós-deploy (resumo):
1. No Supabase:
   - Ative Auth (Email + Password).
   - Crie usuários para os técnicos (ex.: joao@example.com) e defina senha (ex.: systemhelp123).
   - Crie a tabela `solicitacoes` com a seguinte estrutura sugerida:
     ```sql
     CREATE TABLE IF NOT EXISTS solicitacoes (
       id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
       nome text,
       telefone text,
       problema text,
       status text DEFAULT 'Pendente',
       tecnico_responsavel text,
       historico text,
       criado_em timestamptz DEFAULT now()
     );
     ```

2. No Vercel (Settings → Environment Variables):
   - `SUPABASE_URL = https://jsnsinetznyjlsweklbr.supabase.co`
   - `SUPABASE_ANON_KEY = <anon public key>`
   - `SUPABASE_SERVICE_KEY = <service_role key>`  (Mantenha secreto)

3. Deploy no Vercel: faça upload do ZIP ou do repositório e clique em Deploy.

4. Acessos:
   - Site público: `https://<seu-projeto>.vercel.app/`
   - Painel técnico: `https://<seu-projeto>.vercel.app/painel/`
   - Login: `https://<seu-projeto>.vercel.app/painel/login.html` (use credenciais do Supabase Auth)

## Observações de segurança
- As rotas `/api/*` usam a `SERVICE_ROLE` (variável de ambiente) apenas no backend — **não exponha** esta chave no frontend.
- O endpoint `/api/get-tickets` e `/api/update-ticket` validam o token do usuário antes de retornar/alterar dados.
- Para produção em larga escala, considere regras RLS (Row Level Security) no Supabase e rotinas de auditoria mais robustas.
