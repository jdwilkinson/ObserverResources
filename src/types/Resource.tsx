type ResourceFormat = 'YouTube' | 'GoogleDoc' | 'GoogleForm' | 'WebLink' | 'Amazon' | 'PDF';

const formatToClassNameMap: Record<ResourceFormat, string> = {
    'YouTube': 'footer-chip-red',
    'GoogleDoc': 'footer-chip-green',
    'GoogleForm': 'footer-chip-purple',
    'WebLink': 'footer-chip-blue',
    'Amazon': 'footer-chip-orange',
    'PDF': 'footer-chip-darkred',
}
const formatToTextMap: Record<ResourceFormat, string> = {
    'YouTube': 'YouTube video',
    'GoogleDoc': 'Google Doc',
    'GoogleForm': 'Google Form',
    'WebLink': 'Web link',
    'Amazon': 'Amazon product',
    'PDF': 'PDF',
}

export interface ResourceProperties {
    id: string;
    imageSourceUrl: string;
    title: string;
    description?: string;
    link: string;
    isOfficialUsauResource?: boolean;
    courtesyOf?: string;
    resourceFormat: string;
}

abstract class Resource {
    protected resourceType: string;
    protected id: string;
    protected imageSourceUrl: string;
    protected title: string;
    protected description: string;
    protected link: string;
    protected isOfficialUsauResource: boolean;
    protected courtesyOf: string;
    protected resourceFormat?: ResourceFormat;

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
            courtesyOf = '',
            resourceFormat
        }: ResourceProperties) {
        this.resourceType = resourceType;
        this.id = id;
        this.imageSourceUrl = imageSourceUrl;
        this.title = title;
        this.description = description;
        this.link = link;
        this.isOfficialUsauResource = isOfficialUsauResource;
        this.courtesyOf = courtesyOf;
        this.resourceFormat = resourceFormat as ResourceFormat;

        this.populateFooterChips();
    }

    public render(): JSX.Element {
        return (
            <div className="resource-card">
                {/* Image */}
                <div className="resource-card-image-container">
                    <a href={this.link} target="_blank" rel="noopener noreferrer">
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
                        <a href={this.link} target="_blank" rel="noopener noreferrer" className="resource-link">
                            {this.title}
                        </a>
                    </div>
                    <hr className="resource-card-horizontal-separator" />
                    <div className="resource-card-long-description">
                        <a href={this.link} target="_blank" rel="noopener noreferrer" className="resource-link">
                            {this.description}
                        </a>
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
                <div className="description-footer-chip footer-chip-official-usau-resource">
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

        if (this.resourceFormat) {
            tempChips.push(
                <div className={`description-footer-chip ${formatToClassNameMap[this.resourceFormat]}`}>
                    {formatToTextMap[this.resourceFormat]}
                </div>
            );
        }

        if (this.courtesyOf && this.courtesyOf.trim() !== '') {
            tempChips.push(
                <div className="description-footer-chip footer-chip-white">
                    <em>Courtesy of&nbsp;<b>{this.courtesyOf}</b></em>
                </div>
            );
        }

        // Space them out
        for (let i = 0; i < tempChips.length; i++) {
            if (i > 0) this.footerChips.push(<span>&nbsp;</span>);
            this.footerChips.push(tempChips[i]);
        }
    }
}

export default Resource;