<template>
	<div id="LoginBox">
<el-alert v-if="errvisiable"
    title="登陆失败"
    type="error"
    description="请检查您所输入的账号密码是否正确"
    show-icon>
 </el-alert>
<div>
	<div>
		<span id="else1"  class="icon-denglu iconfont"></span>
		<el-input placeholder="请输入账号/手机/邮箱" v-model="username" clearable></el-input> 
	</div>
	<div>
		<span id="else1"  class="icon-mima iconfont"></span>
		<el-input placeholder="请输入密码" v-model="password" show-password></el-input>
	</div>
	<div>
		<el-button type="primary">登录</el-button>
	</div>
</div>
<div>
		<span>没有账号？<router-link to='/Register'><a @click="registerBtn">立即注册</a></router-link></span>
		<span>无法登陆？</span>
</div>
	</div>
</template>

<script>
	export default{
			name:'LoginBox',
		data(){
			return{
				username:'',
				password:'',
				errvisiable:false
			}
		},
		methods:{
			registerBtn(){
				// console.log(1);
				this.$emit('func');
			}
		}
		
	}
</script>

<style scoped>
#LoginBox>div{
	position: relative;
	left: 12%;
	width: 120%;
}
	#LoginBox>div>div>span{
		margin: 0 22px 20px 10px;
		font-size: 30px;
		font-weight: 200;
		line-height: 20px;
	}
	#LoginBox>div>div{
	width: 60%;
	margin: 20px;
	}
	#LoginBox>div:last-child>span:last-child{
		margin: 10px 140px;
	}
	#LoginBox>div:last-child>span:first-child{
		margin: 10px;
	}
	.el-input {
		width: 230px;
		margin: 0 15px;
	}
	.el-button{
		width: 90%;
	}
</style>
