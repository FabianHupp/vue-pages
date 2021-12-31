<template>
   <div id="stripes">
   	<span></span>
   	<span></span>
   	<span></span>
   	<span></span>
   	<span></span>
   </div>
</template>

<style>
   #stripes {
   	height: 100vh;
   	background: 
	      linear-gradient(
	      	white,
	      	transparent
	      ),
	      linear-gradient(
	      	90deg,
	      	var(--primaryColor),
	      	transparent
	      ),
	      linear-gradient(
	      	-90deg,
	      	white,
	      	transparent
	      );
	
      background-blend-mode: screen;
   }
</style>