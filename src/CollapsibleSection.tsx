import { useState } from "react";

const CollapsibleSection = (props: { sectionTitle: string; containedItems: JSX.Element[] }) => {
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
        if (!collapsed) {
            return <></>;
        }
        const count = props.containedItems.length;
        return <span className="grayscale"> &nbsp; ({count})</span>;
    }

    return (
        props.containedItems.length > 0 ?
            (
                <div className="collapsiblesection-container" key={`collapsiblesection-container-${props.sectionTitle}`}> {/* Outer wrapper */}
                    <div className={`collapsiblesection-always-visible-header ${!collapsed ? 'is-open' : ''}`} onClick={onClick}> {/* Section header, always visible */}
                        <span>
                            <span>{props.sectionTitle}</span>
                            {getHeaderCountString()}
                        </span>
                        <span className="click-to-collapse">({getToggleVerb()} to {collapsed ? "expand" : "collapse"})</span>
                    </div>
                    <div className={`collapsiblesection-contents-outer-wrapper ${!collapsed ? 'is-open' : ''}`}> {/* Inner wrapper, can disappear */}
                        <div className="collapsiblesection-contents-inner-wrapper"> {/* Another inner wrapper, can also disappear */}
                            <div className={`collapsiblesection-content ${!collapsed ? 'is-open' : ''}`}> {/* Actual inner content */}
                                {props.containedItems}
                            </div>
                        </div>
                    </div>
                </div>
            )
            :
            (<></>)
    );
};

export default CollapsibleSection;