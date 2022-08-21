// component/index-nav/index-nav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data1:Object,
    prodata:Array,  
  },
  /**
   * 组件的初始数据
   */
  data: {
    arr1:[],
    arr2:[]
  },
  ready(){
    this.setData({
      
      arr1:this.data.prodata[0],
      arr2:this.data.prodata.filter((item,index)=>{
        return  index != 0
      })
    })
    console.log(this.data);
   },
  options:{

  },
  /**
   * 组件的方法列表
   */
  methods: {
   
  },
 
})
