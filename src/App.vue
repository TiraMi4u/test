<template>
  <div id="app">
	  <div id='nav'>
		  <el-menu
		    class="el-menu-demo"
		    mode="horizontal"
		    background-color="#545c64"
		    text-color="#fff"
		    active-text-color="#ffd04b"
		    router>
		   <el-menu-item index="/" >首页</el-menu-item>
		    <el-submenu index="2">
		      <template slot="title">书架分类</template>
			   <el-menu-item v-bind:index="'/ProductBoxs/'+item.engUrl" v-for="(item,index) in bookKinds" :key='index+item.engUrl'>
				   {{item.name}}
				</el-menu-item>
<!-- 			   
		     <el-menu-item index="/addblog"><router-link to="/addblog" tag="div">写博客</router-link></el-menu-item>
		      <el-menu-item index="/showblog"><router-link to="/showblog" tag="div">博客</router-link></el-menu-item>
		      <el-menu-item index="2-3">选项3</el-menu-item>
		      <el-submenu index="2-4">
		        <template slot="title">选项4</template>
		        <el-menu-item index="2-4-1">选项1</el-menu-item>
		        <el-menu-item index="2-4-2">选项2</el-menu-item>
		       <el-menu-item index="/login"> <router-link to="/login" tag="div">登录</router-link></el-menu-item>
		      </el-submenu> -->
		    </el-submenu>
		   <el-menu-item index="/About" :key="">信息中心</el-menu-item>
		  </el-menu>
	  </div>	
	<div id="loginPart" v-show="dialogVisible!=true">
				 <el-avatar id='headImg' size="large" :src="circleUrl"></el-avatar>  
				<span id="loginBtn" @click="dialogVisible = true">登录</span>
				 <span>你好，请</span>
	</div>
	<router-view/>
	<el-dialog
	class="pub_dialog"
	  title="登录"
	  :visible.sync="dialogVisible"
	  width="30%"
	  :before-close="handleClose"
	>
	 <login-box @func='handleCloseR'></login-box>
	</el-dialog>	
  </div>
</template>

<script>
import LoginBox from './components/LoginBox.vue'
 export default {
	 components:{
		 LoginBox
	 },
    data () {
      return {
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
		bookKinds:[
			{
				name:'互联网IT技术',
				engUrl:'InternetITTechnology'
			},
			{
				name:'经济/会计',
				engUrl:'EconomicsAccounting'
			},
			{
				name:'政治/法律',
				engUrl:'PoliticsLaw'
			},
			{
				name:'社会科学',
				engUrl:'SocialSciences'
			},
			{
				name:'文化/教育',
				engUrl:'CultureEducation'
			},
			{
				name:'语言/文字',
				engUrl:'LanguageText'
			},
			{
				name:'历史/地理/天文',
				engUrl:'HistoryGeographyAstronomy'
			},
			{
				name:'医药/卫生',
				engUrl:'MedicineHygiene '
			},
			{
				name:'农业/工业',
				engUrl:'AgricultureIndustry'
			},
			{
				name:'数理科学/化学',
				engUrl:'MathematicalScienceShemistry '
			},
			{
				name:'交通运输/航空航天',
				engUrl:'TransportationAerospace '
			},
			{
				name:'其他',
				engUrl:'Other'
			},
		],
		 dialogVisible: false
      }
    },
	 methods: {
	      handleClose(done) {
	       this.$confirm('确认取消登录？')
	         .then(_ => {
	        this.dialogVisible = false;
	        })
	      .catch(_ => {});

	      },
		  handleCloseR(done) {
			  // console.log(2);
			  this.dialogVisible = false;
		  }
	    }
  }	
</script>

<style scoped>
	#loginPart{
		position: absolute;
		right: 1%;
		top: 0;
	}
	#loginPart>*{
		float: right;
		font-size:14px;
		color: #FFFFFF;
	}
	#loginPart>span:last-child{
		font-size:14px;
		margin: 20px 6px;
	}
	#loginBtn{
		color: #FFD04B;
		margin: 12px 10px 12px 6px;
		padding: 5px 10px;
		border: #FFD04B 2px solid;
		border-radius: 50px;
	}
	#loginBtn:hover{
		cursor: pointer;
	}
	#headImg{
		margin: 10px;
	}
	.pub_dialog {
		display: flex;
		justify-content: center;
		align-items: Center;
		overflow: hidden;
		top: -20%;
	} 
</style>
