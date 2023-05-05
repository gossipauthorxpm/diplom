import React from "react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

type Props = {
    address: string
    nameLink: string
    callback?: any
}

class AnimatedLink extends React.Component<Props> {

    render() {
        return <motion.div
            whileHover={{scale: 1.25, textShadow: "1px 1px 10px blue"}}
            transition={{duration: 0.75, type: "spring"}}
        >
            <Link className={'prose text-xl font-sans'} onClick={this.props.callback} to={this.props.address}>
                {this.props.nameLink}
            </Link>
        </motion.div>
    }
}

export default AnimatedLink;