<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a-row>
      <Hellotest :level="3">
        <div slot="term">test</div>
      </Hellotest>
      <Hellotest :level="3">
        <div slot="term">dudulu</div>
        <div slot="detail">dudulutest</div>
      </Hellotest>
      <Hellotest :level="3" term="hhhh">
      </Hellotest>
    </a-row>
  </div>
</template>

<script>
import Hellotest from './HelloWorld.jsx'

export default {
  name: 'HelloWorld',
  components: {
    Hellotest
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
