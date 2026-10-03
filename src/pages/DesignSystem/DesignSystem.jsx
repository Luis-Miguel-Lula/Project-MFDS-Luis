import { useState } from "react";

import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import Textarea from "../../components/Textarea/Textarea";
import Badge from "../../components/Badge/Badge";
import Avatar from "../../components/Avatar/Avatar";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import SearchInput from "../../components/SearchInput/SearchInput";
import EmptyState from "../../components/EmptyState/EmptyState";

import "./DesignSystem.css";

function DesignSystem() {
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  return (
    <main className="design-system">
      <header className="design-system-header">
        <span className="design-system-eyebrow">Interface</span>

        <h1>Design System</h1>

        <p>Componentes reutilizáveis da aplicação.</p>
      </header>

      <section className="design-section">
        <h2>Botões</h2>

        <div className="component-row">
          <Button>Primário</Button>

          <Button variant="secondary">Secundário</Button>

          <Button variant="outline">Outline</Button>

          <Button variant="ghost">Ghost</Button>

          <Button disabled>Desabilitado</Button>
        </div>
      </section>

      <section className="design-section">
        <h2>Card</h2>

        <Card>
          <h3>Exemplo de Card</h3>

          <p>Card reutilizável para informações da aplicação.</p>
        </Card>
      </section>

      <section className="design-section">
        <h2>Inputs</h2>

        <div className="component-column">
          <Input
            label="Nome"
            placeholder="Digite seu nome"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />

          <Textarea
            label="Descrição"
            placeholder="Digite uma descrição"
            value={textareaValue}
            onChange={(event) => setTextareaValue(event.target.value)}
          />

          <SearchInput
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
        </div>
      </section>

      <section className="design-section">
        <h2>Badges</h2>

        <div className="component-row">
          <Badge>Default</Badge>

          <Badge variant="success">Sucesso</Badge>

          <Badge variant="warning">Atenção</Badge>

          <Badge variant="error">Erro</Badge>

          <Badge variant="info">Informação</Badge>
        </div>
      </section>

      <section className="design-section">
        <h2>Avatar</h2>

        <div className="component-row">
          <Avatar name="João" />

          <Avatar name="Maria" />

          <Avatar name="MF" />
        </div>
      </section>

      <section className="design-section">
        <h2>Progress Bar</h2>

        <ProgressBar value={65} />
      </section>

      <section className="design-section">
        <h2>Empty State</h2>

        <Card>
          <EmptyState
            title="Nenhuma ideia encontrada"
            description="Comece criando sua primeira ideia."
            action={<Button>Criar ideia</Button>}
          />
        </Card>
      </section>
    </main>
  );
}

export default DesignSystem;
