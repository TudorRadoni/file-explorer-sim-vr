// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '',
			logo: {
				src: '/src/assets/FESimVR-logo-landscape.png', // Path to the image in the src/assets folder
				alt: 'File Explorer Simulator VR Logo', // Alt text for accessibility
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/TudorRadoni' }],
			sidebar: [
				{
					label: 'Setup and Planning',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Environment Setup', slug: 'setup-and-planning/setup-environment' },
						{ label: 'Create the Project', slug: 'setup-and-planning/create-ue-project' },
						{ label: "Modify the VR Template", slug: 'setup-and-planning/mod-vr-template' },
					],
				},
				{
					label: 'Docs Guide',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting Started with the Docs', slug: 'docs-guides/getting-started-with-docs' },
					],
				},
			],
		}),
	],
});
