/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react";

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="https://www.gstatic.com/firebasejs/7.14.0/firebase-app.js"
      src="https://www.gstatic.com/firebasejs/7.14.0/firebase-app.js"
    ></script>,
    <script
      key="https://www.gstatic.com/firebasejs/7.14.0/firebase-analytics.js"
      src="https://www.gstatic.com/firebasejs/7.14.0/firebase-analytics.js"
    ></script>,
    <script
      key="firebase.initializeApp"
      dangerouslySetInnerHTML={{
        __html: `
            var firebaseConfig = {
            apiKey: "AIzaSyCUjFqhLB1Fcvf8S_LLfMU2VwDihbkAHC4",
            authDomain: "circuit-breaker-countdown.firebaseapp.com",
            databaseURL: "https://circuit-breaker-countdown.firebaseio.com",
            projectId: "circuit-breaker-countdown",
            storageBucket: "circuit-breaker-countdown.appspot.com",
            messagingSenderId: "811257440559",
            appId: "1:811257440559:web:dc30de228ecc0fb01b59da",
            measurementId: "G-VQ33FS195E"
            };
            firebase.initializeApp(firebaseConfig);
            firebase.analytics();
        `
      }}
    />
  ]);
};
