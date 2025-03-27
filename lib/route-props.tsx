// No futuro vou jogar isso para schema.tsx
// Basicamente aqui eu coloco o href da rota e o nome que deve aparecer no site. A key é a rota.
// OK, ok! Preciso fazer esse routeprops puxar as infos do db navigation, tentei uma vez, mas para
//implementar vai dar um trabalho do cão
export const routeprops = {
  account: { label: "Conta", href: "/account" },
  dashboard: { label: "Painel", href: "/dashboard" },
  profile: { label: "Meu perfil", href: "/account/profile" },
  settings: { label: "Configurações", href: "/account/settings" },
  support: { label: "Suporte", href: "/account/support" },
  blog: { label: "Blog", href: "/blog" },
};
