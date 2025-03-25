export const formatUserName = (name: string) => {
  if (!name) return "";
  return name.split(" ")[0]; // Retorna o primeiro nome
};
