import { useState } from "react";

const CollapsibleSection = (props: { sectionTitle: string; children: React.ReactNode }) => {
    const [collapsed, setCollapsed] = useState(true);

    function onClick() {
        setCollapsed(!collapsed);
    }

    function getToggleVerb(): string {
        // Derived from https://stackoverflow.com/a/77654885
        const userAgent = navigator?.userAgent?.toLowerCase();
        if (userAgent) {
            const isMobile = /iphone|ipad|ipod|android|windows phone/g.test(userAgent);
            const isTablet = /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/g.test(userAgent);
            return isMobile || isTablet ? "tap" : "click";
        }
        return "click";
    }

    return (
        <>
            <div className="section-header" onClick={onClick}>
                <span>{props.sectionTitle}</span>
                <span className="click-to-collapse">({getToggleVerb()} to {collapsed ? "expand" : "collapse"})</span>
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