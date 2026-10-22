import { useState } from "react";
import AdCard from "../../components/AdCard/AdCard";
import "./AdsDemoPage.css";

function AdsDemoPage() {
  const [visible, setVisible] = useState(true);

  return (
    <main className="ads-demo">
      <header className="ads-demo__header">
        <span className="ads-demo__eyebrow">Interface</span>

        <h1>Demonstração de publicidade</h1>

        <p>Exemplo de componente de anúncio reutilizável na aplicação.</p>
      </header>

      <section
        className="ads-demo__content"
        aria-label="Exemplo de publicidade"
      >
        {visible ? (
          <AdCard
            title="Conteúdo patrocinado de demonstração"
            description="Este é um anúncio fictício para verificar a interface do Project-MFDS."
            onDismiss={() => setVisible(false)}
          />
        ) : (
          <div className="ads-demo__empty" role="status">
            <h2>Anúncio ocultado</h2>
            <p>O anúncio foi ocultado nesta demonstração.</p>

            <button type="button" onClick={() => setVisible(true)}>
              Mostrar anúncio novamente
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default AdsDemoPage;
