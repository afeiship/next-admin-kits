interface NxAdminKitsOptions {
  prefix?: string;
}

interface NxStatic {
  AdminKits: {
    create: (opts: NxAdminKitsOptions) => any;
  };
}
