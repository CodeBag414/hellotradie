import React from 'react';
import logo from '../../assets/hello-tradie.png';
const WhatDoIGet = () => (
  <div className="pan">    
    <h6>What do I get?</h6>
    <ul>
      <li>
        <h6>Vehicle stickers</h6>
        <p>Once you have been a member for 12 months and you have maintained or grown your rating, you will receive commercial vehicle stickers to show that you are one of Perth’s best tradies wherever you go. Transfers are transparent and come in two sizes so they will go with whichever colour, make and model your vehicle</p>
        <div style={{ 'margin': 'auto', 'textAlign': 'center' }}><img src={logo} /></div>
      </li>
      <li>
        <h6>Printed feedback cards</h6>
        <p>The more good feedback you get, the better your rating. Hand these to your customers at the start of each job. Each card is pre-paid, addressed and ready to be returned</p>
      </li>
      <li>
        <h6>New feedback notifications</h6>
        <p>Receive automated notifications via text or email every time a customer submits a review about your work</p>
      </li>
      <li>
        <h6>Professional reports</h6>
        <p>Who are you? What do you do? What do other customers think of you? Print off our schmick looking report which details this information and more and hand these to your potential customers</p>
      </li>
      <li>
        <h6>Opportunity to feature as a guest blogger</h6>
        <p>Do you know a thing or two about what you do? Why not share some of your tips via our monthly blog? You don’t need to be amazing at using computers, you can simply shoot us an email or we can do it for you over the phone. Being featured is a great way to raise your profile. Customers love to feel they are dealing with ‘the’ expert in the field</p>
      </li>
      <li>
        <h6>Printed advertising</h6>
        <p>In addition to increasing your presence on the web, HelloTradie advertises in a variety of printed publications too (eg Little Aussie Directory, The West Australian, The Voice etc). Contact us if you are interested in upgrading your membership to co-feature in one of our printed advertisements</p>
      </li>
      <li>
        <h6>Support charity</h6>
        <p>For every review submitted by our valued customers, HelloTradie will donate $1 to a local charity of choice. So by supporting us, you will be helping the important work these guys do to help make WA an even better place to live</p>
      </li>
      <li>
        <h6>Cancel at any time</h6>
        <p>Option for no lock-in contract with freedom to cancel at any time without charge. Nothing to lose. Everything to gain. It’s a no-brainer!</p>
      </li>
    </ul>
  </div>
)

export default WhatDoIGet;