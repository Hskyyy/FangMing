<template>
  <div>
     <!--右侧固定定位-->
<div class="r">
		<a href="#"><img src="../fm_img/G0.png" alt=""/></a>
</div>
<!--下部固定定位-->
<div class="fixed" id="fixed1"  @mouseenter="close">
		<ul class="navbar">
				<li><a href="#">首页</a><span>/</span></li>
				<li><a href="#">咖啡餐饮</a><span>/</span></li>
				<li><a href="#">酒店办公</a><span>/</span></li>
				<li><a href="#">电竞网咖</a><span>/</span></li>
				<li><a href="#">休闲娱乐</a><span>/</span></li>
				<li><a href="#">家装家居</a><span>/</span></li>
				<li><a href="#">商超连锁</a><span>/</span></li>
				<li><a href="#">其他项目</a></li>
		</ul>
		<p>全国最大商业空间设计团队 商业空间装修  全套解决方案  一站式服务<span> 187 9273 3332</span>
				（<span>微信同号</span>）<span>24小时客服在线</span></p>
		<span id="span1"></span>
   </div>
<img id="img" src="../fm_img/t2222.png" alt=""/>
  </div>
</template>

<script>
export default {
    data(){
      return{}
    },
    methods: {
      close(){
       		var fixed=document.getElementById('fixed1');
		      var span=document.getElementById('span1');
	      	var img=document.getElementById('img');
	      	span.onclick=function(){
		  		   fixed.style.display='none';
			      	span.style.display='none';
			      	img.style.display='block';
		       }
		       img.onclick=function(){
			       	fixed.style.display='block';
				      span.style.display='block';
				      img.style.display='none';
		}
      }
    },
}
</script>

<style lang="">
    				*{margin: 0;padding: 0;}
				ul{list-style: none;}
				.r{ position:fixed;
						top:50%;
						right:1px;
				}
				.fixed{width:100%;height:90px;;background:rgba(94,94,94,0.8);position:fixed;bottom:0;}
				/*上方导航栏*/
				.navbar{width:1200px;height:45px;display: flex;margin:0 auto;}
				.navbar>li>a{color:#ffffff;font-size:30px;}
				.navbar>li>a:hover{color:#FF8E00;}
				.navbar>li>span{font-size:25px;margin-left:10px;margin-right:10px;color:#ffffff;}
				/*下方联系我们*/
				.fixed>p{width:1200px;margin:0 auto;color:#ffffff;font-size: 23px;}
				.fixed>p>span{color:#6be731;}
        .fixed>span{
						z-index: 8;
						width: 33px;
						height:33px;
						position:absolute;
						top:15px;right:200px;
						background-image:url(../fm_img/111.jpg);
				}
				span:hover{
						cursor:pointer ;

				}
				#img:hover{
						cursor:pointer ;
				}
				#img{
						position:fixed;
						bottom:0;
						display: none;
				}
</style>