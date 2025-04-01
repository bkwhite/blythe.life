import typescriptLogo from "./assets/typescript.svg";

export type TechName = "typescript";

export interface Tech {
	name: TechName;
	logo: string;
	alt: string;
}

export const TechMap: Record<TechName, Tech> = {
	typescript: {
		name: "typescript",
		alt: "TypeScript Logo",
		logo: typescriptLogo.src,
	},
};
