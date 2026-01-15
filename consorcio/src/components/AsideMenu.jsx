const AsideMenu = () => {
  return (
    <aside className="aside-menu">
      <input className="search" type="text" placeholder="Buscar..." />

      <button>📅 Reuniones</button>
      <button>🚨 Planes de emergencia</button>
      <button>🏠 Mi departamento</button>
      <button>💳 Expensas</button>
      <button>📊 Encuestas</button>
      <button>📆 Espacios comunes</button>
      <button>📝 Registrar visitas</button>
    </aside>
  );
};

export default AsideMenu;