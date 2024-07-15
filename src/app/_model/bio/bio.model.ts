export class BioList {
  id!: number;
  className!: string;
  bioLabel!: string;
}
export class ExpModel {
  id!: number;
  title!: string;
  subTitle!: string;
  link!: { name: string; url: string; } | null
  year!: string;
  descMenu!: Array<string>;
}