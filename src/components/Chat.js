import React, { Component } from "react";
import "./chat.css";

export class Chat extends Component{

        componentDidMount() {
            
            
            
            (function(d, m){
                var kommunicateSettings = 
                    {"appId":"2988dad489eb19d7eae62f974baa0c19d","popupWidget":true,"automaticChatOpenOnNavigation":true};
                var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
                s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
                var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
                window.kommunicate = m; m._globals = kommunicateSettings;
            })(document, window.kommunicate || {});
        /* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
        


        }

    render(){
        return(
            <div className="heading">
                <div className="heading2">
                <h1>ChatBot -- App</h1>
                </div>
            </div>
        )
    }
}



export default Chat;