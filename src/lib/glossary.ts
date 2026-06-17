// glossary.ts — plain-language PT-BR definitions for the technical terms used
// across the site. Each entry is auto-linked in body copy by `gloss()` so a
// buyer can hover/tap any jargon and read what it means.
//
// `label` is the tooltip heading; `def` the one-line explanation; `match` the
// strings to look for in the copy (case-insensitive; a trailing plural "s" is
// matched automatically, so list the singular).

export type GlossEntry = { label: string; def: string; match: string[] };

export const GLOSSARY: GlossEntry[] = [
  { label: "API", def: "Ponte que permite dois sistemas trocarem dados automaticamente, sem ninguém digitar nada.", match: ["API"] },
  { label: "ERP", def: "Sistema central de gestão da empresa — financeiro, estoque, compras, notas.", match: ["ERP"] },
  { label: "CRM", def: "Sistema que organiza o relacionamento com clientes e o funil de vendas.", match: ["CRM"] },
  { label: "Idempotente", def: "Operação que pode ser repetida sem causar efeito duplicado (ex.: não cria o mesmo pedido duas vezes).", match: ["idempotente", "conectores idempotentes"] },
  { label: "Cache", def: "Memória temporária que guarda respostas já obtidas para entregar mais rápido e mais barato na próxima vez.", match: ["cache", "cache inteligente", "camada de cache"] },
  { label: "Fallback", def: "Plano B automático: se a fonte principal falha, o sistema usa uma alternativa sem parar.", match: ["fallback"] },
  { label: "Vendor", def: "Fornecedor externo de dados ou serviço que o sistema consome.", match: ["vendor", "vendors externos"] },
  { label: "Drill-down", def: "Clicar em um número para ver o detalhe que está por trás dele.", match: ["drill-down"] },
  { label: "Prompt-engineering", def: "Técnica de escrever instruções para a IA. Aqui o usuário não precisa dela — basta perguntar normalmente.", match: ["prompt-engineering"] },
  { label: "Tabela FIPE", def: "Tabela de referência de preços de veículos usados no Brasil.", match: ["FIPE", "tabela FIPE"] },
  { label: "LLM", def: "Modelo de IA que entende e gera texto — a tecnologia por trás de assistentes como o ChatGPT.", match: ["LLM"] },
  { label: "Agente de IA", def: "IA que executa tarefas em várias etapas por conta própria, não apenas responde perguntas.", match: ["agente", "agentes"] },
  { label: "Workflow", def: "Fluxo de trabalho automatizado: uma sequência de etapas que roda sozinha.", match: ["workflow", "workflow automatizado", "workflows determinísticos"] },
  { label: "Guardrails", def: "Limites de segurança que impedem a IA de agir fora do que é permitido.", match: ["guardrails", "guardrails reais"] },
  { label: "RAG", def: "Técnica em que a IA responde consultando os SEUS dados e citando a fonte, em vez de “inventar”.", match: ["RAG"] },
  { label: "Azure", def: "Plataforma de computação em nuvem da Microsoft.", match: ["Azure"] },
  { label: "AWS", def: "Plataforma de computação em nuvem da Amazon.", match: ["AWS"] },
  { label: "Cloud", def: "Computação em nuvem: servidores e serviços acessados pela internet, sem máquinas locais.", match: ["Cloud"] },
  { label: "Infraestrutura como código", def: "Servidores e ambientes definidos em arquivos versionados, criados e recriados de forma automática e previsível.", match: ["infraestrutura como código", "infra como código"] },
  { label: "Observabilidade", def: "Enxergar em tempo real o que o sistema está fazendo — logs, métricas e alertas.", match: ["observabilidade", "observável"] },
  { label: "FinOps", def: "Disciplina de controlar e otimizar o custo da nuvem.", match: ["FinOps"] },
  { label: "MVP", def: "Versão mínima funcional do produto, lançada cedo para validar com uso real.", match: ["MVP"] },
  { label: "Multi-tenant", def: "Um mesmo sistema atende vários clientes com os dados isolados e seguros entre si.", match: ["multi-tenant"] },
  { label: "SaaS", def: "Software entregue como serviço por assinatura, acessado pela internet.", match: ["SaaS"] },
  { label: "Self-service", def: "O próprio cliente se cadastra e começa a usar sozinho, sem depender de equipe.", match: ["self-service", "onboarding self-service"] },
  { label: "Onboarding", def: "Processo de cadastrar e ativar um novo cliente ou usuário.", match: ["onboarding"] },
  { label: "Billing", def: "Cobrança e faturamento automatizados conforme o uso ou o plano.", match: ["billing"] },
  { label: "Permissionamento", def: "Controle de quem pode ver e fazer o quê dentro do sistema.", match: ["permissionamento"] },
  { label: "Fila", def: "Mecanismo que enfileira tarefas em ordem para processá-las sem perder nada em picos de demanda.", match: ["fila", "filas"] },
  { label: "Retry", def: "Nova tentativa automática quando uma operação falha temporariamente.", match: ["retry"] },
  { label: "Dead-letter", def: "Fila separada para mensagens que falharam, guardadas para análise — nada é perdido em silêncio.", match: ["dead-letter"] },
  { label: "Contratos versionados", def: "Acordos de formato entre sistemas com versões controladas, para mudanças não quebrarem integrações.", match: ["contratos versionados"] },
  { label: "ADR", def: "Registro de Decisão de Arquitetura: documento curto que explica por que cada escolha técnica foi feita.", match: ["ADR"] },
  { label: "Trade-off", def: "Escolha que troca um benefício por outro; deixamos explícito o que se ganha e o que se abre mão.", match: ["trade-off"] },
  { label: "Domain-driven", def: "Modelar o software a partir das regras reais do negócio, não de uma estrutura genérica.", match: ["domain-driven", "domain-driven design"] },
  { label: "Boundaries", def: "Fronteiras claras entre partes do sistema, para cada uma evoluir sem afetar as outras.", match: ["boundaries"] },
  { label: "Pipeline", def: "Esteira automatizada que move e transforma dados de uma ponta à outra.", match: ["pipeline"] },
  { label: "Lakehouse", def: "Repositório único que junta “lago de dados” e banco analítico para guardar e analisar grandes volumes.", match: ["lakehouse"] },
  { label: "Camadas medalion", def: "Organização dos dados em camadas: bruto → tratado → pronto para análise.", match: ["medalion", "camadas medalion", "camadas medalion"] },
  { label: "Semantic layer", def: "Camada que padroniza as métricas do negócio para todos lerem o mesmo número da mesma forma.", match: ["semantic layer"] },
  { label: "C-level", def: "Alta liderança da empresa — CEO, CFO, CTO e equivalentes.", match: ["C-level"] },
  { label: "Copiloto de IA", def: "Assistente de IA embarcado no sistema que ajuda o usuário a executar tarefas.", match: ["copiloto", "copilotos", "copilotos de venda"] },
  { label: "Telemetria", def: "Coleta automática de dados de uso e desempenho do sistema.", match: ["telemetria", "telemetria de uso"] },
  { label: "ROI", def: "Retorno sobre o investimento: quanto a solução devolve frente ao que custou.", match: ["ROI"] },
  { label: "Aggregator", def: "Componente que consulta vários fornecedores ao mesmo tempo e devolve uma resposta única.", match: ["aggregator", "aggregator multi-provider"] },
  { label: "Multi-provider", def: "Que usa vários fornecedores em paralelo, com redundância entre eles.", match: ["multi-provider"] },
  { label: "Subscription", def: "Assinatura: plano recorrente por cliente que define acesso e cobrança.", match: ["subscription", "billing por subscription"] },
  { label: "Cota", def: "Limite de uso contratado por cliente em um período.", match: ["cota", "controle de cota"] },
  { label: "White-label", def: "Produto que outra empresa revende com a própria marca.", match: ["white-label", "revenda white-label"] },
  { label: "B2B", def: "Negócios entre empresas (business-to-business).", match: ["B2B"] },
  { label: "Scoring", def: "Pontuação automática que prioriza — por exemplo, os leads mais promissores.", match: ["scoring"] },
  { label: "Lead", def: "Contato ou oportunidade de venda em potencial.", match: ["lead", "leads"] },
  { label: "Follow-up", def: "Acompanhamento: o próximo contato ou ação com o cliente.", match: ["follow-up"] },
  { label: "Determinístico", def: "Que produz sempre o mesmo resultado previsível para a mesma entrada.", match: ["determinístico", "determinísticos"] },
  { label: "Trigger", def: "Gatilho: um evento que dispara automaticamente uma ação.", match: ["trigger", "triggers"] },
  { label: "HL7/FHIR", def: "Padrões internacionais para troca de dados de saúde entre sistemas.", match: ["HL7/FHIR", "HL7", "FHIR"] },
  { label: "Anti-fraude", def: "Mecanismos que detectam e bloqueiam tentativas de fraude.", match: ["anti-fraude"] },
  { label: "Conciliação", def: "Cruzamento automático de registros (ex.: pagamentos × extratos) para achar divergências.", match: ["conciliação", "conciliação automática"] },
  { label: "OEE", def: "Indicador de Eficiência Global de Equipamento — mede a produtividade de máquinas na indústria.", match: ["OEE"] },
  { label: "Manutenção preditiva", def: "Usar dados para prever falhas e agir antes da quebra.", match: ["manutenção preditiva"] },
  { label: "Roteirização", def: "Cálculo automático das melhores rotas de entrega.", match: ["roteirização"] },
  { label: "Tracking", def: "Rastreamento em tempo real — por exemplo, de uma entrega.", match: ["tracking"] },
  { label: "Dealer ops", def: "Operação de concessionárias e revendas de veículos.", match: ["Dealer ops"] },
  { label: "Backend", def: "A parte do sistema que roda nos servidores: dados, regras e integrações.", match: ["backend"] },
  { label: "Frontend", def: "A parte visual do sistema, com a qual o usuário interage na tela.", match: ["frontend"] },
  { label: "DevEx", def: "Experiência de quem desenvolve: ferramentas e padrões que deixam o time mais produtivo.", match: ["DevEx"] },
  { label: "Tipagem rigorosa", def: "Código que declara o formato dos dados e evita toda uma classe de erros antes de ir ao ar.", match: ["tipagem rigorosa", "tipado", "tipagem"] },
  { label: "Go-live", def: "O momento em que o sistema entra em produção — no ar, em uso real.", match: ["go-live"] },
  { label: "Roadmap", def: "Plano de evolução do produto ao longo do tempo.", match: ["roadmap"] },
  { label: "Silos de dados", def: "Dados presos em sistemas isolados que não conversam entre si.", match: ["silos", "silos de dados"] },
  { label: "Dashboard", def: "Painel visual que reúne os principais números e indicadores em um só lugar.", match: ["dashboard", "dashboards"] },
  { label: "IA", def: "Inteligência Artificial.", match: ["IA"] },
  { label: "Marketplace", def: "Plataforma que reúne vários vendedores e compradores (ex.: Mercado Livre).", match: ["marketplace", "marketplaces"] },
  { label: "Sistemas legados", def: "Sistemas antigos que ainda são essenciais para a operação.", match: ["sistemas legados", "legado"] },
  { label: "Auditável", def: "Que deixa registro rastreável de tudo o que aconteceu, para conferência posterior.", match: ["auditável", "auditáveis", "auditoria", "audita"] },
  { label: "Escala", def: "Capacidade de crescer (mais usuários e volume) sem perder desempenho.", match: ["escala técnica", "estratégia de escala"] },
  { label: "Compensação automática", def: "Quando uma etapa falha, o sistema desfaz/ajusta as anteriores sozinho para manter tudo consistente.", match: ["compensação automática", "compensação"] },
];

// ── Matcher (built once) ─────────────────────────────────────────────────────
function escapeRegex(s: string): string {
  // Only escape true regex metacharacters. The `u` flag on GLOSS_RE makes
  // identity escapes like "\-" and "\/" invalid, so "-" and "/" must NOT be
  // escaped (they are literal outside a character class anyway).
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const ALIAS_MAP: Map<string, GlossEntry> = new Map();
for (const entry of GLOSSARY) {
  for (const alias of entry.match) {
    ALIAS_MAP.set(alias.toLowerCase(), entry);
  }
}

// Longest aliases first so multi-word terms win over their substrings
// (e.g. "semantic layer" before "layer", "infra como código" before "código").
const ALL_ALIASES = Array.from(ALIAS_MAP.keys()).sort((a, b) => b.length - a.length);

/** Global matcher. Capture group 1 is the alias (without the optional plural s). */
export const GLOSS_RE = new RegExp(
  `(?<![\\p{L}\\p{N}])(${ALL_ALIASES.map(escapeRegex).join("|")})s?(?![\\p{L}\\p{N}])`,
  "giu",
);

export function lookupAlias(alias: string): GlossEntry | undefined {
  return ALIAS_MAP.get(alias.toLowerCase());
}
