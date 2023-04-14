import nx from '@jswork/next';
import EventMitt from '@jswork/event-mitt';

// classes
import '@jswork/next-local-storage';

// packages
import '@jswork/next-ant-column';
import '@jswork/next-key-map';
import '@jswork/next-sets';
import '@jswork/next-is-plain-object';
import '@jswork/next-is-empty-object';
import '@jswork/next-compact-object';
import '@jswork/next-deep-each';
import '@jswork/next-deep-assign';
import '@jswork/next-qs';
import '@jswork/next-param';
import '@jswork/next-empty';
import '@jswork/next-get2get';

const defaults = { prefix: 'nak' };

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
      const { prefix } = this.options;
      nx.sets({ $local: new nx.LocalStorage(prefix) });
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
