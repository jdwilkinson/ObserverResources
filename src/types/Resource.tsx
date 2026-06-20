export interface ResourceProperties {
    id: string;
    imageSourceUrl: string;
    description: string;
    longDescription?: string;
    link: string;
    isOfficialUsauResource?: boolean;
    courtesyOf?: string;
}

abstract class Resource {
    protected resourceType: string;
    protected id: string;
    protected imageSourceUrl: string;
    protected description: string;
    protected longDescription: string;
    protected link: string;
    protected isOfficialUsauResource: boolean;
    protected courtesyOf: string;

    private footerChips: JSX.Element[] = [];

    constructor(
        resourceType: string,
        {
            id,
            imageSourceUrl,
            description,
            longDescription = '',
            link,
            isOfficialUsauResource = false,
            courtesyOf = '',
        }: ResourceProperties) {
        this.resourceType = resourceType;
        this.id = id;
        this.imageSourceUrl = imageSourceUrl;
        this.description = description;
        this.longDescription = longDescription;
        this.link = link;
        this.isOfficialUsauResource = isOfficialUsauResource;
        this.courtesyOf = courtesyOf;

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
                        {this.description}
                    </div>
                    <hr className="resource-card-horizontal-separator" />
                    <div className="resource-card-long-description">
                        {this.longDescription}
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
        return this.description;
    }

    private populateFooterChips() {
        if (this.isOfficialUsauResource) {
            this.footerChips.push(
                <div className="description-footer-chip footer-chip-yellow">
                    <img
                        src='/img/usau-logo.svg'
                        width='30'
                        alt='Official USAU resource'
                        title='Official USAU resource'
                    />
                    &nbsp;
                    <span>Official resource</span>
                </div>
            );
        }

        if (this.courtesyOf && this.courtesyOf.trim() !== '') {
            this.footerChips.push(
                <div className="description-footer-chip footer-chip-purple">
                    Courtesy of&nbsp;<b>{this.courtesyOf}</b>
                </div>
            );
        }
    }
}

export default Resource;