<template>
  <div class="boxPlus">
	  <div>

			    <h2><span id="else"  class="icon-books iconfont"></span><span>{{category}}</span>专区</h2>
		<!-- <span id="else"  class="icon-gengduo1 iconfont"></span> -->
		  <div>
		  		<router-link to="/product"><box></box></router-link>
			<!-- 	v-bind:to -->
		  		<box></box>
		  		<box></box>
		  		<box></box> 
				<router-link to="/ProductBoxs/InternetITTechnology"><box-else></box-else></router-link>
		  </div>
	  </div>
  </div>
</template>

<script>
import Box from '../components/Box.vue'
import BoxElse from './BoxElse.vue'
export default {
  name: 'BoxPlus',
  components: {
	Box,BoxElse
  },
  data(){
  	return{
		category:'软件'
  	}
}
}
</script>
<style scoped>
	.boxPlus{
		margin: 20px calc(50% - 1250px / 2);
		width: 1250px;
		height: auto;
/* 		color: #F6F6F6; */
		float: left;
	}
		
	.boxPlus>div{
		position:  relative;
/* 		border: #f3f3f3 1px solid;
		background-color: #090723;
		border-radius: 30px 30px 10px 10px; */
	}
	.boxPlus>div>h2{
		position: relative;
		left: 2.5%;
		font-size: 25px;
		color: #545C64;
	}
	.boxPlus>div>h2>span:first-child{
		margin: 0 5px;
		font-size: 35px;
	}
	.boxPlus>div>h2>span:last-child{
		font-size: 25px;
	}
/* 	.boxPlus>div>h2:hover{
		color: #F6F6F6;
	} */

</style>