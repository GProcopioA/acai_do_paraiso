// src/pages/index.tsx

import Head from "next/head";
import Link from "next/link";
import Image from "../../node_modules/next/image";
import styles from "../styles/Home.module.css";
import { FaWhatsapp, FaCarSide } from "react-icons/fa"; // Adicionamos FaCarSide para representar o delivery
import { SiIfood } from "react-icons/si";

// Definindo o tipo para as propriedades do botão
interface CtaButtonProps {
  href: string;
  className: string;
  icon: React.ReactNode;
  label: string;
}

// Componente reútil para os Botões CTA
const CtaButton: React.FC<CtaButtonProps> = ({
  href,
  className,
  icon,
  label,
}) => (
  <Link
    href={href}
    className={`${styles.ctaButton} ${className}`} // Aplica as classes e estilos diretamente ao Link
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className={styles.icon}>{icon}</span>
    {label}
  </Link>
);

const Home: React.FC = () => {
  // ATENÇÃO: Substitua os placeholders abaixo pelos seus links reais!
  const ifoodLink = "LINK_IFOOD_AQUI";
  const ninetyNineLink = "LINK_99_DELIVERY_AQUI";
  const whatsappLink =
    "https://wa.me/SEUNUMERO?text=Oi!%20Gostaria%20de%20fazer%20um%20pedido.";

  return (
    <>
      <Head>
        <title>Açaí do Paraíso - Pedidos e Contato</title>
        <meta
          name="description"
          content="Peça o seu açaí agora! iFood, 99 e WhatsApp."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/acai_favicon.png" type="image/png" />
      </Head>

      <main className={styles.container}>
        {/* 3. Área da Logo */}
        <div className={styles.logoArea}>
          <Image
            src="/logo_acai.jpeg" // Caminho relativo à pasta /public
            alt="Logo Açaí do Paraiso"
            width={300} // Defina a largura real da sua logo (em pixels)
            height={300} // Defina a altura real da sua logo (em pixels)
            priority // Opcional: Adiciona o atributo priority para carregamento mais rápido (é o elemento mais importante da página)
          />
          {/* Você pode substituir o texto por um 

[Image of Acai Shop Logo]
 se tiver um logo PNG/SVG na pasta /public */}
          <h1 className={styles.logoText}>AÇAÍ NA GARRAFA</h1>
          <p className={styles.logoTextMenor}>O melhor açaí da região!</p>
        </div>

        {/* 4. Botões de Ação (CTAs) */}
        <div className={styles.ctaContainer}>
          {/* Botão 1: iFood (Pedidos) */}
          <CtaButton
            href={ifoodLink}
            className={styles.ifood}
            icon={<SiIfood />}
            label="Pedir pelo iFood"
          />

          {/* Botão 2: 99 (Delivery/Contato) */}
          <CtaButton
            href={ninetyNineLink}
            className={styles.ninetyNine}
            // ANTES: icon={<SiDidi />}
            // DEPOIS:
            icon={<FaCarSide />}
            label="Delivery 99"
          />

          {/* Botão 3: WhatsApp (Contato) */}
          <CtaButton
            href={whatsappLink}
            className={styles.whatsapp}
            icon={<FaWhatsapp />}
            label="WhatsApp"
          />
        </div>
      </main>
    </>
  );
};

export default Home;
