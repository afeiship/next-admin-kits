interface NxAdminKitsOptions {
  prefix?: string;
}

interface NxStatic {
  AdminKits: {
    create: (opts: NxAdminKitsOptions) => any;
  };
  $global: any;
  $local: import('@jswork/next-local-storage');
  $session: import('@jswork/next-session-storage');
  $event: import('@jswork/event-mitt').EventMitt;
  $url: import('@jswork/next-url-literal');
}
