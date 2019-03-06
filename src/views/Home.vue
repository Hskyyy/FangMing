<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
    <Fixed></Fixed>
  </div>
</template>

<script>

// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Fixed from '@/components/Fixed.vue'

export default {
  name:"App",
  data(){
    return{
      Header:true,
      Footer:true,
      Fixed:true
    }
  },
  components: {
    "Header":Header,
    "Footer":Footer,
    "Fixed":Fixed
  }
}
</script>