<template>
	<div id="Register">
		<div  style="width: 80%;">
		<el-steps :active="active" finish-status="success">
		  <el-step title="步骤 1" description="填写用户个人信息"></el-step>
		  <el-step title="步骤 2" description="邮箱验证"></el-step>
		  <el-step title="步骤 3" description="确认注册"></el-step>
		</el-steps>	
		</div>
		<div>
			<register-box1 v-if="active==0"></register-box1>
			<register-box2 v-if="active==1"></register-box2>
		</div>
		<div>
				<el-button style="margin-top: 12px;" v-show="active!=0&&active!=3" @click="back">上一步</el-button>
				<el-button style="margin-top: 12px;" v-show="active!=3" @click="next">下一步</el-button>
				<el-button style="margin-top: 12px;" v-show="active==3" @click="finishRegister">完成</el-button>
		</div>

	</div>
</template>

<script>
 import RegisterBox1 from '../components/RegisterBox1.vue'
 import RegisterBox2 from '../components/RegisterBox2.vue'
	export default{
		name:'Register',
		components:{
				RegisterBox1,RegisterBox2
			},
		data(){
			return{
				 active: 0
			}
		},
		 methods: {
		      next() {
		        if (this.active++ > 2) this.active = 0;
		      },
			  back() {
			    if (this.active-- <0) this.active = 0;
			  }
		    }
		
	}
</script>

<style scoped>
#Register>div{
	width: 50%;
	margin: 40px auto 50px;
}
</style>
