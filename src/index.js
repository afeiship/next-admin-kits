import nx from '@jswork/next';
import EventMitt from '@jswork/event-mitt';

// classes
import '@jswork/next-local-storage';

// packages
import '@jswork/next-ant-column';
import '@jswork/next-key-map';
import '@jswork/next-sets';

const defaults = { localPrefix: 'nak' };

const NxAdminKits = nx.declare('nx.AdminKits', {
  statics: {
    create: function (inOptions) {
      return new this(inOptions);
    }
  },
  methods: {
    init: function (inOptions) {
      this.options = nx.mix(null, defaults, inOptions);
      this.initLocal();
      this.initEvent();
    },
    initLocal: function () {
      nx.sets({ $local: new nx.LocalStorage('mba') });
    },
    initEvent: function () {
      nx.sets({ $event: nx.mix(null, EventMitt) });
    }
  }
});

if (typeof module !== 'undefined' && module.exports) {
  module.exports = NxAdminKits;
}

export default NxAdminKits;
