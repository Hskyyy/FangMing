<template>
<div>
    <div class="navbard">
		<a href="#">电竞网咖</a>
		<a href="#">酒店办公</a>
		<a href="#">休闲娱乐</a>
		<a href="#">家装家居</a>
		<a href="#">商超连锁</a>
		<a href="#">咖啡餐饮</a>
</div>
<ul class="clearfix">
		<li v-for="a of al">
				<a href="javascript:;"><img :src="a.img" alt=""/></a>
				<p><a href="javascript:;">{{a.title}}</a></p>
		</li>
</ul>
</div>
</template>
<script>
export default {
     data(){
		 return{
			 al:[]
		 }
	 },
	 methods: {
		 gc(){
			 var url="http://localhost:3000/gcal/djwk";
			 this.axios.get(url).then((result=>{
				 this.al=result.data
			 }))
		 }
	 },
	 created() {
		 this.gc();
	 },
}
</script>

<style lang="">
    *{margin: 0;padding: 0;}
a{text-decoration: none;}
ul{list-style: none;}
.navbard{
    width:1200px;
    height:30px;
    margin:15px auto;
}
.navbard>a{
    width:90px;
    height:30px;
    color:#fff;
    font-size: 13px;
    display:inline-block;
    background:#606060;
    margin-right:15px;
    line-height:30px;
    text-align:center;
}
.navbard>a:hover{
    transition: All 0.4s ease-in-out;
    background:firebrick;
}
.clearfix{
    width:1250px;
    height:auto;
    display: flex;
    flex-wrap: wrap;
    margin:15px auto;
}
.clearfix>li{
    width: 270px;
    height:200px;
    margin: 40px 20px;
}
.clearfix>li>p{
    width:270px;
    height:40px;
    position: relative;
    top:-4px;
    line-height: 40px;
    text-align: center;
    background: #f00;
}
.clearfix>li>p>a{color:#fff;}
.clearfix>li>a>img{
    width:270px;height:200px;
}
</style>