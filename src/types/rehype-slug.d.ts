declare module "rehype-slug" {
    import { Plugin } from "unified";
    const rehypeSlug: Plugin<[], import("hast").Root>;
    export default rehypeSlug;
  }
  