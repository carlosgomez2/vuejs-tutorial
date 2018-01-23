let app = new Vue({
  el: '#app',
  data: {
    name: 'Carlos',
    job: 'Developer',
    website: 'https://encrypted.google.com',
    websiteTag: '<a href="https://encrypted.google.com" target="_blank">encrypted google here by tag</a>'
  },
  methods: {
    greet: function(time){
      return 'Good ' + time + ' ' + this.name
    }
  }
})

let app2 = new Vue({
  el: '#app2',
  data: {
    age: 30,
    x: 0,
    y: 0
  },
  methods: {
    add: function(inc){
      this.age += inc
    },
    subtract: function(dec){
      this.age -= dec
    },
    updateXY: function(event){
      // console.log(event)
      this.x = event.offsetX
      this.y = event.offsetY
    },
    click: function(){
      alert("you are leaving this page")
    }
  }
})

let app3 = new Vue({
  el: '#app3',
  data: {
    name: '',
    age: ''
  },
  methods: {
    logName: function(){
      console.log('you entered your name')
    },
    logAge: function(){
      console.log('you entered your age')
    }
  }
})

const app4= new Vue({
  el: '#app4',
  data: {
    age: 30,
    a: 0,
    b: 0
  },
  methods: {
    // addToA: function(){
    //   console.log('addToA')
    //   return this.a + this.age
    // },
    // addToB: function(){
    //   console.log('addToB')
    //   return this.b + this.age
    // }
  },
  computed: {
    // More efficient than methods because only execute the selected computed property, and methods execute all methods to know which is changing
    addToA: function(){
      console.log('addToA')
      return this.a + this.age
    },
    addToB: function(){
      console.log('addToB')
      return this.b + this.age
    }
  }
})

let app5 = new Vue({
  el: '#app5',
  data: {
    available: false,
    nearby: false
  },
  computed: {
    compClasses: function(){
      return {
        available: this.available,
        nearby: this.nearby
      }
    }
  }
})

const app6 = new Vue({
  el : '#app6',
  data: {
    error: false,
    success: false
  }
})