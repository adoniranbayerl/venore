// No futuro vou jogar isso para schema.tsx
// Basicamente aqui eu coloco o href da rota e o nome que deve aparecer no site. A key é a rota.
export const routeprops = {
  account: { label: "Conta", href: "/account" },
  dashboard: { label: "Painel", href: "/dashboard" },
  profile: { label: "Meu perfil", href: "/account/profile" },
  settings: { label: "Configurações", href: "/account/settings" },
  support: { label: "Suporte", href: "/account/support" },
};
export const navigation = [
  {
    id: "3eea89d8-690f-4675-bebb-a8a2a82fd0f1",
    type: "usernav",
    sectionname: "Conta",
    order: 3,
    label: "Suporte",
    href: "/account/support",
    icon: "MdChatBubble",
  },
  {
    id: "55fa3579-b02e-4301-905b-9407052562a0",
    type: "mainnav",
    sectionname: "Relatórios",
    order: 1,
    label: "Painel",
    href: "/dashboard",
    icon: "MdSpaceDashboard",
  },
  {
    id: "aaec8bce-040e-420d-baa8-5d20fa6e74fb",
    type: "usernav",
    sectionname: "Conta",
    order: 1,
    label: "Meu Perfil",
    href: "/account/profile",
    icon: null,
  },
  {
    id: "f0d80aaf-e632-46b5-828f-0cb49e7e1f35",
    type: "usernav",
    sectionname: "Conta",
    order: 2,
    label: "Configurações",
    href: "/account/settings",
    icon: null,
  },
];
