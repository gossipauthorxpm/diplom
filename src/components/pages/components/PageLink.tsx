import React from "react";
import {Link} from "react-router-dom";

type PageLinkProps = {
    textLink: string,
    link: string,
    className: string
}

class PageLink extends React.Component<PageLinkProps> {
    render() {
        return <Link className={this.props.className} to={this.props.link}>
            {this.props.textLink}
        </Link>
    }
}

export default PageLink;