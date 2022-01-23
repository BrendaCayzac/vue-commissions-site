module.exports = {
  pages: {
    index: {
      entry: "src/main.ts",
      title: "Brenda Cayzac",
    },
  },
  pwa: {
    name: "BC Commissions",
    themeColor: "#00aeef",
    appleMobileWebAppStatusBarStyle: "black-translucent",
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      skipWaiting: true,
    },
  },
};
