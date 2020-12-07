<template>
	<div id="boxElse">

		<div>
			<span id="else"  class="icon-gengduo iconfont"></span>
		</div>
		<el-tooltip class="item" effect="dark" content="查看更多相关教材" placement="right">
			<h3>查看更多<span id="else1"  class="icon-gengduo1 iconfont"></span></h3>
		</el-tooltip>
	</div>
</div>
</template>

<script>
	export default{
			name:'BoxElse',
		data(){
			return{
			
			}
		}
		
	}
</script>

<style scoped>
			#boxElse{
				margin: 10px 20px;
				height: 300px;
				width: 200px;
				border-radius: 5px;
				float: left;
				color: #909399;
				background-color: #fff;
				border: #f3f3f3 1px solid;
			}
			#boxElse:hover{
				position: relative;
				top:-2px;
				left:-2px;
				box-shadow: 5px 5px 2px #909399;
				color: #545C64;
			}
			#boxElse>div:first-child{
				position: relative;
				top:calc(50% - 50px / 2);
				left:calc(50% - 80px / 2);
			}
		#else{
		font-size: 80px;
		}	
			.el-tooltip{
				margin: auto;
				font-size: 18px;
				line-height: 40px;
				text-align: center;
			}

</style>
