import { useState } from "react";

const CollapsibleSection = (props: { sectionTitle: string; children: React.ReactNode }) => {
    const [collapsed, setCollapsed] = useState(true);

    function onClick() {
        setCollapsed(!collapsed);
    }

    return (
        <>
            <div className="section-header" onClick={onClick}>
                {props.sectionTitle}
                &nbsp;
                <span className="grayscale">(click to {collapsed ? "expand" : "collapse"})</span>
            </div>
            {collapsed ?
                <></> :
                <div className="section-content">
                    {props.children}
                </div>
            }
        </>
    );
};

export default CollapsibleSection;