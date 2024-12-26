const ROOTS = {
  AUTH: "/auth",
  AUTH_DEMO: "/auth-demo",
  DASHBOARD: "/dashboard",
};

export const paths = {
  comingSoon: "/coming-soon",
  maintenance: "/maintenance",
  pricing: "/pricing",
  payment: "/payment",
  about: "/about-us",
  contact: "/contact-us",
  faqs: "/faqs",
  page403: "/403",
  page404: "/404",
  page500: "/500",
  components: "/components",
  auth: {
    jwt: {
      login: `${ROOTS.AUTH}/jwt/sign-in`,
      register: `${ROOTS.AUTH}/jwt/sing-up`,
    },
  },
  dashboard: {
    root: `${ROOTS.DASHBOARD}/applicants`,
    university: `${ROOTS.DASHBOARD}/universities`,

    settings: `${ROOTS.DASHBOARD}/settings`,
    comments: `${ROOTS.DASHBOARD}/settings/comments`,
    visa: `${ROOTS.DASHBOARD}/settings/visa`,
    contact: `${ROOTS.DASHBOARD}/settings/contact`,
    faq: `${ROOTS.DASHBOARD}/settings/faq`,
    sales: `${ROOTS.DASHBOARD}/settings/sales`,
    payment: `${ROOTS.DASHBOARD}/settings/payment`,
    branches: `${ROOTS.DASHBOARD}/settings/branches`,
    employees: `${ROOTS.DASHBOARD}/settings/employees`,
    seasons: `${ROOTS.DASHBOARD}/settings/seasons`,
    archive: `${ROOTS.DASHBOARD}/settings/archive`,
    necessary_docs: `${ROOTS.DASHBOARD}/settings/necessary-docs`,

    chat: `${ROOTS.DASHBOARD}/chat`,
    blank: `${ROOTS.DASHBOARD}/blank`,
    kanban: `${ROOTS.DASHBOARD}/kanban`,
    walktour: `${ROOTS.DASHBOARD}/walktour`,
    calendar: `${ROOTS.DASHBOARD}/calendar`,
    permission: `${ROOTS.DASHBOARD}/permission`,
    fileManager: `${ROOTS.DASHBOARD}/file-manager`,
    one: `${ROOTS.DASHBOARD}/one`,
    two: `${ROOTS.DASHBOARD}/two`,
    three: `${ROOTS.DASHBOARD}/three`,
    general: {
      app: `${ROOTS.DASHBOARD}/app`,
      ecommerce: `${ROOTS.DASHBOARD}/ecommerce`,
      analytics: `${ROOTS.DASHBOARD}/analytics`,
      banking: `${ROOTS.DASHBOARD}/banking`,
      booking: `${ROOTS.DASHBOARD}/booking`,
      file: `${ROOTS.DASHBOARD}/file`,
    },
    user: {
      root: `${ROOTS.DASHBOARD}/user`,
      new: `${ROOTS.DASHBOARD}/user/new`,
      list: `${ROOTS.DASHBOARD}/user/list`,

      cards: `${ROOTS.DASHBOARD}/user/cards`,
      profile: `${ROOTS.DASHBOARD}/user/profile`,
      account: `${ROOTS.DASHBOARD}/user/account`,
      edit: (id: string) => `${ROOTS.DASHBOARD}/user/${id}/edit`,
    },
  },
};