    const nav = document.querySelector('#main');
    let topOfNav = nav.offsetTop;
    navItems = document.querySelectorAll('nav a');
    // console.log(navItems)
    const blocks = document.querySelectorAll('.block-title')
    var new_list = [];
    var blocks_list = Array.from(blocks)
    blocks_list.forEach(block => {
    	new_list.push(block.offsetTop);
    });


    // console.log(blocks);
    function fixNav() {
    let currentSection;
    // console.log(window.scrollY,new_list);
    for(i=1;i <= new_list.length;i++){
    	if(window.scrollY < new_list[i]){
    		currentSection = blocks_list[i-1].innerHTML;
    		// console.log(currentSection)
    		break;
    	}
    }
    var navItem = document.querySelector(`nav a[data-key=${currentSection}`);
    navItems.forEach(item => item.classList.remove('active-navelem'));
    navItem.classList.add('active-navelem');
    // navItem.classList
    // console.log(navItem);
    	// console.log(window.scrollY);
      if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
      } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
      }
    }

    window.addEventListener('scroll', fixNav);
