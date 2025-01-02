 var thumbnails = {
            "Korinne Kakes": ["https://i.postimg.cc/VkHr6McH/148296737-860504894532386-4883462802939013370-n.jpg", "https://i.ibb.co/gTZdR80/362917754-2437136949787105-8517033695441901448-n.jpg", "https://i.postimg.cc/zfbLRBzD/271956144-441610257691557-1066055282409757253-n.jpg"],
            "Treatsbyya": ["https://i.postimg.cc/ZnfrP5Qf/424505698-351592494334976-4877668646132694823-n.jpg", "https://i.postimg.cc/wvQ5vVQY/425577674-1555855141897713-6593427975005795155-n.jpg"],
            "Jays Beads": ["https://i.postimg.cc/CMXF6gVX/426581375-435471262138378-3177918143558623714-n.jpg", "https://i.postimg.cc/VLtzxVf6/427378998-883369493527581-384308815621940139-n.jpg"],
            "Temi Customs": ["https://i.postimg.cc/bwCLQ8MV/4-C7-BB2-E8-2735-45-C2-8-D87-D0-D4888472-B3.jpg", "https://i.postimg.cc/W4xnH8sM/IMG-5077-1.jpg", "https://i.postimg.cc/Njfp9LNr/IMG-5237-1.jpg", "https://i.postimg.cc/R0WddyxS/IMG-7350.jpg"],
            "Lashedbykiekie": ["https://i.postimg.cc/J4hztyYg/Screenshot-from-2024-03-29-16-11-13.png", "https://i.postimg.cc/NFsf6LsK/Screenshot-from-2024-03-29-16-11-54.png", "https://i.postimg.cc/FFpK9bp3/Screenshot-from-2024-03-29-16-10-40.png"],
            "Skills That Heal": ["https://i.postimg.cc/6q7KBZYx/Screenshot-from-2024-03-29-16-41-15.png", "https://i.postimg.cc/hvHBvG5z/Screenshot-from-2024-03-29-16-41-56.png", "https://i.postimg.cc/tTvy0kdz/Screenshot-from-2024-03-29-16-42-25.png"]

        }

        var directionIn = "";
        var directionOut = "";
            /*
            <div class="LinkWidget_iconContainer__Tb1PZ LinkWidget_big__r2pfk LinkWidget_circle__8qUZw"><img alt="logo" class="LinkWidget_image__GPYZJ" src="https://content.hipolink.net/image/acf112e0-a23a-4161-8639-616b34879f9d.jpeg" style="left: 0%; top: 0%; width: 100%;">
            */
            // Fills in logos where there aren't any
        function logoPlaceholders() {
            $('.entry .LinkWidget_inner__psVfv a:not(:has(img))').each((i, anchor) => {
                var div = document.createElement('div');
                div.classList.add("LinkWidget_iconContainer__Tb1PZ","LinkWidget_big__r2pfk","LinkWidget_circle__8qUZw");

                var placeholder = document.createElement('img');
                placeholder.src = 'https://i.postimg.cc/7ZyB1Dv6/blackflag.png';

                $(div).append(placeholder);
                $(anchor).prepend(div);
            });
        }

            // Populate .imgs for all businesses 
        function populateImgs() {
            var visible_businesses = document.querySelectorAll('#businesses .section a');

            for (var v = 0; v < visible_businesses.length; v++) {
                business_btn = visible_businesses[v]; 

                    //CCreate imgs div
                var img_div = document.createElement("div");
                img_div.classList.add("imgs");

                    // If this business has a thumbnail in thumbnails 
                if (thumbnails[business_btn.innerText.trim()]) {

                    for (var a = 0; a < thumbnails[business_btn.innerText.trim()].length; a++) {
                        var img = document.createElement("img");
                        img.src = thumbnails[business_btn.innerText.trim()][a];
                        img_div.appendChild(img);
                    }
                        //Inserts div of images after business link and before business description
                    business_btn.parentNode.parentNode.insertBefore(img_div, business_btn.parentNode.nextElementSibling)
                }

            }
            activateClickable();
        }

        function zoomImg(src) {
            document.querySelector('#popup-img').style.display = "flex";
            document.querySelector('#popup-img img').src = src;
        }
        function redirect(src) {
            if (src) {
                window.location.href = src
            }
        }
        function activateClickable() {

            var all_imgs = document.querySelectorAll(".section .imgs img");
            for (var i = 0; i < all_imgs.length; i++) {
                all_imgs[i].addEventListener("click", (e) => {
                    zoomImg(e.target.src)
                });
            }
        }
        function indexOfCategory(category) {
            return $('#carousel-selection button').index($('#carousel-selection button[name="' + category +'"]'));
        }
        function handleDiff(oldCategory, newCategory) {
            if (indexOfCategory(oldCategory) < indexOfCategory(newCategory)) {
                directionIn = "right";
                directionOut = "left"; 
                return  true;
            } else if (indexOfCategory(oldCategory) > indexOfCategory(newCategory)) {
                directionIn = "left";
                directionOut = "right";
                return true; 
            }
            else {
                return false;
            }
        }
        //returns the color for each category 

        /*582FOE

    7F4F24

    936639

    A68A64

    B6AD90

    C2C5AA

    A4AC86

    656D4A

    414833

    333D29*/
        function getColor(category) {
            const category_colors = {
                'hair' : '#7F4F24',
                'beauty' : '#936639',
                'photography' : '#A68A64',
                'health' : '#B6AD90',
                'food' : '#C2C5AA',
                'fashion' : '#A4AC86',
                'music' : '#582FOE',
                'art' : '#656D4A',
                'business' : '#414833',
                'tech' : '#333D29'
            };
                /*The first anchor of every .section has a different color associated with the background */
            return category_colors[category];
        }

        function inactivateBtn(btn) {
            $(btn).removeClass('active');
            $(btn).css({
                    'background-color': '#dddcdc',
                    'font-weight': '100',
                    'color' : '#474747',
                    'opacity' : '0.6'
                });

            $(btn).find('img').css({
                'filter' : 'invert(0)',
                
            }) 
        }
        function activateBtn(btn, bkgColor) {
            $(btn).addClass('active');
            $(btn).css({
                    'background-color': bkgColor,
                    'font-weight': '500',
                    'color' : 'white',
                    'opacity' : '1'
            });
            $('#carousel-selection button.active img').css({
                'filter' : 'invert(1)'
            }) ;

        }
        function setCarouselBtn(category) {
            let selectedBtn = document.querySelector('#carousel-selection button[name="'+ category+ '"]');
            let activeBtn = document.querySelector('#carousel-selection button.active');
            let carouselBtnPos = selectedBtn.offsetLeft;

            // Fade #carousel-selection button.active to grey
            inactivateBtn(activeBtn);
            // Give the clicked button it's original color
            activateBtn(selectedBtn, getColor(category));
            //Moves the x-scroll to the position of the clicked button
            $('#carousel-selection').stop().animate({ scrollLeft:  carouselBtnPos},270, "linear");
        }
        
        function activateCategory(category) {
            if (handleDiff($('.activeCategory').attr('id'), category)) {
                  /*  $('#carousel-selection').animate({
                        scrollLeft:  document.querySelector('#carousel-selection button[name="'+ selection+ '"]').offsetLeft - scrollGap
                    }, 160);*/ 
     
                    //hides all other divs of businesses if not the category of focus
                setCarouselBtn(category);
                $('#businesses .activeCategory').hide('slide', {'direction':directionOut},function (){
                    $('#businesses .section').removeClass('activeCategory');

                            //Move CArousel selection scrollLeft to button
                    

                    $('#businesses .section[id="' + category + '"]').show('slide', {'direction': directionIn}, function() {
                        $('#businesses .section[id="' + category + '"]').addClass('activeCategory');


                        
                    },150);
                },250);            
            }
        }
        function addSocialIcons(){

          $('.entry a').each((x,ele) => {
            if (ele.href.indexOf('instagram') > 0) {
              var insta = document.createElement("i");
              insta.className = "bi bi-instagram";
              ele.append(insta);
          } else {

              var globe = document.createElement("i");
              globe.className = "bi bi-globe";
              ele.append(globe);
          }
      });
      }
      
      function handleMembership(tier) {
        const tiers = {
            'gold' : 'https://buy.stripe.com/5kA7usfkyb1nbpS4gi',
            'bronze' : 'https://buy.stripe.com/aEU6qob4i5H3fG8eUU',
            'silver' : 'https://buy.stripe.com/4gw4igfky6L72TmeUV'
        };
        $(".membership.selected").removeClass("selected");
        $(".membership[name='" + tier + "']").addClass("selected");
        $("a#pay").addClass("enabled");
        $("a#pay").attr("href",tiers[tier]);

      }
      function toggleMemberships(btn) {
        $('button#register').toggleClass("activated");
        $("#memberships").toggle("fade", 300);

        document.getElementsByTagName('body')[0].style.overflow = (btn.id == 'go-back') ? 'auto' : 'hidden';
      }



      $("#carousel-selection").on("scroll", (e)=>{
        var currentXpos = e.currentTarget.scrollLeft;
                //Scrolling will trigger businesses to pop up!!!!
        console.log("Carousel selection's X:" + currentXpos);
    });
      $("#carousel-selection button[name]").on("click" , (f)=>{
        activateCategory(f.currentTarget.name);
    });
         /* $("#carousel-selection button[name]").on("click" , (e)=>{
            activateCategory(e.currentTarget.name);
        });*/


        populateImgs();
      addSocialIcons();
      logoPlaceholders();

      activateBtn($('#carousel-selection button[name="hair"]'),getColor('hair'));

      
function hidePopup(){
  document.querySelector('#popup-img').style.display = "none";
}
function moveTo(){ 


  $('html, body').animate({
    scrollTop: $("#selection").offset().top
  }, 370);

}            
