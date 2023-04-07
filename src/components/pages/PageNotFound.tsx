import React from "react";
import AnimatedPageLink from "./components/AnimatedPageLink";

class PageNotFound extends React.Component<any, any> {
    render(): JSX.Element {
        return <div id={'page-not-found'}>
            <span>Страница не найдена - ERROR 404</span>
            <AnimatedPageLink className={"page-not-found-link"}
                      textLink={"Перейти на главную страницу"}
                      link={"/"}/>
        </div>
    }
}

export default PageNotFound;