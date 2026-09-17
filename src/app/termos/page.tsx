import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { CONTACT_EMAIL, LEGAL_NAME } from "@/lib/company";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: `Termos de Uso do site rubix360.com.br, mantido por ${LEGAL_NAME}.`,
  alternates: { canonical: "/termos" },
};

const SECTIONS: LegalSection[] = [
  {
    title: "Aceitação",
    body: [
      `Estes Termos de Uso regulam o acesso e a navegação no site rubix360.com.br (o "Site"), mantido por ${LEGAL_NAME} ("Rubix360"). Ao usar o Site, você declara que leu e concorda com estes Termos e com a Política de Privacidade.`,
    ],
  },
  {
    title: "Finalidade do Site",
    body: [
      "O Site é institucional: apresenta a Rubix360, seus serviços de software, inteligência artificial, automação e cloud, e seus produtos (como Placas 360, Assistente 360 e CRM 360), além de canais de contato.",
      "Cada produto tem site, termos e política de privacidade próprios. A contratação de serviços ou produtos é regida pelo contrato ou pelos termos específicos de cada um, e não por estes Termos.",
    ],
  },
  {
    title: "Uso permitido",
    body: [
      "Ao usar o Site, você se compromete a não:",
      [
        "violar a legislação brasileira ou direitos de terceiros;",
        "tentar acessar áreas, sistemas ou dados sem autorização;",
        "enviar código malicioso, sobrecarregar ou interferir no funcionamento do Site;",
        "usar o Site ou o atendimento virtual para enviar conteúdo ilícito, ofensivo ou enganoso.",
      ],
    ],
  },
  {
    title: "Atendimento virtual",
    body: [
      "O Site oferece um assistente de atendimento (Assistente 360) que responde com o apoio de inteligência artificial. As respostas têm caráter informativo e não constituem proposta comercial, orçamento ou compromisso contratual, que só existem quando formalizados por escrito pela Rubix360.",
    ],
  },
  {
    title: "Propriedade intelectual",
    body: [
      `Marcas, logotipos, textos, imagens, layout e código do Site pertencem a ${LEGAL_NAME} ou a seus licenciantes e são protegidos pela legislação de propriedade intelectual. É proibido copiar, reproduzir ou explorar esse conteúdo sem autorização prévia e por escrito.`,
    ],
  },
  {
    title: "Links de terceiros",
    body: [
      "O Site pode conter links para sites de terceiros. A Rubix360 não controla nem se responsabiliza pelo conteúdo, pelas políticas ou pelas práticas desses sites.",
    ],
  },
  {
    title: "Limitação de responsabilidade",
    body: [
      "O conteúdo do Site é fornecido para fins informativos e pode ser alterado a qualquer momento. A Rubix360 se empenha em manter o Site disponível e correto, mas não garante funcionamento ininterrupto ou livre de erros e não responde por danos decorrentes do uso das informações aqui publicadas, na medida permitida pela lei.",
    ],
  },
  {
    title: "Alterações",
    body: [
      "Estes Termos podem ser atualizados a qualquer momento. A versão vigente é sempre a publicada nesta página, com a data da última atualização indicada no topo.",
    ],
  },
  {
    title: "Lei aplicável e foro",
    body: [
      "Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da Comarca de São Paulo/SP para dirimir eventuais controvérsias, ressalvado o foro do domicílio do consumidor quando a lei assim determinar.",
    ],
  },
  {
    title: "Contato",
    body: [`Dúvidas sobre estes Termos: ${CONTACT_EMAIL}.`],
  },
];

export default function TermosPage() {
  return <LegalPage title="Termos de Uso" updated="17 de setembro de 2026" sections={SECTIONS} />;
}
