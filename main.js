// document.querySelector("a-scene").renderer.gammaOutput=true;

AFRAME.registerComponent('twitter-panel', {
  init:function(){
      this.el.addEventListener('click', ()=>{
          // window.location = this.data.href;
          window.open(this.data.href, '_blank');
      });
  }
});

AFRAME.registerComponent('instagram-panel', {
  init:function(){
      this.el.addEventListener('click', ()=>{
          // window.location = this.data.href;
          window.open(this.data.href, '_blank');
      });
  }
});

AFRAME.registerComponent('github-panel', {
  init:function(){
      this.el.addEventListener('click', ()=>{
          // window.location = this.data.href;
          window.open(this.data.href, '_blank');
      });
  }
});