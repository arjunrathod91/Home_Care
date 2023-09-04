import React from 'react'
import symimg from '../Components/Assets/health-check.png'

function Symptoms() {
    const fakeData = {
        problems:"Common Cold",
        symptoms:"Runny or stuffy nose,Sneezing,Coughing,Sore throat,Mild headache,Fatigue,Low-grade fever (in some cases)",
        solution:"1.Rest: Get plenty of rest to help your body recover. /n 2.Stay Hydrated: Drink fluids like water, herbal tea, and clear broths to stay hydrated and loosen mucus.3.Over-the-Counter (OTC) Medications: Consider OTC cold medications such as decongestants or pain relievers to alleviate symptoms (follow package instructions).4.Humidifier: Use a humidifier to add moisture to the air, which can help relieve congestion and soothe a sore throat.5.Gargle with Salt Water: Gargling with warm salt water can ease a sore throat.6.Steam Inhalation: Inhaling steam from a bowl of hot water can help clear nasal passages.",
        remody:"Mix 1-2 tablespoons of honey with the juice of half a lemon in a cup of hot water.Sip the tea slowly to soothe a sore throat and provide relief from coughing.The honey can help suppress coughing, and the lemon provides vitamin C to support your immune system."
    }



    return (
        <div>
            <div className="symptomspage">
                <div className="detailbox">
                    <div className="symimg">
                        <img src={symimg} alt="symptomimg" />

                    </div>
                    <div className="problem">
                        <h4>Problems</h4>
                        <p>{fakeData.problems}</p>
                    </div>
                    <div className="allsymptoms">
                        <h4>Symptoms</h4>
                        <p>{fakeData.symptoms}</p>
                    </div>
                    <div className="solution">
                        <h4>Solution</h4>
                            <p>1.Rest: Get plenty of rest to help your body recover.</p>
                            <p>2.Stay Hydrated: Drink fluids like water, herbal tea, and clear broths to stay hydrated and loosen mucus.</p>
                            <p>3.Over-the-Counter (OTC) Medications: Consider OTC cold medications such as decongestants or pain relievers to alleviate symptoms (follow package instructions).</p>
                            <p>4.Humidifier: Use a humidifier to add moisture to the air, which can help relieve congestion and soothe a sore throat.</p>
                            <p>5.Gargle with Salt Water: Gargling with warm salt water can ease a sore throat.</p>
                            <p>6.Steam Inhalation: Inhaling steam from a bowl of hot water can help clear nasal passages.</p>
                </div>
                    <div className="remodies">
                        <h4>Homemade Remodies</h4>                        {/* <ul>
                            <li></li>
                        </ul> */}
                        <p>Mix 1-2 tablespoons of honey with the juice of half a lemon in a cup of hot water.</p>
                        <p>Sip the tea slowly to soothe a sore throat and provide relief from coughing.</p>
                        <p>The honey can help suppress coughing, and the lemon provides vitamin C to support your immune system.</p>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default Symptoms
