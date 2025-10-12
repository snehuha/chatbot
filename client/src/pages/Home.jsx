import { useNavigate } from 'react-router-dom';
import React from "react";
import Header from "../components/common/Header";
import Button from "../components/common/Button";
import Layout from "../components/common/Layout";


const Home = () =>{
    const navigate = useNavigate();
    const handleClick = (buttonName) => {
    const routes={
        Pause: "/pause",
        Talk: "/talk",  
        Journal: "/journal",
    };
    if (routes[buttonName]) {
        navigate(routes[buttonName]);
      } else {
        alert(`${buttonName} button clicked`);
      }
    };
    
    return (
        <Layout>
            <div className="greeting-card">
                Hi, I'm Luna, and this is your safe space
            </div>
            <div className="button-group">
                <div className="button-col">
                    <Button className="custom-btn" size="large" variant="primary" onClick={()=>handleClick("Pause")}>Pause</Button>
                    <div className="button-desc">Breathe with me</div>
                </div>
                <div className="button-col">
                    <Button className="custom-btn" size="large" variant="primary" onClick={()=>handleClick("Talk")}>Talk</Button>
                    <div className="button-desc">Something in your mind?</div>
                </div>
                <div className="button-col">
                    <Button className="custom-btn" size="large" variant="primary" onClick={()=>handleClick("Journal")}>Journal</Button>
                    <div className="button-desc">Write whatever. No judgements</div>
                </div>
            </div>
        </Layout>        
    )
}

export default Home;

