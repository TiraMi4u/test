<template>
	<div id="CarBox">
		<div id="ProductPicture">
			<img :src="Product.imgUrl"/>
		</div>
		<div id="ProductMessage">
			<h3>{{Product.title}}</h3>
			<span>
			{{Business.name}}
			<img :src="{{Business.url}}" />
			</span>
			<span>{{Product.price}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'CarBox',
		data(){
			return{
				Business:{
					name:'tirami4u',
					url: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
					address:[
						{
						addressProvince:'广东省',
						addressCity:'广州市',
						addressArea:'从化区',
						fullAddress:'广州大学华软软件学院'	
						}
					]
					
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

<style>
</style>
