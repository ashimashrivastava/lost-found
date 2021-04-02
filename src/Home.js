import React from 'react';

function Home() {
  return (
    <div>
        <div class="header">Lost & Found</div>
        <div> image placeholder </div>
        <div class="description">The Viking Union Lost and Found exists to help people reunite with their lost items. 
It is located at the Info Desk in the VU 6th Floor Lobby.</div>
        <div class="instructions"><div class="bold">Found something?</div>Bring it to the Info Desk in the VU 6th Floor Lobby, and we will try to return it to its rightful owner. All found items submitted to the Lost and Found are logged and stored securely.</div>
        <div class="instructions"><div class="bold">Lost something?</div>Visit the Lost and Found at the Info Desk in the VU 6th Floor Lobby to claim your item. You can also submit a Lost Item Report.</div>
        <div class="instructions"><div class="bold">Want to update your report?</div>If you recall more details about your lost item, you can Log In with your email and Lost Item Ticket Number to let us know.</div>
        <div class="hours">
            <div class="hours-label">Hours</div>
            <div class="hours-times">Mon-Sat 9:00am-9:00pm</div>
            <div class="hours-times">Sun 10:00am-9:00pm</div>
            <div class="hours-addendum">Closed during intersession breaks and holidays</div>
        </div>
        <div class="contact">
            <div class="contact-label">Contact</div>
            <div class="contact-info">p | 360.650.3120</div>
            <div class="contact-info">e | <a href="mailto:vu.lostfound@wwu.edu">vu.lostfound@wwu.edu</a></div>
        </div>
    </div>
  );
}

export default Home;
