import React from 'react';
import Header from '../components/Header';

export default function ReceitasFeitas() {
  return (
    <div>
      <Header title="Receitas Feitas" buttonDisable />
      <button data-testid="filter-by-all-btn" type="submit">All</button>
      <button data-testid="filter-by-food-btn" type="submit">Food</button>
      <button data-testid="filter-by-drink-btn" type="submit">Drinks</button>
      <image data-testid="0-horizontal-image" />
      {/* incluir index no data-test-id */}
      <p data-testid="0-horizontal-top-text">Caregoria</p>
      {/* incluir index no data-test-id */}
      <p data-testid="0-horizontal-name">Nome da receita</p>
      {/* incluir index no data-test-id */}
      <p data-testid="0-horizontal-done-date">Data</p>
      {/* incluir index no data-test-id */}
      <button data-testid="0-horizontal-share-btn" type="submit">Compartilhar</button>
      {/* incluir index no data-test-id */}
      <p data-testid="0-Pasta-horizontal-tag">Tags</p>
      {/* incluir index no data-test-id */}
      <p data-testid="0-Curry-horizontal-tag">Oi</p>
      {/* incluir index no data-test-id */}
      <p data-testid="1-horizontal-image">Oi</p>
      {/* incluir index no data-test-id */}
      <p data-testid="1-horizontal-top-text" />
      {/* incluir index no data-test-id */}
      <p data-testid="1-horizontal-name" />
      {/* incluir index no data-test-id */}
      <p data-testid="1-horizontal-share-btn" />
      {/* incluir index no data-test-id */}
      <p data-testid="1-horizontal-done-date" />
      {/* incluir index no data-test-id */}
    </div>
  );
}
