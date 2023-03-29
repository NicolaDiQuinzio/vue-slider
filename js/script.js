const app = Vue.createApp({
  data() {
    return {
      images: [
        {
          image: "img/01.webp",
          title: "Marvel's Spiderman Miles Morale",
        },
        {
          image: "img/02.webp",
          title: "Ratchet & Clank: Rift Apart",
        },
        {
          image: "img/03.webp",
          title: "Fortnite",
        },
        {
          image: "img/04.webp",
          title: "Stray",
        },
        {
          image: "img/05.webp",
          title: "Marvel's Avengers",
        },
      ],
      currentIndex: 0,
      hover: true,
      interval: null,
    };
  },
  mounted() {
    this.interval = setInterval(() => this.next(), 3000);
  },
  methods: {
    next() {
      this.currentIndex++;
      if (this.currentIndex === this.images.length) {
        this.currentIndex = 0;
      }
    },
    prev() {
      if (this.currentIndex === 0) {
        this.currentIndex = this.images.length - 1;
      } else {
        this.currentIndex--;
      }
    },
  },
  watch: {
    hover(newVal) {
      if (newVal) {
        this.interval = setInterval(() => this.next(), 3000);
      } else {
        clearInterval(this.interval);
      }
    },
  },
});

app.mount("#app");
