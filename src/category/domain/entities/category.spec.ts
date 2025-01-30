import { Category } from "./category";

describe('Category Unit Tests', function () : void{
    test('contructor of category', function () : void {
        const created_at = new Date();
        const category = new Category({
            name: "Movie", 
            description: "Description",
            is_active: true,
            created_at,
        });

         expect(category.props).toMatchObject({
             name: "Movie", 
             description: "Description",
             is_active: true,
             created_at,
         });

        // expect(category.name).toBe('Movie');
        // expect(category.description).toBe('Description');
        // expect(category.is_active).toBeTruthy();
        // expect(category.created_at).toBe(created_at);
    });
});
