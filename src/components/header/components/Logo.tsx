import React from "react";
import AnimatedLink from "./AnimatedLink";

class Logo extends React.Component{
    render() {
        return <div id={'page-logo'}>
            {/*<span className={'prose text-4xl font-sans'}>GOSSIPAUTHORXPM</span>*/}
            <AnimatedLink address={"/"} nameLink={"RSMC"}/>
        </div>
    }
}export default Logo;