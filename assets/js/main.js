

    var tabLinks = document.getElementsByClassName("tab-links");
    var tabContents = document.getElementsByClassName("tab-contents");
    
    function openTab(tabName){
        for (var i = 0; i < tabLinks.length; i++) {
            tabLinks[i].classList.remove("active-link");
        }
    
        for (var i = 0; i < tabContents.length; i++) {
            tabContents[i].classList.remove("active-tab");
        }
    
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabName).classList.add("active-tab");
    }




    // <div id="contacts">
    //   <div class="container">
    //     <div class="row">
    //         <div class="contact-left">
    //             <h1 class="sub-title">Contact Me</h1>
    //             <p><i class="uil uil-message"></i>contact@example.com</p>
    //             <p><i class="uil uil-calling"></i>0905-382-1103</p>
    //         </div>
    //         <div class="social-icons">
    //             <a href="https://www.facebook.com"><i class="uil uil-facebook-f"></i></a>
    //             <a href=""><i class="uil uil-linkedin"></i></a>
    //             <a href=""><i class="uil uil-twitter-alt"></i></a>
    //             <a href=""><i class="uil uil-twitter-alt"></i></a>
    //         </div>
    //         <a href="" class="btn  btn2">Download CV</a>
    //       </div>
    //       <div class="contact-right">
    //         <form>
    //           <input type="text" name="Name" placeholder="Your name" required />
    //           <input type="text" name="Email" placeholder="Your email" required />
    //           <textarea
    //             name="Message"
    //             rows="6"
    //             placeholder="Your message"
    //           ></textarea>
    //           <button type="submit" name="submit">Submit</button>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
