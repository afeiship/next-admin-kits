interface Options {
  prefix?: string;
}

interface NxStatic {
  AdminKits: {
    create: (opts: Options) => any;
  };
}
