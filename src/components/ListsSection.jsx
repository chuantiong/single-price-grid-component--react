import React from "react";
import List from "./List";
import listsData from "../listsData";

const ListsSection = () => {

    const listEl = listsData.map(list => {
        return <List 
            text={list}
        />
    });

    return (
        <section className="lists-section">
            <span className="lists-section__title">Why Us</span>
            <ul className="lists-section__texts">
                {listEl}
            </ul>
        </section>
    );
};

export default ListsSection;