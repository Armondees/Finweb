# ROADMAP - FinWeb

## Visão Geral

Plano de evolução do FinWeb para um sistema financeiro pessoal completo, com controle de contas, transações, categorias, centros de custo, tags, cartões, contas a pagar/receber, fluxo de caixa, dashboard e relatórios.

---

## FASE 1: Fundação Estrutural ✅

**Status:** COMPLETO

- ✅ Schema inicial do sistema
- ✅ Row Level Security (RLS)
- ✅ Triggers de auditoria
- ✅ Índices de performance
- ✅ Views úteis
- ✅ Integração com Supabase
- ✅ Estrutura HTML/CSS/JS
- ✅ Layout base do sistema
- ✅ Sidebar de navegação padronizada
- ✅ Padrão visual dark/green

---

## FASE 2: Autenticação & Segurança ✅

**Status:** COMPLETO

- ✅ Login com email/senha
- ✅ Cadastro de usuário
- ✅ Sessão persistente
- ✅ Logout
- ✅ Recuperação de senha via Supabase
- ✅ Tela de redefinição de senha
- ✅ Uso de RLS no Supabase
- ✅ Fluxo separado para login, cadastro e reset de senha

---

## FASE 3: Cadastros Base ✅

**Status:** COMPLETO

### Contas
- ✅ CRUD de contas
- ✅ Saldo inicial e saldo atual
- ✅ Conta principal/padrão
- ✅ Tipos ajustados: Caixa, Corrente e Investimento
- ✅ Filtros por descrição, tipo e status
- ✅ Inativação de conta
- ✅ Grid com saldo atual
- ✅ Cards laterais com saldos por tipo
- ✅ Layout padronizado com menu retrátil

### Categorias e Subcategorias
- ✅ CRUD de categorias e subcategorias
- ✅ Ativação/inativação
- ✅ Filtros por descrição, tipo e status
- ✅ Validação de integridade para categoria com subcategorias
- ✅ Transferência de lançamentos entre subcategorias
- ✅ Layout padronizado

### Centros de Custo
- ✅ CRUD de centros de custo
- ✅ Filtro por descrição e status
- ✅ Integridade para inativação/exclusão vinculada a lançamentos
- ✅ Layout padronizado

### Tags
- ✅ CRUD de tags
- ✅ Filtro por descrição e status
- ✅ Layout padronizado
- ✅ Menu de ações sem ícones

---

## FASE 4: Transações & Extrato ✅

**Status:** COMPLETO / EM EVOLUÇÃO CONTROLADA

### Funcionalidades concluídas
- ✅ Criar, listar, editar e excluir transações
- ✅ Vincular conta, categoria/subcategoria, centro de custo e tags
- ✅ Suporte a múltiplas tags por lançamento via `transaction_tags`
- ✅ Filtro padrão por mês corrente e conta principal
- ✅ Navegação mensal com setas no card lateral
- ✅ Filtros por tipo, período, conta, categoria, centro de custo, tag e descrição
- ✅ Botão limpar filtros retornando ao padrão
- ✅ Grid estilo extrato com saldo anterior e saldo por linha
- ✅ Menu de ações por linha com botão `...`
- ✅ Indicadores visuais de status: confirmado/pendente
- ✅ Filtro por status confirmado/pendente
- ✅ Preparação visual e lógica para conciliação manual
- ✅ Filtro por conciliado/não conciliado
- ✅ Seleção de lançamentos por checkbox
- ✅ Totalizador dos lançamentos selecionados no rodapé
- ✅ Botão para conciliar lançamentos em lote
- ✅ Resumo do período com saldo conciliado e saldo sem conciliação
- ✅ Modal com painel de detalhes expansível, seguindo o padrão de Pagar/Receber
- ✅ Ajustes na grid para linhas compactas e sem scroll horizontal

### Banco de dados / arquitetura
- ✅ `transactions.status` definido como status oficial
- ✅ Status oficiais: `realized`, `planned`, `overdue`, `cancelled`
- ✅ Script preparado para campos de conciliação: `is_reconciled`, `reconciled_at`, `reconciled_by`
- ✅ Compatibilidade no frontend caso as colunas de conciliação ainda não existam

---

## FASE 5: Contas a Pagar e Contas a Receber ✅

**Status:** PRIMEIRA VERSÃO IMPLEMENTADA

### Funcionalidades concluídas
- ✅ Tela `payables_receivables.html`
- ✅ Menu lateral com item único “Pagar/Receber”
- ✅ Menu retrátil no padrão do sistema
- ✅ Card “Mês fechado” com navegação por setas
- ✅ Abertura padrão em Contas a Pagar
- ✅ Card de resumo do período
- ✅ Saldo previsto calculado por período
- ✅ Filtros por período, status, conta e descrição
- ✅ Grid de compromissos financeiros
- ✅ Retorno padrão apenas de títulos pendentes
- ✅ Modal de inclusão seguindo padrão visual do sistema
- ✅ Modal com detalhes expansíveis
- ✅ Data de inclusão com padrão do dia atual
- ✅ Calendário nos campos de data
- ✅ Tags no lançamento
- ✅ Recorrência e parcelamento
- ✅ Periodicidade semanal, quinzenal, mensal e anual
- ✅ Parcelamento por valor total e quantidade de parcelas
- ✅ Modal de baixa com possibilidade de alterar conta de baixa
- ✅ Baixa individual via menu de ações
- ✅ Baixa em lote por seleção
- ✅ Alteração em lote de detalhes para títulos pendentes
- ✅ Integridade para alterar/excluir parcela selecionada ou pendentes do grupo

### Próximos refinamentos
- ⬜ Melhorar validações de campos obrigatórios
- ⬜ Criar alertas de vencimento
- ⬜ Baixa parcial
- ⬜ Relatório específico de pagar/receber
- ⬜ Integração mais forte com fluxo de caixa previsto

---

## FASE 6: Fluxo de Caixa Previsto x Realizado 🟡

**Status:** PRÓXIMA PRIORIDADE

- ⬜ Consolidar transações realizadas
- ⬜ Consolidar compromissos previstos
- ⬜ Projetar saldo futuro por conta
- ⬜ Separar visão previsto x realizado
- ⬜ Destacar risco de saldo negativo
- ⬜ Filtros por conta, período, categoria e centro de custo
- ⬜ Gráfico mensal de evolução
- ⬜ Visão de fluxo diário/semanal/mensal

---

## FASE 7: Cartões de Crédito 🔜

**Status:** PLANEJADO

- ⬜ CRUD de cartões
- ⬜ Limite de crédito
- ⬜ Fechamento e vencimento
- ⬜ Vincular cartão a conta de pagamento
- ⬜ Gerar faturas automáticas
- ⬜ Lançar compra no cartão
- ⬜ Parcelamento de compras
- ⬜ Alocar compras na fatura correta
- ⬜ Pagamento de fatura gerando transação

---

## FASE 8: Dashboard Avançado 🔜

**Status:** PLANEJADO

- ⬜ Saldo total consolidado
- ⬜ Receita vs despesa do mês
- ⬜ Gastos por categoria
- ⬜ Gastos por conta
- ⬜ Contas a pagar próximas
- ⬜ Contas a receber próximas
- ⬜ Cartões em aberto
- ⬜ Fluxo previsto vs realizado
- ⬜ Gráficos por categoria e evolução mensal

---

## FASE 9: Relatórios Detalhados 🔜

**Status:** PLANEJADO

- ⬜ Resumo mensal
- ⬜ Gastos por categoria
- ⬜ Receitas por origem
- ⬜ Transações por conta
- ⬜ Transações por centro de custo
- ⬜ Transações por tag
- ⬜ Contas a pagar
- ⬜ Contas a receber
- ⬜ Fluxo de caixa anual
- ⬜ Exportação PDF, CSV/Excel e impressão

---

## FASE 10: Deploy & Otimização 🔜

**Status:** PLANEJADO

- ⬜ Deploy em Vercel ou Netlify
- ⬜ Domínio customizado
- ⬜ HTTPS
- ⬜ Configuração de URLs do Supabase em produção
- ⬜ Performance Lighthouse 90+
- ⬜ Mobile responsivo
- ⬜ PWA
- ⬜ Revisão das policies RLS

---

## Progresso Geral

```text
FASE 1:  ████████████████████ 100% ✅ Fundação Estrutural
FASE 2:  ████████████████████ 100% ✅ Autenticação & Segurança
FASE 3:  ████████████████████ 100% ✅ Cadastros Base
FASE 4:  ████████████████████ 100% ✅ Transações & Extrato
FASE 5:  ████████████████░░░░  80% ✅ Pagar/Receber v1
FASE 6:  ████░░░░░░░░░░░░░░░░  20% 🟡 Fluxo de Caixa
FASE 7:  ░░░░░░░░░░░░░░░░░░░░   0% 🔜 Cartões
FASE 8:  ░░░░░░░░░░░░░░░░░░░░   0% 🔜 Dashboard Avançado
FASE 9:  ░░░░░░░░░░░░░░░░░░░░   0% 🔜 Relatórios
FASE 10: ░░░░░░░░░░░░░░░░░░░░   0% 🔜 Deploy & Otimização
```

---

## Próxima Prioridade Recomendada

### 1. Fluxo de Caixa Previsto x Realizado
Agora que transações, saldos, conciliação e Pagar/Receber estão estruturados, o próximo passo natural é consolidar tudo em uma visão de fluxo futuro por conta e por período.

### 2. Refinamento de Pagar/Receber
Finalizar alertas, baixa parcial, relatórios e ajustes finos de validação.

### 3. Cartões de Crédito
Após o fluxo previsto estar consistente, cartões entram como nova origem de compromissos futuros.

---

## Últimas Atualizações

- 2026-04-27: Roadmap inicial criado.
- 2026-05-02: Atualizado progresso das fases concluídas e inclusão de Contas a Pagar e Contas a Receber.
- 2026-05-03: Padronização da tabela `transactions`: `status` como coluna oficial.
- 2026-05-04: Implementado padrão visual consolidado dos cadastros, evolução de Pagar/Receber, múltiplas tags, grid de extrato com saldo por linha e preparação de conciliação manual.
