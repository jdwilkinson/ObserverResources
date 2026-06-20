export interface ResourceProperties {
    id: string;
    imageSourceUrl: string;
    description: string;
    link: string;
    isOfficialUsauResource?: boolean;
    courtesyOf?: string;
}

abstract class Resource {
    protected resourceType: string;
    protected id: string;
    protected imageSourceUrl: string;
    protected description: string;
    protected link: string;
    protected isOfficialUsauResource: boolean;
    protected courtesyOf: string;

    constructor(
        resourceType: string,
        {
            id,
            imageSourceUrl,
            description,
            link,
            isOfficialUsauResource = false,
            courtesyOf = '',
        }: ResourceProperties) {
        this.resourceType = resourceType;
        this.id = id;
        this.imageSourceUrl = imageSourceUrl;
        this.description = description;
        this.link = link;
        this.isOfficialUsauResource = isOfficialUsauResource;
        this.courtesyOf = courtesyOf;
    }

    public render(): JSX.Element {
        return (
            <div className="resource-card">
                <div className="resource-card-image-container">
                    {/* Image */}
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

                {/* Description */}
                <div className="resource-card-description">
                    {this.description}
                    {this.getPostDescriptionFooter()}
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

    private getPostDescriptionFooter(): JSX.Element {
        if (this.isOfficialUsauResource) {
            return (<>
                <br />
                <img
                    src='/img/usau-logo.svg'
                    width='80'
                    height='38'
                    alt='Official USAU resource'
                    title='Official USAU resource'
                />
            </>);
        }
        if (this.courtesyOf && this.courtesyOf.trim() !== '') {
            return (<>
                <br />
                <small>
                    <em>Courtesy of <b>{this.courtesyOf}</b>
                    </em>
                </small>
            </>);
        }
        return (<></>);
    }
}

export default Resource;