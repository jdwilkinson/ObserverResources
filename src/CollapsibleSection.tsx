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

    function getHeaderCountString(): JSX.Element {
        if (!props.children) {
            return <></>;
        }
        if (!collapsed) {
            return <></>;
        }
        const count = Array.isArray(props.children) ? props.children.length : '?';
        return <span className="grayscale"> &nbsp; ({count})</span>;
    }

    return (
        <>
            <div className="section-header" onClick={onClick}>
                <span>
                    <span>{props.sectionTitle}</span>
                    {getHeaderCountString()}
                </span>
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