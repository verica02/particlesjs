document.querySelector('.envelope').addEventListener('click', function(){
	if (document.querySelector('.letter').classList.contains('letter--open')){
	  document.querySelector('.letter').classList.remove('letter--open');
	  document.querySelector('.letter').classList.add('letter--close');
	  setTimeout(function(){
	    document.querySelector('.letter').classList.remove('letter--close');
	  }, 600);    
	} else {
	  document.querySelector('.letter').classList.remove('letter--close');
	  document.querySelector('.letter').classList.add('letter--open');
	}
      });
      
 document.querySelector('.paper-close').addEventListener('click', function(){   
	document.querySelector('.letter').classList.remove('letter--open');
	document.querySelector('.letter').classList.add('letter--close');
	setTimeout(function(){
	  document.querySelector('.letter').classList.remove('letter--close');
	}, 600);
      });

      particlesJS("particles-js", {"particles":{"number":{"value":38,"density":{"enable":true,"value_area":480.72300740313466}},"color":{"value":"#1b1e34"},"shape":{"type":"image","stroke":{"width":0,"color":"#000"},"polygon":{"nb_sides":6},"image":{"src":"https://www.seekpng.com/png/full/15-156762_28-collection-of-pink-flowers-clipart-png-flower.png","width":100,"height":100}},"opacity":{"value":0.25638560394833854,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":20.030125308463944,"random":true,"anim":{"enable":true,"speed":2.4345709068776644,"size_min":20.288090890647208,"sync":true}},"line_linked":{"enable":true,"distance":176.26510271448274,"color":"#ffffff","opacity":1,"width":2},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"bubble"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

