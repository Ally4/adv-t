exports.signupEmail = (Email, rawPassword) => `
        <div style="font-size:15px;box-shadow:4px 4px 2px;padding:10px;color:#000">
          <h1 style="font-size:25px;color:#374151;border-bottom: 4px solid #374151;text-align:center ">the Advertise App</h1>
          <p style="color:#000;font-size:17px">Thank you for registering on the Advertise app.
          You are now able to login using the following credentials:<p>
          Email: <b style="color:#374151">${Email}</b><br>
          Password: <b style="background-color:#374151;color:#fff">${rawPassword}</b>
        </div>
    `;

exports.resetLink = (url) => `
            <div style="font-size:15px;box-shadow:4px 4px 2px;padding:10px;color:#000">
            <h1 style="font-size:25px;color:#374151;border-bottom: 4px solid #374151;text-align:center ">the Advertise App</h1>
            <p style="color:#000;font-size:17px">Welcome Again To the Advertise app. You May use the this Link provided To Reset your Password:<p>
            Reset Link: <b style="color:#374151">${url}</b><br>
            <strong>NB:</strong><span style="color:OrangeRed">  remember that this link will be expires in 10 minutes </span>
            `;
