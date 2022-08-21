// index.js
const app = getApp()
import Base from '../../utils/base'
const base=new Base()
Page({
  data: {},
  // 事件处理函数
  bindViewTap() {
   
  },
  async onLoad() {
    //轮播图数据
     const swiperdata=await base.request('home/swiperdata')
     const SW=swiperdata.message
     console.log(SW);
     //index导航栏数据
     const fendata=await base.request('home/catitems')
     const FE=fendata.message
     console.log(FE);
     //主页列表详情  
     const indexdata=await base.request('home/floordata')
     const ID=indexdata.message
    //  const prol=this.data.ID.product_list.every( item =>{
    //         return item[0]
    //     })
    //      console.log(prol);
     console.log(ID);
     //分类页数据
     const tofendata=await base.request('categories')
     const ToFen=tofendata.message
    //  console.log(ToFen);
     this.setData({
      SW,
      FE,
      ID,
      ToFen,
     })
  },
  onToFen(){
      wx.redirectTo({
        url: '/pages/fen/fen',
      })
  },

})
