export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "SEMEE",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Dashboard",
			href: "/dashboard",
		},
    {
      label: "Estimador",
      href: "/estimador",
    },
	{
		label: "Relatórios",
		href: "/relatorios",
	  },

	// {
	// 	label: "Empresas",
	// 	href: "/empresas",
	// },

	],
	navMenuItems: [
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Estimador",
			href: "/estimador",
		},
		{
			label: "Relatórios",
			href: "/relatorios",
		},
		{
			label: "Log out",
			href: "/sign-out",
		},
	],
};
