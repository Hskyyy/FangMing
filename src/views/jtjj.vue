<template>
  <div>
      <div class="list">
		 <p class="listy">
		 		<a href="#">公司动态</a>
				<a href="#">业务动态</a>
		 </p>
  </div>
<!--介绍-->
  <div class="ntitle">
		<p>ABOUT US</p>
		<p>时刻了解我们的设计信息与行业动态，企业通过宣传报道可以增加企业的透明度与知名度，
				从而使市场注意力最大化，由此获得营销的成功，我们要从建立企业新闻信用，加强队伍建设。</p>
  </div>
	<!-- 主体内容-->
  <div class="simple">
			<!-- 图片-->
			<div>
					<img src="../fm_img/70bf506084942226b3a9ea585dec061f.jpg" alt=""/>
			</div>
			<!-- 介绍内容-->
			<div>
					<p>方鸣装集团成立于2010年，集团旗下设有：方鸣装饰、非界全案创意设计机构。</p>
					<p>近年来，随着企业品牌影响力在全国范围内的不断提升，方鸣装饰集团已在山西、陕西、内蒙古、甘肃、新疆、宁夏、以及京津冀鲁地区成功设立分公司，业务覆盖全国，逐步拓展至所有商业空间。</p>
					<p>非界全案创意设计机构专业从事：商业空间、写字楼、网咖、酒店、宾馆、政府办公、公共场馆等室内外装饰设计。非界拥有一批优秀的设计师和素质过硬的专业团队，打造新型的商业空间，让品牌/产品/设计/服务直面消费者，把（创造力）转化为（商业价值）。</p>
					<p>公司积极建立现代企业管理制度，严格规范公司内部运作和现场施工管理，凭借综合实力，几年来公司迅速发展，工程业绩不断攀升，现已成为年产值千万元以上的装饰骨干企业。</p>
					<p>方鸣装饰，本着“鸣者建道 诚其久远”的指导思想，将万变的市场和经营者投资紧密结合。在客户群中赢得了骄人的口碑。在今后的发展中，方鸣人愿以更大的热忱为广大客户竭诚服务，与各界朋友精诚合作，共创装饰行业更加美好的未来。</p>
			</div>
	</div>
  </div>
</template> 

<script>
export default {
    
}
</script>
<style>
   *{margin: 0;padding: 0;}
/*����a��ǩȥ�»���*/
a{text-decoration: none;}
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
p{
    font-size: 14px;
    margin-top:22px;
    line-height:25px;
}
.simple{width:1200px;height:826px;margin:0 auto;}
.simple>div:first-child>img{margin-top: 30px;}
.simple>div>p{text-indent:35px;}
</style>