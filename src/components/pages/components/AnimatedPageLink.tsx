import PageLink from "./PageLink";
import {Link} from "react-router-dom";
import React from "react";
import {motion} from "framer-motion";

class AnimatedPageLink extends PageLink {
    render(): JSX.Element {
        return <motion.div
            initial={{textDecoration: "underline"}}
            whileHover={{scale: 1.1,
            textShadow: "1px 1px 25px red"}}
            transition={{duration: 0.6}}
        >
            <Link className={this.props.className}
                  to={this.props.link}>
                {this.props.textLink}
            </Link>
        </motion.div>
    }
}

export default AnimatedPageLink;