<template>
  <div>
    <!--动态按钮-->
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
<!--中国图片-->
    <div class="T">
            <img src="../fm_img/777c91fb934b202406a6d2becfd0b67f.jpg" alt="">
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    *{margin: 0;padding: 0;}
/*����a��ǩȥ�»���*/
a{text-decoration: none;}
body{
    background:#f1f2f6;
}
/*��̬��ť��Ԫ��*/
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
/*ͼƬ��Ԫ��*/
.T{width:100%;height:980px;margin-top:20px;}
/*ͼƬ��Ԫ��*/
.T>img{width:1200px;height: 920px;margin: 0 auto;display:block;}
</style>