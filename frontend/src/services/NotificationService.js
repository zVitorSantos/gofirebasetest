// src/services/NotificationService.js
import { createApp, h } from 'vue';
import Notification from '../components/common/Notification.vue';

export default {
  install(app) {
    const mountNode = document.createElement('div');
    document.body.appendChild(mountNode);

    let vm;

    function notify(type, message) {
      if (vm) {
        vm.unmount();
      }

      vm = createApp({
        render() {
          return h(Notification, { type, message });
        }
      });

      vm.mount(mountNode);
    }

    app.config.globalProperties.$notify = {
      success(message) {
        notify('success', message);
      },
      error(message) {
        notify('error', message);
      },
      info(message) {
        notify('info', message);
      }
    };
  }
};
