<template>
  <div class="home">
	<Carousel class='upPx'></Carousel>
	<box-plus></box-plus>
	<box-plus></box-plus>
	<box-plus></box-plus>

  </div>
</template>
<script>
import BoxPlus from '../components/BoxPlus.vue'
import Carousel from '../components/Carousel.vue'
export default {
  name: 'Home',
  components: {
	BoxPlus,Carousel
  }
}
</script>
<style scoped>
	.home{
		position: relative;
	}
	.upPx{
		top:-2px;
	}
</style>