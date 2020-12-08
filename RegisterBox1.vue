<template>
	<div id="RegisterBox1">
		<div>
			<span>用户名</span>
			<el-input placeholder="请输入用户名" v-model="username" clearable></el-input> 
		</div>
		<div>
			<span>密码</span>
			<el-input placeholder="请输入密码" v-model="password" show-password></el-input> 
		</div>
		<div>
			<span>确认密码</span>
			<el-input placeholder="请再次输入相同密码" v-model="passwordCheck" show-password></el-input> 
		</div>
		<div>
			<span>手机号</span>
			<el-input placeholder="请输入用户手机号" v-model="phone" clearable></el-input> 
		</div>
		<div>
			<span>邮箱</span>
			<el-input placeholder="请输入用户邮箱" v-model="email" clearable></el-input> 
		</div>
		<div>
			<span>验证码</span>
			<el-input placeholder="请输入验证码（区分大小写）" v-model="verificationCode" clearable></el-input> 
			<canvas id="canvas" width="100" height="43" @click="updateCode"
			 style="border: 1px solid #ccc;
			   border-radius: 5px;"></canvas>
		</div>
	</div>
</template>

<script>
	export default{
		name:'RegisterBox1',
		data(){
			return{
				username:'',
				password:'',
				passwordCheck:'',
				phone:'',
				email:'',
				verificationCode:'',
				show_num:[]
				
			}
		},
		methods:{
			draw() {
			        var canvas_width=document.getElementById('canvas').clientWidth;
			        var canvas_height=document.getElementById('canvas').clientHeight;
			        var canvas = document.getElementById("canvas");
			        var context = canvas.getContext("2d");
			        canvas.width = canvas_width;
			        canvas.height = canvas_height;
			        var sCode = "A,B,C,D,E,F,G,H,J,K,L,M,N,Q,R,S,T,U,V,W,X,Y,Z,1,2,3,4,5,6,7,8,9";
			        var aCode = sCode.split(",");
			        var aLength = aCode.length;
						
			        for (var i = 0; i <= 3; i++) {
			            var j = Math.floor(Math.random() * aLength);
			            var deg = Math.random() * 30 * Math.PI / 180;
			            var txt = aCode[j];
			            this.show_num[i] = txt;
			            var x = 10 + i * 20;
			            var y = 20 + Math.random() * 8;
			            context.font = "bold 23px 微软雅黑";
			
			            context.translate(x, y);
			            context.rotate(deg);
			
			            context.fillStyle =  this.randomColor();
			            context.fillText(txt, 0, 0);
			
			            context.rotate(-deg);
			            context.translate(-x, -y);
			        }
			        for (var i = 0; i <= 15; i++) { 
			            context.strokeStyle =  this.randomColor();
			            context.beginPath();
			            context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
			            context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
			            context.stroke();
			        }
			        for (var i = 0; i <= 30; i++) { 
			            context.strokeStyle = this.randomColor();
			            context.beginPath();
			            var x = Math.random() * canvas_width;
			            var y = Math.random() * canvas_height;
			            context.moveTo(x, y);
			            context.lineTo(x + 1, y + 1);
			            context.stroke();
			        }
			    },
			randomColor() {
			        var r = Math.floor(Math.random() * 256);
			        var g = Math.floor(Math.random() * 256);
			        var b = Math.floor(Math.random() * 256);
			        return "rgb(" + r + "," + g + "," + b + ")";
			    },
			updateCode(){
					this.draw();
					}
		},

		 mounted(){
				 this.draw();
	    }
		
	}
</script>

<style scoped>
	#RegisterBox1>div{
	/* 	font-size: 25px; */
		margin: 20px;
		
	}
#RegisterBox1>div>span{
/* 	font-size: 25px; */
	color: #545C64;
}
/* .el-input {
		width: 60%;
	} */
</style>
