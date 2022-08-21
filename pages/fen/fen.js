import Base from '../../utils/base'
const base = new Base()
Page({
  data: {
    // typeList: {},
    curId: 0,
    index:0,
    

  },
  getId(e) {
    console.log(e);
    let index = e.mark.index
    this.setData({
      curId: index,
      typeList: this.data.ToFen[index],
    })
    // console.log(this.data.ToFen);
    console.log(this.data.typeList);
  },
  async onLoad() {
    //分类页数据
    const tofendata = await base.request('categories')
    const ToFen = tofendata.message
    console.log(ToFen);
    this.setData({
      ToFen,
      typeList:ToFen[0],
    })
    wx.pageScrollTo({
      duration: 2,
      scrollTop:100
    })

  }

})
