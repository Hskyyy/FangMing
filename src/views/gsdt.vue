<template>
  <div>
  <div class="list">
		<p class="listy">
				<router-link to='/gsdt'>公司动态</router-link>
				<router-link to='/hydt'>行业动态</router-link>
		</p>
</div>
<!--介绍-->
<div class="ntitle">
		<p>NEWS</p>
		<p>时刻了解我们的设计信息与行业动态，企业通过宣传报道可以增加企业的透明度与知名度，
				从而使市场注意力最大化，由此获得营销的成功，我们要从建立企业新闻信用，加强队伍建设。</p>
</div>
  <div class="nls">
   <ul>
		<li v-for="d of dt">
				<a href="#"><img :src="d.cimg" alt=""/></a>
				<div>
						<a href="#">{{d.nname}}</a>
						<span>{{d.ntime}}</span>
				</div>
				<p>{{d.title}}</p>
		</li>
   </ul>
	</div>
  </div>
</template>
<script>
export default {
    data(){
		return{
			dt:[]
		}
	},
	methods: {
		gs(){
			var url="http://localhost:3000/gsdt/gsdt";
			this.axios.get(url).then((result=>{
				this.dt=result.data;
			}))
		}
	},
	created() {
		this.gs();
	},
}
</script>
<style lang="">
    *{margin: 0;padding: 0;}
ul{list-style: none;}
a{text-decoration: none;}
body{background: #f1f2f6;}
/*��̬��ť��Ԫ��*/
body{
    background:#f1f2f6;
}
.list{
    width:100%;
    height:50px;
}
/*��̬��ť���ÿ��*/
.listy{width:1200px;
    height:30px;
    margin:10px auto;
}
/*������ť����*/
.listy>a{
    width:90px;
    height:30px;
    display: inline-block;
    background: #606060;
    line-height: 30px;
    text-align: center;
    color: #fff;
    font-size:13px;
    margin-left: 10px;
}
/*���Ч��*/
.listy>a:hover{
    transition: All 0.4s ease-in-out;
    background:firebrick;
}
/*���ܸ�Ԫ��*/
.ntitle{
    width:775px;
    height:92px;
    margin:0 auto;
}
/*�����������*/
.ntitle>p:first-child{
    width:775px;
    height:24px;
    font-size: 27px;
    font-weight:700;
    text-align: center;
}
/*��������*/
.ntitle>p:last-child{
    width:775px;
    height:48px;
    font-size: 14px;
    margin-top:22px;
    line-height:25px;
}
div.nls{
    width:1200px;
    height:1650px;
    margin: 0 auto;
}
div.nls>ul>li{
    width: 1200px;
    height:160px;
    border-bottom:1px dotted #ff0000;
    position: relative;
    margin-top: 20px;;
}
div.nls>ul>li>a>img{
    width:280px;
    height:135px;
    display:inline-block;
    margin-top:5px;
}
div.nls>ul>li>div{
    width: 880px;
    height:24px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top:20px;left:320px;
}
div.nls>ul>li>div>a{
    display: block;
}
div.nls>ul>li>div>span{
    font-size: 15px;
    font-style:italic;
    display:block;
}
div.nls>ul>li>div>a{
    font-size: 22px;
    color:black;
}
div.nls>ul>li>div>a:hover{
    color:#808080;
}
div.nls>ul>li>p{

    font-size: 15px;
    position:absolute;
    top:70px;left:320px;
}
</style>