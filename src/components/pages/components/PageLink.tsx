import React from "react";
import {Link} from "react-router-dom";

type Props = {
    textLink: string,
    link: string,
    className: string
}

class PageLink extends React.Component<Props> {
    render() {
        return <Link className={this.props.className} to={this.props.link}>
            {this.props.textLink}
        </Link>
    }
}

export default PageLink;