type ResourceFormat = 'YouTube' | 'GoogleDoc' | 'GoogleForm' | 'GoogleSlides' | 'WebLink' | 'Amazon' | 'PDF';

const formatToClassNameMap: Record<ResourceFormat, string> = {
    'YouTube': 'footer-chip-red',
    'GoogleDoc': 'footer-chip-green',
    'GoogleForm': 'footer-chip-purple',
    'GoogleSlides': 'footer-chip-yellow',
    'WebLink': 'footer-chip-blue',
    'Amazon': 'footer-chip-orange',
    'PDF': 'footer-chip-darkred',
}
const formatToTextMap: Record<ResourceFormat, string> = {
    'YouTube': 'YouTube video',
    'GoogleDoc': 'Google Doc',
    'GoogleForm': 'Google Form',
    'GoogleSlides': 'Google Slides',
    'WebLink': 'Web link',
    'Amazon': 'Amazon product',
    'PDF': 'PDF',
}

export interface AlternateVersion {
    title: string;
    link: string;
}

export interface ResourceProperties {
    id: string;
    imageSourceUrl: string;
    title: string;
    description?: string;
    link: string;
    isOfficialUsauResource?: boolean;
    isOfficialWulResource?: boolean;
    isOfficialPulResource?: boolean;
    isOfficialUfaResource?: boolean;
    courtesyOf?: string;
    resourceFormat: string;
    alternateVersions?: AlternateVersion[];
    rulesets: string[];
}

abstract class Resource {
    protected resourceType: string;
    protected id: string;
    protected imageSourceUrl: string;
    protected title: string;
    protected description: string;
    protected link: string;
    protected isOfficialUsauResource: boolean;
    protected isOfficialWulResource: boolean;
    protected isOfficialPulResource: boolean;
    protected isOfficialUfaResource: boolean;
    protected courtesyOf: string;
    protected resourceFormat?: ResourceFormat;
    protected alternateVersions: AlternateVersion[];
    protected rulesets: string[];

    private footerChips: JSX.Element[] = [];

    constructor(
        resourceType: string,
        {
            id,
            imageSourceUrl,
            title,
            description = '',
            link,
            isOfficialUsauResource = false,
            isOfficialWulResource = false,
            isOfficialPulResource = false,
            isOfficialUfaResource = false,
            courtesyOf = '',
            resourceFormat,
            alternateVersions = [],
            rulesets = [],
        }: ResourceProperties) {
        this.resourceType = resourceType;
        this.id = id;
        this.imageSourceUrl = imageSourceUrl;
        this.title = title;
        this.description = description;
        this.link = link;
        this.isOfficialUsauResource = isOfficialUsauResource;
        this.isOfficialWulResource = isOfficialWulResource;
        this.isOfficialPulResource = isOfficialPulResource;
        this.isOfficialUfaResource = isOfficialUfaResource;
        this.courtesyOf = courtesyOf;
        this.resourceFormat = resourceFormat as ResourceFormat;
        this.alternateVersions = alternateVersions;
        this.rulesets = rulesets;

        this.populateFooterChips();
    }

    public includeInRuleset(ruleset: string): boolean {
        return this.rulesets.includes(ruleset);
    }

    public render(): JSX.Element {
        return (
            <div className="resource-card" key={this.id}>
                {/* Image */}
                <div className="resource-card-image-container">
                    <a href={this.link} target="_blank">
                        <img
                            src={this.imageSourceUrl}
                            alt={this.getImageAltText()}
                            title={this.getImageAltText()}
                            className="resource-card-image"
                        />
                    </a>
                </div>

                {/* Vertical line */}
                <div className="resource-card-vertical-separator" />

                {/* Description area */}
                <div className="resource-card-description-container">
                    <div className="resource-card-description-title">
                        <a href={this.link} target="_blank" className="resource-link">
                            {this.title}
                        </a>
                    </div>
                    <hr className="resource-card-horizontal-separator" />
                    <div className="resource-card-long-description">
                        <a href={this.link} target="_blank" className="resource-link">
                            {this.description}
                        </a>
                        {this.alternateVersions.length > 0 ?
                            <>
                                <br />
                                <b>Other formats:</b>
                                &nbsp;
                                {this.alternateVersions.map((version, index) => (
                                    <span key={`alternate-version-${version.title}-${version.link}`}>
                                        {index > 0 && ', '}
                                        <a href={version.link} target="_blank">
                                            {version.title}
                                        </a>
                                    </span>
                                ))}
                            </>
                            :
                            <></>}
                    </div>
                    {this.footerChips.length > 0 ?
                        <>
                            <hr className="resource-card-horizontal-separator" />
                            <div className="resource-card-footer">
                                {this.footerChips}
                            </div>
                        </>
                        :
                        <></>
                    }
                </div>
            </div>
        );
    }

    private getImageAltText(): string {
        if (this.isOfficialUsauResource) {
            return `Official USAU ${this.resourceType.toLowerCase()}`;
        }
        if (this.courtesyOf.trim() !== '') {
            return `${this.resourceType} courtesy of ${this.courtesyOf}`;
        }
        return this.title;
    }

    private populateFooterChips() {
        // Note that order matters for these!
        let tempChips: JSX.Element[] = [];

        if (this.isOfficialUsauResource) {
            tempChips.push(
                <div className="description-footer-chip footer-chip-official-resource" key={this.id + '-official-usau'}>
                    <img
                        src='/img/usau-logo.svg'
                        width='30'
                        alt='Official USAU resource'
                        title='Official USAU resource'
                    />
                    &nbsp;
                    Official resource
                </div>
            );
        }

        if (this.isOfficialWulResource) {
            tempChips.push(
                <div className="description-footer-chip footer-chip-official-resource" key={this.id + '-official-wul'}>
                    <img
                        src='/img/wul-logo.png'
                        width='30'
                        alt='Official WUL resource'
                        title='Official WUL resource'
                    />
                    &nbsp;
                    Official resource
                </div>
            );
        }

        if (this.isOfficialPulResource) {
            tempChips.push(
                <div className="description-footer-chip footer-chip-official-resource" key={this.id + '-official-pul'}>
                    <img
                        src='/img/pul-logo.png'
                        width='30'
                        alt='Official PUL resource'
                        title='Official PUL resource'
                    />
                    &nbsp;
                    Official resource
                </div>
            );
        }

        if (this.isOfficialUfaResource) {
            tempChips.push(
                <div className="description-footer-chip footer-chip-official-resource" key={this.id + '-official-ufa'}>
                    <img
                        src='/img/ufa-logo.png'
                        width='30'
                        alt='Official UFA resource'
                        title='Official UFA resource'
                    />
                    &nbsp;
                    Official resource
                </div>
            );
        }

        if (this.resourceFormat) {
            tempChips.push(
                <div className={`description-footer-chip ${formatToClassNameMap[this.resourceFormat]}`} key={this.id + '-format'}>
                    {formatToTextMap[this.resourceFormat]}
                </div>
            );
        }

        if (this.courtesyOf && this.courtesyOf.trim() !== '') {
            tempChips.push(
                <div className="description-footer-chip footer-chip-white" key={this.id + '-courtesy'}>
                    <em>Courtesy of&nbsp;<b>{this.courtesyOf}</b></em>
                </div>
            );
        }

        // Space them out
        for (let i = 0; i < tempChips.length; i++) {
            if (i > 0) this.footerChips.push(<span key={this.id + '-space-' + i}>&nbsp;</span>);
            this.footerChips.push(tempChips[i]);
        }
    }
}

export default Resource;