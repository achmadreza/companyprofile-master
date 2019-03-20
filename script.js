
      const sideNav = document.querySelectorAll('.sidenav');
            M.Sidenav.init(sideNav);
            
      const slider = document.querySelectorAll('.slider');
            M.Slider.init(slider, {
            indicators: true,
            height: 500,
            transition: 300,
            interval: 3000
            });
            
      const parallax = document.querySelectorAll('.parallax');
            M.Parallax.init(parallax);
            
      const materialBox = document.querySelectorAll('.materialboxed');
            M.Materialbox.init(materialBox);
            
      const scroll = document.querySelectorAll('.scrollspy');
            M.ScrollSpy.init(scroll);

    