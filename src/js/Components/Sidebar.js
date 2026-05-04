export function renderSidebar(active = 'dashboard') {
  const container = document.getElementById('appSidebar');

  container.innerHTML = `
    <div class="sidebar" id="sidebar">
      <div class="sidebar-top">
        <div class="logo">Fin<span>Web</span></div>
        <button class="sidebar-toggle" onclick="toggleSidebar()">☰</button>
      </div>

      <nav class="menu">
        <div class="menu-label">Movimentações</div>

        <a href="/public/dashboard.html" class="${active === 'dashboard' ? 'active' : ''}">
          📊 <span class="menu-text">Dashboard</span>
        </a>

        <a href="/public/transactions.html" class="${active === 'transactions' ? 'active' : ''}">
          💸 <span class="menu-text">Transações</span>
        </a>

        <a href="/public/payables_receivables.html" class="${active === 'payables' ? 'active' : ''}">
          📅 <span class="menu-text">Pagar/Receber</span>
        </a>

        <a href="/public/cards.html">
          💳 <span class="menu-text">Cartões</span>
        </a>

        <hr class="menu-divider">

        <div class="menu-label">Demonstrativos</div>

        <a href="/public/reports.html">
          📈 <span class="menu-text">Relatórios</span>
        </a>

        <a href="#">
          🌊 <span class="menu-text">Fluxo de Caixa</span>
        </a>

        <hr class="menu-divider">

        <div class="menu-label">Cadastro</div>

        <a href="/public/accounts.html" class="${active === 'accounts' ? 'active' : ''}">
          🏦 <span class="menu-text">Contas</span>
        </a>

        <a href="/public/categories.html" class="${active === 'categories' ? 'active' : ''}">
          🏷️ <span class="menu-text">Categorias</span>
        </a>

        <a href="/public/cost_centers.html" class="${active === 'cost_centers' ? 'active' : ''}">
          🏢 <span class="menu-text">Centro de Custos</span>
        </a>

        <a href="/public/Tags.html" class="${active === 'tags' ? 'active' : ''}">
          🏷️ <span class="menu-text">Tags</span>
        </a>

        <hr class="menu-divider">

        <a onclick="logout()" class="danger">
          🚪 <span class="menu-text">Sair</span>
        </a>
      </nav>
    </div>
  `;

  restoreSidebarState();
}

window.toggleSidebar = () => {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('collapsed');

  localStorage.setItem(
    'finweb_sidebar_collapsed',
    sidebar.classList.contains('collapsed')
  );
};

function restoreSidebarState() {
  const sidebar = document.getElementById('sidebar');
  const collapsed = localStorage.getItem('finweb_sidebar_collapsed') === 'true';

  if (collapsed) {
    sidebar.classList.add('collapsed');
  }
}