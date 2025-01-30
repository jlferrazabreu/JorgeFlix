export type categoryProperties ={
    name: string,
    description?: string,
    is_active?: boolean,
    created_at?: Date,
};
export class Category{
    constructor(public readonly props: categoryProperties ){}
    get name(): string{
        return this.props.name;
    }
    get description(){
        return this.props.description;
    }
    is_active(){
        return this.props.is_active;
    }
    created_at(){
        return this.props.created_at;
    }
}