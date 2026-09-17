import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { CONTACT_EMAIL, LEGAL_NAME } from "@/lib/company";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Como ${LEGAL_NAME} trata dados pessoais no site rubix360.com.br, conforme a LGPD.`,
  alternates: { canonical: "/privacidade" },
};

const SECTIONS: LegalSection[] = [
  {
    title: "Controlador",
    body: [
      `O controlador dos dados pessoais tratados no site rubix360.com.br (o "Site") é ${LEGAL_NAME} ("Rubix360"). Esta Política segue a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados — LGPD) e a Lei nº 12.965/2014 (Marco Civil da Internet).`,
      "Os produtos da Rubix360 (como Placas 360, Assistente 360 e CRM 360) têm políticas de privacidade próprias, que se aplicam ao uso de cada um deles.",
    ],
  },
  {
    title: "Dados que tratamos",
    body: [
      [
        "Dados que você nos envia por e-mail ou pelo atendimento virtual: nome, empresa, e-mail, telefone e o conteúdo das mensagens;",
        "Dados técnicos de navegação: endereço IP, data e hora de acesso, navegador, dispositivo e páginas acessadas, registrados pelos servidores que hospedam o Site.",
      ],
    ],
  },
  {
    title: "Para que usamos",
    body: [
      [
        "responder contatos, dúvidas e pedidos de proposta (procedimentos preliminares a contrato, art. 7º, V, da LGPD);",
        "manter o Site seguro e funcionando e cumprir a guarda de registros de acesso exigida pelo Marco Civil da Internet (art. 7º, II e IX, da LGPD);",
        "enviar comunicações comerciais, somente quando você tiver pedido ou consentido, podendo cancelar a qualquer momento.",
      ],
      "Não vendemos dados pessoais.",
    ],
  },
  {
    title: "Compartilhamento",
    body: [
      "Compartilhamos dados apenas com fornecedores necessários para operar o Site e o atendimento, que atuam como operadores e seguem nossas instruções:",
      [
        "hospedagem e entrega do Site (Vercel);",
        "fontes tipográficas carregadas de CDN (Fontshare), que recebem o endereço IP do visitante;",
        "o atendimento virtual Assistente 360, operado pela própria Rubix360, e os provedores de nuvem e de inteligência artificial que o sustentam.",
      ],
      "Alguns desses fornecedores podem processar dados fora do Brasil, com as salvaguardas previstas no art. 33 da LGPD. Também podemos compartilhar dados quando exigido por lei ou por ordem de autoridade competente.",
    ],
  },
  {
    title: "Cookies e armazenamento local",
    body: [
      "O Site não usa cookies de publicidade. O atendimento virtual pode guardar no seu navegador um identificador para manter a conversa entre páginas. Você pode apagar esses dados nas configurações do navegador a qualquer momento.",
    ],
  },
  {
    title: "Retenção",
    body: [
      "Guardamos os dados pelo tempo necessário para cumprir as finalidades acima: mensagens de contato enquanto durar a tratativa comercial e registros de acesso pelo prazo de 6 meses previsto no Marco Civil da Internet, salvo obrigação legal de guarda por mais tempo.",
    ],
  },
  {
    title: "Seus direitos",
    body: [
      `Conforme o art. 18 da LGPD, você pode confirmar se tratamos seus dados, acessá-los, corrigi-los, pedir anonimização, bloqueio ou eliminação, solicitar portabilidade, saber com quem os compartilhamos e revogar consentimentos. Para exercer qualquer direito, escreva para ${CONTACT_EMAIL}. Você também pode reclamar à Autoridade Nacional de Proteção de Dados (ANPD).`,
    ],
  },
  {
    title: "Segurança",
    body: [
      "Adotamos medidas técnicas e administrativas para proteger os dados, como conexão criptografada (HTTPS) e controle de acesso. Nenhum sistema é totalmente imune a incidentes; se ocorrer um incidente relevante, comunicaremos os titulares e a ANPD conforme a lei.",
    ],
  },
  {
    title: "Alterações",
    body: [
      "Esta Política pode ser atualizada. A versão vigente é sempre a publicada nesta página, com a data da última atualização indicada no topo.",
    ],
  },
];

export default function PrivacidadePage() {
  return <LegalPage title="Política de Privacidade" updated="17 de setembro de 2026" sections={SECTIONS} />;
}
