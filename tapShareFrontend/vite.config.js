import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
// server.hmr.overlay = false;
export default defineConfig({
  // server
  plugins: [
    react(),

    VitePWA({
      registerType: "autoUpdate",
      // workbox: {
      //   clientsClaim: true,
      //   skipWaiting: true,
      // },
      includeAssets: [
        "tapShare.ico",
        "apple-touch-icon.png",
        "tapShare-194x194.png",
      ],
      manifest: {
        name: "TapShare",
        short_name: "TapShare",
        background_color: "#000000",
        description:
          "TapShare is a platform that enables users to transfer files, including zip files, to email and phone number in a tap",
        theme_color: "#3C486B",
        start_url: "/",
        icons: [
          {
            src: "tapShare-194x194.png",
            type: "image/png",
            sizes: "194x194",
            purpose: "any maskable",
          },
          {
            src: "tapShare-192x192.png",
            type: "image/png",
            sizes: "192x192",
          },
          {
            src: "tapShare-384x384.png",
            type: "image/png",
            sizes: "384x384",
          },
          {
            src: "windows11/SmallTile.scale-100.png",
            type: "image/png",
            sizes: "71x71",
          },
          {
            src: "windows11/SmallTile.scale-125.png",
            type: "image/png",
            sizes: "89x89",
          },
          {
            src: "windows11/SmallTile.scale-150.png",
            type: "image/png",
            sizes: "107x107",
          },
          {
            src: "windows11/SmallTile.scale-200.png",
            type: "image/png",
            sizes: "142x142",
          },
          {
            src: "windows11/SmallTile.scale-400.png",
            type: "image/png",
            sizes: "284x284",
          },
          {
            src: "windows11/Square150x150Logo.scale-100.png",
            type: "image/png",
            sizes: "150x150",
          },
          {
            src: "windows11/Square150x150Logo.scale-125.png",
            type: "image/png",
            sizes: "188x188",
          },
          {
            src: "windows11/Square150x150Logo.scale-150.png",
            type: "image/png",
            sizes: "225x225",
          },
          {
            src: "windows11/Square150x150Logo.scale-200.png",
            type: "image/png",
            sizes: "300x300",
          },
          {
            src: "windows11/Square150x150Logo.scale-400.png",
            type: "image/png",
            sizes: "600x600",
          },
          {
            src: "windows11/Wide310x150Logo.scale-100.png",
            type: "image/png",
            sizes: "310x150",
          },
          {
            src: "windows11/Wide310x150Logo.scale-125.png",
            type: "image/png",
            sizes: "388x188",
          },
          {
            src: "windows11/Wide310x150Logo.scale-150.png",
            type: "image/png",
            sizes: "465x225",
          },
          {
            src: "windows11/Wide310x150Logo.scale-200.png",
            type: "image/png",
            sizes: "620x300",
          },
          {
            src: "windows11/Wide310x150Logo.scale-400.png",
            type: "image/png",
            sizes: "1240x600",
          },
          {
            src: "windows11/LargeTile.scale-100.png",
            type: "image/png",
            sizes: "310x310",
          },
          {
            src: "windows11/LargeTile.scale-125.png",
            type: "image/png",
            sizes: "388x388",
          },
          {
            src: "windows11/LargeTile.scale-150.png",
            type: "image/png",
            sizes: "465x465",
          },
          {
            src: "windows11/LargeTile.scale-200.png",
            type: "image/png",
            sizes: "620x620",
          },
          {
            src: "windows11/LargeTile.scale-400.png",
            type: "image/png",
            sizes: "1240x1240",
          },
          {
            src: "windows11/Square44x44Logo.scale-100.png",
            type: "image/png",
            sizes: "44x44",
          },
          {
            src: "windows11/Square44x44Logo.scale-125.png",
            type: "image/png",
            sizes: "55x55",
          },
          {
            src: "windows11/Square44x44Logo.scale-150.png",
            type: "image/png",
            sizes: "66x66",
          },
          {
            src: "windows11/Square44x44Logo.scale-200.png",
            type: "image/png",
            sizes: "88x88",
          },
          {
            src: "windows11/Square44x44Logo.scale-400.png",
            type: "image/png",
            sizes: "176x176",
          },
          {
            src: "windows11/StoreLogo.scale-100.png",
            type: "image/png",
            sizes: "50x50",
          },
          {
            src: "windows11/StoreLogo.scale-125.png",
            type: "image/png",
            sizes: "63x63",
          },
          {
            src: "windows11/StoreLogo.scale-150.png",
            type: "image/png",
            sizes: "75x75",
          },
          {
            src: "windows11/StoreLogo.scale-200.png",
            type: "image/png",
            sizes: "100x100",
          },
          {
            src: "windows11/StoreLogo.scale-400.png",
            type: "image/png",
            sizes: "200x200",
          },
          {
            src: "windows11/SplashScreen.scale-100.png",
            type: "image/png",
            sizes: "620x300",
          },
          {
            src: "windows11/SplashScreen.scale-125.png",
            type: "image/png",
            sizes: "775x375",
          },
          {
            src: "windows11/SplashScreen.scale-150.png",
            type: "image/png",
            sizes: "930x450",
          },
          {
            src: "windows11/SplashScreen.scale-200.png",
            type: "image/png",
            sizes: "1240x600",
          },
          {
            src: "windows11/SplashScreen.scale-400.png",
            type: "image/png",
            sizes: "2480x1200",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-16.png",
            type: "image/png",
            sizes: "16x16",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-20.png",
            type: "image/png",
            sizes: "20x20",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-24.png",
            type: "image/png",
            sizes: "24x24",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-30.png",
            type: "image/png",
            sizes: "30x30",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-32.png",
            type: "image/png",
            sizes: "32x32",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-36.png",
            type: "image/png",
            sizes: "36x36",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-40.png",
            type: "image/png",
            sizes: "40x40",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-44.png",
            type: "image/png",
            sizes: "44x44",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-48.png",
            type: "image/png",
            sizes: "48x48",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-60.png",
            type: "image/png",
            sizes: "60x60",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-64.png",
            type: "image/png",
            sizes: "64x64",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-72.png",
            type: "image/png",
            sizes: "72x72",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-80.png",
            type: "image/png",
            sizes: "80x80",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-96.png",
            type: "image/png",
            sizes: "96x96",
          },
          {
            src: "windows11/Square44x44Logo.targetsize-256.png",
            type: "image/png",
            sizes: "256x256",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-16.png",
            type: "image/png",
            sizes: "16x16",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-20.png",
            type: "image/png",
            sizes: "20x20",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-24.png",
            type: "image/png",
            sizes: "24x24",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-30.png",
            type: "image/png",
            sizes: "30x30",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-32.png",
            type: "image/png",
            sizes: "32x32",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-36.png",
            type: "image/png",
            sizes: "36x36",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-40.png",
            type: "image/png",
            sizes: "40x40",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-44.png",
            type: "image/png",
            sizes: "44x44",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-48.png",
            type: "image/png",
            sizes: "48x48",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-60.png",
            type: "image/png",
            sizes: "60x60",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-64.png",
            type: "image/png",
            sizes: "64x64",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-72.png",
            type: "image/png",
            sizes: "72x72",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-80.png",
            type: "image/png",
            sizes: "80x80",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-96.png",
            type: "image/png",
            sizes: "96x96",
          },
          {
            src: "windows11/Square44x44Logo.altform-unplated_targetsize-256.png",
            type: "image/png",
            sizes: "256x256",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",
            type: "image/png",
            sizes: "16x16",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",
            type: "image/png",
            sizes: "20x20",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",
            type: "image/png",
            sizes: "24x24",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",
            type: "image/png",
            sizes: "30x30",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",
            type: "image/png",
            sizes: "32x32",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",
            type: "image/png",
            sizes: "36x36",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",
            type: "image/png",
            sizes: "40x40",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",
            type: "image/png",
            sizes: "44x44",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",
            type: "image/png",
            sizes: "48x48",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",
            type: "image/png",
            sizes: "60x60",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",
            type: "image/png",
            sizes: "64x64",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",
            type: "image/png",
            sizes: "72x72",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",
            type: "image/png",
            sizes: "80x80",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",
            type: "image/png",
            sizes: "96x96",
          },
          {
            src: "windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",
            type: "image/png",
            sizes: "256x256",
          },
          {
            src: "android/android-launchericon-512-512.png",
            type: "image/png",
            sizes: "512x512",
          },
          {
            src: "android/android-launchericon-192-192.png",
            type: "image/png",
            sizes: "192x192",
          },
          {
            src: "android/android-launchericon-144-144.png",
            type: "image/png",
            sizes: "144x144",
          },
          {
            src: "android/android-launchericon-96-96.png",
            type: "image/png",
            sizes: "96x96",
          },
          {
            src: "android/android-launchericon-72-72.png",
            type: "image/png",
            sizes: "72x72",
          },
          {
            src: "android/android-launchericon-48-48.png",
            type: "image/png",
            sizes: "48x48",
          },
          {
            src: "ios/16.png",
            type: "image/png",
            sizes: "16x16",
          },
          {
            src: "ios/20.png",
            type: "image/png",
            sizes: "20x20",
          },
          {
            src: "ios/29.png",
            type: "image/png",
            sizes: "29x29",
          },
          {
            src: "ios/32.png",
            type: "image/png",
            sizes: "32x32",
          },
          {
            src: "ios/40.png",
            type: "image/png",
            sizes: "40x40",
          },
          {
            src: "ios/50.png",
            type: "image/png",
            sizes: "50x50",
          },
          {
            src: "ios/57.png",
            type: "image/png",
            sizes: "57x57",
          },
          {
            src: "ios/58.png",
            type: "image/png",
            sizes: "58x58",
          },
          {
            src: "ios/60.png",
            type: "image/png",
            sizes: "60x60",
          },
          {
            src: "ios/64.png",
            type: "image/png",
            sizes: "64x64",
          },
          {
            src: "ios/72.png",
            type: "image/png",
            sizes: "72x72",
          },
          {
            src: "ios/76.png",
            type: "image/png",
            sizes: "76x76",
          },
          {
            src: "ios/80.png",
            type: "image/png",
            sizes: "80x80",
          },
          {
            src: "ios/87.png",
            type: "image/png",
            sizes: "87x87",
          },
          {
            src: "ios/100.png",
            type: "image/png",
            sizes: "100x100",
          },
          {
            src: "ios/114.png",
            type: "image/png",
            sizes: "114x114",
          },
          {
            src: "ios/120.png",
            type: "image/png",
            sizes: "120x120",
          },
          {
            src: "ios/128.png",
            type: "image/png",
            sizes: "128x128",
          },
          {
            src: "ios/144.png",
            type: "image/png",
            sizes: "144x144",
          },
          {
            src: "ios/152.png",
            type: "image/png",
            sizes: "152x152",
          },
          {
            src: "ios/167.png",
            type: "image/png",
            sizes: "167x167",
          },
          {
            src: "ios/180.png",
            type: "image/png",
            sizes: "180x180",
          },
          {
            src: "ios/192.png",
            type: "image/png",
            sizes: "192x192",
          },
          {
            src: "ios/256.png",
            type: "image/png",
            sizes: "256x256",
          },
          {
            src: "ios/512.png",
            type: "image/png",
            sizes: "512x512",
          },
          {
            src: "ios/1024.png",
            type: "image/png",
            sizes: "1024x1024",
          },

          // {
          //   src: "tapShare-192x192.png",
          //   sizes: "192x192",
          //   type: "image/png",
          // },
          // {
          //   src: "tapShare-512x512.png",
          //   sizes: "512x512",
          //   type: "image/png",
          // },
          // {
          //   src: "tapshare256.png",
          //   type: "image/png",
          //   sizes: "256x256",
          // },
          // {
          //   src: "tapshare-384x384.png",
          //   type: "image/png",
          //   sizes: "384x384",
          // },
          // {
          //   src: "tapshare-384x384.png",
          //   type: "image/png",
          //   sizes: "384x384",
          // },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ url }) => {
              return url.pathname.startsWith("/api");
            },
            handler: "CacheFirst",
            options: {
              cacheName: "api-cache",
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
      onUpdateReady: () => {
        // Prompt the user to update the app
        const result = window.confirm(
          "A new version of the app is available. Do you want to update?"
        );
        if (result) {
          // Skip waiting for the user to explicitly reload the app
          window.location.reload();
        }
      },
      onUpdated: () => {
        // Notify the user that the app has been updated
        alert(
          "The app has been updated. Please reload to see the latest version."
        );
      },
    }),
  ],
});
