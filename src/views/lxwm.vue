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
  <div class="notry">
       <div v-for="con of contact">
        <h5>{{con.cname}}</h5>
        <p>{{con.asdd}}</p>
        <p>{{con.phone}}</p>
        <p>{{con.fax}}</p>
        <p>{{con.hotline}}</p>
       </div>
	</div>
  </div>
</template>

<script>
export default {
   data(){
       return{
           contact:[]
       }
   },
   methods: {
       con(){
           var url="http://localhost:3000/lxwm";
           this.axios.get(url).then((result=>{
              this.contact=result.data
              console.log(this.contact)
           }))
       }
   },
   created() {
       this.con();
   }, 
}
</script>

<style lang="">
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
.ntitle>p:last-child{
    width:775px;
    height:48px;
    font-size: 14px;
    margin-top:22px;
    line-height:25px;
}
.notry{width:1200px;height:1150px;margin:20px auto;}
.notry>div>h5{margin-top:35px;}
.notry>div>p{margin-top:15px;font-size: 13px;}
</style>