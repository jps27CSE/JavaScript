var rect=
{
   width: 100,
   height: 50,

   draw: function()
   {
       console.log('I am a rectangle')
       this.printProperties()
   },

   printProperties:function()
   {
     console.log('My width is ' +this.width)
     console.log('My height is ' +this.height)
   }
}

rect.draw()