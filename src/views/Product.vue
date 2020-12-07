<template>
	<div id="Product">
		<div id="ProductMessage">
			<product-picture></product-picture>
			<div id="ProductInformation">
				<h2>{{Product.title}}</h2>
				<h3><span><el-avatar id='enterpriseImg' size="small" :src="Business.url"></el-avatar></span>{{Business.name}}</h3>
				<h4>作者：{{Product.author}}</h4>
				<h4>出版社:{{Product.publisher}}</h4>
				<h4>原价：{{Product.originalPrice}}</h4>
				<h4>出版时间：{{Product.publicationDate}}</h4>
				<h4>发货地：{{Business.addressProvince+Business.addressCity}}</h4>
				<h4>售价:{{Product.price}}元</h4>
				<div>
					<span id="conditionTag" v-for="item,index in Product.condition" key="item+index">
										<el-tag type="info">{{item}}</el-tag>
					</span>
				</div>
			</div>
			<div id="btnBox">
				<el-button id="shoppingCar">加入购物车</el-button>
				<router-link to="/About"><el-button>联系卖家</el-button></router-link>
			</div>
		</div>
		<div id="BMessage">
			<h4>卖家留言：{{Product.message}}</h4>
		</div>
	</div>
</template>
<script>
 import ProductPicture from '../components/ProductPicture.vue'
 export default {
   name: 'Product',
   components: {
	ProductPicture
   },
   data(){
   	return{
   		Business:{
			name:'tirami4u',
			url: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
			addressProvince:'广东省',
			addressCity:'广州市',
			addressArea:'从化区',
			fullAddress:'广州大学华软软件学院'
		}	,
		Product:{
			title:'人教版九年级数学下册',
			price:'100',
			imgUrl:require('../assets/images/shuxue.jpg'),
			publisher:'人民教育出版社',
			originalPrice:'100',
			condition:['九成新','无缺页','有少许笔记']	,
			publicationDate:'2012-10-01',
			author:'某某某',
			message:'...........................................................................'
		}
   	}
   }
 }
</script>
<style scoped>
	#ProductMessage{
		background-color: #333333;
		position: absolute;
		width: 1200px;
		height: 500px;
		left: calc(50% - 1200px / 2);
		margin-top: 20px;
	}
#ProductInformation{
	position: absolute;
	right: 20%;
}
	
#shoppingCar{
	background-color:#DB0f30;
	color: #FFFFFF;
	border: #CE0f30 1px solid;
}
#shoppingCar:hover{
	cursor: pointer;
	background-color:#DB0f30;
}
#conditionTag{
	margin: 10px 5px;
}
#btnBox{
	position:absolute;
	right: 20%;
	bottom: 5%;
}
.el-button{
	margin: 5px 10px;
}
#BMessage{
	position: relative;
	top:600px;
	left: calc(50% - 1200px / 2);
	margin-top: 20px;
}
</style>
