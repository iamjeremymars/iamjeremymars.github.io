import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://iamjeremymars.github.io/",
    title: "Jeremy Liu",
    description:
      "Jeremy Liu — embedded technical support engineer at Tuya Smart. MSc in IT Management (HKBU), BEng in Electronic Engineering. Circuits, firmware and data.",
    author: "iamjeremymars",
    profile: "https://github.com/iamjeremymars",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/iamjeremymars/iamjeremymars.github.io/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/iamjeremymars" },
    { name: "mail", url: "mailto:liuyangyang_24@163.com" },
    { name: "instagram", url: "https://www.instagram.com/iamjeremymars" },
    {
      name: "whatsapp",
      url: "https://wa.me/85284950734",
      linkTitle: "Chat with Jeremy Liu on WhatsApp",
    },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});