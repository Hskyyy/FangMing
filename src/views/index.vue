<template>
  <div>
     <!--优质品质图片-->
  <div class="nter">
      <div></div>
      <div class="nter2">
          <img src="../fm_img/2 (1).jpg" alt=""/>
      </div>
  </div>
<!--公司优点介绍圆圈-->
<div class="circle">
    <ul>
        <li><a href="#"><img src="../fm_img/t1.png" alt=""/></a><p>一站式设计装修</p></li>
        <li><a href="#"><img src="../fm_img/t2.png" alt=""/></a><p>高端经典设计</p></li>
        <li><a href="#"><img src="../fm_img/t3.png" alt=""/></a><p>超高效率</p></li>
        <li><a href="#"><img src="../fm_img/t4.png" alt=""/></a><p>完美品质</p></li>
    </ul>
</div>
<!--中部导航栏-->
<div class="anli" id="tabs">
    <div class="nav">
        <img src="../fm_img/t22.jpg" alt=""/>

        <div class="navbarw"  @mouseenter="click" id="tab">
           <div v-for="n of nav">{{n.sname}}</div>
        </div>
    </div>
    <div class="right">
        <div class="ss">
            <!-- 第一层图片-->
            <ul class="host">
                <li v-for="p of products">
                    <a href="javascript;;"><img  :src="p.cimg" alt=""/></a>
                    <p>{{p.name}}</p>
                </li>
            </ul>  
        </div>
    </div>
</div>
<!--动态-->
<div class="Dnew">
    <!-- 动态新闻左边-->
  <div id="one">
      <!-- 左边最上方-->
      <div>
          动态新闻
          <img src="../fm_img/more.jpg" alt=""/>
      </div>
      <!-- 左边中间部分-->
      <div>
          <img style="width:140px;height:106px;margin:15px 0;" src="../fm_img/7bdb229f0d74d963a96ad559192db8ec.jpg" alt=""/>
          <a href="#">灯光对餐饮空间设计的影响及重要</a>
          <p>今天，小编科普下餐厅灯光的知识，灯光是餐饮行业类空间设计的<br>要素与灵魂，因为餐厅装修灯光色彩的搭配合</p>
      </div>
      <!-- 左边下方部分-->
      <div>
          <p><a href="#">办公空间设计理念，办公室空间装修要注意什么？</a><span>2018-08-31</span></p>
          <p><a href="#">小型办公室装修设计如何合理利用空间</a><span>2018-08-03</span></p>
          <p><a href="#">7招教你轻松掌握餐饮店面设计装修技巧！</a><span>2018-08-01</span></p>
          <p><a href="#">商业空间装修想省钱的，必看! ！！</a><span>2018-07-31</span></p>
          <!-- 红色圆点-->
          <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
          </ul>
      </div>
  </div>
    <!-- 右边部分-->
    <div id="two">
        <!-- 右边上方-->
        <div>
            关于我们
            <img src="../fm_img/more.jpg" alt=""/>
        </div>
        <!-- 右边下方图片-->
        <div>
            <img src="../fm_img/t10.jpg" alt=""/>
        </div>
        <!-- 右边下方字体-->
        <div id="p">
            <p>方鸣装集团成立于2010年，集团旗下设有：方鸣装饰、非界全案创意设计机构。</p>
            <p>近年来，随着企业品牌影响力在全国范围内的不断提升，方鸣装饰集团已在山西、陕西、内蒙古、甘肃、新疆、宁夏、以及京津冀鲁地区成功设立分公司，业务覆盖全国。</p>
            <div><a href="#"><img src="../fm_img/t12.jpg" alt=""/></a></div>
        </div>
    </div>
 </div>
<!--新闻资讯图片-->
<div class="a">
    <img src="../fm_img/t33.jpg" alt=""/>
</div>
<!--新闻栏-->
<div class="new">
    <!-- 新闻栏1-->
    <ul>
        <li v-for="x of xin">
            <a href="#">
            <img :src="x.img" alt=""/>
            </a>
            <h3><a href="#">{{x.title}}</a></h3>
            <p>{{x.content}}</p>
        </li>
    </ul>
</div>
<!--最下方更多新闻图片-->
<div class="b">
        <img src="../fm_img/t13.jpg" alt=""/>

</div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            products:[],
            nav:[],
            xin:[]
        }
    },
    methods: {
        click(){
              $("div.navbarw>div").click(function(){
                var $li=$(this);
                var $div=$("div.ss");
                var i=$li.index();
                $("div.navbarw>div").removeClass("on");
                $("div.navbarw>div").eq(i).addClass("on");
                $div.css("top",-460*i);
               })
        },
        navul(){
           var url="http://localhost:3000/index";
           this.axios.get(url).then((result=>{
             this.products=result.data
           }))
        },
        navs(){
            var url="http://localhost:3000/index/nav";
            this.axios.get(url).then((result=>{
                this.nav=result.data
            }))
        },
        newss(){
            var url="http://localhost:3000/index/news";
            this.axios.get(url).then((result=>{
                this.xin=result.data;
            }))
        }
    },
    created() {
        this.navul();
        this.navs();
        this.newss();
    },
}
</script>

<style lang="">
 *{margin: 0;padding: 0;}
ul{list-style: none;}
a{text-decoration: none;}
/*����Ʒ��ͼƬ����*/
.nter{
    width:100%;
    height:85px;
    position: relative;
}
.nter>div:first-child{
    width:100%;
    height:36px;
    border-bottom:1px solid #e5e5e5;
    position:absolute;
}
.nter2{
    position:absolute;
    left:700px;
}
/*����ԲȦ*/
.circle{
    width:1050px;
    height:210px;
    margin:15px auto;
}
.circle>ul{
    display: flex;
    justify-content: space-around;
}
.circle>ul>li{
    width:130px;
    height:210px;
}
.circle>ul>li>p{
    font-size: 14px;
    line-height:30px;
    margin-top:10px;
    text-align:center;
}
.circle>ul>li>a>img{transition:all 0.8s linear;}
.circle>ul>li>a>img:hover{transform:rotate(360deg);}
/*�в���������Ԫ��*/
.anli{
    width:100%;
    height:550px;
    background:#f4f4f4;
    margin: 0 auto;
    display:flex;
    justify-content: center;
}
/*????????????*/
.nav{ width:240px;
    height:410px;
    border:1px solid #000;
    background:#db261f;
    margin-top:35px;}
.navbarw{
    width:210px;
    height:400px;
    margin:0 auto;
    text-align: center;
}
.navbarw>div{
    height: 50px;
    line-height: 50px;
    margin-bottom: 8px;
    border-radius: 10px;
    cursor: pointer;
    color:#fff;
    font-size: 20px;
}
div.navbarw>div.on{
    background: #FFF;
    color: #e11f1f;
}
/*????????????*/
.right{
    width:955px;
    height:475px;
    background: #787878;
    margin:35px 10px;
    overflow: hidden;
}
.right>div.ss{
    position: relative;
    top:0;
    transition: all .5s linear;
}

/*???????ul*/
.right::before{
    content: '';
    display: block;
    width:995px;
    height:30px;
}
.right>div.ss>ul.host{
    width:955px;
    height:460px;
    display:flex;
    flex-wrap:wrap;
}
/*?????li*/
.right>div.ss>ul.host>li{
    width:288px;
    height:200px;
    margin: 0 15px 30px;
}
.right>div.ss>ul.host>li>p{
    width:288px;
    height:40px;
    display:none;
    line-height: 40px;
    text-align: center;
    background: #f00;
}
.right>div.ss>ul.host>li:hover{
    background:#f00;
}

.right>div.ss>ul.host>li:hover>p{
    display: block;
    color:#fff;
}
.right>div.ss>ul.host>li>a{
    transition: opacity .5s;
    transition-property: opacity;
    transition-duration: 0.5s;
    transition-timing-function: ease;
    transition-delay: 0s;
    opacity: 0.5;
    width: 290px;
    height: 190px;
    color:#fff;
}
.right>div.ss>ul.host>li>a:hover{
    opacity: 1;
}
.right>div.ss>ul.host>li>a>img{
    width:288px;
    height:160px;
}
/*������Ѷ��Ԫ��*/
.Dnew{
    width:1200px;
    height:310px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
/*������Ѷ��߲���*/
.Dnew #one{
    width:570px;
    height:305px;
    margin-left: 20px;
}
/*������Ѷ����*/
.Dnew #one>div:first-child{
    width:570px;
    height:40px;
    position: relative;
    font-weight: bold;
}
.Dnew #one>div:first-child>img{
    width:60px;
    height:20px;
    position: absolute;
    left:470px;
}
/*������Ѷ���и�Ԫ������*/
.Dnew #one>div:nth-child(2){
    width:570px;
    height:130px;
    border-bottom:2px dotted #cccccc;
    position: relative;
}
/*������Ѷ���б���*/
.Dnew #one>div:nth-child(2)>a{
    position: absolute;
    top:25px;
    left:160px;
    font-weight: bold;
    color:#000;
}
/*������Ѷ���б����������Ч��*/
.Dnew #one>div:nth-child(2)>a:hover{color: #FF8E00;}
/*������Ѷ���н���*/
.Dnew #one>div:nth-child(2)>p{
    position: absolute;
    top:60px;
    left:160px;
    font-size: 13px;
}
/*������Ѷ���¸�Ԫ��*/
.Dnew #one>div:last-child{
    width:570px;
    height:130px;
    position: relative;
}
/*������Ѷ������������*/
.Dnew #one>div:last-child>p>a,.Dnew #one>div:last-child>p>span{
    display:block;
    font-size: 15px;
    color:#727272;
    margin-top:8px;
}
/*������Ѷ�������Ų���*/
.Dnew #one>div:last-child>p{
    display: flex;
    justify-content: space-between;
    margin-left:30px;
}
/*������Ѷ����ǰ����ɫԲ�㸸Ԫ��*/
.Dnew #one>div:last-child>ul{
    width:15px;
    height:150px;
    position: absolute;
    top:-3px;
    left:5px;
}
/*������Ѷ����ǰ����ɫԲ������*/
.Dnew #one>div:last-child>ul>li{
      width:7px;
      height:7px;
      border-radius: 50%;
      background:#fd7a88;
      margin-top: 20px;
  }
/*������Ѷ�ұ߸�Ԫ��*/
.Dnew #two{
    width:570px;
    height:305px;
    position: relative;
}
/*������Ѷ�ұ��Ϸ�*/
.Dnew #two>div:first-child{
    width:570px;
    height:30px;
    position: relative;
    font-weight: bold;
    border-bottom: 2px dotted #cccccc;
}
/*������Ѷ����СͼƬ*/
.Dnew #two>div:first-child>img{
    width:60px;
    height:20px;
    position: absolute;
    left:470px;
}
/*������Ѷ���и�Ԫ��*/
.Dnew #two>div:nth-child(2){
    width:258px;
    height:235px;
    position: absolute;
    top:50px;
    left:10px;
}
/*������Ѷ���������С*/
.Dnew #two>#p>p{font-size: 14px;}
/*������Ѷ���б���ͽ���λ��*/
.Dnew #two>#p>p:first-child{
    width:270px;
    height:60px;
    position: absolute;
    top:70px;
    left:300px;
}
.Dnew #two>#p>p:nth-child(2){
    width:270px;
    height:150px;
    position: absolute;
    top:130px;
    left:300px;
}
/*������Ѷ�Ҳ鿴���鰴ť����*/
.Dnew #two>#p>div{
    width:136px;
    height:30px;
    position: absolute;
    top:260px;
    left:420px;
}
.a{
    width:1180px;height:110px;margin: 10px auto;}
/*�·���������Ԫ��*/
.new{
    width:1250px;
    height:700px;
    margin: 10px auto;
}
/*�·�ul��Ԫ��*/
.new>ul{
    width:1250px;
    height:700px;
    display: flex;
    flex-wrap: wrap;
    margin-left:50px;
}
/*������Ѷli��С*/
.new>ul>li{
    width:560px;
    height:180px;
    position: relative;
}
/*������Ѷ���б���a����������*/
.new>ul>li>h3>a{
    color:#333333;
    position: absolute;
    top:20px;
    left:270px;
    font-size: 16px;
}
/*������Ѷ���б���������Ч*/
.new>ul>li>h3>a:hover{color: #FF8E00;}
/*������ѶͼƬ������*/
.new>ul>li>a>img{
    width:250px;
    height:180px;
    transition: 1.2s;
}
/*������ѶͼƬ�������Ч*/
.new>ul>li>a>img:hover{transform:scale(1.1);}
/*���·���������*/
.new>ul>li>p{
    width:260px;
    height:75px;
    font-size: 14px;
    position: absolute;
    top:60px;
    left:270px;
}
.b{
    width:1180px;
    height:110px;
    margin: 30px auto;
}
</style>