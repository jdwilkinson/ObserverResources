abstract class Resource {
    protected id: string;
    protected isOfficialUsauResource: boolean;

    constructor(id: string, isOfficialUsauResource: boolean) {
        this.id = id;
        this.isOfficialUsauResource = isOfficialUsauResource;
    }

    abstract render(): JSX.Element;
}

export default Resource;