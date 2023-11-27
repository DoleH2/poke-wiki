import { useEffect, useRef } from "react";

/*
If use Plugin all page
should add script to index.html
change ID_FB to your ID
  <div id="fb-customer-chat" class="fb-customerchat">
  </div>

  <script>
    var chatbox = document.getElementById('fb-customer-chat');
    chatbox.setAttribute("page_id", "ID_FB");
    chatbox.setAttribute("attribution", "biz_inbox");
  </script>

  <script>
    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: 'v18.0'
      });
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  </script>
*/
const SendMessage = ({ idFB }) => {
    const MessengerRef = useRef();
    useEffect(() => {

        MessengerRef.current.setAttribute("page_id", idFB);
        MessengerRef.current.setAttribute("attribution", "biz_inbox");

        window.fbAsyncInit = function () {
            window.FB.init({
                xfbml: true,
                version: 'v15.0'
            });
        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

    }, [])
    return (
        <>
            <div id="fb-root"></div>
            <div ref={MessengerRef} id="fb-customer-chat" className="fb-customerchat bg-white">
            </div>
        </>
    )
}

export default SendMessage;