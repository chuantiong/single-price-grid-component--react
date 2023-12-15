import React from "react";

const SignupSection = () => {
    return (
        <section className="signup-section">
            <h2 className="signup-section__title">Monthly Subscription</h2>
            <div className="signup-section_price-wrapper">
                <span className="signup-section__price">$29</span>
                <span className="signup-section__price-month">per month</span>
            </div>
            <p className="signup-section__description">
                Full access for less than $1 a day
            </p>
            <button className="sign-up-btn">Sign Up</button>
        </section>
    );
};

export default SignupSection;