<template>
	<div id="ProductPicture" style="height: 500px; width: 500px; border: 1px #42B983 solid;">
		<div style="width:400px; height:500px; display: table-cell;vertical-align: middle; text-align: center; border: #2C3E50 1px solid;" >
 <el-image
    style="width: 80%; border-radius: 0;"
    :src="url" 
    :preview-src-list="srcList">
  </el-image>	
		</div>
		 <div style="width: 15%; border: #000000 1px solid;">
			 <div v-for="item,index in srcList" :key='item+index'>
				 <span @click="enter(item,index)">
					     <el-image
					       style="width: 50px; height: 50px; margin: 5px;"
					       :src="item"
					       fit="fit"
						    :class="{'maskLayer': (index != active )}"
						   ></el-image>
				 </span>
			 </div>
		 </div>
	</div>
</template>
<script>
  export default {
	  name:'ProductPicture',
    data() {
      return {
		active:0,
        url: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        srcList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
		  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
		  'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
		  'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
		  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        ]
      }
    },
	methods:{
		enter:function(e,f){
			this.url=e;
			this.active=f;
		}
	}
  }
</script>
<style scoped>
	#ProductPicture{
		position: absolute;
	}
/* 	#ProductPicture>div:last-child>div,span{
		float: left;
		margin: 5px;
	} */
	
	#ProductPicture>div{
	/* 	background-color: #909399; */
	}
	.el-image{
		border-radius: 10px;
	}
	.maskLayer{ 
		height: auto;
		width: auto;
		background-color:#000000;
		 opacity:0.6; 
		 -moz-opacity:0.6;
		  filter:alpha(opacity=60);
		  }
		  #ProductPicture>div:last-child{
			position: absolute;
			right:5%;
			top: 0;
		  }
</style>
