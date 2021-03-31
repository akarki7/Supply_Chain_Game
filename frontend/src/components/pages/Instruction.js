import React from 'react';
// import'../../App.css';
import'./Instruction.css';

export default function Instruction() {
    return (
        <div className='ins-container'>
            <h1>INSTRUCTION</h1>
            <p>The beer game is based on supply chain and involves 4 players where each player represents one of the four stages in the chain i.e the retailer, the manufacturer, the wholesaler, the consumer.</p>
            <p>Every week the retailer receives orders from the consumer without any time delay. The retailer fulfills as many units of beer order as it can and then calculates the number of units that are required based on the total number of stocks left in the inventory, the cost of each beer, and the backlog.</p>
            <p>After some time delay, the retailer places an order to the wholesaler. The wholesaler tries to fulfill the demand of the retailer and estimates how much beer is needed. The wholesaler places an order to the distributor if he senses he is in need of more stocks. This process is repeated with the manufacturer as well.</p>
            <p>Lastly, the manufacturer begins production according to the order demand. When the production is over, the beer is send backwards to the distributor, then from the distributor to the wholesaler, retailer, and finally to the con- sumer. There are time delays in each step during the downstream process, except between the retailer and consumer.</p>
            <p>GOAL AND OBJECTIVES</p>
            <p>The objective of the game is to receive orders and deliver the items back to the consumer, in a way the maximizes profits and minimizes the total cumulative cost of all stages based the given information. Cost can be arisen from numerous places. There is a cost for holding the inventory, a cost for not satisfying demand so called a ”back order” which is basically a cost that is incurred until the demand for the product is satisfied.</p>
            <video src="/videos/video-1.mp4" autoPlay loop muted/>
        </div>
                
    );
}
