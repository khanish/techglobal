import React from 'react';
import SidebarCard from 'components/SidebarCard/Loadable'
import './style.scss'
import { Button } from '@material-ui/core'
const flows = ['facebook', 'twitter', 'google-plus', 'linkedin', 'youtube']

const FlowUs = () => {
    return (
        <SidebarCard
            title="Follow Us"
        >
            <ul className="flowusItem">
                {flows.map((item, i) => (
                    <li key={i}>
                        <Button
                            className={item}
                            component="a"
                            href="Javascript:void(0);">
                            <i className={`fa fa-${item}`}></i>
                        </Button>
                    </li>
                ))}
            </ul>
        </SidebarCard>
    );
}

export default FlowUs;
