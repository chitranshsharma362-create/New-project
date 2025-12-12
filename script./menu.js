 fetch("header.html")
        .then(response => response.text())
        .then(data => {
          document.getElementById("header").innerHTML = data;

      let currentPage =  window.location.pathname.split("/").pop();
      // menu me anchor tkk pauchne ka tarika
      let links = document.querySelectorAll(".menu .menubar ul li a");
        if(!currentPage || currentPage == "#"){
          currentPage = "index.html"
        }
      // hrr anchor ko process kia 
      links.forEach(link => {
        console.log("Current Page: " , currentPage);
        //phle href ki value save krenge 
        let linkPage = link.getAttribute("href");
        // if(!linkPage) return;
        // let li = link.getClosest("li");
        if (linkPage == currentPage){
          link.closest("li").classList.add("underline_current");
        }
      });
   });
