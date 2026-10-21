import { useState } from "react";
import AdCard from "../../components/AdCard/AdCard";

function AdsDemoPage() {
  const [visible, setVisible] = useState(true);

  return (
    <main>
      <h1>Demonstração de publicidade</h1>

      <p>Esta página permite testar o componente de anúncio.</p>

      {visible ? (
        <AdCard
          title="Conteúdo patrocinado de demonstração"
          description="Este é um anúncio fictício para verificar a interface do Project-MFDS."
          onDismiss={() => setVisible(false)}
        />
      ) : (
        <p role="status">O anúncio foi ocultado nesta demonstração.</p>
      )}
    </main>
  );
}

export default AdsDemoPage;
