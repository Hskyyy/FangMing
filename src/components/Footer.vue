<template>
<!--底部主体父元素-->
  <div class="footer">
			<div class="foot">


			<!-- 导航栏-->
     <ul class="navs">
				 <li><a href="#">网站首页</a><b>|</b></li>
				 <li><a href="#">关于我们</a><b>|</b></li>
				 <li><a href="#">非界设计</a><b>|</b></li>
				 <li><a href="#">工程案例</a><b>|</b></li>
				 <li><a href="#">集团动态</a><b>|</b></li>
				 <li><a href="#">联系我们</a></li>
		 </ul>
			<!-- 底部联系我们-->
			<div class="contact">
					<ul class="logos">
							<li><img src="../fm_img/footerloto.png" alt=""/></li>
							<li><p>版权所有 山西方鸣装饰工程有限公司</p></li>
							<li><p>晋ICP备09010250号-13</p></li>
					</ul>
					<ul class="tell">
							<li><p>全国免费服务热线：400-006-8963</p></li>
							<li><p>集团网址：www.sxfmzs.com</p></li>
							<li><p>地址：山西省太原市长风东街万科紫台3号楼18层</p></li>
					</ul>
			</div>
			<!-- 二维码图片-->
			 <div id="er">
					 <img src="../fm_img/t111.png" alt=""/>
			 </div>
			<!-- 底部固定定位-->
			</div>
	</div>
</template>

<script>
export default {
    
}
</script>

<style lang="">
    *{margin:0;padding: 0;}
/*����ulȥ��*/
ul{list-style: none;}
/*����a��ǩȥ�»���*/
a{text-decoration:none;}
/*��Ԫ������*/
.footer{
    width:100%;
    height:300px;
    background:#464646;
}
.foot{width:1200px;height:290px;position: relative;margin: 0 auto;}
/*������ul��������*/
.navs{
    width:800px;
    height:15px;
    display:flex;
    position:absolute;
    top:20px;
}
/*������������ʽ*/
.navs>li>a{
    color:#ffffff;
    font-size:15px;
}
.navs>li>b{
    margin:0 20px;
    color:#ffffff;
}
/*logo��Ԫ������*/
.contact{
    width:700px;
    height:190px;
    position: relative;
    top: 100px;
    display: flex;
}
/*���logo����*/
.logos{
    width:300px;
    height:120px;
    border-right:1px solid #fff;
    position:absolute;
}
.logos>li:first-child{
    margin-bottom: 10px;
}
.logos>li:last-child{margin-top:5px;}
/*�ײ���ϵ����������ʽ*/
ul.logos>li>p{color:#ffffff;font-size: 14px;}
/*�м䲿��*/
.tell{
    width:330px;
    height:120px;
    position:absolute;
    left:340px;
    color:#ffffff;
}
.tell>li{margin-top:15px;}
/*�Ҳ��ά��*/
#er{
    width:250px;
    height:210px;
    position: absolute;
    top:30px;
    left:955px;
}
</style>