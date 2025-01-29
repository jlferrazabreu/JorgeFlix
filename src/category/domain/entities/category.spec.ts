import { Category } from "./category";

describe('Category Tests', function () : void{
    test('contructor of category', function () : void {
        const category = new Category( 'Movie');
        expect(category.name).toBe('Movie');
    })
});
