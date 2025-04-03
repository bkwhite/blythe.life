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
import redux from "./assets/redux.svg";
import rxjsLogo from "./assets/rxjs.svg";
import rustLogo from "./assets/rust.svg";
import storybookLogo from "./assets/storybook.svg";
import tailwindLogo from "./assets/tailwind.svg";
import typescriptLogo from "./assets/typescript.svg";
import viteLogo from "./assets/vite.svg";
import vueLogo from "./assets/vue.svg";
import wordpressLogo from "./assets/wordpress.svg";
import xmlLogo from "./assets/xml.svg";
import graduationCapLogo from "./assets/graduation-cap.svg";

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
	| "redux"
	| "rxjs"
	| "rust"
	| "storybook"
	| "tailwind"
	| "typescript"
	| "vite"
	| "vue"
	| "wordpress"
	| "xml"
	| "wcu";

export interface Tech {
	name: TechName;
	logo: string;
	alt: string;
	highlightColor?: string;
}

export const TechMap: Record<TechName, Tech> = {
	astro: {
		name: "astro",
		alt: "Astro Logo",
		logo: astroLogo.src,
		highlightColor: "#E44785",
	},
	aws: {
		name: "aws",
		alt: "AWS Logo",
		logo: awsLogo.src,
		highlightColor: "#FF9900",
	},
	bevy: {
		name: "bevy",
		alt: "Bevy Logo",
		logo: bevyLogo.src,
		highlightColor: "#B2B2B2",
	},
	d3: {
		name: "d3",
		alt: "D3 Logo",
		logo: d3Logo.src,
		highlightColor: "#F68A49",
	},
	express: {
		name: "express",
		alt: "Express.js Logo",
		logo: expressLogo.src,
		highlightColor: "#FFF",
	},
	java: {
		name: "java",
		alt: "Java Logo",
		logo: javaLogo.src,
		highlightColor: "#F29111",
	},
	jenkins: {
		name: "jenkins",
		alt: "Jenkins Logo",
		logo: jenkinsLogo.src,
		highlightColor: "#C03330",
	},
	mui: {
		name: "mui",
		alt: "Material-UI Logo",
		logo: muiLogo.src,
		highlightColor: "#0173E5",
	},
	next: {
		name: "next",
		alt: "Next.js Logo",
		logo: nextLogo.src,
		highlightColor: "#FFFFFF",
	},
	node: {
		name: "node",
		alt: "Node.js Logo",
		logo: nodeLogo.src,
		highlightColor: "#407E37",
	},
	python: {
		name: "python",
		alt: "Python Logo",
		logo: pythonLogo.src,
		highlightColor: "#CEB559",
	},
	rails: {
		name: "rails",
		alt: "Ruby on Rails Logo",
		logo: railsLogo.src,
		highlightColor: "#CC0000",
	},
	react: {
		name: "react",
		alt: "React Logo",
		logo: reactLogo.src,
		highlightColor: "#61DAFB",
	},
	"react-native": {
		name: "react-native",
		alt: "React Native Logo",
		logo: reactNativeLogo.src,
		highlightColor: "#61DAFB",
	},
	redux: {
		name: "redux",
		alt: "Redux Logo",
		logo: redux.src,
		highlightColor: "#764ABC",
	},
	rxjs: {
		name: "rxjs",
		alt: "RxJS Logo",
		logo: rxjsLogo.src,
		highlightColor: "#DE1E84",
	},
	storybook: {
		name: "storybook",
		alt: "Storybook Logo",
		logo: storybookLogo.src,
		highlightColor: "#FF4785",
	},
	tailwind: {
		name: "tailwind",
		alt: "Tailwind CSS Logo",
		logo: tailwindLogo.src,
		highlightColor: "#06B6D4",
	},
	typescript: {
		name: "typescript",
		alt: "TypeScript Logo",
		logo: typescriptLogo.src,
		highlightColor: "#007ACC",
	},
	rust: {
		name: "rust",
		alt: "Rust Logo",
		logo: rustLogo.src,
		highlightColor: "#F05238",
	},
	vite: {
		name: "vite",
		alt: "Vite Logo",
		logo: viteLogo.src,
		highlightColor: "#646CFF",
	},
	vue: {
		name: "vue",
		alt: "Vue.js Logo",
		logo: vueLogo.src,
		highlightColor: "#41B883",
	},
	wordpress: {
		name: "wordpress",
		alt: "WordPress Logo",
		logo: wordpressLogo.src,
		highlightColor: "#21759B",
	},
	xml: {
		name: "xml",
		alt: "XML Logo",
		logo: xmlLogo.src,
	},
	wcu: {
		name: "wcu",
		alt: "Western Carolina University",
		logo: graduationCapLogo.src,
		highlightColor: "#592C88",
	},
};

export const TechNames = Object.keys(TechMap) as TechName[];
