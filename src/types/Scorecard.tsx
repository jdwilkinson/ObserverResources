import Resource from "./Resource";

class Scorecard extends Resource {
    private imageSource: string;
    private imageWidth: number;
    private imageHeight: number;
    private description: string;
    private author: string;
    private link: string;

    private constructor(
        id: string,
        isOfficialUsauResource: boolean,
        imageSource: string,
        imageWidth: number,
        imageHeight: number,
        description: string,
        author: string,
        link: string,
    ) {
        super(id, isOfficialUsauResource);
        this.imageSource = imageSource;
        this.imageWidth = imageWidth;
        this.imageHeight = imageHeight;
        this.description = description;
        this.author = author;
        this.link = link;
    }

    static createFromObject(obj: any): Scorecard {
        return new Scorecard(
            obj.id,
            obj.isOfficialUsauResource,
            obj.imageSource,
            obj.imageWidth,
            obj.imageHeight,
            obj.description,
            obj.author,
            obj.link,
        );
    }

    render(): JSX.Element {
        return (
            <div className="scorecard">
                <a href={this.link} target="_blank" rel="noopener noreferrer">
                    <img
                        src={this.imageSource}
                        width={this.imageWidth}
                        height={this.imageHeight}
                        alt={
                            this.isOfficialUsauResource ?
                                'Official USAU scorecard' :
                                `Scorecard by ${this.author}`
                        }
                    />
                </a>
                <p>{this.description}
                    <br />
                    {this.isOfficialUsauResource ?
                        <img src='/img/usau-logo.svg' alt='Official USAU resource' width='80' height='38' /> :
                        <small><em>Courtesy of <b>{this.author}</b></em></small>}
                </p>
            </div>
        );
    }
}

export default Scorecard;