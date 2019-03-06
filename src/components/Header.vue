<template>
   <div>
      <!--公司名称-->
  <div id="name">
      <p>欢迎登陆方鸣装饰集团官方网站!</p>
  </div>
<!--logo图片-->
 <div class="logo">
     <div><img src="../fm_img/logo (1).png" alt=""/></div>
     <div><img src="../fm_img/top1.jpg" alt=""/></div>
     <div><img src="../fm_img/top2.jpg" alt=""/></div>
 </div>
<!--导航栏-->
<div class="nav-header">
    <ul>
        <li><router-link to='/'>网站首页</router-link><span>|</span></li>
        <li><a href="#">关于我们</a><span>|</span>
            <ul>
                <li><router-link to="/jtjj">集团简介</router-link></li>
                <li><router-link to="/ywfg">业务覆盖</router-link></li>
                <li><router-link to='/lxwm'>联系我们</router-link></li>
            </ul>
        </li>
        <li><router-link to='/ffsj'>非凡设计</router-link><span>|</span></li>
        <li><a href="javascrt:;">工程案例</a><span>|</span>
            <ul>
                <li><router-link to="/gcal">咖啡餐饮</router-link></li>
                <li><router-link to="/jdbg">酒店办公</router-link></li>
                <li><router-link to="/djwk">电竞网咖</router-link></li>
                <li><router-link to="/xxyl">休闲娱乐</router-link></li>
                <li><router-link to="/jzjj">家装家居</router-link></li>
                <li><router-link to="/scls">商超连锁</router-link></li>
                <li><a href="javascript:;">其他项目</a></li>
            </ul>
        </li>
        <li><a href="javascript:;">集团动态</a><span>|</span>
            <ul>
                <li><router-link to='/gsdt'>公司动态</router-link></li>
                <li><router-link to='/hydt'>行业动态</router-link></li>
            </ul>
        </li>
        <li><router-link to='/lxwm'>联系我们</router-link></li>
    </ul>
</div>
<!--轮播图-->
<div class="carousel">
    <mt-swipe>
        <mt-swipe-item>
           <img src="../fm_img/car1.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
           <img src="../fm_img/car1.jpg" alt="">
        </mt-swipe-item>
     </mt-swipe>
    <ul class="D">
        <li></li>
    </ul>
    <a href="javascript:;" id="prev" class="left arrow"></a>
    <a href="javascript:;" id="next" class="right arrow"></a>
</div>
     
   </div>
</template>
<script>
export default {
  data(){
      return{
      }
  }
}
</script>
<style lang="">
    *{margin: 0;padding: 0;}
body{width:100%;}
ul{list-style:none;}
a{text-decoration:none;}
/*��˾����*/
#name{
    width:100%;
    height:46px;
    border-bottom:5px solid #f00;
    background:#f1f1f1;
}
#name>p{
    color: #4a4a4a;
    width:300px;
    height:40px;
    line-height:40px;
    margin-left:350px;
    font-size:15px;
}
/*logoͼƬ����*/
.logo{
    width:100%;
    height:130px;
    background:#fff;
    display:flex;
    justify-content:center;
}
.logo>div:nth-child(2){margin:0 50px;}
/*��һ��logoͼƬ��Ч*/
.logo>div:first-child:hover{
    animation:turn 0.8s ease 1;
}
@keyframes turn{
    0%{transform:rotate(0deg);}
    20%{transform:rotate(10deg);}
    50%{transform:rotate(-10deg);}
    70%{transform:rotate(5deg);}
    90%{transform:rotate(-5deg);}
    100%{transform:rotate(0deg);}}
/*������*/
.nav-header{width:100%;height:50px;background:#606060;position:relative;}
.nav-header>ul{
    width:800px;
    height:15px;
    display:flex;
    position:absolute;
    left:400px;
    z-index: 10;
}
.nav-header>ul>li{width:115px;height:50px;}
.nav-header>ul>li>span{color:#f1f1f1;}
.nav-header>ul>li>ul{
    display:none;
    position:absolute;}
.nav-header>ul>li>a,.nav-header>ul>li>ul>li>a{
    color:#f1f1f1;
    display: inline-block;
    width:110px;
    height:20px;
    line-height: 50px;
    text-align: center;
    font-size:14px;
}


/*�����˵�*/
.nav-header>ul>li>ul{background:#606060;}
.nav-header>ul>li>ul>li{margin-bottom:10px;}
.nav-header>ul>li:hover>ul{
    display: block;
}
/*�����˵��������غ;��Զ�
.nav>ul>li>span{margin:0 30px;color:#e6ffe6;}
/*�ֲ�ͼ��Ԫ��*/
div.carousel{
    width:100%;
    height:440px;
    margin:0 auto;
    position: relative;    overflow: hidden;
}
    .mint-swipe,.mint-swipe-items-wrap,.mint-swipe-item{
      width:100%;
      height:440px;
    }
div.carousel-inner{
    width:100%;
    height:440px;
    position:absolute;
    left:0;
    display: flex;
    transition: all .5s linear;
}
div.carousel-inner>a{
    display: block;
    width:100%;
    height:440px;
}
/* div.carousel-inner>img{
    width:100%;
    cursor: pointer;
} */
.carousel>ul.D{
    width:100%;
    height:20px;
    display: flex;
    justify-content: center;
    background:rgba(0,0,0,0.5);
    position: absolute;
    top:420px;
}
/*�ֲ�ͼ�·��ֲ�Բ����ʽ*/
.carousel>ul.D>li{
    width:10px;
    height:10px;
    background:slategrey;
    border-radius: 50%;
    margin:5px 5px;
}
.carousel>a.arrow{
    width:55px;
    height:55px;
    border: 2px solid #fff;
    border-radius:50%;
}
.carousel>a.arrow:hover{opacity: 0.7}
a.left{
    width:55px;height:55px;background:url(../fm_img/arrow.png) no-repeat left center;
    opacity: 0.4;
    position:absolute;
    top:180px;left: 40px;
}
a.right{
    width:55px;height:55px;
    background:url(../fm_img/arrow.png) no-repeat right center;
    opacity: 0.4;
    position:absolute;
    top:180px;right: 40px;
}
</style>