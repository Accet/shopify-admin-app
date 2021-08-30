export * from "./config";

export const init = (config) => {
  if (!window.tbyb) {
    window.tbyb = new BlackCartShopify(config);
  }
};
