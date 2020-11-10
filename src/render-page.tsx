import React from "react";
import {useRouteMatch} from "react-router";

const generatePage = (page: string) => {
    const component = () => require(`./pages/${page}.tsx`).default;

    try {
        return React.createElement(component())
    } catch (err) {
        console.warn(err);
        // @ts-ignore
        return React.createElement(() => 404)
    }
}

export const PageRenderer = () => {
    // @ts-ignore
    const { params: {page} } = useRouteMatch();

    return (
        generatePage(page)
    )
}