<template>
    <div v-if="visible" :class="['notification', type]" @click="hideNotification">
      <span class="icon">{{ icon }}</span>
      <span class="message">{{ message }}</span>
      <div class="progress-bar" :class="[type]" :style="{ width: progressWidth }"></div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      type: String,
      message: String
    },
    data() {
      return {
        visible: false,
        icon: '',
        progressWidth: '100%'
      };
    },
    watch: {
      message() {
        this.visible = true;
        this.startProgressBar();
      }
    },
    methods: {
      hideNotification() {
        this.visible = false;
      },
      getIcon(type) {
        switch (type) {
          case 'success':
            return '✔️';
          case 'error':
            return '❌';
          case 'info':
            return 'ℹ️';
          default:
            return '';
        }
      },
      startProgressBar() {
        this.progressWidth = '100%';
        const duration = 5000; // 5 seconds
        const stepTime = 50;
        const steps = duration / stepTime;
        const stepSize = 100 / steps;
  
        let progress = 100;
        const interval = setInterval(() => {
          progress -= stepSize;
          this.progressWidth = `${progress}%`;
  
          if (progress <= 0) {
            clearInterval(interval);
            this.hideNotification();
          }
        }, stepTime);
      }
    },
    mounted() {
      this.icon = this.getIcon(this.type);
      this.visible = true;
      this.startProgressBar();
    }
  };
  </script>
  
  <style scoped>
  .notification {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    border-radius: 5px;
    color: white;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: opacity 0.3s;
    z-index: 1000;
    min-width: 300px;
    max-width: 500px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  .notification .icon {
    margin-right: 10px;
  }
  .notification.success {
    background-color: green;
  }
  .notification.error {
    background-color: red;
  }
  .notification.info {
    background-color: blue;
  }
  .progress-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 5px;
    transition: width 0.05s linear;
  }
  .progress-bar.success {
    background-color: lightgreen;
  }
  .progress-bar.error {
    background-color: lightcoral;
  }
  .progress-bar.info {
    background-color: lightblue;
  }
  </style>
  