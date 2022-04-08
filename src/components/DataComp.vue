<template>
  <div id="data">
    <p>いいね{{ count }}</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>

// let data = {
//   count: 10
// };

export default {
  data() {
    // return data
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++;
    }
  }
}
</script>
