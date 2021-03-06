import React from "react";
import {useRouteMatch} from "react-router";

const generatePage = (page: string) => {
    const component = () => require(`./pages/${page}/${page}.tsx`).default;

    try {
        return React.createElement(component())
    } catch (err) {
        console.warn(err);
        page = '404';
        return React.createElement(component())
    }
}

export const PageRenderer = () => {
    // @ts-ignore
    const { params: {page} } = useRouteMatch();

    return (
        generatePage(page)
    )
}