"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const category_1 = require("./category");
const lodash_1 = require("lodash");
describe('Category Unit Tests', function () {
    test('contructor of category', function () {
        let category = new category_1.Category({ name: "Movie" });
        let props = (0, lodash_1.omit)(category.props, 'created_at');
        expect(props).toStrictEqual({
            name: "Movie",
            description: "Description",
            is_active: true
        });
        expect(category.created_at).toBeInstanceOf(Date);
        // expect(category.name).toBe('Movie');
        // expect(category.description).toBe('Description');
        // expect(category.is_active).toBeTruthy();
    });
});
