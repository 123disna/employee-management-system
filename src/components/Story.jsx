import React from "react";
import owner1 from '../Assets/owner1.jpg'
import owner2 from '../Assets/owner2.jpg'
import owner3 from '../Assets/owner3.jpg'

const Story = () => {
  return (
    <div  id="story" className="container" style={{marginTop:'100px', marginBottom:'150px', fontFamily:'Times New Roman, Times, serif'}}>
      <h2 className="text-center" style={{fontWeight:'bold'}}>Company Owners</h2>
      <div class="card-deck">
        <div class="card">
          <img class="card-img-top" src={owner1} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title" style={{fontWeight:'bold'}}>Sophia</h5>
            <p class="card-text">
              CEO & Founder
            </p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src={owner2} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title" style={{fontWeight:'bold'}}>Benjamin W</h5>
            <p class="card-text">
              Manager
            </p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src={owner3} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title" style={{fontWeight:'bold'}}>Muchen Jack</h5>
            <p class="card-text">
              Human Resources Manager
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;


