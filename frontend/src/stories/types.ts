export type Args = Record<string, unknown>;
export type TemplateFn = ((args: Args) => {
  components: Args;
  setup: () => { args: Args };
  template: string;
}) & { args?: Args };