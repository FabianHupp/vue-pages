<template>
  <div class="options">
    <div id="op1" v-bind:class="{ active: teaseropts[0].active }" class="option" @click="swapImage($event)" style="--optionBackground:url(https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg);">
      <div class="shadow"></div>
    </div>
    <div id="op2" v-bind:class="{ active: teaseropts[1].active }" class="option" @click="swapImage($event)" style="--optionBackground:url(https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg);">
       <div class="shadow"></div>
    </div>
    <div id="op3" v-bind:class="{ active: teaseropts[2].active }" class="option" @click="swapImage($event)" style="--optionBackground:url(https://66.media.tumblr.com/5af3f8303456e376ceda1517553ba786/tumblr_o4986gakjh1qho82wo1_1280.jpg);">
       <div class="shadow"></div>
    </div>
    <div id="op4" v-bind:class="{ active: teaseropts[3].active }" class="option" @click="swapImage($event)" style="--optionBackground:url(https://66.media.tumblr.com/5516a22e0cdacaa85311ec3f8fd1e9ef/tumblr_o45jwvdsL11qho82wo1_1280.jpg);">
       <div class="shadow"></div>
    </div>
    <div id="op5" v-bind:class="{ active: teaseropts[4].active }" class="option" @click="swapImage($event)" style="--optionBackground:url(https://66.media.tumblr.com/f19901f50b79604839ca761cd6d74748/tumblr_o65rohhkQL1qho82wo1_1280.jpg);">
       <div class="shadow"></div>
    </div>
  </div>
</template>

<script>
import image from "../assets/Images/Finished.svg"

export default {
    data() {
        const teaseropts = [
          {active: true},
          {active: false},
          {active: false},
          {active: false},
          {active: false},
        ];
        return {
            teaseropts,
            image: image,
            autoanimate: null
        }
    },
    methods: {
        swapImage(event) {
            for (var i = 0; i < this.teaseropts.length; i++) { this.teaseropts[i].active = false };
            switch(event.target.id){
                case 'op1':
                    this.teaseropts[0].active = true;
                    break;
                case 'op2':
                    this.teaseropts[1].active = true;
                    break;
                case 'op3':
                    this.teaseropts[2].active = true;
                    break;
                case 'op4':
                    this.teaseropts[3].active = true;
                    break;
                case 'op5':
                    this.teaseropts[4].active = true;
                    break;
            }
        },
        rotateImage() {
            let cindex = this.getActiveIndex();
            for (var i = 0; i < this.teaseropts.length; i++) { this.teaseropts[i].active = false };
            cindex = cindex + 1;
            if(cindex >= 5)
               cindex = 0;
            this.teaseropts[cindex].active = true;
        },
        getActiveIndex() {
           for(var i = 0; i < this.teaseropts.length; i++) {
              if(this.teaseropts[i].active == true){
                 return i;
              }
           }
           return 0;
        },
        autoAnimateData() {
           const self = this;
           window.setInterval(() => {self.rotateImage()}, 7000)
        }
    },
    mounted() {
         this.autoAnimateData();
    }
}
</script>

<style lang='scss'>
$optionDefaultColours: #ED5565,#FC6E51,#FFCE54,#2ECC71,#5D9CEC,#AC92EC;

body {
   transition:.25s;

   .credit {
      position: absolute;
      bottom:20px;
      left:20px;
      
      color:inherit;
   }
   .options {
      display:flex;
      flex-direction:row;
      align-items:stretch;
      overflow:hidden;

      min-width:100%;   
      
      height:480px;
      
      @for $i from 1 through 4 {
         @media screen and (max-width:798px - $i*80) {
            min-width:100% - $i*80;
            .option:nth-child(#{6-$i}) {
               display:none;
            }
         }
      }
      
      .option {
         position: relative;
         overflow:hidden;

         min-width:60px;
         margin:10px;
         //border:0px solid --defaultColor;

         background:var(--optionBackground, var(--defaultBackground, #E6E9ED));
         background-size:auto 100%;
         background-position:center;

         cursor: pointer;

         transition:3s cubic-bezier(0.05, 0.61, 0.41, 0.95);

         @for $i from 1 through length($optionDefaultColours) {
            &:nth-child(#{$i}) {
               --defaultBackground:#{nth($optionDefaultColours, $i)};
            }
         }
         &.active {
            flex-grow:10000;
            transform:scale(1);
            
            margin:0px;
            border-radius:5px;
            
            background-size: 100% cover;
            .shadow {
               box-shadow:inset 0 -120px 120px -120px black, inset 0 -120px 120px -100px black;
            }
            .label {
               bottom:20px;
               left:20px;
               .info >div {
                  left:0px;
                  opacity:1;
               }
            }
            &:active {
               transform:scale(0.9);
            }
         }
         &:not(.active) {
            flex-grow:1;
            transform:scale(1);
            
            border-radius:5px;
            .shadow {
               bottom:-40px;
               box-shadow:inset 0 -120px 0px -120px black, inset 0 -120px 0px -100px black;
            }
            .label {
               bottom:10px;
               left:10px;
               .info >div {
                  left:20px;
                  opacity:0;
               }
            }
         }
         .shadow {
            position: absolute;
            bottom:0px;
            left:0px;
            right:0px;
            
            height:120px;
            
            transition:1s cubic-bezier(0.05, 0.61, 0.41, 0.95);
         }
         .label {
            display:flex;
            position: absolute;
            right:0px;

            height:40px;
            transition:.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
            .icon {
               display:flex;
               flex-direction:row;
               justify-content:center;
               align-items:center;
               
               min-width:40px;
               max-width:40px;
               height:40px;
               border-radius:100%;

               background-color:white;
               color:var(--defaultBackground);
            }
            .info {
               display:flex;
               flex-direction:column;
               justify-content:center;
               
               margin-left:10px;
               
               color:white;
               
               white-space: pre;
               >div {
                  position: relative;
                  
                  transition:.5s cubic-bezier(0.05, 0.61, 0.41, 0.95), opacity .5s ease-out;
               }
               .main {
                  font-weight:bold;
                  font-size:1.2rem;
               }
               .sub {
                  transition-delay:.1s;
               }
            }
         }
      }
   }
}
</style>  