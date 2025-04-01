import astroLogo from "./assets/astro.svg";
import awsLogo from "./assets/aws.svg";
import bevyLogo from "./assets/bevy.svg";
import d3Logo from "./assets/d3.svg";
import expressLogo from "./assets/express.svg";
import javaLogo from "./assets/java.svg";
import jenkinsLogo from "./assets/jenkins.svg";
import muiLogo from "./assets/mui.svg";
import nextLogo from "./assets/next.svg";
import nodeLogo from "./assets/node.svg";
import pythonLogo from "./assets/python.svg";
import railsLogo from "./assets/rails.svg";
import reactLogo from "./assets/react.svg";
import reactNativeLogo from "./assets/react-native.svg";
import rustLogo from "./assets/rust.svg";
import storybookLogo from "./assets/storybook.svg";
import tailwindLogo from "./assets/tailwind.svg";
import typescriptLogo from "./assets/typescript.svg";
import viteLogo from "./assets/vite.svg";
import vueLogo from "./assets/vue.svg";
import wordpressLogo from "./assets/wordpress.svg";
import xmlLogo from "./assets/xml.svg";

export type TechName =
	| "astro"
	| "aws"
	| "bevy"
	| "d3"
	| "express"
	| "java"
	| "jenkins"
	| "mui"
	| "next"
	| "node"
	| "python"
	| "rails"
	| "react"
	| "react-native"
	| "rust"
	| "storybook"
	| "tailwind"
	| "typescript"
	| "vite"
	| "vue"
	| "wordpress"
	| "xml";

export interface Tech {
	name: TechName;
	logo: string;
	alt: string;
}

export const TechMap: Record<TechName, Tech> = {
	astro: {
		name: "astro",
		alt: "Astro Logo",
		logo: astroLogo.src,
	},
	aws: {
		name: "aws",
		alt: "AWS Logo",
		logo: awsLogo.src,
	},
	bevy: {
		name: "bevy",
		alt: "Bevy Logo",
		logo: bevyLogo.src,
	},
	d3: {
		name: "d3",
		alt: "D3 Logo",
		logo: d3Logo.src,
	},
	express: {
		name: "express",
		alt: "Express.js Logo",
		logo: expressLogo.src,
	},
	java: {
		name: "java",
		alt: "Java Logo",
		logo: javaLogo.src,
	},
	jenkins: {
		name: "jenkins",
		alt: "Jenkins Logo",
		logo: jenkinsLogo.src,
	},
	mui: {
		name: "mui",
		alt: "Material-UI Logo",
		logo: muiLogo.src,
	},
	next: {
		name: "next",
		alt: "Next.js Logo",
		logo: nextLogo.src,
	},
	node: {
		name: "node",
		alt: "Node.js Logo",
		logo: nodeLogo.src,
	},
	python: {
		name: "python",
		alt: "Python Logo",
		logo: pythonLogo.src,
	},
	rails: {
		name: "rails",
		alt: "Ruby on Rails Logo",
		logo: railsLogo.src,
	},
	react: {
		name: "react",
		alt: "React Logo",
		logo: reactLogo.src,
	},
	"react-native": {
		name: "react-native",
		alt: "React Native Logo",
		logo: reactNativeLogo.src,
	},
	storybook: {
		name: "storybook",
		alt: "Storybook Logo",
		logo: storybookLogo.src,
	},
	tailwind: {
		name: "tailwind",
		alt: "Tailwind CSS Logo",
		logo: tailwindLogo.src,
	},
	typescript: {
		name: "typescript",
		alt: "TypeScript Logo",
		logo: typescriptLogo.src,
	},
	rust: {
		name: "rust",
		alt: "Rust Logo",
		logo: rustLogo.src,
	},
	vite: {
		name: "vite",
		alt: "Vite Logo",
		logo: viteLogo.src,
	},
	vue: {
		name: "vue",
		alt: "Vue.js Logo",
		logo: vueLogo.src,
	},
	wordpress: {
		name: "wordpress",
		alt: "WordPress Logo",
		logo: wordpressLogo.src,
	},
	xml: {
		name: "xml",
		alt: "XML Logo",
		logo: xmlLogo.src,
	},
};
