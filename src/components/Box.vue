<template>
	<div id="boxs">
		<div id="boxImg">
			<img :src='imgUrl'>
		</div>
	    <el-tooltip class="item" effect="dark" :content="title" placement="bottom-end">
	 	<h3>{{title | snippet}}</h3>
	    </el-tooltip>
		<div id="enterprise">
		<el-avatar id='enterpriseImg' size="small" :src="enterpriseUrl"></el-avatar>
		<span>{{enterpriseName | snippet}}</span>
		</div>
		<div id="price">
		<span>{{price}}</span> 元
		</div>
</div>
</template>

<script>
	export default{
			name:'Box',
		data(){
			return{
				title:'人教版九年级数学下册',
				price:'100',
				imgUrl:require('../assets/images/shuxue.jpg'),
				enterpriseUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
				enterpriseName:'tirami4u'
			}
		}
		
	}
</script>

<style scoped>
			#boxs{
				margin: 10px 20px;
				height: 300px;
				width: 200px;
				border-radius: 5px;
				background-color: #fff;
				border: #f3f3f3 1px solid;
				float: left;
			}
			#boxs:hover{
				position: relative;
				top:-2px;
				left:-2px;
				box-shadow: 5px 5px 2px #909399;
			}
			#boxImg{
				margin: 10px auto;
				height: 200px;
				width: 150px;
			}
			#boxImg>img{
				height: 200px;
				width: 150px;	
				border-radius: 5px;
			}
			.el-tooltip{
				margin: 3px auto;
				font-size: 18px;
				line-height: 40px;
				text-align: center;
				color: #333;
			}
			#price{
				font-size: 15px;
				margin: 2px 5px;
				float: right;
				color: #ED3847;
				line-height: 20px;
			}
			#price>span{
				position: relative;
				top: 2px;
				font-size: 25px;
				font-weight: bold;
			}
			#enterprise{
				font-size: 10px;
				margin: 2px 15px;
				float: left;
			/* 	line-height: -20px; */
				color: #333;
			}
/* 			#enterprise>span{
				position: relative;
				top: 2px;
				font-size: 25px;
				font-weight: bold;
				
			} */
</style>
